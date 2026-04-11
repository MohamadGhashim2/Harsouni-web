export const sectionIds = {
  home: 'home',
  services: 'services',
  trust: 'trust',
  process: 'process',
  faq: 'faq',
  contact: 'contact',
} as const

export type NavigationKey = Exclude<keyof typeof sectionIds, 'home'>

export const navigationConfig: Array<{
  key: NavigationKey
  href: `#${string}`
}> = [
  { key: 'services', href: `#${sectionIds.services}` },
  { key: 'trust', href: `#${sectionIds.trust}` },
  { key: 'process', href: `#${sectionIds.process}` },
  { key: 'faq', href: `#${sectionIds.faq}` },
  { key: 'contact', href: `#${sectionIds.contact}` },
]
