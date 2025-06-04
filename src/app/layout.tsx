import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Next.js Template',
  description:
    'Plantilla base de Next.js App Router con TailwindCSS y TypeScript preconfigurados',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className='antialiased bg-rich-black'>{children}</body>
    </html>
  )
}
