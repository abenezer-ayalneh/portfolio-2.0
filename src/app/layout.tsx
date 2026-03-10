import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://abenezer-ayalneh.vercel.app'),
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  title: {
    default: 'Abenezer Ayalneh — Full-Stack Developer',
    template: '%s | Abenezer Ayalneh',
  },
  description:
    'Full-Stack Developer with 5+ years of experience building scalable web applications using TypeScript, Angular, React, and Nest.js.',
  keywords: [
    'Full-Stack Developer',
    'TypeScript',
    'React',
    'Next.js',
    'Angular',
    'NestJS',
    'Portfolio',
    'Abenezer Ayalneh',
  ],
  authors: [{ name: 'Abenezer Ayalneh' }],
  creator: 'Abenezer Ayalneh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abenezer-ayalneh.vercel.app',
    title: 'Abenezer Ayalneh — Full-Stack Developer',
    description:
      'Full-Stack Developer with 5+ years of experience building scalable web applications using TypeScript, Angular, React, and Nest.js.',
    siteName: 'Abenezer Ayalneh Portfolio',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Abenezer Ayalneh — Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abenezer Ayalneh — Full-Stack Developer',
    description:
      'Full-Stack Developer with 5+ years of experience building scalable web applications using TypeScript, Angular, React, and Nest.js.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
