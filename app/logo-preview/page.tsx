'use client'

import { useState } from 'react'
import { LogoAnimation } from '@/components/logo-animation'

export default function LogoPreviewPage() {
  // key bump lets you replay the entrance animation
  const [key, setKey] = useState(0)

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center gap-12 p-8">
      <div className="absolute inset-0 bg-grid opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="relative flex flex-col items-center gap-12">
        <div key={key} className="flex flex-col items-center gap-10">
          <LogoAnimation size="lg" />
          <LogoAnimation size="md" />
          <LogoAnimation size="sm" showTagline={false} />
        </div>

        <button
          onClick={() => setKey((k) => k + 1)}
          className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
        >
          Replay animation
        </button>
      </div>
    </main>
  )
}
