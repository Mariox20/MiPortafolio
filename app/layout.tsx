import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portafolio Mario Aguilera',
  description: 'Mi Portafolio',
  generator: 'Mi Portafolio',
  icons: {
    icon: '/developer.ico'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className='{GeistSans.variable}'>
      <head>
      <script defer data-domain="maguilera.cl" src="https://plausible.io/js/script.js"></script>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
