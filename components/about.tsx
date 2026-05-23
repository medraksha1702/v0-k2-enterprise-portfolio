'use client'

import { Zap, Shield, Target, Lightbulb } from 'lucide-react'

export function About() {
  const highlights = [
    {
      icon: Lightbulb,
      title: '2+ Years Experience',
      description: 'Professional biomedical engineering with proven service track record',
    },
    {
      icon: Zap,
      title: 'Fast Response',
      description: 'Quick turnaround support and component-level repair expertise',
    },
    {
      icon: Shield,
      title: 'Professional Standards',
      description: 'Hospital-grade service with quality assurance and documentation',
    },
    {
      icon: Target,
      title: 'Cost-Effective',
      description: 'Reliable and timely solutions that maximize your equipment value',
    },
  ]

  return (
    <section id="about" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance" style={{ fontFamily: 'var(--font-poppins)' }}>
            About K2 Enterprise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            K² Enterprise is a professional biomedical service company based in Ahmedabad, Gujarat, specializing in the maintenance, troubleshooting, repair, calibration, and technical support of laboratory and diagnostic equipment.
          </p>
        </div>

        {/* Main About Content */}
        <div className="space-y-6 mb-16 max-w-3xl">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Our Commitment</h3>
            <p className="text-muted-foreground leading-relaxed">
              Founded with a commitment to precision and dependable service, we support hospitals, laboratories, diagnostic centers, clinics, and healthcare professionals with reliable biomedical engineering solutions. Our focus is to minimize equipment downtime, improve operational efficiency, and deliver long-term technical support through dedicated service and professional expertise.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Our Approach</h3>
            <p className="text-muted-foreground leading-relaxed">
              Precision in every service, fast and reliable technical support, preventive maintenance solutions, trusted biomedical expertise, and a customer-focused approach define our commitment to healthcare facilities across Ahmedabad and Gujarat.
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
