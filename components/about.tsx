'use client'

import { Award, Zap, Shield, Target } from 'lucide-react'

export function About() {
  const highlights = [
    {
      icon: Award,
      title: 'Gold Medalist',
      description: 'B.Tech in Biomedical & Instrumentation Engineering with 8.98 CGPA',
    },
    {
      icon: Zap,
      title: 'Fast Response',
      description: 'Quick turnaround support and component-level repair expertise',
    },
    {
      icon: Shield,
      title: 'Professional Standards',
      description: 'Hospital-grade service with NABL/NABH audit documentation',
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            About K2 Enterprise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We are a Gold Medalist biomedical engineer with hands-on experience in installation, maintenance, repair, and management of medical equipment across hospitals and diagnostic centers.
          </p>
        </div>

        {/* Main About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To support healthcare institutions with dependable biomedical engineering services that enhance equipment performance, safety, and longevity. We provide cost-effective, reliable, and timely solutions that healthcare professionals can trust.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Our Expertise</h3>
              <p className="text-muted-foreground leading-relaxed">
                With strong expertise in hospital equipment systems, procurement, and compliance documentation, we deliver technical solutions that help healthcare facilities operate efficiently and safely. Every project receives hands-on attention from experienced engineers.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 space-y-2">
              <p className="text-3xl font-bold text-primary">15+</p>
              <p className="text-sm text-muted-foreground">Years of Experience</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 space-y-2">
              <p className="text-3xl font-bold text-primary">100+</p>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 space-y-2">
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground">Healthcare Partners</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 space-y-2">
              <p className="text-3xl font-bold text-primary">24/7</p>
              <p className="text-sm text-muted-foreground">Support Available</p>
            </div>
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
