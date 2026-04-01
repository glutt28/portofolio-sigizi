export default function DashboardHeader() {
  const today = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <header className="bg-white border-b border-slate-200 px-8 py-6 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl">
          🏭
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">PT. Makanan Sehat</h1>
          <p className="text-slate-600">Admin Supplier</p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <span className="text-2xl">🔔</span>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            4
          </span>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-600">Tanggal</p>
          <p className="text-sm font-semibold text-slate-900">{today}</p>
        </div>
        <div className="flex items-center gap-2 pl-6 border-l border-slate-200">
          <span className="text-2xl">👤</span>
          <span className="text-slate-600">Pengaturan</span>
        </div>
      </div>
    </header>
  )
}
