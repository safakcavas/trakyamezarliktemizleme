"use client";

import { Phone, MessageCircle } from "lucide-react";
import { contactConfig } from "@/data/contact";

export default function FloatingCTA() {
  return (
    <>
      {/* Mobile Fixed Bottom Bar (Visible only on mobile screens < md) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-2xl flex items-center gap-2">
        <a
          href={`tel:${contactConfig.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-900 text-white font-bold text-xs shadow transition active:scale-95"
        >
          <Phone className="w-4 h-4 text-emerald-400" />
          <span>Hemen Ara</span>
        </a>
        <a
          href={contactConfig.getWhatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-md shadow-emerald-700/30 transition active:scale-95"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp Teklif</span>
        </a>
      </div>

      {/* Desktop Floating WhatsApp Button (Visible on screens >= md) */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3">
        <a
          href={contactConfig.getWhatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 py-3 px-5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-2xl shadow-emerald-950/40 transition duration-300 hover:scale-105"
          aria-label="WhatsApp üzerinden mesaj atın"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span>WhatsApp&apos;tan Fiyat Al</span>
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400" />
          </span>
        </a>
      </div>
    </>
  );
}
