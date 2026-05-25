'use client'

import { Zap, Shield, Target, Lightbulb } from 'lucide-react'
import { Watermark } from './watermark'

export function About() {
  const highlights = [
    {
      icon: Lightbulb,
      title: '7+ Years Experience',
      description: 'Professional biomedical engineering support with proven service expertise.',
    },
    {
      icon: Zap,
      title: 'Fast Response',
      description: 'Quick troubleshooting and reliable technical assistance.',
    },
    {
      icon: Shield,
      title: 'Professional Standards',
      description: 'Quality-focused service with proper documentation and support.',
    },
    {
      icon: Target,
      title: 'Cost-Effective Solutions',
      description: 'Reliable solutions designed to maximize equipment performance and value.',
    },
  ]

  return (
    <section id="about" className="relative py-20 md:py-28 bg-muted/30">
      <Watermark text="Trusted Healthcare Partner" position="bottom-right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance" style={{ fontFamily: 'var(--font-poppins)' }}>
            About K² Enterprise
          </h2>
        </div>

        {/* Main About Content */}
        <div className="space-y-6 mb-16 max-w-3xl">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              K² Enterprise is a professional biomedical service company based in Ahmedabad, Gujarat, specializing in the maintenance, repair, calibration, and technical support of laboratory and diagnostic equipment.
            </p>
          </div>

          <div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We support hospitals, laboratories, diagnostic centers, and healthcare professionals with reliable biomedical engineering solutions focused on precision, efficiency, and dependable service.
            </p>
          </div>

          <div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our goal is to minimize equipment downtime and ensure smooth laboratory operations through fast response, preventive maintenance, and professional technical support.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="bg-card border border-border rounded-xl p-6 space-y-3 hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
