import profilePic from '../assets/profile.jpg'; 

export default function Hero() {
  return (
    <section id="home" className="min-h-[85vh] flex flex-col md:flex-row items-center justify-between gap-12 py-20">
      <div className="flex-1 space-y-6 z-10">
        <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight">
          Hi, I'm <br className="hidden md:block"/> Anjhon Hulguin
        </h1>
        <h2 className="font-display text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          Junior Full-Stack Developer
        </h2>
        <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
          IT Graduate | Web Developer
        </p>
        <p className="text-base text-slate-300 max-w-md leading-relaxed">
          Ambitious IT graduate with hands-on experience building and deploying end-to-end web applications. Proven ability to develop responsive front-end interfaces and integrate reliable back-end databases to deliver secure, production-ready solutions.
        </p>
        <div className="pt-4 flex items-center gap-6">
          <a 
            href="/Anjhon_Hulguin_CV.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            download="Anjhon_Hulguin_CV.pdf"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Download CV
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center relative z-10 mt-10 md:mt-0">
        <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 opacity-20 blur-xl animate-pulse"></div>
          
          <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-tr from-purple-500/30 to-pink-500/30 border border-white/10 overflow-hidden backdrop-blur-sm group">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 border-4 border-brand-dark">
              <img src={profilePic} alt="Anjhon" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
          </div>

          <div className="floating-badge top-4 left-4 bg-slate-900 shadow-[0_0_15px_rgba(236,72,153,0.5)] border border-pink-500/30">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-6 h-6" alt="HTML" />
          </div>
          <div className="floating-badge top-10 -right-4 bg-slate-900 shadow-[0_0_15px_rgba(168,85,247,0.5)] border border-purple-500/30" style={{animationDelay: '1s'}}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-6 h-6" alt="React" />
          </div>
          <div className="floating-badge bottom-10 -left-6 bg-slate-900 shadow-[0_0_15px_rgba(59,130,246,0.5)] border border-blue-500/30" style={{animationDelay: '2s'}}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-6 h-6" alt="CSS" />
          </div>
          <div className="floating-badge -bottom-2 right-12 bg-slate-900 shadow-[0_0_15px_rgba(234,179,8,0.5)] border border-yellow-500/30" style={{animationDelay: '1.5s'}}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-6 h-6" alt="JS" />
          </div>
        </div>
      </div>
    </section>
  );
}