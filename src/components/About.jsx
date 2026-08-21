import SectionHeading from './SectionHeading';

const focusAreas = [
  {
    title: 'Full-Stack Development',
    description: 'Building responsive frontend experiences and database-driven application systems.',
  },
  {
    title: 'Problem Solving',
    description: 'Diagnosing application, environment, deployment, database, hardware, and network issues.',
  },
  {
    title: 'Database & Security Design',
    description: 'Designing relational and document schemas, and enforcing access control through Row-Level Security, JWT sessions, and input validation.',
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 pt-16">
      <SectionHeading eyebrow="About" title="A bit about me" />

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.3fr_1fr]">
        <div className="card p-7 sm:p-10">
          <p className="text-lg leading-relaxed text-ink sm:text-xl">
            I am a Bachelor of Science in Information Technology graduate focused on
            full-stack web development. I enjoy turning practical problems into working
            web applications and continuously improving my skills in frontend development,
            backend systems, databases, debugging, deployment, and modern software
            development workflows.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5 border-t border-line pt-6">
            <a href="#contact" className="pill pill-primary">
              Let&rsquo;s work together
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
        </div>

        <div className="grid gap-4">
          {focusAreas.map((area, i) => (
            <div key={area.title} className="card p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-sm font-bold text-ink">{area.title}</h3>
                <span className="display text-sm text-ink-faint">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
