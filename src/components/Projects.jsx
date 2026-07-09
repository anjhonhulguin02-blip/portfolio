export default function Projects() {
  const projectList = [
    {
      title: "Motorcycle Rental Web App",
      timeline: "2025 - 2026",
      description: "Architected a full-stack motorcycle rental platform using React.js and Supabase to enable seamless, cross-platform vehicle browsing and real-time client booking.",
      tags: ["React.js", "Supabase", "PostgreSQL", "RLS Policies", "Database Design"],
      bullets: [
        "Engineered secure Supabase user authentication and PostgreSQL Row-Level Security (RLS) policies to ensure protected, isolated transactional sign-ups.",
        "Optimized frontend responsiveness through dynamic layouts and integrated real-time database syncing for precise downpayment and balance tracking.",
        "Designed and structured relational database schemas in PostgreSQL to accurately track vehicle availability states, rental histories, and payment logs."
      ],
      githubLink: "https://github.com/anjhonhulguin02-blip/motorent.git",
      vercelLink: "https://motorent-xi.vercel.app/" 
    },
    {
      title: "Scholarship Distribution System",
      timeline: "2024 - 2025",
      description: "A collaborative group capstone project focused on engineering a full-stack Laravel web application designed to automate student application management and streamline allocation workflows.",
      tags: ["Capstone", "Laravel", "PHP", "MySQL", "Composer", "NPM", "Automated Scripts"],
      bullets: [
        "Optimized backend performance and local system environment compatibility by modifying PHP configurations, and troubleshooting core server extensions.",
        "Streamlined local server execution and deployment testing by developing automated .bat scripts, significantly reducing environment startup time for developers and testers.",
        "Utilized Laravel's Eloquent ORM to construct secure database queries, ensuring safe data handling and efficient student record management."
      ],
      githubLink: "https://github.com/MakMoinee/scholarshipDistributionWebApp",
      vercelLink: null 
    }
  ];

  return (
    <section id="projects" className="py-16 scroll-mt-20">
      <h2 className="font-display text-center text-3xl uppercase tracking-widest mb-12 text-white">
        Featured <span className="text-purple-500">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projectList.map((project, index) => (
          <div key={index} className="glass-card p-6 rounded-2xl flex flex-col justify-between hover:border-purple-500/30 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-white font-display">{project.title}</h3>
                <span className="text-xs text-slate-400 bg-white/5 px-2 py-1 rounded-md">{project.timeline}</span>
              </div>
              
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                {project.description}
              </p>
              
              <ul className="text-xs text-slate-400 list-disc list-inside space-y-2.5 pl-1 leading-relaxed">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="align-top">
                    <span className="text-slate-300">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Section: Contains Tags & Action Buttons */}
            <div className="pt-6 border-t border-white/5 mt-6 space-y-4">
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className={`text-xs border px-2.5 py-1 rounded-md font-medium ${
                      tag === "Capstone" 
                        ? "bg-pink-500/10 text-pink-400 border-pink-500/20" 
                        : "bg-purple-500/10 text-purple-400 border-purple-500/20"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons Container */}
              <div className="flex items-center gap-3 pt-1">
                {/* GitHub Button */}
                {project.githubLink && (
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-white/20 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub Code
                  </a>
                )}

                {/* Vercel / Live Demo Button */}
                {project.vercelLink && (
                  <a 
                    href={project.vercelLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold tracking-wide px-3.5 py-2 rounded-xl text-xs shadow-lg shadow-purple-600/20 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <svg className="w-3.5 h-3.5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}