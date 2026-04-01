import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'

const ordersData = [
  {
    id: 'PROP-2026-03-00128',
    menu: 'Nasi Goreng',
    porsi: '500',
    tanggal: '2026-03-25',
    anggaran: 'Rp 15.000.000',
    status: 'pending',
  },
  {
    id: 'PROP-2026-03-00129',
    menu: 'Ayam Bakar',
    porsi: '300',
    tanggal: '2026-03-26',
    anggaran: 'Rp 9.000.000',
    status: 'approved',
  },
]

const paymentData = [
  {
    id: 'PROP-2026-03-00128',
    nominal: 'Rp 15.000.000',
    status: 'approved',
    tanggal: '2026-03-28',
  },
  {
    id: 'PROP-2026-03-00129',
    nominal: 'Rp 9.000.000',
    status: 'pending',
    tanggal: '-',
  },
]

const shippingData = [
  {
    id: 'PROP-2026-03-00128',
    bahan: 'Ayam, Beras, Sayur',
    jumlah: '500 kg Ayam, 300 kg Beras',
    tanggal: '2026-03-24',
    status: 'approved',
  },
]

const anomalyData = [
  {
    id: 'PROP-2026-03-00128',
    bahan: 'Ayam',
    harga: 'Rp 30.000/kg vs Rp 28.000/kg',
    tanggal: '2026-03-24',
    status: 'pending',
  },
]

const feedbackData = [
  {
    sekolah: 'SD Negeri 1 Jakarta',
    rating: 4,
    komentar: 'Ayam enak, tapi sayur kurang segar',
  },
  {
    sekolah: 'SD Negeri 2 Jakarta',
    rating: 3,
    komentar: 'Beras kurang bersih',
  },
]

