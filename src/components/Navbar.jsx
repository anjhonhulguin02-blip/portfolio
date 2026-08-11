import { useEffect, useState } from 'react';

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
  { href: '/Anjhon_Hulguin_CV.pdf', label: 'Resume', newTab: true },
  { href: '#contact', label: 'Contact' },
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
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-white/10 bg-brand-dark/60">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="font-display font-bold text-xl tracking-wide text-white">
          Anjhon<span className="text-purple-500">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider uppercase text-slate-300">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="hover:text-purple-500 transition-colors focus-visible:outline-2 focus-visible:outline-purple-500 focus-visible:outline-offset-4 rounded-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-slate-200 focus-visible:outline-2 focus-visible:outline-purple-500 focus-visible:outline-offset-2 rounded-md"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="md:hidden flex flex-col gap-1 px-6 pb-4 text-sm font-medium tracking-wider uppercase text-slate-300 border-t border-white/10"
        >
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                onClick={() => setOpen(false)}
                className="block py-3 hover:text-purple-500 transition-colors focus-visible:outline-2 focus-visible:outline-purple-500 focus-visible:outline-offset-4 rounded-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
