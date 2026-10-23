import React, { useEffect } from 'react';
import { X, Sparkles, AlertCircle, Calendar } from 'lucide-react';

export default function ItemModal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#E3D6C5] flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Photo header ONLY if authentic image exists */}
        {item.image ? (
          <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden shrink-0">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-stone-700 flex items-center justify-center transition shadow-sm cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {item.tag && (
              <div className="absolute bottom-3 left-3 bg-[#FAF2E6]/95 backdrop-blur-xs border border-[#ECD9C3] text-[#8C3A27] px-3 py-1 rounded-full text-xs font-semibold shadow-sm flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#C1882A]" />
                {item.tag}
              </div>
            )}
          </div>
        ) : (
          <div className="p-6 pb-3 bg-[#FAF7F2] border-b border-[#EAE0D2] flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#8C3A27] bg-[#EFE6D8] px-3 py-1 rounded-full">
              {item.categoryName}
            </span>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white text-stone-700 flex items-center justify-center transition shadow-sm border border-[#D5C2AD] cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8C3A27]">
              {item.categoryName}
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#2C231F] mt-0.5">
              {item.name}
            </h3>
            <p className="font-jp text-sm text-[#827167] font-semibold mt-0.5">
              {item.japanese}
            </p>
          </div>

          <div className="text-xl font-bold text-[#8C3A27]">
            {item.price}
          </div>

          <p className="text-sm text-[#5E524B] leading-relaxed">
            {item.description}
          </p>

          {item.note && (
            <div className="flex items-center gap-2 p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-800">
              <Calendar className="w-4 h-4 shrink-0" />
              <span><strong>Baking Schedule:</strong> {item.note}</span>
            </div>
          )}

          {item.dietary && (
            <div className="flex items-center gap-2 p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-800">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span><strong>Dietary note:</strong> {item.dietary}</span>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#FAF7F2] border-t border-[#EAE0D2] flex items-center justify-between">
          <span className="text-xs text-stone-500">
            Available in-store during regular open days
          </span>
          <button
            onClick={onClose}
            className="bg-[#8C3A27] text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-[#722F1F] transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
