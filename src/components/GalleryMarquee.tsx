import React, { useState } from 'react';
import { Camera, Sparkles, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const GALLERY_IMAGES = [
  {
    id: '1',
    url: 'https://res.cloudinary.com/vje6jqtb/image/upload/v1787178919/WhatsApp_Image_2026-08-17_at_10.38.06_PM.jpg',
    alt: 'Açaí da Vila - Praia do Francês 1'
  },
  {
    id: '2',
    url: 'https://res.cloudinary.com/vje6jqtb/image/upload/v1787178919/WhatsApp_Image_2026-08-17_at_10.38.06_PM_1.jpg',
    alt: 'Açaí da Vila - Praia do Francês 2'
  },
  {
    id: '3',
    url: 'https://res.cloudinary.com/vje6jqtb/image/upload/v1787178919/WhatsApp_Image_2026-08-17_at_10.39.19_PM_1.jpg',
    alt: 'Açaí da Vila - Praia do Francês 3'
  },
  {
    id: '4',
    url: 'https://res.cloudinary.com/vje6jqtb/image/upload/v1787178919/WhatsApp_Image_2026-08-17_at_10.38.06_PM_2.jpg',
    alt: 'Açaí da Vila - Praia do Francês 4'
  },
  {
    id: '5',
    url: 'https://res.cloudinary.com/vje6jqtb/image/upload/v1787178919/WhatsApp_Image_2026-08-17_at_10.38.05_PM.jpg',
    alt: 'Açaí da Vila - Praia do Francês 5'
  },
  {
    id: '6',
    url: 'https://res.cloudinary.com/vje6jqtb/image/upload/v1787178919/WhatsApp_Image_2026-08-17_at_10.39.19_PM.jpg',
    alt: 'Açaí da Vila - Praia do Francês 6'
  }
];

// Double list to create seamless infinite loop
const MARQUEE_ITEMS = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

export const GalleryMarquee: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleOpenModal = (indexInGallery: number) => {
    setSelectedImageIndex(indexInGallery);
  };

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_IMAGES.length);
  };

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  return (
    <section className="relative my-8 overflow-hidden rounded-2xl bg-[#2A0835]/60 border border-[#8E156A]/40 p-4 sm:p-6 shadow-2xl">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-5 px-2">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#8E156A]/30 border border-[#8E156A] flex items-center justify-center text-[#C77DFF]">
            <Camera className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-[10px] font-black text-[#00C853] uppercase tracking-widest">
              <Sparkles className="w-3 h-3" />
              <span>Experiência Açaí da Vila</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">
              Galeria de Fotos & Sabores
            </h3>
          </div>
        </div>
        <p className="text-[11px] sm:text-xs text-[#E0E0E0]/80 font-medium">
          Passe o mouse ou toque para pausar • Clique para ampliar
        </p>
      </div>

      {/* Marquee Track Container with gradient fade edges */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Left and Right Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 z-10 bg-gradient-to-r from-[#2A0835]/90 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 z-10 bg-gradient-to-l from-[#2A0835]/90 to-transparent" />

        {/* Moving Marquee Strip - moving rightwards */}
        <div className="animate-marquee-right flex gap-4 will-change-transform py-1">
          {MARQUEE_ITEMS.map((item, index) => {
            const originalIndex = index % GALLERY_IMAGES.length;
            return (
              <div
                key={`${item.id}-${index}`}
                onClick={() => handleOpenModal(originalIndex)}
                className="group relative shrink-0 w-52 sm:w-64 md:w-72 h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden cursor-pointer border border-[#8E156A]/50 bg-[#1E0427] shadow-lg transition-all duration-300 hover:border-[#00C853] hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(0,200,83,0.3)]"
              >
                <img
                  src={item.url}
                  alt={item.alt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Subtle Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E0427]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3.5">
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#00C853]" />
                    Praia do Francês
                  </span>
                  <div className="p-1.5 rounded-lg bg-[#00C853] text-[#1E0427] font-bold shadow-md">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Modal for full screen view */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-2xl w-full flex flex-col items-center">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer border border-white/20"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main Image View */}
            <div className="relative w-full rounded-2xl overflow-hidden border-2 border-[#8E156A] shadow-2xl bg-[#1E0427] max-h-[75vh] flex items-center justify-center">
              <img
                src={GALLERY_IMAGES[selectedImageIndex].url}
                alt={GALLERY_IMAGES[selectedImageIndex].alt}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[75vh] object-contain"
              />

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#8E156A] text-white transition-all border border-white/20 cursor-pointer shadow-lg"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#8E156A] text-white transition-all border border-white/20 cursor-pointer shadow-lg"
                aria-label="Próxima"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Caption & Counter */}
            <div className="mt-3 flex items-center justify-between w-full text-xs text-gray-300 px-2 font-semibold">
              <span>Açaí da Vila — Praia do Francês</span>
              <span>{selectedImageIndex + 1} de {GALLERY_IMAGES.length}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
