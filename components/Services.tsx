"use client";

import Image from "next/image";
import { servicesData } from "@/data/services";
import { contactConfig } from "@/data/contact";
import {
  Sparkles,
  Trees,
  Flower2,
  PenTool,
  Hammer,
  Droplets,
  CalendarHeart,
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import React from "react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Trees,
  Flower2,
  PenTool,
  Hammer,
  Droplets,
  CalendarHeart,
  ShieldCheck,
};

export default function Services() {
  return (
    <section id="hizmetler" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Profesyonel Kabir Hizmetlerimiz</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trakya Genelinde Sunduğumuz Hizmetler
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Kabirlerin fiziki yapısını koruyan, mermer dokusuna zarar vermeyen
            hassas tekniklerle sevdiklerinizin kabirlerini her mevsim temiz,
            bakımlı ve çiçekli tutuyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = iconMap[service.iconName] || Sparkles;
            const whatsappMsg = `Merhaba, trakyamezarliktemizleme.site üzerinden ulaşıyorum. ${service.title} hizmetiniz hakkında detaylı bilgi ve fiyat teklifi almak istiyorum.`;
            const waUrl = contactConfig.getWhatsappUrl(whatsappMsg);

            return (
              <div
                key={service.id}
                className="relative bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-inner">
                      <Icon className="w-7 h-7" />
                    </div>
                    {service.tag && (
                      <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                        {service.tag}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-2.5 mb-6 border-t border-slate-100 pt-5">
                    {service.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA & Price */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Fiyat</span>
                    <span className="text-sm font-black text-emerald-700">{service.startingPrice}</span>
                  </div>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-700 text-emerald-800 hover:text-white transition duration-200 font-bold text-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Showcase Banner with Real Photo */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-900 text-white overflow-hidden border border-emerald-800/40 shadow-2xl">
          <div className="grid lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-7 sm:p-10 space-y-4 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-800/80 text-emerald-200 border border-emerald-700">
                <Sparkles className="w-3.5 h-3.5" /> Sevgi ve Hürmetle Kabir Çiçeklendirme
              </span>
              <h4 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Özel Bir Bakım Talebiniz veya Çiçek Tercihiniz mi Var?
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                Kabir toprağını havalandırıp zenginleştiriyor, sardunya, kadife çiçeği, lavanta ve mevsimlik canlı çiçekleri itina ile dikiyoruz. Mezarınızın fotoğrafını WhatsApp’tan iletin, anında durum tespiti yapalım.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <a
                  href={contactConfig.getWhatsappUrl("Merhaba, mezarımızın fotoğrafını göndererek yapılacak çiçeklendirme ve bakım işlemleri için fiyat almak istiyorum.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm shadow-lg transition hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 fill-slate-950" />
                  <span>Fotoğraf Gönder & Fiyat Al</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 h-64 lg:h-full min-h-[260px] relative overflow-hidden">
              <Image
                src="/images/flower-planting.jpg"
                alt="Mezar Çiçek Dikimi ve Bakımı"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-slate-900 lg:via-transparent lg:to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-xs text-slate-200 bg-slate-950/70 backdrop-blur-sm p-2 rounded-lg border border-slate-700/50">
                🌱 Trakya iklimine dayanıklı canlı çiçek ekimi ve periyodik can suyu
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
