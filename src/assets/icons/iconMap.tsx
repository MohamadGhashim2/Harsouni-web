import type { ReactElement, SVGProps } from 'react'

export type IconKey =
  | 'compass'
  | 'document'
  | 'scholarship'
  | 'campus'
  | 'support'
  | 'shield'
  | 'path'
  | 'phone'
  | 'mail'
  | 'location'
  | 'whatsapp'
  | 'instagram'
  | 'globe'
  | 'menu'
  | 'close'
  | 'chevron'

type IconProps = SVGProps<SVGSVGElement>

const baseProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeWidth: 1.8,
  viewBox: '0 0 24 24',
} satisfies IconProps

const CompassIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="m14.7 9.3-2.6 6-3.8.8.8-3.8 6-3Z" />
  </svg>
)

const DocumentIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M8 3.5h6l4 4V20a1 1 0 0 1-1 1H8a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2Z" />
    <path d="M14 3.5V8h4" />
    <path d="M9 12h6" />
    <path d="M9 15.5h6" />
  </svg>
)

const ScholarshipIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M4 8.5 12 4l8 4.5-8 4.5L4 8.5Z" />
    <path d="M7 10.3V15c0 1.6 2.4 3 5 3s5-1.4 5-3v-4.7" />
    <path d="M20 9v5" />
  </svg>
)

const CampusIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M4 20h16" />
    <path d="M6 20V9l6-4 6 4v11" />
    <path d="M9 20v-6h6v6" />
    <path d="M10 10h.01" />
    <path d="M14 10h.01" />
  </svg>
)

const SupportIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M4.5 12a7.5 7.5 0 1 1 15 0" />
    <path d="M4.5 12v4.5a2 2 0 0 0 2 2H8v-5H6.5a2 2 0 0 1-2-2Z" />
    <path d="M19.5 12v4.5a2 2 0 0 1-2 2H16v-5h1.5a2 2 0 0 0 2-2Z" />
    <path d="M12 18v2.5" />
  </svg>
)

const ShieldIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M12 3.5 5.5 6v5.6c0 4 2.6 7.5 6.5 8.9 3.9-1.4 6.5-4.9 6.5-8.9V6L12 3.5Z" />
    <path d="m9.2 12.3 1.9 1.9 3.8-4.2" />
  </svg>
)

const PathIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M6 18c0-3 2.2-4.5 5-4.5h2c2.8 0 5-1.5 5-4.5S15.8 4.5 13 4.5h-2c-2.8 0-5 1.5-5 4.5S8.2 13.5 11 13.5h2" />
    <path d="M6 18h.01" />
    <path d="M18 9h.01" />
  </svg>
)

const PhoneIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M6.8 4.5h2.5l1.1 4.3-1.8 1.8a14.3 14.3 0 0 0 4.8 4.8l1.8-1.8 4.3 1.1v2.5a1.5 1.5 0 0 1-1.5 1.5A15.5 15.5 0 0 1 5.3 6a1.5 1.5 0 0 1 1.5-1.5Z" />
  </svg>
)

const MailIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
    <path d="m4.5 7 7.5 6 7.5-6" />
  </svg>
)

const LocationIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M12 20c3.5-4 5.2-7 5.2-9.2a5.2 5.2 0 1 0-10.4 0C6.8 13 8.5 16 12 20Z" />
    <circle cx="12" cy="10.7" r="1.8" />
  </svg>
)

const WhatsAppIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M20 11.8a8 8 0 0 1-11.8 7l-4.2 1.2 1.4-4a8 8 0 1 1 14.6-4.2Z" />
    <path d="M9 9.5c.2 1.6 2 3.9 3.5 4.8.7.4 1.5.6 2 .2l1-.9" />
    <path d="m8.7 8.2.7 1.9c.1.4 0 .8-.3 1.1l-.5.6" />
  </svg>
)

const InstagramIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <rect x="4" y="4" width="16" height="16" rx="4" />
    <circle cx="12" cy="12" r="3.4" />
    <path d="M16.7 7.3h.01" />
  </svg>
)

const GlobeIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.8 12h16.4" />
    <path d="M12 3.5a13.6 13.6 0 0 1 3 8.5 13.6 13.6 0 0 1-3 8.5 13.6 13.6 0 0 1-3-8.5 13.6 13.6 0 0 1 3-8.5Z" />
  </svg>
)

const MenuIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </svg>
)

const CloseIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="m6 6 12 12" />
    <path d="M18 6 6 18" />
  </svg>
)

const ChevronIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="m7 10 5 5 5-5" />
  </svg>
)

const iconMap = {
  compass: CompassIcon,
  document: DocumentIcon,
  scholarship: ScholarshipIcon,
  campus: CampusIcon,
  support: SupportIcon,
  shield: ShieldIcon,
  path: PathIcon,
  phone: PhoneIcon,
  mail: MailIcon,
  location: LocationIcon,
  whatsapp: WhatsAppIcon,
  instagram: InstagramIcon,
  globe: GlobeIcon,
  menu: MenuIcon,
  close: CloseIcon,
  chevron: ChevronIcon,
} satisfies Record<IconKey, (props: IconProps) => ReactElement>

export interface NamedIconProps extends IconProps {
  name: IconKey
}

export const Icon = ({ name, ...props }: NamedIconProps) => {
  const Component = iconMap[name]

  return <Component {...props} />
}
