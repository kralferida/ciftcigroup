import { MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"

export function ContactSection() {
  return (
    <section id="iletisim" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-16">
          <Image
            src="/luxury-diamond-jewelry-elegant-collection.jpg"
            alt="Çiftçi Group Lüks Pırlanta Koleksiyonu"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-lg md:text-xl font-serif text-foreground/90 italic">
              "Zarafet ve kalite, her detayda..."
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">İletişim</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 text-balance">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-12">
            Çiftçi Group olarak, müşterilerimizle güçlü ve uzun vadeli ilişkiler kurmayı hedefliyoruz. Sorularınız,
            talepleriniz veya iş birliği fırsatları için bizimle iletişime geçebilirsiniz.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-1">Adres</h3>
                <p className="text-sm text-muted-foreground">
                  Kalpakçılar Caddesi No:10
                  <br />
                  Kapalıçarşı - Fatih / İstanbul
                  <br />
                  ZIP: 34126
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                <p className="text-muted-foreground">0530 994 02 90</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-1">E-posta</h3>
                <p className="text-muted-foreground">info@ciftcigroup.com.tr</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
