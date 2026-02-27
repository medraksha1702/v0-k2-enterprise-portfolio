'use client'

import { Wrench, Package, CheckCircle, Zap, BarChart3, Gauge } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: Wrench,
      title: 'Installation & Commissioning',
      description: 'Complete setup and calibration of medical equipment with full documentation',
    },
    {
      icon: BarChart3,
      title: 'Preventive Maintenance',
      description: 'Scheduled maintenance programs to keep equipment running optimally',
    },
    {
      icon: Zap,
      title: 'Breakdown Repair',
      description: 'Component-level repair expertise with quick turnaround times',
    },
    {
      icon: Gauge,
      title: 'Calibration Support',
      description: 'Precision calibration and performance testing for accurate results',
    },
    {
      icon: Package,
      title: 'Spare Parts Supply',
      description: 'Sourcing and supply of genuine medical equipment spare parts',
    },
    {
      icon: CheckCircle,
      title: 'Annual Maintenance Contracts',
      description: 'Comprehensive AMC packages tailored to your facility needs',
    },
  ]

  const equipment = [
    'Laboratory Equipment',
    'ICU Equipment',
    'Diagnostic Instruments',
    'Life Science Equipment',
    'Monitoring Devices',
    'Surgical Equipment',
  ]

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Comprehensive Biomedical Services
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide complete medical equipment support covering installation, maintenance, repair, and compliance documentation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
