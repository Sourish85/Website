export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          SS
        </h1>
        <nav>
          <ul className="flex space-x-6 text-sm">
            <li><a href="#about" className="hover:text-cyan-400">About</a></li>
            <li><a href="#experience" className="hover:text-cyan-400">Experience</a></li>
            <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
            <li>
              <a
                href="#contact"
                className="px-3 py-1 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-400 text-black font-bold"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
