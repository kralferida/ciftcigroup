"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex flex-col">
            <span className="text-2xl font-serif font-bold tracking-wider text-foreground">METE GROUP</span>
            <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Otomotiv & Kuyumculuk</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#hakkimizda"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              Hakkımızda
            </Link>
            <Link
              href="#yonetim"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              Yönetim
            </Link>
            <Link
              href="#tarihce"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              Tarihçe
            </Link>
            <Link
              href="#degerler"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              Değerler
            </Link>
            <Link
              href="#iletisim"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              İletişim
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="#hakkimizda"
                className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                Hakkımızda
              </Link>
              <Link
                href="#yonetim"
                className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                Yönetim
              </Link>
              <Link
                href="#tarihce"
                className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                Tarihçe
              </Link>
              <Link
                href="#degerler"
                className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                Değerler
              </Link>
              <Link
                href="#iletisim"
                className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                İletişim
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
