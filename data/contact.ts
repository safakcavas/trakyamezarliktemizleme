export const contactConfig = {
  brandName: "Trakya Mezar Bakım & Temizlik",
  domain: "trakyamezarliktemizleme.site",
  edirneSiteUrl: "https://edirnemezarliktemizleme.site",
  phone: "+90 530 230 15 22",
  phoneRaw: "905302301522",
  whatsappNumber: "905302301522",
  email: "bilgi@trakyamezarliktemizleme.site",
  location: "Tekirdağ, Kırklareli, Çorlu, Lüleburgaz / Tüm Trakya İlçe ve Köyleri",
  workingHours: "Haftanın 7 Günü: 08:00 - 20:00",
  serviceNote: "Tekirdağ, Kırklareli, Çorlu, Lüleburgaz, Çerkezköy ve yüzlerce Trakya köyüne kendi araç ve su tankımızla yerinde hizmet veriyoruz. Edirne bölgesi için özel sitemiz mevcuttur.",
  getWhatsappUrl: (customMessage?: string) => {
    const defaultMsg = "Merhaba, trakyamezarliktemizleme.site üzerinden ulaşıyorum. Trakya bölgesindeki mezar bakım ve temizlik hizmetiniz hakkında bilgi ve fiyat teklifi almak istiyorum.";
    const text = encodeURIComponent(customMessage || defaultMsg);
    return `https://wa.me/905302301522?text=${text}`;
  }
};
