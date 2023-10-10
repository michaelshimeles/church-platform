import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Grace Bible Fellowship Church',
    short_name: 'Grace Bible Fellowship Church',
    description: 'Grow In Grace. Grow In Knowledge',
    start_url: '/',
    display: 'standalone',
    background_color: '#020912',
    theme_color: '#020912',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}