import type { MetadataRoute } from 'next'
import { configSite } from '@/site.config'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${configSite.url}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ]
}
