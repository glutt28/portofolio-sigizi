import Image from 'next/image'
import { Button } from '@/components/ui/button'
import logoSigizi from '@/img/logo SIGIZI.png'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20 bg-gradient-to-b from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 text-pretty leading-tight">
              Sistem Integrasi Pelayanan dan Pengawasan Pengadaan Makan Bergizi Gratis
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600">
              Meningkatkan Akuntabilitas dan Transparansi dalam Pengadaan MBG
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
            <a href="#dashboards" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white">
                Pelajari Lebih Lanjut
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 pt-4">
            <div className="px-3 sm:px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">
              Deteksi Risiko AI
            </div>
            <div className="px-3 sm:px-4 py-2 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-medium">
              Pencatatan Transaksi
            </div>
            <div className="px-3 sm:px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium">
              Feedback Loop
            </div>
            <div className="px-3 sm:px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">
              Proposal Tracking
            </div>
          </div>
        </div>

        {/* Right Visual - Hidden on very small screens */}
        <div className="hidden sm:flex justify-center items-center">
          <div className="relative w-60 sm:w-72 md:w-96 lg:w-[28rem]">
            <Image
              src={logoSigizi}
              alt="Logo Pelayanan Gizi Untuk Negeri"
              priority
              className="aspect-square w-full rounded-full object-cover drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
