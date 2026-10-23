import React from 'react';
import { historyTimeline } from '../data/bakeryData';
import { Award, Clock, Heart } from 'lucide-react';

export default function OurStory() {
  return (
    <section id="story" className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8C3A27] bg-[#EFE6D8] px-3.5 py-1 rounded-full border border-[#DFCBB5]">
            Our Heritage & Craft
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2C231F] mt-3 mb-4">
            Four Decades of Passion & Pastry
          </h2>
          <p className="text-base sm:text-lg text-[#6B5E55] leading-relaxed">
            In 1985, Hiroko Sakan introduced Greater Boston to the delicate intersection of traditional French viennoiserie and Japanese baking techniques. Today, that legacy continues right on Beacon Street.
          </p>
        </div>

        {/* Feature Story Highlights Box */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16 bg-[#F4EDE2] p-8 sm:p-12 rounded-3xl border border-[#E3D6C5]">
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-serif text-[#2C231F]">
              The Japanese Philosophy of Baking
            </h3>
            <p className="text-sm sm:text-base text-[#5E524B] leading-relaxed">
              Western pastries traditionally emphasize intense sweetness and heavy frostings. Japanese pastry masters take a different path: airy lightness, subtle natural sweetness, cloud-soft milk doughs, and the gentle bitterness of ceremonial green tea.
            </p>
            <p className="text-sm sm:text-base text-[#5E524B] leading-relaxed">
              Every morning before dawn, our bakers mix, laminate, and proof each batch by hand. We never cut corners, nor do we use artificial preservatives—which is why our Shoku Pan, croissants, and red bean pastries remain neighborhood institutions.
            </p>
            
            <div className="pt-4 flex items-center gap-6 text-xs text-[#73655D]">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#8C3A27]" />
                <span>Family-Owned & Operated</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#C1882A]" />
                <span>Original 1985 Recipes</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="rounded-2xl overflow-hidden shadow-sm aspect-square bg-stone-100">
              <img
                src="./images/ma16_page_50_image_0001.jpg"
                alt="Original Best of Boston newspaper clipping"
                className="w-full h-full object-cover object-top hover:scale-105 transition duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm aspect-square bg-stone-100">
              <img
                src="./images/57568603_1622843458158394_r.jpg"
                alt="Founder Hiroko Sakan"
                className="w-full h-full object-cover object-center hover:scale-105 transition duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm aspect-square bg-stone-100">
              <img
                src="./images/_MG_6409.jpeg"
                alt="Bakery team at work"
                className="w-full h-full object-cover object-center hover:scale-105 transition duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm aspect-square bg-stone-100">
              <img
                src="./images/Screen_Shot_2023-08-15_at_5.31.12_PM.jpg"
                alt="Renovated bakery interior"
                className="w-full h-full object-cover object-center hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>

        {/* Chronological Timeline */}
        <div className="relative border-l-2 border-[#D5C2AD] ml-4 sm:ml-32 space-y-12">
          {historyTimeline.map((item, index) => (
            <div key={item.year} className="relative pl-6 sm:pl-10">
              
              {/* Year badge on the timeline node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#8C3A27] text-white flex items-center justify-center text-xs font-bold shadow-md">
                {index + 1}
              </div>

              {/* Year Label */}
              <div className="sm:absolute sm:-left-28 sm:top-2 sm:text-right">
                <span className="font-serif font-bold text-2xl text-[#8C3A27] tracking-tight">
                  {item.year}
                </span>
              </div>

              {/* Content Card */}
              <div className="bg-white p-6 rounded-2xl border border-[#E3D6C5] shadow-sm hover:shadow-md transition">
                <h4 className="text-lg font-serif font-bold text-[#2C231F] mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-[#5E524B] leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
