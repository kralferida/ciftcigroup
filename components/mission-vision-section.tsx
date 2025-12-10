import { Target, Globe } from "lucide-react"

export function MissionVisionSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Misyon */}
          <div className="bg-card border border-border rounded-lg p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-foreground">Misyonumuz</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Lüks segmentte kalite, güven, etik ticaret ve yüksek müşteri memnuniyetini temel ilkelerimiz olarak
                benimsiyoruz.
              </p>
              <p>
                Kişiye özel tasarımlar, uluslararası standartlara uygunluk ve şeffaf ticaret anlayışımızla, her
                müşterimize eşsiz bir deneyim sunmayı hedefliyoruz.
              </p>
            </div>
          </div>

          {/* Vizyon */}
          <div className="bg-card border border-border rounded-lg p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                <Globe className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-foreground">Vizyonumuz</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Global bir lüks marka olma hedefiyle, dünyanın önde gelen mücevherat ve değerli taş fuarlarında varlık
                göstermeyi amaçlıyoruz.
              </p>
              <p>
                Dijitalleşen dünyada modern yönetim anlayışı, genç nesil adaptasyonu ve global iş birlikleriyle sektörde
                öncü konumumuzu pekiştirmeyi hedefliyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