export function OrdersSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Pesanan Pengadaan</h2>
      
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto bg-white rounded-lg border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">ID Pesanan</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Menu</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Jumlah Porsi</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Tanggal</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Anggaran</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Status</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {ordersData.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 font-semibold text-slate-900">{item.id}</td>
                <td className="px-6 py-4 text-slate-600">{item.menu}</td>
                <td className="px-6 py-4 text-slate-600">{item.porsi}</td>
                <td className="px-6 py-4 text-slate-600">{item.tanggal}</td>
                <td className="px-6 py-4 font-semibold text-slate-900">{item.anggaran}</td>
                <td className="px-6 py-4">
                  <span className={`font-semibold ${
                    item.status === 'approved' ? 'text-green-600' : 'text-orange-600'
                  }`}>
                    {item.status === 'approved' ? 'Disetujui' : 'Menunggu'}
                  </span>
                </td>
                <td className="px-6 py-4 space-x-2">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">Terima</Button>
                  <Button size="sm" variant="outline">Tolak</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3">
        {ordersData.map((item) => (
          <div key={item.id} className="bg-white rounded-lg border border-slate-200 p-4 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.id}</p>
                <p className="text-xs text-slate-500 mt-1">ID Pesanan</p>
              </div>
              <span className={`text-xs font-semibold px-2 py-1 rounded ${
                item.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
              }`}>
                {item.status === 'approved' ? 'Disetujui' : 'Menunggu'}
              </span>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Menu:</span>
                <span className="text-slate-900 font-medium">{item.menu}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Jumlah Porsi:</span>
                <span className="text-slate-900">{item.porsi}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Tanggal:</span>
                <span className="text-slate-900">{item.tanggal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Anggaran:</span>
                <span className="text-slate-900 font-semibold">{item.anggaran}</span>
              </div>
            </div>

            <div className="flex gap-2 pt-2 border-t border-slate-200">
              <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700 text-white">Terima</Button>
              <Button size="sm" variant="outline" className="flex-1">Tolak</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function PaymentSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Status Pembayaran</h2>
      
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto bg-white rounded-lg border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">ID Pesanan</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Nominal</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Status</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Tanggal Diterima</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {paymentData.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 font-semibold text-slate-900">{item.id}</td>
                <td className="px-6 py-4 text-slate-600">{item.nominal}</td>
                <td className="px-6 py-4">
                  <span className={`font-semibold ${
                    item.status === 'approved' ? 'text-green-600' : 'text-orange-600'
                  }`}>
                    {item.status === 'approved' ? 'Terkirim' : 'Menunggu'}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-600">{item.tanggal}</td>
                <td className="px-6 py-4">
                  <Button size="sm" variant="outline">Detail</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3">
        {paymentData.map((item) => (
          <div key={item.id} className="bg-white rounded-lg border border-slate-200 p-4 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.id}</p>
                <p className="text-xs text-slate-500 mt-1">ID Pesanan</p>
              </div>
              <span className={`text-xs font-semibold px-2 py-1 rounded ${
                item.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
              }`}>
                {item.status === 'approved' ? 'Terkirim' : 'Menunggu'}
              </span>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Nominal:</span>
                <span className="text-slate-900 font-semibold">{item.nominal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Tanggal Diterima:</span>
                <span className="text-slate-900">{item.tanggal}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200">
              <Button size="sm" variant="outline" className="w-full">Detail</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ShippingSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Pengiriman Bahan Baku</h2>
      
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto bg-white rounded-lg border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">ID Pesanan</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Jenis Bahan</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Jumlah</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Tanggal</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Status</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {shippingData.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 font-semibold text-slate-900">{item.id}</td>
                <td className="px-6 py-4 text-slate-600">{item.bahan}</td>
                <td className="px-6 py-4 text-slate-600">{item.jumlah}</td>
                <td className="px-6 py-4 text-slate-600">{item.tanggal}</td>
                <td className="px-6 py-4">
                  <span className="font-semibold text-green-600">Diterima</span>
                </td>
                <td className="px-6 py-4 space-x-2">
                  <Button size="sm" variant="outline">Detail</Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">Verifikasi</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3">
        {shippingData.map((item) => (
          <div key={item.id} className="bg-white rounded-lg border border-slate-200 p-4 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.id}</p>
                <p className="text-xs text-slate-500 mt-1">ID Pesanan</p>
              </div>
              <span className="text-xs font-semibold px-2 py-1 rounded bg-green-100 text-green-700">
                Diterima
              </span>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Jenis Bahan:</span>
                <span className="text-slate-900 text-right">{item.bahan}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Jumlah:</span>
                <span className="text-slate-900 text-right">{item.jumlah}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Tanggal:</span>
                <span className="text-slate-900">{item.tanggal}</span>
              </div>
            </div>

            <div className="flex gap-2 pt-2 border-t border-slate-200">
              <Button size="sm" variant="outline" className="flex-1">Detail</Button>
              <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700 text-white">Verifikasi</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function AnomalySection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Notifikasi Anomali</h2>
      
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto bg-white rounded-lg border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">ID Pesanan</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Bahan</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Harga</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Tanggal</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Status</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {anomalyData.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 font-semibold text-slate-900">{item.id}</td>
                <td className="px-6 py-4 text-slate-600">{item.bahan}</td>
                <td className="px-6 py-4 text-slate-600">{item.harga}</td>
                <td className="px-6 py-4 text-slate-600">{item.tanggal}</td>
                <td className="px-6 py-4">
                  <span className="font-semibold text-orange-600">Perlu Klarifikasi</span>
                </td>
                <td className="px-6 py-4 space-x-2">
                  <Button size="sm" variant="outline">Detail</Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">Tanggapi</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3">
        {anomalyData.map((item) => (
          <div key={item.id} className="bg-white rounded-lg border border-slate-200 p-4 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.id}</p>
                <p className="text-xs text-slate-500 mt-1">ID Pesanan</p>
              </div>
              <span className="text-xs font-semibold px-2 py-1 rounded bg-orange-100 text-orange-700">
                Perlu Klarifikasi
              </span>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Bahan:</span>
                <span className="text-slate-900 font-medium">{item.bahan}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Harga:</span>
                <span className="text-slate-900 text-right">{item.harga}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Tanggal:</span>
                <span className="text-slate-900">{item.tanggal}</span>
              </div>
            </div>

            <div className="flex gap-2 pt-2 border-t border-slate-200">
              <Button size="sm" variant="outline" className="flex-1">Detail</Button>
              <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700 text-white">Tanggapi</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function FeedbackSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Laporan Feedback Sekolah</h2>
      
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto bg-white rounded-lg border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Nama Sekolah</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Rating</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Komentar</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {feedbackData.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50">
                <td className="px-6 py-4 font-semibold text-slate-900">{item.sekolah}</td>
                <td className="px-6 py-4">
                  <span className="text-yellow-400">{'★'.repeat(item.rating)}{'☆'.repeat(5-item.rating)}</span>
                </td>
                <td className="px-6 py-4 text-slate-600">{item.komentar}</td>
                <td className="px-6 py-4 space-x-2">
                  <Button size="sm" variant="outline">Detail</Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">Tanggapi</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3">
        {feedbackData.map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg border border-slate-200 p-4 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.sekolah}</p>
                <p className="text-xs text-slate-500 mt-1">Nama Sekolah</p>
              </div>
            </div>
            
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-slate-500">Rating:</span>
                <p className="text-yellow-400 mt-1">{'★'.repeat(item.rating)}{'☆'.repeat(5-item.rating)}</p>
              </div>
              <div>
                <span className="text-slate-500">Komentar:</span>
                <p className="text-slate-600 mt-1">{item.komentar}</p>
              </div>
            </div>

            <div className="flex gap-2 pt-2 border-t border-slate-200">
              <Button size="sm" variant="outline" className="flex-1">Detail</Button>
              <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700 text-white">Tanggapi</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function HistorySection() {
  const historyData = [
    { id: 'PROP-2026-02-00120', tanggal: '2026-02-15', status: 'approved', total: 'Rp 12.000.000' },
    { id: 'PROP-2026-01-00110', tanggal: '2026-01-20', status: 'approved', total: 'Rp 10.500.000' },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Riwayat Pengadaan</h2>
      
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto bg-white rounded-lg border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">ID Pesanan</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Tanggal</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Status</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {historyData.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 font-semibold text-slate-900">{item.id}</td>
                <td className="px-6 py-4 text-slate-600">{item.tanggal}</td>
                <td className="px-6 py-4">
                  <span className="font-semibold text-green-600">Selesai</span>
                </td>
                <td className="px-6 py-4 font-semibold text-slate-900">{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3">
        {historyData.map((item) => (
          <div key={item.id} className="bg-white rounded-lg border border-slate-200 p-4 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.id}</p>
                <p className="text-xs text-slate-500 mt-1">ID Pesanan</p>
              </div>
              <span className="text-xs font-semibold px-2 py-1 rounded bg-green-100 text-green-700">
                Selesai
              </span>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Tanggal:</span>
                <span className="text-slate-900">{item.tanggal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Total:</span>
                <span className="text-slate-900 font-semibold">{item.total}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
