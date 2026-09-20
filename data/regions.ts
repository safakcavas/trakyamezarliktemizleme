export interface DistrictInfo {
  name: string;
  slug: string;
  province: "Tekirdağ" | "Kırklareli" | "Edirne" | "Çanakkale" | "İstanbul";
  isCenter?: boolean;
  popularVillages: string[];
  allVillagesCount: number;
}

export const trakyaDistrictsData: DistrictInfo[] = [
  // ==========================================
  // 1. TEKİRDAĞ (11 RESMİ İLÇE - BÜYÜKŞEHİR)
  // ==========================================
  {
    name: "Süleymanpaşa (Tekirdağ Merkez)",
    slug: "suleymanpasa",
    province: "Tekirdağ",
    isCenter: true,
    popularVillages: [
      "Kumbağ", "Barbaros", "Banarlı", "Karacakılavuz", "Ferhadanlı", "Kaşıkçı",
      "Dedebeyli", "Osmanlı", "Köseilyas", "Yukarıkılıçlı", "Bıyıkali", "Naip",
      "Işıklar", "Yazır", "Gündüzlü", "Seymenli", "Yağcı", "İnecik", "Karaevli", "Semrekli"
    ],
    allVillagesCount: 73
  },
  {
    name: "Çorlu",
    slug: "corlu",
    province: "Tekirdağ",
    popularVillages: [
      "Önerler", "Seymen", "Yenice", "Şahpaz", "Türkgücü", "Dereoğlu",
      "Maksutlu", "Sarılar", "Zafer", "Cumhuriyet", "Alipaşa", "Hatip", "Hıdırağa"
    ],
    allVillagesCount: 26
  },
  {
    name: "Çerkezköy",
    slug: "cerkezkoy",
    province: "Tekirdağ",
    popularVillages: [
      "Kızılpınar", "Veliköy", "Bağlık", "Fevzipaşa", "Gazi Mustafa Kemal",
      "İstasyon", "Yıldırım Beyazıt", "Cumhuriyet"
    ],
    allVillagesCount: 12
  },
  {
    name: "Kapaklı",
    slug: "kapakli",
    province: "Tekirdağ",
    popularVillages: [
      "Karaağaç", "Yanıkağıl", "Bahçeağıl", "Pınarca", "Karlıköy", "Uzunhacı",
      "İsmet Paşa", "İnönü", "Cumhuriyet", "Atatürk"
    ],
    allVillagesCount: 14
  },
  {
    name: "Ergene",
    slug: "ergene",
    province: "Tekirdağ",
    popularVillages: [
      "Velimeşe", "Misinli", "Ulaş", "Vakıflar", "Ahimehmet", "Bakırca",
      "İğneler", "Karamehmet", "Kırkgöz", "Pınarbaşı", "Yeşiltepe", "Sağlık", "Cumhuriyet"
    ],
    allVillagesCount: 17
  },
  {
    name: "Malkara",
    slug: "malkara",
    province: "Tekirdağ",
    popularVillages: [
      "Kozyörük", "Balabancık", "Sağlamtaş", "Ballı", "Batkın", "Camiatik", "Çavuşköy",
      "Çınarlıdere", "Danışment", "Develi", "Doğanköy", "Elmabağ", "Gözsüz", "Hemit",
      "İbribey", "İbrice", "Karacagür", "Kürtüllü", "Mestanlar", "Sarnıç", "Teteköy", "Yaylagöne", "Yörücek"
    ],
    allVillagesCount: 77
  },
  {
    name: "Saray",
    slug: "saray",
    province: "Tekirdağ",
    popularVillages: [
      "Beyazköy", "Büyükyoncalı", "Çayla", "Çukuryurt", "Demirler", "Edirköy",
      "Güngörmez", "Kavacık", "Küçükyoncalı", "Kurtdere", "Safaköy", "Süleymaniye", "Yeniköy", "Bahçedere", "Ayvacık"
    ],
    allVillagesCount: 29
  },
  {
    name: "Hayrabolu",
    slug: "hayrabolu",
    province: "Tekirdağ",
    popularVillages: [
      "Çerkezmüsellim", "Şalgamlı", "Avluobası", "Aydınlar", "Büyükkarakarlı", "Canhıdır",
      "Çıkrıkçı", "Dambaslar", "Delemenler", "Hedeyli", "Kadriye", "Kandamış",
      "Karababa", "Karayahşi", "Kılıçlar", "Lahana", "Ördeklidere", "Subaşı", "Temrezli"
    ],
    allVillagesCount: 46
  },
  {
    name: "Şarköy",
    slug: "sarkoy",
    province: "Tekirdağ",
    popularVillages: [
      "Mürefte", "Hoşköy", "Eriklice", "Uçmakdere", "Gaziköy", "Tepeköy",
      "Kirazlı", "Yeniköy", "Çengelli", "Çınarlı", "Gölcük", "İğdebağları", "Kocaali", "Beyoğlu"
    ],
    allVillagesCount: 31
  },
  {
    name: "Muratlı",
    slug: "muratli",
    province: "Tekirdağ",
    popularVillages: [
      "Aşağısevindikli", "Yukarısevindikli", "Aydınköy", "Balabanlı", "Ballıhoca", "Hanoğlu",
      "İnanlı", "Kırkkepenekli", "Müsellim", "Yenibecer", "Yeşilsırt", "Yurtbekler"
    ],
    allVillagesCount: 20
  },
  {
    name: "Marmaraereğlisi",
    slug: "marmaraereglisi",
    province: "Tekirdağ",
    popularVillages: [
      "Yeniçiftlik", "Sultanköy", "Çeşmeli", "Türkmenli", "Yakupçelebi", "Dereağzı", "Kamaradere"
    ],
    allVillagesCount: 10
  },

  // ==========================================
  // 2. KIRKLARELİ (8 RESMİ İLÇE)
  // ==========================================
  {
    name: "Kırklareli Merkez",
    slug: "kirklareli-merkez",
    province: "Kırklareli",
    isCenter: true,
    popularVillages: [
      "İnece", "Kavaklı", "Üsküp", "Ahmetçe", "Armağan", "Asılbeyli", "Beypınar",
      "Çitağı", "Değirmencik", "Dereköy", "Dokuzhöyük", "Düzorman", "Erikler",
      "Geçitağzı", "Kapaklı", "Karadere", "Karakoç", "Kızılcıkdere", "Kocahıdır",
      "Koruköy", "Kuzulu", "Paşayeri", "Yoğuntaş", "Yürükbayır"
    ],
    allVillagesCount: 40
  },
  {
    name: "Lüleburgaz",
    slug: "luleburgaz",
    province: "Kırklareli",
    popularVillages: [
      "Büyükkarıştıran", "Ahmetbey", "Evrensekiz", "Hamitabat", "Sakızköy", "Kırıkköy",
      "Akçaköy", "Alacaoğlu", "Ayvalı", "Celaliye", "Ceylanköy", "Çengelli", "Çiftlikköy",
      "Davutlu", "Düğüncübaşı", "Emirali", "Karaağaç", "Ovacık", "Sarıcaali", "Tatarköy", "Turgutbey", "Yenibedir"
    ],
    allVillagesCount: 36
  },
  {
    name: "Babaeski",
    slug: "babaeski",
    province: "Kırklareli",
    popularVillages: [
      "Alpullu", "Büyükmandıra", "Karahalil", "Ağayeri", "Çengerli", "Çavuşköy",
      "Düğüncülü", "Erikleryurdu", "Hazinedar", "Kadıköy", "Katranca", "Kuzuçardağı",
      "Minnetler", "Mutlu", "Nacak", "Oruçlu", "Pancarköy", "Sofuhalil", "Taşağıl", "Yeniköy"
    ],
    allVillagesCount: 31
  },
  {
    name: "Vize",
    slug: "vize",
    province: "Kırklareli",
    popularVillages: [
      "Kıyıköy", "Çakıllı", "Akpınar", "Aksicim", "Balkaya", "Çüvenli", "Değirmencik",
      "Düzova", "Evrenli", "Hamidiye", "Hasbuğa", "Kışlacık", "Kızılağaç", "Kömürköy",
      "Küçükyayla", "Okçular", "Pazarlı", "Sergen", "Soğucak"
    ],
    allVillagesCount: 24
  },
  {
    name: "Pınarhisar",
    slug: "pinarhisar",
    province: "Kırklareli",
    popularVillages: [
      "Kaynarca", "Akören", "Ataköy", "Cevizköy", "Çayırdere", "Erenler",
      "Evciler", "Hacıfakılı", "Kurudere", "Poyralı", "Sütlüce", "Tozaklı", "Yenice"
    ],
    allVillagesCount: 14
  },
  {
    name: "Demirköy",
    slug: "demirkoy",
    province: "Kırklareli",
    popularVillages: [
      "İğneada", "Avcılar", "Balaban", "Beğendik", "Boztaş", "Gökyaka",
      "Hamdibey", "İncesırt", "Karahasan", "Limanköy", "Sarpdere", "Sislioba", "Yeşilce"
    ],
    allVillagesCount: 16
  },
  {
    name: "Pehlivanköy",
    slug: "pehlivankoy",
    province: "Kırklareli",
    popularVillages: [
      "Doğanca", "Hıdırca", "İmampazarı", "Kumköy", "Kuştepe", "Yeşilova"
    ],
    allVillagesCount: 8
  },
  {
    name: "Kofçaz",
    slug: "kofcaz",
    province: "Kırklareli",
    popularVillages: [
      "Ahmetler", "Beyci", "Dayıncık", "Devletliağaç", "Elmacık", "Gözebaşı",
      "Karasakallı", "Malkoçlar", "Tatlıpınar", "Terzidere", "Topçular", "Yukarıkanara"
    ],
    allVillagesCount: 16
  },

  // ========================================================
  // 3. ÇANAKKALE (TRAKYA / GELİBOLU YARIMADASI RESMİ İLÇELERİ)
  // ========================================================
  {
    name: "Gelibolu",
    slug: "gelibolu",
    province: "Çanakkale",
    popularVillages: [
      "Bolayır", "Evreşe", "Kavakköy", "Güneyli", "Ilgardere", "Karainebeyli",
      "Ocaklı", "Sütlüce", "Yeniköy", "Bayırköy", "Cevizli", "Değirmendüzü", "Fındıklı", "Tayfur"
    ],
    allVillagesCount: 26
  },
  {
    name: "Eceabat",
    slug: "eceabat",
    province: "Çanakkale",
    popularVillages: [
      "Alçıtepe", "Behramlı", "Bigali", "Büyükanafarta", "Kilitbahir",
      "Küçükanafarta", "Seddülbahir", "Kumköy", "Yalova", "Yolağzı"
    ],
    allVillagesCount: 12
  },

  // ========================================================
  // 4. İSTANBUL (TRAKYA / AVRUPA YAKASI BATI İLÇELERİ)
  // ========================================================
  {
    name: "Silivri",
    slug: "silivri",
    province: "İstanbul",
    popularVillages: [
      "Selimpaşa", "Gümüşyaka", "Değirmenköy", "Çanta", "Ortaköy", "Kavaklı",
      "Beyciler", "Büyükçavuşlu", "Fener", "Gazitepe", "Kadıköy", "Kurfallı", "Sayalar", "Seymen"
    ],
    allVillagesCount: 35
  },
  {
    name: "Çatalca",
    slug: "catalca",
    province: "İstanbul",
    popularVillages: [
      "Binkılıç", "Karacaköy", "Çakıl", "Muratbey", "Ormanlı", "Yalıköy",
      "Çiftlikköy", "Dağyenice", "Ferhatpaşa", "Gökçeali", "İzzettin", "Kestanelik", "Oklalı", "Subaşı"
    ],
    allVillagesCount: 39
  }
];

// ========================================================
// 5. EDİRNE (9 RESMİ İLÇE - ÖZEL KARDEŞ SİTE YÖNLENDİRMESİ)
// ========================================================
export const edirneRedirectInfo = {
  provinceName: "Edirne",
  siteUrl: "https://edirnemezarliktemizleme.site",
  description: "Edirne Merkez ve tüm 8 ilçesindeki (Keşan, Uzunköprü, Havsa, İpsala, Meriç, Lalapaşa, Süloğlu, Enez) 253 köy mezarlığı için özel kardeş sitemiz yayındadır.",
  districts: [
    "Edirne Merkez", "Keşan", "Uzunköprü", "Havsa", "İpsala",
    "Meriç", "Lalapaşa", "Süloğlu", "Enez"
  ],
  totalVillages: 253
};
