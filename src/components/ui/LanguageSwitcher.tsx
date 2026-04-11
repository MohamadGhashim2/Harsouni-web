import type { Locale } from '../../lib/locale'
import { cn } from '../../lib/cn'

interface LanguageSwitcherProps {
  currentLocale: Locale
  onChange: (locale: Locale) => void
  label: string
  locales: Record<Locale, { short: string; label: string }>
}

export const LanguageSwitcher = ({
  currentLocale,
  onChange,
  label,
  locales,
}: LanguageSwitcherProps) => (
  <div
    aria-label={label}
    className="inline-flex items-center rounded-full border border-[var(--color-brand-100)] bg-white/70 p-1 text-[var(--color-ink-900)] backdrop-blur"
    data-testid="language-switcher"
    role="group"
  >
    {(Object.keys(locales) as Locale[]).map((locale) => {
      const isActive = locale === currentLocale

      return (
        <button
          key={locale}
          className={cn(
            'rounded-full px-3 py-2 text-xs font-semibold transition sm:px-4',
            isActive
              ? 'bg-[var(--color-brand-200)] text-[var(--color-brand-900)]'
              : 'text-[var(--color-ink-800)] hover:bg-[var(--color-brand-50)]',
          )}
          data-testid={`locale-${locale}`}
          onClick={() => onChange(locale)}
          type="button"
        >
          <span className="sr-only">{locales[locale].label}</span>
          {locales[locale].short}
        </button>
      )
    })}
  </div>
)
