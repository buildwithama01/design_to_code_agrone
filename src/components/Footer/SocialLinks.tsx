import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6'

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: FaFacebookF },
  { label: 'X', href: 'https://x.com/', icon: FaXTwitter },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: FaInstagram },
  { label: 'YouTube', href: 'https://www.youtube.com/', icon: FaYoutube },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: FaLinkedinIn },
]

function SocialLinks() {
  return (
    <nav aria-label="Social media" className="mt-6 flex flex-wrap gap-2">
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a
          aria-label={label}
          className="flex size-9 items-center justify-center rounded-full border border-white/25 text-white/90 transition-colors hover:border-agrone-lime hover:text-agrone-lime"
          href={href}
          key={label}
          rel="noreferrer"
          target="_blank"
        >
          <Icon aria-hidden="true" className="size-4" />
        </a>
      ))}
    </nav>
  )
}

export default SocialLinks
