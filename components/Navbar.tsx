"use client";

import { useState } from "react";
import Link from "next/link";
import { contactConfig } from "@/data/contact";
import { Phone, MessageCircle, Menu, X, MapPin, Sparkles, ExternalLink } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Hizmetlerimiz", href: "#hizmetler" },
    { name: "Öncesi / Sonrası", href: "#oncesi-sonrasi" },
    { name: "Hizmet Bölgeleri", href: "#bolgeler" },
    { name: "Nasıl Çalışıyoruz?", href: "#surec" },
    { name: "Paketler", href: "#paketler" },
    { name: "Fiyat Al", href: "#fiyat-teklifi" },
    { name: "SSS", href: "#sss" },
    { name: "İletişim", href: "#iletisim" },
  ];

  return (
    <>
      {/* Top Notification Bar with Edirne site pointer */}
      <div className="bg-emerald-950 text-emerald-100 text-xs sm:text-sm py-2 px-4 border-b border-emerald-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-900 text-emerald-200 border border-emerald-700/60">
              <MapPin className="w-3 h-3 mr-1 inline" /> Tekirdağ, Kırklareli & Tüm Trakya
            </span>
            <span className="text-xs text-emerald-200/90">
              Kendi su ve ekipmanımızla tüm köy mezarlıklarına yerinde hizmet.
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
            {/* Edirne Redirect Notice */}
            <a
              href={contactConfig.edirneSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-200 border border-amber-400/30 hover:bg-amber-500/30 transition font-medium"
            >
              <span>Edirne için:</span>
              <strong className="underline underline-offset-2">edirnemezarliktemizleme.site</strong>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={`tel:${contactConfig.phoneRaw}`}
              className="text-white hover:text-emerald-300 transition font-bold"
            >
              Ara: {contactConfig.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-700 to-teal-900 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-emerald-200" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-tight">
                  Trakya <span className="text-emerald-700">Mezar Bakım</span>
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  trakyamezarliktemizleme.site
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden xl:flex items-center gap-6 text-sm font-semibold text-slate-700">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-emerald-700 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${contactConfig.phoneRaw}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:text-emerald-700 hover:border-emerald-600 transition font-medium text-sm"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>{contactConfig.phone}</span>
              </a>
              <a
                href={contactConfig.getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-sm transition hover:shadow"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-700" />
                <span>WhatsApp Teklif</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex xl:hidden items-center gap-2">
              <a
                href={contactConfig.getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden p-2 rounded-lg bg-emerald-600 text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
              </a>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition"
                aria-label="Menüyü Aç"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
            {/* Edirne Redirect Notice inside Mobile Menu */}
            <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center justify-between">
              <span>Edirne mezarlık bakımı için sitemiz:</span>
              <a
                href={contactConfig.edirneSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline text-amber-900 flex items-center gap-1"
              >
                edirnemezarliktemizleme.site
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1 pb-3 border-b border-slate-100">
              <a
                href={`tel:${contactConfig.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-100 text-slate-800 text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-emerald-700" /> Hemen Ara
              </a>
              <a
                href={contactConfig.getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-700 text-white text-sm font-semibold"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-700" /> WhatsApp
              </a>
            </div>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
