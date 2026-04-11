import { cn } from '../../lib/cn'

interface LogoProps {
  logoSrc: string
  alt: string
  siteName: string
  descriptor: string
  className?: string
}

export const Logo = ({ logoSrc, alt, siteName, descriptor, className }: LogoProps) => (
  <div className={cn('flex items-center gap-3', className)}>
    <img
      alt={alt}
      className="h-12 w-12 rounded-2xl border border-[var(--color-brand-100)] object-cover shadow-[0_12px_32px_rgba(0,0,0,0.12)]"
      src={logoSrc}
    />
    <div className="flex min-w-0 flex-col">
      <span className="truncate text-sm font-extrabold tracking-[0.18em] text-[var(--color-ink-900)] uppercase">
        {siteName}
      </span>
      <span className="truncate text-[0.72rem] text-[var(--color-ink-700)]">{descriptor}</span>
    </div>
  </div>
)
