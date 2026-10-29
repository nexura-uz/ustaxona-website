'use client'

import { type ReactNode, useEffect, useRef } from 'react'

// A section's parts rise in one after another as it scrolls into view. Only blocks still below the fold are held
// back, and only once this script runs, so without it (or with reduced motion) everything simply shows.
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (el.getBoundingClientRect().top < innerHeight) return
    el.dataset.reveal = 'waiting'
    const seen = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      el.dataset.reveal = 'shown'
      seen.disconnect()
    }, { rootMargin: '0px 0px -12% 0px' })
    seen.observe(el)
    return () => seen.disconnect()
  }, [])
  return <div ref={ref} className={className}>{children}</div>
}
