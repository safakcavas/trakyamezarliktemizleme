"use client";

import { useState } from "react";
import { contactConfig } from "@/data/contact";
import {
  MessageCircle,
  Clock,
  MapPin,
  Send,
  CheckCircle,
  ExternalLink,
  Camera,
  Car,
} from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [district, setDistrict] = useState("");
  const [photoOption, setPhotoOption] = useState<"foto_var" | "foto_yok">("foto_var");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const photoText =
      photoOption === "foto_var"
        ? "📸 Mezar resmi göndereceğim (Ortalama fiyat talebi)"
        : "🚗 Mezara gidip resim çekilmesini istiyorum (Yerinde tespit & keşif)";

    const text = `*trakyamezarliktemizleme.site İletişim Formu Talebi*
----------------------------------
*Ad Soyad:* ${name}
*Telefon:* ${phone}
*İlçe / Köy:* ${district}
*Fotoğraf Durumu:* ${photoText}
*Talep / Not:* ${message}
----------------------------------
${
  photoOption === "foto_var"
    ? "WhatsApp üzerinden fotoğrafı gönderiyorum, ortalama fiyat teklifi rica ederim."
    : "Mezar yerine gidilip fotoğraf çekilmesini ve fiyat netleşip ödeme sonrası başlanmasını rica ederim."
}`;

    const waUrl = contactConfig.getWhatsappUrl(text);
    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 400);
  };

  return (
    <section id="iletisim" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Contact Details Column */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>İletişim & Konum</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Bizimle İletişime Geçin
              </h2>
              <p className="text-slate-300 mt-3 text-base leading-relaxed">
                Mezarın fotoğrafını WhatsApp&apos;tan atın ortalama fiyat verelim ya da mezara gidip resmini biz çekelim.
                Fiyat kesinleşip <strong className="text-emerald-300 font-semibold">ödeme alındıktan sonra</strong> hemen bakım ve temizliğe başlıyoruz.
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone card converted to WhatsApp */}
              <a
                href={contactConfig.getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-emerald-500 transition group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">WhatsApp Danışma Hattı</p>
                  <p className="text-base font-bold text-white group-hover:text-emerald-300 transition">
                    {contactConfig.phone}
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={contactConfig.getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-emerald-500 transition group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">WhatsApp Canlı Destek</p>
                  <p className="text-base font-bold text-white group-hover:text-emerald-300 transition">
                    Konum & Fotoğraf Gönderin
                  </p>
                </div>
              </a>

              {/* Working hours */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                <div className="w-12 h-12 rounded-xl bg-teal-600/20 text-teal-400 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Çalışma Saatleri</p>
                  <p className="text-sm font-semibold text-slate-200">
                    {contactConfig.workingHours}
                  </p>
                </div>
              </div>

              {/* Edirne Special Link */}
              <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-800/60 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center shrink-0">
                  <ExternalLink className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-amber-300 font-bold">Edirne İli Hizmet Sitemiz</p>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Edirne Merkez ve tüm köyleri için:{" "}
                    <a
                      href={contactConfig.edirneSiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-amber-300 font-bold hover:text-amber-200"
                    >
                      edirnemezarliktemizleme.site
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-6">
            <div className="bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl backdrop-blur">
              <h3 className="text-xl font-bold text-white mb-2">
                Hemen Mesaj Gönderin
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Bilgilerinizi bırakın, en kısa sürede sizi arayalım veya
                WhatsApp’tan detayları paylaşalım.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Adınız ve Soyadınız
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Adınız ve Soyadınız"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Telefon Numaranız
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="05XX XXX XX XX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      İlçe / Köy
                    </label>
                    <input
                      type="text"
                      placeholder="Örn: Çorlu Önerler / Lüleburgaz"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                {/* Photo Option Choice */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Mezar Fotoğraf Durumu
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPhotoOption("foto_var")}
                      className={`flex items-center gap-2.5 p-3 rounded-xl border text-left text-xs font-medium transition cursor-pointer ${
                        photoOption === "foto_var"
                          ? "bg-emerald-950/80 border-emerald-500 text-emerald-300"
                          : "bg-slate-900 border-slate-700 text-slate-400 hover:text-white"
                      }`}
                    >
                      <Camera className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Resim Var (WhatsApp&apos;tan Atacağım)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPhotoOption("foto_yok")}
                      className={`flex items-center gap-2.5 p-3 rounded-xl border text-left text-xs font-medium transition cursor-pointer ${
                        photoOption === "foto_yok"
                          ? "bg-teal-950/80 border-teal-500 text-teal-300"
                          : "bg-slate-900 border-slate-700 text-slate-400 hover:text-white"
                      }`}
                    >
                      <Car className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>Resim Yok (Siz Gidip Çekin)</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Talebiniz veya Mezar Durumu
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Yabani ot temizliği, çiçeklendirme, taş boyama vb."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/50 transition cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>WhatsApp ile Talebi İlet</span>
                </button>

                {submitted && (
                  <div className="p-3 rounded-xl bg-emerald-950 border border-emerald-700 text-emerald-300 text-xs flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>WhatsApp mesajınız oluşturuldu, yönlendiriliyorsunuz.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
