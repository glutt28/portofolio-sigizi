'use client'

import { useState } from 'react'

const features = [
  {
    id: 'risk',
    icon: '⚙️',
    title: 'AI Risk Scoring',
    description: 'AI mengevaluasi dan memberi skor risiko pada proposal serta transaksi supplier.',
    detail: 'Flow: Proposal → Evaluasi Data → Prediksi Risiko → Tindakan Mitigasi.'
  },
  {
    id: 'anomaly',
    icon: '🔍',
    title: 'Anomaly Detection',
    description: 'Deteksi anomali harga/kuantitas bahan baku secara real-time.',
    detail: 'Visual: grafik trend + threshold alert untuk dataset transaksi.'
  },
  {
    id: 'feedback',
    icon: '💬',
    title: 'Feedback Transparency',
    description: 'Sekolah memberi feedback dengan rating & kritik, hasil tervizualisasi.',
    detail: 'Grafik batang/pie untuk laporan kepuasan, respon, dan rekomendasi.'
  },
  {
    id: 'proposal',
    icon: '📋',
    title: 'Proposal Tracking',
    description: 'Pelacakan status proposal dan verifikasi end-to-end.',
    detail: 'Tabel progress + progress bar untuk setiap tahap verifikasi.'
  }
]

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState('risk')

  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Fitur Utama SIGIZI Guard
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-2">
            Solusi terintegrasi untuk pengadaan MBG yang lebih transparan, akurat, dan terpercaya.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`text-left p-4 sm:p-6 rounded-2xl border-2 transition-all duration-200 ${
                activeFeature === feature.id
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-slate-200 bg-white hover:border-blue-200'
              }`}
            >
              <div className="text-3xl sm:text-4xl mb-3">{feature.icon}</div>
              <h3 className={`text-base sm:text-lg font-semibold mb-2 ${
                activeFeature === feature.id ? 'text-blue-900' : 'text-slate-900'
              }`}>
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                {feature.description}
              </p>
              {activeFeature === feature.id && (
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-blue-200">
                  <p className="text-xs sm:text-sm text-blue-800 font-medium">
                    {feature.detail}
                  </p>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
