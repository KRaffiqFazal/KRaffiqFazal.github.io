import { useEffect, useRef, useState } from 'react'

interface Options {
  direction?: 'up' | 'left' | 'right'
  delay?: number
  threshold?: number
}

export function useScrollReveal({ direction = 'up', delay = 0, threshold = 0.15 }: Options = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { setVisible(entry.isIntersecting) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  const hiddenTransform = direction === 'left'
    ? 'translateX(-60px)'
    : direction === 'right'
    ? 'translateX(60px)'
    : 'translateY(40px)'

  return {
    ref,
    sx: {
      opacity: visible ? 1 : 0,
      transform: visible ? 'translate(0, 0)' : hiddenTransform,
      transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
    },
  }
}
