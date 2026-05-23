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

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 border border-border">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="h-4 bg-primary/20 rounded-full w-24"></div>
                  <div className="h-3 bg-muted rounded-full w-32"></div>
                  <div className="h-3 bg-muted rounded-full w-28"></div>
                </div>

                <div className="pt-6 space-y-4 border-t border-border">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div className="space-y-2 flex-1">
                        <div className="h-3 bg-primary/20 rounded-full w-24"></div>
                        <div className="h-2 bg-muted rounded-full w-full"></div>
                        <div className="h-2 bg-muted rounded-full w-32"></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 flex gap-2">
                  <div className="flex-1 h-10 bg-primary/10 rounded-lg"></div>
                  <div className="flex-1 h-10 bg-muted rounded-lg"></div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-lg max-w-xs">
              <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">
                Our Expertise
              </p>
              <p className="text-sm font-semibold text-foreground">
                15+ years of proven biomedical engineering excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
