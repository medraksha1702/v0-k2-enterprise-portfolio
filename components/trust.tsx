'use client'

import { Zap, Shield, Target, Boxes, Award } from 'lucide-react'
import { Reveal } from './reveal'
import { motion } from 'framer-motion'

export function Trust() {
  const reasons = [
    {
      icon: Boxes,
      title: 'Multi-Brand Expertise',
      description: 'Skilled service and support across multiple leading biomedical and laboratory equipment brands.'
    },
    {
      icon: Zap,
      title: 'Fast Response',
      description: 'Quick troubleshooting and reliable technical assistance.'
    },
    {
      icon: Shield,
      title: 'Professional Standards',
      description: 'Quality-focused service with proper documentation and support.'
    },
    {
      icon: Target,
      title: 'Cost-Effective Solutions',
      description: 'Reliable solutions designed to maximize equipment performance and value.'
    },
  ]

  // Subtle floating biomedical icons (2-5% opacity)
  const floatingIcons = [
    { Icon: Shield, top: '20%', left: '8%', size: 30, speed: 10 },
    { Icon: Target, top: '70%', left: '6%', size: 26, speed: 14 },
    { Icon: Boxes, top: '15%', left: '88%', size: 32, speed: 11 },
    { Icon: Award, top: '75%', left: '85%', size: 28, speed: 13 },
  ]

  return (
    <section className="relative py-20 sm:py-28 bg-muted/10 overflow-hidden">
      {/* High-Tech Background Glows */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] dark:opacity-[0.06] -z-10">
        <div className="absolute -top-10 left-1/4 w-80 h-80 bg-primary rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary rounded-full blur-[90px] animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Blueprint Grid Overlay (Subtle 2.5% opacity, clinical engineering look) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,109,111,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,109,111,0.025)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,109,111,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,109,111,0.01)_1px,transparent_1px)] bg-[size:8px_8px] pointer-events-none z-0" />

      {/* Floating Biomedical Icons (Subtle, 3-5% opacity) */}
      {floatingIcons.map(({ Icon, top, left, size, speed }, index) => (
        <motion.div
          key={`icon-${index}`}
          className="absolute text-primary/5 pointer-events-none z-0 hidden sm:block"
          style={{ top, left }}
          animate={{
            y: [-12, 12, -12],
            rotate: [-8, 8, -8],
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.5,
          }}
        >
          <Icon size={size} strokeWidth={1} />
        </motion.div>
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <Reveal>
          <div className="space-y-4 mb-16 max-w-3xl">
            <span className="inline-block text-sm font-semibold text-primary bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
              Our Promise
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight" style={{ fontFamily: 'var(--font-poppins)' }}>
              Why Choose Us
            </h2>
            <div className="accent-line w-20 h-1 bg-primary/25 rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              We combine hands-on technical expertise, fast response, and dependable service to keep your biomedical and laboratory equipment running at peak performance — minimizing downtime and protecting your investment.
            </p>
          </div>
        </Reveal>

        {/* Reasons Card Carousel (Glassmorphic) */}
        <div className="marquee-track relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="marquee gap-6 py-4">
            {[...reasons, ...reasons].map((reason, i) => {
              const Icon = reason.icon
              return (
                <div
                  key={i}
                  className="group relative w-[300px] shrink-0 overflow-hidden rounded-2xl glass-card p-6 border border-primary/15 bg-card/25 backdrop-blur-xl shadow-lg hover:border-primary/40 transition-all duration-300"
                >
                  {/* Glowing Spotlight on Hover */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  
                  {/* Icon Frame */}
                  <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:ring-primary/40 transition-all duration-300">
                    <Icon className="w-5.5 h-5.5 text-primary" />
                  </div>
                  
                  <h3 className="relative text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{reason.title}</h3>
                  <p className="relative text-sm text-muted-foreground leading-relaxed font-light">{reason.description}</p>
                  
                  {/* Bottom neon accent line */}
                  <span className="pointer-events-none absolute bottom-0 left-0 h-0.75 w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-500 group-hover:w-full" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
