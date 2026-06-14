'use client'

import { useState, useEffect } from 'react'

interface TypewriterProps {
  words: string[]
  className?: string
  typingSpeed?: number
  erasingSpeed?: number
  pauseTime?: number
}

export function Typewriter({
  words,
  className = '',
  typingSpeed = 80,
  erasingSpeed = 45,
  pauseTime = 1800,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) {
      const timer = setTimeout(() => {
        setIsPaused(false)
        setIsTyping(false)
      }, pauseTime)
      return () => clearTimeout(timer)
    }

    const currentWord = words[wordIndex]

    if (isTyping) {
      if (displayed.length < currentWord.length) {
        const timer = setTimeout(() => {
          setDisplayed(currentWord.slice(0, displayed.length + 1))
        }, typingSpeed)
        return () => clearTimeout(timer)
      } else {
        // Finished typing — pause before erasing
        setIsPaused(true)
      }
    } else {
      if (displayed.length > 0) {
        const timer = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1))
        }, erasingSpeed)
        return () => clearTimeout(timer)
      } else {
        // Finished erasing — move to next word
        setWordIndex((i) => (i + 1) % words.length)
        setIsTyping(true)
      }
    }
  }, [displayed, isTyping, isPaused, wordIndex, words, typingSpeed, erasingSpeed, pauseTime])

  return (
    <span className={className}>
      {displayed}
      {/* Blinking cursor */}
      <span
        className="inline-block w-0.5 h-[1em] bg-current ml-0.5 align-middle animate-pulse"
        aria-hidden
      />
    </span>
  )
}
