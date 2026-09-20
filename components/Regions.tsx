"use client";

import { useState } from "react";
import { trakyaDistrictsData, edirneRedirectInfo } from "@/data/regions";
import { contactConfig } from "@/data/contact";
import {
  MapPin,
  Search,
  CheckCircle2,
  MessageCircle,
  Navigation,
  ExternalLink,
  Building2,
} from "lucide-react";

export default function Regions() {
  const [activeProvince, setActiveProvince] = useState<"Tekirdağ" | "Kırklareli" | "Edirne" | "Çanakkale" | "İstanbul">("Tekirdağ");
  const districtsInProvince = trakyaDistrictsData.filter((d) => d.province === activeProvince);
  const [selectedDistrict, setSelectedDistrict] = useState(districtsInProvince[0] || trakyaDistrictsData[0]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleProvinceTab = (prov: "Tekirdağ" | "Kırklareli" | "Edirne" | "Çanakkale" | "İstanbul") => {
    setActiveProvince(prov);
    if (prov !== "Edirne") {
      const first = trakyaDistrictsData.find((d) => d.province === prov);
      if (first) setSelectedDistrict(first);
    }
  };

  // Search across Tekirdağ & Kırklareli
  const searchResults = searchTerm.trim()
    ? trakyaDistrictsData.flatMap((d) =>
        d.popularVillages
          .filter((v) => v.toLocaleLowerCase("tr").includes(searchTerm.toLocaleLowerCase("tr")))
          .map((v) => ({ village: v, district: d.name, province: d.province }))
      )
    : [];

  const isSearchingEdirne =
    searchTerm.trim().toLocaleLowerCase("tr").includes("edirne") ||
    searchTerm.trim().toLocaleLowerCase("tr").includes("keşan") ||
    searchTerm.trim().toLocaleLowerCase("tr").includes("uzunköprü") ||
    searchTerm.trim().toLocaleLowerCase("tr").includes("havsa") ||
    searchTerm.trim().toLocaleLowerCase("tr").includes("ipsala");

  return (
    <section id="bolgeler" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Navigation className="w-3.5 h-3.5 text-emerald-700" />
            <span>Kapsamlı Bölge Ağı</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tüm Trakya İlçe ve Köylerine Hizmet Götürüyoruz
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Mezarınız Trakya’nın en uç köyünde dahi olsa, kendi aracımız ve
            profesyonel temizlik ekipmanlarımızla bizzat yerine ulaşıyoruz.
          </p>
        </div>

        {/* Village Search Bar */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Köy veya mahalle adınızı arayın (Örn: Önerler, Hamitabat, Kumbağ, Alpullu...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-none text-sm text-slate-900 shadow-sm"
            />
          </div>

          {/* Search Result Instant Reassurance */}
          {searchTerm.trim().length > 0 && (
            <div className="mt-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
              {isSearchingEdirne && (
                <div className="mb-3 p-3 bg-amber-100/80 border border-amber-300 rounded-xl text-amber-950 text-xs flex items-center justify-between">
                  <span>Edirne bölgesi için özel sitemiz mevcuttur:</span>
                  <a
                    href={contactConfig.edirneSiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline flex items-center gap-1 text-amber-900 hover:text-amber-800"
                  >
                    edirnemezarliktemizleme.site
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {searchResults.length > 0 ? (
                <div>
                  <p className="text-xs font-bold text-emerald-900 mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 inline" />
                    <span>Evet! Bu bölgeye düzenli kabir temizlik ve bakım hizmeti veriyoruz:</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {searchResults.slice(0, 8).map((res, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-white border border-emerald-300 text-xs font-semibold text-emerald-900 shadow-sm"
                      >
                        <MapPin className="w-3 h-3 text-emerald-600" />
                        <strong>{res.village}</strong> ({res.district} - {res.province})
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-xs text-slate-700">
                  <p className="font-semibold text-slate-900">
                    Aradığınız köy listede görünmese de Tekirdağ ve Kırklareli sınırları içindeki TÜM köylere gidiyoruz!
                  </p>
                  <p className="mt-1">
                    Lütfen WhatsApp hattımıza köyünüzün adını yazarak teyit alınız.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Top Province Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          <button
            onClick={() => handleProvinceTab("Tekirdağ")}
            className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl font-extrabold text-xs sm:text-sm transition duration-200 flex items-center gap-2 cursor-pointer ${
              activeProvince === "Tekirdağ"
                ? "bg-emerald-800 text-white shadow-lg shadow-emerald-900/20 scale-105"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Tekirdağ (11 İlçe)</span>
          </button>

          <button
            onClick={() => handleProvinceTab("Kırklareli")}
            className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl font-extrabold text-xs sm:text-sm transition duration-200 flex items-center gap-2 cursor-pointer ${
              activeProvince === "Kırklareli"
                ? "bg-emerald-800 text-white shadow-lg shadow-emerald-900/20 scale-105"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Kırklareli (8 İlçe)</span>
          </button>

          <button
            onClick={() => handleProvinceTab("Çanakkale")}
            className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl font-extrabold text-xs sm:text-sm transition duration-200 flex items-center gap-2 cursor-pointer ${
              activeProvince === "Çanakkale"
                ? "bg-emerald-800 text-white shadow-lg shadow-emerald-900/20 scale-105"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Çanakkale (Gelibolu & Eceabat)</span>
          </button>

          <button
            onClick={() => handleProvinceTab("İstanbul")}
            className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl font-extrabold text-xs sm:text-sm transition duration-200 flex items-center gap-2 cursor-pointer ${
              activeProvince === "İstanbul"
                ? "bg-emerald-800 text-white shadow-lg shadow-emerald-900/20 scale-105"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>İstanbul (Silivri & Çatalca)</span>
          </button>

          <button
            onClick={() => handleProvinceTab("Edirne")}
            className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl font-extrabold text-xs sm:text-sm transition duration-200 flex items-center gap-2 cursor-pointer ${
              activeProvince === "Edirne"
                ? "bg-amber-600 text-white shadow-lg shadow-amber-900/20 scale-105"
                : "bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100"
            }`}
          >
            <ExternalLink className="w-4 h-4" />
            <span>Edirne (Özel Sitemiz ↗)</span>
          </button>
        </div>

        {/* View when Edirne is active: Dedicated Redirect Section */}
        {activeProvince === "Edirne" ? (
          <div className="rounded-3xl bg-gradient-to-br from-amber-50 via-white to-emerald-50 border-2 border-amber-300 p-8 sm:p-12 shadow-lg text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-300">
              <ExternalLink className="w-4 h-4 text-amber-700" />
              <span>Özel Edirne Web Sitemiz</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Edirne ve Tüm İlçeleri İçin Özel Sitemiz Yayında!
            </h3>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Edirne Merkez, Keşan, Uzunköprü, Havsa, İpsala, Meriç, Lalapaşa, Süloğlu ve Enez&apos;deki
              250&apos;den fazla köy mezarlığı için özel olarak hazırladığımız web sitemizi ziyaret
              edebilir, doğrudan Edirne ekibimizden teklif alabilirsiniz.
            </p>

            <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto py-2">
              {edirneRedirectInfo.districts.map((dName, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-white border border-amber-200 text-xs font-semibold text-slate-700 shadow-sm"
                >
                  📍 {dName}
                </span>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={contactConfig.edirneSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-base shadow-lg shadow-amber-900/20 transition hover:scale-105"
              >
                <span>edirnemezarliktemizleme.site Sitesine Git</span>
                <ExternalLink className="w-5 h-5" />
              </a>

              <a
                href={contactConfig.getWhatsappUrl("Merhaba, Edirne'deki kabrimiz için trakyamezarliktemizleme.site üzerinden bilgi almak istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-sm transition"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp ile Buradan Yaz</span>
              </a>
            </div>
          </div>
        ) : (
          /* View for Tekirdağ and Kırklareli */
          <>
            {/* District Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {districtsInProvince.map((dist) => {
                const isSelected = selectedDistrict.slug === dist.slug;
                return (
                  <button
                    key={dist.slug}
                    onClick={() => setSelectedDistrict(dist)}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-emerald-800 text-white shadow-md shadow-emerald-900/20 scale-105"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {dist.name}
                  </button>
                );
              })}
            </div>

            {/* Selected District Villages Display */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200/80 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-emerald-700" />
                    <span>{selectedDistrict.name} ve Bağlı Köyleri</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {selectedDistrict.name} bölgesinde yaklaşık {selectedDistrict.allVillagesCount} köy ve mahalle mezarlığına aktif mobil araçlarımızla hizmet sunulmaktadır.
                  </p>
                </div>
                <a
                  href={contactConfig.getWhatsappUrl(`Merhaba, ${selectedDistrict.province} ${selectedDistrict.name} bölgesinde mezar bakım ve temizlik hizmeti almak istiyorum.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold transition"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{selectedDistrict.name} İçin Fiyat Al</span>
                </a>
              </div>

              {/* Villages Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
                {selectedDistrict.popularVillages.map((village, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:border-emerald-400 hover:text-emerald-900 hover:bg-emerald-50/50 transition duration-150 flex items-center gap-1.5"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                    <span className="truncate">{village}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
                <span>* Listede yer almayan tüm mezarlık ve mevkiler için de hizmet verilmektedir.</span>
                <span className="font-semibold text-emerald-800">Yerinde Profesyonel Ekipman & Mobil Hizmet</span>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
