const steps = [
  'Requirements',
  'System Design',
  'Implementation',
  'AI-Assisted Development',
  'Code Review & Validation',
  'Testing & Debugging',
  'Git & Version Control',
  'Deployment',
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-16 scroll-mt-20">
      <h2 className="font-display text-center text-3xl uppercase tracking-widest mb-4 text-white">
        How I <span className="text-purple-500">Build</span>
      </h2>
      <p className="text-center text-slate-400 text-sm max-w-xl mx-auto mb-12">
        My day-to-day development process, from requirements to a deployed app.
      </p>

      <div className="glass-card rounded-2xl p-6 md:p-8">
        <ol className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-3">
          {steps.map((step, i) => (
            <li key={step} className="flex items-center gap-3">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-slate-200 whitespace-nowrap">{step}</span>
              </div>
              {i < steps.length - 1 && (
                <span className="text-slate-600 hidden md:inline" aria-hidden="true">&rarr;</span>
              )}
            </li>
          ))}
        </ol>

        <p className="text-sm text-slate-300 leading-relaxed max-w-3xl mx-auto text-center mt-8 pt-8 border-t border-white/5">
          I use AI-assisted development tools such as ChatGPT and Claude to accelerate architecture exploration,
          implementation, debugging, refactoring, and technical review — while maintaining responsibility for
          requirements, technical decisions, code validation, testing, integration, and deployment.
        </p>
      </div>
    </section>
  );
}
