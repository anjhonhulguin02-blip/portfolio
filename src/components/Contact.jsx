const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/anjhonhulguin02-blip' },
  { label: 'LinkedIn', href: 'https://ph.linkedin.com/in/anjhon-hulguin-9743783aa' },
  { label: 'Email', href: 'mailto:anjhon.hulguin02@gmail.com' },
];

function ArrowIcon() {
  return (
    <svg className="h-4 w-4 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 pt-16">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="card flex flex-col justify-between p-7 sm:p-10">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="display mt-4 text-4xl text-ink sm:text-5xl">
              Let&rsquo;s connect
              <br />
              and build
            </h2>
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-ink-soft">
              I&rsquo;m currently open to junior full-stack developer, web developer, and
              software development opportunities.
            </p>
          </div>

          <div className="mt-10 border-t border-line pt-6">
            <a
              href="mailto:anjhon.hulguin02@gmail.com"
              className="group flex items-center gap-3 text-ink"
            >
              <span className="break-all text-base font-semibold sm:text-lg">
                anjhon.hulguin02@gmail.com
              </span>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-soft transition-colors group-hover:bg-accent group-hover:text-white">
                <ArrowIcon />
              </span>
            </a>
            <p className="mt-4 text-sm text-ink-soft">Norzagaray, Bulacan, Philippines</p>
          </div>
        </div>

        <div className="card-accent flex flex-col justify-between p-7 sm:p-10">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white/90">
            Find me online
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.href.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/40 px-5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#7c3aed]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="/Anjhon_Hulguin_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#7c3aed] transition-opacity hover:opacity-90"
          >
            View resume
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
