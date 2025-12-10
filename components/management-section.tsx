export function ManagementSection() {
  const executives = [
    {
      name: "Mustafa Mete",
      title: "Yönetim Kurulu Başkanı",
      description:
        "METE GROUP'un kurucusu olan Mustafa Mete, kuyumculuk, altın ve lüks ticaret sektöründe 20 yılı aşkın tecrübeye sahiptir. Şirketin vizyonunu belirleyen ve tüm stratejik kararları yöneten isim olarak, METE GROUP'u bugünkü prestijli konumuna taşımıştır.",
    },
    {
      name: "Rojin Mete",
      title: "Yönetim ve Operasyon Sorumlusu",
      description:
        "Ailenin ikinci kuşak temsilcisi olan Rojin Mete, Nişantaşı Üniversitesi İşletme bölümünden mezun olmuştur. 2023 yılından itibaren şirkette aktif rol alan Rojin Mete, uluslararası operasyonlar, iş geliştirme ve marka konumlandırma süreçlerinde öncü bir rol üstlenmektedir.",
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
              {exec.name === "Rojin Mete" && (
                <p className="mt-6 text-foreground font-medium italic border-l-2 border-primary pl-4">
                  &ldquo;Yeni nesil yönetim anlayışını temsil eden Rojin Mete, markanın globalleşme sürecinde aktif rol
                  almaktadır.&rdquo;
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
