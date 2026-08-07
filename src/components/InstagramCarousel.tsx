import React, { useState, useEffect, useRef } from 'react';
import { BRAND_INFO } from '../data/menu';
import { Instagram, ChevronLeft, ChevronRight, ExternalLink, Heart, Sparkles, X } from 'lucide-react';

const INSTAGRAM_IMAGES = [
  {
    id: '1',
    url: 'https://res.cloudinary.com/mcmdjnsb/image/upload/v1786138598/SnapInsta.to_625225631_18015033821650464_5521151533245163634_n_tunfaq.jpg',
    caption: 'Açaí da Vila cremoso e geladinho! 🍧✨',
    likes: '142'
  },
  {
    id: '2',
    url: 'https://res.cloudinary.com/mcmdjnsb/image/upload/v1786138597/SnapInsta.to_630975784_18412561960192172_6396295359952603322_n_tu2sv2.jpg',
    caption: 'Combinação perfeita com frutas e leites! 🍓🍌',
    likes: '189'
  },
  {
    id: '3',
    url: 'https://res.cloudinary.com/mcmdjnsb/image/upload/v1786138597/SnapInsta.to_623394809_18064395965275348_2581205617785178219_n_dsediu.jpg',
    caption: 'Capricho e sabor na Vila dos Pescadores! 🌴',
    likes: '215'
  },
  {
    id: '4',
    url: 'https://res.cloudinary.com/mcmdjnsb/image/upload/v1786138596/SnapInsta.to_652223728_18055703846498396_6206647023654043351_n_zltu2q.jpg',
    caption: 'Cremes especiais para refrescar o seu dia 🍨',
    likes: '167'
  },
  {
    id: '5',
    url: 'https://res.cloudinary.com/mcmdjnsb/image/upload/v1786138597/SnapInsta.to_624841943_18082912289337184_5670003246831811522_n_zikxz5.jpg',
    caption: 'Vem montar o seu copo dos sonhos! ✨',
    likes: '198'
  },
  {
    id: '6',
    url: 'https://res.cloudinary.com/mcmdjnsb/image/upload/v1786138597/SnapInsta.to_710650239_18193626754370705_526230938598313931_n_oske12.jpg',
    caption: 'Praia do Francês combina com Açaí da Vila 🏖️',
    likes: '240'
  }
];

export const InstagramCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState<typeof INSTAGRAM_IMAGES[0] | null>(null);

  // Auto-scroll loop
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // If reached end, scroll back to start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 240, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#2A0835] border-l-4 border-l-[#00C853] border-t border-r border-b border-[#8E156A]/50 rounded-r-2xl p-4 sm:p-6 shadow-2xl relative overflow-hidden my-6">
      
      {/* Header section with Instagram details and Follow Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-[#8E156A]/30">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[10px] font-black text-[#C77DFF] uppercase tracking-widest mb-1">
            <Instagram className="w-3.5 h-3.5 text-[#00C853]" />
            <span>Rede Social Oficial</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight flex items-center gap-2">
            <span>Siga no Instagram</span>
            <span className="text-[#00C853] text-sm font-semibold lowercase font-mono">
              {BRAND_INFO.instagram}
            </span>
          </h3>
          <p className="text-xs text-[#E0E0E0] mt-0.5">
            Acompanhe nossas novidades, fotos dos clientes e promoções exclusivas!
          </p>
        </div>

        {/* Follow CTA Button */}
        <a
          href={BRAND_INFO.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#8E156A] via-[#C77DFF] to-[#8E156A] hover:brightness-110 text-white font-black text-xs px-5 py-3 rounded-xl shadow-[0_0_15px_rgba(199,125,255,0.3)] uppercase tracking-tight transition-all active:scale-95 cursor-pointer shrink-0"
        >
          <Instagram className="w-4 h-4" />
          <span>Seguir {BRAND_INFO.instagram}</span>
          <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
        </a>
      </div>

      {/* Carousel Wrapper */}
      <div 
        className="relative group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        
        {/* Navigation Buttons */}
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#1E0427]/80 hover:bg-[#8E156A] text-white border border-[#C77DFF]/40 flex items-center justify-center shadow-lg transition-all cursor-pointer backdrop-blur-sm opacity-90 group-hover:opacity-100"
          title="Anterior"
        >
          <ChevronLeft className="w-5 h-5 stroke-[3]" />
        </button>

        <button
          onClick={() => handleScroll('right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#1E0427]/80 hover:bg-[#8E156A] text-white border border-[#C77DFF]/40 flex items-center justify-center shadow-lg transition-all cursor-pointer backdrop-blur-sm opacity-90 group-hover:opacity-100"
          title="Próximo"
        >
          <ChevronRight className="w-5 h-5 stroke-[3]" />
        </button>

        {/* Images Track */}
        <div
          ref={scrollRef}
          className="flex items-center gap-4 overflow-x-auto scrollbar-none py-2 px-1 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {INSTAGRAM_IMAGES.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="snap-start shrink-0 w-48 sm:w-56 h-64 sm:h-72 rounded-2xl overflow-hidden relative border border-[#8E156A]/50 shadow-xl cursor-pointer group/card transition-all duration-300 transform hover:-translate-y-1 hover:border-[#00C853]"
            >
              <img
                src={img.url}
                alt={img.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E0427] via-[#1E0427]/40 to-transparent opacity-80 group-hover/card:opacity-95 transition-opacity flex flex-col justify-end p-3.5">
                <div className="flex items-center gap-1.5 text-rose-400 text-xs font-bold mb-1">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  <span>{img.likes} curtidas</span>
                </div>
                <p className="text-xs text-white font-medium line-clamp-2 leading-snug">
                  {img.caption}
                </p>
                <span className="text-[10px] text-[#C77DFF] font-bold uppercase tracking-wider mt-2 flex items-center gap-1">
                  <span>Ver Foto</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal for Zoomed Image */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-lg w-full bg-[#2A0835] border border-[#8E156A] rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-30 p-2 rounded-full bg-[#1E0427]/80 text-white border border-[#8E156A] cursor-pointer hover:bg-[#8E156A]"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedImage.url}
              alt={selectedImage.caption}
              referrerPolicy="no-referrer"
              className="w-full h-80 sm:h-96 object-cover"
            />

            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between text-xs text-[#C77DFF]">
                <div className="flex items-center gap-1.5 text-rose-400 font-bold">
                  <Heart className="w-4 h-4 fill-current" />
                  <span>{selectedImage.likes} curtidas</span>
                </div>
                <span className="font-bold">{BRAND_INFO.instagram}</span>
              </div>

              <p className="text-sm text-white font-medium">
                {selectedImage.caption}
              </p>

              <div className="pt-2 border-t border-[#8E156A]/30 flex items-center justify-between gap-3">
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#00C853] hover:bg-[#00A843] text-[#1E0427] font-black text-xs py-3 rounded-xl uppercase tracking-wider shadow"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Ver Perfil no Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
