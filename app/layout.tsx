import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Interactive Logo Particles | Creative Web Experience",
  description:
    "Experience interactive particle effects with custom logos. Move your cursor to scatter and manipulate thousands of particles in real-time.",
  keywords: "interactive particles, logo animation, web graphics, canvas animation, particle effects",
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Interactive Logo Particles",
    description: "Experience interactive particle effects with custom logos",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Interactive Logo Particles Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interactive Logo Particles",
    description: "Experience interactive particle effects with custom logos",
    images: ["/og-image.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
