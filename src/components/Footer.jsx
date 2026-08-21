const links = [
  { label: 'GitHub', href: 'https://github.com/anjhonhulguin02-blip' },
  { label: 'LinkedIn', href: 'https://ph.linkedin.com/in/anjhon-hulguin-9743783aa' },
  { label: 'Email', href: 'mailto:anjhon.hulguin02@gmail.com' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="card flex flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
            A
          </span>
          <span className="text-sm font-semibold text-ink">
            Anjhon Hulguin
            <span className="ml-2 font-normal text-ink-faint">Full-Stack Developer</span>
          </span>
        </div>

        <nav className="flex items-center gap-6" aria-label="Footer">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.href.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-ink-faint">&copy; {year} Anjhon Hulguin</p>
      </div>
    </footer>
  );
}
