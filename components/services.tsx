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
import { motion } from 'framer-motion'

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

  // Facilities we serve
  const keywords = [
    'Hospitals',
    'Diagnostic Centers',
    'Pathology Labs',
    'Research Laboratories',
    'Clinics',
    'Blood Banks',
    'Healthcare Facilities',
  ]

  // Random glowing connection nodes for biotech pattern (subtle 3% opacity)
  const glowingNodes = [
    { top: '18%', left: '22%', delay: '0s' },
    { top: '42%', left: '78%', delay: '1.2s' },
    { top: '68%', left: '15%', delay: '0.6s' },
    { top: '84%', left: '85%', delay: '2.4s' },
    { top: '50%', left: '38%', delay: '1.8s' },
  ]

  // Subtle floating biomedical icons (3% opacity)
  const floatingIcons = [
    { Icon: Wrench, top: '15%', left: '6%', size: 30, speed: 11 },
    { Icon: Settings, top: '65%', left: '8%', size: 26, speed: 13 },
    { Icon: Zap, top: '20%', left: '86%', size: 28, speed: 10 },
    { Icon: FlaskConical, top: '75%', left: '90%', size: 32, speed: 15 },
  ]

  return (
    <section id="services" className="relative py-20 sm:py-28 md:py-36 overflow-x-clip bg-background">
      <Watermark text="Laboratory Equipment Specialists" position="bottom-left" />
      
      {/* 1. Hexagon Biotech Pattern Background (Subtle 2.5% opacity) */}
      <svg className="absolute inset-0 w-full h-full text-primary/[0.025] dark:text-primary/[0.015] pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hex-grid" width="56" height="97" patternUnits="userSpaceOnUse" patternTransform="scale(0.85)">
            <path d="M 28 0 L 56 16.16 L 56 48.49 L 28 64.66 L 0 48.49 L 0 16.16 Z" fill="none" stroke="currentColor" strokeWidth="0.75" />
            <path d="M 28 97 L 56 80.84 L 56 48.5 L 28 32.34 L 0 48.5 L 0 80.84 Z" fill="none" stroke="currentColor" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-grid)" />
      </svg>

      {/* 2. Biotech Glowing Nodes (Subtle, 4% opacity) */}
      {glowingNodes.map((node, index) => (
        <span
          key={`node-${index}`}
          className="absolute w-2 h-2 rounded-full bg-primary/20 pointer-events-none z-0 hidden sm:block animate-pulse"
          style={{
            top: node.top,
            left: node.left,
            animationDelay: node.delay,
            animationDuration: '3s',
            boxShadow: '0 0 8px 2px rgba(0, 242, 254, 0.35)',
          }}
        />
      ))}

      {/* 3. Floating Biomedical Icons (Subtle, 3-5% opacity) */}
      {floatingIcons.map(({ Icon, top, left, size, speed }, index) => (
        <motion.div
          key={`icon-${index}`}
          className="absolute text-primary/5 pointer-events-none z-0 hidden sm:block"
          style={{ top, left }}
          animate={{
            y: [-12, 12, -12],
            rotate: [-8, 8, -8],
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.5,
          }}
        >
          <Icon size={size} strokeWidth={1} />
        </motion.div>
      ))}

      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal variant="right">
          <div className="space-y-4 mb-16 max-w-3xl">
            <span className="inline-block text-sm font-semibold text-primary bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
              What We Do
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-foreground text-balance tracking-tight" style={{ fontFamily: 'var(--font-poppins)' }}>
              Biomedical Services
            </h2>
            {/* animated accent line */}
            <div className="accent-line w-20 h-1 bg-primary/25 rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              We provide professional biomedical engineering solutions for hospitals, laboratories, diagnostic centers, and healthcare facilities with a focus on reliability, precision, and equipment performance.
            </p>
          </div>
        </Reveal>

        {/* Facilities marquee (Apple-style sleek scrolling) */}
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground/85">Trusted across healthcare</p>
        <div className="marquee-track relative mb-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="marquee gap-4 pr-4">
            {[...keywords, ...keywords].map((word, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-border bg-card/50 backdrop-blur-md px-5 py-2.5 text-sm font-semibold text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors duration-300"
              >
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* Services Grid with glassmorphic cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal key={i} delay={(i % 4) * 60} variant="right" className="h-full">
                <Tilt className="h-full" max={8}>
                  <div className="group relative h-full overflow-hidden rounded-2xl glass-card p-6 flex flex-col justify-between transition-all duration-300 hover:border-primary/40">
                    
                    <div>
                      {/* Gradient glow circle on card hover */}
                      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Header: Icon + Title + Index */}
                      <div className="relative flex items-start gap-4 mb-4">
                        <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:ring-primary/40 transition-all duration-300">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
                            {service.title}
                          </h3>
                        </div>
                        <span
                          className="text-sm font-black text-primary/25 group-hover:text-primary/60 transition-colors duration-300 tabular-nums"
                          style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Card Content */}
                      <p className="relative text-sm text-muted-foreground leading-relaxed font-light">
                        {service.description}
                      </p>
                    </div>

                    {/* ECG heartbeat micro-animation visible on card hover */}
                    <div className="mt-6 pt-3 border-t border-border/20 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase group-hover:text-primary transition-colors">
                        Ready Status
                      </span>
                      <svg className="w-14 h-4 text-emerald-500" viewBox="0 0 50 20" fill="none">
                        <path
                          className="ecg-path opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          d="M0,10 L15,10 L18,2 L22,18 L25,10 L50,10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    {/* Bottom animated border sweep line */}
                    <span className="pointer-events-none absolute bottom-0 left-0 h-0.75 w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-500 group-hover:w-full" />
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
