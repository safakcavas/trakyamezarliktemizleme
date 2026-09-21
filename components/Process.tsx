import {
  Camera,
  MapPin,
  Banknote,
  Sparkles,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { contactConfig } from "@/data/contact";

export default function Process() {
  return (
    <section id="surec" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
            <span>Şeffaf & Güvenilir Çalışma Prensibimiz</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nasıl Çalışıyoruz?
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            İster mezarın fotoğrafını bize gönderin, ister biz gidip yerinde çekelim.
            Her aşamada şeffaf, güvenilir ve fotoğraflı bilgilendirme sağlıyoruz.
          </p>
        </div>

        {/* 2 Starting Paths Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {/* Path A */}
          <div className="relative bg-white rounded-3xl p-8 border-2 border-emerald-500 shadow-md flex flex-col justify-between">
            <div className="absolute -top-3.5 left-6 bg-emerald-700 text-white text-xs font-black uppercase px-3.5 py-1 rounded-full shadow">
              1. Yol: Fotoğrafınız Varsa
            </div>
            <div>
              <div className="flex items-center justify-between mb-6 mt-2">
                <span className="text-3xl font-black text-emerald-600">01</span>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Camera className="w-6 h-6" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Mezar Resmini Atın, Ortalama Fiyat Alın
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Mezarın mevcut halini gösteren fotoğrafı WhatsApp üzerinden bize gönderin.
                Mermerin durumu, yosunlanma ve ot yoğunluğunu inceleyip size dakikalar içinde ortalama fiyat teklifimizi iletelim.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" /> Hızlı Fotoğraflı Fiyat
              </span>
              <a
                href={contactConfig.getWhatsappUrl("Merhaba, mezarımızın fotoğrafını gönderip ortalama fiyat almak istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp üzerinden fotoğraf göndererek ortalama fiyat teklifi alın"
                className="text-xs font-bold text-emerald-800 hover:text-emerald-900 inline-flex items-center gap-1 hover:underline"
              >
                Fotoğraf Gönder <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Path B */}
          <div className="relative bg-white rounded-3xl p-8 border-2 border-teal-500 shadow-md flex flex-col justify-between">
            <div className="absolute -top-3.5 left-6 bg-teal-700 text-white text-xs font-black uppercase px-3.5 py-1 rounded-full shadow">
              2. Yol: Fotoğraf Yoksa / Uzaktaysanız
            </div>
            <div>
              <div className="flex items-center justify-between mb-6 mt-2">
                <span className="text-3xl font-black text-teal-600">01</span>
                <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center">
                  <MapPin className="w-6 h-6" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Biz Gidelim, Mezar Resmini Çekelim
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Fotoğrafınız yoksa veya uzaktaysanız mezarın bulunduğu ilçe, köy ve merhumun adını bize iletin.
                Köye gidip mezarı bulalım, mevcut durumunun fotoğraf ve videosunu çekip WhatsApp&apos;tan size atalım.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-teal-700 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-teal-600" aria-hidden="true" /> Yerinde Keşif & Fotoğraf
              </span>
              <a
                href={contactConfig.getWhatsappUrl("Merhaba, mezarımızın fotoğrafı yok. Konumunu iletsem gidip fotoğraf çekebilir misiniz?")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp üzerinden konum bildirerek yerinde keşif ve fotoğraf talep edin"
                className="text-xs font-bold text-teal-800 hover:text-teal-900 inline-flex items-center gap-1 hover:underline"
              >
                Konum Bildir <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Subsequent Steps: Payment/Start & Delivery */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Step 2: Payment & Work Commencement */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-black text-slate-300">02</span>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
                  <Banknote className="w-6 h-6" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Fiyat Netleşir, Ödeme Alınır & İşe Başlanır
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Mezarın durumu fotoğrafla kesinleştikten sonra yapılacak işlemler (ot ayıklama, mermer beyazlatma, çiçeklendirme, yazı boyama) teyit edilir.
                Ödeme (IBAN / Havale / FAST) alındıktan hemen sonra planlanan günde temizlik ve bakım işlemine başlanır.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-amber-800 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-amber-600" aria-hidden="true" />
              <span>Güvenli & Hızlı Başlangıç</span>
            </div>
          </div>

          {/* Step 3: HD Delivery */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-black text-slate-300">03</span>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <Sparkles className="w-6 h-6" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Fotoğraflı & Videolu Eksiksiz Teslimat
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Tüm temizlik, mermer parlatma, toprak takviyesi ve canlı çiçek ekimi tamamlandığında; kabrin dört bir yanından çekilmiş yüksek çözünürlüklü öncesi ve sonrası fotoğraf ve videoları WhatsApp&apos;tan anında tarafınıza iletilir.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-emerald-800 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
              <span>%100 Şeffaf Video Raporu</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center mt-12">
          <a
            href={contactConfig.getWhatsappUrl("Merhaba, Trakya'daki mezarımızın bakımı için süreci başlatmak istiyorum.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp üzerinden mezar bakım sürecini başlatın"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-base shadow-lg shadow-emerald-900/20 transition hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 fill-white" aria-hidden="true" />
            <span>Hemen Bilgi Al & Süreci Başlat</span>
          </a>
        </div>
      </div>
    </section>
  );
}
