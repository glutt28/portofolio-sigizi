'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Sidebar from './sidebar'
import DashboardHeader from './dashboard-header'
import MenuPlanSection from './menu-plan-section'
import ProcurementSection from './procurement-section'
import EvaluationSection from './evaluation-section'
import IncidentsSection from './incidents-section'
import HistorySection from './history-section'

export default function SchoolDashboard() {
  const [activeSection, setActiveSection] = useState('menu-plan')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const renderSection = () => {
    switch (activeSection) {
      case 'menu-plan':
        return <MenuPlanSection />
      case 'procurement':
        return <ProcurementSection />
      case 'evaluation':
        return <EvaluationSection />
      case 'incidents':
        return <IncidentsSection />
      case 'history':
        return <HistorySection />
      default:
        return <MenuPlanSection />
    }
  }

  return (
    <div className="flex h-screen bg-slate-50 flex-col md:flex-row">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={(id) => {
          setActiveSection(id)
          setSidebarOpen(false)
        }}
        isOpen={sidebarOpen}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex items-center gap-4 md:hidden bg-white border-b border-slate-200 px-4 py-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-slate-100 rounded"
            aria-label="Toggle sidebar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h2 className="text-lg font-semibold text-slate-900">Dashboard</h2>
        </div>

        <DashboardHeader />
        
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
          {renderSection()}
        </main>

        <footer className="bg-white border-t border-slate-200 px-4 sm:px-6 md:px-8 py-3 md:py-4 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-slate-600 text-center sm:text-left">© 2026 SIGIZI Guard. All Rights Reserved.</p>
          <a href="/" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto">Kembali ke Beranda</Button>
          </a>
        </footer>
      </div>
    </div>
  )
}
