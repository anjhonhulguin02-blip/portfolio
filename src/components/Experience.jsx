export default function Experience() {
  return (
    <section id="experience" className="py-16 scroll-mt-20">
      <h2 className="font-display text-center text-3xl uppercase tracking-widest mb-12 text-white">
        Experience <span className="text-purple-500">&amp; Education</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="font-display text-lg tracking-wider mb-4 flex items-center gap-2 text-pink-500">
            <span className="text-slate-400">#</span> Experience
          </h3>
          <div className="glass-card p-6 rounded-2xl">
            <h4 className="font-bold text-lg text-white">Full-Stack Development</h4>
            <p className="text-purple-500 text-sm font-semibold mb-2">Independent Projects</p>
            <span className="inline-block bg-white/10 rounded-md px-2 py-1 text-xs text-slate-400 mb-3">2025 - Present</span>
            <ul className="list-disc list-outside ml-4 text-sm text-slate-300 space-y-2 leading-relaxed">
              <li>Designed and developed full-stack web applications using modern frontend frameworks, backend technologies, and database systems.</li>
              <li>Implemented authentication, authorization, database security, API integration, and responsive user interfaces.</li>
              <li>Managed development workflows using Git, GitHub, and cloud deployment platforms.</li>
              <li>Performed debugging, testing, and technical improvements throughout the development lifecycle.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg tracking-wider mb-4 flex items-center gap-2 text-purple-500">
            <span className="text-slate-400">#</span> Education
          </h3>
          <div className="glass-card p-6 rounded-2xl">
            <h4 className="font-bold text-lg text-white">Bachelor of Science in Information Technology</h4>
            <p className="text-purple-500 text-sm font-semibold mb-2">Our Lady of Fatima University</p>
            <span className="inline-block bg-white/10 rounded-md px-2 py-1 text-xs text-slate-400 mb-3">2020 - 2026</span>
            <p className="text-sm text-slate-300 leading-relaxed">
              Focused on core software engineering principles, UI technologies, and relational database management systems, building the foundation for full-stack web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
