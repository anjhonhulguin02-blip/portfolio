import { useEffect, useRef } from 'react';

function CloseIcon() {
  return (
    <svg className="h-4 w-4 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function Block({ label, text }) {
  return (
    <div>
      <p className="eyebrow">{label}</p>
      <p className="mt-2 leading-relaxed text-ink-soft">{text}</p>
    </div>
  );
}

export default function CaseStudyPanel({ project, onClose }) {
  const headingRef = useRef(null);
  const cs = project.caseStudy;
  const panelId = `case-study-${project.id}`;
  const headingId = `${panelId}-heading`;

  useEffect(() => {
    headingRef.current?.focus();

    function onKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div id={panelId} role="region" aria-labelledby={headingId} className="card rise p-6 sm:p-9">
      <div className="mb-8 flex items-start justify-between gap-4 border-b border-line pb-6">
        <div>
          <p className="eyebrow">Case study</p>
          <h3
            id={headingId}
            ref={headingRef}
            tabIndex={-1}
            className="display mt-2 text-2xl text-ink outline-none sm:text-3xl"
          >
            {project.title}
          </h3>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label={`Close ${project.title} case study`}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-soft text-ink-soft transition-colors hover:bg-accent hover:text-white"
        >
          <CloseIcon />
        </button>
      </div>

      <div className="grid gap-8 text-sm lg:grid-cols-2">
        <div className="space-y-6">
          <Block label="Overview" text={cs.overview} />
          <Block label="Problem" text={cs.problem} />
          <Block label="Solution" text={cs.solution} />
          <Block label="My role" text={cs.role} />
          <Block label="What I learned" text={cs.learned} />
        </div>

        <div className="space-y-6">
          <div>
            <p className="eyebrow">Architecture</p>
            <div className="mt-3 flex flex-col gap-2 text-xs sm:flex-row sm:flex-wrap sm:items-center">
              {cs.architecture.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="card-soft px-3 py-2 font-medium text-ink-soft">{step}</span>
                  {i < cs.architecture.length - 1 && (
                    <span className="hidden text-ink-faint sm:inline" aria-hidden="true">&rarr;</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow">Core features</p>
            <ul className="mt-3 space-y-2 leading-relaxed text-ink-soft">
              {cs.features.map((f) => (
                <li key={f} className="flex gap-2.5">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Engineering challenges</p>
            <div className="mt-3 space-y-3">
              {cs.challenges.map((c) => (
                <div key={c.problem} className="card-soft space-y-2 p-4">
                  <p className="text-ink-soft">
                    <span className="font-semibold text-accent-ink">Problem: </span>
                    {c.problem}
                  </p>
                  <p className="text-ink-soft">
                    <span className="font-semibold text-ink">Solution: </span>
                    {c.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow">Future improvements</p>
            <ul className="mt-3 space-y-2 leading-relaxed text-ink-soft">
              {cs.future.map((f) => (
                <li key={f} className="flex gap-2.5">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <button type="button" onClick={onClose} className="pill pill-ghost mt-8">
        <CloseIcon />
        Close case study
      </button>
    </div>
  );
}
