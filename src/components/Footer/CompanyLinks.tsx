const links = [
  'About Us',
  'Why Agrone',
  'Blog',
  'Corporate Responsibility',
  "Careers we're hiring",
  'Contact Us',
  'Trust & Security',
]

function CompanyLinks() {
  return (
    <nav aria-label="Company">
      <h2 className="mb-4 text-xl md:text-3xl font-medium">Company</h2>
      <ul className="space-y-2">
        {links.map((label) => (
          <li key={label}>
            <a
              className="text-sm md:text-md text-white/75 transition-colors hover:text-agrone-lime"
              href="#contact"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default CompanyLinks
