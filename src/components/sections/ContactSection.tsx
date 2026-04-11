import { Icon } from '../../assets/icons/iconMap'
import { sectionIds } from '../../config/navigation'
import type { LandingContent } from '../../content/types'
import { ButtonLink } from '../ui/ButtonLink'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

interface ContactSectionProps {
  content: LandingContent['contact']
  email: string
  officeHours: string
  phone: string
  phoneHref: string
  primaryCtaHref: string
  secondaryCtaHref: string
  socialLinks: ReadonlyArray<{
    href: string
    icon: 'instagram' | 'globe' | 'whatsapp'
    label: string
  }>
  whatsappDisplay: string
}

export const ContactSection = ({
  content,
  email,
  officeHours,
  phone,
  phoneHref,
  primaryCtaHref,
  secondaryCtaHref,
  socialLinks,
  whatsappDisplay,
}: ContactSectionProps) => (
  <section
    className="bg-[linear-gradient(180deg,#fff8ee_0%,#ffe9c4_100%)] py-20 text-[var(--color-ink-900)] sm:py-24"
    data-testid="contact-section"
    id={sectionIds.contact}
  >
    <Container className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-start">
      <div className="space-y-8">
        <SectionHeading
          description={content.description}
          eyebrow={content.eyebrow}
          inverse
          title={content.title}
        />
        <div className="flex flex-wrap gap-3">
          <ButtonLink external href={primaryCtaHref} size="lg" variant="light">
            {content.primaryCta}
          </ButtonLink>
          <ButtonLink external href={secondaryCtaHref} size="lg" variant="outline">
            {content.secondaryCta}
          </ButtonLink>
        </div>
        <p className="max-w-xl text-sm leading-7 text-[var(--color-ink-700)] sm:text-base">
          {content.finalNote}
        </p>
      </div>

      <div className="rounded-[32px] border border-[var(--color-brand-100)] bg-white/88 p-6 shadow-[0_24px_80px_rgba(64,28,0,0.12)] backdrop-blur">
        <div className="space-y-4">
          <div className="flex items-start gap-4 border-b border-[var(--color-brand-100)] pb-4">
            <span className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-brand-50)] text-[var(--color-brand-700)]">
              <Icon aria-hidden="true" className="h-5 w-5" name="whatsapp" />
            </span>
            <div>
              <p className="text-sm font-semibold text-[var(--color-ink-900)]">
                {content.whatsappLabel}
              </p>
              <a
                className="mt-1 block text-sm text-[var(--color-ink-700)] transition hover:text-[var(--color-brand-800)]"
                href={primaryCtaHref}
                rel="noreferrer"
                target="_blank"
              >
                {whatsappDisplay}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 border-b border-[var(--color-brand-100)] pb-4">
            <span className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-brand-50)] text-[var(--color-brand-700)]">
              <Icon aria-hidden="true" className="h-5 w-5" name="phone" />
            </span>
            <div>
              <p className="text-sm font-semibold text-[var(--color-ink-900)]">
                {content.phoneLabel}
              </p>
              <a
                className="mt-1 block text-sm text-[var(--color-ink-700)] transition hover:text-[var(--color-brand-800)]"
                href={`tel:${phoneHref}`}
              >
                {phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 border-b border-[var(--color-brand-100)] pb-4">
            <span className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-brand-50)] text-[var(--color-brand-700)]">
              <Icon aria-hidden="true" className="h-5 w-5" name="mail" />
            </span>
            <div>
              <p className="text-sm font-semibold text-[var(--color-ink-900)]">
                {content.emailLabel}
              </p>
              <a
                className="mt-1 block text-sm text-[var(--color-ink-700)] transition hover:text-[var(--color-brand-800)]"
                href={`mailto:${email}`}
              >
                {email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 border-b border-[var(--color-brand-100)] pb-4">
            <span className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-brand-50)] text-[var(--color-brand-700)]">
              <Icon aria-hidden="true" className="h-5 w-5" name="support" />
            </span>
            <div>
              <p className="text-sm font-semibold text-[var(--color-ink-900)]">
                {content.hoursLabel}
              </p>
              <p className="mt-1 text-sm text-[var(--color-ink-700)]">{officeHours}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 pt-1">
            <span className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-brand-50)] text-[var(--color-brand-700)]">
              <Icon aria-hidden="true" className="h-5 w-5" name="globe" />
            </span>
            <div className="w-full">
              <p className="text-sm font-semibold text-[var(--color-ink-900)]">
                {content.socialLabel}
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-brand-100)] text-[var(--color-brand-700)] transition hover:border-[var(--color-brand-300)] hover:text-[var(--color-brand-900)]"
                    href={link.href}
                    key={link.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Icon aria-hidden="true" className="h-5 w-5" name={link.icon} />
                    <span className="sr-only">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
)
