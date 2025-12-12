export function ManagementSection() {
  const executives = [
    {
      name: "Süleyman Çiftçi",
      title: "Kurucu & Yönetim Kurulu Başkanı",
      description:
        "Çiftçi Group'un kurucusu olan Süleyman Çiftçi, lüks otomobiller, elmaslar ve yüksek kaliteli mücevherat sektöründe 5+ yıllık deneyime sahiptir. Nişantaşı Üniversitesi Uluslararası Ticaret ve Lojistik (2015-2019) eğitimi almış olup, Ocak 2020'den bu yana satış yönetimi, tedarikçi müzakereleri, günlük operasyonların denetimi ve uluslararası markalarla ilişkilerin yürütülmesi konularında aktif olarak faaliyet göstermektedir.",
    },
  ]

  return (
    <section id="yonetim" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">Yönetim Kadrosu</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">Liderlik ve Vizyon</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto">
          {executives.map((exec, index) => (
            <div key={index} className="bg-card p-8 rounded-lg border border-border">
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-bold text-foreground">{exec.name}</h3>
                <p className="text-sm tracking-wide text-primary">{exec.title}</p>
              </div>
              <p className="text-muted-foreground leading-relaxed">{exec.description}</p>
              {exec.name === "Süleyman Çiftçi" && (
                <p className="mt-6 text-foreground font-medium italic border-l-2 border-primary pl-4">
                  &ldquo;Kalite, güven ve müşteri memnuniyeti odaklı yaklaşımıyla sektörde öncü bir konuma sahiptir.&rdquo;
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
