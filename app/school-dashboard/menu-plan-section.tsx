import { Button } from '@/components/ui/button'

const menuData = [
  {
    hari: 'Senin',
    menu: 'Nasi, Ayam Goreng, Sayur',
    nutrisi: '450/25g/60g',
    status: 'approved',
    biaya: 'Rp 15.000',
  },
  {
    hari: 'Selasa',
    menu: 'Nasi, Ikan Bakar, Lalapan',
    nutrisi: '420/22g/55g',
    status: 'pending',
    biaya: 'Rp 14.500',
  },
  {
    hari: 'Rabu',
    menu: 'Nasi Goreng, Telur, Tomat',
    nutrisi: '480/20g/65g',
    status: 'approved',
    biaya: 'Rp 14.000',
  },
]

export default function MenuPlanSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Rencana Menu Mingguan</h2>
      
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto bg-white rounded-lg border border-slate-200">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Hari</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Menu</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Nutrisi (K/P/K)</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Biaya per Porsi</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {menuData.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50">
                <td className="px-6 py-4 text-sm text-slate-900">{item.hari}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{item.menu}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{item.nutrisi}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`font-semibold ${
                    item.status === 'approved' ? 'text-green-600' : 'text-orange-600'
                  }`}>
                    {item.status === 'approved' ? 'Disetujui' : 'Perlu Revisi'}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-slate-900">{item.biaya}</td>
                <td className="px-6 py-4 text-sm space-x-2">
                  <Button size="sm" variant="outline">PDF</Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">Verifikasi</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3">
        {menuData.map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg border border-slate-200 p-4 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.hari}</p>
                <p className="text-xs text-slate-500 mt-1">Menu</p>
              </div>
              <span className={`text-xs font-semibold px-2 py-1 rounded ${
                item.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
              }`}>
                {item.status === 'approved' ? 'Disetujui' : 'Perlu Revisi'}
              </span>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">{item.menu}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Nutrisi:</span>
                <span className="text-slate-900 font-medium">{item.nutrisi}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Biaya per Porsi:</span>
                <span className="text-slate-900 font-semibold">{item.biaya}</span>
              </div>
            </div>

            <div className="flex gap-2 pt-2 border-t border-slate-200">
              <Button size="sm" variant="outline" className="flex-1">PDF</Button>
              <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700 text-white">Verifikasi</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
