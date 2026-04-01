'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

type SectionKey = 'proposal' | 'transparency' | 'anomaly' | 'feedback' | 'incidents'

const sppgOptions = [
  'SPPG Jakarta Pusat 01',
  'SPPG Bekasi Utara 02',
  'SPPG Bandung Timur 03',
  'SPPG Semarang Selatan 04',
]

const proposalData = [
  {
    id: 'PROP-2026-03-0101',
    sppg: 'SPPG Jakarta Pusat 01',
    wilayah: 'DKI Jakarta',
    periode: 'Maret Minggu 4',
    porsi: 5200,
    anggaran: 24500000,
    tanggal: '2026-03-27',
    status: 'Menunggu Review',
    menu: 'Nasi, Ayam Panggang, Sayur Bening, Pisang',
    nutrisi: '470 kkal, 22g protein, 58g karbo',
    sekolah: 'SDN 01 Menteng, SDN 03 Cikini',
  },
  {
    id: 'PROP-2026-03-0102',
    sppg: 'SPPG Bekasi Utara 02',
    wilayah: 'Jawa Barat',
    periode: 'Maret Minggu 4',
    porsi: 4800,
    anggaran: 21800000,
    tanggal: '2026-03-26',
    status: 'Perlu Revisi',
    menu: 'Nasi, Ikan Kecap, Tumis Wortel, Jeruk',
    nutrisi: '455 kkal, 20g protein, 61g karbo',
    sekolah: 'SDN Harapan 2, SMPN 8 Bekasi',
  },
  {
    id: 'PROP-2026-03-0103',
    sppg: 'SPPG Bandung Timur 03',
    wilayah: 'Jawa Barat',
    periode: 'Maret Minggu 4',
    porsi: 4600,
    anggaran: 20500000,
    tanggal: '2026-03-25',
    status: 'Disetujui',
    menu: 'Nasi Merah, Telur Balado, Cah Kangkung, Pepaya',
    nutrisi: '460 kkal, 21g protein, 55g karbo',
    sekolah: 'SDN Ujung Berung 5, SDN Cisaranten',
  },
  {
    id: 'PROP-2026-03-0104',
    sppg: 'SPPG Semarang Selatan 04',
    wilayah: 'Jawa Tengah',
    periode: 'Maret Minggu 4',
    porsi: 4300,
    anggaran: 19600000,
    tanggal: '2026-03-24',
    status: 'Ditolak',
    menu: 'Nasi, Tempe Orek, Sup Sayur, Semangka',
    nutrisi: '430 kkal, 16g protein, 64g karbo',
    sekolah: 'SDN Banyumanik 1, SDN Tembalang 2',
  },
]

const transparencyData = [
  { id: 'TRX-1001', proposalId: 'PROP-2026-03-0101', sppg: 'SPPG Jakarta Pusat 01', wilayah: 'DKI Jakarta', anggaran: 24500000, dana: 23000000, realisasi: 22550000, selisih: 1900000, status: 'Lengkap' },
  { id: 'TRX-1002', proposalId: 'PROP-2026-03-0102', sppg: 'SPPG Bekasi Utara 02', wilayah: 'Jawa Barat', anggaran: 21800000, dana: 20500000, realisasi: 20150000, selisih: 1650000, status: 'Perlu Klarifikasi' },
  { id: 'TRX-1003', proposalId: 'PROP-2026-03-0103', sppg: 'SPPG Bandung Timur 03', wilayah: 'Jawa Barat', anggaran: 20500000, dana: 19700000, realisasi: 19400000, selisih: 1100000, status: 'Lengkap' },
  { id: 'TRX-1004', proposalId: 'PROP-2026-03-0104', sppg: 'SPPG Semarang Selatan 04', wilayah: 'Jawa Tengah', anggaran: 19600000, dana: 18000000, realisasi: 0, selisih: 19600000, status: 'Belum Lengkap' },
]

