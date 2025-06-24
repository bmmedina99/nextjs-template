import { configSite } from '@/site.config'
import '@/styles/global.css'
import { baseMetadata } from '@/components/metadata.config'

export const metadata = baseMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={configSite.lang}>
      <body className='antialiased'>{children}</body>
    </html>
  )
}
