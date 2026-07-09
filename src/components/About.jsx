import { useState } from 'react';

export default function About() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Supabase', logo: 'https://cdn.simpleicons.org/supabase/3ECF8E' }, 
    { name: 'Git/GitHub', logo: 'https://cdn.simpleicons.org/github/white' },
  ];

  return (
    <section id="about" className="py-16 scroll-mt-20">
      <h2 className="font-display text-center text-3xl uppercase tracking-widest mb-12 text-white">
        About <span className="text-purple-500">Me</span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Left Column: Education & Experience */}
        <div className="space-y-8">
          
          {/* Education Section */}
          <div>
            <h3 className="font-display text-lg tracking-wider mb-4 flex items-center gap-2 text-pink-500">
              <span className="text-slate-400">#</span> Education
            </h3>
            <div className="glass-card p-6 rounded-2xl">
              <h4 className="font-bold text-lg text-white">Bachelor of Science in Information Technology</h4>
              <p className="text-purple-500 text-sm font-semibold mb-2">Our Lady of Fatima University</p>
              <span className="inline-block bg-white/10 rounded-md px-2 py-1 text-xs text-slate-400 mb-3">2020 - 2026</span>
              <p className="text-sm text-slate-300 leading-relaxed">
                Gained a solid academic foundation focusing on core software engineering principles, UI technologies, and relational database management systems. Developed critical problem-solving habits essential for building modern web applications.
              </p>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="font-display text-lg tracking-wider mb-4 flex items-center gap-2 text-pink-500">
              <span className="text-slate-400">#</span> Experience
            </h3>
            <div className="glass-card p-6 rounded-2xl">
              <h4 className="font-bold text-lg text-white">Technical Support - Internship</h4>
              <p className="text-purple-500 text-sm font-semibold mb-2">Our Lady of Fatima University</p>
              <span className="inline-block bg-white/10 rounded-md px-2 py-1 text-xs text-slate-400 mb-3">2025 - 2026</span>
              <ul className="list-disc list-outside ml-4 text-sm text-slate-300 space-y-2 leading-relaxed">
                <li>Engineered and deployed localized network infrastructures.</li>
                <li>Optimized campus computer laboratory operations on 40 to 50 workstation units.</li>
                <li>Resolved diverse software bugs, hardware failures, and connectivity issues.</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Right Column: Tech Stack Section */}
        <div>
          <h3 className="font-display text-lg tracking-wider mb-4 flex items-center gap-2 text-purple-500">
            <span className="text-slate-400">#</span> Tech Stack & Tools
          </h3>
          
          <div className="glass-card p-6 rounded-2xl min-h-[320px] relative overflow-hidden flex flex-wrap gap-3 content-start border border-white/5">
            
            {skills.map(skill => (
              <div 
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill.logo)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="z-10 flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg hover:-translate-y-1 hover:border-pink-500 transition-all duration-300 text-sm font-medium select-none cursor-pointer text-slate-200"
              >
                <img src={skill.logo} className="w-5 h-5" alt={skill.name} onError={(e) => e.target.style.display='none'} /> 
                {skill.name}
              </div>
            ))}

            {/* Dynamic Watermark Background Logo */}
            <div 
              className={`absolute -bottom-8 -right-8 w-64 h-64 pointer-events-none transition-all duration-500 ease-out opacity-[0.06] filter grayscale ${
                hoveredSkill ? 'translate-y-0 scale-100 rotate-6 opacity-[0.12]' : 'translate-y-12 scale-75 rotate-0 opacity-0'
              }`}
            >
              <img src={hoveredSkill || ''} alt="" className="w-full h-full object-contain" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}