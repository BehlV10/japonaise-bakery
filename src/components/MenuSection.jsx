import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Filter, Info, Eye } from 'lucide-react';
import { menuCategories } from '../data/bakeryData';

export default function MenuSection({ onSelectItem }) {
  const [activeCategoryId, setActiveCategoryId] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all');

  const allItems = useMemo(() => {
    return menuCategories.flatMap(cat => 
      cat.items.map(item => ({ ...item, categoryId: cat.id, categoryName: cat.name }))
    );
  }, []);

  const filteredItems = useMemo(() => {
    return allItems.filter(item => {
      // Category filter
      if (activeCategoryId !== 'all' && item.categoryId !== activeCategoryId) {
        return false;
      }
      // Dietary filter
      if (dietaryFilter === 'gluten-free' && !item.dietary?.toLowerCase().includes('gluten-free')) {
        return false;
      }
      if (dietaryFilter === 'popular' && !(item.tag?.toLowerCase().includes('popular') || item.tag?.toLowerCase().includes('bestseller') || item.tag?.toLowerCase().includes('award') || item.tag?.toLowerCase().includes('signature'))) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = item.name.toLowerCase().includes(q);
        const matchJp = item.japanese.toLowerCase().includes(q);
        const matchDesc = item.description?.toLowerCase().includes(q) || false;
        const matchCat = item.categoryName.toLowerCase().includes(q);
        return matchName || matchJp || matchDesc || matchCat;
      }
      return true;
    });
  }, [allItems, activeCategoryId, dietaryFilter, searchQuery]);

  return (
    <section id="menu" className="py-20 bg-[#F4EDE2] border-t border-b border-[#E5DAC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8C3A27] bg-[#E9DCB] px-3.5 py-1 rounded-full border border-[#D5C2AD]">
            Fresh Daily From Our Ovens
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2C231F] mt-3 mb-4">
            Our Bakery & Cafe Menu
          </h2>
          <p className="text-base sm:text-lg text-[#6B5E55]">
            Handcrafted Japanese breads, award-winning French croissants, celebration cakes, and savory onigiri. All made from scratch with genuine, imported ingredients.
          </p>
        </div>

        {/* Controls: Search & Category Tabs */}
        <div className="space-y-6 mb-10">
          
          {/* Search & Dietary Bar */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Search pastry, matcha, bread..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#D5C7B7] text-sm text-[#2C231F] focus:outline-none focus:ring-2 focus:ring-[#8C3A27] placeholder:text-stone-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Filter Badges */}
            <div className="flex items-center gap-2 flex-wrap self-start sm:self-auto">
              <span className="text-xs text-stone-500 font-medium">Filter:</span>
              <button
                onClick={() => setDietaryFilter('all')}
                className={`text-xs px-3 py-1.5 rounded-full transition font-medium cursor-pointer ${
                  dietaryFilter === 'all'
                    ? 'bg-[#8C3A27] text-white'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
                }`}
              >
                All Items
              </button>
              <button
                onClick={() => setDietaryFilter('popular')}
                className={`text-xs px-3 py-1.5 rounded-full transition font-medium cursor-pointer flex items-center gap-1 ${
                  dietaryFilter === 'popular'
                    ? 'bg-[#8C3A27] text-white'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
                }`}
              >
                <Sparkles className="w-3 h-3 text-[#D4AF37]" /> Bestsellers
              </button>
              <button
                onClick={() => setDietaryFilter('gluten-free')}
                className={`text-xs px-3 py-1.5 rounded-full transition font-medium cursor-pointer ${
                  dietaryFilter === 'gluten-free'
                    ? 'bg-[#8C3A27] text-white'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
                }`}
              >
                Gluten-Free Options
              </button>
            </div>
          </div>

          {/* Category Tabs Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#DCD0C1]">
            <button
              onClick={() => setActiveCategoryId('all')}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer ${
                activeCategoryId === 'all'
                  ? 'bg-[#2C231F] text-white shadow-sm'
                  : 'bg-white/80 text-[#5E524B] hover:bg-white border border-[#DCD0C1]'
              }`}
            >
              Full Menu ({allItems.length})
            </button>
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer flex items-center gap-2 ${
                  activeCategoryId === cat.id
                    ? 'bg-[#2C231F] text-white shadow-sm'
                    : 'bg-white/80 text-[#5E524B] hover:bg-white border border-[#DCD0C1]'
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-[11px] opacity-70">({cat.items.length})</span>
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter */}
        <div className="mb-6 flex justify-between items-center text-xs text-[#73655D]">
          <span>Showing {filteredItems.length} items</span>
          {searchQuery && (
            <span>Matching: "{searchQuery}"</span>
          )}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#DCD0C1] max-w-md mx-auto">
            <p className="text-lg font-serif text-[#2C231F] mb-2">No pastries found</p>
            <p className="text-sm text-stone-500 mb-4">
              We couldn't find any items matching "{searchQuery}".
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategoryId('all'); setDietaryFilter('all'); }}
              className="text-xs bg-[#8C3A27] text-white px-4 py-2 rounded-full font-medium"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={`${item.name}-${idx}`}
                onClick={() => onSelectItem(item)}
                className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md border border-[#E3D6C5] transition duration-200 flex flex-col justify-between group cursor-pointer hover:border-[#8C3A27]/40 relative"
              >
                <div>
                  {/* Top Badges & Category */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-[#8C3A27]">
                      {item.categoryName}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {item.tag && (
                        <span className="text-[10px] font-semibold bg-[#FAF2E6] text-[#8C3A27] border border-[#ECD9C3] px-2 py-0.5 rounded-full">
                          {item.tag}
                        </span>
                      )}
                      {item.dietary && (
                        <span className="text-[10px] font-medium bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-full">
                          {item.dietary}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Pastry Header & Japanese Name */}
                  <div className="mb-2">
                    <h3 className="text-lg font-serif font-bold text-[#2C231F] group-hover:text-[#8C3A27] transition flex items-baseline justify-between gap-2">
                      <span>{item.name}</span>
                    </h3>
                    <p className="font-jp text-xs text-[#827167] font-medium">
                      {item.japanese}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#6B5E55] leading-relaxed line-clamp-3 mb-4">
                    {item.description}
                  </p>

                  {/* Special Baking Schedule Note */}
                  {item.note && (
                    <div className="mb-3 inline-block text-[11px] font-medium text-amber-800 bg-amber-50 px-2 py-1 rounded-md border border-amber-200">
                      📅 {item.note}
                    </div>
                  )}
                </div>

                {/* Price and Details footer */}
                <div className="pt-3 border-t border-[#F0E6D8] flex items-center justify-between">
                  <span className="font-semibold text-sm text-[#2C231F]">
                    {item.price}
                  </span>
                  {item.image ? (
                    <span className="text-xs text-[#8C3A27] font-medium flex items-center gap-1 group-hover:underline">
                      <Eye className="w-3.5 h-3.5" /> View Photo
                    </span>
                  ) : (
                    <span className="text-[11px] text-stone-400 font-normal">
                      Fresh Daily
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Custom Cake Pre-Order Callout */}
        <div className="mt-14 bg-[#2C231F] text-[#FAF7F2] rounded-3xl p-8 sm:p-10 shadow-lg border border-[#3E3430] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
              Celebration Cakes
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif mt-1 mb-2">
              Ordering a Birthday or Special Event Cake?
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              Our signature Strawberry Shortcake, Chocolate Queen, and Japonaise Green Tea cakes can be custom-baked in 6-inch and 9-inch sizes. Call us in advance or email to reserve your cake!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="tel:6175667730"
              className="bg-[#D4AF37] text-[#2C231F] px-6 py-3 rounded-full text-center text-sm font-semibold hover:bg-[#E5BE45] transition cursor-pointer"
            >
              Call (617) 566-7730
            </a>
            <a
              href="mailto:japonaise617@gmail.com?subject=Cake%20Pre-Order%20Inquiry"
              className="bg-stone-800 text-stone-200 border border-stone-600 px-6 py-3 rounded-full text-center text-sm font-medium hover:bg-stone-700 transition cursor-pointer"
            >
              Email Pre-Order
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
