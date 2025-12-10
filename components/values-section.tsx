import { Shield, Users, Scale, Award, Globe2, Lock } from "lucide-react"

export function ValuesSection() {
  const values = [
    {
      icon: Shield,
      title: "Güvenilirlik",
      description: "Her işlemde şeffaflık ve dürüstlük ilkesiyle hareket ediyoruz.",
    },
    { icon: Users, title: "Aile Kültürü", description: "Kuşaktan kuşağa aktarılan değerlerle çalışıyoruz." },
    { icon: Scale, title: "Etik Ticaret", description: "Uluslararası standartlara uygun, adil ve sorumlu ticaret." },
    { icon: Award, title: "Kalite Odaklılık", description: "Her üründe mükemmeliyetçi bir yaklaşım benimsiyoruz." },
    {
      icon: Globe2,
      title: "Uluslararası Vizyon",
      description: "Global pazarlarda güçlü bir Türk markası olmayı hedefliyoruz.",
    },
    {
      icon: Lock,
      title: "Müşteri Mahremiyeti",
      description: "Veri güvenliği ve müşteri gizliliği bizim için önceliktir.",
    },
  ]

  return (
    <section id="degerler" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">Kurumsal Değerler</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
            Bizi Biz Yapan Değerler
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <value.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
