'use client'

import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'

type DayKey = 'senin' | 'selasa' | 'rabu' | 'kamis' | 'jumat'
type SectionKey = 'proposal' | 'schools' | 'funds' | 'supplier' | 'receipt' | 'monitoring' | 'feedback'

type MaterialItem = {
  id: string
  name: string
  qty: string
  unit: string
  price: string
}

type MenuPlan = Record<
  DayKey,
  {
    menu: string
    portions: string
    category: string
    materials: MaterialItem[]
  }
>

const sectionItems: { id: SectionKey; label: string }[] = [
  { id: 'proposal', label: 'Proposal Pengadaan' },
  { id: 'schools', label: 'Tambah Sekolah Penerima Manfaat' },
  { id: 'funds', label: 'Status Pencairan Dana' },
  { id: 'supplier', label: 'Transaksi dengan Supplier' },
  { id: 'receipt', label: 'Penerimaan Bahan' },
  { id: 'monitoring', label: 'Monitoring Pengadaan' },
  { id: 'feedback', label: 'Laporan Feedback' },
]

const dayLabels: Record<DayKey, string> = {
  senin: 'Senin',
  selasa: 'Selasa',
  rabu: 'Rabu',
  kamis: 'Kamis',
  jumat: 'Jumat',
}

const starterMenuPlan: MenuPlan = {
  senin: {
    menu: '',
    portions: '500',
    category: '',
    materials: [{ id: 'senin-1', name: 'Beras', qty: '50', unit: 'kg', price: '10000' }],
  },
  selasa: {
    menu: '',
    portions: '450',
    category: '',
    materials: [{ id: 'selasa-1', name: 'Ayam', qty: '100', unit: 'kg', price: '30000' }],
  },
  rabu: {
    menu: '',
    portions: '480',
    category: '',
    materials: [{ id: 'rabu-1', name: 'Ikan', qty: '80', unit: 'kg', price: '35000' }],
  },
  kamis: {
    menu: '',
    portions: '470',
    category: '',
    materials: [{ id: 'kamis-1', name: 'Tempe', qty: '60', unit: 'kg', price: '15000' }],
  },
  jumat: {
    menu: '',
    portions: '460',
    category: '',
    materials: [{ id: 'jumat-1', name: 'Sayuran', qty: '70', unit: 'kg', price: '12000' }],
  },
}

const proposalRows = [
  {
    name: 'Proposal Menu Minggu ke-12',
    status: 'Disetujui',
    budget: 'Rp 15.000.000',
    portions: '1000',
    submittedAt: '20 Mar 2026',
  },
  {
    name: 'Proposal Menu Minggu ke-13',
    status: 'Menunggu Persetujuan',
    budget: 'Rp 16.500.000',
    portions: '1100',
    submittedAt: '25 Mar 2026',
  },
]

const fundsRows = [
  {
    proposal: 'Proposal Menu Minggu ke-12',
    requested: 'Rp 15.000.000',
    transferred: 'Rp 15.000.000',
    date: '22 Mar 2026',
    status: 'Terkirim',
  },
  {
    proposal: 'Proposal Menu Minggu ke-13',
    requested: 'Rp 16.500.000',
    transferred: 'Rp 10.000.000',
    date: '26 Mar 2026',
    status: 'Menunggu Verifikasi',
  },
]

const monitoringRows = [
  {
    proposal: 'Proposal Menu Minggu ke-12',
    status: 'Selesai',
    distributionDate: '27 Mar 2026',
  },
  {
    proposal: 'Proposal Menu Minggu ke-13',
    status: 'Dalam Pengiriman',
    distributionDate: '30 Mar 2026',
  },
]

const feedbackRows = [
  {
    school: 'SD Negeri 1 Jakarta',
    rating: '★★★★☆',
    comment: 'Makanan enak, tapi porsi sedikit',
    waste: '5%',
  },
  {
    school: 'SD Negeri 2 Jakarta',
    rating: '★★★☆☆',
    comment: 'Ayam kurang matang',
    waste: '10%',
  },
]

function currency(value: number) {
  return value.toLocaleString('id-ID')
}

function sectionTitleClass(status: string) {
  if (status.toLowerCase().includes('setuju') || status.toLowerCase().includes('terkirim') || status.toLowerCase().includes('selesai')) {
    return 'text-emerald-600'
  }
  if (status.toLowerCase().includes('tolak')) {
    return 'text-red-600'
  }
  return 'text-amber-600'
}

