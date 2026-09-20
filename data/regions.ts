export interface DistrictInfo {
  name: string;
  slug: string;
  province: "Tekirdağ" | "Kırklareli" | "Edirne";
  isCenter?: boolean;
  popularVillages: string[];
  allVillagesCount: number;
}

export const trakyaDistrictsData: DistrictInfo[] = [
  // --- TEKİRDAĞ İLÇELERİ ---
  {
    name: "Süleymanpaşa (Tekirdağ Merkez)",
    slug: "suleymanpasa",
    province: "Tekirdağ",
    isCenter: true,
    popularVillages: [
      "Kumbağ", "Barbaros", "Banarlı", "Karacakılavuz", "Ferhadanlı", "Kaşıkçı",
      "Dedebeyli", "Osmanlı", "Köseilyas", "Yukarıkılıçlı", "Bıyıkali", "Naip",
      "Işıklar", "Yazır", "Gündüzlü", "Seymenli", "Köseilyas", "Yağcı"
    ],
    allVillagesCount: 56
  },
  {
    name: "Çorlu",
    slug: "corlu",
    province: "Tekirdağ",
    popularVillages: [
      "Yenice", "Seymen", "Şahpaz", "Türkgücü", "Önerler", "Dereoğlu",
      "Maksutlu", "Sarılar", "Zafer", "Cumhuriyet", "Alipaşa", "Hatip"
    ],
    allVillagesCount: 16
  },
  {
    name: "Çerkezköy",
    slug: "cerkezkoy",
    province: "Tekirdağ",
    popularVillages: [
      "Kızılpınar", "Veliköy", "Bağlık", "Fevzipaşa", "Gazi Mustafa Kemal",
      "İstasyon", "Yıldırım Beyazıt"
    ],
    allVillagesCount: 10
  },
  {
    name: "Kapaklı",
    slug: "kapakli",
    province: "Tekirdağ",
    popularVillages: [
      "Karaağaç", "Yanıkağıl", "Bahçeağıl", "Pınarca", "Karlıköy", "Uzunhacı"
    ],
    allVillagesCount: 14
  },
  {
    name: "Ergene",
    slug: "ergene",
    province: "Tekirdağ",
    popularVillages: [
      "Misinli", "Ulaş", "Vakıflar", "Velimeşe", "Ahimehmet", "Bakırca",
      "İğneler", "Karamehmet", "Kırkgöz", "Pınarbaşı", "Yeşiltepe"
    ],
    allVillagesCount: 17
  },
  {
    name: "Malkara",
    slug: "malkara",
    province: "Tekirdağ",
    popularVillages: [
      "Balabancık", "Ballı", "Batkın", "Camiatik", "Çavuşköy", "Çınarlıdere",
      "Danışment", "Develi", "Doğanköy", "Elmabağ", "Gözsüz", "Hemit",
      "İbribey", "İbrice", "Karacagür", "Kozyörük", "Kürtüllü", "Mestanlar",
      "Sağlamtaş", "Sarnıç", "Teteköy", "Yaylagöne", "Yörücek"
    ],
    allVillagesCount: 77
  },
  {
    name: "Saray",
    slug: "saray",
    province: "Tekirdağ",
    popularVillages: [
      "Beyazköy", "Büyükyoncalı", "Çayla", "Çukuryurt", "Demirler", "Edirköy",
      "Güngörmez", "Kavacık", "Küçükyoncalı", "Kurtdere", "Safaköy", "Sülaymaniye", "Yeniköy"
    ],
    allVillagesCount: 29
  },
  {
    name: "Hayrabolu",
    slug: "hayrabolu",
    province: "Tekirdağ",
    popularVillages: [
      "Avluobası", "Aydınlar", "Büyükkarakarlı", "Canhıdır", "Çerkezmüsellim",
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
      "Eriklice", "Hoşköy", "Mürefte", "Uçmakdere", "Gaziköy", "Tepeköy",
      "Kirazlı", "Yeniköy", "Çengelli", "Çınarlı", "Gölcük", "İğdebağları", "Kocaali"
    ],
    allVillagesCount: 31
  },
  {
    name: "Muratlı",
    slug: "muratli",
    province: "Tekirdağ",
    popularVillages: [
      "Aşağısevindikli", "Aydınköy", "Balabanlı", "Ballıhoca", "Hanoğlu", "İnanlı",
      "Kırkkepenekli", "Müsellim", "Yenibecer", "Yukarısevindikli", "Yeşilsırt"
    ],
    allVillagesCount: 20
  },
  {
    name: "Marmaraereğlisi",
    slug: "marmaraereglisi",
    province: "Tekirdağ",
    popularVillages: [
      "Yeniçiftlik", "Sultanköy", "Çeşmeli", "Türkmenli", "Yakupçelebi", "Dereağzı"
    ],
    allVillagesCount: 10
  },

  // --- KIRKLARELİ İLÇELERİ ---
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
      "Ahmetbey", "Büyükkarıştıran", "Evrensekiz", "Akçaköy", "Alacaoğlu", "Ayvalı",
      "Celaliye", "Ceylanköy", "Çengelli", "Çiftlikköy", "Davutlu", "Düğüncübaşı",
      "Emirali", "Hamitabat", "Karaağaç", "Kırıkköy", "Ovacık", "Sakızköy",
      "Sarıcaali", "Tatarköy", "Turgutbey", "Yenibedir"
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
  }
];

export const edirneRedirectInfo = {
  provinceName: "Edirne",
  siteUrl: "https://edirnemezarliktemizleme.site",
  description: "Edirne Merkez, Keşan, Uzunköprü, Havsa, İpsala, Meriç, Lalapaşa, Süloğlu ve Enez bölgelerindeki tüm mezarlık hizmetlerimiz için Edirne'ye özel sitemiz yayındadır.",
  districts: [
    "Edirne Merkez", "Keşan", "Uzunköprü", "Havsa", "İpsala",
    "Meriç", "Lalapaşa", "Süloğlu", "Enez"
  ]
};
