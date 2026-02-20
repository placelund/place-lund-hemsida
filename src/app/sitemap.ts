import type { MetadataRoute } from 'next'

const BASE_URL = 'https://placelund.se'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/hotel', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/hotel/single-room', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/hotel/single-room-garden', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/hotel/twin-room', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/hotel/twin-room-garden', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/hotel/economy-double', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/hotel/economy-double-balcony', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/hotel/double-deluxe', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/hotel/gallery', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/hotel/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/hotel-studio', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/apartments', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/apartments/studio', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/apartments/one-bedroom', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/apartments/gallery', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/conference', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/conference/margareta', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/conference/sankt-hans', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/conference/sofia', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/conference/gallery', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/restaurant', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/restaurant/menu', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/gallery', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/group-stay', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/work-with-us', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/gdpr', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
