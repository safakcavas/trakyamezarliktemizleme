export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  date: string; // ISO format: YYYY-MM-DD
  readTime: string;
  author: string;
  keywords: string[];
  image: string;
  content: {
    lead: string;
    sections: {
      heading: string;
      body: string[];
      tip?: string;
      checklist?: string[];
    }[];
    conclusion: string;
  };
}

import { districtBlogPosts } from "./districtBlogs";

export const generalBlogPosts: BlogPost[] = [
  {
    slug: "trakya-mezar-bakimi-nasil-yapilir",
    title: "Trakya'da Mezar Bakımı Nasıl Yapılır? Mermer Temizliği ve Toprak Bakım Rehberi",
    description:
      "Trakya iklim koşullarında kabirlerin yabani otlardan arındırılması, mermerin aşınmadan beyazlatılması ve mevsimlik çiçek bakımı hakkında kapsamlı rehber.",
    excerpt:
      "Tekirdağ, Kırklareli ve Trakya köylerinde mezar bakımı yaparken dikkat edilmesi gereken aşamalar, doğru malzeme seçimi ve periyodik kabir düzenleme adımları.",
    category: "Bakım Rehberi",
    date: "2026-09-18",
    readTime: "5 dk okuma",
    author: "Trakya Mezar Bakım Uzmanı",
    keywords: [
      "Trakya mezar bakımı",
      "mezar temizliği nasıl yapılır",
      "Tekirdağ mezarlık temizliği",
      "kabir bakımı Trakya",
      "mermer mezar temizliği",
    ],
    image: "/images/hero-cemetery.jpg",
    content: {
      lead: "Mezarlıklar, ebediyete intikal etmiş sevdiklerimize duyduğumuz hürmetin ve vefanın somut birer göstergesidir. Ancak Trakya'nın sert kış ayazı, yoğun rüzgarları ve yaz kuraklığı; mezar mermerlerinde kararma, yosunlanma ve toprakta yabani ot istilasına neden olur. Doğru yöntemlerle yapılan periyodik bir bakım, kabrin hem fiziki bütünlüğünü korur hem de her zaman tertemiz kalmasını sağlar.",
      sections: [
        {
          heading: "1. Aşama: Yabani Otların Kökten Temizlenmesi ve Toprak Havalandırması",
          body: [
            "Trakya bölgesinin verimli kara toprağı, ilkbahar ve sonbahar aylarında köklü yabani otların ve dikenlerin hızla büyümesine yol açar. Yalnızca yüzeyden kesilen otlar kısa sürede yeniden çıkar ve kökleri mermer kaidenin altına sızarak yapının oynamasına neden olabilir.",
            "Bu nedenle ilk adım, otların kökleriyle birlikte el çapalarıyla sökülmesidir. Söküm işleminden sonra mezar toprağı bellenmeli, havalandırılmalı ve kök artıklarından tamamen elenmelidir. Çökme veya aşınma varsa, kaliteli elenmiş bahçe toprağı takviye edilmelidir.",
          ],
          tip: "Yabani ot temizliğinde kimyasal ot kurutucu (herbisit) kullanılması önerilmez. Kimyasal ilaçlar mermer derzlerine sızarak zamanla harcı eritir ve toprağı zehirleyerek yeni dikilecek çiçeklerin kurutmasına sebep olur.",
        },
        {
          heading: "2. Aşama: Mermer Yüzeylerin Özel Solüsyonla Beyazlatılması",
          body: [
            "Trakya'daki köy ve şehir mezarlıklarında rüzgar ve yağmur suyu mermer gözeneklerinde yosun, liken ve kireç tortusu bırakır. Pek çok kişi bu lekeleri çıkarmak için porçöz, tuz ruhu veya sert çamaşır suyu kullanır; ancak bu asidik maddeler mermerin koruyucu cilasını eritir ve taşı delik deşik eder.",
            "Doğru mermer beyazlatma işleminde asitsiz, biyolojik olarak çözünebilen ve mermerin mineral yapısını koruyan özel yüzey aktif solüsyonlar ve yumuşak kıllı fırçalar kullanılır. Bol su ile durulandıktan sonra mermere su itici koruyucu katman uygulanır.",
          ],
          checklist: [
            "Tuz ruhu, çamaşır suyu veya kireç sökücü asitler kesinlikle kullanılmamalıdır.",
            "Tel fırça yerine orta sertlikte kıl fırça ve mikrofiber bezler tercih edilmelidir.",
            "Kabir yıkandıktan sonra bol temiz suyla durulanmalıdır.",
          ],
        },
        {
          heading: "3. Aşama: Mezar Taşı Yazı Boyama ve Harç/Derz Kontrolü",
          body: [
            "Güneşin UV ışınları ve kış donları mezar baş taşındaki yazıları zamanla silikleştirir. Mezar kimliğinin kaybolmaması için mermer oyma yazılar özel altın yaldız veya mat siyah hava koşullarına dayanıklı akrilik dış cephe boyalarıyla ince fırçalar yardımıyla yenilenir.",
            "Ayrıca mermer birleşim yerlerindeki derz harçları kontrol edilir. Don çatlakları nedeniyle açılan derzler, su sızmasını ve kışın taşın patlamasını önlemek amacıyla su geçirmez beyaz mermer silikonu veya özel derz dolgusu ile kapatılır.",
          ],
        },
        {
          heading: "4. Aşama: İklime Uygun Çiçeklendirme ve Can Suyu",
          body: [
            "Trakya'nın soğuk kışlarına ve kurak yazlarına dayanıklı bitkiler seçilmelidir. Bodur çalılar (Taflan, Şimşir), mevsimlik dayanıklı çiçekler (Hercai Menekşe, Kadife Çiçeği) ve kokulu türler (Lavanta, Biberiye) kabir üzerinde hem estetik bir görünüm sağlar hem de uzun süre diri kalır.",
            "Ekim işleminden sonra toprağa can suyu verilir ve gerekiyorsa nemi tutması için çam kabuğu veya dolomit taş malçlama yapılır.",
          ],
        },
      ],
      conclusion:
        "Eğer uzakta yaşıyorsanız veya zaman ayıramıyorsanız, profesyonel mobil ekibimiz Tekirdağ, Kırklareli ve tüm Trakya köylerinde bu adımların tamamını kendi su ve ekipmanıyla yerine getirmekte; öncesi ve sonrası HD video kaydı ile teslim etmektedir.",
    },
  },
  {
    slug: "mezar-mermeri-nasil-beyazlatilir-asitsiz-temizlik",
    title: "Mezar Mermeri Nasıl Beyazlatılır? Asitsiz ve Yüzeye Zararsız Temizlik Yöntemleri",
    description:
      "Tuz ruhu veya çamaşır suyu mermeri neden çürütür? Kararan, yosun tutan mezar taşlarını aşındırmadan ilk günkü beyazlığına kavuşturmanın güvenli yöntemleri.",
    excerpt:
      "Mermer mezar temizliğinde yapılan ölümcül hatalar ve taşın ömrünü uzatarak kararmaları yok eden profesyonel asitsiz beyazlatma solüsyonlarının kullanım rehberi.",
    category: "Mermer Beyazlatma",
    date: "2026-09-15",
    readTime: "4 dk okuma",
    author: "Mermer Bakım Servisi",
    keywords: [
      "mezar mermeri beyazlatma",
      "mezar taşı temizleme",
      "kararmış mezar temizliği",
      "asitsiz mezar beyazlatma",
      "mermer leke çıkarma",
    ],
    image: "/images/hero-cemetery.jpg",
    content: {
      lead: "Yıllar boyunca yağmur, kar, çamur ve ağaç reçinelerine maruz kalan mezar mermerleri zamanla sararır, kararır ve yosun kaplanır. Birçok kişi hızlı sonuç almak için ev tipi asitli deterjanlara başvurur; oysa kalsiyum karbonat esaslı olan mermer asitle temas ettiğinde geri dönülemez şekilde erir ve süngerleşir.",
      sections: [
        {
          heading: "Tuz Ruhu ve Kireç Çözücüler Mermere Neden Zarar Verir?",
          body: [
            "Mermer doğal bir kalker taşıdır ve kimyasal yapısı asitlere karşı son derece kırılgandır. Tuz ruhu (hidroklorik asit) veya kireç çözücüler mermer yüzeyine döküldüğünde hemen köpürür. Bu köpürme aslında taşın yüzey tabakasının eridiğini gösterir.",
            "Asitle temizlenen mermer ilk birkaç gün beyaz görünse de koruyucu sır tabakası yok olduğu için gözenekleri sonuna kadar açılır. Sonuç olarak bir sonraki yağmurda kir ve is o deliklere çok daha derin işler ve taş eskisinden kat kat daha hızlı kararır.",
          ],
          tip: "Mermer yüzeyde asit yanığı oluştuysa, bunu sadece kimyasal yıkayarak düzeltemezsiniz; taşın yeniden sulu zımpara ve honlama işleminden geçmesi gerekir.",
        },
        {
          heading: "Profesyonel ve Güvenli Beyazlatma Adımları",
          body: [
            "Doğal taşlar için özel formüle edilmiş pH nötr veya hafif alkali derinlemesine temizlik solüsyonları kullanılmalıdır. Bu solüsyonlar mermer kristallerine zarar vermeden yosun, liken, küf ve is tabakasını yumuşatarak yüzeyden ayırır.",
            "Solüsyon mezar yüzeyine püskürtüldükten sonra 10-15 dakika nüfuz etmesi beklenir. Ardından orta sertlikte kıllara sahip fırçalarla dairesel hareketlerle ovulur ve bol temiz suyla durulanır.",
          ],
          checklist: [
            "pH değeri 7 ile 9 arasında olan profesyonel taş temizleyicileri tercih edin.",
            "Uygulamayı aşırı güneş altında değil, sabah serinliğinde veya gölgede yapın.",
            "Durulama suyunun mermer üzerinde kalıntı bırakmayacak şekilde bol kullanıldığından emin olun.",
          ],
        },
        {
          heading: "Kalıcı Koruma: Su İtici ve Leke Önleyici Emprenye",
          body: [
            "Temizlik tamamlanıp mermer tamamen kuruduktan sonra yüzeye şeffaf mermer koruyucu emprenye sıvısı uygulanması önerilir. Bu sıvı mermerin nefes almasını engellemez ancak suyun ve çamurun mermer gözeneklerine nüfuz etmesini 12 ila 24 ay boyunca engeller.",
          ],
        },
      ],
      conclusion:
        "Trakya Mezar Temizleme olarak biz hiçbir işlemimizde mermere zarar veren asitler kullanmıyoruz. Özel ithal mermer solüsyonlarımız ile taşlarınızı aşındırmadan ilk günkü beyaz ve parlak görünümüne kavuşturuyoruz.",
    },
  },
  {
    slug: "gurbetciler-icin-trakyada-kabir-bakim-hizmeti",
    title: "Almanya ve Avrupa'daki Gurbetçiler İçin Trakya Köylerine Mezar Bakım Hizmeti",
    description:
      "Almanya, Hollanda, Fransa ve tüm Avrupa'daki gurbetçilerimiz için Tekirdağ ve Kırklareli köylerindeki aile kabirlerine güvenilir, videolu ve fotoğraflı bakım hizmeti.",
    excerpt:
      "Yurt dışında yaşarken Trakya'daki dede ve ana ocağındaki kabirlerin bakımını nasıl yaptırabilirsiniz? WhatsApp üzerinden görüntülü keşif ve teslimat süreci.",
    category: "Gurbetçi Hizmetleri",
    date: "2026-09-12",
    readTime: "4 dk okuma",
    author: "Gurbetçi İletişim Masası",
    keywords: [
      "gurbetçi mezar bakımı",
      "Almanya gurbetçilerine kabir bakımı",
      "Trakya köy mezarı temizliği",
      "Tekirdağ uzaktan mezar bakımı",
      "videolu mezar teslimatı",
    ],
    image: "/images/hero-cemetery.jpg",
    content: {
      lead: "Almanya, Fransa, Belçika, Hollanda, Avusturya ve İsviçre başta olmak üzere Avrupa'nın dört bir yanında yaşayan yüz binlerce Trakyalı gurbetçimiz bulunmaktadır. Sıla hasreti çeken vatandaşlarımız için en büyük manevi yüklerden biri, memleket köylerinde yatan anne, baba ve büyüklerinin kabirlerini düzenli olarak ziyaret edememek ve bakımlarını yaptıramamaktır.",
      sections: [
        {
          heading: "Uzakta Olsanız da Gözünüz Arkada Kalmasın",
          body: [
            "Yılda yalnızca bir veya iki haftalığına memlekete gelinebildiğinde, mezarlığı ziyaret edip çalı çırpı içinde görmek derin bir üzüntü yaratır. Üstelik tatil süresinde mermer beyazlatma solüsyonu, bahçe aletleri ve su bulmak büyük bir zahmete dönüşür.",
            "Trakya Mezar Bakım olarak gurbetçi hemşehrilerimizin bu manevi vazifelerini emanet şuuruyla üstleniyoruz. Tekirdağ'ın Şarköy'ünden Malkara'sına, Kırklareli'nin Pehlivanköy'ünden Vize'sine kadar 400'den fazla Trakya köyüne bizzat ulaşıyoruz.",
          ],
        },
        {
          heading: "Süreç Nasıl İşliyor? 3 Basit Adımda Sipariş",
          body: [
            "1. WhatsApp Üzerinden Bilgi Paylaşımı: Vefat edenin adı-soyadı, vefat yılı, ilçe ve köy adı ile varsa yaklaşık mezar konumu bize WhatsApp üzerinden iletilir.",
            "2. Yerinde Ücretsiz Keşif & Öncesi Video Çekimi: Mobil ekibimiz ilgili köy mezarlığına gider, kabri bulur ve mevcut durumunu gösteren HD video ve fotoğrafları size iletir.",
            "3. Uygulama & Detaylı Teslimat Raporu: Onayınız ve bakım paketi seçiminiz sonrası temizlik, beyazlatma, ot ayıklama, yazı boyama ve çiçeklendirme tamamlanır; yapılan işin 4K/HD videosu anında telefonunuza gönderilir.",
          ],
          tip: "Ödemelerinizi Avrupa'dan kolayca IBAN (SEPA / SWIFT) veya Türkiye içi hesaplar aracılığıyla güvenle yapabilirsiniz.",
        },
        {
          heading: "Bayram ve Kandil Öncesi Periyodik Takip",
          body: [
            "Dilerseniz yılda tek seferlik derin temizlik yerine, Ramazan Bayramı, Kurban Bayramı ve kandiller öncesinde yılda 2 veya 4 periyodik ziyaret içeren yıllık anlaşmalar yapabilirsiniz. Böylece kabirler her özel günde taze çiçekli ve tertemiz tutulur.",
          ],
        },
      ],
      conclusion:
        "Memleketinizden binlerce kilometre uzakta olsanız bile dualarınız ve vefanız sevdiklerinizin kabrinde çiçek açsın. WhatsApp hattımızdan bize günün her saati yazabilirsiniz.",
    },
  },
  {
    slug: "tekirdag-ve-kirklareli-koy-mezarliklarina-yerinde-bakim",
    title: "Tekirdağ ve Kırklareli Köy Mezarlıklarına Yerinde Kabir Temizliği ve Ulaşım",
    description:
      "Su ve elektrik bulunmayan ücra Trakya köy mezarlıklarında kendi su depomuz ve mobil ekipmanlarımızla profesyonel kabir bakımı.",
    excerpt:
      "Çorlu, Lüleburgaz, Çerkezköy, Süleymanpaşa, Malkara, Babaeski ve bağlı tüm köylerde mezar temizliği nasıl yapılır? Mobil saha ekibimizin çalışma prensipleri.",
    category: "Bölgesel Hizmet",
    date: "2026-09-08",
    readTime: "5 dk okuma",
    author: "Saha Operasyon Ekibi",
    keywords: [
      "Tekirdağ köy mezarlık temizleme",
      "Kırklareli köy mezar bakımı",
      "Çorlu mezar bakımı",
      "Lüleburgaz mezarlık servisi",
      "mobil mezar temizleme Trakya",
    ],
    image: "/images/hero-cemetery.jpg",
    content: {
      lead: "Şehir merkezlerindeki asri mezarlıklarda çeşme, yürüyüş yolları ve düzenli görevliler bulunabilir. Ancak Trakya'nın yüzlerce köy mezarlığında çoğu zaman yakında akan bir su çeşmesi dahi yoktur; yollar engebelidir ve kabirler yabani çalıların arasında kaybolma riskiyle karşı karşıyadır.",
      sections: [
        {
          heading: "Susuz ve Elektriksiz Mezarlıklara Tam Donanımlı Mobil Çözüm",
          body: [
            "Trakya Mezar Temizleme araçlarımız, köy mezarlıklarının bu özel şartlarına göre donatılmıştır. Araçlarımızda kendi temiz basınçlı su depomuz, bataryalı profesyonel budama aletleri ve portatif basınçlı yıkama sistemleri yer almaktadır.",
            "Bu sayede köyün en ücra köşesindeki, tepedeki veya orman kenarındaki eski mezarlıklarda dahi kimseden su ya da elektrik talep etmeden tam teşekküllü temizlik yapabiliyoruz.",
          ],
        },
        {
          heading: "Kapsadığımız Trakya İlçeleri ve Köyleri",
          body: [
            "Tekirdağ İli: Çorlu, Süleymanpaşa, Çerkezköy, Kapaklı, Ergene, Malkara, Saray, Hayrabolu, Şarköy, Muratlı, Marmaraereğlisi ve bağlı tüm köyler.",
            "Kırklareli İli: Lüleburgaz, Kırklareli Merkez, Babaeski, Vize, Pınarhisar, Demirköy, Pehlivanköy, Kofçaz ve bağlı tüm köyler.",
          ],
          tip: "Edirne il sınırları ve Edirne köylerindeki mezarlıklar için kardeş platformumuz olan edirnemezarliktemizleme.site üzerinden hizmet verilmektedir.",
        },
        {
          heading: "Köy Mezarlarında Karşılaşılan Başlıca Sorunlar",
          body: [
            "Köy mezarlıklarında en sık karşılaştığımız sorunlar; toprağın yağmurlarla çökmesi, diken ve yabani böğürtlenlerin mezarı sarması, ağaç dallarının mezar taşını çatlatması ve mermerlerin yosun bağlamasıdır.",
            "Ekibimiz önce çevre budaması yapar, ardından köklü otları temizler, toprağı havalandırıp elenmiş toprak ekler ve son olarak mermeri derinlemesine yıkayıp çiçeklendirir.",
          ],
        },
      ],
      conclusion:
        "Köyünüz ne kadar uzak olursa olsun, sevdiklerinizin kabri bizim için mukaddes bir emanettir. Trakya'nın neresinde olursanız olun bir telefon veya WhatsApp mesajı ile yanınızdayız.",
    },
  },
  {
    slug: "mezar-uzerine-hangi-cicekler-dikilir-trakya-iklimi",
    title: "Mezara Hangi Çiçekler ve Bitkiler Dikilir? Trakya Sert İklimine Dayanıklı Türler",
    description:
      "Trakya'nın ayazına ve yaz sıcağına dayanıklı, kabir üzerinde solmadan uzun süre diri kalan çiçek ve çalı türleri rehberi.",
    excerpt:
      "Kabir üzerine çiçek seçerken kök yapısının mermere zarar vermemesi ve susuzluğa dayanıklı olması gerekir. Trakya toprağına en uygun mezarlık çiçekleri.",
    category: "Çiçeklendirme",
    date: "2026-09-03",
    readTime: "4 dk okuma",
    author: "Peyzaj ve Bahçe Uzmanı",
    keywords: [
      "mezara hangi çiçek dikilir",
      "mezar çiçekleri Trakya",
      "kabir çiçeklendirme",
      "kuraklığa dayanıklı mezar çiçekleri",
      "mezarlık bitkileri",
    ],
    image: "/images/hero-cemetery.jpg",
    content: {
      lead: "Kabirlerin üzerine çiçek ekmek, hem dini ve manevi bir gelenek hem de kabre huzurlu ve bakımlı bir görünüm kazandıran en güzel uygulamadır. Ancak gelişi güzel seçilen narin salon çiçekleri veya derin köklü büyük ağaçlar, mezarlık şartlarında kısa sürede kuruyabilir ya da mermer yapıyı patlatabilir.",
      sections: [
        {
          heading: "Mezar Çiçeği Seçerken 3 Altın Kural",
          body: [
            "1. Yüzeysel Kök Yapısı: Kökleri çok derinlere inen veya kalın odunsu kök oluşturan bitkiler mermer mezar kasasını yerinden oynatır. Yüzeysel köklü türler seçilmelidir.",
            "2. Kuraklığa ve Soğuğa Dayanıklılık: Trakya kışın sıfırın altındaki donları, yazın ise kavurucu poyraz rüzgarlarını yaşar. Sürekli sulama imkanı olmayan mezarlıklarda su stresine dayanıklı bitkiler zorunludur.",
            "3. Çok Yıllık veya Dayanıklı Mevsimlik Türler: Her hafta sulanma ihtiyacı duymayan, az bakımla canlılığını koruyan çeşitler tercih edilmelidir.",
          ],
        },
        {
          heading: "Trakya Kabirleri İçin En Uygun Bitki ve Çiçekler",
          body: [
            "Bodur Taflan & Şimşir: Dört mevsim yeşil kalan, yaprak dökmeyen ve budanarak formunu koruyan bodur çalılar mezar çerçevesi için idealdir.",
            "Hercai Menekşe: Sonbahar ve kış aylarında dikilen, kar altında bile çiçek açmaya devam eden dayanıklı bir kış çiçeğidir.",
            "Kadife Çiçeği (Tagetes): İlkbahar ve yazın dikilir. Böcekleri uzak tutan doğal kokusu ve kuraklığa yüksek direnciyle mezarlıkların vazgeçilmezidir.",
            "Lavanta & Biberiye: Hoş kokuları, gri-yeşil estetik yaprakları ve susuzluğa olan olağanüstü dayanıklılıkları ile Trakya toprağında yıllarca yaşarlar.",
          ],
          checklist: [
            "Çam, söğüt veya incir gibi kalın köklü ağaç fidanlarını mezar içine ASLA dikmeyin.",
            "Ekim öncesi toprağa gübreli torf ve perlit karıştırılarak su tutma kapasitesi artırılmalıdır.",
            "Dikim sonrası mutlaka derin can suyu verilmelidir.",
          ],
        },
      ],
      conclusion:
        "Trakya Mezar Temizleme paketlerimizde iklime en uygun, yerel fidelerden seçilmiş canlı çiçekler kullanıyor ve can suyu gübrelemesiyle birlikte teslim ediyoruz.",
    },
  },
  {
    slug: "mezar-tasi-yazi-boyama-ve-derz-tamiri",
    title: "Mezar Taşı Yazı Boyama ve Mermer Derz Tamiratı Nasıl Yapılır?",
    description:
      "Zamanla silinen mezar baş taşı yazılarını altın yaldız veya siyah boyayla yenileme ve don çatlağı oluşturan derzlerin su geçirmez tamiri.",
    excerpt:
      "Güneşten ve kardan silinen kabir taşlarındaki yazıların yenilenmesi ve mermerlerin ayrılmasını önleyen profesyonel derz onarım teknikleri.",
    category: "Onarım & Tamirat",
    date: "2026-08-28",
    readTime: "4 dk okuma",
    author: "Taş & Restorasyon Ustası",
    keywords: [
      "mezar taşı yazı boyama",
      "mezar yazısı yenileme",
      "mermer derz tamiri",
      "altın yaldız mezar boyası",
      "silinen mezar yazısı",
    ],
    image: "/images/hero-cemetery.jpg",
    content: {
      lead: "Mezar baş taşındaki merhumun ismi, doğum ve ölüm tarihleri ile ayet-i kerimeler zaman içinde rüzgar, don ve güneş etkisiyle solup okunamaz hale gelir. Aynı zamanda mermer blokları birbirine bağlayan derz harçları da su alıp çatlar. Bu yıpranmalar kabrin kimliğini ve sağlamlığını tehlikeye atar.",
      sections: [
        {
          heading: "Mezar Taşı Yazıları Hangi Boya ile Boyanır?",
          body: [
            "Normal sprey boyalar veya ev tipi yağlı boyalar mermer üzerinde tutunamaz ve birkaç ay içinde pul pul dökülür. Mezar yazılarında dış cephe koşullarına, yüksek UV ışınlarına ve don olaylarına dirençli özel akrilik mermer boyaları ya da dayanıklı altın yaldız varak boyaları kullanılmalıdır.",
            "Boyama öncesinde oyukların içindeki eski boya kalıntıları, toz ve yosunlar ince tel fırça ve hava spreyi ile tamamen arındırılmalıdır. Yüzey kuru ve temiz olduğunda ince uçlu samur fırçalarla harflerin içine 2 kat boya tatbik edilir.",
          ],
          tip: "Harf dışına taşan boyalar kurumadan özel mermer tineri ve jilet yardımıyla mermere çizik atmadan temizlenmelidir.",
        },
        {
          heading: "Ayrılan Mermerler İçin Derz Dolgusu ve Yapıştırma",
          body: [
            "Mermer blokların köşelerindeki açık derzlerden kış aylarında giren yağmur suyu donduğunda genleşir ve tonlarca ağırlıktaki mermeri çatlatır ya da yerinden kaydırır.",
            "Bu tehlikeyi önlemek için eskiyen harçlar kazınır, tozdan arındırılır ve antibakteriyel, donmaya karşı dirençli elastik beyaz mermer silikonu veya beyaz derz mastikleri ile doldurulur.",
          ],
        },
      ],
      conclusion:
        "Silinen kabir yazılarınızı ilk günkü netliğine kavuşturuyor, çatlayan mermer derzlerinizi sağlamlaştırarak mezarın uzun yıllar sağlam kalmasını sağlıyoruz.",
    },
  },
];

export const blogPosts: BlogPost[] = [...generalBlogPosts, ...districtBlogPosts];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export function getDistrictBlogPosts(): BlogPost[] {
  return districtBlogPosts;
}

export function getGeneralBlogPosts(): BlogPost[] {
  return generalBlogPosts;
}
