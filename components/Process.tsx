import {
  MapPin,
  ClipboardCheck,
  Sparkles,
  Camera,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { contactConfig } from "@/data/contact";

export default function Process() {
  const steps = [
    {
      step: "01",
      icon: MapPin,
      title: "Konum ve Mezar Bilgisi",
      desc: "Kabrin bulunduğu il, ilçe, köy veya mezarlık adını ve vefat edenin ismini WhatsApp üzerinden bize iletin.",
    },
    {
      step: "02",
      icon: ClipboardCheck,
      title: "Durum Tespiti ve Fiyat",
      desc: "Mezarın mevcut durumunu inceliyor; temizlik, çiçek ve taş boyama ihtiyaçlarını belirleyip şeffaf teklifimizi sunuyoruz.",
    },
    {
      step: "03",
      icon: Sparkles,
      title: "İtinalı Bakım ve Temizlik",
      desc: "Kendi araç, su tankı ve ekipmanımızla köye varıyor; otları ayıklıyor, mermeri beyazlatıyor ve çiçekleri dikiyoruz.",
    },
    {
      step: "04",
      icon: Camera,
      title: "Fotoğraflı & Videolu Teslimat",
      desc: "İşlem bittiğinde çekilen yüksek kaliteli öncesi/sonrası video ve fotoğrafları WhatsApp’tan anında size iletiyoruz.",
    },
  ];

  return (
    <section id="surec" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <ClipboardCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>4 Adımda Şeffaf Süreç</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nasıl Çalışıyoruz?
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Siz nerede olursanız olun; Trakya&apos;daki kabirler emanet hassasiyetiyle
            bakılır, her adımda WhatsApp ile bilgilendirilirsiniz.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-lg transition duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-emerald-900/20">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-emerald-700 flex items-center gap-1">
                  <span>Adım {idx + 1} Tamamlanır</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="text-center mt-12">
          <a
            href={contactConfig.getWhatsappUrl("Merhaba, Trakya'daki mezarımızın bakımı için süreci başlatmak istiyorum.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-base shadow-lg shadow-emerald-900/20 transition hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Hemen Bilgi Al & Süreci Başlat</span>
          </a>
        </div>
      </div>
    </section>
  );
}
