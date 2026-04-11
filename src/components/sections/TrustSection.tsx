import { Icon } from '../../assets/icons/iconMap'
import { sectionIds } from '../../config/navigation'
import type { LandingContent } from '../../content/types'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

interface TrustSectionProps {
  content: LandingContent['trust']
}

export const TrustSection = ({ content }: TrustSectionProps) => (
  <section
    className="bg-[linear-gradient(180deg,#fff4de_0%,#fff8ee_100%)] py-20 text-[var(--color-ink-900)] sm:py-24"
    data-testid="trust-section"
    id={sectionIds.trust}
  >
    <Container className="space-y-12">
      <SectionHeading
        description={content.description}
        eyebrow={content.eyebrow}
        inverse
        title={content.title}
      />

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-6">
          <blockquote className="max-w-2xl text-balance text-3xl font-black tracking-[-0.05em] text-[var(--color-ink-900)] sm:text-4xl">
            {content.quote}
          </blockquote>
        </div>

        <div className="grid gap-4">
          {content.pillars.map((pillar) => (
            <article
              className="rounded-[28px] border border-[var(--color-brand-100)] bg-white/88 px-5 py-6 backdrop-blur"
              key={pillar.title}
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-brand-50)] text-[var(--color-brand-700)]">
                  <Icon aria-hidden="true" className="h-6 w-6" name={pillar.icon} />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold tracking-[-0.03em] text-[var(--color-ink-900)]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-7 text-[var(--color-ink-700)] sm:text-base">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Container>
  </section>
)
