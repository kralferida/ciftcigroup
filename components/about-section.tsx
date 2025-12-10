import { Diamond, Watch, Car, Gem } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const services = [
    {
      icon: Diamond,
      title: "Pırlanta",
      description: "En nadide pırlantalar, uluslararası sertifikalarla",
      image: "/brilliant-cut-diamond-gemstone-luxury-close-up.jpg",
    },
    {
      icon: Gem,
      title: "Kuyumculuk",
      description: "İnce işçilikli altın ve değerli taş koleksiyonları",
      image: "/gold-jewelry-necklace-rings-elegant-display.jpg",
    },
    {
      icon: Watch,
      title: "Lüks Saatler",
      description: "Dünyanın önde gelen saat markalarının temsilcisi",
      image: "/luxury-swiss-watch-rolex-style-elegant-timepiece.jpg",
    },
    {
      icon: Car,
      title: "Lüks Otomobiller",
      description: "Üst segment araçlarda güvenilir ticaret partneri",
      image: "/luxury-car-mercedes-maybach-showroom-elegant.jpg",
    },
  ]

  return (
    <section id="hakkimizda" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">Hakkımızda</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 text-balance">
            Köklü Bir Aile Mirası
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-left">
            <p>
              <strong className="text-foreground">METE GROUP OTOMOTİV & KUYUMCULUK</strong>, İstanbul merkezli, köklü
              bir aile şirketi olarak lüks sektöründe seçkin bir konuma sahiptir. Premium müşteri kitlesine hizmet veren
              yapımız, kalite, güven ve özel tasarım ürünlere odaklanan bir marka anlayışıyla hareket etmektedir.
            </p>
            <p>
              Lüks kuyumculuk, pırlanta, ince işçilikli altın ürünleri, değerli taşlar, prestijli saat markaları ve üst
              segment otomobiller; faaliyet alanlarımızın temelini oluşturmaktadır. Her bir ürün grubunda uluslararası
              standartlara bağlı kalarak, müşterilerimize benzersiz bir deneyim sunmayı ilke edindik.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border hover:border-primary/30 transition-colors group overflow-hidden"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <service.icon className="h-8 w-8 text-primary mb-3 mx-auto" />
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
