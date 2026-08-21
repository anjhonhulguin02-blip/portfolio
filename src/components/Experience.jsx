import SectionHeading from './SectionHeading';

const bullets = [
  'Designed and developed full-stack web applications using modern frontend frameworks, backend technologies, and database systems.',
  'Implemented authentication, authorization, database security, API integration, and responsive user interfaces.',
  'Managed development workflows using Git, GitHub, and cloud deployment platforms.',
  'Performed debugging, testing, and technical improvements throughout the development lifecycle.',
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 pt-16">
      <SectionHeading eyebrow="Background" title="Experience & education" />

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <div className="card p-7 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="eyebrow">Experience</p>
            <span className="tag">2025 &ndash; Present</span>
          </div>

          <h3 className="display mt-4 text-2xl text-ink">Full-Stack Development</h3>
          <p className="mt-1 text-sm font-medium text-accent-ink">Independent Projects</p>

          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="card flex flex-col p-7 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="eyebrow">Education</p>
            <span className="tag">2020 &ndash; 2026</span>
          </div>

          <h3 className="display mt-4 text-2xl text-ink">
            BS Information Technology
          </h3>
          <p className="mt-1 text-sm font-medium text-accent-ink">
            Our Lady of Fatima University
          </p>

          <p className="mt-6 text-sm leading-relaxed text-ink-soft">
            Focused on core software engineering principles, UI technologies, and relational
            database management systems, building the foundation for full-stack web development.
          </p>
        </div>
      </div>
    </section>
  );
}
