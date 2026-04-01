'use client'

const menuItems = [
  { label: 'Pesanan Pengadaan', id: 'orders' },
  { label: 'Status Pembayaran', id: 'payment' },
  { label: 'Pengiriman Bahan Baku', id: 'shipping' },
  { label: 'Notifikasi Anomali', id: 'anomaly' },
  { label: 'Laporan Feedback Sekolah', id: 'feedback' },
  { label: 'Riwayat Pengadaan', id: 'history' },
]

export default function Sidebar({ 
  activeSection, 
  onSectionChange,
  isOpen = false 
}: { 
  activeSection: string
  onSectionChange: (id: string) => void
  isOpen?: boolean
}) {
  return (
    <aside className={`
      fixed md:static top-0 left-0 h-screen w-64 bg-white border-r border-slate-200 p-4 md:p-6 overflow-y-auto
      transition-transform duration-300 z-40
      ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
    `}>
      <h3 className="text-lg font-semibold text-green-600 mb-6">Menu Navigasi</h3>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`w-full text-left px-3 md:px-4 py-2 md:py-3 rounded-lg text-sm md:text-base transition-colors ${
              activeSection === item.id
                ? 'bg-green-600 text-white'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}
