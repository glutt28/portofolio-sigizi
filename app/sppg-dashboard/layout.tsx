import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard SPPG - SIGIZI Guard',
  description: 'Monitor Sistem Pengadaan Pangan dan Gizi untuk transparansi dan akuntabilitas',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
