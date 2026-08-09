import React, { useState } from 'react';
import { Header } from './components/Header';
import { MenuCatalog } from './components/MenuCatalog';
import { LocationModal } from './components/LocationModal';
import { Footer } from './components/Footer';
import { InstagramCarousel } from './components/InstagramCarousel';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { MapSection } from './components/MapSection';
import { BRAND_INFO } from './data/menu';
import { MapPin, Bike, MessageCircle, ExternalLink, ChevronRight } from 'lucide-react';
import heroBannerImage from './assets/images/acai_hero_banner_1786137925494.jpg';

export default function App() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const scrollToMenu = () => {
    const el = document.getElementById('cardapio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#1E0427] text-white flex flex-col font-sans selection:bg-[#C77DFF] selection:text-[#1E0427]">
      
      {/* Header */}
      <Header
        onOpenCart={() => {}}
        cartCount={0}
        onOpenInfo={() => setIsInfoOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 space-y-8">

        {/* Hero Visual Banner Card (Full width image with zoom animation) */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-[#EA1D2C]/60 shadow-[0_0_30px_rgba(234,29,44,0.25)] bg-[#1E0427] min-h-[340px] sm:min-h-[420px] md:min-h-[480px] flex items-end group">
          
          {/* Animated Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="https://res.cloudinary.com/gu3r4btn/image/upload/v1786296541/WhatsApp_Image_2026-08-09_at_2.17.43_PM_agez6d.jpg"
              alt="Açaí Fresco & Cremoso na Praia do Francês"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out animate-pulse-subtle"
            />
          </div>

          {/* Dark Contrast Gradient Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#1E0427] via-[#1E0427]/75 to-transparent sm:bg-gradient-to-r sm:from-[#1E0427] sm:via-[#1E0427]/80 sm:to-transparent" />

          {/* Hero Content Overlay */}
          <div className="relative z-20 p-6 sm:p-10 md:p-12 max-w-2xl space-y-3.5">
            <div className="inline-flex items-center gap-2 bg-[#EA1D2C] text-white text-[11px] font-black px-3.5 py-1.5 rounded-full uppercase tracking-widest shadow-lg border border-red-400/40 animate-bounce">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              <span>Açaí Fresco & Cremoso no Francês ✨</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none drop-shadow-md">
              Açaí Fresco & Cremoso na Praia do Francês
            </h2>

            <p className="text-xs sm:text-base text-[#E0E0E0] font-medium leading-relaxed max-w-lg drop-shadow">
              Sabor inigualável com ingredientes de altíssima qualidade. Peça com entrega super rápida direto no iFood ou retire na Vila dos Pescadores!
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href={BRAND_INFO.ifoodUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#EA1D2C] hover:bg-[#C81220] text-white font-black text-xs sm:text-sm px-6 py-4 rounded-xl shadow-[0_0_25px_rgba(234,29,44,0.5)] uppercase tracking-tight transition-all active:scale-95 cursor-pointer border border-red-400/40"
              >
                <span className="bg-white text-[#EA1D2C] font-black text-[10px] px-1.5 py-0.5 rounded uppercase">iFood</span>
                <span>Pedir no iFood Agora</span>
                <ExternalLink className="w-4 h-4 stroke-[2.5]" />
              </a>

              <button
                onClick={scrollToMenu}
                className="inline-flex items-center gap-2 bg-[#1E0427]/90 hover:bg-[#8E156A] text-white font-bold text-xs sm:text-sm px-6 py-4 rounded-xl border border-[#8E156A] shadow-xl backdrop-blur-md transition-all cursor-pointer uppercase tracking-tight"
              >
                <span>Ver Cardápio Completo</span>
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Info Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          
          <div className="bg-[#2A0835] border-l-4 border-l-[#EA1D2C] border-t border-r border-b border-[#8E156A]/40 rounded-r-2xl p-4 flex items-center gap-3 shadow-lg">
            <div className="p-2.5 rounded-xl bg-[#EA1D2C]/20 text-[#EA1D2C] shrink-0 border border-red-500/30 font-black text-xs">
              iFood
            </div>
            <div>
              <p className="text-[10px] text-[#C77DFF] font-black uppercase tracking-widest">Entrega Oficial</p>
              <p className="text-xs font-semibold text-white">iFood na Praia do Francês</p>
            </div>
          </div>

          <div className="bg-[#2A0835] border-l-4 border-l-[#C77DFF] border-t border-r border-b border-[#8E156A]/40 rounded-r-2xl p-4 flex items-center gap-3 shadow-lg">
            <div className="p-2.5 rounded-xl bg-[#1A237E]/60 text-[#C77DFF] shrink-0 border border-[#8E156A]/30">
              <Bike className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-[#C77DFF] font-black uppercase tracking-widest">Retirada & Balcão</p>
              <p className="text-xs font-semibold text-white">Vila dos Pescadores, 28</p>
            </div>
          </div>

          <div className="bg-[#2A0835] border-l-4 border-l-[#00C853] border-t border-r border-b border-[#8E156A]/40 rounded-r-2xl p-4 flex items-center gap-3 shadow-lg">
            <div className="p-2.5 rounded-xl bg-[#1A237E]/60 text-[#00C853] shrink-0 border border-[#8E156A]/30">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-[#C77DFF] font-black uppercase tracking-widest">Atendimento WhatsApp</p>
              <p className="text-xs font-semibold text-white">{BRAND_INFO.phone}</p>
            </div>
          </div>

        </div>

        {/* Instagram Feed & Carousel */}
        <InstagramCarousel />

        {/* Simplified Direct Price Menu */}
        <MenuCatalog />

        {/* Google Reviews Section */}
        <GoogleReviewsSection />

        {/* Location Map (Praia do Francês) */}
        <MapSection />

      </main>

      {/* Location Modal */}
      <LocationModal
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
      />

      {/* Footer */}
      <Footer onOpenInfo={() => setIsInfoOpen(true)} />

    </div>
  );
}
