'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'

export default function EvaluationSection() {
  const [rating, setRating] = useState(0)

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Evaluasi & Feedback</h2>
      
      <div className="bg-white rounded-lg border border-slate-200 p-8 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Beri Rating untuk Menu Hari Ini</h3>
          <div className="flex gap-2 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className={`text-3xl transition-colors ${
                  star <= rating ? 'text-yellow-400' : 'text-slate-300'
                }`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">Komentar:</label>
          <Textarea placeholder="Berikan komentar tentang kualitas makanan..." className="min-h-24" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">Estimasi Food Waste (%):</label>
          <Input type="number" min="0" max="100" placeholder="0" />
        </div>

        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Kirim Feedback</Button>
      </div>

      <div className="bg-slate-50 rounded-lg border border-slate-200 p-8 flex items-center justify-center min-h-48">
        <p className="text-slate-500">Grafik Tren Rating & Food Waste (Placeholder)</p>
      </div>
    </div>
  )
}
