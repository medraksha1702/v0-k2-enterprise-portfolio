'use client'

import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  /** The display value, e.g. "7+", "24×7", "Pan-India". Leading digits count up; the rest is appended. */
  value: string
  duration?: number
  className?: string
}

/**
 * Counts the leading integer of `value` up from 0 when it scrolls into view,
 * then appends the remainder (so "7+" counts 0→7 then shows "+"). Values with
 * no leading digit (e.g. "Pan-India") render statically.
 */
export function CountUp({ value, duration = 1400, className = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : null
  const suffix = match ? match[2] : ''
  const [display, setDisplay] = useState(target === null ? value : `0${suffix}`)

  useEffect(() => {
    if (target === null) return
    const node = ref.current
    if (!node) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setDisplay(`${target}${suffix}`)
      return
    }

    let raf = 0
    let start = 0
    const run = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(`${Math.round(eased * target)}${suffix}`)
      if (progress < 1) raf = requestAnimationFrame(run)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          raf = requestAnimationFrame(run)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [target, suffix, duration])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
