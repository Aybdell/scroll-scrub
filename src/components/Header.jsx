const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Header({ lenis }) {
  const scrollTo = (target, options) => {
    lenis?.current?.scrollTo(target, options)
  }

  return (
    <header className="site-header">
      <button
        type="button"
        className="site-header__logo"
        onClick={() => scrollTo(0)}
        aria-label="Scroll to top"
      >
        AD
      </button>

      <nav className="site-header__nav" aria-label="Primary">
        {NAV_LINKS.map((link) => (
          <button
            key={link.href}
            type="button"
            className="site-header__link"
            onClick={() => scrollTo(link.href, { offset: -80 })}
          >
            {link.label}
          </button>
        ))}
      </nav>

      <button
        type="button"
        className="site-header__hire"
        onClick={() => scrollTo('#contact', { offset: -80 })}
      >
        Hire Me
      </button>
    </header>
  )
}
