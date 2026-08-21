import profileJpg from '../assets/profile.jpg';
import profileWebp from '../assets/profile.webp';
import profileAvif from '../assets/profile.avif';

const stack = ['React', 'Next.js', 'Laravel', 'PostgreSQL', 'MongoDB', 'Supabase'];

const stats = [
  { value: '3', label: 'Projects deployed' },
  { value: '6', label: 'Core technologies' },
  { value: '2026', label: 'BSIT graduate' },
];

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 pt-2">
      <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left: statement */}
        <div className="card flex flex-col justify-between gap-10 p-7 sm:p-10">
          <div>
            <span className="tag tag-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              Available for work
            </span>

            <h1 className="display mt-6 text-[2.75rem] text-ink sm:text-6xl lg:text-[4.25rem]">
              Hi, I&rsquo;m a
              <br />
              full-stack
              <br />
              developer
            </h1>

            <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-ink-soft">
              I build responsive, database-driven web applications — from schema and
              authentication through to deployment. Based in Norzagaray, Bulacan.
            </p>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <a href="#projects" className="pill pill-primary">
                View my work
              </a>
              <a
                href="/Anjhon_Hulguin_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="pill pill-ghost"
              >
                View resume
              </a>
            </div>

            <dl className="mt-9 grid grid-cols-3 gap-4 border-t border-line pt-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="display text-3xl text-ink">{s.value}</dd>
                  <p className="mt-1 text-[0.6875rem] leading-snug text-ink-faint">{s.label}</p>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Right: bento */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-rows-[auto_auto]">
          <div className="card overflow-hidden sm:col-span-2">
            <picture>
              <source srcSet={profileAvif} type="image/avif" />
              <source srcSet={profileWebp} type="image/webp" />
              <img
                src={profileJpg}
                alt="Portrait of Anjhon Hulguin"
                width="1440"
                height="1799"
                fetchPriority="high"
                className="h-64 w-full object-cover object-center sm:h-80"
              />
            </picture>
            <div className="flex items-center justify-between gap-4 p-6">
              <div>
                <p className="text-base font-bold text-ink">Anjhon Hulguin</p>
                <p className="mt-0.5 text-sm text-ink-soft">Norzagaray, Bulacan, PH</p>
              </div>
              <div className="flex gap-2">
                <a
                  href="https://github.com/anjhonhulguin02-blip"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-soft text-ink transition-colors hover:bg-accent hover:text-white"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://ph.linkedin.com/in/anjhon-hulguin-9743783aa"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-soft text-ink transition-colors hover:bg-accent hover:text-white"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="card-accent p-6 sm:col-span-2">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white/90">
              Core stack
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/30 px-3.5 py-1.5 text-sm font-medium text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
