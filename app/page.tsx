'use client'

import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Trust } from '@/components/trust'
import { Experience } from '@/components/experience'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { ScrollProgress } from '@/components/scroll-progress'
import { ScrollToTop } from '@/components/scroll-to-top'
import { TopBanner } from '@/components/top-banner'
import { TechDivider } from '@/components/tech-divider'
import { MedicalCursor } from '@/components/ui/medical-cursor'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Global animated medical crosshair cursor */}
      <MedicalCursor />

      <ScrollProgress />
      <TopBanner />
      <Header />
      <Hero />
      <TechDivider />
      <About />
      <TechDivider />
      <Services />
      <TechDivider />
      <Trust />
      <TechDivider />
      <Experience />
      <TechDivider />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  )
}
