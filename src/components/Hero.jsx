import React from 'react';
import { ArrowRight, Sparkles, Award, MapPin, Clock } from 'lucide-react';
import { businessInfo } from '../data/bakeryData';

export default function Hero({ onExploreMenu, onVisit }) {
  return (
    <section id="home" className="pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Story & Hero Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Heritage Pill */}
            <div className="inline-flex items-center gap-2 self-start bg-[#EFE6D8] border border-[#DFCBB5] text-[#8C3A27] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Award className="w-4 h-4 text-[#C1882A]" />
              <span>Brookline’s Japanese-French Artisan Bakery Since 1985</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#2C231F] leading-[1.15] tracking-tight mb-6">
              French pastry precision. <br />
              <span className="italic font-normal text-[#8C3A27]">Japanese soul.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#5E524B] max-w-2xl leading-relaxed mb-8">
              From our cloud-soft <span className="font-semibold text-[#2C231F]">Shoku Pan</span> milk bread and flaky <span className="font-semibold text-[#2C231F]">Matcha Azuki</span> croissants to handmade celebration cakes and savory onigiri, every item is baked from scratch with love in Brookline.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onExploreMenu}
                className="bg-[#8C3A27] text-white px-7 py-3.5 rounded-full font-medium text-base hover:bg-[#722F1F] transition shadow-md hover:shadow-lg flex items-center gap-2 group cursor-pointer"
              >
                <span>View Full Bakery Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onVisit}
                className="bg-transparent border border-[#9E8B7C] text-[#2C231F] px-6 py-3.5 rounded-full font-medium text-base hover:bg-[#EFE6D8] transition flex items-center gap-2 cursor-pointer"
              >
                <Clock className="w-4 h-4 text-[#8C3A27]" />
                <span>Hours & Directions</span>
              </button>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E8DEC8]">
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-[#8C3A27]">1985</p>
                <p className="text-xs sm:text-sm text-[#73655D] mt-1">Established in Greater Boston</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-[#8C3A27]">100%</p>
                <p className="text-xs sm:text-sm text-[#73655D] mt-1">Scratch-Made Daily</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-[#8C3A27]">Awarded</p>
                <p className="text-xs sm:text-sm text-[#73655D] mt-1">Best of Boston Croissant</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#E6D4BE] to-[#F1E5D5] rounded-3xl transform rotate-2 blur-xs"></div>
              
              {/* Main Visual Image Card */}
              <div className="relative bg-white p-3 rounded-2xl shadow-xl border border-[#E8DEC8]">
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-stone-100">
                  <img
                    src="./images/DSC_6880-2.jpg"
                    alt="Fresh Japonaise croissants and Japanese pastries"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition duration-700"
                  />
                  
                  {/* Subtle Top-Right Tag */}
                  <div className="absolute top-3 right-3 bg-[#FAF7F2]/95 backdrop-blur-md px-3 py-1 rounded-full shadow-sm border border-[#DFCBB5] flex items-center gap-1.5 text-xs font-medium text-[#2C231F]">
                    <Sparkles className="w-3.5 h-3.5 text-[#C1882A]" />
                    <span>Baked Daily from Scratch</span>
                  </div>
                </div>

                {/* Sub-card snippet */}
                <div className="mt-3.5 px-2 pb-1 flex items-center justify-between text-xs text-[#5E524B]">
                  <span className="font-serif italic font-medium text-sm text-[#2C231F]">
                    "Japanese-Inspired French Pastries"
                  </span>
                  <span className="font-jp text-stone-500">
                    ジャポネーズ・ベーカリー
                  </span>
                </div>
              </div>

              {/* Award Badge - Positioned Cleanly Below Card, No Overlap */}
              <div className="mt-4 bg-white p-3.5 rounded-2xl shadow-sm border border-[#E8DEC8] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EFE6D8] flex items-center justify-center text-[#8C3A27] shrink-0">
                  <Award className="w-5 h-5 text-[#8C3A27]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#2C231F]">Boston Food Lover Award</p>
                  <p className="text-[11px] text-[#73655D]">Voted Boston's Best Authentic Croissants</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
