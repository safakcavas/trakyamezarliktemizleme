export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  benefits: string[];
  tag?: string;
  startingPrice: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "mermer-temizligi",
    title: "Mezar Taşı ve Mermer Beyazlatma",
    startingPrice: "4.500 ₺'den",
    shortDesc: "Yosun, çamur, is ve kireç lekelerinin mermere zarar vermeyen özel solüsyonlarla derinlemesine temizlenmesi.",
    fullDesc: "Yıllar içinde Trakya'nın sert kış ve nemli hava koşulları nedeniyle kararan, yosun bağlayan mermer ve granit mezar taşlarını asitsiz, taş dostu özel formüllerle fırçalayarak 1 ziyarette ilk günkü beyaz ve parlak görünümüne kavuşturuyoruz.",
    iconName: "Sparkles",
    benefits: [
      "1 ziyarette tamamlanan derinlemesine temizlik",
      "Asitsiz, mermeri aşındırmayan profesyonel solüsyonlar",
      "Yosun, liken ve kireç tabakasının tamamen arındırılması",
      "Mermer yüzeyine su itici koruyucu uygulama"
    ],
    tag: "En Çok Tercih Edilen"
  },
  {
    id: "yabani-ot-temizligi",
    title: "Yabani Ot Temizliği ve Toprak Bakımı",
    startingPrice: "3.500 ₺'den",
    shortDesc: "Kabir üstündeki ve çevresindeki köklü yabani ot, çalı ve dikenlerin kökünden temizlenmesi.",
    fullDesc: "Zamanla mezarı saran, görünümü bozan ve mezar yapısına zarar verebilen yabani otları kökleriyle birlikte temizliyor; toprağı havalandırıp taze gübreli bahçe toprağı takviyesi yapıyoruz.",
    iconName: "Trees",
    benefits: [
      "1 ziyarette derin kök temizliği ve ayıklama",
      "Toprağın bellenmesi, havalandırılması ve elenmesi",
      "Çökme yapan mezarlar için kaliteli bahçe toprağı takviyesi",
      "Mezar etrafındaki yürüyüş yollarının temizlenmesi"
    ]
  },
  {
    id: "ciceklendirme",
    title: "Mevsimlik Çiçeklendirme ve Ağaç Budama",
    startingPrice: "3.800 ₺'den",
    shortDesc: "Trakya iklimine dayanıklı taze çiçek dikimi ve sarkan ağaç/çalı dallarının budanması.",
    fullDesc: "Trakya'nın soğuk kışına ve rüzgarlı şartlarına dayanıklı çiçekler (sardunya, kadife çiçeği, petunya, kasımpatı, lavanta vb.) dikiyor, mezara gölge yapan veya taşlara sürtünen ağaç dallarını özenle buduyoruz.",
    iconName: "Flower2",
    benefits: [
      "Mevsime uygun uzun ömürlü canlı çiçekler",
      "Garantili derin can suyu ve ilk gübreleme",
      "Görüşü kapatan yabani çalı ve ağaç dallarının budanması",
      "Kuru yaprak ve kırık dalların sahadan uzaklaştırılması"
    ],
    tag: "Önerilen"
  },
  {
    id: "yazi-boyama",
    title: "Mezar Taşı Yazılarının Boyanması",
    startingPrice: "2.500 ₺'den",
    shortDesc: "Silinen veya solan isim, doğum-ölüm tarihi ve duaların kalıcı altın sarısı veya siyah boyayla yenilenmesi.",
    fullDesc: "Rüzgar ve yağmurla silinmiş olan baş taşı yazıları, mermer için özel üretilmiş hava şartlarına dayanıklı yaldız (altın sarısı) veya siyah kalıcı boya ile hat sanatı hassasiyetiyle tek tek doldurulur.",
    iconName: "PenTool",
    benefits: [
      "Güneşe ve dona dayanıklı özel mermer yazı boyası",
      "Kalıcı altın sarısı yaldız veya siyah dolgu",
      "Ayet, dua ve isimlerin net ve okunaklı hale getirilmesi",
      "Taş yüzeyinin boya öncesi temizlenip hazırlanması"
    ]
  },
  {
    id: "mermer-tamir",
    title: "Mermer Tamiratı ve Derz Dolgusu",
    startingPrice: "3.500 ₺'den",
    shortDesc: "Ayrılan derzlerin, kırık veya çatlak mermerlerin suya dayanıklı harç ile sağlamlaştırılması.",
    fullDesc: "Kışın don olayları nedeniyle ayrılan mermer birleşim yerleri su alıp mezarın dağılmasına yol açabilir. Çatlakları ve açık derzleri elastik beyaz mermer dolgusuyla yenileyerek kabri koruma altına alıyoruz.",
    iconName: "Hammer",
    benefits: [
      "Su sızdırmaz antibakteriyel beyaz derz uygulaması",
      "Oynamış veya yerinden kaymış mermerlerin sabitlenmesi",
      "Kış don çatlaklarına karşı kalıcı yalıtım",
      "Toprak çökmesinden kaynaklı eğilmelerin düzeltilmesi"
    ]
  },
  {
    id: "agac-budama",
    title: "Ağaç Budama & Çevre Düzenleme",
    startingPrice: "1.800 ₺'den",
    shortDesc: "Mezarın üzerine sarkan dalların kesilmesi, kabir etrafının taş ve yapraklardan arındırılması.",
    fullDesc: "Mezar çevresindeki kontrolsüz büyüyen yabani çalıları, mermere sürtünen ve gölge yaparak yosunlaşmaya neden olan ağaç dallarını profesyonelce buduyor ve sahadan temizliyoruz.",
    iconName: "Trees",
    benefits: [
      "Mezar yapısına baskı yapan kök ve dalların budanması",
      "Etraftaki çöp, taş ve yaprakların temizlenmesi",
      "Kabir etrafı yürüyüş yolunun açılması",
      "Geniş açılı çevre temizliği fotoğrafı"
    ]
  },
  {
    id: "bayram-ozel",
    title: "Bayram ve Özel Gün Ziyareti Bakımı",
    startingPrice: "8.500 ₺'den",
    shortDesc: "Ramazan Bayramı, Kurban Bayramı veya anma günleri öncesinde 1 ziyarette tam kapsamlı hazırlık.",
    fullDesc: "Bayram sabahlarında ziyaretlerinize hazır olması veya siz uzaktayken sevdiklerinizin kabrinin tertemiz karşılaması için arife günü veya belirlediğiniz tarihte 1 ziyarette derinlemesine temizlik ve çiçeklendirme yapılır.",
    iconName: "CalendarHeart",
    benefits: [
      "1 ziyarette eksiksiz bayram temizliği",
      "Bayram sabahı hazır çiçeklendirilmiş ve yıkanmış kabir",
      "Siz memlekete geldiğinizde hazır ve huzur veren görünüm",
      "İşlem tamamlandığında WhatsApp ile video teslimi"
    ],
    tag: "Özel Günler"
  },
  {
    id: "gurbetci-kapsamli",
    title: "Gurbetçilere Özel Kapsamlı Bakım",
    startingPrice: "9.500 ₺'den",
    shortDesc: "Yurt dışında veya şehir dışında yaşayanlar için 1 ziyarette kökten uca tüm bakım ve video raporlama.",
    fullDesc: "Almanya, Hollanda, Avusturya, Fransa veya İstanbul'da yaşayan hemşehrilerimiz için Trakya köylerindeki mezarlara gidiyor, otları ayıklıyor, mermeri beyazlatıyor, çiçek dikiyor ve detaylı video çekip gönderiyoruz.",
    iconName: "ShieldCheck",
    benefits: [
      "1 ziyarette A'dan Z'ye komple kabir düzenleme",
      "İşlem öncesi ve sonrası yüksek çözünürlüklü video",
      "Canlı çiçek dikimi ve can suyu",
      "Yurtdışı IBAN / Kolay havale seçeneği"
    ],
    tag: "Gurbetçilere Özel"
  }
];
