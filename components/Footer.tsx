import { contactConfig } from "@/data/contact";
import { trakyaDistrictsData } from "@/data/regions";
import { Sparkles, MessageCircle, MapPin, Heart, ExternalLink } from "lucide-react";

export default function Footer() {
  const tekirdagDistricts = trakyaDistrictsData.filter((d) => d.province === "Tekirdağ");
  const kirklareliDistricts = trakyaDistrictsData.filter((d) => d.province === "Kırklareli");

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5 text-emerald-200" />
              </div>
              <span className="text-xl font-black text-white">
                Trakya <span className="text-emerald-500">Mezar Bakım</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tekirdağ, Kırklareli, Çorlu, Lüleburgaz ve 400’den fazla Trakya köy
              mezarlığında sevdiklerinizin kabirlerini hürmet ve emanet şuuruyla
              temizliyor, çiçeklendiriyor ve videolu raporluyoruz.
            </p>
            <div className="pt-2 text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Tekirdağ & Kırklareli Köylerine Yerinde Hizmet</span>
            </div>

            {/* Edirne Site Highlight */}
            <div className="mt-4 p-3 rounded-xl bg-emerald-900/40 border border-emerald-800/80 text-xs">
              <span className="block text-emerald-300 font-bold mb-1">Edirne Mezarlık Bakımı</span>
              <a
                href={contactConfig.edirneSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-300 underline font-semibold flex items-center gap-1"
              >
                <span>edirnemezarliktemizleme.site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
              Hızlı Bağlantılar
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#hizmetler" className="hover:text-emerald-400 transition">
                  Hizmetlerimiz
                </a>
              </li>
              <li>
                <a href="#oncesi-sonrasi" className="hover:text-emerald-400 transition">
                  Öncesi / Sonrası Çalışmalar
                </a>
              </li>
              <li>
                <a href="#bolgeler" className="hover:text-emerald-400 transition">
                  Hizmet Verilen Bölgeler
                </a>
              </li>
              <li>
                <a href="#surec" className="hover:text-emerald-400 transition">
                  Nasıl Çalışıyoruz?
                </a>
              </li>
              <li>
                <a href="#paketler" className="hover:text-emerald-400 transition">
                  Bakım Paketleri & Fiyatlar
                </a>
              </li>
              <li>
                <a href="#fiyat-teklifi" className="hover:text-emerald-400 transition">
                  Hızlı Fiyat Teklifi Al
                </a>
              </li>
              <li>
                <a href="#sss" className="hover:text-emerald-400 transition">
                  Sıkça Sorulan Sorular
                </a>
              </li>
            </ul>
          </div>

          {/* Districts Covered */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
              Hizmet Verilen İlçeler
            </h4>
            <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
              <div>
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                  Tekirdağ (9 İlçe)
                </span>
                <div className="grid grid-cols-2 gap-1 text-xs text-slate-400">
                  {tekirdagDistricts.map((d) => (
                    <a
                      key={d.slug}
                      href="#bolgeler"
                      className="hover:text-emerald-400 transition flex items-center gap-1"
                    >
                      <span className="text-emerald-600 font-bold">•</span>
                      <span className="truncate">{d.name.replace(" (Tekirdağ Merkez)", "")}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                  Kırklareli (8 İlçe)
                </span>
                <div className="grid grid-cols-2 gap-1 text-xs text-slate-400">
                  {kirklareliDistricts.map((d) => (
                    <a
                      key={d.slug}
                      href="#bolgeler"
                      className="hover:text-emerald-400 transition flex items-center gap-1"
                    >
                      <span className="text-emerald-600 font-bold">•</span>
                      <span className="truncate">{d.name.replace(" Merkez", "")}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Direct Contacts */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
              İletişim & Danışma
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href={contactConfig.getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-600 transition"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-bold text-white">WhatsApp: {contactConfig.phone}</span>
              </a>

              <a
                href={contactConfig.getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-950/80 border border-emerald-800/80 text-emerald-200 hover:bg-emerald-900 transition"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-300 text-emerald-950 shrink-0" />
                <span className="font-bold">WhatsApp ile Mesaj Gönder</span>
              </a>

              <div className="p-3 text-[11px] text-slate-400 bg-slate-900/60 rounded-xl">
                <span>Çalışma Saatleri: {contactConfig.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} trakyamezarliktemizleme.site. Tüm hakları saklıdır.
          </p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Emanetinize saygıyla, tüm Trakya&apos;da</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
