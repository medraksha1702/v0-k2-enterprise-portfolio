'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    hospital: '',
    phone: '',
    equipment: '',
    issue: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', hospital: '', phone: '', equipment: '', issue: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
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
                  <p className="text-muted-foreground">+91 97248 41765</p>
                  <p className="text-sm text-muted-foreground mt-1">Available 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">kaushikkoshti628@gmail.com</p>
                  <p className="text-sm text-muted-foreground mt-1">Response within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="text-muted-foreground">Ahmedabad, Gujarat</p>
                  <p className="text-sm text-muted-foreground mt-1">Serving across India</p>
                </div>
              </div>
            </div>

            {/* Why Choose */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 space-y-4">
              <p className="font-semibold text-foreground">Why Choose K2 Enterprise?</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Fast response support</li>
                <li>✓ Component-level repair expertise</li>
                <li>✓ Cost-effective solutions</li>
                <li>✓ Professional documentation</li>
                <li>✓ Hospital-grade service standards</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
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
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold h-12"
              >
                {submitted ? '✓ Request Submitted' : 'Submit Service Request'}
              </Button>

              {submitted && (
                <div className="bg-primary/10 border border-primary/30 text-primary text-sm rounded-lg p-4">
                  Thank you! We'll contact you shortly with a response.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
