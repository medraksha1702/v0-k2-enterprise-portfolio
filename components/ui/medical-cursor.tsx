'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function MedicalCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)

  // Main ring follows with spring lag (premium trailing effect)
  const springX = useSpring(cursorX, { stiffness: 200, damping: 28, mass: 0.5 })
  const springY = useSpring(cursorY, { stiffness: 200, damping: 28, mass: 0.5 })

  const isHoveringRef = useRef(false)
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      dotX.set(e.clientX)
      dotY.set(e.clientY)
    }

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, label, [data-cursor-pointer]')
      isHoveringRef.current = !!isInteractive
      if (ringRef.current) {
        ringRef.current.style.transform = isInteractive
          ? 'translate(-50%, -50%) scale(1.8)'
          : 'translate(-50%, -50%) scale(1)'
        ringRef.current.style.opacity = isInteractive ? '1' : '0.75'
        ringRef.current.style.borderColor = isInteractive
          ? 'rgba(0, 242, 254, 0.9)'
          : 'rgba(0, 242, 254, 0.5)'
      }
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    window.addEventListener('mouseover', handleOver, { passive: true })

    // Hide default cursor globally
    document.documentElement.style.cursor = 'none'

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handleOver)
      document.documentElement.style.cursor = ''
    }
  }, [cursorX, cursorY, dotX, dotY])

  return (
    <>
      {/* Outer precision ring — trails with spring */}
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
        style={{ x: springX, y: springY }}
      >
        <div
          className="relative w-9 h-9 -translate-x-1/2 -translate-y-1/2 transition-all duration-200"
          style={{ borderRadius: '50%' }}
        >
          {/* Main crosshair ring */}
          <div className="absolute inset-0 rounded-full border border-cyan-400/50 transition-all duration-200" />

          {/* Pulsing outer glow ring */}
          <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-ping" />

          {/* Crosshair tick marks — clinical precision look */}
          {/* Top */}
          <div className="absolute top-0 left-1/2 -translate-x-px -translate-y-1.5 w-px h-1.5 bg-cyan-400/70" />
          {/* Bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-px translate-y-1.5 w-px h-1.5 bg-cyan-400/70" />
          {/* Left */}
          <div className="absolute left-0 top-1/2 -translate-y-px -translate-x-1.5 h-px w-1.5 bg-cyan-400/70" />
          {/* Right */}
          <div className="absolute right-0 top-1/2 -translate-y-px translate-x-1.5 h-px w-1.5 bg-cyan-400/70" />
        </div>
      </motion.div>

      {/* Center precision dot — snaps to cursor instantly */}
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
        style={{ x: dotX, y: dotY }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_6px_2px_rgba(0,242,254,0.6)]" />
      </motion.div>
    </>
  )
}
