import { cn } from '../../lib/cn'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description: string
  inverse?: boolean
  align?: 'start' | 'center'
  className?: string
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  inverse = false,
  align = 'start',
  className,
}: SectionHeadingProps) => (
  <div
    className={cn(
      'flex max-w-3xl flex-col gap-4',
      align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-start',
      className,
    )}
  >
    <span
      className={cn(
        'rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em]',
        inverse
          ? 'border-[var(--color-brand-200)] bg-[var(--color-brand-100)] text-[var(--color-brand-800)]'
          : 'border-[var(--color-brand-200)] bg-[var(--color-brand-50)] text-[var(--color-brand-700)]',
      )}
    >
      {eyebrow}
    </span>
    <h2
      className={cn(
        'text-balance text-3xl font-black leading-[1.18] tracking-[-0.04em] sm:text-4xl sm:leading-[1.16] lg:text-5xl lg:leading-[1.14]',
        'text-[var(--color-ink-900)]',
      )}
    >
      {title}
    </h2>
    <p
      className={cn(
        'max-w-2xl text-sm leading-7 sm:text-base',
        'text-[var(--color-ink-700)]',
      )}
    >
      {description}
    </p>
  </div>
)
