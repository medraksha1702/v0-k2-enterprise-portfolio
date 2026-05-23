'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-secondary text-white border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K2</span>
              </div>
              <span className="font-bold text-white">K2 Enterprise</span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              Where Precision Meets Dedication. Professional Biomedical Equipment Service & Support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Key Services</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>CBC Analyzer Service</li>
              <li>Biochemistry Analyzer Support</li>
              <li>Microscope Maintenance</li>
              <li>Centrifuge Service</li>
              <li>Preventive Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Get in Touch</h3>
            <div className="space-y-3">
              <a href="tel:+919510768056" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +91 9510768056
              </a>
              <a href="mailto:k2biomedicalservice@gmail.com" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                k2biomedicalservice@gmail.com
              </a>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Ahmedabad, Gujarat
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/70 text-center sm:text-left">
            © {currentYear} K² Enterprise. All Rights Reserved. | Serving Hospitals, Laboratories & Diagnostic Centers Across Gujarat.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
