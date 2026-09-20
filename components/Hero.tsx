import Image from "next/image";
import { contactConfig } from "@/data/contact";
import {
  CheckCircle2,
  Camera,
  MapPin,
  ShieldCheck,
  Flower2,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-900 text-white pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Subtle decorative background circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-700/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-teal-800/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (Text & CTAs) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-700/50 text-emerald-300 text-xs sm:text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Tekirdağ, Kırklareli & Tüm Trakya Köylerine Mobil Ekip</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Tüm Trakya Genelinde Sevdiklerinizin Kabirleri{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                Emanet Bilinciyle
              </span>{" "}
              Özenle Temizlenir
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Uzakta veya yurt dışında olsanız dahi sevdiklerinizin kabirleri asla ihmal edilmez.
              <strong className="text-white font-semibold block sm:inline"> Mezarın fotoğrafını gönderin, anında ortalama fiyat verelim.</strong> Ya da fotoğrafınız yoksa biz mezarlığa gidip güncel durum resmini çekelim;{" "}
              <strong className="text-emerald-300 font-semibold">
                ödemeyi alıp hemen temizliğe başlayalım
              </strong>{" "}
              ve işlem bitiminde HD video/fotoğrafla teslim edelim.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={contactConfig.getWhatsappUrl("Merhaba, mezarımızın fotoğrafını gönderip ortalama fiyat teklifi almak istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-900/40 hover:shadow-emerald-900/60 transition duration-200 hover:-translate-y-0.5"
              >
                <Camera className="w-5 h-5" />
                <span>Mezar Resmi Gönder & Fiyat Al</span>
              </a>

              <a
                href={contactConfig.getWhatsappUrl("Merhaba, mezarımızın fotoğrafı yok. Konum ve merhum bilgilerini iletsem gidip fotoğraf çekebilir misiniz?")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-100 border border-slate-700 font-semibold text-sm sm:text-base transition duration-200"
              >
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span>Resim Yoksa: Biz Gidip Çekelim</span>
              </a>
            </div>

            {/* Edirne Special Link Pill */}
            <div className="pt-1">
              <p className="text-xs text-slate-400 inline-flex items-center gap-2">
                <span>Edirne ili ve köylerindeki mezarlıklar için:</span>
                <a
                  href={contactConfig.edirneSiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-emerald-200 font-bold underline flex items-center gap-1"
                >
                  edirnemezarliktemizleme.site
                  <ExternalLink className="w-3 h-3 inline" />
                </a>
              </p>
            </div>

            {/* Trust Points */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left border-t border-slate-800/80">
              <div className="flex items-start gap-2">
                <Camera className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">Fotoğraf ve Video Raporlama</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">Yerinde Profesyonel Ekipman</span>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">Mermere Zararsız Özel Formül</span>
              </div>
              <div className="flex items-start gap-2">
                <Flower2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">Canlı Mevsimlik Çiçeklendirme</span>
              </div>
            </div>
          </div>

          {/* Right Column (Visual Feature Box) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-slate-800/90 border border-slate-700/80 p-5 sm:p-7 backdrop-blur shadow-2xl space-y-5 overflow-hidden">
              {/* Featured Image with Badges */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-slate-700 shadow-inner group">
                <Image
                  src="/images/hero-cemetery.jpg"
                  alt="Trakya Mezar Bakım ve Temizlik Hizmeti"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-700 text-white shadow-md">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Gerçek Bakım Örneğimiz
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-200 font-medium">
                  <p className="font-bold text-white text-sm">Trakya Köyleri Kabir Düzenleme</p>
                  <p className="text-slate-300 text-[11px]">Mermer beyazlatma, taze toprak ve canlı çiçek dikimi</p>
                </div>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">2 Kolay Başlangıç Yolu</h3>
                    <p className="text-xs text-slate-400">Resim gönderin veya biz gidip çekelim</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Şeffaf Süreç
                </span>
              </div>

              {/* Service step list */}
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/70 border border-emerald-800/40">
                  <div className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    1A
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-300">Fotoğraf Varsa: WhatsApp&apos;tan Atın</p>
                    <p className="text-xs text-slate-300">
                      Mezarın mevcut resmini gönderin, duruma göre hemen ortalama fiyat verelim.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/70 border border-teal-800/40">
                  <div className="w-6 h-6 rounded-full bg-teal-700 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    1B
                  </div>
                  <div>
                    <p className="font-semibold text-teal-300">Fotoğraf Yoksa: Biz Gidip Çekelim</p>
                    <p className="text-xs text-slate-300">
                      Kabir yerini bildirin, köye gidip mezarın güncel halini fotoğraflayıp size atalım.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                  <div className="w-6 h-6 rounded-full bg-emerald-900 text-emerald-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-slate-200">Ödeme Alınır & İşe Başlanır</p>
                    <p className="text-xs text-slate-400">
                      Fiyat kesinleşip ödeme alındıktan sonra mobil ekibimiz itinalı bakıma başlar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                  <div className="w-6 h-6 rounded-full bg-emerald-900 text-emerald-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-slate-200">Videolu & Fotoğraflı Teslimat</p>
                    <p className="text-xs text-slate-400">
                      Tamamlanan bakımın öncesi/sonrası HD video ve fotoğrafları WhatsApp&apos;tan iletilir.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to action inside card */}
              <div className="pt-2">
                <a
                  href="#fiyat-teklifi"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-md transition"
                >
                  <span>Bölgenizi Seçip Fiyat Hesaplayın</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="text-center">
                <p className="text-xs text-slate-400 flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Yurtdışından ve şehir dışından kolay sipariş & IBAN ile ödeme</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
