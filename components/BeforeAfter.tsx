"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Check, ArrowRight, Camera, ShieldCheck } from "lucide-react";
import { contactConfig } from "@/data/contact";

interface CaseStudy {
  id: string;
  title: string;
  location: string;
  beforeNotes: string[];
  afterNotes: string[];
  badge: string;
}

const cases: CaseStudy[] = [
  {
    id: "case-1",
    title: "Yıllardır Bakımsız Kalmış Mermer Mezar Temizliği",
    location: "Tekirdağ / Çorlu Önerler Mezarlığı",
    badge: "Mermer Beyazlatma & Çiçek Dikimi",
    beforeNotes: [
      "Yoğun kara yosun ve çamur lekesi oluşmuş mermer yüzey",
      "Mezar üstünü ve etrafını saran yabani dikenler",
      "Güneş ve yağmurdan silinmiş mezar taşı yazıları",
      "Ayrılmış ve içine su alan mermer köşe derzleri",
    ],
    afterNotes: [
      "Özel mermer temizleme solüsyonu ile ilk günkü beyazlık",
      "Yabani otlar kökten ayıklandı ve gübreli taze toprak eklendi",
      "Silinen tüm isimler ve dualar kalıcı altın yaldızla boyandı",
      "Su geçirmez beyaz elastik derz dolgusu yenilendi, sardunyalar dikildi",
    ],
  },
  {
    id: "case-2",
    title: "Trakya Köyü Kabir Bakımı & Taş Yazısı Yenileme",
    location: "Kırklareli / Lüleburgaz Hamitabat Köyü",
    badge: "Taş Yazısı & Çalı Budama",
    beforeNotes: [
      "Mezarın üzerini kapatmış yabani ağaç ve çalı dalları",
      "Okunamaz hale gelmiş 25 yıllık baş taşı yazıları",
      "Yağmurlarla mezar ortasında çökme yapmış zemin",
      "Mermere yapışmış kireç ve liken tabakası",
    ],
    afterNotes: [
      "Gölge yapan dallar budandı, kuru yapraklar tamamen arındırıldı",
      "Mezar taşı yazıları hat ustası hassasiyetiyle altın yaldızla yenilendi",
      "Çöken zemin elenmiş humuslu toprakla tesviye edildi",
      "Mermer su itici koruyucu cila ile parlatıldı",
    ],
  },
  {
    id: "case-3",
    title: "Malkara Köyü Bayram Öncesi Çiçeklendirme",
    location: "Tekirdağ / Malkara Kozyörük Köyü",
    badge: "Bayramlık Bakım & Sulama",
    beforeNotes: [
      "Kurumuş eski çalılar ve sararmış yabani otlar",
      "Havasızlıktan sertleşmiş ve çatlamış mezar toprağı",
      "Yıllardır yıkanmamış tozlu ve grileşmiş mermer kaide",
      "Kabir etrafında biriken rüzgar çöpleri",
    ],
    afterNotes: [
      "Toprak 25 cm derine kadar bellenip gübreyle havalandırıldı",
      "Trakya iklimine dayanıklı taze canlı mevsim çiçekleri dikildi",
      "Basınçlı özel mobil yıkama ekipmanımızla tüm taş yüzeyler yıkandı",
      "Bol miktarda ilk can suyu verilerek bayrama hazırlandı",
    ],
  },
  {
    id: "case-4",
    title: "Babaeski Aile Kabristanı Komple Yenileme",
    location: "Kırklareli / Babaeski Alpullu Mezarlığı",
    badge: "Komple Yenileme & Derz Onarımı",
    beforeNotes: [
      "Kış donu sebebiyle açılmış mermer köşeleri",
      "Yabani sarmaşıkların sardığı mezar baş taşı",
      "Toprak seviyesinin taş altına inmesi",
      "Silik ve okunmayan dua kitabeleri",
    ],
    afterNotes: [
      "Açılan derzlere antibakteriyel beyaz mermer harcı çekildi",
      "Sarmaşıklar kökünden temizlendi, mermer beyazlatıldı",
      "2 çuval elenmiş zengin bahçe toprağı takviyesi yapıldı",
      "Dua ve isimler tek tek yaldız boya ile okunaklı kılındı",
    ],
  },
];

