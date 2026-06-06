'use client'

import {
  Wrench,
  CheckCircle,
  Zap,
  BarChart3,
  Gauge,
  Settings,
  CalendarCheck,
  ClipboardCheck,
} from 'lucide-react'
import { Watermark } from './watermark'
import { Reveal } from './reveal'
import { Tilt } from './tilt'

export function Services() {
  const services = [
    {
      icon: Settings,
      title: 'Equipment Installation & Commissioning',
      description: 'Professional setup, configuration, and operational verification of biomedical and laboratory equipment to ensure smooth and accurate performance from day one.',
    },
    {
      icon: CalendarCheck,
      title: 'Preventive Maintenance Services',
      description: 'Scheduled maintenance programs designed to reduce unexpected breakdowns, improve equipment lifespan, and maintain operational efficiency.',
    },
    {
      icon: Wrench,
      title: 'Breakdown Repair & Troubleshooting',
      description: 'Fast and systematic fault diagnosis with reliable repair support to minimize downtime and restore equipment functionality quickly.',
    },
    {
      icon: Gauge,
      title: 'Calibration & Performance Verification',
      description: 'Precision calibration and performance testing services to help ensure accurate readings, dependable results, and consistent operation.',
    },
    {
      icon: ClipboardCheck,
      title: 'Technical Inspection & System Evaluation',
      description: 'Detailed equipment inspection and technical assessment to identify performance issues, safety concerns, and maintenance requirements.',
    },
    {
      icon: BarChart3,
      title: 'Laboratory Equipment Support',
      description: 'Comprehensive technical support for diagnostic and laboratory systems including servicing, optimization, and operational assistance.',
    },
    {
      icon: Zap,
      title: 'Emergency Technical Assistance',
      description: 'Quick-response biomedical support for urgent equipment issues and critical operational interruptions.',
    },
    {
      icon: CheckCircle,
      title: 'Annual Maintenance Contract (AMC) Services',
      description: 'Customized AMC solutions including routine servicing, preventive maintenance, priority support, and technical documentation.',
    },
  ]

  // Facilities we serve — complements the cards instead of repeating them.
  const keywords = [
    'Hospitals',
    'Diagnostic Centers',
    'Pathology Labs',
    'Research Laboratories',
    'Clinics',
    'Blood Banks',
    'Healthcare Facilities',
  ]

  return (
    <section id="services" className="relative py-14 sm:py-20 md:py-28 overflow-x-clip">
      <Watermark text="Laboratory Equipment Specialists" position="bottom-left" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal variant="right">
          <div className="space-y-4 mb-10">
            <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance" style={{ fontFamily: 'var(--font-poppins)' }}>
              Biomedical Services
            </h2>
            {/* animated accent line (light sweeps left -> right) */}
            <div className="accent-line" />
            <p className="text-lg text-muted-foreground">
              We provide professional biomedical engineering solutions for hospitals, laboratories, diagnostic centers, and healthcare facilities with a focus on reliability, precision, and equipment performance.
            </p>
          </div>
        </Reveal>

        {/* Facilities-served marquee (glides left -> right) */}
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Trusted across</p>
        <div className="marquee-track relative mb-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="marquee gap-3 pr-3">
            {[...keywords, ...keywords].map((word, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal key={i} delay={(i % 4) * 70} variant="right" className="h-full">
                <Tilt className="h-full">
                  <div className="group relative h-full overflow-hidden bg-card border border-border rounded-2xl p-6 transition-[border-color,box-shadow] duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                    {/* gradient glow on hover */}
                    <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                    {/* top row: icon + index badge */}
                    <div className="relative flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 ring-1 ring-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span
                        className="text-sm font-bold text-primary/30 group-hover:text-primary/60 transition-colors tabular-nums"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="relative text-base font-semibold text-foreground leading-snug mb-2">{service.title}</h3>
                    <p className="relative text-sm text-muted-foreground leading-relaxed">{service.description}</p>

                    {/* animated bottom accent */}
                    <span className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-500 group-hover:w-full" />
                  </div>
                </Tilt>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
