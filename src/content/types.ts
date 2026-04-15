import type { IconKey } from '../assets/icons/iconMap'
import type { ServiceCarouselMediaKey } from '../config/media'
import type { NavigationKey } from '../config/navigation'

export interface SectionStat {
  value: string
  label: string
}

export interface CounterStat {
  value: number
  label: string
  prefix?: string
  suffix?: string
}

export interface IconContentItem {
  icon: IconKey
  title: string
  description: string
}

export interface CarouselImageItem {
  imageKey: ServiceCarouselMediaKey
  alt: string
}

export interface ProcessStep {
  title: string
  description: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface LandingContent {
  header: {
    descriptor: string
    primaryCta: string
    navigationLabel: string
    openMenuLabel: string
    closeMenuLabel: string
    languageSwitcherLabel: string
  }
  navigation: Record<NavigationKey, string>
  hero: {
    eyebrow: string
    title: string
    description: string
    primaryCta: string
    secondaryCta: string
    highlights: Array<{
      title: string
      description: string
    }>
    stats: SectionStat[]
    note: string
    visualTitle: string
  }
  statistics: {
    eyebrow: string
    title: string
    description: string
    items: CounterStat[]
  }
  services: {
    eyebrow: string
    title: string
    description: string
    aside: string
    carousel: {
      regionLabel: string
      previousLabel: string
      nextLabel: string
      slideButtonLabel: string
      items: CarouselImageItem[]
    }
    items: IconContentItem[]
  }
  trust: {
    eyebrow: string
    title: string
    description: string
    quote: string
    pillars: IconContentItem[]
  }
  process: {
    eyebrow: string
    title: string
    description: string
    steps: ProcessStep[]
  }
  faq: {
    eyebrow: string
    title: string
    description: string
    items: FaqItem[]
  }
  contact: {
    eyebrow: string
    title: string
    description: string
    primaryCta: string
    secondaryCta: string
    phoneLabel: string
    emailLabel: string
    hoursLabel: string
    socialLabel: string
    whatsappLabel: string
    finalNote: string
  }
  footer: {
    summary: string
    quickLinksLabel: string
    contactLabel: string
    rightsSuffix: string
    creditPrefix: string
    creditAriaLabel: string
  }
  stickyWhatsappLabel: string
  accessibility: {
    logoAlt: string
    heroVisualAlt: string
    whatsappAriaLabel: string
  }
}
