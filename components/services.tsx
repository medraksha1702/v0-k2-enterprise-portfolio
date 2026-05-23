'use client'

import { Wrench, Package, CheckCircle, Zap, BarChart3, Gauge } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: Wrench,
      title: 'CBC Analyzer Service',
      description: 'Professional installation, troubleshooting, preventive maintenance, and repair support for CBC analyzers.',
    },
    {
      icon: BarChart3,
      title: 'Biochemistry Analyzer Support',
      description: 'Reliable servicing and calibration support for biochemistry analyzers to ensure accurate diagnostic performance.',
    },
    {
      icon: Zap,
      title: 'Microscope Maintenance',
      description: 'Comprehensive microscope cleaning, alignment, repair, and maintenance services.',
    },
    {
      icon: Gauge,
      title: 'Centrifuge Service',
      description: 'Inspection, balancing, motor servicing, and preventive maintenance for laboratory centrifuges.',
    },
    {
      icon: Package,
      title: 'Semi-Auto Analyzer Support',
      description: 'Technical support and maintenance solutions for semi-auto analyzers and associated laboratory systems.',
    },
    {
      icon: CheckCircle,
      title: 'Cryostat System Maintenance',
      description: 'Specialized support for cryostat systems including servicing, calibration, and performance optimization.',
    },
    {
      icon: Wrench,
      title: 'Preventive Maintenance',
      description: 'Routine inspection and maintenance programs designed to reduce downtime and extend equipment life.',
    },
    {
      icon: Gauge,
      title: 'Calibration & Troubleshooting',
      description: 'Precision calibration and systematic troubleshooting for reliable laboratory equipment operation.',
    },
  ]

  const equipment = [
    'CBC Analyzers',
    'Biochemistry Analyzers',
    'Microscopes',
    'Centrifuges',
    'Semi-Auto Analyzers',
    'Cryostat Systems',
  ]

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance" style={{ fontFamily: 'var(--font-poppins)' }}>
            Comprehensive Biomedical Services
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide complete medical equipment support covering installation, maintenance, repair, and compliance documentation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={i}
                className="group bg-card border border-border rounded-xl p-6 space-y-4 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>

        {/* Equipment Expertise */}
        <div className="bg-muted/30 border border-border rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">Equipment Expertise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {equipment.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-card border border-border/50 rounded-lg hover:border-primary/50 transition-colors">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
