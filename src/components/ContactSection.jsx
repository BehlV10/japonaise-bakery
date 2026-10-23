import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, CheckCircle2, Send, Instagram, Facebook } from 'lucide-react';
import { businessInfo } from '../data/bakeryData';

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    inquiryType: 'general'
  });

  const todayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday, etc.
  // map to our array: 0 -> Sunday, 1 -> Monday, etc.
  const dayOrder = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = dayOrder[todayIndex];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct real mailto string to japonaise617@gmail.com
    const subject = encodeURIComponent(`[Japonaise Website Inquiry] ${formData.inquiryType.toUpperCase()}: ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Japonaise Bakery,\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n` +
      `Inquiry Topic: ${formData.inquiryType}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `---\nSent via Japonaise Bakery Redesigned Website`
    );

    // Launch user's default email client with prefilled draft
    window.location.href = `mailto:${businessInfo.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#F4EDE2] border-t border-[#E5DAC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8C3A27] bg-[#EFE6D8] px-3.5 py-1 rounded-full border border-[#DFCBB5]">
            Visit Us in Brookline
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2C231F] mt-3 mb-4">
            Hours & Location
          </h2>
          <p className="text-base sm:text-lg text-[#6B5E55]">
            We're conveniently located directly across from the MBTA Green Line C-Branch at St. Mary's Street, right next door to Whole Foods Market.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Hours Table & Direct Contacts (7 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Store Hours Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E3D6C5] shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#F0E6D8]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAF2E6] text-[#8C3A27] flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-[#2C231F]">
                      Store Hours
                    </h3>
                    <p className="text-xs text-stone-500">
                      Fresh bakes Thursday through Sunday
                    </p>
                  </div>
                </div>
                <span className="text-[11px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full font-medium">
                  Eastern Time (EST)
                </span>
              </div>

              {/* Hours Rows */}
              <div className="space-y-2.5">
                {businessInfo.hours.map((h) => {
                  const isToday = h.day === todayName;
                  return (
                    <div
                      key={h.day}
                      className={`flex items-center justify-between py-2 px-3.5 rounded-xl text-sm transition ${
                        isToday
                          ? 'bg-[#FAF2E6] border border-[#ECD9C3] font-semibold text-[#8C3A27]'
                          : 'text-[#5E524B] hover:bg-stone-50'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {h.day}
                        {isToday && (
                          <span className="text-[10px] bg-[#8C3A27] text-white px-1.5 py-0.2 rounded font-normal">
                            Today
                          </span>
                        )}
                      </span>
                      <span className={h.open ? 'font-medium text-[#2C231F]' : 'text-stone-400 font-normal'}>
                        {h.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0E6D8] text-xs text-stone-500 leading-relaxed">
                * Note: Closed Monday, Tuesday, and Wednesday to prepare artisanal sourdough, dough laminations, and pastry fillings.
              </div>
            </div>

            {/* Contact Details Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E3D6C5] shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
                  Address
                </span>
                <p className="font-medium text-sm text-[#2C231F]">
                  1020 Beacon Street
                </p>
                <p className="text-xs text-stone-500">
                  Brookline, MA 02446
                </p>
                <p className="text-xs text-[#8C3A27] pt-1">
                  MBTA Green Line 'C' (St. Mary's)
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
                  Get In Touch
                </span>
                <p>
                  <a href="tel:6175667730" className="font-medium text-sm text-[#2C231F] hover:text-[#8C3A27] transition flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#8C3A27]" /> (617) 566-7730
                  </a>
                </p>
                <p>
                  <a href="mailto:japonaise617@gmail.com" className="text-xs text-[#5E524B] hover:text-[#8C3A27] transition flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#8C3A27]" /> japonaise617@gmail.com
                  </a>
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={businessInfo.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-full bg-stone-100 text-stone-600 hover:text-pink-600 hover:bg-pink-50 transition"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={businessInfo.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-full bg-stone-100 text-stone-600 hover:text-blue-600 hover:bg-blue-50 transition"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Google Map Embed & Directions Guide (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Map Frame */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#E3D6C5] shadow-sm">
              <div className="p-4 border-b border-[#F0E6D8] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#8C3A27]" />
                  <span className="text-xs font-semibold text-[#2C231F]">
                    Interactive Map · 1020 Beacon St, Brookline
                  </span>
                </div>
                <a
                  href="https://maps.google.com/?q=1020+Beacon+Street+Brookline+MA+02446"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#8C3A27] hover:underline flex items-center gap-1"
                >
                  <Navigation className="w-3 h-3" /> Open in Google Maps
                </a>
              </div>
              
              <div className="aspect-[16/10] w-full bg-stone-100">
                <iframe
                  title="Japonaise Bakery Location"
                  src="https://maps.google.com/maps?q=1020%20Beacon%20Street,%20Brookline,%20MA%2002446&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Transit Tips */}
              <div className="p-6 bg-[#FFFDF9] border-t border-[#F0E6D8]">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2C231F] mb-2">
                  Transit & Parking Instructions:
                </h4>
                <ul className="text-xs text-[#6B5E55] space-y-1.5">
                  <li>🚇 <strong>MBTA Green Line:</strong> Take the C Line train to <em>St. Mary’s Street</em> stop. The bakery is directly across the street.</li>
                  <li>🚗 <strong>Driving / Parking:</strong> Metered 2-hour parking available directly along Beacon Street and adjacent side streets.</li>
                  <li>🛒 <strong>Landmark:</strong> Situated right next door to Whole Foods Market on Beacon Street.</li>
                </ul>
              </div>
            </div>

            {/* Quick Message Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E3D6C5] shadow-sm">
              <h3 className="font-serif font-bold text-xl text-[#2C231F] mb-1">
                Send Us a Note
              </h3>
              <p className="text-xs text-stone-500 mb-6">
                Have questions about custom cakes, holiday specials, or ingredient allergies? Drop us a message!
              </p>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl p-6 text-center">
                  <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
                  <p className="text-sm font-semibold mb-1">Thank you for your message!</p>
                  <p className="text-xs text-emerald-700">
                    We’ve received your inquiry and will respond to your email as soon as our bakery team is out of the kitchen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#2C231F] mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Maya Chen"
                        className="w-full px-3.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#D5C7B7] text-xs text-[#2C231F] focus:outline-none focus:ring-2 focus:ring-[#8C3A27]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#2C231F] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="maya@example.com"
                        className="w-full px-3.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#D5C7B7] text-xs text-[#2C231F] focus:outline-none focus:ring-2 focus:ring-[#8C3A27]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#2C231F] mb-1">
                      Inquiry Topic
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#D5C7B7] text-xs text-[#2C231F] focus:outline-none focus:ring-2 focus:ring-[#8C3A27]"
                    >
                      <option value="general">General Question</option>
                      <option value="cake">Custom Celebration Cake Order</option>
                      <option value="holiday">Holiday Specials Reserve</option>
                      <option value="jobs">Career / Employment Opportunity</option>
                      <option value="allergies">Dietary / Allergy Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#2C231F] mb-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what date, quantity, or questions you have..."
                      className="w-full px-3.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#D5C7B7] text-xs text-[#2C231F] focus:outline-none focus:ring-2 focus:ring-[#8C3A27]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#8C3A27] text-white py-2.5 rounded-xl text-xs font-semibold hover:bg-[#722F1F] transition flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" /> Send Message to Japonaise
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
