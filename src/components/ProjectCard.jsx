function GithubIcon() {
  return (
    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-3.5 w-3.5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      className={`h-3.5 w-3.5 stroke-current transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
      viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function ProjectCard({ project, isOpen, onToggleCaseStudy }) {
  const panelId = `case-study-${project.id}`;
  const cs = project.caseStudy;

  return (
    <article className="card flex h-full min-w-0 flex-col overflow-hidden">
      {project.image && (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          width="640"
          height="360"
          className="h-44 w-full shrink-0 border-b border-line object-cover object-top"
        />
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3 border-b border-line pb-4">
          <p className="eyebrow leading-relaxed">{project.subtitle}</p>
          {project.status && (
            <span className="tag tag-accent shrink-0 whitespace-nowrap">{project.status}</span>
          )}
        </div>

        <h3 className="display mt-5 text-2xl text-ink">{project.title}</h3>

        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto space-y-2.5 pt-6">
          <div className="flex items-center gap-2.5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="pill pill-primary flex-1"
              >
                Live demo
                <ArrowIcon />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="pill pill-ghost flex-1"
              >
                <GithubIcon />
                Code
              </a>
            )}
          </div>

          {cs && (
            <button
              type="button"
              onClick={() => onToggleCaseStudy(project.id)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              aria-label={`${isOpen ? 'Hide' : 'View'} case study for ${project.title}`}
              className="pill w-full text-accent-ink hover:bg-surface-soft"
            >
              Case study
              <ChevronIcon open={isOpen} />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
