import React from 'react';
import { BRAND_INFO } from '../data/menu';
import { X, MapPin, Clock, Phone, MessageCircle, Instagram, ExternalLink, Bike, Store } from 'lucide-react';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LocationModal: React.FC<LocationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-md bg-[#2A0835] text-white rounded-r-3xl p-6 border-l-4 border-l-[#C77DFF] border-t border-r border-b border-[#8E156A]/50 shadow-2xl space-y-6 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#8E156A]/30 pb-4">
          <div>
            <span className="text-[10px] font-black text-[#00C853] uppercase tracking-widest">{BRAND_INFO.badge}</span>
            <h3 className="text-xl font-black text-white uppercase tracking-tight">{BRAND_INFO.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-[#1E0427] text-[#E0E0E0] hover:text-white border border-[#8E156A]/40 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Address Card */}
        <div className="space-y-4">
          
          <div className="flex items-start gap-3 bg-[#1E0427] p-4 rounded-2xl border border-[#8E156A]/30">
            <MapPin className="w-5 h-5 text-[#00C853] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-[#C77DFF] uppercase tracking-wider mb-1">Endereço Local</h4>
              <p className="text-sm text-white font-medium">{BRAND_INFO.address}</p>
              <p className="text-xs text-[#E0E0E0] mt-1">Praia do Francês — Marechal Deodoro / AL</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-[#1E0427] p-4 rounded-2xl border border-[#8E156A]/30">
            <Clock className="w-5 h-5 text-[#C77DFF] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-[#C77DFF] uppercase tracking-wider">Horário de Atendimento</h4>
              <div className="text-xs text-white space-y-0.5 font-medium">
                <p><span className="text-[#00C853] font-bold">• Terça a Sexta:</span> 08h às 18:30</p>
                <p><span className="text-[#00C853] font-bold">• Sábado e Domingo:</span> 08h às 20:00</p>
                <p><span className="text-rose-400 font-bold">• Segunda-feira:</span> Fechado</p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-[#1E0427] p-4 rounded-2xl border border-[#8E156A]/30">
            <Phone className="w-5 h-5 text-[#00C853] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-[#C77DFF] uppercase tracking-wider mb-1">Telefone / WhatsApp</h4>
              <p className="text-sm text-white font-medium">{BRAND_INFO.phone}</p>
            </div>
          </div>

          <div className="bg-[#1E0427] p-4 rounded-2xl border border-[#8E156A]/30 space-y-2">
            <h4 className="text-xs font-bold text-[#C77DFF] uppercase tracking-wider">Opções de Serviço</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#E0E0E0]">
              <div className="flex items-center gap-1.5 bg-[#2A0835] p-2 rounded-xl">
                <Store className="w-4 h-4 text-[#C77DFF]" />
                <span>Retirada no Local</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#2A0835] p-2 rounded-xl">
                <Bike className="w-4 h-4 text-[#00C853]" />
                <span>Delivery Francês</span>
              </div>
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="pt-2 border-t border-[#8E156A]/30 space-y-2">
          <a
            href={BRAND_INFO.ifoodUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#EA1D2C] hover:bg-[#C81220] text-white font-black text-xs px-4 py-3 rounded-xl shadow-[0_0_15px_rgba(234,29,44,0.3)] uppercase tracking-tight transition-all cursor-pointer border border-red-400/30"
          >
            <span className="bg-white text-[#EA1D2C] font-black text-[9px] px-1 py-0.5 rounded uppercase">iFood</span>
            <span>Pedir no iFood</span>
          </a>

          <a
            href={BRAND_INFO.whatsappLocationUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 btn-whatsapp-vibrant btn-whatsapp-pulse text-xs px-4 py-3.5 rounded-xl uppercase tracking-tight shadow-[0_0_20px_rgba(0,230,118,0.5)] transition-all cursor-pointer active:scale-95"
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute w-3.5 h-3.5 rounded-full bg-white/70 animate-ping opacity-75" />
              <MessageCircle className="w-4 h-4 fill-current relative z-10" />
            </div>
            <span>Falar no WhatsApp Direct</span>
          </a>

          <a
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#1E0427] hover:bg-[#8E156A]/30 text-white font-bold text-xs px-4 py-3 rounded-xl border border-[#8E156A]/40 transition-all cursor-pointer"
          >
            <Instagram className="w-4 h-4 text-[#C77DFF]" />
            <span>Siga no Instagram {BRAND_INFO.instagram}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-auto" />
          </a>
        </div>

      </div>
    </div>
  );
};
