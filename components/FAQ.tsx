"use client";

import { useState } from "react";
import { faqData } from "@/data/faq";
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import { contactConfig } from "@/data/contact";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="sss" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span>Merak Edilenler</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-base text-slate-600">
            Aklınıza takılan tüm soruların samimi ve şeffaf yanıtları.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className={`w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base transition-colors cursor-pointer ${
                    isOpen
                      ? "bg-emerald-50/60 text-emerald-950"
                      : "bg-white text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span className="pr-4">{item.question}</span>
                  <div className="shrink-0 text-emerald-700">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="p-5 bg-white border-t border-slate-100 text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <p className="text-sm font-semibold text-slate-800">
            Burada yer almayan farklı bir sorunuz mu var?
          </p>
          <p className="text-xs text-slate-500 mt-1 mb-4">
            Bize dilediğiniz an WhatsApp üzerinden yazabilir veya arayabilirsiniz: <strong>{contactConfig.phone}</strong>
          </p>
          <a
            href={contactConfig.getWhatsappUrl("Merhaba, mezar bakımı hakkında sormak istediğim bir konu var.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold shadow-sm transition"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp’tan Hemen Danışın</span>
          </a>
        </div>
      </div>
    </section>
  );
}
