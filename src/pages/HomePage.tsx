import { navigationConfig, sectionIds } from '../config/navigation'
import { siteConfig } from '../config/site'
import type { Locale } from '../lib/locale'
import type { LandingContent } from '../content/types'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { ContactSection } from '../components/sections/ContactSection'
import { FaqSection } from '../components/sections/FaqSection'
import { HeroSection } from '../components/sections/HeroSection'
import { ProcessSection } from '../components/sections/ProcessSection'
import { ServicesSection } from '../components/sections/ServicesSection'
import { StatisticsSection } from '../components/sections/StatisticsSection'
import { TrustSection } from '../components/sections/TrustSection'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'

interface HomePageProps {
  businessDescription: string
  contact: {
    email: string
    officeHours: string
    phoneDisplay: string
    phoneHref: string
    socialLinks: ReadonlyArray<{
      href: string
      icon: 'instagram' | 'globe' | 'whatsapp'
      label: string
    }>
    whatsappDisplay: string
    whatsappLink: string
  }
  content: LandingContent
  currentLocale: Locale
  direction: 'ltr' | 'rtl'
  logoSrc: string
  onLocaleChange: (locale: Locale) => void
}

export const HomePage = ({
  businessDescription,
  contact,
  content,
  currentLocale,
  direction,
  logoSrc,
  onLocaleChange,
}: HomePageProps) => {
  const navigationItems = navigationConfig.map((item) => ({
    href: item.href,
    label: content.navigation[item.key],
  }))

  return (
    <>
      <Header
        currentLocale={currentLocale}
        descriptor={content.header.descriptor}
        labels={{
          closeMenu: content.header.closeMenuLabel,
          navigation: content.header.navigationLabel,
          openMenu: content.header.openMenuLabel,
          switcher: content.header.languageSwitcherLabel,
        }}
        localeLabels={siteConfig.localeLabels}
        logoAlt={content.accessibility.logoAlt}
        logoSrc={logoSrc}
        navigationItems={navigationItems}
        onLocaleChange={onLocaleChange}
        primaryCta={{
          href: `#${sectionIds.contact}`,
          label: content.header.primaryCta,
        }}
        siteName={siteConfig.name}
      />

      <main>
        <HeroSection
          businessDescription={businessDescription}
          content={content.hero}
          logoAlt={content.accessibility.heroVisualAlt}
          logoSrc={logoSrc}
          primaryCtaHref={contact.whatsappLink}
          secondaryCtaHref={`#${sectionIds.services}`}
          siteName={siteConfig.name}
        />
        <StatisticsSection content={content.statistics} locale={currentLocale} />
        <ServicesSection content={content.services} />
        <TrustSection content={content.trust} />
        <ProcessSection content={content.process} />
        <FaqSection content={content.faq} />
        <ContactSection
          content={content.contact}
          email={contact.email}
          officeHours={contact.officeHours}
          phone={contact.phoneDisplay}
          phoneHref={contact.phoneHref}
          primaryCtaHref={contact.whatsappLink}
          secondaryCtaHref={`mailto:${contact.email}`}
          socialLinks={contact.socialLinks}
          whatsappDisplay={contact.whatsappDisplay}
        />
      </main>

      <Footer
        contactLabel={content.footer.contactLabel}
        email={contact.email}
        navigationItems={navigationItems}
        quickLinksLabel={content.footer.quickLinksLabel}
        rightsSuffix={content.footer.rightsSuffix}
        siteName={siteConfig.name}
        socialLinks={contact.socialLinks}
        summary={content.footer.summary}
        telephone={contact.phoneDisplay}
        telephoneHref={contact.phoneHref}
      />

      <WhatsAppButton
        ariaLabel={content.accessibility.whatsappAriaLabel}
        href={contact.whatsappLink}
        isRtl={direction === 'rtl'}
        label={content.stickyWhatsappLabel}
      />
    </>
  )
}
