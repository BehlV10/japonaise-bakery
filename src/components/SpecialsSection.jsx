import React from 'react';
import { holidaySpecials } from '../data/bakeryData';
import { Gift, Calendar, Sparkles, Phone, Mail } from 'lucide-react';

export default function SpecialsSection() {
  return (
    <section id="specials" className="py-20 bg-[#F4EDE2] border-t border-[#E5DAC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8C3A27] bg-[#EFE6D8] px-3.5 py-1 rounded-full border border-[#DFCBB5]">
            Seasonal & Limited Editions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2C231F] mt-3 mb-4">
            Holiday Specials & Character Breads
          </h2>
          <p className="text-base sm:text-lg text-[#6B5E55] leading-relaxed">
            Throughout the year, our chefs craft unique festive celebration cakes, themed toppings, and whimsical character pastries inspired by Japanese folklore and Studio Ghibli.
          </p>
        </div>

        {/* Specials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {holidaySpecials.map((special, idx) => (
            <div
              key={special.title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-[#E3D6C5] transition duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Visual Image */}
                <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                  <img
                    src={special.image}
                    alt={special.title}
                    className="w-full h-full object-cover object-center hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-[#2C231F]/90 text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full backdrop-blur-xs flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                    {special.season}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 className="font-serif font-bold text-lg text-[#2C231F] mb-1">
                    {special.title}
                  </h3>
                  <p className="font-jp text-xs text-[#8C3A27] font-semibold mb-3">
                    {special.japanese}
                  </p>
                  <p className="text-xs text-[#6B5E55] leading-relaxed">
                    {special.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <span className="text-[11px] text-[#8C3A27] font-medium block border-t border-[#F0E6D8] pt-3">
                  ★ Limited availability · Inquire at counter
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pre-order instructions banner */}
        <div className="bg-[#FAF7F2] border border-[#DCD0C1] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EFE6D8] text-[#8C3A27] flex items-center justify-center shrink-0">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-serif font-bold text-[#2C231F]">
                Reserve Holiday Cakes Ahead of Time
              </h4>
              <p className="text-xs sm:text-sm text-[#6B5E55] mt-1">
                For major holidays (Thanksgiving, Christmas Eve, Valentine’s, Mother's Day), custom cakes sell out quickly. We recommend reserving at least 3 to 5 business days in advance.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:6175667730"
              className="flex items-center gap-1.5 bg-[#8C3A27] text-white px-5 py-2.5 rounded-full text-xs font-medium hover:bg-[#722F1F] transition"
            >
              <Phone className="w-3.5 h-3.5" /> Call: (617) 566-7730
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
