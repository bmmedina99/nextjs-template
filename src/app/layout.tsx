import { Poppins } from 'next/font/google'
import { baseMetadata } from '@/components/metadata.config'
import { configSite } from '@/site.config'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata = baseMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={configSite.lang} className={poppins.className}>
      <body className='bg-gradient-to-br from-stone-950 via-slate-600 to-stone-950'>
        {children}
      </body>
    </html>
  )
}
