import SectionHeading from './SectionHeading';

const steps = [
  { name: 'Requirements', detail: 'Clarify the problem, users, and scope before writing code.' },
  { name: 'System Design', detail: 'Model the data, choose the stack, and plan the architecture.' },
  { name: 'Implementation', detail: 'Build the frontend, API layer, and database together.' },
  { name: 'Code Review & Validation', detail: 'Read back every change and verify it does what I intended.' },
  { name: 'Testing & Debugging', detail: 'Exercise real flows, then trace and fix what breaks.' },
  { name: 'Git & Version Control', detail: 'Commit in reviewable steps with clear history.' },
  { name: 'Deployment', detail: 'Ship to Vercel or Railway, then verify the live build.' },
];

export default function Workflow() {
  return (
    <section id="workflow" className="scroll-mt-24 pt-16">
      <SectionHeading
        eyebrow="Process"
        title="How I build"
        description="My day-to-day development process, from requirements to a deployed app."
      />

      <div className="mt-6 grid gap-4 lg:grid-cols-[2fr_1fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {steps.map((step, i) => (
            <div key={step.name} className="card p-6">
              <span className="display text-2xl text-accent-ink">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-base font-bold text-ink">{step.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.detail}</p>
            </div>
          ))}
        </div>

        <div className="card-accent flex flex-col justify-center p-7 sm:p-9">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white/90">
            On AI tooling
          </p>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-white/95">
            I use AI-assisted tools such as ChatGPT and Claude to move faster through
            architecture exploration and debugging — while keeping ownership of
            requirements, technical decisions, validation, testing, and deployment.
          </p>
        </div>
      </div>
    </section>
  );
}
