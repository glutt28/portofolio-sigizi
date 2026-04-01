import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard Supplier - SIGIZI Guard',
  description: 'Kelola data supplier, proposal, dan evaluasi risiko secara real-time',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
