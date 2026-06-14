'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2, Phone, Mail, ShieldCheck, MessageCircle, Activity, Shield, Cpu, HeartPulse, Heart, Wrench, Settings } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'
import { Hero3D } from './hero-3d'
import { HeroBgWave } from './hero-bg-wave'

const WHATSAPP_URL = `https://wa.me/919510768056?text=${encodeURIComponent(
  'Hello K² Enterprise, I need biomedical equipment support.'
)}`

const headlineWords = [
  { text: 'Precision', gradient: true },
  { text: 'Biomedical' },
  { text: 'Service' },
  { text: '&' },
  { text: 'Support' },
]

const headlineContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const headlineWord: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

export function Hero() {
  const [heartRate, setHeartRate] = useState(78)
  const [spo2, setSpo2] = useState(98)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Live simulation of patient monitor metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1
        const next = prev + delta
        return next >= 74 && next <= 82 ? next : prev
      })
      setSpo2((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1
        const next = prev + delta
        return next >= 97 && next <= 99 ? next : prev
      })
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  // Mouse move tracker for premium parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const x = (clientX - window.innerWidth / 2) / 35
      const y = (clientY - window.innerHeight / 2) / 35
      setMousePosition({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const benefits = [
    'Precision-driven service',
    'Dedicated technical support',
    'Experienced biomedical expertise',
  ]

  const floatingIcons = [
    { Icon: HeartPulse, top: '15%', left: '6%', delay: 0, size: 26, color: 'text-primary/25 dark:text-primary/20' },
    { Icon: Cpu, top: '75%', left: '4%', delay: 1.5, size: 22, color: 'text-primary/20 dark:text-primary/15' },
    { Icon: Shield, top: '22%', left: '42%', delay: 0.8, size: 20, color: 'text-primary/25 dark:text-primary/20' },
    { Icon: Activity, top: '82%', left: '40%', delay: 2.2, size: 24, color: 'text-primary/20 dark:text-primary/15' },
    { Icon: Settings, top: '68%', left: '92%', delay: 1.2, size: 24, color: 'text-primary/25 dark:text-primary/20' },
    { Icon: Wrench, top: '12%', left: '88%', delay: 0.5, size: 20, color: 'text-primary/20 dark:text-primary/15' },
  ]

  // Subtle floating medical plus (+) icons
  const floatingPlusSigns = [
    { top: '10%', left: '22%', size: 14, speed: 8, delay: 0 },
    { top: '45%', left: '12%', size: 10, speed: 12, delay: 1 },
    { top: '72%', left: '30%', size: 15, speed: 10, delay: 0.5 },
    { top: '85%', left: '18%', size: 12, speed: 7, delay: 2 },
    { top: '22%', left: '78%', size: 13, speed: 11, delay: 1.5 },
    { top: '50%', left: '85%', size: 16, speed: 9, delay: 0 },
    { top: '78%', left: '72%', size: 11, speed: 13, delay: 2.5 },
  ]

  // Ambient floating particles/dots
  const floatingParticles = [
    { top: '28%', left: '16%', size: 5, speed: 6 },
    { top: '38%', left: '35%', size: 4, speed: 8 },
    { top: '62%', left: '8%', size: 6, speed: 9 },
    { top: '80%', left: '28%', size: 5, speed: 7 },
    { top: '18%', left: '70%', size: 4, speed: 5 },
    { top: '58%', left: '92%', size: 5, speed: 10 },
    { top: '84%', left: '64%', size: 6, speed: 8 },
  ]

  return (
    <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden bg-background">
      
      {/* 3D Animated Waving Particle Grid Background (drawn from reference images) */}
      <HeroBgWave />

      {/* LAYER 1: Slow Parallax Layer (Technical Grid + Glows) */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={{
          x: mousePosition.x * 0.15,
          y: mousePosition.y * 0.15,
        }}
        transition={{ type: 'spring', damping: 50, stiffness: 150 }}
      >
        {/* 1. Low Opacity Technical Grid (3.5% opacity, clinical high-tech look) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,109,111,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,109,111,0.035)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        {/* Ambient background glows for visual depth (3% - 5% opacity) */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.03] pointer-events-none">
          <div className="absolute top-1/4 right-12 w-[450px] h-[450px] bg-primary rounded-full blur-[130px]"></div>
          <div className="absolute bottom-1/4 left-12 w-[350px] h-[350px] bg-secondary rounded-full blur-[110px]"></div>
        </div>
      </motion.div>

      {/* LAYER 2: Medium Parallax Layer (Circuit Board Lines + Glowing Nodes + ECG Pulse) */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={{
          x: mousePosition.x * 0.35,
          y: mousePosition.y * 0.35,
        }}
        transition={{ type: 'spring', damping: 45, stiffness: 120 }}
      >
        {/* 2. Thin Animated Medical Circuit Board Lines & Glowing Connection Nodes */}
        <svg className="absolute inset-0 w-full h-full text-primary/[0.045] dark:text-primary/[0.025] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          {/* Animated Circuit Line 1 */}
          <path
            d="M -50 150 L 250 150 L 330 230 L 750 230 L 820 160 L 1200 160"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="40 180"
            className="animate-circuit-flow"
          />
          {/* Animated Circuit Line 2 */}
          <path
            d="M 150 450 L 400 450 L 470 520 L 880 520 L 950 450 L 1600 450"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="60 200"
            className="animate-circuit-flow"
            style={{ animationDelay: '-3s', animationDuration: '14s' }}
          />
          {/* Animated Circuit Line 3 */}
          <path
            d="M 750 100 L 920 100 L 980 160 L 1200 160"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.0"
            strokeDasharray="30 120"
            className="animate-circuit-flow"
            style={{ animationDelay: '-1.5s', animationDuration: '10s' }}
          />
          
          {/* Glowing connection nodes with slow pulse effect (subtle 4%-5% opacity) */}
          <circle cx="250" cy="150" r="3.5" fill="currentColor" className="animate-pulse text-primary/40 dark:text-primary/30" style={{ animationDuration: '2s' }} />
          <circle cx="330" cy="230" r="3.5" fill="currentColor" className="animate-pulse text-primary/40 dark:text-primary/30" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
          <circle cx="750" cy="230" r="3.5" fill="currentColor" className="animate-pulse text-primary/40 dark:text-primary/30" style={{ animationDuration: '3s', animationDelay: '1s' }} />
          <circle cx="820" cy="160" r="3.5" fill="currentColor" className="animate-pulse text-primary/40 dark:text-primary/30" style={{ animationDuration: '2.2s', animationDelay: '1.5s' }} />
          
          <circle cx="400" cy="450" r="3.5" fill="currentColor" className="animate-pulse text-primary/40 dark:text-primary/30" style={{ animationDuration: '2.8s' }} />
          <circle cx="470" cy="520" r="3.5" fill="currentColor" className="animate-pulse text-primary/40 dark:text-primary/30" style={{ animationDuration: '3.2s', animationDelay: '0.4s' }} />
          <circle cx="880" cy="520" r="3.5" fill="currentColor" className="animate-pulse text-primary/40 dark:text-primary/30" style={{ animationDuration: '2.4s', animationDelay: '0.8s' }} />
          <circle cx="950" cy="450" r="3.5" fill="currentColor" className="animate-pulse text-primary/40 dark:text-primary/30" style={{ animationDuration: '3s', animationDelay: '1.2s' }} />
        </svg>

        {/* 3. Horizontal Moving ECG Heartbeat line (Subtle 4% opacity) */}
        <div className="absolute inset-x-0 top-[28%] h-24 opacity-[0.04] dark:opacity-[0.02] pointer-events-none select-none overflow-hidden">
          <svg className="w-[200%] h-full text-primary" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path
              d="M0,50 L250,50 L260,20 L270,80 L280,50 L350,50 L360,30 L370,70 L380,50 L650,50 L660,20 L670,80 L680,50 L750,50 L760,30 L770,70 L780,50 L1000,50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="marquee"
              style={{ animationDuration: '28s' }}
            />
          </svg>
        </div>
      </motion.div>

      {/* LAYER 3: Fast Parallax Layer (Floating Plus Signs + Particles + Biomedical Icons) */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={{
          x: mousePosition.x * 0.6,
          y: mousePosition.y * 0.6,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 100 }}
      >
        {/* 4. Floating Medical Plus (+) Icons */}
        {floatingPlusSigns.map((plus, index) => (
          <motion.div
            key={`plus-${index}`}
            className="absolute text-primary/10 dark:text-primary/8 font-extrabold select-none pointer-events-none hidden sm:block"
            style={{ top: plus.top, left: plus.left, fontSize: plus.size }}
            animate={{
              y: [-15, 15, -15],
              x: [-8, 8, -8],
              rotate: [0, 360],
            }}
            transition={{
              duration: plus.speed,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: plus.delay,
            }}
          >
            +
          </motion.div>
        ))}

        {/* 5. Floating Particles (dots) */}
        {floatingParticles.map((dot, index) => (
          <motion.div
            key={`dot-${index}`}
            className="absolute bg-primary/10 dark:bg-primary/8 rounded-full pointer-events-none hidden sm:block"
            style={{
              top: dot.top,
              left: dot.left,
              width: dot.size,
              height: dot.size,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: dot.speed,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.4,
            }}
          />
        ))}

        {/* 6. Floating Tiny Biomedical Icons */}
        {floatingIcons.map(({ Icon, top, left, delay, size, color }, index) => (
          <motion.div
            key={index}
            className={`absolute ${color} opacity-[0.8] pointer-events-none hidden sm:block`}
            style={{ top, left }}
            initial={{ y: 0, rotate: 0 }}
            animate={{
              y: [-10, 10, -10],
              rotate: [-6, 6, -6],
            }}
            transition={{
              duration: 7 + index * 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay,
            }}
          >
            <Icon size={size} strokeWidth={1.5} />
          </motion.div>
        ))}
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column — Headline & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-8 min-w-0">
            <div className="space-y-6">
              {/* Premium Clinical Badge */}
              <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-semibold text-primary bg-primary/10 border border-primary/20 px-4 py-2 rounded-full backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                </span>
                Biomedical Equipment Service Specialists
                
                {/* SVG ECG heartbeat mini indicator */}
                <svg className="w-12 h-4 text-primary shrink-0 opacity-80" viewBox="0 0 50 20" fill="none">
                  <path
                    className="ecg-path"
                    d="M0,10 L15,10 L18,2 L22,18 L25,10 L50,10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Title stating clinical specialist focus */}
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground text-balance leading-[1.08] tracking-tight"
                style={{ fontFamily: 'var(--font-poppins)' }}
                variants={headlineContainer}
                initial="hidden"
                animate="visible"
              >
                {headlineWords.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={headlineWord}
                    className={`inline-block ${i < headlineWords.length - 1 ? 'me-[0.25em]' : ''} ${
                      word.gradient ? 'text-gradient-flow font-black' : ''
                    }`}
                  >
                    {word.text}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Accent Line */}
              <div className="accent-line w-24 h-1 rounded-full bg-primary/20 relative overflow-hidden" />

              <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed max-w-2xl font-light">
                K² Enterprise delivers high-precision biomedical engineering solutions. We combine advanced diagnostic verification with rapid emergency service to keep your healthcare facility running flawlessly.
              </p>
            </div>

            {/* Benefits Chips */}
            <div className="flex flex-wrap gap-3">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 rounded-xl border border-border bg-card/40 hover:bg-card/70 hover:border-primary/40 backdrop-blur-md px-4 py-2.5 text-sm font-medium text-foreground transition-all duration-300 shadow-sm"
                  whileHover={{ scale: 1.03, y: -2 }}
                >
                  <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0" />
                  {benefit}
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="group w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/95 hover:to-secondary/95 text-primary-foreground font-semibold h-13 shadow-xl shadow-primary/20 transition-all duration-300"
              >
                <a href="#contact" className="flex items-center justify-center">
                  Request Service
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1.5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-semibold h-13 shadow-xl shadow-emerald-500/25 transition-all duration-300"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Support
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column — 3D Patient Monitor & Live Metric Badges (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center min-w-0 mt-8 lg:mt-0">
            
            {/* Monitor Wrapper Card (Glassmorphic, float animated) */}
            <motion.div
              className="relative w-full max-w-[480px] rounded-3xl overflow-visible glass-card p-2 border border-primary/25 bg-card/30 backdrop-blur-xl shadow-2xl z-10"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* --- FLOATING METRIC BADGES (Clinical details) --- */}
              
              {/* 1. Heart Rate Badge */}
              <motion.div
                className="absolute -top-6 -left-6 md:-left-8 glass-card border border-emerald-500/35 bg-card/45 backdrop-blur-xl px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl z-20 hidden sm:flex"
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-8.5 h-8.5 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                  <Heart className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mb-1">HR Pulse</p>
                  <p className="text-lg font-black text-emerald-500 tabular-nums leading-none">
                    {heartRate} <span className="text-[11px] font-medium text-muted-foreground">bpm</span>
                  </p>
                </div>
              </motion.div>

              {/* 2. SpO2 Oxygen Level Badge */}
              <motion.div
                className="absolute top-16 -right-6 md:-right-8 glass-card border border-cyan-500/35 bg-card/45 backdrop-blur-xl px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl z-20 hidden sm:flex"
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-8.5 h-8.5 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mb-1">SpO2</p>
                  <p className="text-lg font-black text-cyan-400 tabular-nums leading-none">
                    {spo2} <span className="text-[11px] font-medium text-muted-foreground">%</span>
                  </p>
                </div>
              </motion.div>

              {/* 3. Calibration Standard Badge */}
              <motion.div
                className="absolute -bottom-8 -right-2 glass-card border border-primary/30 bg-card/45 backdrop-blur-xl px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl z-20 hidden sm:flex"
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-8.5 h-8.5 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mb-1">Calibration</p>
                  <p className="text-xs font-black text-foreground leading-none">ISO 13485 CERT</p>
                </div>
              </motion.div>

              {/* Bezel details */}
              <div className="absolute top-2.5 left-3 text-[10px] font-bold text-muted-foreground/60 tracking-wider">
                K² MON-120
              </div>
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-border/40 rounded-full" />
              
              {/* 3D Patient Monitor Component */}
              <Hero3D />

              {/* Status Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-primary/20 bg-background/85 backdrop-blur-lg p-4 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Operational Status</h3>
                    <p className="text-[11px] text-muted-foreground">Calibration Standard Active</p>
                  </div>
                </div>
                <a
                  href="tel:+919510768056"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Spotlight & Diagnostic Laser Scan Line Underlay (behind Hero equipment) */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-[40px] blur-2xl -z-10 pointer-events-none overflow-hidden">
              <div 
                className="w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent absolute animate-scan-y"
                style={{
                  boxShadow: '0 0 10px 2px rgba(0, 242, 254, 0.5)',
                }}
              />
            </div>

            {/* Large blurred gradient glow behind hero visual for depth (subtle 3% - 6% opacity) */}
            <div className="absolute -inset-24 bg-gradient-to-tr from-cyan-500/15 via-primary/10 to-emerald-500/5 rounded-full blur-[130px] -z-20 pointer-events-none opacity-90" />
          </div>

        </div>
      </div>
    </section>
  )
}
