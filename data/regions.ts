export interface DistrictInfo {
  name: string;
  slug: string;
  blogSlug: string;
  province: "Tekirdağ" | "Kırklareli" | "Edirne";
  isCenter?: boolean;
  popularVillages: string[];
  allVillagesCount: number;
}

export const trakyaDistrictsData: DistrictInfo[] = [
  // ==============================================================
  // 1. TEKİRDAĞ (11 RESMİ İLÇE)
  // ==============================================================
  {
    name: "Süleymanpaşa (Tekirdağ Merkez)",
    slug: "suleymanpasa",
    blogSlug: "suleymanpasa-mezar-bakimi-ve-kabir-temizligi",
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
    blogSlug: "corlu-mezar-bakimi-ve-kabir-temizligi",
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
    blogSlug: "cerkezkoy-mezar-bakimi-ve-kabir-temizligi",
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
    blogSlug: "kapakli-mezar-bakimi-ve-kabir-temizleme",
    province: "Tekirdağ",
    popularVillages: [
      "Karaağaç", "Kazakgölü", "Yanıkağıl", "Bahçeağıl", "Pınarca", "Karlı",
      "Uzunhacı", "İsmetpaşa", "Cumhuriyet", "Atatürk", "Bahçelievler"
    ],
    allVillagesCount: 14
  },
  {
    name: "Ergene",
    slug: "ergene",
    blogSlug: "ergene-mezar-bakimi-ve-kabir-temizligi",
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
    blogSlug: "malkara-mezar-bakimi-ve-koy-kabir-temizligi",
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
    blogSlug: "saray-mezar-bakimi-ve-kabir-temizligi",
    province: "Tekirdağ",
    popularVillages: [
      "Büyükyoncalı", "Küçükyoncalı", "Beyazköy", "Çukuryurt", "Edirköy", "Göçerler",
      "Güngörmez", "Kadıköy", "Karabürçek", "Kavacık", "Kurtdere", "Sefaalan", "Sinanlı", "Sofular", "Yuvalı"
    ],
    allVillagesCount: 22
  },
  {
    name: "Hayrabolu",
    slug: "hayrabolu",
    blogSlug: "hayrabolu-mezar-bakimi-ve-kabir-temizleme",
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
    blogSlug: "sarkoy-mezar-bakimi-ve-mermer-temizligi",
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
    blogSlug: "muratli-mezar-bakimi-ve-kabir-temizleme",
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
    blogSlug: "marmaraereglisi-mezar-bakimi-ve-temizligi",
    province: "Tekirdağ",
    popularVillages: [
      "Yeniçiftlik", "Sultanköy", "Çeşmeli", "Türkmenli", "Yakupçelebi", "Dereağzı", "Kamaradere"
    ],
    allVillagesCount: 10
  },

  // ==============================================================
  // 2. KIRKLARELİ (8 RESMİ İLÇE)
  // ==============================================================
  {
    name: "Kırklareli Merkez",
    slug: "kirklareli-merkez",
    blogSlug: "kirklareli-merkez-mezar-bakimi-ve-temizligi",
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
    blogSlug: "luleburgaz-mezar-bakimi-ve-kabir-temizleme",
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
    blogSlug: "babaeski-mezar-bakimi-ve-kabir-temizligi",
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
    blogSlug: "vize-mezar-bakimi-ve-koy-kabir-temizleme",
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
    blogSlug: "pinarhisar-mezar-bakimi-ve-kabir-temizleme",
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
    blogSlug: "demirkoy-mezar-bakimi-ve-igneada-kabir-temizleme",
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
    blogSlug: "pehlivankoy-mezar-bakimi-ve-kabir-temizleme",
    province: "Kırklareli",
    popularVillages: [
      "Doğanca", "Hıdırca", "İmampazarı", "Kumköy", "Kuştepe", "Yeşilova"
    ],
    allVillagesCount: 8
  },
  {
    name: "Kofçaz",
    slug: "kofcaz",
    blogSlug: "kofcaz-mezar-bakimi-ve-koy-kabir-temizleme",
    province: "Kırklareli",
    popularVillages: [
      "Ahmetler", "Beyci", "Dayıncık", "Devletliağaç", "Elmacık", "Gözebaşı",
      "Karasakallı", "Malkoçlar", "Tatlıpınar", "Terzidere", "Topçular", "Yukarıkanara"
    ],
    allVillagesCount: 16
  }
];

// ==============================================================
// 3. EDİRNE (9 RESMİ İLÇE - ÖZEL KARDEŞ SİTE YÖNLENDİRMESİ)
// ==============================================================
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
