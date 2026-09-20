import { packagesData } from "@/data/packages";
import { contactConfig } from "@/data/contact";
import { Check, MessageCircle, Star } from "lucide-react";

export default function Packages() {
  return (
    <section id="paketler" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 text-emerald-700" />
            <span>Bakım Seçenekleri</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            İhtiyacınıza Uygun Bakım Paketleri
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Tüm paketlerimiz <strong>1 tek ziyarette</strong> eksiksiz uygulanır,
            özenle tamamlanır ve öncesi/sonrası video ile WhatsApp&apos;tan teslim
            edilir.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {packagesData.map((pkg) => {
            const waUrl = contactConfig.getWhatsappUrl(
              `Merhaba, trakyamezarliktemizleme.site üzerinden ulaşıyorum. ${pkg.name} (${pkg.period}) hakkında detaylı bilgi ve fiyat teklifi almak istiyorum.`
            );

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition duration-300 ${
                  pkg.isPopular
                    ? "bg-slate-900 text-white shadow-2xl ring-2 ring-emerald-500 md:-translate-y-2"
                    : "bg-slate-50 border border-slate-200 text-slate-900 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Popular Tag */}
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span
                      className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-sm ${
                        pkg.isPopular
                          ? "bg-emerald-500 text-slate-950 font-bold"
                          : "bg-slate-800 text-emerald-300"
                      }`}
                    >
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3
                      className={`text-2xl font-black ${
                        pkg.isPopular ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {pkg.name}
                    </h3>
                    <p
                      className={`text-xs font-semibold uppercase tracking-wider mt-1 ${
                        pkg.isPopular ? "text-emerald-400" : "text-emerald-700"
                      }`}
                    >
                      {pkg.period}
                    </p>
                  </div>

                  <p
                    className={`text-sm leading-relaxed mb-4 ${
                      pkg.isPopular ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {pkg.description}
                  </p>

                  {/* Price Box */}
                  <div
                    className={`p-4 rounded-2xl mb-6 border flex items-center justify-between ${
                      pkg.isPopular
                        ? "bg-slate-800/90 border-slate-700 text-white"
                        : "bg-white border-slate-200 text-slate-900 shadow-sm"
                    }`}
                  >
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span
                          className={`text-3xl font-black ${
                            pkg.isPopular ? "text-emerald-400" : "text-emerald-700"
                          }`}
                        >
                          {pkg.price}
                        </span>
                        {pkg.oldPrice && (
                          <span className="text-xs line-through text-slate-400 font-medium">
                            {pkg.oldPrice}
                          </span>
                        )}
                      </div>
                      {pkg.priceNote && (
                        <p className="text-[11px] text-slate-400 mt-0.5 font-medium">
                          {pkg.priceNote}
                        </p>
                      )}
                    </div>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                        pkg.isPopular
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          : "bg-emerald-100 text-emerald-800"
                      }`}
                    >
                      Piyasa Fiyatı
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-4 border-t border-slate-200/40 mb-8">
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            pkg.isPopular
                              ? "bg-emerald-500/20 text-emerald-400"
                              : "bg-emerald-100 text-emerald-700"
                          }`}
                        >
                          <Check className="w-3.5 h-3.5 font-bold" />
                        </div>
                        <span
                          className={
                            pkg.isPopular ? "text-slate-200" : "text-slate-700"
                          }
                        >
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm transition duration-200 shadow ${
                      pkg.isPopular
                        ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold"
                        : "bg-emerald-700 hover:bg-emerald-800 text-white"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{pkg.ctaText} & WhatsApp&apos;tan Yaz</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-xs text-slate-500 mt-10">
          * Belirtilen tüm paket fiyatları <strong>1 ziyaret (tek seferlik tam uygulama)</strong> için geçerlidir. WhatsApp&apos;tan göndereceğiniz mezar fotoğrafına veya ekibimizin yerinde çekeceği mezar resmine göre fiyat netleştirilir; <strong>ödeme alındıktan sonra</strong> bakıma başlanır.
        </p>
      </div>
    </section>
  );
}
