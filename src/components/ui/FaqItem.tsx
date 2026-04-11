import { Icon } from '../../assets/icons/iconMap'
import { cn } from '../../lib/cn'

interface FaqItemProps {
  answer: string
  isOpen: boolean
  onToggle: () => void
  question: string
}

export const FaqItem = ({ answer, isOpen, onToggle, question }: FaqItemProps) => (
  <div className="border-b border-[var(--color-brand-200)]/70 py-5">
    <button
      aria-expanded={isOpen}
      className="flex w-full items-center justify-between gap-4 text-start"
      onClick={onToggle}
      type="button"
    >
      <span className="text-base font-semibold text-[var(--color-ink-900)] sm:text-lg">
        {question}
      </span>
      <span
        className={cn(
          'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-brand-200)] bg-white text-[var(--color-brand-700)] transition',
          isOpen && 'rotate-180',
        )}
      >
        <Icon aria-hidden="true" className="h-4 w-4" name="chevron" />
      </span>
    </button>
    <div
      className={cn(
        'grid transition-[grid-template-rows,opacity] duration-300 ease-out',
        isOpen ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
      )}
    >
      <div className="overflow-hidden">
        <p className="max-w-3xl text-sm leading-7 text-[var(--color-ink-700)] sm:text-base">
          {answer}
        </p>
      </div>
    </div>
  </div>
)
