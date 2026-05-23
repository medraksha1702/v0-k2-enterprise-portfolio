'use client'

import { Award, Building2, GraduationCap } from 'lucide-react'

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

  const competencies = [
    'Biomedical Equipment Management',
    'Procurement & Operations',
    'Inventory Management',
    'NABL/NABH Audit Documentation',
    'Technical Staff Training',
    'Troubleshooting & Diagnostics',
    'Leadership & Planning',
    'Component-Level Repair',
  ]

  const achievements = [
    {
      rank: '1st Rank',
      title: 'Paper Presentation',
      event: 'CONVERGENCE 2018',
    },
    {
      rank: '1st Rank',
      title: 'Poster Presentation',
      event: 'CONVERGENCE 2018',
    },
    {
      rank: '2nd Rank',
      title: 'GNU SciTechFest 2018',
      event: 'Technical Competition',
    },
  ]

  return (
    <section id="experience" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance" style={{ fontFamily: 'var(--font-poppins)' }}>
            Our Working Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A systematic, professional approach to biomedical equipment service and support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Service Process Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8">Service Steps</h3>
            {experiences.map((exp, i) => {
              const Icon = exp.icon
              return (
                <div key={i} className="relative pl-8 border-l-2 border-primary/30 pb-8 last:pb-0">
                  <div className="absolute -left-4 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background"></div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-primary uppercase">{exp.period}</p>
                    <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                    <p className="text-sm text-muted-foreground font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed pt-2">{exp.description}</p>
                  </div>
                </div>
              )
            })}
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
