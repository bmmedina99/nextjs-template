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
      <body className='bg-gradient-to-br from-stone-950 via-slate-600 to-stone-950'>
        {children}
      </body>
    </html>
  )
}
