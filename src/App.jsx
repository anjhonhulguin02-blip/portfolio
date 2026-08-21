import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Workflow from './components/Workflow';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden px-3 py-3 sm:px-5 sm:py-5">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[100] pill pill-primary"
      >
        Skip to content
      </a>

      <div className="shell mx-auto max-w-[1400px] overflow-hidden">
        <Navbar />

        <main id="main" className="px-4 pb-4 sm:px-6 sm:pb-6">
          <Hero />
          <Projects />
          <Skills />
          <Workflow />
          <Experience />
          <About />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
