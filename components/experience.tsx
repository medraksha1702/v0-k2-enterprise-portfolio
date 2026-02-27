'use client'

import { Award, Building2, GraduationCap } from 'lucide-react'

export function Experience() {
  const experiences = [
    {
      icon: Building2,
      period: 'Present',
      title: 'Biomedical Service & Sales Specialist',
      company: 'K2 Enterprise',
      description: 'Providing technical services and equipment solutions to hospitals, laboratories, and healthcare providers.',
    },
    {
      icon: Building2,
      period: 'Sept 2019 - Present',
      title: 'Biomedical Engineer',
      company: 'Sterling Accuris Wellness Pvt. Ltd.',
      description: 'Installation, maintenance, repair, and management of medical equipment across hospitals and diagnostic centers.',
    },
    {
      icon: Building2,
      period: 'Jun 2018 - Aug 2019',
      title: 'Biomedical Engineer',
      company: 'Sanjivani Super Speciality Hospital Pvt. Ltd.',
      description: 'Complete biomedical equipment support and maintenance for hospital facilities.',
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Experience & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Over a decade of proven expertise in biomedical engineering, equipment management, and healthcare solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8">Professional Journey</h3>
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

          {/* Right Column - Competencies & Education */}
          <div className="space-y-8">
            {/* Core Competencies */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Core Competencies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {competencies.map((comp, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span className="text-sm text-foreground">{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Education</h3>
              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">B.Tech in Biomedical & Instrumentation Engineering</p>
                    <p className="text-sm text-muted-foreground">CGPA: 8.98 — Gold Medalist</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Achievements</h3>
              <div className="space-y-3">
                {achievements.map((ach, i) => (
                  <div key={i} className="bg-card border border-border rounded-lg p-4">
                    <p className="text-sm font-semibold text-primary mb-1">{ach.rank}</p>
                    <p className="font-semibold text-foreground">{ach.title}</p>
                    <p className="text-sm text-muted-foreground">{ach.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
