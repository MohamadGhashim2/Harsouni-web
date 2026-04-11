import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  variant?: 'light' | 'dark' | 'outline'
  size?: 'md' | 'lg'
  external?: boolean
}

const variantClasses = {
  light:
    'bg-[var(--color-ivory)] text-[var(--color-brand-900)] hover:bg-white focus-visible:outline-[var(--color-ivory)]',
  dark:
    'bg-[var(--color-brand-200)] text-[var(--color-ink-900)] hover:bg-[var(--color-brand-300)] focus-visible:outline-[var(--color-brand-300)]',
  outline:
    'border border-current/20 bg-white/55 text-current hover:bg-white/78 focus-visible:outline-[var(--color-brand-300)]',
} as const

const sizeClasses = {
  md: 'min-h-12 px-5 text-sm sm:text-[0.95rem]',
  lg: 'min-h-14 px-6 text-sm sm:text-base',
} as const

export const ButtonLink = ({
  children,
  className,
  variant = 'dark',
  size = 'md',
  external = false,
  ...props
}: ButtonLinkProps) => (
  <a
    className={cn(
      'inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[0.01em] transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
      variantClasses[variant],
      sizeClasses[size],
      className,
    )}
    rel={external ? 'noreferrer' : props.rel}
    target={external ? '_blank' : props.target}
    {...props}
  >
    {children}
  </a>
)
