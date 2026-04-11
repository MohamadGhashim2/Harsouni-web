import type { Locale } from '../lib/locale'
import { landingContentAr } from './ar/landing'
import { landingContentTr } from './tr/landing'

export const landingContentByLocale = {
  tr: landingContentTr,
  ar: landingContentAr,
} satisfies Record<Locale, typeof landingContentTr>
