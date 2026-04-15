import { Icon } from '../../assets/icons/iconMap'
import { Container } from '../ui/Container'

interface FooterProps {
  contactLabel: string
  creditAriaLabel: string
  creditHref: string
  creditName: string
  creditPrefix: string
  email: string
  navigationItems: Array<{
    href: string
    label: string
  }>
  quickLinksLabel: string
  rightsSuffix: string
  siteName: string
  socialLinks: ReadonlyArray<{
    href: string
    icon: 'instagram' | 'globe' | 'whatsapp'
    label: string
  }>
  summary: string
  telephone: string
  telephoneHref: string
}

export const Footer = ({
  contactLabel,
  creditAriaLabel,
  creditHref,
  creditName,
  creditPrefix,
  email,
  navigationItems,
  quickLinksLabel,
  rightsSuffix,
  siteName,
  socialLinks,
  summary,
  telephone,
  telephoneHref,
}: FooterProps) => (
  <footer className="border-t border-[var(--color-brand-100)] bg-[var(--color-sand-50)]">
    <Container className="grid gap-10 py-10 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
      <div className="space-y-4">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--color-brand-700)]">
          {siteName}
        </p>
        <p className="max-w-md text-sm leading-7 text-[var(--color-ink-700)]">{summary}</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-sm font-bold text-[var(--color-ink-900)]">{quickLinksLabel}</h2>
        <div className="flex flex-col gap-3 text-sm text-[var(--color-ink-700)]">
          {navigationItems.map((item) => (
            <a className="transition hover:text-[var(--color-brand-700)]" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-sm font-bold text-[var(--color-ink-900)]">{contactLabel}</h2>
        <div className="space-y-2 text-sm text-[var(--color-ink-700)]">
          <a
            className="block transition hover:text-[var(--color-brand-700)]"
            href={`tel:${telephoneHref}`}
          >
            {telephone}
          </a>
          <a className="block transition hover:text-[var(--color-brand-700)]" href={`mailto:${email}`}>
            {email}
          </a>
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              aria-label={link.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-brand-100)] text-[var(--color-brand-700)] transition hover:border-[var(--color-brand-500)] hover:bg-[var(--color-brand-50)]"
              href={link.href}
              key={link.href}
              rel="noreferrer"
              target="_blank"
            >
              <Icon aria-hidden="true" className="h-5 w-5" name={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </Container>
    <Container className="border-t border-[var(--color-brand-100)] py-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--color-ink-500)]">
          {new Date().getFullYear()} {siteName}. {rightsSuffix}
        </p>
        <p className="text-sm text-[var(--color-ink-500)]">
          <span>{creditPrefix} </span>
          <a
            aria-label={creditAriaLabel}
            className="font-semibold text-[var(--color-brand-700)] underline decoration-[var(--color-brand-400)] underline-offset-4 transition hover:text-[var(--color-brand-800)]"
            href={creditHref}
            rel="noreferrer"
            target="_blank"
          >
            {creditName}
          </a>
        </p>
      </div>
    </Container>
  </footer>
)