const anomalyData = [
  { id: 'ANM-260301', sppg: 'SPPG Jakarta Pusat 01', proposal: 'PROP-2026-03-0101', jenis: 'Harga tidak wajar', severity: 'Tinggi', tanggal: '2026-03-27', status: 'Perlu Klarifikasi', expected: 'Harga ayam Rp 32.000/kg', actual: 'Harga ayam Rp 39.500/kg', dampak: 'Estimasi deviasi +14.2%', klarifikasi: 'Supplier utama terlambat, beli dari vendor cadangan.' },
  { id: 'ANM-260302', sppg: 'SPPG Bekasi Utara 02', proposal: 'PROP-2026-03-0102', jenis: 'Deviasi jumlah', severity: 'Sedang', tanggal: '2026-03-26', status: 'Dalam Tinjauan', expected: 'Porsi 4.800', actual: 'Realisasi 4.350', dampak: 'Kekurangan 450 porsi', klarifikasi: 'Kerusakan bahan saat distribusi.' },
  { id: 'ANM-260303', sppg: 'SPPG Bandung Timur 03', proposal: 'PROP-2026-03-0103', jenis: 'Supplier risk', severity: 'Sedang', tanggal: '2026-03-25', status: 'Perlu Pemantauan', expected: 'Lead time < 2 hari', actual: 'Lead time 4 hari', dampak: 'Potensi keterlambatan menu', klarifikasi: 'Supplier pindah gudang operasional.' },
  { id: 'ANM-260304', sppg: 'SPPG Semarang Selatan 04', proposal: 'PROP-2026-03-0104', jenis: 'Tidak sesuai proposal', severity: 'Rendah', tanggal: '2026-03-24', status: 'Ditutup', expected: 'Menu dengan buah segar harian', actual: 'Buah hanya 2 hari dari 5 hari', dampak: 'Kualitas pemenuhan gizi menurun', klarifikasi: 'Ketersediaan buah lokal terbatas.' },
]

const feedbackData = [
  { sekolah: 'SDN 01 Menteng', sppg: 'SPPG Jakarta Pusat 01', wilayah: 'DKI Jakarta', rating: 4.5, foodWaste: 6, kesesuaian: 'Sesuai', komentar: 'Rasa cukup baik, mohon tambah variasi sayur.', menu: 'Nasi ayam panggang + sayur bening', detailRating: 'Rasa 4/5, Porsi 5/5, Kebersihan 5/5' },
  { sekolah: 'SMPN 8 Bekasi', sppg: 'SPPG Bekasi Utara 02', wilayah: 'Jawa Barat', rating: 3.2, foodWaste: 12, kesesuaian: 'Perlu Evaluasi', komentar: 'Ikan terlalu asin dan porsi buah kurang.', menu: 'Nasi ikan kecap + tumis wortel', detailRating: 'Rasa 3/5, Porsi 3/5, Kebersihan 4/5' },
  { sekolah: 'SDN Ujung Berung 5', sppg: 'SPPG Bandung Timur 03', wilayah: 'Jawa Barat', rating: 4.1, foodWaste: 8, kesesuaian: 'Sesuai', komentar: 'Menu seimbang dan diterima siswa.', menu: 'Nasi merah + telur balado', detailRating: 'Rasa 4/5, Porsi 4/5, Kebersihan 5/5' },
  { sekolah: 'SDN Tembalang 2', sppg: 'SPPG Semarang Selatan 04', wilayah: 'Jawa Tengah', rating: 2.9, foodWaste: 16, kesesuaian: 'Tidak Sesuai', komentar: 'Tempe kurang matang, kualitas menurun.', menu: 'Nasi + tempe orek + sup sayur', detailRating: 'Rasa 2/5, Porsi 3/5, Kebersihan 4/5' },
]

const incidentData = [
  { id: 'INC-2603-01', sekolah: 'SDN 01 Menteng', sppg: 'SPPG Jakarta Pusat 01', jenis: 'Bau busuk', tanggal: '2026-03-27', severity: 'Tinggi', status: 'Baru' },
  { id: 'INC-2603-02', sekolah: 'SMPN 8 Bekasi', sppg: 'SPPG Bekasi Utara 02', jenis: 'Kontaminasi', tanggal: '2026-03-26', severity: 'Tinggi', status: 'Diproses' },
  { id: 'INC-2603-03', sekolah: 'SDN Ujung Berung 5', sppg: 'SPPG Bandung Timur 03', jenis: 'Jumlah tidak sesuai', tanggal: '2026-03-25', severity: 'Sedang', status: 'Menunggu' },
  { id: 'INC-2603-04', sekolah: 'SDN Tembalang 2', sppg: 'SPPG Semarang Selatan 04', jenis: 'Kualitas buruk', tanggal: '2026-03-24', severity: 'Sedang', status: 'Selesai' },
  { id: 'INC-2603-05', sekolah: 'SDN Banyumanik 1', sppg: 'SPPG Semarang Selatan 04', jenis: 'Keterlambatan', tanggal: '2026-03-24', severity: 'Rendah', status: 'Diproses' },
]

