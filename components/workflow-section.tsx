const steps = [
  {
    number: 1,
    title: 'Pengajuan Proposal oleh SPPG',
    description: 'Proposal masuk sistem untuk pengecekan awal.'
  },
  {
    number: 2,
    title: 'Verifikasi Proposal oleh BGN',
    description: 'Validasi dokumen, price quote, dan proses kelayakan.'
  },
  {
    number: 3,
    title: 'Pencatatan Dana & Pengiriman VA',
    description: 'VA bank diproduksi, pembayaran dicatat secara otomatis.'
  },
  {
    number: 4,
    title: 'Anomaly Detection dan AI Risk Scoring',
    description: 'Model AI memonitor abnormalitas dan skor risiko terus diperbarui.'
  },
  {
    number: 5,
    title: 'Transaksi dengan Supplier dan Pemberitahuan Anomali',
    description: 'Pengiriman, pembayaran, dan alert anomali dipantau.'
  },
  {
    number: 6,
    title: 'Verifikasi Sekolah dan Umpan Balik',
    description: 'Sekolah mengonfirmasi barang & berikan rating untuk transparansi.'
  },
  {
    number: 7,
    title: 'Laporan Evaluasi dan Insiden',
    description: 'Dashboard laporan lengkap untuk audit dan mitigasi risiko.'
  }
]

export default function WorkflowSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Bagaimana Sistem Bekerja
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-2">
            Alur kerja interaktif untuk menggambarkan tiap langkah dari pengajuan hingga evaluasi.
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 md:p-8">
          <div className="space-y-3 sm:space-y-4">
            {steps.map((step, idx) => (
              <div key={step.number} className="flex gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-slate-200 last:border-b-0">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-cyan-400 text-white font-bold text-sm sm:text-base">
                    {step.number}
                  </div>
                </div>
                <div className="flex-grow min-w-0">
                  <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-1 break-words">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
