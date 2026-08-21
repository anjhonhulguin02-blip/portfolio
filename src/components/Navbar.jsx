import { useEffect, useState } from 'react';

const links = [
  { href: '#projects', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
  { href: '/Anjhon_Hulguin_CV.pdf', label: 'Resume', newTab: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className="p-4 sm:p-6">
      <nav className="card px-4 py-3 sm:px-5" aria-label="Main">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-2.5 shrink-0">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
              A
            </span>
            <span className="text-sm font-bold tracking-[0.08em] uppercase text-ink">
              Anjhon Hulguin
            </span>
          </a>

          <ul className="hidden items-center gap-7 text-sm font-medium text-ink-soft md:flex">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a href="#contact" className="pill pill-primary hidden sm:inline-flex">
              Get in touch
            </a>

            <button
              type="button"
              className="pill pill-ghost md:hidden !px-3"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <ul id="mobile-menu" className="mt-3 border-t border-line pt-2 md:hidden">
            {[...links, { href: '#contact', label: 'Get in touch' }].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-2 py-3 text-sm font-medium text-ink-soft transition-colors hover:bg-surface-soft hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
