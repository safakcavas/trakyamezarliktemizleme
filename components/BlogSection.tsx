import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogSection() {
  const displayPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
              <span>Mezar Bakım Rehberleri & Bilgi Köşesi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Kabir Bakımı ve Temizliği Hakkında Uzman Yazıları
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Mermerin korunması, asitsiz beyazlatma teknikleri, Trakya iklimine uygun mezar
              çiçekleri ve gurbetçi ailelerimiz için hazırladığımız faydalı rehberler.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 hover:border-emerald-600 hover:text-emerald-700 font-bold text-sm shadow-sm transition shrink-0 group"
          >
            <span>Tüm Rehberleri Gör ({blogPosts.length})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </Link>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={375}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-white/95 text-emerald-800 font-bold text-xs shadow-sm backdrop-blur">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3" aria-hidden="true" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition line-clamp-2 leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">{post.author}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    aria-label={`"${post.title}" yazısını oku`}
                    className="inline-flex items-center gap-1 text-emerald-700 font-bold hover:text-emerald-900 group-hover:gap-1.5 transition-all"
                  >
                    <span>Yazıyı Oku</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Curated District Guides Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
              19 Trakya İlçesi İçin Özel Rehberler
            </span>
            <p className="text-xs text-slate-500">
              Kendi köy ve ilçenizin mezarlık şartlarına özel hazırladığımız bakım kılavuzlarını inceleyin:
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/blog/corlu-mezar-bakimi-ve-kabir-temizligi"
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-emerald-100 hover:text-emerald-900 text-xs font-semibold text-slate-700 transition"
            >
              Çorlu
            </Link>
            <Link
              href="/blog/luleburgaz-mezar-bakimi-ve-kabir-temizleme"
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-emerald-100 hover:text-emerald-900 text-xs font-semibold text-slate-700 transition"
            >
              Lüleburgaz
            </Link>
            <Link
              href="/blog/suleymanpasa-mezar-bakimi-ve-kabir-temizligi"
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-emerald-100 hover:text-emerald-900 text-xs font-semibold text-slate-700 transition"
            >
              Süleymanpaşa
            </Link>
            <Link
              href="/blog/cerkezkoy-mezar-bakimi-ve-kabir-temizligi"
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-emerald-100 hover:text-emerald-900 text-xs font-semibold text-slate-700 transition"
            >
              Çerkezköy
            </Link>
            <Link
              href="/blog/malkara-mezar-bakimi-ve-koy-kabir-temizligi"
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-emerald-100 hover:text-emerald-900 text-xs font-semibold text-slate-700 transition"
            >
              Malkara
            </Link>
            <Link
              href="/blog/babaeski-mezar-bakimi-ve-kabir-temizligi"
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-emerald-100 hover:text-emerald-900 text-xs font-semibold text-slate-700 transition"
            >
              Babaeski
            </Link>
            <Link
              href="/blog/sarkoy-mezar-bakimi-ve-mermer-temizligi"
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-emerald-100 hover:text-emerald-900 text-xs font-semibold text-slate-700 transition"
            >
              Şarköy
            </Link>
            <Link
              href="/blog"
              className="px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition flex items-center gap-1"
            >
              <span>Tüm 19 İlçe ↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
