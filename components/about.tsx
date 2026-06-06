'use client'

import { Award, Boxes, Clock, MapPin, Wrench, Settings, Gauge, Headset } from 'lucide-react'
import { Watermark } from './watermark'
import { Reveal } from './reveal'
import { CountUp } from './count-up'

export function About() {
  const stats = [
    { icon: Award, value: '7+', label: 'Years of Experience' },
    { icon: Boxes, value: '4+', label: 'Brands Supported' },
    { icon: Clock, value: '24×7', label: 'Emergency Support' },
    { icon: MapPin, value: 'Pan-India', label: 'Service Coverage' },
  ]

  const focus = [
    { icon: Wrench, label: 'Maintenance & Repair' },
    { icon: Gauge, label: 'Calibration' },
    { icon: Settings, label: 'Installation' },
    { icon: Headset, label: 'Technical Support' },
  ]

  return (
    <section id="about" className="relative py-20 md:py-28 bg-muted/30 overflow-hidden">
      <Watermark text="Trusted Healthcare Partner" position="bottom-right" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Narrative */}
          <Reveal variant="left">
            <div className="space-y-6">
              <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance" style={{ fontFamily: 'var(--font-poppins)' }}>
                About K² Enterprise
              </h2>

              <div className="space-y-4 max-w-xl">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  K² Enterprise is a professional biomedical service company based in Ahmedabad, Gujarat, specializing in the maintenance, repair, calibration, and technical support of laboratory and diagnostic equipment.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We support hospitals, laboratories, diagnostic centers, and healthcare professionals with reliable biomedical engineering solutions focused on precision, efficiency, and dependable service.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our goal is to minimize equipment downtime and ensure smooth laboratory operations through fast response, preventive maintenance, and professional technical support.
                </p>
              </div>

              {/* Focus pills */}
              <div className="flex flex-wrap gap-3 pt-2">
                {focus.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                    >
                      <Icon className="w-4 h-4 text-primary shrink-0" />
                      {item.label}
                    </div>
                  )
                })}
              </div>
            </div>
          </Reveal>

          {/* Right — Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <Reveal key={i} delay={i * 80} variant="right">
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 card-hover hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                    <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 ring-1 ring-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <CountUp
                      value={stat.value}
                      className="relative block text-3xl font-bold text-primary"
                    />
                    <p className="relative mt-1 text-sm font-medium text-muted-foreground">{stat.label}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
