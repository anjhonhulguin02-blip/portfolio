const skillCategories = [
  {
    name: 'Frontend',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    name: 'Backend',
    skills: ['Laravel', 'PHP', 'Next.js API Routes', 'REST APIs', 'NextAuth.js'],
  },
  {
    name: 'Databases',
    skills: ['PostgreSQL', 'MongoDB Atlas', 'Mongoose', 'MySQL', 'Supabase'],
  },
  {
    name: 'Security & Authentication',
    skills: ['Row-Level Security', 'JWT', 'User Authentication', 'Access Control'],
  },
  {
    name: 'Development & Deployment',
    skills: ['Git', 'GitHub', 'Vercel', 'Railway', 'Composer', 'NPM', 'Cloudinary'],
  },
  {
    name: 'Testing, Debugging & Accessibility',
    skills: ['Manual & Exploratory Testing', 'Browser DevTools Debugging', 'Cross-Browser Testing', 'Semantic HTML & ARIA', 'Keyboard Navigation'],
  },
  {
    name: 'Systems / IT Support',
    skills: ['Windows', 'Linux', 'Network Configuration', 'Hardware Troubleshooting', 'Software Troubleshooting', 'Technical Documentation'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 scroll-mt-20">
      <h2 className="font-display text-center text-3xl uppercase tracking-widest mb-12 text-white">
        Technical <span className="text-purple-500">Skills</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div key={category.name} className="glass-card p-5 rounded-2xl">
            <h3 className="text-sm font-bold uppercase tracking-wider text-pink-500 mb-4">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium bg-white/5 border border-white/10 text-slate-200 px-3 py-1.5 rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
