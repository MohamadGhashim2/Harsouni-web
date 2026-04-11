import type { Locale } from '../lib/locale'

export const contactConfig = {
  whatsapp: {
    number: '905528964099',
    display: '+90 5528964099',
    defaultMessage: {
      tr: 'Merhaba, üniversite danışmanlığı hizmetleriniz hakkında bilgi almak istiyorum.',
      ar: 'مرحباً، أود الحصول على معلومات حول خدماتكم في الإرشاد الجامعي.',
    } satisfies Record<Locale, string>,
  },
  phone: {
    display: '+90 552 896 40 99',
    e164: '+905528964099',
  },
  email: 'harsouniservices@gmail.com',
  address: {
    tr: 'Fatih, İstanbul, Türkiye',
    ar: 'الفاتح، إسطنبول، تركيا',
  } satisfies Record<Locale, string>,
  officeHours: {
    tr: 'Pazartesi - Cumartesi | 09:00 - 18:00',
    ar: 'الاثنين - السبت | 09:00 - 18:00',
  } satisfies Record<Locale, string>,
  socialLinks: [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/harsouni_services?igsh=dWowdW5jenB0cG1u',
      icon: 'instagram',
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/905528964099',
      icon: 'whatsapp',
    },
  ] as const,
} as const
