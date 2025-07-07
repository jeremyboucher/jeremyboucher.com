import { Heart, Code, Palette } from "lucide-react"

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 z-20 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2 text-gray-500 text-sm">
            <span>Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>using</span>
            <Code size={16} className="text-blue-400" />
            <span>and</span>
            <Palette size={16} className="text-purple-400" />
          </div>
          <div className="flex items-center space-x-6 text-gray-500 text-sm">
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              Next.js
            </a>
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              Tailwind CSS
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              Canvas API
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
