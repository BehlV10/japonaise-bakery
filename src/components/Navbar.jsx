import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';
import { businessInfo } from '../data/bakeryData';
import { getBakeryStatus } from '../utils/hoursUtil';

export default function Navbar({ activeSection, setActiveSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState(getBakeryStatus());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    const interval = setInterval(() => setStatus(getBakeryStatus()), 60000);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'story', label: 'Our Story' },
    { id: 'specials', label: 'Specials' },
    { id: 'jobs', label: 'Careers' },
    { id: 'contact', label: 'Hours & Visit' }
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Notification Bar */}
      <div className="bg-[#2A2320] text-[#EFEBE4] text-xs px-4 py-2 border-b border-[#3D3430]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 font-medium">
              <span className={`w-2 h-2 rounded-full ${status.color} animate-pulse`}></span>
              {status.badgeText}
            </span>
            <span className="hidden md:inline text-stone-500">•</span>
            <span className="hidden md:flex items-center gap-1 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              1020 Beacon St, Brookline (St. Mary's MBTA)
            </span>
          </div>

          <div className="flex items-center gap-4 text-stone-300">
            <a href="tel:6175667730" className="flex items-center gap-1 hover:text-white transition">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              (617) 566-7730
            </a>
            <span className="text-stone-500">•</span>
            <div className="flex items-center gap-2">
              <a
                href={businessInfo.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-400 transition"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={businessInfo.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-md py-3'
            : 'bg-[#FAF7F2] py-4'
        } border-b border-[#E8DEC8]`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group"
          >
            <img
              src="./images/CAFE_JAPONAISE.png"
              alt="Japonaise Bakery & Cafe"
              className="h-10 sm:h-12 w-auto object-contain transition group-hover:opacity-90"
            />
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm tracking-wide font-medium transition relative py-1 ${
                  activeSection === item.id
                    ? 'text-[#8C3A27] font-semibold'
                    : 'text-[#4A3E38] hover:text-[#8C3A27]'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8C3A27] rounded-full" />
                )}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('menu')}
              className="bg-[#8C3A27] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#722F1F] transition shadow-sm hover:shadow"
            >
              Order / View Menu
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => handleNavClick('menu')}
              className="bg-[#8C3A27] text-white px-3 py-1.5 rounded-full text-xs font-medium"
            >
              Menu
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#4A3E38] hover:text-black rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8DEC8] px-4 pt-3 pb-6 shadow-xl">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-2 px-3 rounded-lg text-base font-medium transition ${
                    activeSection === item.id
                      ? 'bg-[#EFE6D8] text-[#8C3A27] font-semibold'
                      : 'text-[#4A3E38] hover:bg-[#F3EDE2]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 border-t border-[#E8DEC8] flex flex-col gap-2">
                <a
                  href="tel:6175667730"
                  className="flex items-center gap-2 py-2 text-sm text-[#4A3E38]"
                >
                  <Phone className="w-4 h-4 text-[#8C3A27]" /> Call Bakery: (617) 566-7730
                </a>
                <p className="text-xs text-stone-500">
                  1020 Beacon St, Brookline MA 02446
                </p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
