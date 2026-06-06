'use client'

import { Building2 } from 'lucide-react'
import { Reveal } from './reveal'

export function Experience() {
  const experiences = [
    {
      icon: Building2,
      period: '1',
      title: 'Inspection & Diagnosis',
      company: 'Initial Assessment',
      description: 'We carefully inspect the equipment and identify the root cause of the issue.',
    },
    {
      icon: Building2,
      period: '2',
      title: 'Technical Evaluation',
      company: 'In-Depth Analysis',
      description: 'Detailed troubleshooting and performance evaluation by experienced biomedical professionals.',
    },
    {
      icon: Building2,
      period: '3',
      title: 'Repair & Calibration',
      company: 'Expert Service',
      description: 'Accurate repair, servicing, calibration, and replacement support where required.',
    },
    {
      icon: Building2,
      period: '4',
      title: 'Testing & Final Support',
      company: 'Quality Assurance',
      description: 'Complete testing and quality checks before equipment handover.',
    },
  ]

  return (
    <section id="experience" className="py-14 sm:py-20 md:py-28 bg-muted/30 overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="space-y-4 mb-16">
            <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance" style={{ fontFamily: 'var(--font-poppins)' }}>
              Our Working Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A systematic, professional approach to biomedical equipment service and support.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Service Process Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8">Service Steps</h3>
            {experiences.map((exp, i) => (
              <Reveal key={i} delay={i * 90} variant="up">
                <div className="relative pl-10 border-l-2 border-primary/30 pb-8 last:pb-0">
                  <div className="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-primary text-primary-foreground border-4 border-background flex items-center justify-center text-xs font-bold">
                    {exp.period}
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                    <p className="text-sm text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed pt-1">{exp.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right Column - About Us */}
          <div className="space-y-8">
            {/* Service Availability */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Service Availability</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  <span className="text-foreground font-medium">Monday – Saturday</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  <span className="text-foreground font-medium">Emergency Technical Support Available</span>
                </div>
              </div>
            </div>

            {/* About Owner */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Meet The Proprietor</h3>
              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <div>
                  <p className="font-semibold text-foreground">Kaushik Koshti</p>
                  <p className="text-sm text-muted-foreground mb-3">Proprietor — K² Enterprise</p>
                  <p className="text-sm text-muted-foreground italic">
                    &quot;Our mission is to provide reliable biomedical support with precision, professionalism, and long-term customer trust.&quot;
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}
