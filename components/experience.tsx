'use client'

import { useEffect, useRef } from 'react'
import { Search, Cpu, Wrench, CheckCircle, Clock, ShieldCheck, CheckSquare, HeartPulse } from 'lucide-react'
import { Reveal } from './reveal'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  const steps = [
    {
      icon: Search,
      period: '1',
      title: 'Inspection & Diagnosis',
      company: 'Initial Assessment',
      description: 'We carefully inspect the equipment, retrieve diagnostic log data, and identify the root cause of the operational issue.',
    },
    {
      icon: Cpu,
      period: '2',
      title: 'Technical Evaluation',
      company: 'In-Depth Analysis',
      description: 'Detailed performance benchmarking, board-level testing, and calibration validation by certified biomedical experts.',
    },
    {
      icon: Wrench,
      period: '3',
      title: 'Repair & Calibration',
      company: 'Expert Service',
      description: 'Precision component replacement, mechanical servicing, and calibration to factory specifications using certified standard tools.',
    },
    {
      icon: CheckCircle,
      period: '4',
      title: 'Testing & Quality Check',
      company: 'Safety & Quality Assurance',
      description: 'Rigorous electrical safety verification, continuous stress testing, and final quality sign-off before equipment handover.',
    },
  ]

  useEffect(() => {
    const container = containerRef.current
    const progressLine = lineRef.current
    if (!container || !progressLine) return

    // Animate the vertical timeline line as we scroll
    const lineAnim = gsap.to(progressLine, {
      height: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top 70%',
        end: 'bottom 80%',
        scrub: 0.5,
      },
    })

    // Animate individual nodes and cards when they enter the viewport
    const nodes = container.querySelectorAll('.timeline-node-dot')
    const cards = container.querySelectorAll('.timeline-node-card')

    nodes.forEach((node) => {
      gsap.to(node, {
        backgroundColor: '#00F2FE',
        borderColor: '#00F2FE',
        scale: 1.15,
        boxShadow: '0 0 15px rgba(0, 242, 254, 0.75)',
        duration: 0.4,
        scrollTrigger: {
          trigger: node,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      })
    })

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0.3, x: -15, scale: 0.98 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          borderColor: 'rgba(0, 242, 254, 0.3)',
          duration: 0.5,
          scrollTrigger: {
            trigger: card,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    // Cleanup
    return () => {
      lineAnim.scrollTrigger?.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  // Subtle floating biomedical icons (2-5% opacity)
  const floatingIcons = [
    { Icon: Search, top: '15%', left: '8%', size: 30, speed: 12 },
    { Icon: Cpu, top: '65%', left: '10%', size: 28, speed: 10 },
    { Icon: CheckCircle, top: '20%', left: '88%', size: 32, speed: 14 },
    { Icon: Clock, top: '75%', left: '90%', size: 26, speed: 11 },
  ]

  return (
    <section id="experience" className="py-20 sm:py-28 md:py-36 bg-background relative overflow-hidden">
      
      {/* 1. Double-Layer Blueprint Grid Overlay (Subtle 2.5% opacity, clinical engineering look) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,109,111,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,109,111,0.025)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,109,111,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,109,111,0.01)_1px,transparent_1px)] bg-[size:8px_8px] pointer-events-none z-0" />

      {/* 2. Floating Biomedical Icons (Subtle, 3-5% opacity) */}
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

      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal>
          <div className="space-y-4 mb-20 max-w-3xl">
            <span className="inline-block text-sm font-semibold text-primary bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
              How We Work
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight" style={{ fontFamily: 'var(--font-poppins)' }}>
              Our Working Process
            </h2>
            <div className="accent-line w-20 h-1 bg-primary/25 rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              We apply systematic, clinical methodologies and rigorous quality checkpoints to ensure your healthcare devices deliver continuous reliability.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column - Service Process Timeline (7 cols) */}
          <div ref={containerRef} className="lg:col-span-7 relative pl-10 md:pl-12 min-w-0">
            
            {/* Background Grey Track */}
            <div className="absolute left-[15px] md:left-[21px] top-4 bottom-4 w-[2px] bg-border/40 rounded-full" />
            
            {/* GSAP Animated Neon Glowing Progress Line */}
            <div
              ref={lineRef}
              className="absolute left-[15px] md:left-[21px] top-4 w-[2px] bg-gradient-to-b from-primary via-secondary to-cyan-400 origin-top rounded-full shadow-[0_0_8px_rgba(0,242,254,0.5)]"
              style={{ height: '0%' }}
            />

            {/* Steps loop */}
            <div className="space-y-10">
              {steps.map((exp, i) => {
                const StepIcon = exp.icon
                return (
                  <div key={i} className="relative group">
                    {/* Glowing Timeline Checkpoint Node */}
                    <div className="timeline-node-dot absolute -left-[35px] md:-left-[41px] top-1.5 w-6 h-6 md:w-8 md:h-8 rounded-full bg-card border-2 border-border/80 flex items-center justify-center text-xs md:text-sm font-bold text-foreground transition-all duration-300 z-10 shadow-sm">
                      <span className="group-hover:text-primary transition-colors">{exp.period}</span>
                    </div>

                    {/* Step Card Content */}
                    <div className="timeline-node-card border border-border bg-card/45 backdrop-blur-md rounded-2xl p-5 md:p-6 transition-all duration-300 hover:shadow-md">
                      <div className="flex items-center gap-3.5 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                          <StepIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-base md:text-lg font-bold text-foreground">{exp.title}</h4>
                          <p className="text-xs text-primary font-semibold tracking-wider uppercase">{exp.company}</p>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed font-light">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column - Service Availability & Profile (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Service Availability block */}
            <Reveal variant="right" className="w-full">
              <div className="glass-card border border-primary/20 bg-card/30 backdrop-blur-xl rounded-2xl p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-3.5 border-b border-border/20 pb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Service Commitment</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0 text-primary">
                      <Clock className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">Operational Hours</p>
                      <p className="text-xs text-muted-foreground">Monday – Saturday · 24-hour phone standby</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0 text-primary">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">Emergency Cover</p>
                      <p className="text-xs text-muted-foreground">Rapid breakdown dispatch for critical equipment anomalies.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0 text-primary">
                      <CheckSquare className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">Traceable Calibration</p>
                      <p className="text-xs text-muted-foreground">All verification certificates compliant with national/international benchmarks.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Meet The Proprietor Card (Apple/Tesla Executive style) */}
            <Reveal variant="right" delay={120} className="w-full">
              <div className="relative group overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-md p-6 md:p-8 hover:border-primary/30 transition-all duration-300">
                
                {/* Glowing light underlay */}
                <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-secondary/15 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                
                <h3 className="text-lg font-bold text-foreground mb-6">Proprietor Statement</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    {/* Futuristic stylized initials photo placeholder */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center font-black text-primary-foreground text-lg shadow-md border-2 border-background shadow-primary/20">
                      KK
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-foreground leading-tight">Kaushik Koshti</h4>
                      <p className="text-xs text-primary font-semibold uppercase tracking-wider mt-0.5">Proprietor · K² Enterprise</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground italic leading-relaxed font-light pl-2 border-l-2 border-primary/40">
                    &quot;Our absolute commitment is to safeguard clinical integrity. We combine engineering excellence, rapid diagnostic troubleshooting, and transparent partner relationships to keep vital laboratory systems online.&quot;
                  </p>
                </div>
              </div>
            </Reveal>

          </div>

        </div>
      </div>
    </section>
  )
}
