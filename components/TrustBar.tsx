import { MapPin, Camera, Sparkles, ShieldCheck } from "lucide-react";

export default function TrustBar() {
  const stats = [
    {
      icon: MapPin,
      title: "Tüm Trakya Köyleri",
      desc: "Tekirdağ ve Kırklareli'nin her köyüne kendi araç ve ekipmanımızla ulaşım",
    },
    {
      icon: Camera,
      title: "Fotoğrafla Hızlı Fiyat",
      desc: "Mezar resmini atın ortalama fiyat verelim veya biz gidip çekelim",
    },
    {
      icon: ShieldCheck,
      title: "Ödeme Sonrası Güven",
      desc: "Durum netleşip ödeme alındıktan sonra planlanan günde temizliğe başlanır",
    },
    {
      icon: Sparkles,
      title: "HD Videolu Teslimat",
      desc: "İşlem öncesi ve sonrası detaylı video/fotoğraflar WhatsApp'tan teslim edilir",
    },
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
