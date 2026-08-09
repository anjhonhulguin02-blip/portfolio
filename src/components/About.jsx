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
    title: 'AI-Augmented Engineering',
    description: 'Using AI development tools to accelerate software work while reviewing and validating technical output.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 scroll-mt-20">
      <h2 className="font-display text-center text-3xl uppercase tracking-widest mb-8 text-white">
        About <span className="text-purple-500">Me</span>
      </h2>

      <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed text-center mb-10">
        I am a Bachelor of Science in Information Technology graduate focused on full-stack web development.
        I enjoy turning practical problems into working web applications and continuously improving my skills
        in frontend development, backend systems, databases, debugging, deployment, and modern software
        development workflows.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {focusAreas.map((area) => (
          <div key={area.title} className="glass-card p-5 rounded-2xl text-center">
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-2">{area.title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
