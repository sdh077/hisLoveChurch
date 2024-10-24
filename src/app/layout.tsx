import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '그 사랑교회',
    default: '그 사랑교회',
  },
  openGraph: {
    images: '/favicon.ico'
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased font-nanum">
      <head>
        <meta name="naver-site-verification" content="99063f5c54e645cca7de4ae64d1e1916c342b446" />

      </head>
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
