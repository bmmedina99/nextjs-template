import type { Metadata } from 'next'
import { configSite } from '@/site.config'

const { title, description, url, author } = configSite

export const baseMetadata: Metadata = {
  title: {
    template: `%s | ${title}`,
    default: `Template | ${title}`,
  },
  description: description,
  openGraph: {
    title: `Template | ${title}`,
    description: description,
    url: url,
    siteName: title,
    images: [
      {
        url: '/images/open-graph.webp',
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Template | ${title}`,
    description: description,
    creator: '@twitter-creator',
    site: '@twitter-site',
    images: ['/images/twitter-card.webp'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: author }],
  alternates: {
    canonical: url,
  },
  other: {
    'theme-color': '#003014',
  },
}
