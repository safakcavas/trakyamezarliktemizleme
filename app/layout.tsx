import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trakya Mezar Bakım ve Temizlik Hizmetleri | trakyamezarliktemizleme.site",
  description:
    "Tekirdağ, Kırklareli, Çorlu, Lüleburgaz, Çerkezköy, Malkara, Babaeski ve tüm Trakya köylerinde profesyonel mezar temizliği, mermer beyazlatma, çiçek dikimi, taş yazı boyama ve periyodik bakım hizmeti. Fotoğraflı ve videolu güvenilir teslimat.",
  keywords: [
    "Trakya mezar temizleme",
    "Tekirdağ mezarlık bakımı",
    "Çorlu mezar bakımı",
    "Lüleburgaz mezarlık temizleme",
    "Kırklareli kabir bakımı",
    "Çerkezköy mezar temizliği",
    "Malkara mezar bakımı",
    "Babaeski mezarlık temizliği",
    "Süleymanpaşa mezar bakımı",
    "Trakya köy mezarları temizliği",
    "mezar taşı yazı boyama Trakya",
    "mermer mezar beyazlatma",
    "gurbetçilere kabir bakım hizmeti",
  ],
  authors: [{ name: "Trakya Mezar Bakım Hizmetleri" }],
  creator: "Trakya Mezar Bakım Hizmetleri",
  metadataBase: new URL("https://trakyamezarliktemizleme.site"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://trakyamezarliktemizleme.site",
    title: "Trakya Mezar Temizlik ve Bakım Hizmeti | Tüm Köylere Hizmet",
    description:
      "Tekirdağ, Kırklareli, Çorlu, Lüleburgaz ve tüm Trakya köylerinde sevdiklerinizin kabirleri emin ellerde. Yabani ot temizliği, mermer beyazlatma, çiçek dikimi ve taş boyama. WhatsApp ile videolu teslimat.",
    siteName: "Trakya Mezar Temizleme",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trakya Mezar Temizleme & Kabir Bakımı",
    description: "Tekirdağ, Kırklareli, Çorlu ve tüm Trakya köylerinde profesyonel mezarlık bakım ve temizleme hizmeti.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Trakya Mezar Bakım ve Temizlik Hizmetleri",
    url: "https://trakyamezarliktemizleme.site",
    description:
      "Tekirdağ, Kırklareli ve tüm Trakya köylerinde kabir bakımı, mezar taşı temizliği, mermer beyazlatma, çiçek ekimi ve periyodik bakım hizmetleri.",
    telephone: "+905302301522",
    areaServed: [
      { "@type": "City", name: "Tekirdağ" },
      { "@type": "City", name: "Kırklareli" },
      { "@type": "AdministrativeArea", name: "Çorlu" },
      { "@type": "AdministrativeArea", name: "Lüleburgaz" },
      { "@type": "AdministrativeArea", name: "Çerkezköy" },
      { "@type": "AdministrativeArea", name: "Süleymanpaşa" },
      { "@type": "AdministrativeArea", name: "Malkara" },
      { "@type": "AdministrativeArea", name: "Babaeski" },
      { "@type": "AdministrativeArea", name: "Kapaklı" },
      { "@type": "AdministrativeArea", name: "Ergene" },
      { "@type": "AdministrativeArea", name: "Vize" },
    ],
    priceRange: "₺₺",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
  };

  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-slate-50 text-slate-800 selection:bg-emerald-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
