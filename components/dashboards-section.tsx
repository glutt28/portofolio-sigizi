import { Button } from '@/components/ui/button'

const dashboards = [
  {
    icon: '🏫',
    title: 'Dashboard Sekolah',
    description: 'Pantau aktivitas sekolah, feedback, dan laporan terkait pengadaan MBG.',
    href: '/school-dashboard'
  },
  {
    icon: '🏭',
    title: 'Dashboard Supplier',
    description: 'Kelola data supplier, proposal, dan evaluasi risiko secara real-time.',
    href: '/supplier-dashboard'
  },
  {
    icon: '📊',
    title: 'Dashboard SPPG',
    description: 'Monitor Sistem Pengadaan Pangan dan Gizi untuk transparansi dan akuntabilitas.',
    href: '/sppg-dashboard'
  },
  {
    icon: '🍎',
    title: 'Dashboard BGN',
    description: 'Kelola data Bahan Gizi dan Non-Gizi, termasuk tracking dan analisis.',
    href: '/bgn-dashboard'
  }
]

export default function DashboardsSection() {
  return (
    <section id="dashboards" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Dashboard SIGIZI
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-2">
            Pilih dashboard yang ingin Anda akses untuk memantau dan mengelola data terkait pengadaan MBG.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {dashboards.map((dashboard, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-lg hover:translate-y-[-4px] transition-all duration-200"
            >
              <div className="text-3xl sm:text-4xl mb-4">{dashboard.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">
                {dashboard.title}
              </h3>
              <p className="text-slate-600 mb-6">
                {dashboard.description}
              </p>
              <a href={dashboard.href}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Akses Dashboard
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
