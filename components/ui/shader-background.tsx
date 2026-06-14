'use client'

import React, { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

// Vertex shader program: simple full-screen quad
const VERTEX_SHADER_SOURCE = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`

// Fragment shader: transparent overlay — only animated grid/wave lines rendered
const FRAGMENT_SHADER_SOURCE = `
  precision mediump float;
  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_mouse;
  uniform float u_opacity;
  uniform float u_mobile;
  uniform float u_is_dark;

  float drawLine(vec2 uv, float y, float thickness, float glow) {
    float d = abs(uv.y - y);
    if (u_mobile > 0.5) {
      return (thickness / (d + 0.004)) * glow;
    }
    return (thickness / (d + 0.001)) + pow(thickness / (d + 0.016), 1.5) * glow;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);

    // Mouse glow (very faint radial highlight near cursor)
    vec2 mouse = (u_mouse.x == 0.0 && u_mouse.y == 0.0) ? vec2(0.5) : u_mouse;
    float mouseGlow = clamp(1.0 - distance(uv, mouse) * 1.8, 0.0, 1.0);

    // Grid lines — teal in dark, muted slate-blue in light
    float gridDensity = u_mobile > 0.5 ? 20.0 : 32.0;
    vec2 gridUv = uv * vec2(gridDensity, gridDensity * (u_resolution.y / u_resolution.x));
    vec2 gridFract = fract(gridUv);
    vec2 gridLine = smoothstep(0.97, 1.0, gridFract) + smoothstep(0.03, 0.0, gridFract);
    float grid = max(gridLine.x, gridLine.y);

    // Edge fade for grid
    float gridFade = smoothstep(0.0, 0.2, uv.x) * smoothstep(1.0, 0.8, uv.x)
                   * smoothstep(0.0, 0.2, uv.y) * smoothstep(1.0, 0.8, uv.y);

    // Intersection dots (desktop only)
    float dotPattern = 0.0;
    if (u_mobile < 0.5) {
      vec2 gd = smoothstep(0.90, 1.0, gridFract) * smoothstep(0.10, 0.0, gridFract);
      dotPattern = gd.x * gd.y * 0.6;
    }

    // Grid colour — teal for dark, soft blue-grey for light
    vec3 gridColorDark  = vec3(0.0, 0.72, 0.78);   // #00b8c7
    vec3 gridColorLight = vec3(0.35, 0.58, 0.70);  // muted slate-cyan
    vec3 gridColor = mix(gridColorLight, gridColorDark, u_is_dark);

    // Mouse proximity brightens the grid slightly
    float gridAlpha = (grid + dotPattern) * gridFade * mix(0.10, 0.18, u_is_dark);
    gridAlpha += (grid + dotPattern) * mouseGlow * gridFade * 0.06;

    // ECG / heartbeat wave — bright cyan in dark, deeper teal in light
    vec3 waveColorDark  = vec3(0.0, 0.92, 1.0);   // #00ebff
    vec3 waveColorLight = vec3(0.0, 0.48, 0.60);  // deep teal
    vec3 waveColor = mix(waveColorLight, waveColorDark, u_is_dark);
    float waveAlpha = 0.0;

    if (u_mobile < 0.5) {
      float xScaled = p.x * 1.5;
      float waveX = xScaled - u_time * 0.65;
      float localX = mod(waveX, 6.28318);

      float y2 = 0.0;
      if (localX > 1.2 && localX < 2.7) {
        float px = (localX - 1.2) / 1.5;
        if (px < 0.2) {
          y2 = sin(px * 15.707) * 0.05;           // P wave
        } else if (px >= 0.2 && px < 0.5) {
          float qx = (px - 0.2) / 0.3;
          y2 = sin(qx * 9.42478) * 0.32;          // QRS
        } else if (px >= 0.5 && px < 0.8) {
          float tx = (px - 0.5) / 0.3;
          y2 = sin(tx * 3.14159) * 0.08;          // T wave
        }
      } else {
        y2 = sin(xScaled * 7.0 + u_time * 1.4) * 0.003; // baseline micro-noise
      }

      float xFade = smoothstep(-1.5, -0.7, p.x) * smoothstep(1.5, 0.7, p.x);
      float glow2 = drawLine(vec2(p.x, p.y - 0.03), y2, 0.0012, 0.55);
      waveAlpha = glow2 * xFade * mix(0.45, 0.75, u_is_dark);
    } else {
      float y2 = sin(p.x * 2.8 - u_time * 0.55) * 0.025;
      float xFade = smoothstep(-1.2, -0.5, p.x) * smoothstep(1.2, 0.5, p.x);
      float glow2 = drawLine(vec2(p.x, p.y - 0.03), y2, 0.0008, 0.25);
      waveAlpha = glow2 * xFade * mix(0.3, 0.5, u_is_dark);
    }

    // Compose: fully transparent background, only additive lines/dots/waves
    vec3 finalColor = gridColor * gridAlpha + waveColor * waveAlpha;
    float finalAlpha = clamp(gridAlpha + waveAlpha, 0.0, 1.0) * u_opacity;

    gl_FragColor = vec4(finalColor, finalAlpha);
  }
