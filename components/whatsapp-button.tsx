'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

export function WhatsAppButton() {
  const [showNumber, setShowNumber] = useState(false)
  const phoneNumber = '919724841765' // +91 97248 41765
  const displayNumber = '+91 97248 41765'
  const message = 'Hello K² Enterprise, I need biomedical equipment support.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <>
      {/* WhatsApp Chat Button */}
      <button
        onClick={() => setShowNumber(!showNumber)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-4 py-3 shadow-lg transition-all duration-300 hover:scale-110 group"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="font-semibold hidden sm:inline text-sm">Chat with us</span>
      </button>

      {/* Phone Number Popup */}
      {showNumber && (
        <div className="fixed bottom-20 right-6 z-40 bg-white text-foreground rounded-xl shadow-xl p-4 min-w-max border border-primary/20">
          <div className="flex items-center justify-between gap-3 mb-3">
            <div>
              <p className="text-xs text-muted-foreground font-medium">Chat on WhatsApp with</p>
              <p className="text-lg font-bold text-primary">{displayNumber}</p>
            </div>
            <button
              onClick={() => setShowNumber(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg text-center text-sm transition-colors"
          >
            Open WhatsApp
          </a>
        </div>
      )}
    </>
  )
}
