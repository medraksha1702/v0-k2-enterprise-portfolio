'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useTheme } from 'next-themes'

export function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [loading, setLoading] = useState(true)

  const { resolvedTheme } = useTheme()
  const themeRef = useRef(resolvedTheme)

  useEffect(() => {
    themeRef.current = resolvedTheme
  }, [resolvedTheme])

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return

    const container = containerRef.current
    const canvas = canvasRef.current

    let width = container.clientWidth || 500
    let height = container.clientHeight || 500

    // WebGL Renderer with performance configurations
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

    // Camera (angled looking down at the hologram)
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100)
    camera.position.set(0, 1.2, 5.0)
    camera.lookAt(new THREE.Vector3(0, 0, 0))
    scene.add(camera)

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5)
    dirLight.position.set(5, 8, 5)
    scene.add(dirLight)

    // Central glowing point light for holographic glow
    const glowLight = new THREE.PointLight(0x00f2fe, 2, 6)
    glowLight.position.set(0, 0, 0)
    scene.add(glowLight)

    // Main Hologram Group (tilts with mouse parallax)
    const holoGroup = new THREE.Group()
    holoGroup.position.y = -0.2 // center vertically
    scene.add(holoGroup)

    // --- 3D HOLOGRAPHIC MEDICAL SYSTEM ---

    // Materials (Initial Colors)
    const crossMat = new THREE.MeshStandardMaterial({
      color: 0x00f2fe,
      roughness: 0.1,
      metalness: 0.1,
      transparent: true,
      opacity: 0.75,
      emissive: 0x00f2fe,
      emissiveIntensity: 1.2,
      side: THREE.DoubleSide,
    })

    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide,
    })

    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide,
    })

    const hexMat = new THREE.LineBasicMaterial({
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.5,
    })

    const iconMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide,
    })

    const lineIconMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.85,
    })

    // 1. Concentric HUD Rings Base (horizontal Y = -0.8)
    const baseGroup = new THREE.Group()
    baseGroup.position.y = -0.8
    holoGroup.add(baseGroup)

    // Solid outer ring
    const ring1Geom = new THREE.RingGeometry(1.5, 1.54, 64)
    const ring1Mesh = new THREE.Mesh(ring1Geom, ringMat1)
    ring1Mesh.rotation.x = -Math.PI / 2
    baseGroup.add(ring1Mesh)

    // Segmented inner ring (dashed simulation)
    const ring2Geom = new THREE.RingGeometry(1.2, 1.23, 64)
    const ring2Mesh = new THREE.Mesh(ring2Geom, ringMat2)
    ring2Mesh.rotation.x = -Math.PI / 2
    baseGroup.add(ring2Mesh)

    // Central circular projection core
    const ring3Geom = new THREE.RingGeometry(0, 0.4, 32)
    const ring3Mesh = new THREE.Mesh(ring3Geom, new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide,
    }))
    ring3Mesh.rotation.x = -Math.PI / 2
    baseGroup.add(ring3Mesh)

    // 12-dot telemetry ring
    const dotsGroup = new THREE.Group()
    const dotGeom = new THREE.SphereGeometry(0.025, 8, 8)
    for (let i = 0; i < 12; i++) {
      const angle = (i * Math.PI * 2) / 12
      const dot = new THREE.Mesh(dotGeom, ringMat1)
      dot.position.set(Math.cos(angle) * 0.9, 0, Math.sin(angle) * 0.9)
      dotsGroup.add(dot)
    }
    baseGroup.add(dotsGroup)

    // 2. Central Pulsating 3D Medical Cross
    const crossGroup = new THREE.Group()
    crossGroup.position.y = 0.2
    holoGroup.add(crossGroup)

    // Horizontal bar
    const bar1 = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.28, 0.28), crossMat)
    crossGroup.add(bar1)

    // Vertical bar
    const bar2 = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.85, 0.28), crossMat)
    crossGroup.add(bar2)

    // 3. Floating Hexagonal Nodes with Vector Clinical Icons
    const nodesGroup = new THREE.Group()
    holoGroup.add(nodesGroup)

    // Helper to build Hexagon Geometry
    const buildHexGeometry = (size: number) => {
      const shape = new THREE.Shape()
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3
        const x = Math.cos(angle) * size
        const y = Math.sin(angle) * size
        if (i === 0) shape.moveTo(x, y)
        else shape.lineTo(x, y)
      }
      shape.closePath()
      return new THREE.EdgesGeometry(new THREE.ShapeGeometry(shape))
    }

    const hexWireGeom = buildHexGeometry(0.32)

    // Clinical Icon: Heart
    const heartShape = new THREE.Shape()
    heartShape.moveTo(0, 0)
    heartShape.bezierCurveTo(0, 0.08, -0.08, 0.16, -0.16, 0.16)
    heartShape.bezierCurveTo(-0.28, 0.16, -0.32, 0.04, -0.32, -0.08)
    heartShape.bezierCurveTo(-0.32, -0.2, -0.16, -0.32, 0, -0.4)
    heartShape.bezierCurveTo(0.16, -0.32, 0.32, -0.2, 0.32, -0.08)
    heartShape.bezierCurveTo(0.32, 0.04, 0.28, 0.16, 0.16, 0.16)
    heartShape.bezierCurveTo(0.08, 0.16, 0, 0.08, 0, 0)
    const heartGeom = new THREE.ShapeGeometry(heartShape)
    heartGeom.center()
    const heartMesh = new THREE.Mesh(heartGeom, iconMat)
    heartMesh.scale.set(0.38, 0.38, 0.38)
    heartMesh.position.z = 0.01

    // Clinical Icon: ECG Wave
    const ecgPoints = [
      new THREE.Vector3(-0.15, 0, 0),
      new THREE.Vector3(-0.07, 0, 0),
      new THREE.Vector3(-0.04, 0.15, 0),
      new THREE.Vector3(0, -0.16, 0),
      new THREE.Vector3(0.04, 0.18, 0),
      new THREE.Vector3(0.08, 0, 0),
      new THREE.Vector3(0.15, 0, 0),
    ]
    const ecgGeom = new THREE.BufferGeometry().setFromPoints(ecgPoints)
    const ecgLine = new THREE.Line(ecgGeom, lineIconMat)
    ecgLine.position.z = 0.01

    // Clinical Icon: Plus Symbol
    const plusIconGroup = new THREE.Group()
    const horizPlus = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.05, 0.01), iconMat)
    const vertPlus = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.18, 0.01), iconMat)
    plusIconGroup.add(horizPlus, vertPlus)
    plusIconGroup.position.z = 0.01

    // Clinical Icon: Activity Sine Wave
    const wavePoints = []
    for (let j = 0; j <= 20; j++) {
      const xVal = -0.15 + (j * 0.3) / 20
      const yVal = Math.sin(j * 0.6) * 0.08
      wavePoints.push(new THREE.Vector3(xVal, yVal, 0))
    }
    const waveGeom = new THREE.BufferGeometry().setFromPoints(wavePoints)
    const waveLine = new THREE.Line(waveGeom, lineIconMat)
    waveLine.position.z = 0.01

    // Setup 4 Nodes
    const nodeConfigurations = [
      { pos: new THREE.Vector3(-1.3, 0.6, 0.4), icon: heartMesh },
      { pos: new THREE.Vector3(1.3, 0.8, -0.4), icon: ecgLine },
      { pos: new THREE.Vector3(-0.9, 1.2, -0.6), icon: plusIconGroup },
      { pos: new THREE.Vector3(0.9, 1.1, 0.5), icon: waveLine },
    ]

    const nodes: THREE.Group[] = []

    nodeConfigurations.forEach((config) => {
      const node = new THREE.Group()
      node.position.copy(config.pos)
      
      // Wireframe Hexagon
      const hexLine = new THREE.LineSegments(hexWireGeom, hexMat)
      node.add(hexLine)
      
      // Internal Icon
      node.add(config.icon)
      
      nodesGroup.add(node)
      nodes.push(node)
    })

    // 4. Vertical Particle Stream (Holographic rays rising from base)
    const particleCount = 60
    const particlePositions = new Float32Array(particleCount * 3)
    const particleSpeeds = new Float32Array(particleCount)
    
    // Initialize particles coordinates in a cylinder
    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3
      const radius = Math.random() * 1.3
      const angle = Math.random() * Math.PI * 2
      
      particlePositions[idx] = Math.cos(angle) * radius // X
      particlePositions[idx + 1] = -0.8 + Math.random() * 2.5 // Y
      particlePositions[idx + 2] = Math.sin(angle) * radius // Z
      
      particleSpeeds[i] = 0.006 + Math.random() * 0.012
    }

    const particleGeom = new THREE.BufferGeometry()
    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))

    const particleMat = new THREE.PointsMaterial({
      color: 0x00f2fe,
      size: 0.045,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    })

    const particles = new THREE.Points(particleGeom, particleMat)
    holoGroup.add(particles)

    setLoading(false)

    // Interactive mouse parallax positioning
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      targetX = (x / width) * 2 - 1
      targetY = -(y / height) * 2 + 1
    }

    container.addEventListener('mousemove', handleMouseMove, { passive: true })

    // Theme color interpolation setup
    const getThemeColors = (isDark: boolean) => {
      if (isDark) {
        return {
          primary: new THREE.Color(0x00f2fe),   // Cyan glow
          secondary: new THREE.Color(0x10b981), // Emerald telemetry
          accent: new THREE.Color(0xffffff),    // White icons
        }
      } else {
        return {
          primary: new THREE.Color(0x008ba3),   // Deep high-contrast cyan
          secondary: new THREE.Color(0x0f766e), // Clinical teal
          accent: new THREE.Color(0x0f172a),    // Dark slate icons
        }
      }
    }

    const isInitialDark = themeRef.current === 'dark' || themeRef.current === undefined
    const initColors = getThemeColors(isInitialDark)

    const currentPrimary = initColors.primary.clone()
    const currentSecondary = initColors.secondary.clone()
    const currentAccent = initColors.accent.clone()

    // Animation Loop
    let clock = new THREE.Clock()
    let animationFrameId: number

    const tick = () => {
      const elapsedTime = clock.getElapsedTime()

      // 1. Interpolate theme colors dynamically on changes
      const isDark = themeRef.current === 'dark' || themeRef.current === undefined
      const targetColors = getThemeColors(isDark)
      
      currentPrimary.lerp(targetColors.primary, 0.08)
      currentSecondary.lerp(targetColors.secondary, 0.08)
      currentAccent.lerp(targetColors.accent, 0.08)

      // Apply interpolated colors to materials
      crossMat.color.copy(currentPrimary)
      crossMat.emissive.copy(currentPrimary)
      ringMat1.color.copy(currentPrimary)
      ringMat2.color.copy(currentSecondary)
      hexMat.color.copy(currentSecondary)
      iconMat.color.copy(currentAccent)
      lineIconMat.color.copy(currentAccent)
      particleMat.color.copy(currentPrimary)
      glowLight.color.copy(currentPrimary)

      // 2. Central cross floating and pulsing animations
      crossGroup.position.y = 0.2 + Math.sin(elapsedTime * 1.8) * 0.12
      crossGroup.rotation.y = elapsedTime * 0.45
      
      // Pulsate scale slightly
      const crossPulse = 1.0 + Math.sin(elapsedTime * 3.6) * 0.04
      crossGroup.scale.set(crossPulse, crossPulse, crossPulse)

      // Pulsate glow light intensity
      glowLight.intensity = 1.8 + Math.sin(elapsedTime * 4.0) * 0.6

      // 3. HUD Base Rings rotations
      ring1Mesh.rotation.z = -elapsedTime * 0.15
      ring2Mesh.rotation.z = elapsedTime * 0.3
      dotsGroup.rotation.y = -elapsedTime * 0.22

      // 4. Hexagonal nodes bobbing and facing camera
      nodes.forEach((node, idx) => {
        const offset = idx * Math.PI * 0.5
        node.position.y = nodeConfigurations[idx].pos.y + Math.sin(elapsedTime * 1.5 + offset) * 0.08
        
        // Keep hexagons slightly angled facing the camera
        node.rotation.y = Math.sin(elapsedTime * 0.3 + offset) * 0.12
      })

      // 5. Rise particles up through the hologram
      const positions = particleGeom.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3
        positions[idx + 1] += particleSpeeds[i] // rising Y

        // Reset particle if it goes too high
        if (positions[idx + 1] > 1.8) {
          positions[idx + 1] = -0.8
          const radius = Math.random() * 1.3
          const angle = Math.random() * Math.PI * 2
          positions[idx] = Math.cos(angle) * radius
          positions[idx + 2] = Math.sin(angle) * radius
        }
      }
      particleGeom.attributes.position.needsUpdate = true

      // 6. Smooth Mouse Parallax (Tilts whole hologram)
      currentX += (targetX - currentX) * 0.05
      currentY += (targetY - currentY) * 0.05
      
      holoGroup.rotation.y = currentX * 0.28
      holoGroup.rotation.x = -currentY * 0.18

      // Render
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
      container.removeEventListener('mousemove', handleMouseMove)
      resizeObserver.disconnect()

      // Dispose Geometries and Materials
      ring1Geom.dispose()
      ring2Geom.dispose()
      ring3Geom.dispose()
      dotGeom.dispose()
      crossMat.dispose()
      ringMat1.dispose()
      ringMat2.dispose()
      hexMat.dispose()
      hexWireGeom.dispose()
      heartGeom.dispose()
      iconMat.dispose()
      ecgGeom.dispose()
      lineIconMat.dispose()
      waveGeom.dispose()
      particleGeom.dispose()
      particleMat.dispose()

      renderer.dispose()
    }
  }, [])

  return (
    <div ref={containerRef} className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[520px] flex items-center justify-center overflow-hidden">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-10 h-10 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
        </div>
      )}
      {/* Soft dynamic background glow */}
      <div className="absolute w-[60%] h-[60%] rounded-full bg-primary/5 blur-3xl pointer-events-none -z-10 animate-pulse" />
      <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  )
}
