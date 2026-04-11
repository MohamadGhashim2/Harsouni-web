import { Icon } from '../../assets/icons/iconMap'

interface WhatsAppButtonProps {
  ariaLabel: string
  href: string
  isRtl: boolean
  label: string
}

export const WhatsAppButton = ({
  ariaLabel,
  href,
  isRtl,
  label,
}: WhatsAppButtonProps) => (
  <a
    aria-label={ariaLabel}
    className={`fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] z-50 inline-flex items-center gap-3 rounded-full bg-[var(--color-brand-300)] px-4 py-3 text-sm font-bold text-[var(--color-ink-900)] shadow-[0_22px_60px_rgba(85,34,0,0.2)] transition hover:translate-y-[-2px] hover:bg-[var(--color-brand-400)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand-500)] ${isRtl ? 'left-4' : 'right-4'}`}
    data-testid="whatsapp-sticky"
    href={href}
    rel="noreferrer"
    target="_blank"
  >
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/8">
      <Icon aria-hidden="true" className="h-5 w-5" name="whatsapp" />
    </span>
    <span>{label}</span>
  </a>
)
