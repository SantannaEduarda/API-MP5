import '../styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tech Study Landing',
  description: 'Landing page moderna com cursos e materiais educacionais',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans bg-white text-gray-800">{children}</body>
    </html>
  )
}
