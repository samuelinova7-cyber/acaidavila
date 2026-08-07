import React from 'react';
import { MapPin, Clock, Navigation, ExternalLink, Phone, MessageCircle, Bike, Store } from 'lucide-react';
import { BRAND_INFO } from '../data/menu';

export const MapSection: React.FC = () => {
  // Google Maps embed URL for Praia do Francês, Marechal Deodoro - AL
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15730.0!2d-35.8450!3d-9.7700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7014605e55555555%3A0x0!2sPraia%20do%20Franc%C3%AAs%2C%20Marechal%20Deodoro%20-%20AL!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr`;

  const googleMapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=Vila+dos+Pescadores+28+Praia+do+Frances+Marechal+Deodoro+AL`;
  const wazeDirectionsUrl = `https://waze.com/ul?q=Vila+dos+Pescadores+28+Praia+do+Frances`;

  return (
    <section className="bg-[#2A0835] border-l-4 border-l-[#C77DFF] border-t border-r border-b border-[#8E156A]/50 rounded-r-2xl p-5 sm:p-8 shadow-2xl space-y-6 my-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#8E156A]/30">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[10px] font-black text-[#00C853] uppercase tracking-widest mb-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>Nossa Localização Física</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            Venha nos Visitar no Francês
          </h3>
          <p className="text-xs text-[#E0E0E0] mt-1">
            Estamos localizados no coração da Vila dos Pescadores na Praia do Francês.
          </p>
        </div>

        {/* Quick Directions Buttons */}
        <div className="flex items-center gap-2 self-stretch sm:self-auto">
          <a
            href={googleMapsDirectionsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#00C853] hover:bg-[#00A843] text-[#1E0427] font-black text-xs px-4 py-3 rounded-xl shadow-[0_0_15px_rgba(0,200,83,0.3)] uppercase tracking-tight transition-all active:scale-95 cursor-pointer"
          >
            <Navigation className="w-4 h-4 fill-current" />
            <span>Google Maps</span>
          </a>

          <a
            href={wazeDirectionsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#1E0427] hover:bg-[#8E156A] text-white border border-[#8E156A] font-bold text-xs px-4 py-3 rounded-xl transition-all active:scale-95 cursor-pointer uppercase tracking-tight"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Waze</span>
          </a>
        </div>
      </div>

      {/* Grid: Map + Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        
        {/* Interactive Google Map iframe */}
        <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-[#8E156A]/50 shadow-xl min-h-[300px] sm:min-h-[380px] relative bg-[#1E0427]">
          <iframe
            title="Açaí da Vila - Praia do Francês"
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '320px' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full filter saturate-150 contrast-105"
          />

          <div className="absolute bottom-3 left-3 right-3 sm:left-4 sm:right-auto bg-[#1E0427]/90 backdrop-blur-md border border-[#8E156A] p-3 rounded-xl text-xs text-white shadow-2xl flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#00C853] text-[#1E0427] font-black">
              <Store className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-white uppercase text-[11px] tracking-wider">{BRAND_INFO.name}</p>
              <p className="text-[#C77DFF] text-[11px]">{BRAND_INFO.address}</p>
            </div>
          </div>
        </div>

        {/* Store Info Cards */}
        <div className="flex flex-col justify-between space-y-4">
          
          {/* Address Card */}
          <div className="bg-[#1E0427] border border-[#8E156A]/40 rounded-2xl p-4 space-y-2">
            <div className="flex items-center gap-2 text-[#00C853] font-bold text-xs uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Endereço Completo</span>
            </div>
            <p className="text-sm font-semibold text-white leading-relaxed">
              Vila dos Pescadores, Nº 28
            </p>
            <p className="text-xs text-[#E0E0E0]">
              Praia do Francês, Marechal Deodoro - AL
            </p>
          </div>

          {/* Opening Hours */}
          <div className="bg-[#1E0427] border border-[#8E156A]/40 rounded-2xl p-4 space-y-2">
            <div className="flex items-center gap-2 text-[#C77DFF] font-bold text-xs uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>Horário de Funcionamento</span>
            </div>
            <p className="text-sm font-bold text-white">
              {BRAND_INFO.hours}
            </p>
            <span className="inline-block bg-[#00C853]/15 text-[#00C853] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#00C853]/40 uppercase tracking-wider">
              Aberto Todos os Dias
            </span>
          </div>

          {/* Delivery & WhatsApp */}
          <div className="bg-[#1E0427] border border-[#8E156A]/40 rounded-2xl p-4 space-y-3">
            <div className="flex items-center gap-2 text-[#00C853] font-bold text-xs uppercase tracking-wider">
              <Bike className="w-4 h-4" />
              <span>Atendimento & Delivery</span>
            </div>
            <p className="text-xs text-[#E0E0E0]">
              Entregamos em pousadas, hotéis e residências em toda a extensão da Praia do Francês.
            </p>

            <a
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#00C853] hover:bg-[#00A843] text-[#1E0427] font-black text-xs py-3 rounded-xl uppercase tracking-tight shadow transition-all active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};
