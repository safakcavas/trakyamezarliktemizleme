import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Ahmet Yılmaz",
      location: "Almanya / Köln (Çorlu Önerler Mezarlığı)",
      text: "Almanya'da yaşadığımız için dedemin Çorlu'daki mezarını her yıl ziyaret edemiyorduk. Kendilerine WhatsApp'tan yazdım, mezarı gidip buldular, pırıl pırıl temizleyip çiçek diktiler. Gönderdikleri öncesi-sonrası videoları görünce çok duygulandık. Allah razı olsun.",
      rating: 5,
    },
    {
      name: "Merve D.",
      location: "İstanbul (Lüleburgaz Hamitabat Mezarlığı)",
      text: "Bayram öncesi annemin kabir bakımını yaptırdık. Mermerleri o kadar güzel beyazlatmışlar ki sanki yeni yapılmış gibi oldu. Taş yazıları da yeniden altın sarısı yaldızla boyandı. Süreç boyunca her aşamayı fotoğraflarla iletmeleri çok güven verdi.",
      rating: 5,
    },
    {
      name: "Hasan Çelik",
      location: "Tekirdağ (Süleymanpaşa Kumbağ Mezarlığı)",
      text: "Yıllardır ilgilenemediğimiz aile kabristanındaki yabani dikenleri kökten temizleyip toprağını havalandırdılar ve taze toprak koydular. Saygılı ve çok temiz çalışan bir ekip. Trakya'da böyle profesyonel bir hizmetin olması büyük kolaylık.",
      rating: 5,
    },
    {
      name: "Fatma Korkmaz",
      location: "Bursa (Malkara Kozyörük Köyü)",
      text: "Köyümüzdeki mezarlık için uzakta olduğumuzdan içimiz hep buruktu. 1 ziyarette gidip otları ayıkladılar, canlı çiçek dikip can suyunu verdiler ve HD videosunu çektiler. Gurbettekiler için gerçekten çok büyük kolaylık.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
            <span>Müşteri Memnuniyeti</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bizi Tercih Eden Hemşehrilerimizin Yorumları
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Trakya&apos;dan, diğer şehirlerden ve yurt dışından emanetlerini teslim
            eden ailelerin samimi deneyimleri.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition"
            >
              <div>
                <div
                  className="flex items-center gap-1 mb-4 text-amber-500"
                  role="img"
                  aria-label={`${rev.rating} üzerinden 5 yıldız`}
                >
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-slate-300 mb-2" aria-hidden="true" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="font-bold text-slate-900 text-sm">{rev.name}</p>
                <p className="text-xs text-emerald-700 font-medium mt-0.5">
                  {rev.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
