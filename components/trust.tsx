'use client'

import { Zap, Clock, CheckCircle, Shield, Lightbulb, Users, Award, Target } from 'lucide-react'

export function Trust() {
  const reasons = [
    {
      icon: Target,
      title: 'Precision-Driven Service',
      description: 'We maintain high technical standards to ensure reliable equipment performance and accurate diagnostic support.'
    },
    {
      icon: Zap,
      title: 'Dedicated Technical Support',
      description: 'Quick response and dedicated service assistance for hospitals, laboratories, and healthcare facilities.'
    },
    {
      icon: Award,
      title: 'Experienced Biomedical Expertise',
      description: 'Professional understanding of biomedical equipment systems and laboratory environments.'
    },
    {
      icon: Shield,
      title: 'Reliable Maintenance Solutions',
      description: 'Preventive maintenance programs focused on reducing downtime and improving equipment efficiency.'
    },
    {
      icon: Users,
      title: 'Customer-Centric Approach',
      description: 'We prioritize transparency, trust, and long-term service relationships with our clients.'
    },
    {
      icon: Clock,
      title: 'Emergency Support Available',
      description: 'Monday – Saturday with emergency technical support available when needed.'
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance" style={{ fontFamily: 'var(--font-poppins)' }}>
            Why Choose K² Enterprise?
          </h2>
          <p className="text-lg text-muted-foreground">
            Delivering reliable biomedical service with precision, dedication, and long-term commitment to your healthcare facility.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
