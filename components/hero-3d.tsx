'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return

    const container = containerRef.current
    const canvas = canvasRef.current

    let width = container.clientWidth || 500
    let height = container.clientHeight || 500

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

    // Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100)
    camera.position.set(0, 0, 10)
    scene.add(camera)

    // Lighting (clinical, bright highlights)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0)
    scene.add(ambientLight)

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.5)
    dirLight1.position.set(5, 10, 7)
    scene.add(dirLight1)

    const dirLight2 = new THREE.DirectionalLight(0x00f2fe, 1.5)
    dirLight2.position.set(-5, -5, 5)
    scene.add(dirLight2)

    // Screen Glow Point Light (syncs with heartbeat)
    const screenLight = new THREE.PointLight(0x22c55e, 0.5, 5)
    screenLight.position.set(0, 0, 0.5)
    scene.add(screenLight)

    // Main Monitor Group (for floating & rotation)
    const monitorGroup = new THREE.Group()
    scene.add(monitorGroup)

    // --- PROCEDURAL 3D MEDICAL MONITOR ---

    // 1. Casing / Body (Tesla/Apple clinical silver-gray rounded look)
    const bodyGeom = new THREE.BoxGeometry(3.6, 2.6, 0.4)
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x334155, // Slate gray
      roughness: 0.2,
      metalness: 0.7,
    })
    const bodyMesh = new THREE.Mesh(bodyGeom, bodyMat)
    monitorGroup.add(bodyMesh)

    // Back Panel (recessed connector section)
    const backGeom = new THREE.BoxGeometry(3.0, 2.0, 0.3)
    const backMesh = new THREE.Mesh(backGeom, bodyMat)
    backMesh.position.z = -0.3
    monitorGroup.add(backMesh)

    // Stand Mount Base
    const standGeom = new THREE.CylinderGeometry(0.2, 0.3, 0.6, 16)
    const standMesh = new THREE.Mesh(standGeom, bodyMat)
    standMesh.position.y = -1.5
    monitorGroup.add(standMesh)

    // 2. Bezel & Screen Face
    const screenGeom = new THREE.BoxGeometry(3.3, 2.3, 0.05)
    const screenMat = new THREE.MeshStandardMaterial({
      color: 0x050b14, // Deep black screen
      roughness: 0.1,
      metalness: 0.9,
    })
    const screenMesh = new THREE.Mesh(screenGeom, screenMat)
    screenMesh.position.z = 0.21
    monitorGroup.add(screenMesh)

    // 3. Grid Lines on Screen (diagnostic helper look)
    const gridHelperGroup = new THREE.Group()
    const gridCols = 12
    const gridRows = 8
    const gridMat = new THREE.LineBasicMaterial({
      color: 0x112233,
      transparent: true,
      opacity: 0.4,
    })

    // Vertical grid lines
    for (let i = 1; i < gridCols; i++) {
      const x = -1.65 + (i * 3.3) / gridCols
      const points = [new THREE.Vector3(x, -1.15, 0.24), new THREE.Vector3(x, 1.15, 0.24)]
      const geom = new THREE.BufferGeometry().setFromPoints(points)
      gridHelperGroup.add(new THREE.Line(geom, gridMat))
    }
    // Horizontal grid lines
    for (let i = 1; i < gridRows; i++) {
      const y = -1.15 + (i * 2.3) / gridRows
      const points = [new THREE.Vector3(-1.65, y, 0.24), new THREE.Vector3(1.65, y, 0.24)]
      const geom = new THREE.BufferGeometry().setFromPoints(points)
      gridHelperGroup.add(new THREE.Line(geom, gridMat))
    }
    monitorGroup.add(gridHelperGroup)

    // 4. Multiple Blinking Bezel LEDs
    const ledGeom = new THREE.SphereGeometry(0.05, 12, 12)
    
    // LED 1: Power indicator (solid/pulse green)
    const ledPowerMat = new THREE.MeshBasicMaterial({ color: 0x22c55e })
    const ledPower = new THREE.Mesh(ledGeom, ledPowerMat)
    ledPower.position.set(1.4, 1.1, 0.22)
    monitorGroup.add(ledPower)

    // LED 2: Pulse sync indicator (flashes green on beat)
    const ledSyncMat = new THREE.MeshBasicMaterial({ color: 0x050b14 })
    const ledSync = new THREE.Mesh(ledGeom, ledSyncMat)
    ledSync.position.set(1.52, 1.1, 0.22)
    monitorGroup.add(ledSync)

    // LED 3: Alarm indicator (flashes yellow/red)
    const ledAlarmMat = new THREE.MeshBasicMaterial({ color: 0xca8a04 })
    const ledAlarm = new THREE.Mesh(ledGeom, ledAlarmMat)
    ledAlarm.position.set(1.28, 1.1, 0.22)
    monitorGroup.add(ledAlarm)

    // 5. Screen Heart Pulse Icon (procedural mesh)
    const heartShape = new THREE.Shape()
    heartShape.moveTo(0, 0)
    heartShape.bezierCurveTo(0, 0.1, -0.1, 0.2, -0.2, 0.2)
    heartShape.bezierCurveTo(-0.35, 0.2, -0.4, 0.05, -0.4, -0.1)
    heartShape.bezierCurveTo(-0.4, -0.25, -0.2, -0.4, 0, -0.5)
    heartShape.bezierCurveTo(0.2, -0.4, 0.4, -0.25, 0.4, -0.1)
    heartShape.bezierCurveTo(0.4, 0.05, 0.35, 0.2, 0.2, 0.2)
    heartShape.bezierCurveTo(0.1, 0.2, 0, 0.1, 0, 0)

    const heartGeom = new THREE.ShapeGeometry(heartShape)
    const heartMat = new THREE.MeshBasicMaterial({ color: 0x22c55e })
    const heartMesh = new THREE.Mesh(heartGeom, heartMat)
    heartMesh.scale.set(0.25, 0.25, 0.25)
    heartMesh.position.set(-1.4, 0.8, 0.24)
    monitorGroup.add(heartMesh)

    // 6. Real-Time Sweeping Waveforms Setup
    const waveLength = 160
    const ecgPoints: THREE.Vector3[] = []
    const spo2Points: THREE.Vector3[] = []
    
    // Arrays containing active screen values
    const ecgValues = new Float32Array(waveLength)
    const spo2Values = new Float32Array(waveLength)
    let sweepIndex = 0

    // Initialize coordinate buffers
    for (let i = 0; i < waveLength; i++) {
      const x = -1.5 + (i * 3.0) / waveLength
      ecgPoints.push(new THREE.Vector3(x, 0.2, 0.24))
      spo2Points.push(new THREE.Vector3(x, -0.4, 0.24))
      ecgValues[i] = 0
      spo2Values[i] = 0
    }

    const ecgGeometry = new THREE.BufferGeometry().setFromPoints(ecgPoints)
    const ecgMaterial = new THREE.LineBasicMaterial({
      color: 0x22c55e, // Clinical green
      linewidth: 3,
    })
    const ecgLine = new THREE.Line(ecgGeometry, ecgMaterial)
    monitorGroup.add(ecgLine)

    const spo2Geometry = new THREE.BufferGeometry().setFromPoints(spo2Points)
    const spo2Material = new THREE.LineBasicMaterial({
      color: 0x00f2fe, // Cyan SpO2
      linewidth: 2,
    })
    const spo2Line = new THREE.Line(spo2Geometry, spo2Material)
    monitorGroup.add(spo2Line)

    // Scanning visual line sweep bar
    const sweepBarGeom = new THREE.BoxGeometry(0.04, 1.8, 0.01)
    const sweepBarMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.8,
    })
    const sweepBar = new THREE.Mesh(sweepBarGeom, sweepBarMat)
    sweepBar.position.set(-1.5, -0.1, 0.24)
    monitorGroup.add(sweepBar)

    setLoading(false)

    // Interactive mouse positioning
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

    container.addEventListener('mousemove', handleMouseMove)

    // Animation Loop
    let clock = new THREE.Clock()
    let animationFrameId: number

    const tick = () => {
      const elapsedTime = clock.getElapsedTime()

      // 1. Slow, clinical float (translated y coordinate)
      monitorGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.20

      // 2. Advance the real-time sweep index
      const pointsToUpdate = 2
      const beatInterval = 1.25 // Time between heartbeats (approx 80bpm)
      const timeInBeat = elapsedTime % beatInterval

      for (let s = 0; s < pointsToUpdate; s++) {
        sweepIndex = (sweepIndex + 1) % waveLength

        // Calculate new ECG wave point based on heartbeat progression
        let newEcgVal = 0
        if (timeInBeat < 0.35) {
          const t = timeInBeat / 0.35 // Normalized beat progression
          
          if (t > 0.05 && t < 0.15) {
            // P-wave
            newEcgVal = Math.sin((t - 0.05) * Math.PI / 0.1) * 0.08
          } else if (t >= 0.18 && t < 0.22) {
            // Q-wave
            newEcgVal = -0.1
          } else if (t >= 0.22 && t < 0.28) {
            // R-wave tall spike
            const rProgress = (t - 0.22) / 0.06
            newEcgVal = -0.1 + rProgress * 0.95
          } else if (t >= 0.28 && t < 0.33) {
            // S-wave drop
            const sProgress = (t - 0.28) / 0.05
            newEcgVal = 0.85 - sProgress * 1.1
          } else if (t >= 0.33 && t < 0.38) {
            // Return to baseline
            const rProgress = (t - 0.33) / 0.05
            newEcgVal = -0.25 + rProgress * 0.25
          } else if (t >= 0.42 && t < 0.55) {
            // T-wave
            newEcgVal = Math.sin((t - 0.42) * Math.PI / 0.13) * 0.18
          }
        }

        ecgValues[sweepIndex] = newEcgVal

        // Generate SpO2 sine respiratory wave
        spo2Values[sweepIndex] = Math.sin(elapsedTime * 4.5 + sweepIndex * 0.06) * 0.12 + Math.cos(elapsedTime * 2.0) * 0.03
      }

      // 3. Update ECG & SpO2 coordinate buffers
      const ecgPositions = ecgGeometry.attributes.position.array as Float32Array
      const spo2Positions = spo2Geometry.attributes.position.array as Float32Array
      const gapWidth = 10

      for (let i = 0; i < waveLength; i++) {
        const idx = i * 3
        const isGap = (i >= sweepIndex && i < sweepIndex + gapWidth) || 
                      (sweepIndex + gapWidth >= waveLength && i < (sweepIndex + gapWidth) % waveLength)

        if (isGap) {
          // Flatten lines inside scanning gap
          ecgPositions[idx + 1] = 0.2
          spo2Positions[idx + 1] = -0.4
        } else {
          ecgPositions[idx + 1] = 0.2 + ecgValues[i]
          spo2Positions[idx + 1] = -0.4 + spo2Values[i]
        }
      }
      ecgGeometry.attributes.position.needsUpdate = true
      spo2Geometry.attributes.position.needsUpdate = true

      // 4. Move scanning line sweep bar
      const barX = -1.5 + (sweepIndex * 3.0) / waveLength
      sweepBar.position.x = barX

      // 5. Bezel LEDs animation
      // Power LED stays green
      ledPowerMat.color.setHex(0x22c55e)

      // Sync LED flashes on heartbeat spike
      if (timeInBeat > 0.20 && timeInBeat < 0.32) {
        ledSyncMat.color.setHex(0x22c55e) // Flashes bright green
        heartMat.color.setHex(0x22c55e)
        // Pulsing screen lighting glow in sync
        screenLight.intensity = 1.2
        heartMesh.scale.set(0.32, 0.32, 0.25)
      } else {
        ledSyncMat.color.setHex(0x052e16) // Dark green state
        heartMat.color.setHex(0x166534)
        screenLight.intensity = 0.4
        heartMesh.scale.set(0.25, 0.25, 0.25)
      }

      // Alarm LED flashes yellow/orange
      if (Math.floor(elapsedTime * 2.0) % 2 === 0) {
        ledAlarmMat.color.setHex(0xeab308) // Bright yellow
      } else {
        ledAlarmMat.color.setHex(0x713f12) // Dim orange/brown
      }

      // 6. Camera Tilt Parallax
      currentX += (targetX - currentX) * 0.05
      currentY += (targetY - currentY) * 0.05
      
      monitorGroup.rotation.y = currentX * 0.26 + elapsedTime * 0.05
      monitorGroup.rotation.x = -currentY * 0.18

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
      
      // Dispose WebGL Resources
      bodyGeom.dispose()
      bodyMat.dispose()
      backGeom.dispose()
      standGeom.dispose()
      screenGeom.dispose()
      screenMat.dispose()
      gridMat.dispose()
      ledGeom.dispose()
      ledPowerMat.dispose()
      ledSyncMat.dispose()
      ledAlarmMat.dispose()
      heartGeom.dispose()
      heartMat.dispose()
      ecgGeometry.dispose()
      ecgMaterial.dispose()
      spo2Geometry.dispose()
      spo2Material.dispose()
      sweepBarGeom.dispose()
      sweepBarMat.dispose()
      
      gridHelperGroup.traverse((child) => {
        if (child instanceof THREE.Line) {
          child.geometry.dispose()
          if (Array.isArray(child.material)) child.material.forEach(m => m.dispose())
          else child.material.dispose()
        }
      })
      
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
      {/* Soft Cyan Ambient Glow behind screen */}
      <div className="absolute w-[65%] h-[65%] rounded-full bg-primary/10 blur-3xl pointer-events-none -z-10 animate-pulse" />
      <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  )
}
