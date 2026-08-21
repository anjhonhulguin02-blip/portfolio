import SectionHeading from './SectionHeading';

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
    <section id="skills" className="scroll-mt-24 pt-16">
      <SectionHeading
        eyebrow="Capabilities"
        title="Technical skills"
        description="The tools and practices I use across the stack, from schema design to deployment."
      />

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => (
          <div key={category.name} className="card flex flex-col p-6">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-base font-bold text-ink">{category.name}</h3>
              <span className="display text-sm text-ink-faint">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="tag">
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
