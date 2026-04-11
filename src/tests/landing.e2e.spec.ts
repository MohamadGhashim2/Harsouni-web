import { expect, test } from '@playwright/test'
import { contactConfig } from '../config/contact'
import { siteConfig } from '../config/site'
import { normalizePhoneNumber } from '../lib/whatsapp'

const majorSectionIds = [
  'hero-section',
  'statistics-section',
  'services-section',
  'trust-section',
  'process-section',
  'faq-section',
  'contact-section',
]

test('page renders with Turkish as the default experience', async ({ page }) => {
  await page.goto('/')

  await expect(page.locator('html')).toHaveAttribute('lang', 'tr')
  await expect(page.locator('html')).toHaveAttribute('dir', 'ltr')
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Türkiye’de doğru üniversite yolunu birlikte planlayalım.',
  )
})

test('major sections render', async ({ page }) => {
  await page.goto('/')

  for (const sectionId of majorSectionIds) {
    await expect(page.getByTestId(sectionId)).toBeVisible()
  }
})

test('statistics animate to their final values', async ({ page }) => {
  await page.goto('/')

  const statisticsSection = page.getByTestId('statistics-section')

  await statisticsSection.scrollIntoViewIfNeeded()
  await expect(statisticsSection).toContainText('+600')
  await expect(statisticsSection).toContainText('+200')
  await expect(statisticsSection).toContainText(/\+1[.,]000/)
})

test('services carousel renders and auto-advances every five seconds', async ({ page }) => {
  await page.goto('/')

  const carousel = page.getByTestId('services-carousel')

  await carousel.scrollIntoViewIfNeeded()
  await expect(page.locator('[data-testid^="services-carousel-slide-"]')).toHaveCount(5)
  await expect(page.getByTestId('services-carousel-dot-0')).toHaveAttribute(
    'aria-pressed',
    'true',
  )

  await page.waitForTimeout(5200)

  await expect(page.getByTestId('services-carousel-dot-1')).toHaveAttribute(
    'aria-pressed',
    'true',
  )
})

test.describe('browser language detection', () => {
  test.use({ locale: 'ar-SA' })

  test('switches to Arabic and applies RTL automatically', async ({ page }) => {
    await page.goto('/')

    await expect(page.locator('html')).toHaveAttribute('lang', 'ar')
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl')
    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      'لنرسم معاً طريق الجامعة المناسبة في تركيا.',
    )
  })
})

test('language switcher updates locale and persists the choice', async ({ page }) => {
  await page.goto('/')

  await page.getByTestId('locale-ar').click()

  await expect(page.locator('html')).toHaveAttribute('lang', 'ar')
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl')
  await expect
    .poll(() =>
      page.evaluate((key) => window.localStorage.getItem(key), siteConfig.localeStorageKey),
    )
    .toBe('ar')
})

test('sticky WhatsApp button uses the configured number', async ({ page }) => {
  await page.goto('/')

  const stickyButton = page.getByTestId('whatsapp-sticky')

  await expect(stickyButton).toBeVisible()
  await expect(stickyButton).toHaveAttribute(
    'href',
    new RegExp(normalizePhoneNumber(contactConfig.whatsapp.number)),
  )
})

test.describe('mobile viewport', () => {
  test.use({
    viewport: { width: 390, height: 844 },
  })

  test('mobile layout keeps key controls visible without horizontal overflow', async ({
    page,
  }) => {
    await page.goto('/')

    await expect(page.getByTestId('mobile-menu-toggle')).toBeVisible()
    await expect(page.getByTestId('whatsapp-sticky')).toBeVisible()

    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth + 1,
    )

    expect(hasHorizontalOverflow).toBeFalsy()
  })
})
