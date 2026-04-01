import { Button } from '@/components/ui/button'

const procurementData = [
  {
    supplier: 'PT. Makanan Sehat',
    barang: 'Ayam, Sayuran',
    tanggal: '25 Mar 2026',
    status: 'approved',
    porsi: '500',
    anggaran: 'Rp 7.500.000',
  },
  {
    supplier: 'CV. Bahan Pangan',
    barang: 'Nasi, Ikan',
    tanggal: '26 Mar 2026',
    status: 'pending',
    porsi: '450',
    anggaran: 'Rp 6.750.000',
  },
]

export default function ProcurementSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Status Pengadaan & Pembayaran</h2>
      
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto bg-white rounded-lg border border-slate-200">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Supplier</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Barang</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Tanggal Kirim</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Jumlah Porsi</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Anggaran</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {procurementData.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50">
                <td className="px-6 py-4 text-sm font-semibold text-slate-900">{item.supplier}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{item.barang}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{item.tanggal}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`font-semibold ${
                    item.status === 'approved' ? 'text-green-600' : 'text-orange-600'
                  }`}>
                    {item.status === 'approved' ? 'Diterima' : 'Dalam Proses'}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">{item.porsi}</td>
                <td className="px-6 py-4 text-sm font-semibold text-slate-900">{item.anggaran}</td>
                <td className="px-6 py-4 text-sm space-x-2">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">Verifikasi</Button>
                  <Button size="sm" variant="outline">Catatan</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3">
        {procurementData.map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg border border-slate-200 p-4 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.supplier}</p>
                <p className="text-xs text-slate-500 mt-1">Supplier</p>
              </div>
              <span className={`text-xs font-semibold px-2 py-1 rounded ${
                item.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
              }`}>
                {item.status === 'approved' ? 'Diterima' : 'Dalam Proses'}
              </span>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Barang:</span>
                <span className="text-slate-900 text-right">{item.barang}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Tanggal Kirim:</span>
                <span className="text-slate-900">{item.tanggal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Jumlah Porsi:</span>
                <span className="text-slate-900 font-medium">{item.porsi}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Anggaran:</span>
                <span className="text-slate-900 font-semibold">{item.anggaran}</span>
              </div>
            </div>

            <div className="flex gap-2 pt-2 border-t border-slate-200">
              <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700 text-white">Verifikasi</Button>
              <Button size="sm" variant="outline" className="flex-1">Catatan</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
