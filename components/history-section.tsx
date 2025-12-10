import Image from "next/image"

export function HistorySection() {
  const milestones = [
    { year: "2002", title: "Kuruluş", description: "İstanbul'un kalbinde, kuyumculuk sektöründe ilk adımlar atıldı." },
    { year: "2010+", title: "Büyüme", description: "Değerli taş ticareti ve lüks saat segmentine genişleme." },
    { year: "2020+", title: "Çeşitlenme", description: "Lüks otomotiv sektörüne giriş ve global iş birlikleri." },
    { year: "2023+", title: "Yeni Nesil", description: "İkinci kuşak yönetim ile dijital dönüşüm ve globalleşme." },
  ]

  return (
    <section id="tarihce" className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image src="/istanbul-grand-bazaar-jewelry-market-historic-gold.jpg" alt="İstanbul Kapalıçarşı" fill className="object-cover" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-primary-foreground/70 mb-4 block">Tarihçemiz</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance">2002&apos;den Bu Yana</h2>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-primary-foreground/80 leading-relaxed text-center">
            İstanbul, yüzyıllardır dünyanın en önemli kuyumculuk ticaret merkezlerinden biri olma özelliğini
            korumaktadır. METE GROUP, bu köklü geleneğin modern temsilcisi olarak, aile değerleri ve profesyonel iş
            anlayışını harmanlayarak sektörde güvenilir bir isim olmayı başarmıştır.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="text-center group">
              <div className="text-5xl font-serif font-bold text-primary-foreground/30 group-hover:text-primary-foreground/50 transition-colors mb-4">
                {milestone.year}
              </div>
              <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
              <p className="text-sm text-primary-foreground/70">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
