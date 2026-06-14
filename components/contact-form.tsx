'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send, HelpCircle, Activity } from 'lucide-react'
import { Reveal } from './reveal'
import { motion } from 'framer-motion'
import { ShaderBackground } from './ui/shader-background'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    hospital: '',
    phone: '',
    equipment: '',
    issue: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [whatsappData, setWhatsappData] = useState<{ phone: string; message: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setError(null)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/service-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Failed to submit request. Please try again.')
        setLoading(false)
        return
      }

      setSubmitted(true)
      if (data.whatsappData) {
        setWhatsappData(data.whatsappData)
      }
      setFormData({ name: '', hospital: '', phone: '', equipment: '', issue: '' })
      
      setTimeout(() => {
        setSubmitted(false)
        setWhatsappData(null)
      }, 9000)
    } catch (err) {
      setError('Network error. Please check your connection and try again.')
      console.error('Form submission error:', err)
    } finally {
      setLoading(false)
    }
  }

  // Floating icons — visible on all screens, small on mobile
  const floatingIcons = [
    { Icon: Mail, top: '12%', left: '2%', size: 18, speed: 12 },
    { Icon: Phone, top: '65%', left: '3%', size: 20, speed: 10 },
    { Icon: MapPin, top: '20%', left: '89%', size: 18, speed: 15 },
    { Icon: Send, top: '78%', left: '91%', size: 22, speed: 13 },
  ]

  return (
    <section id="contact" className="py-20 sm:py-28 md:py-36 relative overflow-hidden" style={{ backgroundColor: '#f0fafa' }}>
      {/* WebGL Animated Shader Background */}
      <ShaderBackground opacity={0.5} />

      {/* 1. Double-Layer Blueprint Grid Overlay (Subtle 2.5% opacity, clinical engineering look) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,109,111,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,109,111,0.025)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,109,111,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,109,111,0.01)_1px,transparent_1px)] bg-[size:8px_8px] pointer-events-none z-0" />

      {/* Floating Biomedical Icons (Subtle, 3-5% opacity) */}
      {floatingIcons.map(({ Icon, top, left, size, speed }, index) => (
        <motion.div
          key={`icon-${index}`}
          className="absolute text-primary/[0.07] pointer-events-none z-0"
          style={{ top, left }}
          animate={{ y: [-10, 10, -10], rotate: [-6, 6, -6] }}
          transition={{ duration: speed, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
        >
          <Icon size={size} strokeWidth={1} />
        </motion.div>
      ))}

      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Contact Info (5 cols) */}
          <Reveal variant="fade" className="lg:col-span-5 w-full">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block text-sm font-semibold text-primary bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
                  Connect With Us
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight" style={{ fontFamily: 'var(--font-poppins)', color: '#00292a' }}>
                  Request Service
                </h2>
                <p className="text-lg leading-relaxed font-light" style={{ color: '#1a4040' }}>
                  Submit a ticket to our technical dispatch unit. Our certified field specialists respond promptly to clinical queries.
                </p>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-3.5 p-4 rounded-xl border border-primary/15 bg-primary/5 backdrop-blur-md">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
                <div>
                  <p className="text-xs font-semibold text-foreground">Operational Status: Online</p>
                  <p className="text-[11px] text-muted-foreground">Emergency dispatch queue response time &lt; 2 hours</p>
                </div>
              </div>

              {/* Contact Details (Glass Cards) */}
              <div className="space-y-4">
                
                <a
                  href="tel:+919510768056"
                  className="group flex items-center gap-4 rounded-2xl border border-border/80 bg-card/45 backdrop-blur-md p-4 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5.5 h-5.5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Voice Direct</p>
                    <p className="text-base font-extrabold text-foreground group-hover:text-primary transition-colors">+91 9510768056</p>
                    <p className="text-[10px] text-muted-foreground">Mon–Sat · Priority Standby</p>
                  </div>
                </a>

                <a
                  href="mailto:k2biomedicalservice@gmail.com"
                  className="group flex items-center gap-4 rounded-2xl border border-border/80 bg-card/45 backdrop-blur-md p-4 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5.5 h-5.5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Secure Dispatch</p>
                    <p className="text-sm sm:text-base font-extrabold text-foreground group-hover:text-primary transition-colors break-all">k2biomedicalservice@gmail.com</p>
                    <p className="text-[10px] text-muted-foreground">Digital ticket tracking enabled</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-border/80 bg-card/45 backdrop-blur-md p-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5.5 h-5.5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Base Operations</p>
                    <p className="text-base font-extrabold text-foreground">Ahmedabad, Gujarat</p>
                    <p className="text-[10px] text-muted-foreground">Serving medical facilities pan-Gujarat</p>
                  </div>
                </div>

              </div>
            </div>
          </Reveal>

          {/* Right: Glowing Form (7 cols) */}
          <Reveal variant="fade" delay={120} className="lg:col-span-7 w-full">
            <div className="glass-card border border-primary/20 bg-card/25 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 shadow-2xl relative">
              
              {/* Decorative high-tech grid crosshairs */}
              <div className="absolute top-4 right-4 text-primary/30 pointer-events-none select-none">
                <Activity size={18} />
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-foreground uppercase tracking-widest mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="e.g. Dr. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="glow-input bg-background/50 border-border h-11 rounded-xl"
                    />
                  </div>

                  <div>
                    <label htmlFor="hospital" className="block text-xs font-bold text-foreground uppercase tracking-widest mb-2">
                      Facility Name *
                    </label>
                    <Input
                      id="hospital"
                      name="hospital"
                      placeholder="e.g. Sterling Hospital"
                      value={formData.hospital}
                      onChange={handleChange}
                      required
                      className="glow-input bg-background/50 border-border h-11 rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-foreground uppercase tracking-widest mb-2">
                      Contact Phone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+91"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="glow-input bg-background/50 border-border h-11 rounded-xl"
                    />
                  </div>

                  <div>
                    <label htmlFor="equipment" className="block text-xs font-bold text-foreground uppercase tracking-widest mb-2">
                      Equipment Model / Type *
                    </label>
                    <Input
                      id="equipment"
                      name="equipment"
                      placeholder="e.g. Mindray Hematology Analyzer"
                      value={formData.equipment}
                      onChange={handleChange}
                      required
                      className="glow-input bg-background/50 border-border h-11 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="issue" className="block text-xs font-bold text-foreground uppercase tracking-widest mb-2">
                    Describe System Issue *
                  </label>
                  <Textarea
                    id="issue"
                    name="issue"
                    placeholder="Provide details on error codes, calibration drift, or failure states..."
                    value={formData.issue}
                    onChange={handleChange}
                    required
                    className="glow-input bg-background/50 border-border rounded-xl resize-none"
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading || submitted}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/95 hover:to-secondary/95 disabled:bg-primary/40 text-primary-foreground text-sm font-bold tracking-widest uppercase h-12 rounded-xl transition-all duration-300 shadow-lg shadow-primary/15"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-background/20 border-t-background rounded-full animate-spin" />
                      Broadcasting Request...
                    </span>
                  ) : submitted ? (
                    '✓ Request Submitted Successfully'
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={15} />
                      Transmit Ticket
                    </span>
                  )}
                </Button>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-500/10 border border-red-500/35 text-red-500 dark:text-red-400 text-xs rounded-xl p-4 flex items-start gap-2.5"
                  >
                    <HelpCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <p>{error}</p>
                  </motion.div>
                )}

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-4"
                  >
                    <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs rounded-xl p-4">
                      <p className="font-bold mb-1">Transmission Confirmed</p>
                      <p className="font-light leading-relaxed">
                        Ticket successfully routed. A calibration engineer will contact you shortly at {formData.phone} to arrange coordinates.
                      </p>
                    </div>
                    
                    {whatsappData && (
                      <div className="bg-primary/5 border border-primary/20 text-foreground rounded-xl p-4 space-y-3.5">
                        <p className="font-bold text-xs tracking-wider uppercase">Direct Bypass Connection</p>
                        <a
                          href={`https://wa.me/${whatsappData.phone}?text=${encodeURIComponent(whatsappData.message)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold tracking-wider uppercase py-2.5 px-5 rounded-xl text-xs transition-all duration-300 shadow-md shadow-emerald-500/20"
                        >
                          💬 Launch WhatsApp Bridge
                        </a>
                      </div>
                    )}
                  </motion.div>
                )}
              </form>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
