import profilePic from '../assets/profile.jpg';

export default function Hero() {
  return (
    <section id="home" className="min-h-[85vh] flex flex-col md:flex-row items-center justify-between gap-12 py-20">
      <div className="flex-1 space-y-6 z-10">
        <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight">
          Hi, I'm <br className="hidden md:block"/> Anjhon Hulguin
        </h1>
        <h2 className="font-display text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          Full-Stack Developer
        </h2>
        <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
          React &bull; Next.js &bull; Laravel &bull; PostgreSQL &bull; MongoDB &bull; Supabase
        </p>
        <p className="text-base text-slate-300 max-w-md leading-relaxed">
          I build responsive, database-driven web applications focused on practical user experiences,
          reliable backend integration, and maintainable full-stack development.
        </p>
        <div className="pt-4 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            View Projects
          </a>
          <a
            href="/Anjhon_Hulguin_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Anjhon_Hulguin_CV.pdf"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white px-6 py-3 rounded-full font-medium transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Download Resume
          </a>
          <a
            href="https://github.com/anjhonhulguin02-blip"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white transition-all"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://ph.linkedin.com/in/anjhon-hulguin-9743783aa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white transition-all"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>

        <dl className="pt-6 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 mt-2">
          <div>
            <dt className="sr-only">Full-stack projects deployed</dt>
            <dd className="font-display text-3xl font-bold text-white">3</dd>
            <p className="text-xs uppercase tracking-wider text-slate-400">Projects Deployed</p>
          </div>
          <div>
            <dt className="sr-only">Core technologies</dt>
            <dd className="font-display text-3xl font-bold text-white">6</dd>
            <p className="text-xs uppercase tracking-wider text-slate-400">Core Technologies</p>
          </div>
          <div>
            <dt className="sr-only">Solo-built projects</dt>
            <dd className="font-display text-3xl font-bold text-white">100%</dd>
            <p className="text-xs uppercase tracking-wider text-slate-400">Solo-Built</p>
          </div>
        </dl>
      </div>

      <div className="flex-1 flex justify-center items-center relative z-10 mt-10 md:mt-0">
        <div className="relative w-[260px] h-[260px] md:w-[380px] md:h-[380px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 opacity-20 blur-xl animate-pulse"></div>

          <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-tr from-purple-500/30 to-pink-500/30 border border-white/10 overflow-hidden backdrop-blur-sm group">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 border-4 border-brand-dark">
              <img src={profilePic} alt="Portrait of Anjhon Hulguin" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
          </div>

          <div className="floating-badge top-4 left-4 bg-slate-900 shadow-[0_0_15px_rgba(168,85,247,0.5)] border border-purple-500/30">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-6 h-6" alt="React" />
          </div>
          <div className="floating-badge top-10 -right-1 md:-right-4 bg-slate-900 shadow-[0_0_15px_rgba(236,72,153,0.5)] border border-pink-500/30" style={{animationDelay: '1s'}}>
            <img src="https://cdn.simpleicons.org/nextdotjs/white" className="w-6 h-6" alt="Next.js" />
          </div>
          <div className="floating-badge bottom-10 -left-2 md:-left-6 bg-slate-900 shadow-[0_0_15px_rgba(239,68,68,0.5)] border border-red-500/30" style={{animationDelay: '2s'}}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" className="w-6 h-6" alt="Laravel" />
          </div>
          <div className="floating-badge -bottom-2 right-12 bg-slate-900 shadow-[0_0_15px_rgba(62,207,142,0.5)] border border-emerald-500/30" style={{animationDelay: '1.5s'}}>
            <img src="https://cdn.simpleicons.org/supabase/3ECF8E" className="w-6 h-6" alt="Supabase" />
          </div>
        </div>
      </div>
    </section>
  );
}
