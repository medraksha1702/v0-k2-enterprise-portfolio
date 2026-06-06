'use client'

/** Thin announcement bar with rotating brand messages scrolling left -> right. */
export function TopBanner() {
  const phrases = [
    'Where Precision Meets Dedication',
    '7+ Years of Biomedical Expertise',
    '24×7 Emergency Technical Support',
    'Serving Hospitals, Labs & Diagnostic Centers',
    'Installation · Maintenance · Calibration · Repair',
    'Pan-India Service Coverage',
  ]

  return (
    <div className="marquee-track relative z-30 overflow-hidden bg-secondary text-white">
      <div className="marquee gap-8 py-1.5">
        {[...phrases, ...phrases].map((phrase, i) => (
          <span key={i} className="inline-flex items-center gap-8 whitespace-nowrap text-xs font-medium tracking-wide">
            {phrase}
            <span className="text-white/40">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
