import { useEffect, useState } from 'react'

interface UseCountUpOptions {
  durationMs?: number
  shouldStart: boolean
  target: number
}

const easeOutCubic = (progress: number) => 1 - (1 - progress) ** 3

export const useCountUp = ({
  durationMs = 1400,
  shouldStart,
  target,
}: UseCountUpOptions) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!shouldStart) {
      return
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) {
      const frameId = window.requestAnimationFrame(() => setValue(target))

      return () => window.cancelAnimationFrame(frameId)
    }

    let animationFrameId = 0
    let startTime: number | null = null

    const tick = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp
      }

      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / durationMs, 1)
      const easedProgress = easeOutCubic(progress)

      setValue(Math.round(target * easedProgress))

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(tick)
      }
    }

    animationFrameId = window.requestAnimationFrame(tick)

    return () => window.cancelAnimationFrame(animationFrameId)
  }, [durationMs, shouldStart, target])

  return value
}
