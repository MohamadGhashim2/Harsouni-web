import { useState } from 'react'
import { sectionIds } from '../../config/navigation'
import type { LandingContent } from '../../content/types'
import { Container } from '../ui/Container'
import { FaqItem } from '../ui/FaqItem'
import { SectionHeading } from '../ui/SectionHeading'

interface FaqSectionProps {
  content: LandingContent['faq']
}

export const FaqSection = ({ content }: FaqSectionProps) => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section
      className="bg-[var(--gradient-surface)] py-20 sm:py-24"
      data-testid="faq-section"
      id={sectionIds.faq}
    >
      <Container className="space-y-12">
        <SectionHeading
          description={content.description}
          eyebrow={content.eyebrow}
          title={content.title}
        />
        <div className="rounded-[32px] border border-[var(--color-brand-100)] bg-white px-5 py-3 shadow-[0_18px_50px_rgba(82,37,0,0.06)] sm:px-8">
          {content.items.map((item, index) => (
            <FaqItem
              answer={item.answer}
              isOpen={openIndex === index}
              key={item.question}
              onToggle={() =>
                setOpenIndex((currentIndex) => (currentIndex === index ? -1 : index))
              }
              question={item.question}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
