import { Icon } from '../../assets/icons/iconMap'
import { serviceCarouselMedia } from '../../config/media'
import { sectionIds } from '../../config/navigation'
import { siteConfig } from '../../config/site'
import type { LandingContent } from '../../content/types'
import { Container } from '../ui/Container'
import { MediaCarousel } from '../ui/MediaCarousel'
import { SectionHeading } from '../ui/SectionHeading'

interface ServicesSectionProps {
  content: LandingContent['services']
}

export const ServicesSection = ({ content }: ServicesSectionProps) => {
  const { items: carouselContentItems, ...carouselLabels } = content.carousel
  const carouselItems = carouselContentItems.map((item) => ({
    alt: item.alt,
    src: serviceCarouselMedia[item.imageKey],
  }))

  return (
    <section
      className="bg-[var(--gradient-surface)] py-20 sm:py-24"
      data-testid="services-section"
      id={sectionIds.services}
    >
      <Container className="space-y-12">
        <div className="space-y-8">
          <SectionHeading
            description={content.description}
            eyebrow={content.eyebrow}
            title={content.title}
          />

          <MediaCarousel
            autoAdvanceMs={siteConfig.motion.servicesCarouselAutoplayMs}
            className="mx-auto max-w-[20rem] sm:max-w-[24rem] lg:max-w-[28rem]"
            items={carouselItems}
            labels={carouselLabels}
            testId="services-carousel"
          />
        </div>

        <div className="section-divider" />

        <div className="grid gap-3">
          {content.items.map((item) => (
            <article
              className="grid gap-4 rounded-[28px] border border-[var(--color-brand-100)] bg-white/70 px-5 py-6 shadow-[0_10px_40px_rgba(89,41,0,0.05)] sm:px-6 lg:grid-cols-[72px_1fr]"
              key={item.title}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-brand-50)] text-[var(--color-brand-700)]">
                <Icon aria-hidden="true" className="h-6 w-6" name={item.icon} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold tracking-[-0.03em] text-[var(--color-ink-900)]">
                  {item.title}
                </h3>
                <p className="max-w-3xl text-sm leading-7 text-[var(--color-ink-700)] sm:text-base">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
