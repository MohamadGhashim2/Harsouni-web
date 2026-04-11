import { useEffect, useMemo, useRef, useState } from 'react'
import type { Locale } from '../../lib/locale'
import { useCountUp } from '../../hooks/useCountUp'

interface AnimatedCountProps {
  locale: Locale
  prefix?: string
  suffix?: string
  target: number
}

export const AnimatedCount = ({
  locale,
  prefix,
  suffix,
  target,
}: AnimatedCountProps) => {
  const elementRef = useRef<HTMLSpanElement | null>(null)
  const [hasEnteredView, setHasEnteredView] = useState(
    () =>
      typeof window !== 'undefined' && typeof window.IntersectionObserver === 'undefined',
  )
  const currentValue = useCountUp({
    shouldStart: hasEnteredView,
    target,
  })

  useEffect(() => {
    const element = elementRef.current

    if (!element || hasEnteredView) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries

        if (entry?.isIntersecting) {
          setHasEnteredView(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.45,
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [hasEnteredView])

  const formatter = useMemo(() => new Intl.NumberFormat(locale), [locale])

  return (
    <span ref={elementRef}>
      {prefix}
      {formatter.format(currentValue)}
      {suffix}
    </span>
  )
}
