import React from 'react';
import { businessInfo } from '../data/bakeryData';
import { Instagram, Facebook, Heart, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-[#241E1B] text-[#D8D0C5] pt-16 pb-12 border-t border-[#3A322D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3A322D]">
          
          {/* Col 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <img
              src="./images/CAFE_JAPONAISE.png"
              alt="Japonaise Bakery & Cafe"
              className="h-16 sm:h-20 w-auto object-contain brightness-110 mb-2"
            />
            <p className="text-xs sm:text-sm text-[#A89E93] leading-relaxed max-w-sm">
              Serving handcrafted French viennoiserie with an authentic Japanese twist since 1985. Brookline's destination for fluffy Shoku Pan, matcha croissants, and delicate celebration cakes.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={businessInfo.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#362D28] text-stone-300 hover:text-pink-400 hover:bg-[#483B35] transition flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={businessInfo.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#362D28] text-stone-300 hover:text-blue-400 hover:bg-[#483B35] transition flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {['home', 'menu', 'story', 'specials', 'jobs', 'contact'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => onNavigate(id)}
                    className="hover:text-white capitalize transition cursor-pointer"
                  >
                    {id === 'story' ? 'Our Story' : id === 'jobs' ? 'Careers & Jobs' : id === 'contact' ? 'Hours & Location' : id}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Visit & Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Bakery Information
            </h4>
            <div className="space-y-2 text-xs text-[#A89E93]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C1882A] shrink-0 mt-0.5" />
                <span>1020 Beacon Street, Brookline, MA 02446 (Opposite St. Mary's MBTA)</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C1882A] shrink-0" />
                <a href="tel:6175667730" className="hover:text-white">(617) 566-7730</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C1882A] shrink-0" />
                <a href="mailto:japonaise617@gmail.com" className="hover:text-white">japonaise617@gmail.com</a>
              </p>
              <div className="pt-2 text-[11px] text-stone-400">
                <span className="font-semibold text-stone-300">Open Days:</span> Thursday – Sunday: 8:00 AM – 8:00 PM <br />
                <span className="font-semibold text-stone-300">Baking Prep Days:</span> Monday – Wednesday (Closed)
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© {new Date().getFullYear()} Japonaise Bakery & Cafe. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-stone-400">
            Handcrafted with <Heart className="w-3.5 h-3.5 text-[#8C3A27] fill-[#8C3A27]" /> in Brookline, MA
          </p>
        </div>

      </div>
    </footer>
  );
}