export default function BeforeAfter() {
  const [activeCase, setActiveCase] = useState(0);

  return (
    <section id="oncesi-sonrasi" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-emerald-700" />
            <span>Gerçek Uygulama Sonuçları</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Öncesi ve Sonrası Karşılaştırması
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Yaptığımız her temizlik ve bakım çalışmasında kabrin ilk durumunu ve
            tamamlanmış son halini yüksek çözünürlüklü fotoğraf ve videolarla
            doğruluyoruz.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {cases.map((c, index) => (
            <button
              key={c.id}
              onClick={() => setActiveCase(index)}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer ${
                activeCase === index
                  ? "bg-emerald-800 text-white shadow-md shadow-emerald-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {c.badge}
            </button>
          ))}
        </div>

        {/* Comparison Showcase */}
        {(() => {
          const current = cases[activeCase];
          return (
            <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-slate-800">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    {current.location}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {current.title}
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Video Onaylı Teslimat</span>
                </div>
              </div>

              {/* Side-by-side comparison columns */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* BEFORE (Öncesi) */}
                <div className="rounded-2xl bg-slate-950/80 border border-red-950/60 p-6 sm:p-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-red-950/80 text-red-400 border border-red-800/60">
                      ÖNCESİ (İlk Durum)
                    </span>
                    <span className="text-xs text-slate-500">Bakımsız / İhmal Edilmiş</span>
                  </div>

                  {/* Real Photo Before */}
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] border border-red-900/50 group shadow-md">
                    <Image
                      src="/images/before-cleaning.jpg"
                      alt="Temizlik Öncesi Bakımsız Mezar"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/20" />
                    <div className="absolute bottom-3 left-3 right-3 text-xs text-red-300 font-semibold flex items-center justify-between">
                      <span>⚠️ Bakım Öncesi İlk Tespit</span>
                      <span className="text-[11px] bg-red-950/90 px-2 py-0.5 rounded border border-red-800 text-red-300">Yosun & Dikenler</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 pt-2">
                    {current.beforeNotes.map((note, nIdx) => (
                      <li key={nIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <span className="text-red-400 font-bold shrink-0">✕</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* AFTER (Sonrası) */}
                <div className="rounded-2xl bg-slate-950/80 border border-emerald-900/60 p-6 sm:p-7 space-y-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-700/60">
                      SONRASI (Teslim Edilen)
                    </span>
                    <span className="text-xs text-emerald-400 font-medium">Tertemiz & Çiçeklendirilmiş</span>
                  </div>

                  {/* Real Photo After */}
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] border border-emerald-800/50 group shadow-md">
                    <Image
                      src="/images/after-cleaning.jpg"
                      alt="Temizlik Sonrası Beyazlatılmış Çiçekli Mezar"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/20" />
                    <div className="absolute bottom-3 left-3 right-3 text-xs text-emerald-300 font-semibold flex items-center justify-between">
                      <span className="flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 text-emerald-400 inline" /> Pırıl Pırıl Teslimat</span>
                      <span className="text-[11px] bg-emerald-950/90 px-2 py-0.5 rounded border border-emerald-700 text-emerald-300">Canlı Çiçekler & Yazı Boyama</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 pt-2">
                    {current.afterNotes.map((note, nIdx) => (
                      <li key={nIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400 text-center sm:text-left flex items-center gap-2">
                  <Camera className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    İşlem bittiğinde çekilen videolar aile bireylerinin WhatsApp hattına anında iletilir.
                  </span>
                </div>
                <a
                  href={contactConfig.getWhatsappUrl(`Merhaba, ${current.title} benzeri bir mezar bakım çalışması için fiyat teklifi almak istiyorum.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold transition shadow"
                >
                  <span>Benzer Mezar İçin Fiyat Al</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
