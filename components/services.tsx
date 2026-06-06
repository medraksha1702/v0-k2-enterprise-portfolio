'use client'

import {
  Wrench,
  CheckCircle,
  Zap,
  Gauge,
  Settings,
  CalendarCheck,
  ClipboardCheck,
  FlaskConical,
} from 'lucide-react'
import { Watermark } from './watermark'
import { Reveal } from './reveal'
import { Tilt } from './tilt'

export function Services() {
  const services = [
    {
      icon: FlaskConical,
      title: 'Complete Lab Setup',
      description: 'End-to-end setup guidance — site planning, layout, equipment selection, and operational readiness for new and expanding healthcare facilities.',
    },
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
      icon: Zap,
      title: 'Emergency Technical Assistance',
      description: 'Quick-response biomedical support for urgent equipment issues and critical operational interruptions.',
    },
    {
      icon: CheckCircle,
      title: 'Annual Maintenance Contract (AMC) Services',
      description: 'Customized annual contracts covering routine servicing, scheduled upkeep, priority response, and complete technical documentation.',
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
              <Reveal key={i} delay={(i % 4) * 60} variant="right" className="h-full">
                <Tilt className="h-full">
                  <div className="group relative h-full overflow-hidden bg-card border border-border rounded-xl p-4 transition-[border-color,box-shadow] duration-300 hover:border-primary/50 hover:shadow-md hover:shadow-primary/5">
                    {/* gradient glow on hover */}
                    <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                    {/* header: icon + title inline + index */}
                    <div className="relative flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 shrink-0 rounded-lg bg-gradient-to-br from-primary/15 to-primary/5 ring-1 ring-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-[18px] h-[18px] text-primary" />
                      </div>
                      <h3 className="flex-1 text-sm font-semibold text-foreground leading-snug">{service.title}</h3>
                      <span
                        className="text-xs font-bold text-primary/30 group-hover:text-primary/60 transition-colors tabular-nums"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <p className="relative text-[13px] text-muted-foreground leading-relaxed">{service.description}</p>

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
