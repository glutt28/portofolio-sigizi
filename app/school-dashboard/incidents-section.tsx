'use client'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'

export default function IncidentsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Laporan Insiden</h2>
      
      <div className="bg-white rounded-lg border border-slate-200 p-8 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">Jenis Insiden:</label>
          <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Pilih Jenis</option>
            <option value="bau">Bau Busuk</option>
            <option value="kontaminasi">Kontaminasi</option>
            <option value="menjamur">Menjamur</option>
            <option value="rusak">Kerusakan Bahan</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">Deskripsi:</label>
          <Textarea placeholder="Jelaskan insiden..." className="min-h-24" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">Tanggal Kejadian:</label>
          <Input type="date" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">Upload Bukti:</label>
          <Input type="file" accept="image/*" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">Perlu Tindak Lanjut:</label>
          <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="yes">Ya</option>
            <option value="no">Tidak</option>
          </select>
        </div>

        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Kirim Laporan</Button>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-8 space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">Status Laporan Terbaru</h3>
        <p className="text-slate-600">Insiden 1: Diterima - Sedang Diproses</p>
        <p className="text-slate-600">Insiden 2: Diselesaikan</p>
      </div>
    </div>
  )
}
