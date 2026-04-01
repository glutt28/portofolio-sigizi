export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
        <div className="text-center sm:text-left">
          <p className="text-sm sm:text-base">© {currentYear} SIGIZI Guard. All Rights Reserved.</p>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">Contact: info@sigiziguard.com</p>
        </div>
        <div className="flex gap-4 sm:gap-6">
          <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">
            LinkedIn
          </a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
