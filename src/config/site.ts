import type { Locale } from '../lib/locale'
import { SUPPORTED_LOCALES } from '../lib/locale'

export const siteConfig = {
  name: 'Harsouni Services',
  shortName: 'HS',
  url: 'https://www.harsouni.com',
  defaultLocale: 'ar' as Locale,
  supportedLocales: SUPPORTED_LOCALES,
  localeStorageKey: 'harsouni-locale',
  localeLabels: {
    tr: {
      short: 'TR',
      label: 'Türkçe',
    },
    ar: {
      short: 'AR',
      label: 'العربية',
    },
  },
  businessDescription: {
    tr: 'Türkiye üniversitelerine yönelik başvuru, bölüm seçimi ve kayıt danışmanlığı.',
    ar: 'خدمات التقديم الجامعي واختيار التخصص والتسجيل للجامعات في تركيا.',
  },
  motion: {
    servicesCarouselAutoplayMs: 5000,
  },
} as const
