import {
  startTransition,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type TouchEvent as ReactTouchEvent,
} from 'react'
import { cn } from '../../lib/cn'

interface MediaCarouselItem {
  alt: string
  src: string
}

interface MediaCarouselLabels {
  nextLabel: string
  previousLabel: string
  regionLabel: string
  slideButtonLabel: string
}

interface MediaCarouselProps {
  autoAdvanceMs: number
  className?: string
  items: MediaCarouselItem[]
  labels: MediaCarouselLabels
  testId?: string
}

const wrapIndex = (index: number, total: number) => {
  if (total <= 0) {
    return 0
  }

  const remainder = index % total

  return remainder >= 0 ? remainder : remainder + total
}

const ArrowIcon = ({ direction }: { direction: 'next' | 'previous' }) => (
  <svg
    aria-hidden="true"
    className={cn('h-4 w-4 transition-transform duration-200', direction === 'previous' && 'rotate-180')}
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      d="M7 4.5L12.5 10L7 15.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
)

export const MediaCarousel = ({
  autoAdvanceMs,
  className,
  items,
  labels,
  testId = 'media-carousel',
}: MediaCarouselProps) => {
  const viewportRef = useRef<HTMLDivElement>(null)
  const pointerIdRef = useRef<number | null>(null)
  const isDraggingRef = useRef(false)
  const touchSettleTimeoutRef = useRef<number | null>(null)
  const dragStartXRef = useRef(0)
  const dragStartScrollLeftRef = useRef(0)

  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isInView, setIsInView] = useState(false)

  const syncActiveIndex = () => {
    const viewport = viewportRef.current

    if (!viewport || items.length === 0) {
      return
    }

    const slideWidth = Math.max(viewport.clientWidth, 1)
    const nextIndex = Math.min(
      Math.max(Math.round(viewport.scrollLeft / slideWidth), 0),
      items.length - 1,
    )

    startTransition(() => {
      setActiveIndex((currentIndex) =>
        currentIndex === nextIndex ? currentIndex : nextIndex,
      )
    })
  }

  const scrollToIndex = (
    targetIndex: number,
    behavior: ScrollBehavior = 'smooth',
  ) => {
    const viewport = viewportRef.current

    if (!viewport || items.length === 0) {
      return
    }

    const nextIndex = wrapIndex(targetIndex, items.length)

    startTransition(() => {
      setActiveIndex(nextIndex)
    })

    viewport.scrollTo({
      behavior,
      left: viewport.clientWidth * nextIndex,
    })
  }

  const settleAtNearestSlide = () => {
    const viewport = viewportRef.current

    if (!viewport || items.length === 0) {
      return
    }

    const slideWidth = Math.max(viewport.clientWidth, 1)
    const nearestIndex = Math.round(viewport.scrollLeft / slideWidth)

    scrollToIndex(nearestIndex)
  }

  const goToPrevious = () => {
    scrollToIndex(activeIndex - 1)
  }

  useEffect(() => {
    const viewport = viewportRef.current

    if (!viewport || items.length <= 1) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      {
        threshold: 0.45,
      },
    )

    observer.observe(viewport)

    return () => observer.disconnect()
  }, [items.length])

  useEffect(() => {
    if (items.length <= 1 || !isInView || isDragging) {
      return
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) {
      return
    }

    const intervalId = window.setInterval(() => {
      const viewport = viewportRef.current

      if (!viewport || items.length === 0) {
        return
      }

      const nextIndex = wrapIndex(activeIndex + 1, items.length)

      startTransition(() => {
        setActiveIndex(nextIndex)
      })

      viewport.scrollTo({
        behavior: 'smooth',
        left: viewport.clientWidth * nextIndex,
      })
    }, autoAdvanceMs)

    return () => window.clearInterval(intervalId)
  }, [activeIndex, autoAdvanceMs, isDragging, isInView, items.length])

  useEffect(() => {
    const handleResize = () => {
      const viewport = viewportRef.current

      if (!viewport || items.length === 0) {
        return
      }

      viewport.scrollTo({
        behavior: 'auto',
        left: viewport.clientWidth * activeIndex,
      })
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [activeIndex, items.length])

  const releasePointerCapture = (pointerId: number) => {
    const viewport = viewportRef.current

    if (viewport?.hasPointerCapture(pointerId)) {
      viewport.releasePointerCapture(pointerId)
    }
  }

  const clearTouchSettleTimeout = () => {
    if (touchSettleTimeoutRef.current !== null) {
      window.clearTimeout(touchSettleTimeoutRef.current)
      touchSettleTimeoutRef.current = null
    }
  }

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (items.length <= 1) {
      return
    }

    if (event.pointerType !== 'mouse') {
      return
    }

    if (event.button !== 0) {
      return
    }

    const viewport = viewportRef.current

    if (!viewport) {
      return
    }

    pointerIdRef.current = event.pointerId
    isDraggingRef.current = true
    dragStartXRef.current = event.clientX
    dragStartScrollLeftRef.current = viewport.scrollLeft
    viewport.setPointerCapture(event.pointerId)
    setIsDragging(true)
  }

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) {
      return
    }

    const viewport = viewportRef.current

    if (!viewport) {
      return
    }

    event.preventDefault()

    const deltaX = event.clientX - dragStartXRef.current

    viewport.scrollLeft = dragStartScrollLeftRef.current - deltaX
    syncActiveIndex()
  }

  const handleTouchStart = (_event: ReactTouchEvent<HTMLDivElement>) => {
    if (items.length <= 1) {
      return
    }

    clearTouchSettleTimeout()
    setIsDragging(true)
  }

  const handleTouchEnd = () => {
    if (items.length <= 1) {
      return
    }

    clearTouchSettleTimeout()
    touchSettleTimeoutRef.current = window.setTimeout(() => {
      setIsDragging(false)
      settleAtNearestSlide()
    }, 120)
  }

  const endDrag = (pointerId: number) => {
    if (pointerIdRef.current !== pointerId) {
      return
    }

    pointerIdRef.current = null

    if (!isDraggingRef.current) {
      releasePointerCapture(pointerId)

      return
    }

    isDraggingRef.current = false
    releasePointerCapture(pointerId)
    setIsDragging(false)
    settleAtNearestSlide()
  }

  useEffect(
    () => () => {
      clearTouchSettleTimeout()
    },
    [],
  )

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[34px] border border-[var(--color-brand-100)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,246,232,0.98))] p-3 shadow-[var(--shadow-soft)] sm:p-4',
        className,
      )}
      data-testid={testId}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,128,0,0.12),transparent_52%)]" />

      <div className="relative space-y-4">
        <div className="flex items-center justify-between gap-3 px-1">
          <div className="inline-flex items-center rounded-full border border-[var(--color-brand-200)] bg-[var(--color-brand-50)] px-3 py-1 text-xs font-bold tracking-[0.24em] text-[var(--color-brand-800)] uppercase">
            <span data-testid={`${testId}-status`}>
              {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </span>
          </div>

          {items.length > 1 ? (
            <div className="flex items-center gap-2" dir="ltr">
              <button
                aria-label={labels.previousLabel}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-brand-200)] bg-white text-[var(--color-ink-900)] transition hover:border-[var(--color-brand-400)] hover:bg-[var(--color-brand-50)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-500)]"
                onClick={() => goToPrevious()}
                type="button"
              >
                <ArrowIcon direction="previous" />
              </button>
              <button
                aria-label={labels.nextLabel}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-brand-200)] bg-white text-[var(--color-ink-900)] transition hover:border-[var(--color-brand-400)] hover:bg-[var(--color-brand-50)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-500)]"
                onClick={() => scrollToIndex(activeIndex + 1)}
                type="button"
              >
                <ArrowIcon direction="next" />
              </button>
            </div>
          ) : null}
        </div>

        <div
          aria-label={labels.regionLabel}
          className="overflow-hidden rounded-[28px]"
          role="region"
        >
          <div
            className={cn(
              'carousel-scrollbar-hidden flex snap-x snap-mandatory overflow-x-auto rounded-[28px] scroll-smooth',
              isDragging ? 'cursor-grabbing' : 'cursor-grab',
            )}
            data-testid={`${testId}-viewport`}
            dir="ltr"
            onLostPointerCapture={(event) => endDrag(event.pointerId)}
            onPointerCancel={(event) => endDrag(event.pointerId)}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={(event) => endDrag(event.pointerId)}
            onScroll={syncActiveIndex}
            onTouchCancel={handleTouchEnd}
            onTouchEnd={handleTouchEnd}
            onTouchStart={handleTouchStart}
            ref={viewportRef}
            style={{ touchAction: 'pan-x pan-y' }}
          >
            {items.map((item, index) => (
              <div
                className="min-w-full snap-center"
                data-testid={`${testId}-slide-${index}`}
                key={`${item.src}-${index}`}
              >
                <div className="rounded-[28px] border border-[rgba(36,19,0,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,247,235,0.94))] p-1.5 transition-transform duration-300 sm:scale-[1.02] sm:p-2">
                  <img
                    alt={item.alt}
                    className="aspect-[3/4] w-full rounded-[22px] object-cover shadow-[0_18px_60px_rgba(36,19,0,0.16)]"
                    decoding="async"
                    draggable={false}
                    loading="lazy"
                    sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 20rem"
                    src={item.src}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {items.length > 1 ? (
          <div className="flex items-center justify-center gap-2">
            {items.map((item, index) => (
              <button
                aria-label={`${labels.slideButtonLabel} ${index + 1}`}
                aria-pressed={index === activeIndex}
                className={cn(
                  'h-2.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-500)]',
                  index === activeIndex
                    ? 'w-10 bg-[var(--color-brand-700)]'
                    : 'w-2.5 bg-[var(--color-brand-200)] hover:bg-[var(--color-brand-300)]',
                )}
                data-testid={`${testId}-dot-${index}`}
                key={`${item.alt}-${index}`}
                onClick={() => scrollToIndex(index)}
                type="button"
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}
