'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number; y: number
  vx: number; vy: number
  radius: number
  alpha: number
}

interface ParticleNetworkProps {
  className?: string
  nodeCount?: number
  connectionDistance?: number
  speed?: number
}

const isMobileDevice = () =>
  typeof window !== 'undefined' &&
  (window.innerWidth < 768 || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent))

export function ParticleNetwork({
  className = '',
  nodeCount = 40,
  connectionDistance = 130,
  speed = 0.3,
}: ParticleNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const pausedRef = useRef(false)
  const particlesRef = useRef<Particle[]>([])
  const pointerRef = useRef({ x: -999, y: -999 })

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const mobile = isMobileDevice()
    // Reduce complexity on mobile for smooth 60fps
    const effectiveNodes = mobile ? Math.floor(nodeCount * 0.5) : nodeCount
    const effectiveDist  = mobile ? connectionDistance * 0.7 : connectionDistance
    const effectiveSpeed = mobile ? speed * 0.6 : speed

    const isDark = () => document.documentElement.classList.contains('dark')

    const resize = () => {
      const { width, height } = container.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
      particlesRef.current = Array.from({ length: effectiveNodes }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * effectiveSpeed,
        vy: (Math.random() - 0.5) * effectiveSpeed,
        radius: mobile ? 1 + Math.random() * 1.5 : 1.5 + Math.random() * 2,
        alpha: 0.25 + Math.random() * 0.45,
      }))
    }
    resize()

    const ro = new ResizeObserver(resize)
    ro.observe(container)

    // Mouse (desktop) + touch (mobile) pointer tracking
    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointerRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const handleTouch = (e: TouchEvent) => {
      if (!e.touches[0]) return
      const rect = canvas.getBoundingClientRect()
      pointerRef.current = {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      }
    }
    window.addEventListener('mousemove', handleMouse, { passive: true })
    window.addEventListener('touchmove', handleTouch, { passive: true })

    const draw = () => {
      if (pausedRef.current) return
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)

      const dark = isDark()
      const nodeColor = dark ? '0, 242, 254' : '0, 75, 77'
      const lineColor = dark ? '0, 180, 210' : '0, 100, 110'
      const particles  = particlesRef.current

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width)  p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
      }

      // Pointer attraction — works for both mouse and touch
      const { x: px, y: py } = pointerRef.current
      for (const p of particles) {
        const dx = px - p.x; const dy = py - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 120 && dist > 0) {
          p.x += (dx / dist) * 0.12
          p.y += (dy / dist) * 0.12
        }
      }

      // Connection lines — skip O(n²) on very small mobile screens
      if (!mobile || width > 480) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x
            const dy = particles[i].y - particles[j].y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < effectiveDist) {
              const opacity = (1 - dist / effectiveDist) * (mobile ? 0.12 : 0.18)
              ctx.beginPath()
              ctx.moveTo(particles[i].x, particles[i].y)
              ctx.lineTo(particles[j].x, particles[j].y)
              ctx.strokeStyle = `rgba(${lineColor}, ${opacity})`
              ctx.lineWidth = mobile ? 0.5 : 0.8
              ctx.stroke()
            }
          }
        }
      }

      for (const p of particles) {
        const r = p.radius
        // Glow ring
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 3)
        grad.addColorStop(0, `rgba(${nodeColor}, ${p.alpha})`)
        grad.addColorStop(1, `rgba(${nodeColor}, 0)`)
        ctx.beginPath(); ctx.arc(p.x, p.y, r * 3, 0, Math.PI * 2)
        ctx.fillStyle = grad; ctx.fill()
        // Core dot
        ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${nodeColor}, ${p.alpha})`; ctx.fill()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    // IntersectionObserver — pause when off-screen to save GPU
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        pausedRef.current = !e.isIntersecting
        if (e.isIntersecting) rafRef.current = requestAnimationFrame(draw)
        else cancelAnimationFrame(rafRef.current)
      })
    }, { threshold: 0.01 })
    io.observe(container)

    // Tab visibility
    const handleVis = () => {
      pausedRef.current = document.visibilityState !== 'visible'
      if (!pausedRef.current) rafRef.current = requestAnimationFrame(draw)
      else cancelAnimationFrame(rafRef.current)
    }
    document.addEventListener('visibilitychange', handleVis)

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      io.disconnect()
      window.removeEventListener('mousemove', handleMouse)
      window.removeEventListener('touchmove', handleTouch)
      document.removeEventListener('visibilitychange', handleVis)
    }
  }, [nodeCount, connectionDistance, speed])

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
