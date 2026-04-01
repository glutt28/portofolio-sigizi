'use client'

import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl font-bold text-blue-600">SIGIZI Guard</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 lg:gap-8">
          <a href="#dashboards" className="text-sm lg:text-base text-slate-600 hover:text-blue-600 transition-colors">
            Dashboard
          </a>
          <a href="#features" className="text-sm lg:text-base text-slate-600 hover:text-blue-600 transition-colors">
            Fitur
          </a>
          <a href="#workflow" className="text-sm lg:text-base text-slate-600 hover:text-blue-600 transition-colors">
            Alur Kerja
          </a>
          <a href="#technology" className="text-sm lg:text-base text-slate-600 hover:text-blue-600 transition-colors">
            Teknologi
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-2 space-y-1">
            <a href="#dashboards" className="block px-3 py-2 text-slate-600 hover:bg-slate-50 rounded">
              Dashboard
            </a>
            <a href="#features" className="block px-3 py-2 text-slate-600 hover:bg-slate-50 rounded">
              Fitur
            </a>
            <a href="#workflow" className="block px-3 py-2 text-slate-600 hover:bg-slate-50 rounded">
              Alur Kerja
            </a>
            <a href="#technology" className="block px-3 py-2 text-slate-600 hover:bg-slate-50 rounded">
              Teknologi
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
