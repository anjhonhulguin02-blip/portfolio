export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="font-display font-bold text-xl tracking-wide text-white">
          Anjhon<span className="text-purple-500">&lt;/&gt;</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider uppercase text-slate-300">
          <li><a href="#home" className="hover:text-purple-500 transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-purple-500 transition-colors">About</a></li>
          <li><a href="#projects" className="hover:text-purple-500 transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-purple-500 transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}