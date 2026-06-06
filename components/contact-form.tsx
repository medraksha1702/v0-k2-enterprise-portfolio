'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Reveal } from './reveal'

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
      }, 8000)
    } catch (err) {
      setError('Network error. Please check your connection and try again.')
      console.error('Form submission error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <Reveal variant="fade">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance" style={{ fontFamily: 'var(--font-poppins)' }}>
                Request Your Service
              </h2>
              <p className="text-lg text-muted-foreground">
                Get in touch with our technical team. We respond quickly and professionally to all service requests.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-muted-foreground">+91 9510768056</p>
                  <p className="text-sm text-muted-foreground mt-1">Monday – Saturday</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">k2biomedicalservice@gmail.com</p>
                  <p className="text-sm text-muted-foreground mt-1">Quick response support</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="text-muted-foreground">Ahmedabad, Gujarat</p>
                  <p className="text-sm text-muted-foreground mt-1">Serving hospitals & laboratories across Gujarat</p>
                </div>
              </div>
            </div>

            {/* Why Choose */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 space-y-4">
              <p className="font-semibold text-foreground">Why Choose K² Enterprise?</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Precision-driven service approach</li>
                <li>✓ Dedicated technical team support</li>
                <li>✓ Experienced biomedical expertise</li>
                <li>✓ Reliable preventive maintenance</li>
                <li>✓ Customer-centric relationships</li>
              </ul>
            </div>
          </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal variant="fade" delay={120}>
          <div className="bg-card border border-border rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Your Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label htmlFor="hospital" className="block text-sm font-semibold text-foreground mb-2">
                  Hospital/Laboratory Name *
                </label>
                <Input
                  id="hospital"
                  name="hospital"
                  placeholder="Your facility name"
                  value={formData.hospital}
                  onChange={handleChange}
                  required
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="+91"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label htmlFor="equipment" className="block text-sm font-semibold text-foreground mb-2">
                  Equipment Type *
                </label>
                <Input
                  id="equipment"
                  name="equipment"
                  placeholder="e.g., ECG Machine, Ventilator, etc."
                  value={formData.equipment}
                  onChange={handleChange}
                  required
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label htmlFor="issue" className="block text-sm font-semibold text-foreground mb-2">
                  Issue Description *
                </label>
                <Textarea
                  id="issue"
                  name="issue"
                  placeholder="Describe the issue or service needed..."
                  value={formData.issue}
                  onChange={handleChange}
                  required
                  className="bg-background border-border resize-none"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                disabled={loading || submitted}
                className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground text-base font-semibold h-12 transition-all"
              >
                {loading ? 'Submitting...' : submitted ? '✓ Request Submitted Successfully' : 'Submit Service Request'}
              </Button>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-4">
                  {error}
                </div>
              )}

              {submitted && (
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg p-4">
                    <p className="font-semibold mb-1">Thank you for your service request!</p>
                    <p>We've received your request and our team will contact you shortly at {formData.phone}.</p>
                  </div>
                  
                  {whatsappData && (
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-lg p-4 space-y-3">
                      <p className="font-semibold text-sm">You can also reach us directly on WhatsApp:</p>
                      <a
                        href={`https://wa.me/${whatsappData.phone}?text=${encodeURIComponent(whatsappData.message)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors"
                      >
                        <span>💬</span>
                        Open WhatsApp Chat
                      </a>
                    </div>
                  )}
                </div>
              )}
            </form>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
