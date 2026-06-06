'use client'

import { useRef } from 'react'

interface TiltProps {
  children: React.ReactNode
  className?: string
  /** Max tilt in degrees. */
  max?: number
}

/** Wraps content and tilts it toward the cursor in 3D on hover (pointer devices only). */
export function Tilt({ children, className = '', max = 7 }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotateX = (0.5 - py) * max * 2
    const rotateY = (px - 0.5) * max * 2
    el.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.02)`
  }

  const handleLeave = () => {
    const el = ref.current
    if (el) el.style.transform = ''
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`[transform-style:preserve-3d] [transition:transform_0.25s_ease-out] motion-reduce:!transform-none ${className}`}
    >
      {children}
    </div>
  )
}
