import React, { useState, useEffect } from 'react';
import { BRAND_INFO } from '../data/menu';
import { MapPin, Clock, Phone, ShoppingBag, Sparkles, Instagram, MessageCircle, Info } from 'lucide-react';

interface HeaderProps {
  onOpenCart: () => void;
  cartCount: number;
  onOpenInfo: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCart, cartCount, onOpenInfo }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if open (14h to 22h local time)
    const now = new Date();
    const currentHour = now.getHours();
    setIsOpen(currentHour >= BRAND_INFO.openingStartHour && currentHour < BRAND_INFO.openingEndHour);
  }, []);

  return (
    <header className="relative bg-[#1E0427] border-b border-[#8E156A]/40">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-[#2A0835] via-[#8E156A] to-[#2A0835] text-white py-2 px-4 text-xs font-semibold text-center flex items-center justify-center gap-2 border-b border-[#C77DFF]/20">
        <span className="bg-[#00C853] text-[#1E0427] text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-widest shadow-sm">
          {BRAND_INFO.badge}
        </span>
        <span className="tracking-wide">{BRAND_INFO.slogan}</span>
        <span className="hidden sm:inline text-[#C77DFF] opacity-90">• Praia do Francês</span>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#2A0835] to-[#1E0427] pt-8 pb-10 px-4 sm:px-8">
        {/* Background decorative circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#8E156A]/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#C77DFF]/15 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          
          {/* Brand Info */}
          <div className="text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 bg-[#2A0835] border border-[#8E156A] px-3.5 py-1 rounded-full text-xs font-bold text-[#C77DFF] mb-3 shadow-inner uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#00C853] animate-pulse" />
              <span>Açaí Especial, Cremes, Vitaminas e Sucos</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-black tracking-tighter text-white mb-2 uppercase">
              AÇAÍ DA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C77DFF] via-[#00C853] to-[#C77DFF]">VILA</span>
            </h1>

            <p className="text-[#C77DFF] font-medium tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">
              {BRAND_INFO.slogan}
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs">
              {/* Status Badge */}
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[11px] border ${
                isOpen 
                  ? 'bg-[#00C853]/15 text-[#00C853] border-[#00C853]/50' 
                  : 'bg-amber-500/15 text-amber-300 border-amber-500/40'
              }`}>
                <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-[#00C853] animate-ping' : 'bg-amber-400'}`} />
                {isOpen ? 'Aberto Agora (14h - 22h)' : 'Atendimento das 14h às 22h'}
              </div>

              {/* Location Badge */}
              <button 
                onClick={onOpenInfo}
                className="inline-flex items-center gap-1.5 bg-[#2A0835] hover:bg-[#8E156A]/40 text-[#E0E0E0] hover:text-white px-3 py-1 rounded-full border border-[#8E156A] transition-all cursor-pointer font-medium"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C77DFF]" />
                <span className="truncate max-w-[200px] sm:max-w-none">Vila dos Pescadores, 28</span>
              </button>

              {/* Instagram link */}
              <a 
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#2A0835] hover:bg-[#8E156A]/40 text-[#E0E0E0] hover:text-white px-3 py-1 rounded-full border border-[#8E156A] transition-all cursor-pointer font-medium"
              >
                <Instagram className="w-3.5 h-3.5 text-[#C77DFF]" />
                <span>{BRAND_INFO.instagram}</span>
              </a>
            </div>
          </div>

          {/* Action CTAs & Cart Trigger */}
          <div className="flex flex-row md:flex-col items-center gap-3 w-full sm:w-auto justify-center">
            
            {/* WhatsApp Direct */}
            <a
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#00C853] hover:bg-[#00A843] text-[#1E0427] font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-[0_0_20px_rgba(0,200,83,0.3)] uppercase tracking-tight transition-all transform active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Peça pelo WhatsApp</span>
            </a>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="flex-1 sm:flex-none relative inline-flex items-center justify-center gap-2 bg-[#2A0835] hover:bg-[#8E156A]/80 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl border border-[#8E156A] shadow-xl transition-all transform active:scale-95 cursor-pointer uppercase tracking-tight"
            >
              <ShoppingBag className="w-4 h-4 text-[#C77DFF]" />
              <span>Ver Pedido</span>
              {cartCount > 0 && (
                <span className="bg-[#00C853] text-[#1E0427] font-black text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Store Details Button */}
            <button
              onClick={onOpenInfo}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#C77DFF] hover:underline cursor-pointer pt-1 font-medium tracking-wider uppercase"
            >
              <Info className="w-3.5 h-3.5" />
              <span>Horários & Endereço</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
