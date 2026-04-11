import type { CSSProperties } from 'react'
import logoImage from '../assets/images/harsouni-logo.png'

type ThemeVariableMap = CSSProperties & Record<`--${string}`, string>

export const brandAssets = {
  logo: logoImage,
  ogImage: '/og-image.png',
  favicon: '/logo.png',
} as const

export const brandingConfig = {
  colors: {
    brand50: '#fff7eb',
    brand100: '#fff0d6',
    brand200: '#ffd6a4',
    brand300: '#ffc06b',
    brand400: '#ffa037',
    brand500: '#ff8000',
    brand600: '#de6d00',
    brand700: '#b35700',
    brand800: '#874000',
    brand900: '#592900',
    sand50: '#fff8ee',
    sand100: '#fff1de',
    ivory: '#fff0d0',
    ink900: '#241300',
    ink700: '#5a3918',
    ink500: '#8d6337',
  },
  gradients: {
    hero: 'linear-gradient(160deg, #ff971f 0%, #ff8000 35%, #b35700 100%)',
    surface:
      'linear-gradient(180deg, rgba(255, 240, 208, 0.9) 0%, rgba(255, 248, 238, 1) 100%)',
    dark: 'linear-gradient(135deg, #5c2b00 0%, #8f4300 50%, #de6d00 100%)',
  },
  typography: {
    body: '"Manrope", "Segoe UI", sans-serif',
    arabic: '"Cairo", "Segoe UI", sans-serif',
  },
  radii: {
    pill: '999px',
    panel: '28px',
  },
  shadows: {
    soft: '0 22px 70px rgba(64, 25, 0, 0.16)',
    strong: '0 26px 90px rgba(64, 25, 0, 0.24)',
  },
} as const

export const brandThemeVariables: ThemeVariableMap = {
  '--color-brand-50': brandingConfig.colors.brand50,
  '--color-brand-100': brandingConfig.colors.brand100,
  '--color-brand-200': brandingConfig.colors.brand200,
  '--color-brand-300': brandingConfig.colors.brand300,
  '--color-brand-400': brandingConfig.colors.brand400,
  '--color-brand-500': brandingConfig.colors.brand500,
  '--color-brand-600': brandingConfig.colors.brand600,
  '--color-brand-700': brandingConfig.colors.brand700,
  '--color-brand-800': brandingConfig.colors.brand800,
  '--color-brand-900': brandingConfig.colors.brand900,
  '--color-sand-50': brandingConfig.colors.sand50,
  '--color-sand-100': brandingConfig.colors.sand100,
  '--color-ivory': brandingConfig.colors.ivory,
  '--color-ink-900': brandingConfig.colors.ink900,
  '--color-ink-700': brandingConfig.colors.ink700,
  '--color-ink-500': brandingConfig.colors.ink500,
  '--gradient-hero': brandingConfig.gradients.hero,
  '--gradient-surface': brandingConfig.gradients.surface,
  '--gradient-dark': brandingConfig.gradients.dark,
  '--font-body': brandingConfig.typography.body,
  '--font-arabic': brandingConfig.typography.arabic,
  '--radius-pill': brandingConfig.radii.pill,
  '--radius-panel': brandingConfig.radii.panel,
  '--shadow-soft': brandingConfig.shadows.soft,
  '--shadow-strong': brandingConfig.shadows.strong,
}
