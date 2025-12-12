import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/luxury-jewelry-store-elegant-showroom-gold-diamond.jpg" alt="Çiftçi Group Showroom" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm tracking-[0.4em] uppercase text-primary mb-6">İstanbul&apos;dan Dünyaya</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-8 text-balance leading-tight">
          Lükste Mükemmellik,
          <br />
          <span className="text-primary">Güvende Öncülük</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Kuyumculuk, pırlanta ve lüks otomotiv sektöründe 2002&apos;den bu yana kalite ve güvenin adresi olmaya devam
          ediyoruz.
        </p>

        <div className="flex items-center justify-center gap-4 mt-12">
          <div className="w-16 h-px bg-border" />
          <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Aile Şirketi</span>
          <div className="w-16 h-px bg-border" />
        </div>
      </div>
    </section>
  )
}
