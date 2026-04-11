export const SUPPORTED_LOCALES = ['tr', 'ar'] as const

export type Locale = (typeof SUPPORTED_LOCALES)[number]

export const localeDirections: Record<Locale, 'ltr' | 'rtl'> = {
  tr: 'ltr',
  ar: 'rtl',
}

export const localeOgCodes: Record<Locale, string> = {
  tr: 'tr_TR',
  ar: 'ar_AR',
}

export const isLocale = (value: string | null | undefined): value is Locale =>
  Boolean(value) && SUPPORTED_LOCALES.includes(value as Locale)

export const getLocaleDirection = (locale: Locale) => localeDirections[locale]

export const getLocaleFromLanguage = (language: string | undefined) => {
  const normalized = language?.toLowerCase() ?? ''

  if (normalized.startsWith('ar')) {
    return 'ar' as Locale
  }

  return 'tr' as Locale
}
