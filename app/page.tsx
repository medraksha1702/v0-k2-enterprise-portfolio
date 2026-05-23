import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Trust } from '@/components/trust'
import { Brands } from '@/components/brands'
import { Experience } from '@/components/experience'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Trust />
      <Brands />
      <Experience />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
