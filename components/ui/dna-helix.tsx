'use client'

import { useEffect, useRef } from 'react'

interface DnaHelixProps {
  className?: string
  height?: number
  width?: number
}

export function DnaHelix({ className = '', height = 400, width = 120 }: DnaHelixProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animFrameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)

    let time = 0
    const STRANDS = 12        // base pair count
    const SPEED = 0.025

    // Detect dark mode
    const isDark = () => document.documentElement.classList.contains('dark')

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      time += SPEED

      const dark = isDark()
      const primaryColor = dark ? 'rgba(0, 242, 254,' : 'rgba(0, 75, 77,'
      const accentColor  = dark ? 'rgba(16, 185, 129,' : 'rgba(0, 120, 130,'

      const cx = width / 2
      const amplitude = width * 0.32

      // Draw two intertwined sine strands + connecting rungs
      for (let i = 0; i <= STRANDS; i++) {
        const t = (i / STRANDS)
        const y = t * height

        const phase1 = t * Math.PI * 3.5 + time
        const phase2 = phase1 + Math.PI

        const x1 = cx + Math.sin(phase1) * amplitude
        const x2 = cx + Math.sin(phase2) * amplitude

        // Depth-based alpha (simulate 3D by dimming points "behind")
        const depth1 = (Math.sin(phase1) + 1) / 2    // 0..1
        const depth2 = (Math.sin(phase2) + 1) / 2

        const a1 = 0.3 + depth1 * 0.7
        const a2 = 0.3 + depth2 * 0.7

        // Connecting rung (base pair)
        if (i < STRANDS) {
          const ySeg = y + height / STRANDS / 2
          const phase1m = ((i + 0.5) / STRANDS) * Math.PI * 3.5 + time
          const phase2m = phase1m + Math.PI
          const xm1 = cx + Math.sin(phase1m) * amplitude
          const xm2 = cx + Math.sin(phase2m) * amplitude
          const rungAlpha = 0.15 + ((Math.sin(phase1m) + 1) / 2) * 0.3

          ctx.beginPath()
          ctx.moveTo(xm1, ySeg)
          ctx.lineTo(xm2, ySeg)
          ctx.strokeStyle = `${accentColor}${rungAlpha})`
          ctx.lineWidth = 1.5
          ctx.stroke()
        }

        // Strand 1 node
        const r1 = 3.5 + depth1 * 2.5
        const grad1 = ctx.createRadialGradient(x1, y, 0, x1, y, r1 * 2)
        grad1.addColorStop(0, `${primaryColor}${a1})`)
        grad1.addColorStop(1, `${primaryColor}0)`)
        ctx.beginPath()
        ctx.arc(x1, y, r1, 0, Math.PI * 2)
        ctx.fillStyle = grad1
        ctx.fill()

        // Strand 2 node
        const r2 = 3.5 + depth2 * 2.5
        const grad2 = ctx.createRadialGradient(x2, y, 0, x2, y, r2 * 2)
        grad2.addColorStop(0, `${accentColor}${a2})`)
        grad2.addColorStop(1, `${accentColor}0)`)
        ctx.beginPath()
        ctx.arc(x2, y, r2, 0, Math.PI * 2)
        ctx.fillStyle = grad2
        ctx.fill()
      }

      // Draw continuous backbone curve (strand 1)
      ctx.beginPath()
      for (let i = 0; i <= STRANDS * 4; i++) {
        const t = i / (STRANDS * 4)
        const y = t * height
        const phase = t * Math.PI * 3.5 + time
        const x = cx + Math.sin(phase) * amplitude
        const alpha = 0.2 + ((Math.sin(phase) + 1) / 2) * 0.4
        if (i === 0) ctx.moveTo(x, y)
        else {
          ctx.lineTo(x, y)
          ctx.strokeStyle = `${primaryColor}${alpha})`
          ctx.lineWidth = 1.2
          ctx.stroke()
          ctx.beginPath()
          ctx.moveTo(x, y)
        }
      }

      // Draw continuous backbone curve (strand 2)
      ctx.beginPath()
      for (let i = 0; i <= STRANDS * 4; i++) {
        const t = i / (STRANDS * 4)
        const y = t * height
        const phase = t * Math.PI * 3.5 + time + Math.PI
        const x = cx + Math.sin(phase) * amplitude
        const alpha = 0.2 + ((Math.sin(phase) + 1) / 2) * 0.4
        if (i === 0) ctx.moveTo(x, y)
        else {
          ctx.lineTo(x, y)
          ctx.strokeStyle = `${accentColor}${alpha})`
          ctx.lineWidth = 1.2
          ctx.stroke()
          ctx.beginPath()
          ctx.moveTo(x, y)
        }
      }

      animFrameRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animFrameRef.current)
    }
  }, [width, height])

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={className}
      style={{ width, height }}
    />
  )
}
