'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'

interface LogoAnimationProps {
  className?: string
  showTagline?: boolean
  size?: 'sm' | 'md' | 'lg'
  /** When true, the glow/shimmer loop forever. Turn off for a calm header logo. */
  loop?: boolean
}

const sizes = {
  sm: { img: 'h-10 w-auto', word: 'text-base', tag: 'text-[10px]' },
  md: { img: 'h-16 w-auto', word: 'text-xl', tag: 'text-xs' },
  lg: { img: 'h-28 w-auto', word: 'text-3xl md:text-4xl', tag: 'text-sm' },
}

/** Whole lockup glides in from the left, children stagger left -> right. */
const container: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
}

const fromLeft: Variants = {
  hidden: { opacity: 0, x: -18 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

const markVar: Variants = {
  hidden: { opacity: 0, x: -40, scale: 0.7 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 16 },
  },
}

export function LogoAnimation({ className = '', showTagline = true, size = 'lg', loop = true }: LogoAnimationProps) {
  const s = sizes[size]

  return (
    <motion.div
      className={`inline-flex items-center gap-3 ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Logo mark — original artwork, colors preserved */}
      <motion.div variants={markVar} className="relative shrink-0">
        {/* soft brand-teal glow behind the mark — pulses on loop, static otherwise */}
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-full bg-primary/30 blur-xl"
          animate={loop ? { opacity: [0.25, 0.55, 0.25], scale: [0.9, 1.1, 0.9] } : { opacity: 0.3 }}
          transition={loop ? { duration: 2.6, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.6 }}
        />

        <div className="relative overflow-hidden">
          <Image
            src="/k2-enterprise-logo.png"
            alt="K² Enterprise Logo"
            width={1393}
            height={1129}
            className={s.img}
            priority
          />
          {/* subtle light shimmer sweep over the mark */}
          <motion.span
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(120deg, transparent 35%, rgba(255,255,255,0.5) 50%, transparent 65%)',
            }}
            initial={{ x: '-130%' }}
            animate={{ x: '130%' }}
            transition={
              loop
                ? { duration: 1.6, repeat: Infinity, repeatDelay: 2.2, ease: 'easeInOut' }
                : { duration: 1.2, delay: 0.5, ease: 'easeInOut' }
            }
          />
        </div>
      </motion.div>

      {/* Wordmark — "K²" already lives in the mark, so only "Enterprise" here */}
      <div className="flex flex-col">
        <motion.span
          variants={fromLeft}
          className={`font-bold tracking-tight text-foreground leading-none ${s.word}`}
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          Enterprise
        </motion.span>
        {showTagline && (
          <motion.span
            variants={fromLeft}
            className={`slogan-flow mt-1 font-medium tracking-wide ${s.tag}`}
          >
            Where Precision Meets Dedication.
          </motion.span>
        )}
      </div>
    </motion.div>
  )
}
