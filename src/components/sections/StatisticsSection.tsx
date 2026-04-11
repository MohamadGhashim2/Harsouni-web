import type { LandingContent } from '../../content/types'
import type { Locale } from '../../lib/locale'
import { Container } from '../ui/Container'
import { AnimatedCount } from '../ui/AnimatedCount'
import { SectionHeading } from '../ui/SectionHeading'

interface StatisticsSectionProps {
  content: LandingContent['statistics']
  locale: Locale
}

export const StatisticsSection = ({ content, locale }: StatisticsSectionProps) => (
  <section
    className="bg-[var(--color-sand-50)] py-14 sm:py-16"
    data-testid="statistics-section"
  >
    <Container className="space-y-8">
      <SectionHeading
        description={content.description}
        eyebrow={content.eyebrow}
        title={content.title}
      />

      <div className="grid gap-4 md:grid-cols-3">
        {content.items.map((item) => (
          <article
            className="rounded-[28px] border border-[var(--color-brand-100)] bg-white px-5 py-6 shadow-[0_16px_40px_rgba(73,31,0,0.05)] sm:px-6"
            key={`${item.value}-${item.label}`}
          >
            <p className="text-4xl font-black tracking-[-0.06em] text-[var(--color-brand-800)] sm:text-5xl">
              <AnimatedCount
                locale={locale}
                prefix={item.prefix}
                suffix={item.suffix}
                target={item.value}
              />
            </p>
            <p className="mt-3 text-sm font-semibold leading-7 text-[var(--color-ink-800)] sm:text-base">
              {item.label}
            </p>
          </article>
        ))}
      </div>
    </Container>
  </section>
)
