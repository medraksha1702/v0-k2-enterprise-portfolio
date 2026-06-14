'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import { ShaderBackground } from './ui/shader-background'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { href: '#about', label: 'About Company' },
    { href: '#services', label: 'Biomedical Services' },
    { href: '#experience', label: 'Working Process' },
    { href: '#contact', label: 'Submit Ticket' },
  ]

  const serviceLinks = [
    'Complete Lab Setup',
    'Equipment Installation & Commissioning',
    'Preventive Maintenance Contracts (AMC)',
    'Breakdown Repair & Troubleshooting',
    'Precision Calibration Services',
  ]

  return (
    <footer className="relative bg-secondary text-white border-t border-white/10 overflow-hidden pt-16 pb-12">
      {/* WebGL Animated Shader Background */}
      <ShaderBackground opacity={0.3} />

      {/* 1. Animated Glowing ECG Line at the Top Border (Subtle 4% opacity) */}
      <div className="absolute top-0 left-0 w-full h-8 overflow-hidden pointer-events-none select-none z-10">
        <svg className="w-full h-full text-primary/[0.04]" viewBox="0 0 1200 30" preserveAspectRatio="none" fill="none">
          <path
            className="ecg-path"
            d="M0,15 L350,15 L358,5 L366,25 L374,15 L550,15 L558,5 L566,25 L574,15 L800,15 L808,5 L816,25 L824,15 L980,15 L988,5 L996,25 L1004,15 L1200,15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Decorative ambient glowing backdrops */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-12 left-10 w-60 h-60 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          
          {/* Column 1: Brand & Slogan (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="#" className="flex items-center gap-3 group">
              {/* Pulsing Brand Logo Badge */}
              <motion.div 
                className="w-10 h-10 bg-white/15 hover:bg-primary/20 rounded-xl flex items-center justify-center border border-white/20 group-hover:border-primary/50 transition-all duration-300"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-white font-extrabold text-base tracking-tight">K²</span>
              </motion.div>
              <div className="min-w-0">
                <span className="font-extrabold text-white text-lg tracking-tight block">K² Enterprise</span>
                <span className="text-[10px] text-primary font-bold uppercase tracking-widest leading-none">Engineering Excellence</span>
              </div>
            </Link>
            
            <p className="text-sm text-white/70 leading-relaxed font-light">
              <span className="text-white font-semibold">Where Precision Meets Dedication.</span> We provide certified biomedical, diagnostic, and clinical lab equipment maintenance across healthcare facilities.
            </p>

            <div className="flex items-center gap-3.5 p-3.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm max-w-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
              </span>
              <p className="text-xs text-white/80 font-medium">Standby Emergency Technical Response Active</p>
            </div>
          </div>

          {/* Column 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2 lg:col-start-6 space-y-5">
            <h3 className="font-bold text-sm text-white uppercase tracking-widest border-l-2 border-primary pl-3">Navigation</h3>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1.5 text-sm text-white/75 hover:text-primary transition-all duration-300"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="font-bold text-sm text-white uppercase tracking-widest border-l-2 border-primary pl-3">Expertise</h3>
            <ul className="space-y-3 text-sm text-white/70 font-light">
              {serviceLinks.map((service, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact (2.5 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <h3 className="font-bold text-sm text-white uppercase tracking-widest border-l-2 border-primary pl-3">Get in Touch</h3>
            <div className="space-y-4">
              <a 
                href="tel:+919510768056" 
                className="group flex items-center gap-3 text-sm text-white/75 hover:text-primary transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-medium">+91 9510768056</span>
              </a>

              <a 
                href="mailto:k2biomedicalservice@gmail.com" 
                className="group flex items-center gap-3 text-sm text-white/75 hover:text-primary transition-colors break-all"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-medium">k2biomedicalservice@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 text-sm text-white/70">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-light">Ahmedabad, Gujarat</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/60 text-center sm:text-left font-light leading-relaxed">
            © {currentYear} K² Enterprise. All Rights Reserved. <br className="sm:hidden" /> Serving hospitals, labs, and diagnostic systems across Gujarat.
          </p>
          
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary/25 hover:text-primary border border-white/10 hover:border-primary/40 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary/25 hover:text-primary border border-white/10 hover:border-primary/40 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