const navigationItems: { label: string; id: SectionKey }[] = [
  { label: 'Proposal Pengadaan', id: 'proposal' },
  { label: 'Laporan Transparansi', id: 'transparency' },
  { label: 'Analisis Pengadaan dan Deteksi Anomali', id: 'anomaly' },
  { label: 'Feedback Sekolah', id: 'feedback' },
  { label: 'Laporan Insiden', id: 'incidents' },
]

function formatCurrency(value: number) {
  return `Rp ${value.toLocaleString('id-ID')}`
}

function statusColor(status: string) {
  const text = status.toLowerCase()
  if (text.includes('setuju') || text.includes('lengkap') || text.includes('selesai') || text.includes('sesuai')) return 'text-green-600'
  if (text.includes('tolak') || text.includes('tinggi') || text.includes('baru') || text.includes('tidak')) return 'text-red-600'
  return 'text-orange-600'
}

function Sidebar({ activeSection, onSectionChange, isOpen }: { activeSection: SectionKey; onSectionChange: (id: SectionKey) => void; isOpen: boolean }) {
  return (
    <aside className={`
      fixed md:static top-0 left-0 h-screen w-64 bg-white border-r border-slate-200 p-4 md:p-6 overflow-y-auto
      transition-transform duration-300 z-40
      ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
    `}>
      <h3 className="text-lg font-semibold text-green-600 mb-6">Menu Navigasi</h3>
      <nav className="space-y-2">
        {navigationItems.map((item) => (
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

function DashboardHeader() {
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
          🍎
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Badan Gizi Nasional</h1>
          <p className="text-slate-600">Pengawasan Multi-SPPG</p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <span className="text-2xl">🔔</span>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            6
          </span>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-600">Tanggal</p>
          <p className="text-sm font-semibold text-slate-900">{today}</p>
        </div>
      </div>
    </header>
  )
}

function OverviewSection({ period, setPeriod, region, setRegion, sppg, setSppg }: {
  period: string
  setPeriod: (value: string) => void
  region: string
  setRegion: (value: string) => void
  sppg: string
  setSppg: (value: string) => void
}) {
  const avgRating = (feedbackData.reduce((sum, item) => sum + item.rating, 0) / feedbackData.length).toFixed(1)
  const pendingReview = proposalData.filter((item) => item.status === 'Menunggu Review').length
  const anomalyActive = anomalyData.filter((item) => item.status !== 'Ditutup').length
  const incidentActive = incidentData.filter((item) => item.status !== 'Selesai').length

  return (
    <section className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border border-slate-200 p-4"><p className="text-sm text-slate-600">Total SPPG diawasi</p><p className="text-2xl font-bold text-slate-900">{sppgOptions.length}</p></div>
        <div className="bg-white rounded-lg border border-slate-200 p-4"><p className="text-sm text-slate-600">Total proposal aktif</p><p className="text-2xl font-bold text-slate-900">{proposalData.length}</p></div>
        <div className="bg-white rounded-lg border border-slate-200 p-4"><p className="text-sm text-slate-600">Proposal menunggu review</p><p className="text-2xl font-bold text-orange-600">{pendingReview}</p></div>
        <div className="bg-white rounded-lg border border-slate-200 p-4"><p className="text-sm text-slate-600">Total anomali aktif</p><p className="text-2xl font-bold text-red-600">{anomalyActive}</p></div>
        <div className="bg-white rounded-lg border border-slate-200 p-4"><p className="text-sm text-slate-600">Total insiden aktif</p><p className="text-2xl font-bold text-red-600">{incidentActive}</p></div>
        <div className="bg-white rounded-lg border border-slate-200 p-4"><p className="text-sm text-slate-600">Rata-rata rating sekolah</p><p className="text-2xl font-bold text-slate-900">{avgRating}/5</p></div>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-4 grid grid-cols-1 md:grid-cols-3 gap-3">
        <select className="w-full px-3 py-2 border border-slate-300 rounded-lg" value={period} onChange={(event) => setPeriod(event.target.value)}>
          <option value="maret-w4">Periode: Maret Minggu 4</option>
          <option value="maret-w3">Periode: Maret Minggu 3</option>
          <option value="maret-w2">Periode: Maret Minggu 2</option>
        </select>
        <select className="w-full px-3 py-2 border border-slate-300 rounded-lg" value={region} onChange={(event) => setRegion(event.target.value)}>
          <option value="all">Wilayah: Semua</option>
          <option value="dki">DKI Jakarta</option>
          <option value="jabar">Jawa Barat</option>
          <option value="jateng">Jawa Tengah</option>
        </select>
        <select className="w-full px-3 py-2 border border-slate-300 rounded-lg" value={sppg} onChange={(event) => setSppg(event.target.value)}>
          <option value="all">SPPG: Semua</option>
          {sppgOptions.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </div>
    </section>
  )
}

function ProposalSection({ onSelectDetail }: { onSelectDetail: (proposalId: string) => void }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Proposal Pengadaan</h2>
      <div className="mb-4">
        <Input placeholder="Cari proposal/SPPG" className="max-w-sm" />
      </div>

      <div className="hidden md:block overflow-x-auto bg-white rounded-lg border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">ID Proposal</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Nama SPPG</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Wilayah</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Periode</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Jumlah Porsi</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Total Anggaran</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Tanggal Pengajuan</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Status</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {proposalData.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 font-semibold text-slate-900">{item.id}</td>
                <td className="px-6 py-4 text-slate-600">{item.sppg}</td>
                <td className="px-6 py-4 text-slate-600">{item.wilayah}</td>
                <td className="px-6 py-4 text-slate-600">{item.periode}</td>
                <td className="px-6 py-4 text-slate-600">{item.porsi.toLocaleString('id-ID')}</td>
                <td className="px-6 py-4 text-slate-600">{formatCurrency(item.anggaran)}</td>
                <td className="px-6 py-4 text-slate-600">{item.tanggal}</td>
                <td className={`px-6 py-4 font-semibold ${statusColor(item.status)}`}>{item.status}</td>
                <td className="px-6 py-4 space-x-2">
                  <Button size="sm" variant="outline" onClick={() => onSelectDetail(item.id)}>Lihat Detail</Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">Approve</Button>
                  <Button size="sm" variant="outline">Revisi</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-3">
        {proposalData.map((item) => (
          <div key={item.id} className="bg-white rounded-lg border border-slate-200 p-4 space-y-2">
            <p className="font-semibold text-slate-900">{item.id}</p>
            <p className="text-sm text-slate-600">{item.sppg}</p>
            <p className="text-sm text-slate-600">{item.wilayah} • {item.periode}</p>
            <p className="text-sm text-slate-600">Porsi: {item.porsi.toLocaleString('id-ID')}</p>
            <p className="text-sm text-slate-600">Anggaran: {formatCurrency(item.anggaran)}</p>
            <p className="text-sm text-slate-600">Tanggal: {item.tanggal}</p>
            <p className={`text-sm font-semibold ${statusColor(item.status)}`}>{item.status}</p>
            <div className="flex flex-wrap gap-2">
              <Button size="sm" variant="outline" onClick={() => onSelectDetail(item.id)}>Lihat Detail</Button>
              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">Approve</Button>
              <Button size="sm" variant="outline">Revisi</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProposalDetailSection({ proposalId }: { proposalId: string }) {
  const selected = proposalData.find((item) => item.id === proposalId)
  if (!selected) return null

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-3">
      <h3 className="text-lg font-semibold text-slate-900">Detail Proposal: {selected.id}</h3>
      <p className="text-sm text-slate-600"><span className="font-semibold text-slate-900">Data SPPG:</span> {selected.sppg} • {selected.wilayah}</p>
      <p className="text-sm text-slate-600"><span className="font-semibold text-slate-900">Menu mingguan:</span> {selected.menu}</p>
      <p className="text-sm text-slate-600"><span className="font-semibold text-slate-900">Estimasi biaya:</span> {formatCurrency(selected.anggaran)}</p>
      <p className="text-sm text-slate-600"><span className="font-semibold text-slate-900">Kandungan nutrisi:</span> {selected.nutrisi}</p>
      <p className="text-sm text-slate-600"><span className="font-semibold text-slate-900">Sekolah penerima:</span> {selected.sekolah}</p>
    </div>
  )
}

function TransparencySection() {
  const totalAnggaran = transparencyData.reduce((sum, item) => sum + item.anggaran, 0)
  const danaTersalurkan = transparencyData.reduce((sum, item) => sum + item.dana, 0)
  const realisasi = transparencyData.reduce((sum, item) => sum + item.realisasi, 0)
  const deviasi = totalAnggaran - realisasi

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Laporan Transparansi</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-slate-200 p-4"><p className="text-sm text-slate-600">Total anggaran</p><p className="text-xl font-bold text-slate-900">{formatCurrency(totalAnggaran)}</p></div>
        <div className="bg-white rounded-lg border border-slate-200 p-4"><p className="text-sm text-slate-600">Dana tersalurkan</p><p className="text-xl font-bold text-slate-900">{formatCurrency(danaTersalurkan)}</p></div>
        <div className="bg-white rounded-lg border border-slate-200 p-4"><p className="text-sm text-slate-600">Realisasi</p><p className="text-xl font-bold text-slate-900">{formatCurrency(realisasi)}</p></div>
        <div className="bg-white rounded-lg border border-slate-200 p-4"><p className="text-sm text-slate-600">Deviasi</p><p className="text-xl font-bold text-red-600">{formatCurrency(deviasi)}</p></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 bg-white rounded-lg border border-slate-200 p-4">
        <select className="w-full px-3 py-2 border border-slate-300 rounded-lg"><option>SPPG</option>{sppgOptions.map((item) => <option key={item}>{item}</option>)}</select>
        <select className="w-full px-3 py-2 border border-slate-300 rounded-lg"><option>Status</option><option>Lengkap</option><option>Perlu Klarifikasi</option><option>Belum Lengkap</option></select>
        <select className="w-full px-3 py-2 border border-slate-300 rounded-lg"><option>Wilayah</option><option>DKI Jakarta</option><option>Jawa Barat</option><option>Jawa Tengah</option></select>
        <select className="w-full px-3 py-2 border border-slate-300 rounded-lg"><option>Periode</option><option>Maret Minggu 4</option><option>Maret Minggu 3</option></select>
      </div>

      <div className="hidden md:block overflow-x-auto bg-white rounded-lg border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">ID Proposal</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">SPPG</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Anggaran</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Dana</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Realisasi</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Selisih</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {transparencyData.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 font-semibold text-slate-900">{item.proposalId}</td>
                <td className="px-6 py-4 text-slate-600">{item.sppg}</td>
                <td className="px-6 py-4 text-slate-600">{formatCurrency(item.anggaran)}</td>
                <td className="px-6 py-4 text-slate-600">{formatCurrency(item.dana)}</td>
                <td className="px-6 py-4 text-slate-600">{formatCurrency(item.realisasi)}</td>
                <td className="px-6 py-4 text-slate-600">{formatCurrency(item.selisih)}</td>
                <td className={`px-6 py-4 font-semibold ${statusColor(item.status)}`}>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-3">
        {transparencyData.map((item) => (
          <div key={item.id} className="bg-white rounded-lg border border-slate-200 p-4 space-y-1">
            <p className="font-semibold text-slate-900">{item.proposalId}</p>
            <p className="text-sm text-slate-600">{item.sppg}</p>
            <p className="text-sm text-slate-600">Anggaran: {formatCurrency(item.anggaran)}</p>
            <p className="text-sm text-slate-600">Dana: {formatCurrency(item.dana)}</p>
            <p className="text-sm text-slate-600">Realisasi: {formatCurrency(item.realisasi)}</p>
            <p className="text-sm text-slate-600">Selisih: {formatCurrency(item.selisih)}</p>
            <p className={`text-sm font-semibold ${statusColor(item.status)}`}>{item.status}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function AnomalySection({ onSelectAnomaly }: { onSelectAnomaly: (id: string) => void }) {
  const totalAnomaly = anomalyData.length
  const hargaAnomaly = anomalyData.filter((item) => item.jenis === 'Harga tidak wajar').length
  const qtyAnomaly = anomalyData.filter((item) => item.jenis === 'Deviasi jumlah').length
  const supplierRisk = anomalyData.filter((item) => item.jenis === 'Supplier risk').length

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Analisis Pengadaan dan Deteksi Anomali</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-slate-200 p-4"><p className="text-sm text-slate-600">Total anomali</p><p className="text-2xl font-bold text-slate-900">{totalAnomaly}</p></div>
        <div className="bg-white rounded-lg border border-slate-200 p-4"><p className="text-sm text-slate-600">Anomali harga</p><p className="text-2xl font-bold text-red-600">{hargaAnomaly}</p></div>
        <div className="bg-white rounded-lg border border-slate-200 p-4"><p className="text-sm text-slate-600">Anomali kuantitas</p><p className="text-2xl font-bold text-orange-600">{qtyAnomaly}</p></div>
        <div className="bg-white rounded-lg border border-slate-200 p-4"><p className="text-sm text-slate-600">Supplier risk</p><p className="text-2xl font-bold text-orange-600">{supplierRisk}</p></div>
      </div>

      <div className="hidden md:block overflow-x-auto bg-white rounded-lg border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">ID Anomali</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">SPPG</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Proposal</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Jenis</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Severity</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Tanggal</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Status</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {anomalyData.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 font-semibold text-slate-900">{item.id}</td>
                <td className="px-6 py-4 text-slate-600">{item.sppg}</td>
                <td className="px-6 py-4 text-slate-600">{item.proposal}</td>
                <td className="px-6 py-4 text-slate-600">{item.jenis}</td>
                <td className={`px-6 py-4 font-semibold ${statusColor(item.severity)}`}>{item.severity}</td>
                <td className="px-6 py-4 text-slate-600">{item.tanggal}</td>
                <td className={`px-6 py-4 font-semibold ${statusColor(item.status)}`}>{item.status}</td>
                <td className="px-6 py-4 space-x-2">
                  <Button size="sm" variant="outline" onClick={() => onSelectAnomaly(item.id)}>Lihat Detail</Button>
                  <Button size="sm" variant="outline">Lihat Klarifikasi</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-3">
        {anomalyData.map((item) => (
          <div key={item.id} className="bg-white rounded-lg border border-slate-200 p-4 space-y-1">
            <p className="font-semibold text-slate-900">{item.id}</p>
            <p className="text-sm text-slate-600">{item.sppg}</p>
            <p className="text-sm text-slate-600">{item.proposal}</p>
            <p className="text-sm text-slate-600">{item.jenis}</p>
            <p className={`text-sm font-semibold ${statusColor(item.severity)}`}>Severity: {item.severity}</p>
            <p className={`text-sm font-semibold ${statusColor(item.status)}`}>{item.status}</p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Button size="sm" variant="outline" onClick={() => onSelectAnomaly(item.id)}>Lihat Detail</Button>
              <Button size="sm" variant="outline">Lihat Klarifikasi</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AnomalyDetailSection({ anomalyId }: { anomalyId: string }) {
  const selected = anomalyData.find((item) => item.id === anomalyId)
  if (!selected) return null

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-3">
      <h3 className="text-lg font-semibold text-slate-900">Detail Anomali: {selected.id}</h3>
      <p className="text-sm text-slate-600"><span className="font-semibold text-slate-900">Expected:</span> {selected.expected}</p>
      <p className="text-sm text-slate-600"><span className="font-semibold text-slate-900">Actual:</span> {selected.actual}</p>
      <p className="text-sm text-slate-600"><span className="font-semibold text-slate-900">Dampak:</span> {selected.dampak}</p>
      <p className="text-sm text-slate-600"><span className="font-semibold text-slate-900">Klarifikasi SPPG:</span> {selected.klarifikasi}</p>
    </div>
  )
}

function FeedbackSection({ onSelectFeedback }: { onSelectFeedback: (school: string) => void }) {
  const totalSekolah = feedbackData.length
  const avgRating = (feedbackData.reduce((sum, item) => sum + item.rating, 0) / feedbackData.length).toFixed(1)
  const avgFoodWaste = (feedbackData.reduce((sum, item) => sum + item.foodWaste, 0) / feedbackData.length).toFixed(1)

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Feedback Sekolah</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-slate-200 p-4"><p className="text-sm text-slate-600">Total sekolah</p><p className="text-2xl font-bold text-slate-900">{totalSekolah}</p></div>
        <div className="bg-white rounded-lg border border-slate-200 p-4"><p className="text-sm text-slate-600">Total feedback</p><p className="text-2xl font-bold text-slate-900">{feedbackData.length}</p></div>
        <div className="bg-white rounded-lg border border-slate-200 p-4"><p className="text-sm text-slate-600">Rating rata-rata</p><p className="text-2xl font-bold text-slate-900">{avgRating}/5</p></div>
        <div className="bg-white rounded-lg border border-slate-200 p-4"><p className="text-sm text-slate-600">Rata-rata food waste</p><p className="text-2xl font-bold text-red-600">{avgFoodWaste}%</p></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 bg-white rounded-lg border border-slate-200 p-4">
        <select className="w-full px-3 py-2 border border-slate-300 rounded-lg"><option>SPPG</option>{sppgOptions.map((item) => <option key={item}>{item}</option>)}</select>
        <select className="w-full px-3 py-2 border border-slate-300 rounded-lg"><option>Rating</option><option>4-5</option><option>3-4</option><option>Kurang dari 3</option></select>
        <select className="w-full px-3 py-2 border border-slate-300 rounded-lg"><option>Wilayah</option><option>DKI Jakarta</option><option>Jawa Barat</option><option>Jawa Tengah</option></select>
        <select className="w-full px-3 py-2 border border-slate-300 rounded-lg"><option>Periode</option><option>Maret Minggu 4</option><option>Maret Minggu 3</option></select>
      </div>

      <div className="hidden md:block overflow-x-auto bg-white rounded-lg border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Nama Sekolah</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">SPPG</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Rating</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Food waste</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Status kesesuaian</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Komentar</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {feedbackData.map((item) => (
              <tr key={item.sekolah} className="hover:bg-slate-50">
                <td className="px-6 py-4 font-semibold text-slate-900">{item.sekolah}</td>
                <td className="px-6 py-4 text-slate-600">{item.sppg}</td>
                <td className="px-6 py-4 text-slate-600">{item.rating.toFixed(1)}</td>
                <td className="px-6 py-4 text-slate-600">{item.foodWaste}%</td>
                <td className={`px-6 py-4 font-semibold ${statusColor(item.kesesuaian)}`}>{item.kesesuaian}</td>
                <td className="px-6 py-4 text-slate-600">{item.komentar}</td>
                <td className="px-6 py-4"><Button size="sm" variant="outline" onClick={() => onSelectFeedback(item.sekolah)}>Lihat Detail</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-3">
        {feedbackData.map((item) => (
          <div key={item.sekolah} className="bg-white rounded-lg border border-slate-200 p-4 space-y-1">
            <p className="font-semibold text-slate-900">{item.sekolah}</p>
            <p className="text-sm text-slate-600">{item.sppg}</p>
            <p className="text-sm text-slate-600">Rating: {item.rating.toFixed(1)} / Food waste: {item.foodWaste}%</p>
            <p className={`text-sm font-semibold ${statusColor(item.kesesuaian)}`}>{item.kesesuaian}</p>
            <p className="text-sm text-slate-600">{item.komentar}</p>
            <Button size="sm" variant="outline" onClick={() => onSelectFeedback(item.sekolah)}>Lihat Detail</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

function FeedbackDetailSection({ schoolName }: { schoolName: string }) {
  const selected = feedbackData.find((item) => item.sekolah === schoolName)
  if (!selected) return null

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-3">
      <h3 className="text-lg font-semibold text-slate-900">Detail Feedback: {selected.sekolah}</h3>
      <p className="text-sm text-slate-600"><span className="font-semibold text-slate-900">Menu diterima:</span> {selected.menu}</p>
      <p className="text-sm text-slate-600"><span className="font-semibold text-slate-900">Rating detail:</span> {selected.detailRating}</p>
      <p className="text-sm text-slate-600"><span className="font-semibold text-slate-900">Komentar lengkap:</span> {selected.komentar}</p>
      <div className="pt-2">
        <Textarea placeholder="Catatan tindak lanjut BGN (dummy)" className="min-h-20" />
      </div>
    </div>
  )
}

function IncidentSection() {
  const total = incidentData.length
  const baru = incidentData.filter((item) => item.status === 'Baru').length
  const diproses = incidentData.filter((item) => item.status === 'Diproses').length
  const selesai = incidentData.filter((item) => item.status === 'Selesai').length
  const highPriority = incidentData.filter((item) => item.severity === 'Tinggi').length

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Laporan Insiden</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
        <div className="bg-white rounded-lg border border-slate-200 p-4"><p className="text-sm text-slate-600">Total insiden</p><p className="text-2xl font-bold text-slate-900">{total}</p></div>
        <div className="bg-white rounded-lg border border-slate-200 p-4"><p className="text-sm text-slate-600">Baru</p><p className="text-2xl font-bold text-red-600">{baru}</p></div>
        <div className="bg-white rounded-lg border border-slate-200 p-4"><p className="text-sm text-slate-600">Diproses</p><p className="text-2xl font-bold text-orange-600">{diproses}</p></div>
        <div className="bg-white rounded-lg border border-slate-200 p-4"><p className="text-sm text-slate-600">Selesai</p><p className="text-2xl font-bold text-green-600">{selesai}</p></div>
        <div className="bg-white rounded-lg border border-slate-200 p-4"><p className="text-sm text-slate-600">Prioritas tinggi</p><p className="text-2xl font-bold text-red-600">{highPriority}</p></div>
      </div>

      <div className="hidden md:block overflow-x-auto bg-white rounded-lg border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">ID</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Sekolah</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">SPPG</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Jenis</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Tanggal</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Severity</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Status</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-900">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {incidentData.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 font-semibold text-slate-900">{item.id}</td>
                <td className="px-6 py-4 text-slate-600">{item.sekolah}</td>
                <td className="px-6 py-4 text-slate-600">{item.sppg}</td>
                <td className="px-6 py-4 text-slate-600">{item.jenis}</td>
                <td className="px-6 py-4 text-slate-600">{item.tanggal}</td>
                <td className={`px-6 py-4 font-semibold ${statusColor(item.severity)}`}>{item.severity}</td>
                <td className={`px-6 py-4 font-semibold ${statusColor(item.status)}`}>{item.status}</td>
                <td className="px-6 py-4 space-x-2">
                  <Button size="sm" variant="outline">Detail</Button>
                  <Button size="sm" variant="outline">Perbarui status</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-3">
        {incidentData.map((item) => (
          <div key={item.id} className="bg-white rounded-lg border border-slate-200 p-4 space-y-1">
            <p className="font-semibold text-slate-900">{item.id}</p>
            <p className="text-sm text-slate-600">{item.sekolah}</p>
            <p className="text-sm text-slate-600">{item.sppg}</p>
            <p className="text-sm text-slate-600">{item.jenis} • {item.tanggal}</p>
            <p className={`text-sm font-semibold ${statusColor(item.severity)}`}>Severity: {item.severity}</p>
            <p className={`text-sm font-semibold ${statusColor(item.status)}`}>{item.status}</p>
            <div className="flex gap-2 pt-1">
              <Button size="sm" variant="outline">Detail</Button>
              <Button size="sm" variant="outline">Update status</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function DashboardContent({
  activeSection,
  setSelectedProposal,
  setSelectedAnomaly,
  setSelectedFeedback,
}: {
  activeSection: SectionKey
  setSelectedProposal: (value: string) => void
  setSelectedAnomaly: (value: string) => void
  setSelectedFeedback: (value: string) => void
}) {
  switch (activeSection) {
    case 'proposal':
      return <ProposalSection onSelectDetail={setSelectedProposal} />
    case 'transparency':
      return <TransparencySection />
    case 'anomaly':
      return <AnomalySection onSelectAnomaly={setSelectedAnomaly} />
    case 'feedback':
      return <FeedbackSection onSelectFeedback={setSelectedFeedback} />
    case 'incidents':
      return <IncidentSection />
    default:
      return <ProposalSection onSelectDetail={setSelectedProposal} />
  }
}

export default function BGNDashboard() {
  const [activeSection, setActiveSection] = useState<SectionKey>('proposal')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [period, setPeriod] = useState('maret-w4')
  const [region, setRegion] = useState('all')
  const [sppg, setSppg] = useState('all')
  const [selectedProposal, setSelectedProposal] = useState(proposalData[0].id)
  const [selectedAnomaly, setSelectedAnomaly] = useState(anomalyData[0].id)
  const [selectedFeedback, setSelectedFeedback] = useState(feedbackData[0].sekolah)

  return (
    <div className="flex h-screen bg-slate-50 flex-col md:flex-row">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar
        activeSection={activeSection}
        onSectionChange={(id: SectionKey) => {
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
          <div className="space-y-6">
            <OverviewSection period={period} setPeriod={setPeriod} region={region} setRegion={setRegion} sppg={sppg} setSppg={setSppg} />

            <DashboardContent
              activeSection={activeSection}
              setSelectedProposal={setSelectedProposal}
              setSelectedAnomaly={setSelectedAnomaly}
              setSelectedFeedback={setSelectedFeedback}
            />

            {activeSection === 'proposal' ? <ProposalDetailSection proposalId={selectedProposal} /> : null}
            {activeSection === 'anomaly' ? <AnomalyDetailSection anomalyId={selectedAnomaly} /> : null}
            {activeSection === 'feedback' ? <FeedbackDetailSection schoolName={selectedFeedback} /> : null}
          </div>
        </main>

        <footer className="bg-white border-t border-slate-200 px-4 sm:px-6 md:px-8 py-3 md:py-4 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-slate-600 text-center sm:text-left">© 2026 SIGIZI Guard. Semua Hak Dilindungi.</p>
          <a href="/" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto">Kembali ke Beranda</Button>
          </a>
        </footer>
      </div>
    </div>
  )
}
