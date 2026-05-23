'use client'

import { Zap, Shield, Target, Lightbulb } from 'lucide-react'

export function Trust() {
  const reasons = [
    {
      icon: Lightbulb,
      title: '2+ Years Experience',
      description: 'Professional biomedical engineering support with proven service expertise.'
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
    <section className="py-20 md:py-28 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance" style={{ fontFamily: 'var(--font-poppins)' }}>
            Why Choose Us
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <div
                key={i}
                className="group bg-card border border-border rounded-xl p-6 space-y-4 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
