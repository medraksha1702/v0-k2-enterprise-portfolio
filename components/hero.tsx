'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

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

          {/* Right Visual - Info Card */}
          <div className="relative hidden md:block">
            <div className="bg-gradient-to-br from-primary/15 via-primary/5 to-transparent rounded-2xl p-8 border border-primary/30 backdrop-blur-sm h-full flex flex-col justify-center">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground text-lg">Comprehensive Support</p>
                    <p className="text-muted-foreground leading-relaxed">Installation • Maintenance • Repair • Calibration</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-primary/20">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Professional Services</p>
                      <p className="text-foreground leading-relaxed">We deliver expert biomedical engineering solutions with precision and dedication to healthcare facilities across Gujarat.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-card border-2 border-primary rounded-full p-4 shadow-lg backdrop-blur-sm">
                <div className="text-center">
                  <p className="text-sm font-bold text-primary">7+ Years</p>
                  <p className="text-xs text-muted-foreground font-medium">Expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
