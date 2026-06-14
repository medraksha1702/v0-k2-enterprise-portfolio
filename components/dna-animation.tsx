'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function DnaAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return

    const container = containerRef.current
    const canvas = canvasRef.current

    let width = container.clientWidth
    let height = container.clientHeight

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setSize(width, height)

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 50)
    camera.position.z = 8
    scene.add(camera)

    // Objects Group
    const dnaGroup = new THREE.Group()
    scene.add(dnaGroup)

    // Generate DNA strands
    const strandPointCount = 50
    const radius = 1.4
    const length = 7
    const rotations = 2.5

    const positionsStrand1 = []
    const positionsStrand2 = []
    const linePairs = []

    for (let i = 0; i < strandPointCount; i++) {
      const fraction = i / strandPointCount
      const angle = fraction * Math.PI * 2 * rotations
      const y = (fraction - 0.5) * length

      // Strand 1
      const x1 = Math.cos(angle) * radius
      const z1 = Math.sin(angle) * radius
      positionsStrand1.push(x1, y, z1)

      // Strand 2 (offset by 180 degrees)
      const x2 = Math.cos(angle + Math.PI) * radius
      const z2 = Math.sin(angle + Math.PI) * radius
      positionsStrand2.push(x2, y, z2)

      // Connection rungs
      if (i % 2 === 0) {
        linePairs.push(x1, y, z1)
        linePairs.push(x2, y, z2)
      }
    }

    // Geometries
    const geomStrand1 = new THREE.BufferGeometry()
    geomStrand1.setAttribute('position', new THREE.Float32BufferAttribute(positionsStrand1, 3))

    const geomStrand2 = new THREE.BufferGeometry()
    geomStrand2.setAttribute('position', new THREE.Float32BufferAttribute(positionsStrand2, 3))

    const geomRungs = new THREE.BufferGeometry()
    geomRungs.setAttribute('position', new THREE.Float32BufferAttribute(linePairs, 3))

    // Materials
    const materialStrand = new THREE.PointsMaterial({
      color: 0x00f2fe,
      size: 0.12,
      transparent: true,
      opacity: 0.8,
    })

    const materialRungs = new THREE.LineBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.35,
    })

    // Mesh / Objects
    const pointsStrand1 = new THREE.Points(geomStrand1, materialStrand)
    const pointsStrand2 = new THREE.Points(geomStrand2, materialStrand)
    const rungs = new THREE.LineSegments(geomRungs, materialRungs)

    dnaGroup.add(pointsStrand1)
    dnaGroup.add(pointsStrand2)
    dnaGroup.add(rungs)

    // Set initial tilt
    dnaGroup.rotation.x = 0.4
    dnaGroup.rotation.z = 0.2

    // Animation Loop
    let animationFrameId: number
    const clock = new THREE.Clock()

    const tick = () => {
      const time = clock.getElapsedTime()

      // Spin the DNA helix
      dnaGroup.rotation.y = time * 0.15

      // Ripple effect on nodes
      const pos1 = geomStrand1.attributes.position.array as Float32Array
      const pos2 = geomStrand2.attributes.position.array as Float32Array
      
      for (let i = 0; i < strandPointCount; i++) {
        const idx = i * 3
        const originalAngle = (i / strandPointCount) * Math.PI * 2 * rotations
        const fraction = i / strandPointCount
        const currentAngle = originalAngle + time * 0.5 // dynamic breathing

        // Modify radius based on wave
        const waveRadius = radius + Math.sin(time * 2 + fraction * 10) * 0.15

        pos1[idx] = Math.cos(currentAngle) * waveRadius
        pos1[idx + 2] = Math.sin(currentAngle) * waveRadius

        pos2[idx] = Math.cos(currentAngle + Math.PI) * waveRadius
        pos2[idx + 2] = Math.sin(currentAngle + Math.PI) * waveRadius
      }

      geomStrand1.attributes.position.needsUpdate = true
      geomStrand2.attributes.position.needsUpdate = true

      // Rebuild connection lines (since positions ripple)
      const linePositions = geomRungs.attributes.position.array as Float32Array
      let lineIdx = 0
      for (let i = 0; i < strandPointCount; i++) {
        if (i % 2 === 0) {
          const idx = i * 3
          // Set start point (Strand 1 coordinate)
          linePositions[lineIdx] = pos1[idx]
          linePositions[lineIdx + 1] = pos1[idx + 1]
          linePositions[lineIdx + 2] = pos1[idx + 2]

          // Set end point (Strand 2 coordinate)
          linePositions[lineIdx + 3] = pos2[idx]
          linePositions[lineIdx + 4] = pos2[idx + 1]
          linePositions[lineIdx + 5] = pos2[idx + 2]
          
          lineIdx += 6
        }
      }
      geomRungs.attributes.position.needsUpdate = true

      renderer.render(scene, camera)
      animationFrameId = requestAnimationFrame(tick)
    }

    tick()

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

    return () => {
      cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
      
      geomStrand1.dispose()
      geomStrand2.dispose()
      geomRungs.dispose()
      materialStrand.dispose()
      materialRungs.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full opacity-[0.12] dark:opacity-[0.08] pointer-events-none select-none z-0">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
