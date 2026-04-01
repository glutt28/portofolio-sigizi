import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard BGN - SIGIZI Guard',
  description: 'Kelola data Bahan Gizi dan Non-Gizi, termasuk tracking dan analisis',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
