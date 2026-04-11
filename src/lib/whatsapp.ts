import type { Locale } from './locale'

export const normalizePhoneNumber = (value: string) => value.replace(/\D/g, '')

export const createWhatsAppLink = (
  phoneNumber: string,
  messageByLocale: Record<Locale, string>,
  locale: Locale,
) => {
  const normalizedNumber = normalizePhoneNumber(phoneNumber)
  const encodedMessage = encodeURIComponent(messageByLocale[locale])

  return `https://wa.me/${normalizedNumber}?text=${encodedMessage}`
}
