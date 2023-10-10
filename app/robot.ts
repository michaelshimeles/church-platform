import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/give', '/donations', "/profile", '/thank-you', '/user-profile'],
    },
    sitemap: 'https://tsegabiblechurch.com/sitemap.xml',
  }
}