import { useState } from 'react'
import { Icon } from '../../assets/icons/iconMap'
import { sectionIds } from '../../config/navigation'
import type { Locale } from '../../lib/locale'
import { ButtonLink } from '../ui/ButtonLink'
import { Container } from '../ui/Container'
import { LanguageSwitcher } from '../ui/LanguageSwitcher'
import { Logo } from '../ui/Logo'

interface NavigationItem {
  href: string
  label: string
}

interface HeaderProps {
  currentLocale: Locale
  descriptor: string
  labels: {
    closeMenu: string
    navigation: string
    openMenu: string
    switcher: string
  }
  localeLabels: Record<Locale, { short: string; label: string }>
  logoAlt: string
  logoSrc: string
  navigationItems: NavigationItem[]
  onLocaleChange: (locale: Locale) => void
  primaryCta: {
    href: string
    label: string
  }
  siteName: string
}

export const Header = ({
  currentLocale,
  descriptor,
  labels,
  localeLabels,
  logoAlt,
  logoSrc,
  navigationItems,
  onLocaleChange,
  primaryCta,
  siteName,
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <Container className="pt-2 sm:pt-4">
        <div className="rounded-[28px] border border-[var(--color-brand-100)] bg-[linear-gradient(135deg,rgba(255,248,238,0.96),rgba(255,240,214,0.94))] px-4 py-3 text-[var(--color-ink-900)] shadow-[0_22px_60px_rgba(69,29,0,0.14)] backdrop-blur-2xl sm:px-5">
          <div className="flex items-center justify-between gap-4">
            <a href={`#${sectionIds.home}`}>
              <Logo
                alt={logoAlt}
                descriptor={descriptor}
                logoSrc={logoSrc}
                siteName={siteName}
              />
            </a>

            <nav
              aria-label={labels.navigation}
              className="hidden items-center gap-6 lg:flex"
            >
              {navigationItems.map((item) => (
                <a
                  className="text-sm font-medium text-[var(--color-ink-700)] transition hover:text-[var(--color-brand-800)]"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <LanguageSwitcher
                currentLocale={currentLocale}
                label={labels.switcher}
                locales={localeLabels}
                onChange={onLocaleChange}
              />
              <ButtonLink href={primaryCta.href} variant="light">
                {primaryCta.label}
              </ButtonLink>
            </div>

            <button
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? labels.closeMenu : labels.openMenu}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-brand-100)] bg-white/70 text-[var(--color-ink-900)] transition hover:bg-white lg:hidden"
              data-testid="mobile-menu-toggle"
              onClick={() => setIsMenuOpen((current) => !current)}
              type="button"
            >
              <Icon
                aria-hidden="true"
                className="h-5 w-5"
                name={isMenuOpen ? 'close' : 'menu'}
              />
            </button>
          </div>

          {isMenuOpen ? (
            <div className="mt-4 space-y-4 border-t border-[var(--color-brand-100)] pt-4 lg:hidden">
              <nav aria-label={labels.navigation} className="flex flex-col gap-2">
                {navigationItems.map((item) => (
                  <a
                    className="rounded-2xl px-3 py-3 text-sm font-medium text-[var(--color-ink-800)] transition hover:bg-white hover:text-[var(--color-brand-800)]"
                    href={item.href}
                    key={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="flex flex-col gap-3 border-t border-[var(--color-brand-100)] pt-4">
                <LanguageSwitcher
                  currentLocale={currentLocale}
                  label={labels.switcher}
                  locales={localeLabels}
                  onChange={onLocaleChange}
                />
                <ButtonLink href={primaryCta.href} variant="light">
                  {primaryCta.label}
                </ButtonLink>
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </header>
  )
}