`


interface ShaderBackgroundProps {
  opacity?: number
}

function compileShader(
  gl: WebGLRenderingContext,
  source: string,
  type: number
): WebGLShader | null {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compiler error:', gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
    return null
  }
  return shader
}

function createProgram(
  gl: WebGLRenderingContext,
  vsSource: string,
  fsSource: string
): WebGLProgram | null {
  const vs = compileShader(gl, vsSource, gl.VERTEX_SHADER)
  const fs = compileShader(gl, fsSource, gl.FRAGMENT_SHADER)
  if (!vs || !fs) return null
  
  const program = gl.createProgram()
  if (!program) return null
  
  gl.attachShader(program, vs)
  gl.attachShader(program, fs)
  gl.linkProgram(program)
  
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('WebGL Program link error:', gl.getProgramInfoLog(program))
    gl.deleteProgram(program)
    return null
  }
  
  gl.deleteShader(vs)
  gl.deleteShader(fs)
  
  return program
}

export function ShaderBackground({ opacity = 0.85 }: ShaderBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 })
  const animationFrameIdRef = useRef<number | null>(null)
  const isPausedRef = useRef(false)
  
  const { resolvedTheme } = useTheme()
  const themeRef = useRef(resolvedTheme)

  useEffect(() => {
    themeRef.current = resolvedTheme
  }, [resolvedTheme])

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const gl = canvas.getContext('webgl', {
      alpha: true,
      depth: false,
      stencil: false,
      antialias: false,
      premultipliedAlpha: false,
      preserveDrawingBuffer: false,
      powerPreference: 'high-performance',
    })

    if (!gl) {
      console.warn('WebGL is not supported in this browser. Falling back to background color.')
      return
    }

    const program = createProgram(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE)
    if (!program) return

    gl.useProgram(program)

    // Lookup uniforms
    const uResolutionLoc = gl.getUniformLocation(program, 'u_resolution')
    const uTimeLoc = gl.getUniformLocation(program, 'u_time')
    const uMouseLoc = gl.getUniformLocation(program, 'u_mouse')
    const uOpacityLoc = gl.getUniformLocation(program, 'u_opacity')
    const uMobileLoc = gl.getUniformLocation(program, 'u_mobile')
    const uIsDarkLoc = gl.getUniformLocation(program, 'u_is_dark')

    const vertices = new Float32Array([
      -1.0, -1.0,
       1.0, -1.0,
      -1.0,  1.0,
      -1.0,  1.0,
       1.0, -1.0,
       1.0,  1.0,
    ])

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

    const positionLoc = gl.getAttribLocation(program, 'position')
    gl.enableVertexAttribArray(positionLoc)
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseRef.current.targetX = (e.clientX - rect.left) / rect.width
      mouseRef.current.targetY = 1.0 - (e.clientY - rect.top) / rect.height
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    let startTime = performance.now()
    let lastTime = startTime

    const checkIsMobile = () => {
      if (typeof window === 'undefined') return false
      return window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }

    const render = () => {
      if (isPausedRef.current) return

      const now = performance.now()
      const elapsed = (now - startTime) / 1000.0

      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08

      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)

      gl.useProgram(program)
      
      const isMobile = checkIsMobile()
      const isDark = themeRef.current === 'dark' || themeRef.current === undefined
      
      gl.uniform2f(uResolutionLoc, canvas.width, canvas.height)
      gl.uniform1f(uTimeLoc, elapsed)
      gl.uniform2f(uMouseLoc, mouseRef.current.x, mouseRef.current.y)
      gl.uniform1f(uOpacityLoc, opacity)
      gl.uniform1f(uMobileLoc, isMobile ? 1.0 : 0.0)
      gl.uniform1f(uIsDarkLoc, isDark ? 1.0 : 0.0)

      gl.drawArrays(gl.TRIANGLES, 0, 6)

      animationFrameIdRef.current = requestAnimationFrame(render)
    }

    const resizeCanvas = () => {
      const isMobile = checkIsMobile()
      const dpr = isMobile ? 1.0 : Math.min(window.devicePixelRatio || 1, 1.5)
      
      const rect = container.getBoundingClientRect()
      const width = Math.floor(rect.width)
      const height = Math.floor(rect.height)

      if (canvas.width !== Math.floor(width * dpr) || canvas.height !== Math.floor(height * dpr)) {
        canvas.width = Math.floor(width * dpr)
        canvas.height = Math.floor(height * dpr)
        gl.viewport(0, 0, canvas.width, canvas.height)
      }
    }

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas()
    })
    resizeObserver.observe(container)

    resizeCanvas()
    
    animationFrameIdRef.current = requestAnimationFrame(render)

    let isTabVisible = document.visibilityState === 'visible'
    let isElementIntersecting = false

    const updatePauseState = (newTabVisible: boolean, newIntersecting: boolean) => {
      const wasPaused = isPausedRef.current
      isTabVisible = newTabVisible
      isElementIntersecting = newIntersecting
      const shouldPause = !(isTabVisible && isElementIntersecting)

      if (shouldPause !== wasPaused) {
        isPausedRef.current = shouldPause
        if (shouldPause) {
          lastTime = performance.now()
          if (animationFrameIdRef.current) {
            cancelAnimationFrame(animationFrameIdRef.current)
          }
        } else {
          startTime += (performance.now() - lastTime)
          animationFrameIdRef.current = requestAnimationFrame(render)
        }
      }
    }

    const handleVisibilityChange = () => {
      updatePauseState(document.visibilityState === 'visible', isElementIntersecting)
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        updatePauseState(isTabVisible, entry.isIntersecting)
      })
    }, { threshold: 0.01 })
    intersectionObserver.observe(container)

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current)
      }
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      
      gl.deleteBuffer(buffer)
      gl.deleteProgram(program)
    }
  }, [opacity])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ mixBlendMode: 'screen' }}
      />
    </div>
  )
}
