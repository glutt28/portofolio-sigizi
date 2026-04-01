import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard Sekolah - SIGIZI Guard',
  description: 'Pantau aktivitas sekolah, feedback, dan laporan terkait pengadaan MBG',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
