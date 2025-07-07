import { Github, ExternalLink } from "lucide-react"

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 p-6">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <h1 className="text-white font-bold text-xl">Logo Particles</h1>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/yourusername/logo-particles"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
            aria-label="View source code on GitHub"
          >
            <Github size={20} />
            <span className="hidden sm:inline">Source</span>
          </a>
          <a
            href="#demo"
            className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
            aria-label="View demo"
          >
            <ExternalLink size={20} />
            <span className="hidden sm:inline">Demo</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
