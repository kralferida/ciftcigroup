import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "METE GROUP | Otomotiv & Kuyumculuk",
  description:
    "İstanbul merkezli lüks mücevherat, pırlanta, değerli taşlar, lüks saatler ve üst segment otomobillerde güvenilir adresiniz. METE GROUP ile kalite ve prestiji keşfedin.",
  keywords: "mücevherat, pırlanta, altın, değerli taşlar, lüks saatler, lüks otomobiller, İstanbul, METE GROUP",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: "/apple-touch-icon.jpg",
    shortcut: "/favicon.ico"
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
