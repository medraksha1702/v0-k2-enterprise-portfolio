'use client'

import { useEffect, useRef, useState } from 'react'

interface RevealProps {
  children: React.ReactNode
  /** Delay in ms before the animation starts (used for staggering). */
  delay?: number
  /** Animation variant. */
  variant?: 'up' | 'fade' | 'scale' | 'left' | 'right'
  className?: string
}

/**
 * Scroll-triggered reveal wrapper using IntersectionObserver.
 * Animates its children into view the first time they enter the viewport.
 */
export function Reveal({ children, delay = 0, variant = 'up', className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Respect users who prefer reduced motion.
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms`, animationDelay: `${delay}ms` }}
      className={`reveal reveal-${variant} ${className}`}
    >
      {children}
    </div>
  )
}
