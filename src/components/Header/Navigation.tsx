import { FaChevronDown } from 'react-icons/fa6'

function Navigation() {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Drones', href: '#products', hasMenu: true },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Services', href: '#services', hasMenu: true },
    { label: 'Blog', href: '#news' },
    { label: 'Contact us', href: '#contact' },
  ]

  return (
    <nav aria-label="Main navigation" className="hidden min-w-0 items-center gap-4 lg:flex xl:gap-7">
      {links.map(({ label, href, hasMenu }) => (
        <a
          className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-agrone-green transition-colors hover:text-agrone-lime xl:text-sm"
          href={href}
          key={label}
        >
          {label}
          {hasMenu && <FaChevronDown aria-hidden="true" className="size-2.5" />}
        </a>
      ))}
    </nav>
  )
}

export default Navigation
