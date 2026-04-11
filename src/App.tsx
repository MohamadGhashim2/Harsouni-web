import { useMemo } from 'react'
import { brandAssets, brandThemeVariables } from './config/branding'
import { contactConfig } from './config/contact'
import { buildStructuredData, seoConfig } from './config/seo'
import { siteConfig } from './config/site'
import { landingContentByLocale } from './content'
import { useDocumentMetadata } from './hooks/useDocumentMetadata'
import { useLocale } from './hooks/useLocale'
import { HomePage } from './pages/HomePage'
import { createWhatsAppLink } from './lib/whatsapp'

function App() {
  const { direction, locale, setLocale } = useLocale()
  const content = landingContentByLocale[locale]
  const seo = seoConfig.localeMeta[locale]

  const pageContact = useMemo(
    () => ({
      email: contactConfig.email,
      officeHours: contactConfig.officeHours[locale],
      phoneDisplay: contactConfig.phone.display,
      phoneHref: contactConfig.phone.e164,
      socialLinks: contactConfig.socialLinks,
      whatsappDisplay: contactConfig.whatsapp.display,
      whatsappLink: createWhatsAppLink(
        contactConfig.whatsapp.number,
        contactConfig.whatsapp.defaultMessage,
        locale,
      ),
    }),
    [locale],
  )

  const structuredData = useMemo(() => buildStructuredData(locale), [locale])

  useDocumentMetadata({
    description: seo.description,
    direction,
    keywords: seo.keywords,
    locale,
    structuredData,
    title: seo.title,
  })

  return (
    <div className="app-shell" data-locale={locale} style={brandThemeVariables}>
      <HomePage
        businessDescription={siteConfig.businessDescription[locale]}
        contact={pageContact}
        content={content}
        currentLocale={locale}
        direction={direction}
        logoSrc={brandAssets.logo}
        onLocaleChange={setLocale}
      />
    </div>
  )
}

export default App
