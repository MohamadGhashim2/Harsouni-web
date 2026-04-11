import { sectionIds } from '../../config/navigation'
import type { LandingContent } from '../../content/types'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

interface ProcessSectionProps {
  content: LandingContent['process']
}

export const ProcessSection = ({ content }: ProcessSectionProps) => (
  <section
    className="bg-[var(--color-sand-50)] py-20 sm:py-24"
    data-testid="process-section"
    id={sectionIds.process}
  >
    <Container className="space-y-12">
      <SectionHeading
        description={content.description}
        eyebrow={content.eyebrow}
        title={content.title}
      />

      <ol className="grid gap-6 lg:grid-cols-4">
        {content.steps.map((step, index) => (
          <li
            className="relative rounded-[28px] border border-[var(--color-brand-100)] bg-white px-5 py-6 shadow-[0_14px_40px_rgba(70,31,0,0.05)]"
            key={step.title}
          >
            <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-brand-200)] text-base font-black text-[var(--color-brand-900)]">
              {index + 1}
            </span>
            <h3 className="text-xl font-bold tracking-[-0.03em] text-[var(--color-ink-900)]">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--color-ink-700)] sm:text-base">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </Container>
  </section>
)
