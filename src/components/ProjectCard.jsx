import { useState } from 'react';

function GithubIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-3.5 h-3.5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      className={`w-3.5 h-3.5 stroke-current transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
      viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
}

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const panelId = `case-study-${project.id}`;
  const cs = project.caseStudy;

  return (
    <div className="glass-card rounded-2xl flex flex-col min-w-0 h-full overflow-hidden hover:border-purple-500/30 transition-all duration-300">
      {project.image && (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          width="640"
          height="360"
          className="w-full h-44 object-cover object-top border-b border-white/5 shrink-0"
        />
      )}
      <div className="p-6 flex flex-col flex-1">
      <div className="space-y-4">
        <div className="flex flex-wrap justify-between items-start gap-3">
          <h3 className="text-xl font-bold text-white font-display">{project.title}</h3>
          {project.status && (
            <span className="text-[11px] font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2 py-1 rounded-md">
              {project.status}
            </span>
          )}
        </div>

        <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">{project.subtitle}</p>

        <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <span key={tag} className="text-xs border px-2.5 py-1 rounded-md font-medium bg-purple-500/10 text-purple-400 border-purple-500/20">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-6 border-t border-white/5 mt-auto space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-white/20 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5"
            >
              <GithubIcon />
              GitHub
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold tracking-wide px-3.5 py-2 rounded-xl text-xs shadow-lg shadow-purple-600/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              <ExternalLinkIcon />
              Live Demo
            </a>
          )}

          {cs && (
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={panelId}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-pink-300 border border-pink-500/20 hover:border-pink-500/40 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 ml-auto"
            >
              Case Study
              <ChevronIcon open={open} />
            </button>
          )}
        </div>

        {cs && open && (
          <div id={panelId} className="pt-5 mt-2 border-t border-white/5 space-y-5 text-sm">
            <CaseStudySection label="Overview" text={cs.overview} />
            <CaseStudySection label="Problem" text={cs.problem} />
            <CaseStudySection label="Solution" text={cs.solution} />
            <CaseStudySection label="My Role" text={cs.role} />

            <div>
              <h4 className="text-xs uppercase tracking-wider text-purple-400 font-bold mb-2">Architecture</h4>
              <div className="flex flex-col sm:flex-row sm:items-center flex-wrap gap-2 text-xs">
                {cs.architecture.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-slate-300 font-medium">
                      {step}
                    </span>
                    {i < cs.architecture.length - 1 && (
                      <span className="text-slate-600 hidden sm:inline" aria-hidden="true">&rarr;</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider text-purple-400 font-bold mb-2">Core Features</h4>
              <ul className="list-disc list-outside ml-4 text-slate-300 space-y-1.5 leading-relaxed">
                {cs.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider text-purple-400 font-bold mb-2">Engineering Challenges</h4>
              <div className="space-y-3">
                {cs.challenges.map((c) => (
                  <div key={c.problem} className="bg-white/5 border border-white/10 rounded-lg p-3 space-y-1.5">
                    <p className="text-slate-300"><span className="text-pink-400 font-semibold">Problem: </span>{c.problem}</p>
                    <p className="text-slate-300"><span className="text-purple-400 font-semibold">Solution: </span>{c.solution}</p>
                  </div>
                ))}
              </div>
            </div>

            <CaseStudySection label="What I Learned" text={cs.learned} />

            <div>
              <h4 className="text-xs uppercase tracking-wider text-purple-400 font-bold mb-2">Future Improvements</h4>
              <ul className="list-disc list-outside ml-4 text-slate-300 space-y-1.5 leading-relaxed">
                {cs.future.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

function CaseStudySection({ label, text }) {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-wider text-purple-400 font-bold mb-1.5">{label}</h4>
      <p className="text-slate-300 leading-relaxed">{text}</p>
    </div>
  );
}
