"use client";

import { useState } from "react";
import { trakyaDistrictsData, edirneRedirectInfo } from "@/data/regions";
import { contactConfig } from "@/data/contact";
import {
  Calculator,
  CheckSquare,
  Square,
  MessageCircle,
  PhoneCall,
  MapPin,
  Sparkles,
  Tag,
  CheckCircle,
  ExternalLink,
  AlertCircle,
} from "lucide-react";

interface ServiceOption {
  id: string;
  label: string;
  price: number;
}

const availableServices: ServiceOption[] = [
  { id: "mermer", label: "Mermer Beyazlatma & Yosun/Kireç Temizliği", price: 4500 },
  { id: "ot", label: "Yabani Ot Sökümü & Toprak Havalandırma", price: 3500 },
  { id: "cicek", label: "Canlı Mevsimlik Çiçek Dikimi & Can Suyu", price: 3800 },
  { id: "yazi", label: "Mezar Taşı Yazılarının Yaldızla Boyanması", price: 2500 },
  { id: "derz", label: "Mermer Çatlak Tamiri & Su Geçirmez Derz", price: 3500 },
  { id: "budama", label: "Sarkan Ağaç Budama & Çevre Düzenleme", price: 1800 },
];

export default function QuoteCalculator() {
  const [selectedProvince, setSelectedProvince] = useState<"Tekirdağ" | "Kırklareli" | "Edirne" | "Çanakkale" | "İstanbul">("Tekirdağ");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("Süleymanpaşa (Tekirdağ Merkez)");
  const [village, setVillage] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "mermer",
    "ot",
    "cicek",
  ]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const districtsInProvince = trakyaDistrictsData.filter(
    (d) => d.province === selectedProvince
  );

  const handleProvinceChange = (province: "Tekirdağ" | "Kırklareli" | "Edirne" | "Çanakkale" | "İstanbul") => {
    setSelectedProvince(province);
    if (province === "Tekirdağ") {
      setSelectedDistrict("Süleymanpaşa (Tekirdağ Merkez)");
    } else if (province === "Kırklareli") {
      setSelectedDistrict("Kırklareli Merkez");
    } else if (province === "Çanakkale") {
      setSelectedDistrict("Gelibolu");
    } else if (province === "İstanbul") {
      setSelectedDistrict("Silivri");
    } else {
      setSelectedDistrict("Edirne Merkez");
    }
  };

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter((s) => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  // Base calculation
  const rawTotal = selectedServices.reduce((sum, id) => {
    const srv = availableServices.find((s) => s.id === id);
    return sum + (srv ? srv.price : 0);
  }, 0);

  // Multi-service package discount
  const discountMultiplier =
    selectedServices.length >= 4 ? 0.8 : selectedServices.length >= 2 ? 0.88 : 1;
  const calculatedPrice = Math.round((rawTotal * discountMultiplier) / 100) * 100;
  const hasDiscount = selectedServices.length >= 2;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceNames = selectedServices
      .map((id) => availableServices.find((s) => s.id === id)?.label)
      .filter(Boolean)
      .join("\n- ");

    const msg = `*trakyamezarliktemizleme.site üzerinden Fiyat Teklifi Talebi*
----------------------------------
*İl:* ${selectedProvince}
*İlçe:* ${selectedDistrict}
*Köy / Mezarlık:* ${village || "Belirtilmedi"}
*Seçilen Hizmetler:*
- ${serviceNames || "Hiçbiri seçilmedi"}

*Tahmini Paket Tutarı:* ~${calculatedPrice.toLocaleString("tr-TR")} ₺
*Ad Soyad:* ${name || "Belirtilmedi"}
*İletişim Tel:* ${phone || "Belirtilmedi"}
*Ekstra Not:* ${notes || "Yok"}
----------------------------------
Bu bilgiler doğrultusunda 1 ziyaretlik kesin fiyat ve uygunluk teyidi rica ediyorum.`;

    const waUrl = contactConfig.getWhatsappUrl(msg);
    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 400);
  };

  return (
    <section id="fiyat-teklifi" className="py-20 bg-emerald-950 text-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-emerald-700/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-teal-800/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 border border-emerald-700 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-emerald-400" />
            <span>Şeffaf Fiyat Hesaplama</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            1 Ziyaret Kabir Bakım Ücretinizi Hesaplayın
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Mezarınızın bulunduğu ili, ilçeyi ve istediğiniz bakım işlemlerini seçin;
            tahmini paket fiyatını anında görün ve WhatsApp ile tek tıkla teklif alın.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 text-slate-900 shadow-2xl border border-emerald-900/40">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Location & District */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-800 text-white flex items-center justify-center text-xs font-bold">
                    1
                  </span>
                  <span>Mezarın Bulunduğu İli ve İlçesi Seçin</span>
                </label>
                <span className="text-xs text-emerald-800 font-semibold hidden sm:inline">
                  Tüm Köylere Kendi Aracımızla Ulaşım
                </span>
              </div>

              {/* Province Selector Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-4">
                <button
                  type="button"
                  onClick={() => handleProvinceChange("Tekirdağ")}
                  className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition flex items-center justify-center gap-1.5 cursor-pointer ${
                    selectedProvince === "Tekirdağ"
                      ? "bg-emerald-800 text-white shadow"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Tekirdağ</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleProvinceChange("Kırklareli")}
                  className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition flex items-center justify-center gap-1.5 cursor-pointer ${
                    selectedProvince === "Kırklareli"
                      ? "bg-emerald-800 text-white shadow"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Kırklareli</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleProvinceChange("Çanakkale")}
                  className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition flex items-center justify-center gap-1.5 cursor-pointer ${
                    selectedProvince === "Çanakkale"
                      ? "bg-emerald-800 text-white shadow"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Çanakkale (Gelibolu)</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleProvinceChange("İstanbul")}
                  className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition flex items-center justify-center gap-1.5 cursor-pointer ${
                    selectedProvince === "İstanbul"
                      ? "bg-emerald-800 text-white shadow"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>İstanbul (Silivri/Çatalca)</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleProvinceChange("Edirne")}
                  className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition flex items-center justify-center gap-1.5 cursor-pointer ${
                    selectedProvince === "Edirne"
                      ? "bg-amber-600 text-white shadow"
                      : "bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100"
                  }`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Edirne (Özel Site)</span>
                </button>
              </div>

              {/* Edirne Special Redirection Alert Box */}
              {selectedProvince === "Edirne" ? (
                <div className="mb-4 p-5 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 space-y-3">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
                    <div className="space-y-1 text-sm">
                      <p className="font-bold text-amber-900 text-base">
                        Edirne İçin Özel Web Sitemiz Yayındadır!
                      </p>
                      <p className="text-amber-800 text-xs sm:text-sm leading-relaxed">
                        Edirne Merkez, Keşan, Uzunköprü, Havsa, İpsala ve tüm 253 Edirne köyündeki mezarlık bakım hizmetlerimiz için özel sitemiz <strong>edirnemezarliktemizleme.site</strong> üzerinden detaylı köy listelerine ve doğrudan Edirne ekibimize ulaşabilirsiniz.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
                    <a
                      href={contactConfig.edirneSiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow transition"
                    >
                      <span>edirnemezarliktemizleme.site Adresine Git</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <span className="text-xs text-amber-800">
                      Veya dilerseniz formu doldurarak Trakya merkez hattımızdan da Edirne için fiyat alabilirsiniz.
                    </span>
                  </div>
                </div>
              ) : null}

              {/* District & Village inputs */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">
                    {selectedProvince} İlçesi
                  </label>
                  {selectedProvince === "Edirne" ? (
                    <select
                      value={selectedDistrict}
                      onChange={(e) => setSelectedDistrict(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 font-medium text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    >
                      {edirneRedirectInfo.districts.map((name) => (
                        <option key={name} value={name}>
                          {name}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <select
                      value={selectedDistrict}
                      onChange={(e) => setSelectedDistrict(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 font-medium text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    >
                      {districtsInProvince.map((d) => (
                        <option key={d.slug} value={d.name}>
                          {d.name} {d.isCenter ? "(Merkez)" : ""}
                        </option>
                      ))}
                    </select>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">
                    Köy, Mahalle veya Mezarlık Adı
                  </label>
                  <input
                    type="text"
                    placeholder="Örn: Önerler, Hamitabat, Kumbağ, Kozyörük vb."
                    value={village}
                    onChange={(e) => setVillage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 font-medium text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 inline" />
                Tüm Trakya genelindeki köy ve mahalle mezarlıklarına kendi araç ve profesyonel mobil ekipmanlarımızla gidiyoruz.
              </p>
            </div>

            {/* Step 2: Desired Services */}
            <div className="pt-2 border-t border-slate-100">
              <label className="block text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-800 text-white flex items-center justify-center text-xs font-bold">
                  2
                </span>
                <span>Bu Ziyarette Yapılmasını İstediğiniz Hizmetleri Seçin</span>
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {availableServices.map((srv) => {
                  const isChecked = selectedServices.includes(srv.id);
                  return (
                    <button
                      type="button"
                      key={srv.id}
                      onClick={() => toggleService(srv.id)}
                      className={`flex items-start justify-between p-3.5 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                        isChecked
                          ? "bg-emerald-50/80 border-emerald-500 text-emerald-950 font-medium shadow-sm"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 text-emerald-700">
                          {isChecked ? (
                            <CheckSquare className="w-5 h-5 fill-emerald-600 text-white" />
                          ) : (
                            <Square className="w-5 h-5 text-slate-400" />
                          )}
                        </div>
                        <span className="text-xs sm:text-sm">{srv.label}</span>
                      </div>
                      <span className="text-xs font-bold text-emerald-800 shrink-0 ml-2">
                        {srv.price.toLocaleString("tr-TR")} ₺
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Contact details */}
            <div className="pt-2 border-t border-slate-100">
              <label className="block text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-800 text-white flex items-center justify-center text-xs font-bold">
                  3
                </span>
                <span>İletişim ve Varsa Özel Notunuz</span>
              </label>
              <div className="grid sm:grid-cols-2 gap-4 mb-3">
                <input
                  type="text"
                  placeholder="Adınız ve Soyadınız"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 font-medium text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Telefon Numaranız (İsteğe bağlı)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 font-medium text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
              <textarea
                rows={2}
                placeholder="Varsa kabirle ilgili ek bilgi (Örn: Mezar 5 yıldır bakımsız, taşın yazısı çok silik vb.)"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 font-medium text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            {/* Step 4: Estimated Price Bar */}
            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1">
                  <Tag className="w-3.5 h-3.5" />
                  <span>1 Ziyaret Tahmini Paket Bedeli</span>
                </span>
                <div className="flex items-baseline justify-center sm:justify-start gap-2 mt-1">
                  <span className="text-3xl font-black text-emerald-950">
                    {calculatedPrice > 0 ? `~${calculatedPrice.toLocaleString("tr-TR")} ₺` : "0 ₺"}
                  </span>
                  {hasDiscount && (
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-200/70 px-2 py-0.5 rounded-md">
                      Paket İndirimi Dahil
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  * 1 tek ziyarette eksiksiz teslimat ve WhatsApp video onayı dahildir.
                </p>
              </div>

              <div className="shrink-0 text-center sm:text-right">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-700 text-white text-xs font-bold">
                  1 Ziyarette Fotoğraflı/Videolu Teslimat
                </span>
              </div>
            </div>

            {/* Submit Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-base shadow-lg shadow-emerald-900/20 transition duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp&apos;tan 1 Ziyaret Teklifi Al</span>
              </button>

              <a
                href={`tel:${contactConfig.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-sm transition"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Telefonla Ara: {contactConfig.phone}</span>
              </a>
            </div>

            {submitted && (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  WhatsApp uygulamanız açılıyor. Mesajı gönderdiğinizde en kısa sürede dönüş sağlanacaktır.
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
