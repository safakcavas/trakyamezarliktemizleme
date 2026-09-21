import Link from "next/link";
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
                <Sparkles className="w-5 h-5 text-emerald-200" aria-hidden="true" />
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
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Tekirdağ & Kırklareli Köylerine Yerinde Hizmet</span>
            </div>

            {/* Edirne Site Highlight */}
            <div className="mt-4 p-3 rounded-xl bg-emerald-900/40 border border-emerald-800/80 text-xs space-y-1.5">
              <span className="block text-emerald-300 font-bold">Edirne Mezarlık Bakımı</span>
              <a
                href={contactConfig.edirneSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Edirne Mezar Bakımı Web Sitesi (Yeni sekmede açılır)"
                className="text-white hover:text-emerald-300 underline font-semibold flex items-center gap-1"
              >
                <span>edirnemezarliktemizleme.site</span>
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
              <Link
                href="/blog/edirne-mezar-bakimi-ve-koy-kabir-temizligi"
                className="text-emerald-400 hover:text-emerald-200 block text-[11px] font-semibold"
              >
                → Edirne & 8 İlçe Mezar Rehberi
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/blog" className="text-emerald-400 font-semibold hover:text-emerald-300 transition flex items-center gap-1">
                  <span>Mezar Bakım Blogu & Rehberler</span>
                </Link>
              </li>
              <li>
                <Link href="/#hizmetler" className="hover:text-emerald-400 transition">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/#oncesi-sonrasi" className="hover:text-emerald-400 transition">
                  Öncesi / Sonrası Çalışmalar
                </Link>
              </li>
              <li>
                <Link href="/#bolgeler" className="hover:text-emerald-400 transition">
                  Hizmet Verilen Bölgeler
                </Link>
              </li>
              <li>
                <Link href="/#surec" className="hover:text-emerald-400 transition">
                  Nasıl Çalışıyoruz?
                </Link>
              </li>
              <li>
                <Link href="/#paketler" className="hover:text-emerald-400 transition">
                  Bakım Paketleri & Fiyatlar
                </Link>
              </li>
              <li>
                <Link href="/#fiyat-teklifi" className="hover:text-emerald-400 transition">
                  Hızlı Fiyat Teklifi Al
                </Link>
              </li>
              <li>
                <Link href="/blog/mezar-mermeri-nasil-beyazlatilir-asitsiz-temizlik" className="hover:text-emerald-400 transition">
                  Mermer Beyazlatma Rehberi
                </Link>
              </li>
              <li>
                <Link href="/blog/gurbetciler-icin-trakyada-kabir-bakim-hizmeti" className="hover:text-emerald-400 transition">
                  Gurbetçilere Kabir Bakımı
                </Link>
              </li>
              <li>
                <Link href="/#sss" className="hover:text-emerald-400 transition">
                  Sıkça Sorulan Sorular
                </Link>
              </li>
            </ul>
          </div>

          {/* Districts Covered */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
              Hizmet Verilen İlçeler
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
              <div>
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                  Tekirdağ ({tekirdagDistricts.length} İlçe)
                </span>
                <div className="grid grid-cols-2 gap-1 text-xs text-slate-400">
                  {tekirdagDistricts.map((d) => (
                    <Link
                      key={d.slug}
                      href={`/blog/${d.blogSlug}`}
                      title={`${d.name} Mezar Bakımı ve Temizliği Rehberi`}
                      className="hover:text-emerald-400 transition flex items-center gap-1"
                    >
                      <span className="text-emerald-600 font-bold">•</span>
                      <span className="truncate">{d.name.replace(" (Tekirdağ Merkez)", "")}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                  Kırklareli ({kirklareliDistricts.length} İlçe)
                </span>
                <div className="grid grid-cols-2 gap-1 text-xs text-slate-400">
                  {kirklareliDistricts.map((d) => (
                    <Link
                      key={d.slug}
                      href={`/blog/${d.blogSlug}`}
                      title={`${d.name} Mezar Bakımı ve Temizliği Rehberi`}
                      className="hover:text-emerald-400 transition flex items-center gap-1"
                    >
                      <span className="text-emerald-600 font-bold">•</span>
                      <span className="truncate">{d.name.replace(" Merkez", "")}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Direct Contacts */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
              İletişim & Danışma
            </h3>
            <div className="space-y-3 text-xs">
              <a
                href={contactConfig.getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp Danışma: ${contactConfig.phone}`}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-600 transition"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span className="font-bold text-white">WhatsApp: {contactConfig.phone}</span>
              </a>

              <a
                href={contactConfig.getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Canlı Destek ile Mesaj Gönder"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-950/80 border border-emerald-800/80 text-emerald-200 hover:bg-emerald-900 transition"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-300 text-emerald-950 shrink-0" aria-hidden="true" />
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
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" aria-hidden="true" />
          </p>
        </div>
      </div>
    </footer>
  );
}
