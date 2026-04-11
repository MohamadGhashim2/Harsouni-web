import { useEffect, useEffectEvent } from 'react'
import { brandAssets } from '../config/branding'
import { seoConfig } from '../config/seo'
import { siteConfig } from '../config/site'
import { localeOgCodes, type Locale } from '../lib/locale'

const upsertMeta = (attribute: 'name' | 'property', value: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${value}"]`,
  )

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, value)
    document.head.append(element)
  }

  element.setAttribute('content', content)
}

const upsertLink = (rel: string, href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.append(element)
  }

  element.setAttribute('href', href)
}

export const useDocumentMetadata = (options: {
  locale: Locale
  direction: 'ltr' | 'rtl'
  title: string
  description: string
  keywords: string[]
  structuredData: Record<string, unknown>
}) => {
  const applyMetadata = useEffectEvent(() => {
    const { locale, direction, title, description, keywords, structuredData } = options
    const html = document.documentElement

    html.lang = locale
    html.dir = direction
    document.title = title

    upsertMeta('name', 'description', description)
    upsertMeta('name', 'keywords', keywords.join(', '))
    upsertMeta('name', 'theme-color', seoConfig.themeColor)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:url', seoConfig.canonical)
    upsertMeta('property', 'og:image', `${siteConfig.url}${seoConfig.ogImage}`)
    upsertMeta('property', 'og:locale', localeOgCodes[locale])
    upsertMeta('property', 'og:site_name', siteConfig.name)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', `${siteConfig.url}${seoConfig.ogImage}`)

    upsertLink('canonical', seoConfig.canonical)
    upsertLink('icon', brandAssets.favicon)

    let structuredDataScript = document.head.querySelector<HTMLScriptElement>(
      'script[data-seo="structured-data"]',
    )

    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script')
      structuredDataScript.type = 'application/ld+json'
      structuredDataScript.dataset.seo = 'structured-data'
      document.head.append(structuredDataScript)
    }

    structuredDataScript.textContent = JSON.stringify(structuredData)
  })

  useEffect(() => {
    applyMetadata()
  }, [
    options.description,
    options.direction,
    options.keywords,
    options.locale,
    options.structuredData,
    options.title,
  ])
}
