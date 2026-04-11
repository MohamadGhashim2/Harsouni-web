# Harsouni Services Landing Page

Production-ready, mobile-first landing page for an educational services center focused on university guidance and educational consulting in Turkey.

Built with:

- React + Vite
- Tailwind CSS v4
- TypeScript
- Playwright for E2E testing

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Install the Playwright browser used by the test suite:

```bash
npx playwright install chromium
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local URL shown by Vite in your terminal.

## Available scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run typecheck
npm run test:e2e
```

## Where to edit content

### Site text and localized section content

All landing-page copy is centralized by locale:

- Turkish: `src/content/tr/landing.ts`
- Arabic: `src/content/ar/landing.ts`

These files contain:

- hero content
- CTA labels
- service text
- trust section text
- process steps
- FAQ items
- contact section labels
- footer copy
- accessibility labels

## Where to edit services

Update the `services.items` arrays in:

- `src/content/tr/landing.ts`
- `src/content/ar/landing.ts`

## Where to edit FAQ

Update the `faq.items` arrays in:

- `src/content/tr/landing.ts`
- `src/content/ar/landing.ts`

## Where to edit WhatsApp number

Edit the WhatsApp configuration in:

- `src/config/contact.ts`

Relevant fields:

- `contactConfig.whatsapp.number`
- `contactConfig.whatsapp.display`
- `contactConfig.whatsapp.defaultMessage`

The sticky WhatsApp CTA, hero CTA, and contact section all use this centralized config.

## Where to edit SEO metadata

Edit:

- `src/config/seo.ts`

This file controls:

- page title
- meta description
- keywords
- OG image reference
- theme color
- structured data payload

## Where to change site name, locale defaults, and basic business settings

Edit:

- `src/config/site.ts`

This file controls:

- site name
- short name
- canonical URL
- default locale
- supported locales
- browser locale storage key
- locale labels
- business description

## Where to change logo and images

Primary logo asset:

- `src/assets/images/harsouni-logo.png`

Brand asset references:

- `src/config/branding.ts`

Public SEO/browser assets:

- `public/logo.png`
- `public/og-image.png`

If you replace the logo, update the image file and keep the references in `src/config/branding.ts` aligned.

## Where to edit brand colors

Edit:

- `src/config/branding.ts`

This file defines:

- brand palette
- gradients
- typography references
- radius tokens
- shadow tokens
- exported CSS variables used throughout the UI

## Where to edit navigation

Edit:

- `src/config/navigation.ts`

This file centralizes:

- section IDs
- navigation keys
- navigation hrefs

Localized labels for those items live in the locale content files.

## Localization behavior

Localization is organized into two layers:

1. `src/config/site.ts`
   This defines supported locales, default locale, and language labels.
2. `src/content/tr/landing.ts` and `src/content/ar/landing.ts`
   These hold the page copy for each language.

Runtime locale behavior:

- If browser language starts with `tr`, the page defaults to Turkish.
- If browser language starts with `ar`, the page defaults to Arabic.
- All other languages fall back to Turkish.
- Manual language changes are saved in `localStorage`.
- Arabic applies `dir="rtl"`.
- Turkish applies `dir="ltr"`.

Core locale logic lives in:

- `src/hooks/useLocale.ts`
- `src/lib/locale.ts`

## Project structure

```text
src/
  assets/
    images/
    icons/
  components/
    layout/
    sections/
    ui/
  config/
    branding.ts
    contact.ts
    navigation.ts
    seo.ts
    site.ts
  content/
    ar/
    tr/
  hooks/
  lib/
  pages/
  styles/
  tests/
  App.tsx
  main.tsx
```

## Testing

Playwright coverage includes:

- page render
- browser language auto-detection
- manual language switching
- Arabic RTL behavior
- sticky WhatsApp CTA configuration
- major section visibility
- mobile viewport behavior

Test files:

- `src/tests/landing.e2e.spec.ts`
- `playwright.config.ts`

## Notes for future extension

- Business content is intentionally kept out of section JSX as much as possible.
- Reusable sections consume centralized config or localized content.
- The current app is landing-page only and does not include a backend.
- Metadata and language attributes are updated at runtime through a dedicated hook in `src/hooks/useDocumentMetadata.ts`.
