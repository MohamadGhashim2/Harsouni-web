import type { Locale } from '../lib/locale'
import { brandAssets, brandingConfig } from './branding'
import { contactConfig } from './contact'
import { siteConfig } from './site'

export const seoConfig = {
  canonical: siteConfig.url,
  themeColor: brandingConfig.colors.brand500,
  ogImage: brandAssets.ogImage,
  localeMeta: {
    tr: {
      title: 'Harsouni Services | Türkiye Üniversite Danışmanlığı',
      description:
        'Türkiye üniversiteleri için bölüm seçimi, başvuru planlaması, evrak hazırlığı ve kayıt sürecini tek merkezden yönetin.',
      keywords: [
        'Türkiye üniversite danışmanlığı',
        'üniversite başvuru danışmanlığı',
        'Türkiye eğitim danışmanlığı',
        'İstanbul üniversite rehberliği',
      ],
    },
    ar: {
      title: 'Harsouni Services | الإرشاد الجامعي في تركيا',
      description:
        'استشارات متخصصة للجامعات التركية تشمل اختيار التخصص، تجهيز الملف، متابعة التقديم، وخطة التسجيل خطوة بخطوة.',
      keywords: [
        'الجامعات في تركيا',
        'الإرشاد الجامعي',
        'التقديم للجامعات التركية',
        'الاستشارة التعليمية في تركيا',
      ],
    },
  } satisfies Record<
    Locale,
    {
      title: string
      description: string
      keywords: string[]
    }
  >,
} as const

export const buildStructuredData = (locale: Locale) => ({
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}${brandAssets.ogImage}`,
  image: `${siteConfig.url}${brandAssets.ogImage}`,
  description: seoConfig.localeMeta[locale].description,
  telephone: contactConfig.phone.e164,
  email: contactConfig.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Istanbul',
    addressCountry: 'TR',
    streetAddress: contactConfig.address.tr,
  },
  areaServed: ['TR'],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: contactConfig.phone.e164,
      contactType: 'customer support',
      availableLanguage: ['Turkish', 'Arabic'],
    },
  ],
  sameAs: contactConfig.socialLinks.map((link) => link.href),
})
