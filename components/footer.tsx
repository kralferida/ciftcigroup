import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="flex flex-col mb-6">
              <span className="text-2xl font-serif font-bold tracking-wider">METE GROUP</span>
              <span className="text-xs tracking-[0.3em] text-primary-foreground/60 uppercase">
                Otomotiv & Kuyumculuk
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              İstanbul merkezli, lüks kuyumculuk, pırlanta, değerli taşlar ve üst segment otomobillerde güvenilir
              adresiniz.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Hızlı Erişim</h3>
            <nav className="space-y-2">
              <Link
                href="#hakkimizda"
                className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Hakkımızda
              </Link>
              <Link
                href="#yonetim"
                className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Yönetim
              </Link>
              <Link
                href="#tarihce"
                className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Tarihçe
              </Link>
              <Link
                href="#degerler"
                className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Değerler
              </Link>
              <Link
                href="#iletisim"
                className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                İletişim
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Kurumsal Adres</h3>
            <address className="text-sm text-primary-foreground/70 not-italic leading-relaxed">
              Büyükdere Caddesi, Mete Plaza No:118
              <br />
              Zincirlikuyu – Beşiktaş / İstanbul
              <br />
              ZIP: 34126
              <br />
              Türkiye
            </address>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} METE GROUP OTOMOTİV & KUYUMCULUK. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Gizlilik Politikası
            </Link>
            <Link
              href="#"
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
