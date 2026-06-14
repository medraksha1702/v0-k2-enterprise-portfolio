'use client'

import { motion } from 'framer-motion'

export function TechDivider() {
  return (
    <div className="relative w-full h-10 overflow-hidden pointer-events-none select-none -my-5 z-20">
      <svg className="w-full h-full text-primary/20 dark:text-primary/10" viewBox="0 0 1200 40" preserveAspectRatio="none" fill="none">
        {/* Continuous baseline */}
        <path
          d="M0,20 L450,20 L470,32 L490,8 L510,32 L530,20 L670,20 L690,32 L710,8 L730,32 L750,20 L1200,20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Secondary design line running offset */}
        <path
          d="M100,20 L350,20 L360,25 L440,25 L450,20 M750,20 L760,25 L840,25 L850,20 L1100,20"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.5"
        />
      </svg>
      
      {/* Pulsing neon nodes on the peaks */}
      <div className="absolute top-[20px] left-[39.5%] w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
      <div className="absolute top-[20px] left-[61.5%] w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
    </div>
  )
}
