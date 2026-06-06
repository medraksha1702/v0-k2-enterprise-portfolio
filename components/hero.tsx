'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2, Phone, Mail, ShieldCheck, MessageCircle } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'

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
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const headlineWord: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

export function Hero() {
  const benefits = [
    'Precision-driven service',
    'Dedicated technical support',
    'Experienced biomedical expertise',
  ]

  return (
    <section className="relative py-14 sm:py-20 md:py-28 overflow-hidden">
      {/* Background gradient + animated grid + ambient blobs */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"></div>
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Headline & CTAs */}
          <div className="min-w-0 space-y-8 animate-fade-in-up">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                </span>
                Professional Biomedical Services
              </span>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-[1.1]"
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
                      word.gradient ? 'text-gradient-flow' : ''
                    }`}
                  >
                    {word.text}
                  </motion.span>
                ))}
              </motion.h1>

              {/* animated accent line (light sweeps left -> right) */}
              <div className="accent-line" />

              <p className="text-lg text-muted-foreground text-balance leading-relaxed max-w-xl">
                K² Enterprise delivers reliable biomedical engineering solutions with precision, dedication, and technical expertise to ensure uninterrupted performance of critical healthcare equipment.
              </p>
            </div>

            {/* Key Benefits as chips */}
            <div className="flex flex-wrap gap-3">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  {benefit}
                </div>
              ))}
            </div>

            {/* CTA Buttons — one consistent button style */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="group w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
              >
                <a href="#contact">
                  Request Service
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Now
                </a>
              </Button>
            </div>
          </div>

          {/* Right — Contact / availability card */}
          <div className="relative min-w-0 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            {/* slow-rotating conic glow behind the card */}
            <div className="pointer-events-none absolute -inset-px overflow-hidden rounded-3xl">
              <div className="animate-spin-slow absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 opacity-30 [background:conic-gradient(from_0deg,transparent,var(--primary),transparent_40%)]" />
            </div>
            <div className="relative rounded-3xl border border-border bg-card/80 backdrop-blur-sm p-6 sm:p-8 shadow-xl shadow-primary/5">
              {/* gradient top accent */}
              <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

              {/* availability status box */}
              <div className="mb-5 flex items-center justify-between gap-3 rounded-xl border border-primary/15 bg-primary/5 px-4 py-2.5">
                <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  Available Now
                </span>
                <span className="text-xs text-muted-foreground">Accepting service requests</span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 ring-1 ring-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Get in Touch</p>
                  <p className="text-sm text-muted-foreground">Mon–Sat · 24×7 emergency support</p>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="tel:+919510768056"
                  className="group flex items-center gap-4 rounded-xl border border-border bg-background/50 p-4 hover:border-primary/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-muted-foreground uppercase">Phone</p>
                    <p className="text-base font-semibold text-foreground truncate">+91 9510768056</p>
                  </div>
                </a>

                <a
                  href="mailto:k2biomedicalservice@gmail.com"
                  className="group flex items-center gap-4 rounded-xl border border-border bg-background/50 p-4 hover:border-primary/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-muted-foreground uppercase">Email</p>
                    <p className="text-sm sm:text-base font-semibold text-foreground break-all">k2biomedicalservice@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