export default function SPPGDashboard() {
  const [activeSection, setActiveSection] = useState<SectionKey>('proposal')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showProposalForm, setShowProposalForm] = useState(false)
  const [showSupplierForm, setShowSupplierForm] = useState(false)
  const [menuPlan, setMenuPlan] = useState<MenuPlan>(starterMenuPlan)
  const [proposalSubmitted, setProposalSubmitted] = useState(false)

  const [schoolForm, setSchoolForm] = useState({
    name: '',
    address: '',
    postal: '',
    phone: '',
    email: '',
    website: '',
    students: '',
    kitchenCapacity: '',
    schoolType: '',
    educationLevel: '',
    managerName: '',
    managerPosition: '',
    managerEmail: '',
    managerPhone: '',
  })
  const [schoolSearch, setSchoolSearch] = useState('')
  const [schoolStatusFilter, setSchoolStatusFilter] = useState('')
  const [schoolRows, setSchoolRows] = useState([
    { name: 'SD Negeri 1 Jakarta', address: 'Jl. Sudirman No. 1', students: 500, portions: 500, status: 'Disetujui' },
    { name: 'SMP Negeri 2 Jakarta', address: 'Jl. Thamrin No. 2', students: 300, portions: 300, status: 'Menunggu Verifikasi' },
  ])

  const [supplierForm, setSupplierForm] = useState({ name: '', material: '', price: '' })
  const [supplierRows, setSupplierRows] = useState([
    {
      name: 'PT. Makanan Sehat',
      materials: 'Ayam, Sayuran',
      price: 'Rp 50.000/kg',
      deliveryStatus: 'Diterima',
      receivedAt: '25 Mar 2026',
    },
    {
      name: 'CV. Bahan Pangan',
      materials: 'Nasi, Ikan',
      price: 'Rp 45.000/kg',
      deliveryStatus: 'Dalam Pengiriman',
      receivedAt: '-',
    },
  ])

  const dayTotal = (day: DayKey) =>
    menuPlan[day].materials.reduce((sum, item) => {
      const qty = Number(item.qty) || 0
      const price = Number(item.price) || 0
      return sum + qty * price
    }, 0)

  const weeklyTotal = (Object.keys(dayLabels) as DayKey[]).reduce((sum, day) => sum + dayTotal(day), 0)
  const weeklyPortions = (Object.keys(dayLabels) as DayKey[]).reduce((sum, day) => sum + (Number(menuPlan[day].portions) || 0), 0)
  const costPerPortion = weeklyPortions > 0 ? weeklyTotal / weeklyPortions : 0
  const maxBudget = 20000000
  const budgetPercentage = (weeklyTotal / maxBudget) * 100

  const filteredSchools = useMemo(
    () =>
      schoolRows.filter((school) => {
        const matchName = school.name.toLowerCase().includes(schoolSearch.toLowerCase())
        const matchStatus = !schoolStatusFilter || school.status === schoolStatusFilter
        return matchName && matchStatus
      }),
    [schoolRows, schoolSearch, schoolStatusFilter]
  )

  const updateMaterial = (day: DayKey, materialId: string, field: keyof MaterialItem, value: string) => {
    setMenuPlan((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        materials: prev[day].materials.map((item) => (item.id === materialId ? { ...item, [field]: value } : item)),
      },
    }))
  }

  const addMaterial = (day: DayKey) => {
    setMenuPlan((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        materials: [
          ...prev[day].materials,
          {
            id: `${day}-${Date.now()}`,
            name: '',
            qty: '',
            unit: 'kg',
            price: '',
          },
        ],
      },
    }))
  }

  const removeMaterial = (day: DayKey, materialId: string) => {
    setMenuPlan((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        materials: prev[day].materials.filter((item) => item.id !== materialId),
      },
    }))
  }

  const submitProposal = () => {
    const isValid = (Object.keys(dayLabels) as DayKey[]).every(
      (day) => menuPlan[day].menu.trim() && Number(menuPlan[day].portions) > 0
    )
    if (!isValid) {
      window.alert('Harap lengkapi menu dan jumlah porsi untuk semua hari.')
      return
    }
    setProposalSubmitted(true)
    setShowProposalForm(false)
    window.alert('Proposal berhasil diajukan ke BGN. Nomor Proposal: PROP-2026-03-00128')
  }

  const addSchool = () => {
    const required = [
      schoolForm.name,
      schoolForm.address,
      schoolForm.postal,
      schoolForm.phone,
      schoolForm.email,
      schoolForm.students,
      schoolForm.kitchenCapacity,
      schoolForm.schoolType,
      schoolForm.educationLevel,
      schoolForm.managerName,
      schoolForm.managerPosition,
      schoolForm.managerEmail,
      schoolForm.managerPhone,
    ]

    if (required.some((item) => !item.trim())) {
      window.alert('Harap lengkapi semua field wajib terlebih dahulu.')
      return
    }

    setSchoolRows((prev) => [
      {
        name: schoolForm.name,
        address: schoolForm.address,
        students: Number(schoolForm.students) || 0,
        portions: Number(schoolForm.students) || 0,
        status: 'Dalam Proses',
      },
      ...prev,
    ])

    setSchoolForm({
      name: '',
      address: '',
      postal: '',
      phone: '',
      email: '',
      website: '',
      students: '',
      kitchenCapacity: '',
      schoolType: '',
      educationLevel: '',
      managerName: '',
      managerPosition: '',
      managerEmail: '',
      managerPhone: '',
    })
    window.alert('Sekolah berhasil ditambahkan.')
  }

  const submitSupplier = () => {
    if (!supplierForm.name.trim() || !supplierForm.material.trim() || !supplierForm.price.trim()) {
      window.alert('Harap isi nama supplier, jenis bahan, dan harga.')
      return
    }
    setSupplierRows((prev) => [
      {
        name: supplierForm.name,
        materials: supplierForm.material,
        price: `Rp ${currency(Number(supplierForm.price) || 0)}`,
        deliveryStatus: 'Dalam Pengiriman',
        receivedAt: '-',
      },
      ...prev,
    ])
    setSupplierForm({ name: '', material: '', price: '' })
    setShowSupplierForm(false)
  }

  const today = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="min-h-screen bg-slate-50 md:flex">
      {sidebarOpen ? (
        <div className="fixed inset-0 z-30 bg-black/40 md:hidden" onClick={() => setSidebarOpen(false)} />
      ) : null}

      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-72 border-r border-slate-200 bg-white p-4 transition-transform md:static md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <h3 className="mb-4 text-lg font-semibold text-emerald-600">Menu Navigasi</h3>
        <div className="space-y-2">
          {sectionItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id)
                setSidebarOpen(false)
              }}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                activeSection === item.id ? 'bg-emerald-600 text-white' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </aside>

      <div className="flex-1 flex min-h-screen flex-col">
        <div className="flex items-center gap-3 border-b border-slate-200 bg-white px-4 py-3 md:hidden">
          <button onClick={() => setSidebarOpen((prev) => !prev)} aria-label="toggle navigation" className="rounded p-2 hover:bg-slate-100">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="font-semibold text-slate-900">Dashboard SPPG</span>
        </div>

        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-white px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-xl text-white">📊</div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">SPPG Jakarta Pusat</h1>
              <p className="text-sm text-slate-600">Admin SPPG</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative text-xl">
              🔔
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">5</span>
            </div>
            <div className="text-sm text-slate-600">{today}</div>
            <div className="text-sm font-medium text-slate-700">Pengaturan</div>
          </div>
        </header>

        <main className="flex-1 space-y-6 overflow-y-auto p-4 md:p-6">
          {activeSection === 'proposal' ? (
            <section className="rounded-xl border border-slate-200 bg-white p-5">
              <h2 className="mb-4 text-xl font-bold text-emerald-600">Proposal Pengadaan Bahan Baku</h2>
              <Button className="mb-4 bg-emerald-600 text-white hover:bg-emerald-700" onClick={() => setShowProposalForm((prev) => !prev)}>
                Ajukan Proposal Baru
              </Button>

              {showProposalForm ? (
                <div className="mb-6 space-y-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <h3 className="text-lg font-semibold text-slate-900">Form Pengajuan Proposal Menu Mingguan</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="space-y-1 text-sm">
                      <span className="font-medium text-slate-700">Tanggal Pengajuan</span>
                      <input className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2" value="2026-03-28" readOnly />
                    </label>
                    <label className="space-y-1 text-sm">
                      <span className="font-medium text-slate-700">Nomor Proposal</span>
                      <input className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2" value="PROP-2026-03-00128" readOnly />
                    </label>
                  </div>

                  {(Object.keys(dayLabels) as DayKey[]).map((day) => {
                    const nutritionCalories = (Number(menuPlan[day].portions) || 0) * 450
                    const nutritionProtein = (Number(menuPlan[day].portions) || 0) * 25
                    const nutritionCarbs = (Number(menuPlan[day].portions) || 0) * 60

                    return (
                      <div key={day} className="space-y-3 rounded-lg border border-slate-200 bg-white p-4">
                        <h4 className="text-base font-semibold text-blue-700">{dayLabels[day]}</h4>
                        <div className="grid gap-3 md:grid-cols-3">
                          <input
                            className="rounded-lg border border-slate-300 px-3 py-2"
                            placeholder="Jenis menu"
                            value={menuPlan[day].menu}
                            onChange={(event) =>
                              setMenuPlan((prev) => ({
                                ...prev,
                                [day]: { ...prev[day], menu: event.target.value },
                              }))
                            }
                          />
                          <input
                            className="rounded-lg border border-slate-300 px-3 py-2"
                            type="number"
                            placeholder="Jumlah porsi"
                            value={menuPlan[day].portions}
                            onChange={(event) =>
                              setMenuPlan((prev) => ({
                                ...prev,
                                [day]: { ...prev[day], portions: event.target.value },
                              }))
                            }
                          />
                          <select
                            className="rounded-lg border border-slate-300 px-3 py-2"
                            value={menuPlan[day].category}
                            onChange={(event) =>
                              setMenuPlan((prev) => ({
                                ...prev,
                                [day]: { ...prev[day], category: event.target.value },
                              }))
                            }
                          >
                            <option value="">Pilih kategori</option>
                            <option value="pokok">Makanan Pokok</option>
                            <option value="lauk">Lauk</option>
                            <option value="sayur">Sayur</option>
                            <option value="buah">Buah</option>
                          </select>
                        </div>

                        <div className="overflow-x-auto rounded-lg border border-slate-200">
                          <table className="w-full text-sm">
                            <thead className="bg-slate-100 text-slate-700">
                              <tr>
                                <th className="px-3 py-2 text-left">Nama Bahan</th>
                                <th className="px-3 py-2 text-left">Jumlah</th>
                                <th className="px-3 py-2 text-left">Satuan</th>
                                <th className="px-3 py-2 text-left">Harga Satuan</th>
                                <th className="px-3 py-2 text-left">Total Biaya</th>
                                <th className="px-3 py-2 text-left">Aksi</th>
                              </tr>
                            </thead>
                            <tbody>
                              {menuPlan[day].materials.map((material) => {
                                const total = (Number(material.qty) || 0) * (Number(material.price) || 0)
                                return (
                                  <tr key={material.id} className="border-t border-slate-200">
                                    <td className="px-3 py-2">
                                      <input
                                        className="w-full rounded border border-slate-300 px-2 py-1"
                                        value={material.name}
                                        onChange={(event) => updateMaterial(day, material.id, 'name', event.target.value)}
                                      />
                                    </td>
                                    <td className="px-3 py-2">
                                      <input
                                        className="w-full rounded border border-slate-300 px-2 py-1"
                                        type="number"
                                        value={material.qty}
                                        onChange={(event) => updateMaterial(day, material.id, 'qty', event.target.value)}
                                      />
                                    </td>
                                    <td className="px-3 py-2">
                                      <select
                                        className="w-full rounded border border-slate-300 px-2 py-1"
                                        value={material.unit}
                                        onChange={(event) => updateMaterial(day, material.id, 'unit', event.target.value)}
                                      >
                                        <option value="kg">kg</option>
                                        <option value="liter">liter</option>
                                      </select>
                                    </td>
                                    <td className="px-3 py-2">
                                      <input
                                        className="w-full rounded border border-slate-300 px-2 py-1"
                                        type="number"
                                        value={material.price}
                                        onChange={(event) => updateMaterial(day, material.id, 'price', event.target.value)}
                                      />
                                    </td>
                                    <td className="px-3 py-2">Rp {currency(total)}</td>
                                    <td className="px-3 py-2">
                                      <Button
                                        type="button"
                                        size="sm"
                                        variant="outline"
                                        className="border-red-200 text-red-600 hover:bg-red-50"
                                        onClick={() => removeMaterial(day, material.id)}
                                      >
                                        Hapus
                                      </Button>
                                    </td>
                                  </tr>
                                )
                              })}
                            </tbody>
                          </table>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                          <Button type="button" size="sm" className="bg-emerald-600 text-white hover:bg-emerald-700" onClick={() => addMaterial(day)}>
                            Tambah Bahan
                          </Button>
                          <span className="text-sm font-semibold text-emerald-600">Total {dayLabels[day]}: Rp {currency(dayTotal(day))}</span>
                        </div>

                        <input
                          className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm"
                          readOnly
                          value={`${nutritionCalories}/${nutritionProtein}g/${nutritionCarbs}g`}
                        />
                      </div>
                    )
                  })}

                  <div className="grid gap-3 md:grid-cols-2">
                    <input className="rounded-lg border border-slate-300 bg-white px-3 py-2" readOnly value={`Total Biaya Mingguan: Rp ${currency(weeklyTotal)}`} />
                    <input className="rounded-lg border border-slate-300 bg-white px-3 py-2" readOnly value={`Estimasi Biaya per Porsi: Rp ${currency(Math.round(costPerPortion))}`} />
                  </div>
                  <div className="space-y-1">
                    <input
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2"
                      readOnly
                      value={`Persentase Biaya vs Anggaran: ${budgetPercentage.toFixed(2)}%`}
                    />
                    {budgetPercentage > 100 ? <p className="text-sm text-red-600">Biaya melebihi anggaran yang ditetapkan.</p> : null}
                  </div>

                  <Button className="bg-emerald-600 text-white hover:bg-emerald-700" onClick={submitProposal}>
                    Ajukan Proposal ke BGN
                  </Button>
                </div>
              ) : null}

              {proposalSubmitted ? <p className="mb-4 text-sm text-emerald-600">Proposal terbaru sudah diajukan dan menunggu persetujuan.</p> : null}

              <div className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full text-sm">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-3 text-left">Nama Proposal</th>
                      <th className="px-4 py-3 text-left">Status</th>
                      <th className="px-4 py-3 text-left">Anggaran Total</th>
                      <th className="px-4 py-3 text-left">Jumlah Porsi</th>
                      <th className="px-4 py-3 text-left">Tanggal Pengajuan</th>
                      <th className="px-4 py-3 text-left">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {proposalRows.map((row) => (
                      <tr key={row.name} className="border-t border-slate-200">
                        <td className="px-4 py-3">{row.name}</td>
                        <td className={`px-4 py-3 font-semibold ${sectionTitleClass(row.status)}`}>{row.status}</td>
                        <td className="px-4 py-3">{row.budget}</td>
                        <td className="px-4 py-3">{row.portions}</td>
                        <td className="px-4 py-3">{row.submittedAt}</td>
                        <td className="space-x-2 px-4 py-3">
                          <Button size="sm" variant="outline">Periksa</Button>
                          <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700">Revisi</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 flex min-h-40 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-slate-500">
                Grafik Status Progress Proposal
              </div>
            </section>
          ) : null}

          {activeSection === 'schools' ? (
            <section className="space-y-4 rounded-xl border border-slate-200 bg-white p-5">
              <h2 className="text-xl font-bold text-emerald-600">Tambah Sekolah Penerima Manfaat</h2>
              <p className="text-sm text-slate-600">Lengkapi data sekolah agar validasi distribusi Program Makan Bergizi berjalan lancar.</p>

              <div className="grid gap-3 md:grid-cols-2">
                <input className="rounded-lg border border-slate-300 px-3 py-2" readOnly value="Tanggal Pengajuan: 2026-03-28" />
                <input className="rounded-lg border border-slate-300 px-3 py-2" readOnly value="Nomor ID Sekolah: SCH-2026-03-001" />
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Nama Sekolah" value={schoolForm.name} onChange={(event) => setSchoolForm((prev) => ({ ...prev, name: event.target.value }))} />
                <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Kode Pos" value={schoolForm.postal} onChange={(event) => setSchoolForm((prev) => ({ ...prev, postal: event.target.value }))} />
                <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Nomor Telepon" value={schoolForm.phone} onChange={(event) => setSchoolForm((prev) => ({ ...prev, phone: event.target.value }))} />
                <input className="rounded-lg border border-slate-300 px-3 py-2" type="email" placeholder="Email Sekolah" value={schoolForm.email} onChange={(event) => setSchoolForm((prev) => ({ ...prev, email: event.target.value }))} />
                <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Website Sekolah (opsional)" value={schoolForm.website} onChange={(event) => setSchoolForm((prev) => ({ ...prev, website: event.target.value }))} />
                <input className="rounded-lg border border-slate-300 px-3 py-2" type="number" placeholder="Jumlah Siswa" value={schoolForm.students} onChange={(event) => setSchoolForm((prev) => ({ ...prev, students: event.target.value }))} />
                <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Kapasitas Dapur" value={schoolForm.kitchenCapacity} onChange={(event) => setSchoolForm((prev) => ({ ...prev, kitchenCapacity: event.target.value }))} />
                <select className="rounded-lg border border-slate-300 px-3 py-2" value={schoolForm.schoolType} onChange={(event) => setSchoolForm((prev) => ({ ...prev, schoolType: event.target.value }))}>
                  <option value="">Jenis Sekolah</option>
                  <option value="SD">SD</option>
                  <option value="SMP">SMP</option>
                  <option value="SMA">SMA</option>
                  <option value="SMK">SMK</option>
                </select>
                <select className="rounded-lg border border-slate-300 px-3 py-2" value={schoolForm.educationLevel} onChange={(event) => setSchoolForm((prev) => ({ ...prev, educationLevel: event.target.value }))}>
                  <option value="">Tingkat Pendidikan</option>
                  <option value="dasar">Sekolah Dasar</option>
                  <option value="menengah-pertama">Sekolah Menengah Pertama</option>
                  <option value="menengah-atas">Sekolah Menengah Atas</option>
                </select>
                <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Nama Pengelola" value={schoolForm.managerName} onChange={(event) => setSchoolForm((prev) => ({ ...prev, managerName: event.target.value }))} />
                <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Jabatan Pengelola" value={schoolForm.managerPosition} onChange={(event) => setSchoolForm((prev) => ({ ...prev, managerPosition: event.target.value }))} />
                <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Email Pengelola" value={schoolForm.managerEmail} onChange={(event) => setSchoolForm((prev) => ({ ...prev, managerEmail: event.target.value }))} />
                <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Telepon Pengelola" value={schoolForm.managerPhone} onChange={(event) => setSchoolForm((prev) => ({ ...prev, managerPhone: event.target.value }))} />
              </div>

              <textarea
                className="min-h-24 w-full rounded-lg border border-slate-300 px-3 py-2"
                placeholder="Alamat Sekolah"
                value={schoolForm.address}
                onChange={(event) => setSchoolForm((prev) => ({ ...prev, address: event.target.value }))}
              />

              <div className="flex flex-wrap items-center gap-3">
                <Button className="bg-emerald-600 text-white hover:bg-emerald-700" onClick={addSchool}>Tambah Sekolah</Button>
                <span className="text-sm text-slate-600">Jumlah porsi harian: {Number(schoolForm.students) || 0} porsi</span>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Cari sekolah..." value={schoolSearch} onChange={(event) => setSchoolSearch(event.target.value)} />
                <select className="rounded-lg border border-slate-300 px-3 py-2" value={schoolStatusFilter} onChange={(event) => setSchoolStatusFilter(event.target.value)}>
                  <option value="">Semua Status</option>
                  <option value="Disetujui">Disetujui</option>
                  <option value="Menunggu Verifikasi">Menunggu Verifikasi</option>
                  <option value="Dalam Proses">Dalam Proses</option>
                </select>
              </div>

              <div className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full text-sm">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-3 text-left">Nama Sekolah</th>
                      <th className="px-4 py-3 text-left">Alamat</th>
                      <th className="px-4 py-3 text-left">Jumlah Siswa</th>
                      <th className="px-4 py-3 text-left">Jumlah Porsi</th>
                      <th className="px-4 py-3 text-left">Status</th>
                      <th className="px-4 py-3 text-left">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSchools.map((school) => (
                      <tr key={`${school.name}-${school.address}`} className="border-t border-slate-200">
                        <td className="px-4 py-3">{school.name}</td>
                        <td className="px-4 py-3">{school.address}</td>
                        <td className="px-4 py-3">{school.students}</td>
                        <td className="px-4 py-3">{school.portions}</td>
                        <td className={`px-4 py-3 font-semibold ${sectionTitleClass(school.status)}`}>{school.status}</td>
                        <td className="space-x-2 px-4 py-3">
                          <Button size="sm" variant="outline">Lihat</Button>
                          <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700">Edit</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ) : null}

          {activeSection === 'funds' ? (
            <section className="space-y-4 rounded-xl border border-slate-200 bg-white p-5">
              <h2 className="text-xl font-bold text-emerald-600">Status Pencairan Dana</h2>
              <div className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full text-sm">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-3 text-left">Nama Proposal</th>
                      <th className="px-4 py-3 text-left">Nominal Diajukan</th>
                      <th className="px-4 py-3 text-left">Dana Ditransfer</th>
                      <th className="px-4 py-3 text-left">Tanggal Transfer</th>
                      <th className="px-4 py-3 text-left">Status</th>
                      <th className="px-4 py-3 text-left">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fundsRows.map((row) => (
                      <tr key={row.proposal} className="border-t border-slate-200">
                        <td className="px-4 py-3">{row.proposal}</td>
                        <td className="px-4 py-3">{row.requested}</td>
                        <td className="px-4 py-3">{row.transferred}</td>
                        <td className="px-4 py-3">{row.date}</td>
                        <td className={`px-4 py-3 font-semibold ${sectionTitleClass(row.status)}`}>{row.status}</td>
                        <td className="px-4 py-3"><Button size="sm" variant="outline">Verifikasi</Button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex min-h-40 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-slate-500">
                Grafik Persentase Dana Diterima
              </div>
            </section>
          ) : null}

          {activeSection === 'supplier' ? (
            <section className="space-y-4 rounded-xl border border-slate-200 bg-white p-5">
              <h2 className="text-xl font-bold text-emerald-600">Transaksi dengan Supplier</h2>
              <Button className="bg-emerald-600 text-white hover:bg-emerald-700" onClick={() => setShowSupplierForm((prev) => !prev)}>
                Tambah Supplier Baru
              </Button>

              {showSupplierForm ? (
                <div className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 md:grid-cols-3">
                  <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Nama Supplier" value={supplierForm.name} onChange={(event) => setSupplierForm((prev) => ({ ...prev, name: event.target.value }))} />
                  <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Jenis Bahan Baku" value={supplierForm.material} onChange={(event) => setSupplierForm((prev) => ({ ...prev, material: event.target.value }))} />
                  <input className="rounded-lg border border-slate-300 px-3 py-2" type="number" placeholder="Harga Disepakati" value={supplierForm.price} onChange={(event) => setSupplierForm((prev) => ({ ...prev, price: event.target.value }))} />
                  <Button className="md:col-span-3 bg-blue-600 text-white hover:bg-blue-700" onClick={submitSupplier}>Tambah Supplier</Button>
                </div>
              ) : null}

              <div className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full text-sm">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-3 text-left">Nama Supplier</th>
                      <th className="px-4 py-3 text-left">Jenis Bahan</th>
                      <th className="px-4 py-3 text-left">Harga Disepakati</th>
                      <th className="px-4 py-3 text-left">Status Pengiriman</th>
                      <th className="px-4 py-3 text-left">Tanggal Diterima</th>
                      <th className="px-4 py-3 text-left">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {supplierRows.map((row) => (
                      <tr key={`${row.name}-${row.materials}`} className="border-t border-slate-200">
                        <td className="px-4 py-3">{row.name}</td>
                        <td className="px-4 py-3">{row.materials}</td>
                        <td className="px-4 py-3">{row.price}</td>
                        <td className={`px-4 py-3 font-semibold ${sectionTitleClass(row.deliveryStatus)}`}>{row.deliveryStatus}</td>
                        <td className="px-4 py-3">{row.receivedAt}</td>
                        <td className="px-4 py-3"><Button size="sm" variant="outline">Lihat Kontrak</Button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ) : null}

          {activeSection === 'receipt' ? (
            <section className="space-y-4 rounded-xl border border-slate-200 bg-white p-5">
              <h2 className="text-xl font-bold text-emerald-600">Penerimaan Bahan Baku</h2>
              <div className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full text-sm">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-3 text-left">Nama Supplier</th>
                      <th className="px-4 py-3 text-left">Jenis Bahan</th>
                      <th className="px-4 py-3 text-left">Jumlah Dikirim</th>
                      <th className="px-4 py-3 text-left">Jumlah Diterima</th>
                      <th className="px-4 py-3 text-left">Status Verifikasi</th>
                      <th className="px-4 py-3 text-left">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-slate-200">
                      <td className="px-4 py-3">PT. Makanan Sehat</td>
                      <td className="px-4 py-3">Ayam</td>
                      <td className="px-4 py-3">100 kg</td>
                      <td className="px-4 py-3">98 kg</td>
                      <td className="px-4 py-3 font-semibold text-emerald-600">Terverifikasi</td>
                      <td className="space-x-2 px-4 py-3">
                        <Button size="sm" variant="outline">Verifikasi</Button>
                        <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700">Catatan</Button>
                      </td>
                    </tr>
                    <tr className="border-t border-slate-200">
                      <td className="px-4 py-3">CV. Bahan Pangan</td>
                      <td className="px-4 py-3">Nasi</td>
                      <td className="px-4 py-3">200 kg</td>
                      <td className="px-4 py-3">200 kg</td>
                      <td className="px-4 py-3 font-semibold text-amber-600">Pending</td>
                      <td className="space-x-2 px-4 py-3">
                        <Button size="sm" variant="outline">Verifikasi</Button>
                        <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700">Catatan</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          ) : null}

          {activeSection === 'monitoring' ? (
            <section className="space-y-4 rounded-xl border border-slate-200 bg-white p-5">
              <h2 className="text-xl font-bold text-emerald-600">Monitoring Pengadaan dan Distribusi MBG</h2>
              <div className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full text-sm">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-3 text-left">Nama Proposal</th>
                      <th className="px-4 py-3 text-left">Status Pengadaan</th>
                      <th className="px-4 py-3 text-left">Tanggal Distribusi</th>
                      <th className="px-4 py-3 text-left">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {monitoringRows.map((row) => (
                      <tr key={row.proposal} className="border-t border-slate-200">
                        <td className="px-4 py-3">{row.proposal}</td>
                        <td className={`px-4 py-3 font-semibold ${sectionTitleClass(row.status)}`}>{row.status}</td>
                        <td className="px-4 py-3">{row.distributionDate}</td>
                        <td className="space-x-2 px-4 py-3">
                          <Button size="sm" variant="outline">Update Status</Button>
                          <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700">Tindak Lanjut</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ) : null}

          {activeSection === 'feedback' ? (
            <section className="space-y-4 rounded-xl border border-slate-200 bg-white p-5">
              <h2 className="text-xl font-bold text-emerald-600">Laporan Feedback dari Sekolah</h2>
              <div className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full text-sm">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-3 text-left">Nama Sekolah</th>
                      <th className="px-4 py-3 text-left">Rating</th>
                      <th className="px-4 py-3 text-left">Komentar</th>
                      <th className="px-4 py-3 text-left">Food Waste</th>
                      <th className="px-4 py-3 text-left">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feedbackRows.map((row) => (
                      <tr key={row.school} className="border-t border-slate-200">
                        <td className="px-4 py-3">{row.school}</td>
                        <td className="px-4 py-3 text-amber-500">{row.rating}</td>
                        <td className="px-4 py-3">{row.comment}</td>
                        <td className="px-4 py-3">{row.waste}</td>
                        <td className="px-4 py-3">
                          <Button size="sm" variant="outline">Tanggapi</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ) : null}
        </main>

        <footer className="flex flex-col items-center justify-between gap-3 border-t border-slate-200 bg-white px-4 py-3 sm:flex-row sm:gap-4 sm:px-6 md:px-8 md:py-4">
          <p className="text-center text-xs text-slate-600 sm:text-left sm:text-sm">© 2026 SIGIZI Guard. All Rights Reserved.</p>
          <a href="/" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto">Kembali ke Beranda</Button>
          </a>
        </footer>
      </div>
    </div>
  )
}
