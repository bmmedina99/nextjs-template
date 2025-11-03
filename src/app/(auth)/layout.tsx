import { configSite } from '@/site.config'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang={configSite.lang}
      className='scroll-smooth scroll-pt-12'
    >
      <body className='min-h-screen antialiased bg-linear-to-b from-stone-950 via-slate-600 to-stone-950'>
        {children}
      </body>
    </html>
  )
}
