import { startTransition, useMemo, useState } from 'react'
import { siteConfig } from '../config/site'
import {
  getLocaleDirection,
  getLocaleFromLanguage,
  isLocale,
  type Locale,
} from '../lib/locale'

const getStoredLocale = () => {
  if (typeof window === 'undefined') {
    return null
  }

  const value = window.localStorage.getItem(siteConfig.localeStorageKey)

  return isLocale(value) ? value : null
}

const detectInitialLocale = (): Locale => {
  const storedLocale = getStoredLocale()

  if (storedLocale) {
    return storedLocale
  }

  if (typeof navigator === 'undefined') {
    return siteConfig.defaultLocale
  }

  return getLocaleFromLanguage(navigator.languages?.[0] ?? navigator.language)
}

export const useLocale = () => {
  const [locale, setLocaleState] = useState<Locale>(detectInitialLocale)

  const setLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) {
      return
    }

    window.localStorage.setItem(siteConfig.localeStorageKey, nextLocale)
    startTransition(() => setLocaleState(nextLocale))
  }

  const direction = useMemo(() => getLocaleDirection(locale), [locale])

  return {
    locale,
    direction,
    setLocale,
  }
}
