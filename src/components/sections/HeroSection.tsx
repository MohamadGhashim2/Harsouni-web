import { Icon } from '../../assets/icons/iconMap'
import { sectionIds } from '../../config/navigation'
import type { LandingContent } from '../../content/types'
import { ButtonLink } from '../ui/ButtonLink'
import { Container } from '../ui/Container'

interface HeroSectionProps {
  businessDescription: string
  content: LandingContent['hero']
  logoAlt: string
  logoSrc: string
  primaryCtaHref: string
  secondaryCtaHref: string
  siteName: string
}

export const HeroSection = ({
  businessDescription,
  content,
  logoAlt,
  logoSrc,
  primaryCtaHref,
  secondaryCtaHref,
  siteName,
}: HeroSectionProps) => (
  <section
    className="relative flex min-h-[100svh] items-end overflow-hidden bg-[var(--gradient-hero)] pt-28 text-[var(--color-ink-900)]"
    data-testid="hero-section"
    id={sectionIds.home}
  >
    <div className="hero-orb absolute left-[-8%] top-[18%] h-40 w-40 rounded-full bg-white/25 sm:h-64 sm:w-64" />
    <div className="hero-orb absolute bottom-[-10%] right-[-5%] h-52 w-52 rounded-full bg-[rgba(255,240,208,0.35)] sm:h-72 sm:w-72" />
    <div className="mask-grid absolute inset-x-0 top-0 h-72 opacity-60" />

    <Container className="relative grid gap-10 pb-14 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:pb-18">
      <div className="animate-fade-up flex max-w-2xl flex-col gap-8">
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-brand-800)]">
            {content.eyebrow}
          </p>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-[var(--color-ink-700)]">
              {businessDescription}
            </p>
            <h1 className="text-balance text-4xl font-black tracking-[-0.06em] text-[var(--color-ink-900)] sm:text-5xl lg:text-7xl">
              {content.title}
            </h1>
          </div>
          <p className="max-w-xl text-base leading-8 text-[var(--color-ink-800)] sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <ButtonLink external href={primaryCtaHref} size="lg" variant="light">
            {content.primaryCta}
          </ButtonLink>
          <ButtonLink href={secondaryCtaHref} size="lg" variant="outline">
            {content.secondaryCta}
          </ButtonLink>
        </div>



        <div className="grid gap-4">
          {content.highlights.map((item) => (
            <div
              className="flex gap-4 border-t border-[var(--color-brand-300)]/70 py-4 first:border-t"
              key={item.title}
            >
              <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/38 text-[var(--color-brand-800)]">
                <Icon aria-hidden="true" className="h-4 w-4" name="shield" />
              </span>
              <div>
                <h2 className="text-base font-bold text-[var(--color-ink-900)]">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm leading-7 text-[var(--color-ink-700)]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="animate-fade-up-delay relative mx-auto w-full max-w-md lg:-mt-10 lg:self-start lg:ms-auto xl:-mt-16">
        <div className="animate-float soft-outline relative overflow-hidden rounded-[34px] border border-[var(--color-brand-100)] bg-[rgba(255,248,238,0.82)] p-4 backdrop-blur">
          <div className="absolute inset-x-6 top-0 h-px bg-[var(--color-brand-200)]" />
          <img
            alt={logoAlt}
            className="w-full rounded-[28px] border border-[var(--color-brand-100)] object-cover"
            data-testid="hero-logo"
            src={logoSrc}
          />
          <div className="space-y-4 p-4 sm:p-5">
            <div className="flex items-center justify-between gap-3 border-b border-[var(--color-brand-100)] pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-ink-500)]">
                  {siteName}
                </p>
                <p className="mt-2 text-lg font-bold text-[var(--color-ink-900)]">
                  {content.visualTitle}
                </p>
              </div>
              <span className="rounded-full bg-[var(--color-brand-100)] px-3 py-1 text-xs font-semibold text-[var(--color-brand-900)]">
                {content.note}
              </span>
            </div>
          </div>
          <span className="animate-sheen pointer-events-none absolute left-[-30%] top-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-transparent via-[rgba(255,128,0,0.16)] to-transparent" />
        </div>
      </div>
    </Container>
  </section>
)
