import { baseMetadata } from '@/components/metadata.config'
import { configSite } from '@/site.config'

export const metadata = baseMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={configSite.lang}>
      <body className='min-h-screen antialiased bg-gradient-to-b from-black via-slate-800 to-black'>
        {children}
      </body>
    </html>
  )
}
