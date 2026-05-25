'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react' // CheckCircle2 is still used in benefits

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


        </div>
      </div>
    </section>
  )
}
