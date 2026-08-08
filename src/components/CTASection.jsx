const CONTACTS = [
  {
    label: 'ayoub40dell@gmail.com',
    href: 'mailto:ayoub40dell@gmail.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 6.5h16a1.5 1.5 0 0 1 1.5 1.5v10A1.5 1.5 0 0 1 20 19.5H4A1.5 1.5 0 0 1 2.5 18V8A1.5 1.5 0 0 1 4 6.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="m3.5 8 8.5 6 8.5-6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'github.com/Aybdell',
    href: 'https://github.com/Aybdell',
    external: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.588 2 12.253c0 4.537 2.865 8.38 6.839 9.738.5.094.683-.222.683-.492 0-.243-.01-1.052-.014-1.91-2.782.62-3.369-1.208-3.369-1.208-.454-1.181-1.11-1.496-1.11-1.496-.908-.637.069-.624.069-.624 1.003.072 1.532 1.06 1.532 1.06.892 1.57 2.341 1.116 2.91.854.091-.662.35-1.116.636-1.372-2.22-.26-4.555-1.14-4.555-5.077 0-1.122.39-2.04 1.029-2.759-.103-.26-.446-1.308.098-2.727 0 0 .84-.276 2.75 1.054A9.33 9.33 0 0 1 12 7.148a9.33 9.33 0 0 1 2.504.346c1.909-1.33 2.748-1.054 2.748-1.054.546 1.419.203 2.467.1 2.727.64.719 1.028 1.637 1.028 2.759 0 3.948-2.338 4.814-4.566 5.068.359.318.679.945.679 1.905 0 1.374-.012 2.482-.012 2.82 0 .273.18.592.688.491C19.138 20.63 22 16.788 22 12.253 22 6.588 17.523 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: 'ayybdell.vercel.app',
    href: 'https://ayybdell.vercel.app',
    external: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M3 12h18M12 3c2.5 2.7 3.75 5.7 3.75 9S14.5 18.3 12 21c-2.5-2.7-3.75-5.7-3.75-9S9.5 5.7 12 3Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
]

export default function CTASection() {
  return (
    <section id="contact" className="cta-section">
      <span className="availability-pill">Available for Work</span>

      <h2 className="cta-title">Let&apos;s Build Something</h2>

      <p className="cta-text">
        Open for remote opportunities, freelance projects, and collaborations. I
        respond within 24 hours.
      </p>

      <div className="cta-links">
        {CONTACTS.map((contact) => (
          <a
            key={contact.href}
            className="cta-link"
            href={contact.href}
            {...(contact.external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            {contact.icon}
            <span>{contact.label}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
