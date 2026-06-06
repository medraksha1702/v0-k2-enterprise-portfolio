'use client'

import { Zap, Shield, Target, Boxes } from 'lucide-react'
import { Reveal } from './reveal'

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

  return (
    <section className="relative py-20 md:py-28 bg-secondary/5 overflow-hidden">
      {/* ambient floating blobs */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="absolute -top-10 left-1/4 w-80 h-80 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="space-y-4 mb-16">
            <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full">
              Our Promise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance" style={{ fontFamily: 'var(--font-poppins)' }}>
              Why Choose Us
            </h2>
            {/* animated accent line (light sweeps left -> right) */}
            <div className="accent-line" />
            <p className="text-lg text-muted-foreground">
              We combine hands-on technical expertise, fast response, and dependable service to keep your biomedical and laboratory equipment running at peak performance — minimizing downtime and protecting your investment.
            </p>
          </div>
        </Reveal>

        {/* Reasons — auto-moving card carousel (glides left -> right, pauses on hover) */}
        <div className="marquee-track relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="marquee gap-4 py-2">
            {[...reasons, ...reasons].map((reason, i) => {
              const Icon = reason.icon
              return (
                <div
                  key={i}
                  className="group relative w-[280px] shrink-0 overflow-hidden bg-card border border-border rounded-2xl p-5 card-hover hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 ring-1 ring-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="relative text-base font-semibold text-foreground mb-1.5">{reason.title}</h3>
                  <p className="relative text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                  {/* animated bottom accent */}
                  <span className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-500 group-hover:w-full" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
