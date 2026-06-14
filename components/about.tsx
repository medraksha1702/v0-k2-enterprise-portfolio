'use client'

import { Award, Boxes, Clock, MapPin, Wrench, Settings, Gauge, Headset, Microscope, FlaskConical, HeartPulse } from 'lucide-react'
import { Watermark } from './watermark'
import { Reveal } from './reveal'
import { CountUp } from './count-up'
import { motion } from 'framer-motion'
import { ShaderBackground } from './ui/shader-background'
import { DnaHelix } from './ui/dna-helix'

export function About() {
  const stats = [
    { icon: Award, value: '7+', label: 'Years of Experience' },
    { icon: Boxes, value: 'Multi-Brand', label: 'Equipment Expertise' },
    { icon: Clock, value: '24×7', label: 'Emergency Support' },
    { icon: MapPin, value: 'Pan-India', label: 'Service Coverage' },
  ]

  const focus = [
    { icon: Wrench, label: 'Maintenance & Repair' },
    { icon: Gauge, label: 'Calibration' },
    { icon: Settings, label: 'Installation' },
    { icon: Headset, label: 'Technical Support' },
  ]

  // Floating biomedical icons — visible on all screens, smaller on mobile
  const floatingIcons = [
    { Icon: Microscope, top: '15%', left: '3%', size: 22, speed: 12 },
    { Icon: FlaskConical, top: '60%', left: '4%', size: 18, speed: 10 },
    { Icon: HeartPulse, top: '25%', left: '88%', size: 20, speed: 14 },
    { Icon: Settings, top: '75%', left: '91%', size: 18, speed: 11 },
  ]

  return (
    <section id="about" className="relative py-20 sm:py-28 md:py-36 overflow-hidden" style={{ backgroundColor: '#f0fafa' }}>
      {/* WebGL Animated Shader Background */}
      <ShaderBackground opacity={0.4} />
      
      <Watermark text="Trusted Healthcare Partner" position="bottom-right" />
      
      {/* 1. Double-Layer Blueprint Grid Overlay (Subtle 2-4% opacity, clinical engineering look) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,109,111,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,109,111,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,109,111,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,109,111,0.015)_1px,transparent_1px)] bg-[size:8px_8px] pointer-events-none z-0" />

      {/* 2. Floating Biomedical Icons (Extremely subtle, 3-5% opacity) */}
      {floatingIcons.map(({ Icon, top, left, size, speed }, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/[0.07] pointer-events-none z-0"
          style={{ top, left }}
          animate={{ y: [-10, 10, -10], rotate: [-6, 6, -6] }}
          transition={{ duration: speed, repeat: Infinity, ease: 'easeInOut', delay: index * 0.6 }}
        >
          <Icon size={size} strokeWidth={1} />
        </motion.div>
      ))}

      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[90px] pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left — Narrative */}
          <Reveal variant="left">
            <div className="space-y-8">
              <span className="inline-block text-sm font-semibold text-primary bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight" style={{ fontFamily: 'var(--font-poppins)', color: '#00292a' }}>
                About K² Enterprise
              </h2>

              <div className="space-y-5 max-w-xl font-light leading-relaxed" style={{ color: '#1a4040' }}>
                <p className="text-lg font-normal" style={{ color: '#003030' }}>
                  K² Enterprise is a leading biomedical service partner based in Ahmedabad, Gujarat. We specialize in the high-fidelity maintenance, repair, calibration, and support of lab and medical equipment.
                </p>
                <p>
                  We empower hospitals, pathology centers, research laboratories, and clinics by ensuring their critical diagnostic gear remains perfectly calibrated and operational. Our systematic methodologies reduce device downtime and secure clinical accuracy.
                </p>
                <p>
                  With certified expertise across major diagnostic brands, we provide prompt preventive schedules, emergency breakdowns handling, and professional consultation to optimize medical infrastructure.
                </p>
              </div>

              {/* Focus pills */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-widest" style={{ color: '#004b4d' }}>Key Operational Core</h3>
                <div className="flex flex-wrap gap-3">
                  {focus.map((item, i) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={i}
                        className="flex items-center gap-2.5 rounded-full border border-border bg-card/60 backdrop-blur-md px-5 py-2 text-sm font-semibold text-foreground hover:border-primary/30 transition-colors"
                        whileHover={{ scale: 1.03 }}
                      >
                        <Icon className="w-4 h-4 text-primary shrink-0" />
                        {item.label}
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — Stats grid with glowing Glassmorphism + DNA Helix decoration */}
          <div className="relative">
            {/* Animated DNA Helix — show on all screens, reposition on mobile */}
            <div className="absolute -top-6 -right-4 sm:-top-8 sm:-right-6 opacity-40 sm:opacity-50 pointer-events-none z-0">
              <DnaHelix width={60} height={260} className="sm:hidden" />
              <DnaHelix width={90} height={340} className="hidden sm:block" />
            </div>

            <div className="grid grid-cols-2 gap-6 relative z-10">
              {stats.map((stat, i) => {
                const Icon = stat.icon
                return (
                  <Reveal key={i} delay={i * 80} variant="right">
                    <div className="group relative h-full overflow-hidden rounded-2xl glass-card p-6 border border-primary/15 bg-card/30 backdrop-blur-xl shadow-lg hover:border-primary/45 transition-all duration-300">
                      
                      {/* Interactive glowing spotlight */}
                      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                      
                      {/* Icon Container */}
                      <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:ring-primary/40 transition-all duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>

                      {/* Animated counter */}
                      <CountUp
                        value={stat.value}
                        className="relative block text-4xl font-black text-primary tracking-tight"
                      />
                      
                      {/* Description */}
                      <p className="relative mt-2 text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {stat.label}
                      </p>
                    </div>
                  </Reveal>
                )
              })}
            </div>

            {/* Glowing background ring underlay */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-3xl blur-2xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  )
}
