import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Workflow from './components/Workflow';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const year = new Date().getFullYear();

  return (
    <div className="relative min-h-screen overflow-x-hidden text-slate-300">

      {/* ================= BACKGROUND GLOWS LAYER ================= */}
      <div className="bg-pattern fixed inset-0 z-[-1] opacity-20 pointer-events-none"></div>

      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="absolute top-[25%] right-[-10%] w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="absolute top-[55%] left-[-10%] w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[130px] -z-10 pointer-events-none"></div>

      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      {/* ========================================================== */}

      <Navbar />

      <main className="max-w-6xl mx-auto px-6 space-y-10 relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Workflow />
        <Experience />
        <About />
        <Contact />
      </main>

      <footer className="text-center py-10 border-t border-white/5 mt-20 relative z-10 space-y-4">
        <p className="font-display font-bold text-white">
          Anjhon Hulguin <span className="text-slate-500 font-normal">/ Full-Stack Developer</span>
        </p>
        <div className="flex justify-center items-center gap-6 text-sm text-slate-400">
          <a href="https://github.com/anjhonhulguin02-blip" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">GitHub</a>
          <a href="https://ph.linkedin.com/in/anjhon-hulguin-9743783aa" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">LinkedIn</a>
          <a href="mailto:anjhon.hulguin02@gmail.com" className="hover:text-purple-400 transition-colors">Email</a>
        </div>
        <p className="text-xs text-slate-500 uppercase tracking-wider">&copy; {year} Anjhon Hulguin. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App;
