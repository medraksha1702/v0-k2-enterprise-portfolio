'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function HeroBgWave() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return

    const container = containerRef.current
    const canvas = canvasRef.current

    let width = container.clientWidth
    let height = container.clientHeight

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, height)

    // Scene
    const scene = new THREE.Scene()

    // Camera (angled looking down at the particle field)
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100)
    camera.position.set(0, 3.5, 6)
    camera.lookAt(0, 0.2, 0)

    // Create 3D Waving Particle Grid
    const numCols = 45
    const numRows = 45
    const numParticles = numCols * numRows

    const positions = new Float32Array(numParticles * 3)
    const colors = new Float32Array(numParticles * 3)

    // Primary & Secondary color tokens in HSL
    const colorPrimary = new THREE.Color(0x006d6f) // Dark Teal
    const colorSecondary = new THREE.Color(0x00f2fe) // Bright Cyan

    let index = 0
    for (let iy = 0; iy < numRows; iy++) {
      for (let ix = 0; ix < numCols; ix++) {
        // Grid spacing from -4 to 4
        const x = (ix / numCols) * 10 - 5
        const y = 0
        const z = (iy / numRows) * 10 - 5

        positions[index] = x
        positions[index + 1] = y
        positions[index + 2] = z

        // Color interpolation (creates a gradient across the wave)
        const mixedColor = colorPrimary.clone().lerp(colorSecondary, ix / numCols)
        colors[index] = mixedColor.r
        colors[index + 1] = mixedColor.g
        colors[index + 2] = mixedColor.b

        index += 3
      }
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    // Particle texture
    const material = new THREE.PointsMaterial({
      size: 0.07,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
      depthWrite: false,
    })

    const particleSystem = new THREE.Points(geometry, material)
    scene.add(particleSystem)

    // Mouse interactive shift
    let mouseX = 0
    let targetMouseX = 0

    const handleMouseMove = (event: MouseEvent) => {
      targetMouseX = (event.clientX / window.innerWidth) * 2 - 1
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Animation Loop
    let clock = new THREE.Clock()
    let animationFrameId: number

    const tick = () => {
      const elapsedTime = clock.getElapsedTime()
      const positionAttr = geometry.attributes.position.array as Float32Array

      let idx = 0
      for (let iy = 0; iy < numRows; iy++) {
        for (let ix = 0; ix < numCols; ix++) {
          const x = positionAttr[idx]
          const z = positionAttr[idx + 2]

          // Sinusoidal wave ripple formulas
          const wave1 = Math.sin(x * 0.45 + elapsedTime * 1.4) * Math.cos(z * 0.45 + elapsedTime * 1.4)
          const wave2 = Math.sin(x * 0.2 + elapsedTime * 0.8) * 0.3
          
          // Set particle height (Y coordinate)
          positionAttr[idx + 1] = (wave1 + wave2) * 0.55

          idx += 3
        }
      }
      geometry.attributes.position.needsUpdate = true

      // Slow mouse parallax camera shift
      mouseX += (targetMouseX - mouseX) * 0.03
      particleSystem.rotation.y = mouseX * 0.12

      renderer.render(scene, camera)
      animationFrameId = requestAnimationFrame(tick)
    }

    tick()

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return
      width = container.clientWidth
      height = container.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    const resizeObserver = new ResizeObserver(() => handleResize())
    resizeObserver.observe(container)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      resizeObserver.disconnect()
      
      // Dispose WebGL Resources
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-80 dark:opacity-60">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
