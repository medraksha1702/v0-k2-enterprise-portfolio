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
  ArrowUpRight,
} from 'lucide-react'
import { Watermark } from './watermark'
import { Reveal } from './reveal'
import { motion } from 'framer-motion'
import { ShaderBackground } from './ui/shader-background'
import { ParticleNetwork } from './ui/particle-network'

export function Services() {
  const services = [
    {
      icon: FlaskConical,
      number: '01',
      title: 'Complete Lab Setup',
      description: 'End-to-end setup guidance — site planning, layout, equipment selection, and operational readiness for new and expanding healthcare facilities.',
      numColor: '#22d3ee',
      iconBg: 'rgba(34,211,238,0.15)',
      iconBorder: 'rgba(34,211,238,0.35)',
      iconColor: '#22d3ee',
      stripe: '#22d3ee',
      topBar: 'linear-gradient(90deg,#22d3ee,#0ea5e9)',
      hoverGlow: 'rgba(34,211,238,0.12)',
      readyColor: '#22d3ee',
      cardBorder: 'rgba(34,211,238,0.18)',
    },
    {
      icon: Settings,
      number: '02',
      title: 'Equipment Installation & Commissioning',
      description: 'Professional setup, configuration, and operational verification of biomedical and laboratory equipment to ensure smooth and accurate performance from day one.',
      numColor: '#34d399',
      iconBg: 'rgba(52,211,153,0.15)',
      iconBorder: 'rgba(52,211,153,0.35)',
      iconColor: '#34d399',
      stripe: '#34d399',
      topBar: 'linear-gradient(90deg,#34d399,#059669)',
      hoverGlow: 'rgba(52,211,153,0.12)',
      readyColor: '#34d399',
      cardBorder: 'rgba(52,211,153,0.18)',
    },
    {
      icon: CalendarCheck,
      number: '03',
      title: 'Preventive Maintenance Services',
      description: 'Scheduled maintenance programs designed to reduce unexpected breakdowns, improve equipment lifespan, and maintain operational efficiency.',
      numColor: '#a78bfa',
      iconBg: 'rgba(167,139,250,0.15)',
      iconBorder: 'rgba(167,139,250,0.35)',
      iconColor: '#a78bfa',
      stripe: '#a78bfa',
      topBar: 'linear-gradient(90deg,#a78bfa,#7c3aed)',
      hoverGlow: 'rgba(167,139,250,0.12)',
      readyColor: '#a78bfa',
      cardBorder: 'rgba(167,139,250,0.18)',
    },
    {
      icon: Wrench,
      number: '04',
      title: 'Breakdown Repair & Troubleshooting',
      description: 'Fast and systematic fault diagnosis with reliable repair support to minimize downtime and restore equipment functionality quickly.',
      numColor: '#fb923c',
      iconBg: 'rgba(251,146,60,0.15)',
      iconBorder: 'rgba(251,146,60,0.35)',
      iconColor: '#fb923c',
      stripe: '#fb923c',
      topBar: 'linear-gradient(90deg,#fb923c,#ef4444)',
      hoverGlow: 'rgba(251,146,60,0.12)',
      readyColor: '#fb923c',
      cardBorder: 'rgba(251,146,60,0.18)',
    },
    {
      icon: Gauge,
      number: '05',
      title: 'Calibration & Performance Verification',
      description: 'Precision calibration and performance testing services to help ensure accurate readings, dependable results, and consistent operation.',
      numColor: '#f472b6',
      iconBg: 'rgba(244,114,182,0.15)',
      iconBorder: 'rgba(244,114,182,0.35)',
      iconColor: '#f472b6',
      stripe: '#f472b6',
      topBar: 'linear-gradient(90deg,#f472b6,#9333ea)',
      hoverGlow: 'rgba(244,114,182,0.12)',
      readyColor: '#f472b6',
      cardBorder: 'rgba(244,114,182,0.18)',
    },
    {
      icon: ClipboardCheck,
      number: '06',
      title: 'Technical Inspection & System Evaluation',
      description: 'Detailed equipment inspection and technical assessment to identify performance issues, safety concerns, and maintenance requirements.',
      numColor: '#fbbf24',
      iconBg: 'rgba(251,191,36,0.15)',
      iconBorder: 'rgba(251,191,36,0.35)',
      iconColor: '#fbbf24',
      stripe: '#fbbf24',
      topBar: 'linear-gradient(90deg,#fbbf24,#f59e0b)',
      hoverGlow: 'rgba(251,191,36,0.1)',
      readyColor: '#fbbf24',
      cardBorder: 'rgba(251,191,36,0.18)',
    },
    {
      icon: Zap,
      number: '07',
      title: 'Emergency Technical Assistance',
      description: 'Quick-response biomedical support for urgent equipment issues and critical operational interruptions.',
      numColor: '#f87171',
      iconBg: 'rgba(248,113,113,0.15)',
      iconBorder: 'rgba(248,113,113,0.35)',
      iconColor: '#f87171',
      stripe: '#f87171',
      topBar: 'linear-gradient(90deg,#f87171,#dc2626)',
      hoverGlow: 'rgba(248,113,113,0.12)',
      readyColor: '#f87171',
      cardBorder: 'rgba(248,113,113,0.18)',
    },
    {
      icon: CheckCircle,
      number: '08',
      title: 'Annual Maintenance Contract (AMC) Services',
      description: 'Customized annual contracts covering routine servicing, scheduled upkeep, priority response, and complete technical documentation.',
      numColor: '#4ade80',
      iconBg: 'rgba(74,222,128,0.15)',
      iconBorder: 'rgba(74,222,128,0.35)',
      iconColor: '#4ade80',
      stripe: '#4ade80',
      topBar: 'linear-gradient(90deg,#4ade80,#06b6d4)',
      hoverGlow: 'rgba(74,222,128,0.12)',
      readyColor: '#4ade80',
      cardBorder: 'rgba(74,222,128,0.18)',
    },
  ]

  const keywords = [
    'Hospitals', 'Diagnostic Centers', 'Pathology Labs',
    'Research Laboratories', 'Clinics', 'Blood Banks', 'Healthcare Facilities',
  ]

  const glowingNodes = [
    { top: '18%', left: '22%', delay: '0s' },
    { top: '42%', left: '78%', delay: '1.2s' },
    { top: '68%', left: '15%', delay: '0.6s' },
    { top: '84%', left: '85%', delay: '2.4s' },
    { top: '50%', left: '38%', delay: '1.8s' },
  ]

  const floatingIcons = [
    { Icon: Wrench,       top: '12%', left: '2%',  size: 20, speed: 11 },
    { Icon: Settings,     top: '65%', left: '3%',  size: 18, speed: 13 },
    { Icon: Zap,          top: '18%', left: '88%', size: 20, speed: 10 },
    { Icon: FlaskConical, top: '75%', left: '91%', size: 22, speed: 15 },
  ]

  return (
    <section
      id="services"
      className="relative py-20 sm:py-28 md:py-36 overflow-x-clip dark"
      style={{ backgroundColor: '#003638' }}
    >
      <ShaderBackground opacity={0.4} />
      <ParticleNetwork nodeCount={35} connectionDistance={120} speed={0.25} />
      <Watermark text="Laboratory Equipment Specialists" position="bottom-left" />

      {/* Hexagon grid */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ color: 'rgba(0,242,254,0.04)' }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hex-svc" width="56" height="97" patternUnits="userSpaceOnUse" patternTransform="scale(0.85)">
            <path d="M 28 0 L 56 16.16 L 56 48.49 L 28 64.66 L 0 48.49 L 0 16.16 Z" fill="none" stroke="currentColor" strokeWidth="0.75" />
            <path d="M 28 97 L 56 80.84 L 56 48.5 L 28 32.34 L 0 48.5 L 0 80.84 Z" fill="none" stroke="currentColor" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-svc)" />
      </svg>

      {/* Glowing nodes */}
      {glowingNodes.map((node, index) => (
        <span key={`node-${index}`} className="absolute rounded-full pointer-events-none z-0 animate-pulse"
          style={{ top: node.top, left: node.left, width: 6, height: 6, animationDelay: node.delay, animationDuration: '3s', backgroundColor: 'rgba(0,242,254,0.5)', boxShadow: '0 0 8px 3px rgba(0,242,254,0.4)' }} />
      ))}

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, top, left, size, speed }, index) => (
        <motion.div key={`icon-${index}`} className="absolute pointer-events-none z-0"
          style={{ top, left, color: 'rgba(0,242,254,0.1)' }}
          animate={{ y: [-10, 10, -10], rotate: [-6, 6, -6] }}
          transition={{ duration: speed, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}>
          <Icon size={size} strokeWidth={1} />
        </motion.div>
      ))}

      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, rgba(0,242,254,0.04) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] rounded-full pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ─── Section Header ──────────────────────────────── */}
        <Reveal variant="right">
          <div className="space-y-4 mb-12 max-w-3xl">
            <span className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full"
              style={{ color: '#7fffd4', backgroundColor: 'rgba(0,242,254,0.12)', border: '1px solid rgba(0,242,254,0.25)' }}>
              What We Do
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-balance tracking-tight"
              style={{ fontFamily: 'var(--font-poppins)', color: '#e0fafa' }}>
              Biomedical Services
            </h2>
            <div className="w-20 h-1 rounded-full" style={{ background: 'linear-gradient(90deg,#22d3ee,#34d399)' }} />
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: '#a8d8d8' }}>
              We provide professional biomedical engineering solutions for hospitals, laboratories,
              diagnostic centers, and healthcare facilities — focused on reliability, precision, and performance.
            </p>
          </div>
        </Reveal>

        {/* ─── Marquee ─────────────────────────────────────── */}
        <p className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: '#7fc8c8' }}>Trusted across healthcare</p>
        <div className="marquee-track relative mb-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="marquee gap-4 pr-4">
            {[...keywords, ...keywords].map((word, i) => (
              <span key={i} className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full backdrop-blur-md px-5 py-2.5 text-sm font-semibold"
                style={{ border: '1px solid rgba(0,242,254,0.2)', backgroundColor: 'rgba(255,255,255,0.06)', color: '#b0e0e0' }}>
                <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: '#00f2fe' }} />
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* ─── Cards Grid ──────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc, i) => {
            const Icon = svc.icon
            return (
              <Reveal key={i} delay={(i % 4) * 80} variant="up" className="h-full">
                <motion.div
                  className="group relative h-full flex flex-col overflow-hidden rounded-2xl cursor-pointer"
                  style={{
                    background: 'linear-gradient(160deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.018) 100%)',
                    border: `1px solid ${svc.cardBorder}`,
                    backdropFilter: 'blur(18px)',
                    WebkitBackdropFilter: 'blur(18px)',
                  }}
                  whileHover={{ y: -7, scale: 1.015 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                >
                  {/* ── Left colour stripe ── */}
                  <div className="absolute top-0 left-0 w-[3px] h-full rounded-l-2xl transition-all duration-300"
                    style={{ background: svc.stripe, opacity: 0.55, filter: 'blur(0px)' }} />

                  {/* ── Top bar sweep on hover ── */}
                  <div className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-t-2xl"
                    style={{ background: svc.topBar }} />

                  {/* ── Hover glow spotlight ── */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{ background: `radial-gradient(circle at 25% 20%, ${svc.hoverGlow} 0%, transparent 60%)` }} />

                  {/* ── Card body ── */}
                  <div className="relative flex flex-col flex-1 p-6 pl-8">

                    {/* Row 1: Big number + icon ring */}
                    <div className="flex items-start justify-between mb-5">
                      <span
                        className="text-[3.5rem] font-black leading-none select-none transition-opacity duration-300"
                        style={{ fontFamily: 'var(--font-poppins)', color: svc.numColor, lineHeight: 1, opacity: 0.45 }}
                      >
                        {svc.number}
                      </span>
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
                        style={{ background: svc.iconBg, border: `1px solid ${svc.iconBorder}`, boxShadow: `0 0 0 0 ${svc.iconColor}` }}>
                        <Icon className="w-5 h-5" style={{ color: svc.iconColor }} strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-[0.95rem] font-bold leading-snug mb-3 transition-colors duration-300 group-hover:text-white"
                      style={{ color: '#e8f8f8' }}>
                      {svc.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed flex-1" style={{ color: '#90c4c4' }}>
                      {svc.description}
                    </p>

                    {/* ── Footer ── */}
                    <div className="mt-5 pt-4 flex items-center justify-between"
                      style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>

                      {/* Ready badge */}
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                            style={{ backgroundColor: svc.readyColor }} />
                          <span className="relative inline-flex rounded-full h-2 w-2"
                            style={{ backgroundColor: svc.readyColor }} />
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider"
                          style={{ color: svc.readyColor }}>
                          Ready
                        </span>
                      </div>

                      {/* ECG wave — on hover */}
                      <svg className="w-12 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ color: svc.numColor }} viewBox="0 0 50 20" fill="none">
                        <path className="ecg-path"
                          d="M0,10 L14,10 L17,3 L20,17 L23,10 L50,10"
                          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>

                      {/* Arrow — on hover */}
                      <div className="w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                        style={{ backgroundColor: svc.iconBg, border: `1px solid ${svc.iconBorder}` }}>
                        <ArrowUpRight className="w-3.5 h-3.5" style={{ color: svc.numColor }} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            )
          })}
        </div>

      </div>
    </section>
  )
}
