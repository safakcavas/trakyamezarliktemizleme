export interface PackageItem {
  id: string;
  name: string;
  badge?: string;
  period: string;
  price: string;
  oldPrice?: string;
  priceNote?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export const packagesData: PackageItem[] = [
  {
    id: "standart-bakim",
    name: "Standart Bakım & Temizlik",
    period: "1 Ziyaret (Tek Seferlik Uygulama)",
    price: "7.000 ₺'den",
    oldPrice: "8.500 ₺",
    priceNote: "Tek kabir için 1 ziyaret başlangıç fiyatıdır",
    description: "İhmal edilmiş veya genel temizlik ihtiyacı olan kabirler için 1 ziyarette kapsamlı temizlik ve bakım.",
    features: [
      "1 tek ziyarette eksiksiz kabir bakımı",
      "Yabani ot ve dikenlerin kökten temizlenmesi",
      "Mezar taşı ve mermerlerin özel solüsyonla yıkanması",
      "Kabir toprağının bellenmesi ve havalandırılması",
      "Mezar etrafı çevre ve kuru yaprak temizliği",
      "İşlem öncesi ve sonrası yüksek çözünürlüklü video & fotoğraf"
    ],
    ctaText: "Bu Paketi Seç"
  },
  {
    id: "cicekli-kapsamli",
    name: "Kapsamlı Bakım & Çiçeklendirme",
    badge: "En Çok Tercih Edilen",
    period: "1 Ziyaret (Çiçekli & Detaylı)",
    price: "9.500 ₺'den",
    oldPrice: "11.500 ₺",
    priceNote: "Canlı çiçek dikimi ve can suyu dahil",
    description: "Standart temizliğe ek olarak mevsimlik canlı çiçek dikimi, toprak zenginleştirme ve yazı rötuşu.",
    features: [
      "1 tek ziyarette standart bakımın tüm aşamaları",
      "Mevsime uygun dayanıklı canlı çiçek dikimi (sardunya, kadife vb.)",
      "Derinlemesine can suyu ve ilk gübre takviyesi",
      "Mezar baş taşı silik yazılarının kontrolü ve yaldız rötuşları",
      "Mermer parlatma ve kireç sökücü özel uygulama",
      "WhatsApp üzerinden detaylı öncesi/sonrası video teslimi"
    ],
    isPopular: true,
    ctaText: "Çiçekli Paketi Seç"
  },
  {
    id: "full-yenileme",
    name: "Full Yenileme, Yazı Boyama & Onarım",
    badge: "Tam Yenileme",
    period: "1 Ziyaret (A'dan Z'ye Eksiksiz)",
    price: "12.500 ₺'den",
    oldPrice: "15.000 ₺",
    priceNote: "Altın yaldız hat boyama & derz tamiratı dahil",
    description: "Yıllarca bakılmamış mezarlar için 1 ziyarette baş taşı yazılarının boyanması ve mermer onarımı.",
    features: [
      "1 tek ziyarette tüm standart temizlik ve toprak havalandırması",
      "Mezar baş taşındaki tüm isim, tarih ve duaların kalıcı altın yaldızla boyanması",
      "Ayrılmış veya çatlamış mermer derzlerinin suya dayanıklı beyaz dolguyla onarımı",
      "Mevsimlik canlı çiçek dikimi ve elenmiş kaliteli bahçe toprağı takviyesi",
      "Mermer yüzeyine koruyucu su itici cila uygulaması",
      "Detaylı HD video ve fotoğraf raporlaması"
    ],
    ctaText: "Tam Yenileme Başlat"
  }
];
