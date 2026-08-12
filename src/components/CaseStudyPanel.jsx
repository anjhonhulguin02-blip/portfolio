import { useEffect, useRef } from 'react';

const focusRing = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400';

function CloseIcon() {
  return (
    <svg className="w-4 h-4 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function Section({ label, text }) {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-wider text-purple-400 font-bold mb-1.5">{label}</h4>
      <p className="text-slate-300 leading-relaxed">{text}</p>
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
    <div
      id={panelId}
      role="region"
      aria-labelledby={headingId}
      className="glass-card rounded-2xl p-6 md:p-8 mt-8"
    >
      <div className="flex items-start justify-between gap-4 mb-6">
        <h3
          id={headingId}
          ref={headingRef}
          tabIndex={-1}
          className="font-display text-2xl font-bold text-white outline-none"
        >
          {project.title} <span className="text-purple-500">Case Study</span>
        </h3>
        <button
          type="button"
          onClick={onClose}
          aria-label={`Close ${project.title} case study`}
          className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-colors duration-300 ${focusRing}`}
        >
          <CloseIcon />
        </button>
      </div>

      <div className="max-w-3xl space-y-5 text-sm">
        <Section label="Overview" text={cs.overview} />
        <Section label="Problem" text={cs.problem} />
        <Section label="Solution" text={cs.solution} />
        <Section label="My Role" text={cs.role} />

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

        <Section label="What I Learned" text={cs.learned} />

        <div>
          <h4 className="text-xs uppercase tracking-wider text-purple-400 font-bold mb-2">Future Improvements</h4>
          <ul className="list-disc list-outside ml-4 text-slate-300 space-y-1.5 leading-relaxed">
            {cs.future.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>
      </div>

      <button
        type="button"
        onClick={onClose}
        className={`mt-8 flex items-center gap-2 bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-white/20 px-4 py-2.5 min-h-11 rounded-xl text-xs font-semibold tracking-wide transition-colors duration-300 ${focusRing}`}
      >
        <CloseIcon />
        Close Case Study
      </button>
    </div>
  );
}
