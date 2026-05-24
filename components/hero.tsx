'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2, Microscope, Beaker, Settings2, Cpu } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                  Professional Biomedical Services
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance leading-tight" style={{ fontFamily: 'var(--font-poppins)' }}>
                Precision Biomedical Service & Support
              </h1>
              <p className="text-lg text-muted-foreground text-balance leading-relaxed">
                K² Enterprise delivers reliable biomedical engineering solutions with precision, dedication, and technical expertise to ensure uninterrupted performance of critical healthcare equipment.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              {[
                'Precision-driven service',
                'Dedicated technical support',
                'Experienced biomedical expertise',
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href="#contact">
                  Request Service
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <a href="#contact">Contact Now</a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase">Phone</p>
                <p className="text-lg font-semibold text-foreground">+91 9510768056</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase">Email</p>
                <p className="text-lg font-semibold text-foreground">k2biomedicalservice@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Visual - Equipment Showcase */}
          <div className="relative hidden md:block">
            <div className="space-y-4">
              {/* Featured Equipment Cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'CBC Analyzer', icon: Microscope, gradient: 'from-blue-500/20 to-blue-600/10' },
                  { name: 'Biochemistry', icon: Beaker, gradient: 'from-purple-500/20 to-purple-600/10' },
                  { name: 'Microscope', icon: Cpu, gradient: 'from-cyan-500/20 to-cyan-600/10' },
                  { name: 'Centrifuge', icon: Settings2, gradient: 'from-orange-500/20 to-orange-600/10' },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={i}
                      className={`bg-gradient-to-br ${item.gradient} rounded-xl p-6 border border-primary/20 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 cursor-pointer group hover:shadow-lg`}
                    >
                      <Icon className="w-8 h-8 mb-3 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{item.name}</p>
                      <p className="text-xs text-muted-foreground mt-2">Expert Service</p>
                    </div>
                  )
                })}
              </div>

              {/* Info Card */}
              <div className="bg-gradient-to-br from-primary/15 via-primary/5 to-transparent rounded-xl p-5 border border-primary/30 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold text-foreground text-sm">Comprehensive Support</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">Installation • Maintenance • Repair • Calibration</p>
                  </div>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="flex gap-3">
                <div className="flex-1 bg-primary/10 rounded-lg p-4 text-center hover:bg-primary/15 transition-colors">
                  <p className="text-2xl font-bold text-primary">8+</p>
                  <p className="text-xs text-muted-foreground font-medium mt-1">Services</p>
                </div>
                <div className="flex-1 bg-accent/10 rounded-lg p-4 text-center hover:bg-accent/15 transition-colors">
                  <p className="text-lg font-bold text-accent">Fast</p>
                  <p className="text-xs text-muted-foreground font-medium mt-1">Response</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-3 -right-3 bg-card border-2 border-primary rounded-full p-3 shadow-lg backdrop-blur-sm">
              <div className="text-center">
                <p className="text-xs font-bold text-primary">2+ Years</p>
                <p className="text-xs text-muted-foreground font-medium">Expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
