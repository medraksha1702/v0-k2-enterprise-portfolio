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
    <footer className="bg-foreground/5 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">K2</span>
              </div>
              <span className="font-bold text-foreground">K2 Enterprise</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional biomedical engineering services for healthcare facilities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Equipment Installation</li>
              <li>Preventive Maintenance</li>
              <li>Breakdown Repair</li>
              <li>Calibration Support</li>
              <li>AMC Contracts</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Get in Touch</h3>
            <div className="space-y-3">
              <a href="tel:+919724841765" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +91 97248 41765
              </a>
              <a href="mailto:kaushikkoshti628@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                kaushikkoshti628@gmail.com
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Ahmedabad, Gujarat
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {currentYear} K2 Enterprise. All rights reserved. | Professional Biomedical Equipment Solutions
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-primary" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
