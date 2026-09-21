import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { contactConfig } from "@/data/contact";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Home,
  ChevronRight,
  Sparkles,
  MessageCircle,
  Phone,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Yazı Bulunamadı | Trakya Mezar Bakım",
    };
  }

  const postUrl = `https://trakyamezarliktemizleme.site/blog/${post.slug}`;

  return {
    title: `${post.title} | Trakya Mezar Bakım`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: postUrl,
    },
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      url: postUrl,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `https://trakyamezarliktemizleme.site${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://trakyamezarliktemizleme.site",
    },
    publisher: {
      "@type": "Organization",
      name: "Trakya Mezar Bakım Hizmetleri",
      url: "https://trakyamezarliktemizleme.site",
      logo: {
        "@type": "ImageObject",
        url: "https://trakyamezarliktemizleme.site/icon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://trakyamezarliktemizleme.site/blog/${post.slug}`,
    },
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: "https://trakyamezarliktemizleme.site",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://trakyamezarliktemizleme.site/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://trakyamezarliktemizleme.site/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-emerald-700 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none"
      >
        İçeriğe Atla
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <Navbar />

      <main id="main-content" className="min-h-screen bg-white">
        {/* Article Header */}
        <header className="bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-900 text-white pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/60">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-6">
              <Link
                href="/"
                className="hover:text-emerald-300 transition flex items-center gap-1"
              >
                <Home className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Ana Sayfa</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" aria-hidden="true" />
              <Link href="/blog" className="hover:text-emerald-300 transition">
                Blog & Rehberler
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" aria-hidden="true" />
              <span className="text-emerald-300 font-semibold truncate max-w-xs sm:max-w-md">
                {post.category}
              </span>
            </nav>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-bold uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-slate-300">
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-slate-300">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  {post.readTime}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Yazar: {post.author}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {post.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal pt-2">
                {post.description}
              </p>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Featured Image */}
          <div className="relative rounded-3xl overflow-hidden aspect-[16/9] mb-12 shadow-lg border border-slate-200">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={675}
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
              <span className="bg-slate-900/80 backdrop-blur px-3 py-1 rounded-lg">
                Trakya Mezar Temizleme Saha Çalışması
              </span>
              <span className="text-slate-200">Tekirdağ & Kırklareli Köyleri</span>
            </div>
          </div>

          {/* Lead Paragraph */}
          <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50/70 border-l-4 border-emerald-600 mb-10 text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
            {post.content.lead}
          </div>

          {/* Main Sections */}
          <div className="space-y-10 text-slate-700 leading-relaxed">
            {post.content.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {section.heading}
                </h2>

                {section.body.map((p, pIdx) => (
                  <p key={pIdx} className="text-base sm:text-lg text-slate-700 leading-relaxed">
                    {p}
                  </p>
                ))}

                {/* Optional Tip Box */}
                {section.tip && (
                  <div className="my-5 p-4 sm:p-5 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 flex items-start gap-3 text-sm leading-relaxed">
                    <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <strong className="font-bold block text-amber-950 mb-1">
                        Önemli Dikkat Noktası:
                      </strong>
                      <span>{section.tip}</span>
                    </div>
                  </div>
                )}

                {/* Optional Checklist */}
                {section.checklist && section.checklist.length > 0 && (
                  <div className="my-5 p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                    <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider mb-2">
                      Dikkat Edilmesi Gereken Kontrol Listesi:
                    </h3>
                    <ul className="space-y-2">
                      {section.checklist.map((item, cIdx) => (
                        <li
                          key={cIdx}
                          className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700"
                        >
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}

            {/* Conclusion */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white space-y-4 my-12">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                <span>Sonuç ve Tavsiye</span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                {post.content.conclusion}
              </p>
            </div>
          </div>

          {/* In-Article Conversion Card */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-800 to-teal-950 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-300 uppercase tracking-wider">
                Mobil Mezar Bakım Hizmeti
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Trakya’daki Kabir İçin Fiyat ve Bilgi Alın
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                Tekirdağ ve Kırklareli’nin tüm köylerine yerinde gidiyor, kabri bulup videolu raporluyoruz.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <a
                href={contactConfig.getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp üzerinden mesaj yazın"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm shadow-md transition"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-500" aria-hidden="true" />
                <span>WhatsApp’tan Yazın</span>
              </a>
              <a
                href={contactConfig.getPhoneUrl()}
                aria-label={`Telefonla Arayın: ${contactConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-600 transition"
              >
                <Phone className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>{contactConfig.phone}</span>
              </a>
            </div>
          </div>

          {/* Back & Tags Bar */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-900 transition"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Tüm Rehber ve Yazılara Dön</span>
            </Link>

            <div className="flex flex-wrap items-center gap-1.5">
              {post.keywords.map((kw, kwIdx) => (
                <span
                  key={kwIdx}
                  className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium"
                >
                  #{kw}
                </span>
              ))}
            </div>
          </div>

          {/* Related Posts Section */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-slate-200">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-6">
                İlginizi Çekebilecek Diğer Rehberler
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((rPost) => (
                  <Link
                    key={rPost.slug}
                    href={`/blog/${rPost.slug}`}
                    aria-label={`"${rPost.title}" rehberini incele`}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500 hover:bg-emerald-50/20 transition group flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <span className="text-[11px] font-bold text-emerald-700 uppercase">
                        {rPost.category}
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm group-hover:text-emerald-800 transition line-clamp-2">
                        {rPost.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2">
                        {rPost.excerpt}
                      </p>
                    </div>
                    <div className="pt-4 flex items-center justify-between text-xs text-emerald-700 font-semibold group-hover:gap-1">
                      <span>Yazıyı İncele</span>
                      <ChevronRight className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      <Footer />
      <FloatingCTA />
    </>
  );
}
