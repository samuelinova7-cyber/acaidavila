import React from 'react';
import { BRAND_INFO } from '../data/menu';
import { MapPin, Phone, Instagram, MessageCircle, Heart } from 'lucide-react';

interface FooterProps {
  onOpenInfo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInfo }) => {
  return (
    <footer className="bg-[#190320] border-t border-[#8E156A]/30 text-white pt-10 pb-8 px-4 sm:px-8 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-[#8E156A]/20">
        
        {/* Col 1: Brand */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black font-serif text-white">Açaí da <span className="text-[#00C853]">Vila</span></span>
            <span className="bg-[#8E156A] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">{BRAND_INFO.badge}</span>
          </div>
          <p className="text-xs text-[#E0E0E0] italic">
            "{BRAND_INFO.slogan}"
          </p>
          <p className="text-xs text-gray-400 font-light leading-relaxed">
            Açaí especial com os melhores acompanhamentos, cremes e vitaminas na Praia do Francês.
          </p>
        </div>

        {/* Col 2: Quick Links / Address */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-[#C77DFF] uppercase tracking-wider">Localização & Atendimento</h4>
          <p className="text-xs text-[#E0E0E0] flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#00C853] shrink-0" />
            <span>{BRAND_INFO.address}</span>
          </p>
          <p className="text-xs text-[#E0E0E0] flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#C77DFF] shrink-0" />
            <span>{BRAND_INFO.phone}</span>
          </p>
          <p className="text-xs text-gray-400 pt-1">
            Segunda a Domingo: 14h às 22h
          </p>
        </div>

        {/* Col 3: Social & Contact */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-[#C77DFF] uppercase tracking-wider">Redes Sociais & Contato</h4>
          <div className="flex items-center gap-3">
            <a
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#00C853] text-[#1E0427] hover:bg-[#00A843] transition-all"
              title="Falar no WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#2A0835] border border-[#8E156A]/40 text-[#C77DFF] hover:text-white transition-all"
              title="Siga no Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenInfo}
              className="text-xs text-[#00C853] hover:underline ml-2 cursor-pointer"
            >
              Ver Detalhes
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-6xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-2">
        <p>© {new Date().getFullYear()} Açaí da Vila. Todos os direitos reservados.</p>
        <p className="flex items-center gap-1">
          Feito com <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> na Praia do Francês
        </p>
      </div>
    </footer>
  );
};
