export function Watermark({ text = 'Biomedical Engineering Expert', position = 'bottom-right' }: { text?: string; position?: string }) {
  const positionClasses = {
    'top-right': 'top-4 right-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-left': 'top-4 left-4',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  }

  return (
    <div className={`absolute ${positionClasses[position as keyof typeof positionClasses] || positionClasses['bottom-right']} pointer-events-none`}>
      <div className="opacity-10 text-primary/50">
        <p className="text-sm font-semibold tracking-widest whitespace-nowrap" style={{ fontFamily: 'var(--font-poppins)' }}>
          {text}
        </p>
      </div>
    </div>
  )
}

export function BackgroundWatermark({ text = 'K² Enterprise' }: { text?: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <div className="opacity-5 text-primary/30 text-8xl font-bold select-none" style={{ fontFamily: 'var(--font-poppins)' }}>
        {text}
      </div>
    </div>
  )
}
