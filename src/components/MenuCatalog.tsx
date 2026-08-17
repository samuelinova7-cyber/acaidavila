import React, { useState } from 'react';
import { 
  BRAND_INFO, 
  ACAI_SIZES, 
  CREME_SIZES, 
  ADD_ONS, 
  VITAMINAS, 
  SUCOS_FRUTAS, 
  SALGADOS_E_BEBIDAS, 
  ESPECIAIS_COMBO 
} from '../data/menu';
import { Search, ExternalLink, Sparkles, Flame } from 'lucide-react';

export const MenuCatalog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<1 | 2 | 3 | 'todos'>('todos');

  // Helper search filter
  const matchesSearch = (text: string, desc: string = '') => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return text.toLowerCase().includes(q) || desc.toLowerCase().includes(q);
  };

  return (
    <div className="space-y-8" id="cardapio">
      
      {/* Menu Header with Category Nav Tabs */}
      <div className="bg-[#2A0835] border-l-4 border-l-[#EA1D2C] border-t border-r border-b border-[#8E156A]/50 rounded-r-2xl p-5 sm:p-6 shadow-2xl space-y-5">
        
        {/* Opções Deliciosas Banner Image */}
        <div className="relative rounded-2xl overflow-hidden border border-[#8E156A]/60 shadow-xl bg-[#1E0427] max-h-[300px] sm:max-h-[360px] group">
          <img
            src="https://res.cloudinary.com/xhuikt2k/image/upload/v1786987318/WhatsApp_Image_2026-08-17_at_2.18.47_PM.jpg"
            alt="Opções Deliciosas - Açaí da Vila"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center max-h-[300px] sm:max-h-[360px] group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E0427] via-transparent to-transparent opacity-70" />
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
            <span className="bg-[#1E0427]/85 backdrop-blur-md text-white text-[10px] sm:text-xs font-black px-3.5 py-1.5 rounded-full border border-[#8E156A] uppercase tracking-wider shadow-lg">
              Opções Deliciosas da Casa 🍧✨
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#8E156A]/30 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#EA1D2C] text-white font-black text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-widest shadow-sm">
              <span>Cardápio Açaí da Vila</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mt-1">
              Opções Deliciosas
            </h3>
            <p className="text-xs text-[#E0E0E0]">
              Preços claros e transparentes organizados em linhas. Peça fácil pelo iFood!
            </p>
          </div>

          {/* Main Top iFood CTA */}
          <a
            href={BRAND_INFO.ifoodUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#EA1D2C] hover:bg-[#C81220] text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-[0_0_20px_rgba(234,29,44,0.4)] uppercase tracking-tight transition-all active:scale-95 cursor-pointer shrink-0 border border-red-400/30"
          >
            <span className="bg-white text-[#EA1D2C] font-black text-[10px] px-1.5 py-0.5 rounded uppercase">iFood</span>
            <span>Pedir no iFood</span>
            <ExternalLink className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

        {/* Category Selector Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 w-full">
            <button
              onClick={() => setActiveTab('todos')}
              className={`px-4 py-3 rounded-xl text-xs font-black uppercase tracking-tight transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'todos'
                  ? 'bg-[#00C853] text-[#1E0427] shadow-lg scale-[1.02]'
                  : 'bg-[#1E0427] text-white border border-[#8E156A]/40 hover:border-[#8E156A]'
              }`}
            >
              <span>✨</span>
              <span>Ver Todo o Cardápio</span>
            </button>

            <button
              onClick={() => setActiveTab(1)}
              className={`px-4 py-3 rounded-xl text-xs font-black uppercase tracking-tight transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 1
                  ? 'bg-[#EA1D2C] text-white shadow-lg scale-[1.02]'
                  : 'bg-[#1E0427] text-white border border-[#8E156A]/40 hover:border-[#8E156A]'
              }`}
            >
              <span>🍧</span>
              <span>Açaís & Cremes</span>
            </button>

            <button
              onClick={() => setActiveTab(2)}
              className={`px-4 py-3 rounded-xl text-xs font-black uppercase tracking-tight transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 2
                  ? 'bg-[#EA1D2C] text-white shadow-lg scale-[1.02]'
                  : 'bg-[#1E0427] text-white border border-[#8E156A]/40 hover:border-[#8E156A]'
              }`}
            >
              <span>🔥</span>
              <span>Combos & Vitaminas</span>
            </button>

            <button
              onClick={() => setActiveTab(3)}
              className={`px-4 py-3 rounded-xl text-xs font-black uppercase tracking-tight transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 3
                  ? 'bg-[#EA1D2C] text-white shadow-lg scale-[1.02]'
                  : 'bg-[#1E0427] text-white border border-[#8E156A]/40 hover:border-[#8E156A]'
              }`}
            >
              <span>🍹</span>
              <span>Sucos & Salgados</span>
            </button>
          </div>
        </div>

        {/* Quick Search */}
        <div className="relative pt-1">
          <Search className="w-4 h-4 text-[#C77DFF] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Pesquisar item no cardápio (ex: Moran-Mix, Ninho, Açaí 500ml)..."
            className="w-full bg-[#1E0427] border border-[#8E156A]/40 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#00C853]"
          />
        </div>
      </div>

      {/* ==========================================
          BLOCO 1: AÇAÍ TRADICIONAL, CREMES & ACOMPANHAMENTOS
      ========================================== */}
      {(activeTab === 'todos' || activeTab === 1) && (
        <section className="bg-[#2A0835] border-l-4 border-l-[#EA1D2C] border-t border-r border-b border-[#8E156A]/50 rounded-r-2xl p-5 sm:p-7 shadow-2xl space-y-6">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#8E156A]/40 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🍧</span>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  Açaí Tradicional, Cremes & Acompanhamentos
                </h3>
              </div>
              <p className="text-xs text-[#E0E0E0] mt-1">
                Açaí puro e cremoso + Cremes de Ninho, Cupuaçu e Morango com acompanhamentos grátis
              </p>
            </div>

            <a
              href={BRAND_INFO.ifoodUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#EA1D2C] hover:bg-[#C81220] text-white font-black text-xs px-5 py-3 rounded-xl shadow-[0_0_15px_rgba(234,29,44,0.3)] uppercase tracking-tight transition-all active:scale-95 cursor-pointer shrink-0 border border-red-400/30"
            >
              <span className="bg-white text-[#EA1D2C] font-black text-[9px] px-1 py-0.5 rounded uppercase">iFood</span>
              <span>Pedir Açaí no iFood</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Video Banner for Block 1 */}
          <div className="relative rounded-2xl overflow-hidden border border-[#8E156A]/60 shadow-xl bg-[#1E0427] max-h-[320px] sm:max-h-[380px]">
            <video
              src="https://res.cloudinary.com/gu3r4btn/video/upload/v1786296542/SnapInsta.to_AQM7FRGa6FXQ9WGTuWkpSV3RFusfmr-R8VX8JFhDtOSidSHgsfJKwpLCoxxa-Le3l4E8RWmNlEQsFxV3hMoKZTPTIKGrBFTAaY581nE_stydov.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center max-h-[320px] sm:max-h-[380px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E0427] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
              <span className="bg-[#1E0427]/80 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full border border-[#8E156A] uppercase tracking-wider">
                Açaí Fresco & Cremoso 🔥
              </span>
            </div>
          </div>

          {/* Açaí Tradicional - Clean Rows */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-[#C77DFF] uppercase tracking-wider flex items-center gap-1.5">
              <span>• AÇAÍ TRADICIONAL (COPOS)</span>
            </h4>

            <div className="bg-[#1E0427] rounded-2xl border border-[#8E156A]/40 overflow-hidden divide-y divide-[#8E156A]/30">
              {ACAI_SIZES.filter(s => matchesSearch(s.label)).map((size) => (
                <div key={size.ml} className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 hover:bg-[#2A0835]/60 transition-colors">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-white text-base">{size.label}</span>
                      <span className="text-[10px] bg-[#00C853]/20 text-[#00C853] font-bold px-2 py-0.5 rounded-full border border-[#00C853]/30">
                        {size.maxAccompaniments} Acompanhamentos Grátis
                      </span>
                    </div>
                    <p className="text-xs text-[#E0E0E0] mt-0.5">
                      Açaí 100% puro, cremoso, servido no copo geladinho na medida certa.
                    </p>
                  </div>

                  <div className="text-right sm:text-right self-end sm:self-center shrink-0">
                    <span className="text-xl font-black text-[#00C853]">
                      R$ {size.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cremes Especiais - Clean Rows */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-black text-[#C77DFF] uppercase tracking-wider flex items-center gap-1.5">
              <span>• CREMES ESPECIAIS (NINHO, CUPUAÇU & MORANGO)</span>
            </h4>

            <div className="bg-[#1E0427] rounded-2xl border border-[#8E156A]/40 overflow-hidden divide-y divide-[#8E156A]/30">
              {CREME_SIZES.filter(s => matchesSearch(s.label)).map((size) => (
                <div key={size.ml} className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 hover:bg-[#2A0835]/60 transition-colors">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-white text-base">Creme Especial {size.label}</span>
                      <span className="text-[10px] bg-[#C77DFF]/20 text-[#C77DFF] font-bold px-2 py-0.5 rounded-full border border-[#C77DFF]/30">
                        Até 5 Acompanhamentos Grátis
                      </span>
                    </div>
                    <p className="text-xs text-[#E0E0E0] mt-0.5">
                      Sabores à sua escolha: Creme de Ninho, Creme de Cupuaçu ou Creme de Morango.
                    </p>
                  </div>

                  <div className="text-right sm:text-right self-end sm:self-center shrink-0">
                    <span className="text-xl font-black text-[#00C853]">
                      R$ {size.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Accompaniments & Toppings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            
            {/* Free Accompaniments */}
            <div className="bg-[#1E0427] p-4 rounded-2xl border border-[#8E156A]/40 space-y-2">
              <div className="flex items-center justify-between border-b border-[#8E156A]/30 pb-2">
                <span className="text-xs font-black text-white uppercase tracking-tight flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#00C853]" />
                  <span>22 Acompanhamentos Grátis</span>
                </span>
                <span className="text-[10px] text-[#00C853] font-bold">Inclusos nos Copos</span>
              </div>
              <p className="text-xs text-[#E0E0E0] leading-relaxed">
                Leite em pó, Granola, Paçoca, Morango fresco, Banana, Leite condensado, Ovomaltine, Chocoball, Amendoim, Calda de Morango, Calda de Chocolate, Kiwi e muito mais!
              </p>
            </div>

            {/* Extras */}
            <div className="bg-[#1E0427] p-4 rounded-2xl border border-[#8E156A]/40 space-y-2">
              <div className="flex items-center justify-between border-b border-[#8E156A]/30 pb-2">
                <span className="text-xs font-black text-white uppercase tracking-tight">
                  Adicionais Extras
                </span>
                <span className="text-[10px] text-[#C77DFF] font-bold">A partir de R$ 3,00</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-[#E0E0E0]">
                {ADD_ONS.map(a => (
                  <div key={a.id} className="flex items-center justify-between bg-[#2A0835] px-2.5 py-1 rounded-lg border border-[#8E156A]/20">
                    <span>{a.name}</span>
                    <span className="font-black text-[#00C853]">+R${a.price.toFixed(2).replace('.',',')}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Action */}
          <div className="pt-2 flex justify-center">
            <a
              href={BRAND_INFO.ifoodUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EA1D2C] hover:bg-[#C81220] text-white font-black text-xs sm:text-sm px-8 py-3.5 rounded-xl shadow-[0_0_20px_rgba(234,29,44,0.4)] uppercase tracking-tight transition-all active:scale-95 cursor-pointer border border-red-400/30"
            >
              <span className="bg-white text-[#EA1D2C] font-black text-[10px] px-1.5 py-0.5 rounded uppercase">iFood</span>
              <span>Montar Copo e Pedir Açaí no iFood</span>
            </a>
          </div>

        </section>
      )}

      {/* ==========================================
          BLOCO 2: COMBOS ESPECIAIS & VITAMINAS DA CASA
      ========================================== */}
      {(activeTab === 'todos' || activeTab === 2) && (
        <section className="bg-[#2A0835] border-l-4 border-l-[#EA1D2C] border-t border-r border-b border-[#8E156A]/50 rounded-r-2xl p-5 sm:p-7 shadow-2xl space-y-6">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#8E156A]/40 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <Flame className="w-6 h-6 text-[#EA1D2C]" />
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  Combos Especiais & Vitaminas da Casa
                </h3>
              </div>
              <p className="text-xs text-[#E0E0E0] mt-1">
                Combinações consagradas pelos nossos clientes na Praia do Francês
              </p>
            </div>

            <a
              href={BRAND_INFO.ifoodUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#EA1D2C] hover:bg-[#C81220] text-white font-black text-xs px-5 py-3 rounded-xl shadow-[0_0_15px_rgba(234,29,44,0.3)] uppercase tracking-tight transition-all active:scale-95 cursor-pointer shrink-0 border border-red-400/30"
            >
              <span className="bg-white text-[#EA1D2C] font-black text-[9px] px-1 py-0.5 rounded uppercase">iFood</span>
              <span>Pedir Combos no iFood</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Video Banner for Block 2 */}
          <div className="relative rounded-2xl overflow-hidden border border-[#8E156A]/60 shadow-xl bg-[#1E0427] max-h-[320px] sm:max-h-[380px]">
            <video
              src="https://res.cloudinary.com/gu3r4btn/video/upload/v1786296548/SnapInsta.to_AQPgM0g3M45mjrXr3DeVzyDpfrj5POmJNWSx5II1hjc51UReL4sFi7WSdUNi81__mGjc0h-3QPoN4Hb2YA-k1BJwBJdqsLH8Qk8J4_4_ynd1sk.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center max-h-[320px] sm:max-h-[380px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E0427] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
              <span className="bg-[#1E0427]/80 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full border border-[#8E156A] uppercase tracking-wider">
                Combos & Vitaminas Especiais 🔥
              </span>
            </div>
          </div>

          {/* Combos Especiais Line Items */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-[#C77DFF] uppercase tracking-wider flex items-center gap-1.5">
              <span>• COMBOS ESPECIAIS DA VILA</span>
            </h4>

            <div className="bg-[#1E0427] rounded-2xl border border-[#8E156A]/40 overflow-hidden divide-y divide-[#8E156A]/30">
              {ESPECIAIS_COMBO.filter(item => matchesSearch(item.name, item.description)).map((item) => (
                <div key={item.id} className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:bg-[#2A0835]/60 transition-colors">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-black text-white text-base">{item.name}</span>
                      {item.popular && (
                        <span className="text-[10px] bg-[#EA1D2C] text-white font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                          Mais Pedido 🔥
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#E0E0E0] leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>

                  <div className="text-right self-end sm:self-center shrink-0">
                    <span className="text-xl font-black text-[#00C853]">
                      R$ {item.price?.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vitaminas Line Items */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-black text-[#C77DFF] uppercase tracking-wider flex items-center gap-1.5">
              <span>• VITAMINAS REFRESCANTES</span>
            </h4>

            <div className="bg-[#1E0427] rounded-2xl border border-[#8E156A]/40 overflow-hidden divide-y divide-[#8E156A]/30">
              {VITAMINAS.filter(item => matchesSearch(item.name, item.description)).map((item) => (
                <div key={item.id} className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:bg-[#2A0835]/60 transition-colors">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-white text-base">{item.name}</span>
                      {item.popular && (
                        <span className="text-[10px] bg-[#00C853]/20 text-[#00C853] font-bold px-2 py-0.5 rounded-full border border-[#00C853]/30">
                          Recomendado
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#E0E0E0] mt-0.5 max-w-xl">
                      {item.description}
                    </p>
                  </div>

                  <div className="text-right self-end sm:self-center shrink-0">
                    <span className="text-xl font-black text-[#00C853]">
                      R$ {item.price?.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action */}
          <div className="pt-2 flex justify-center">
            <a
              href={BRAND_INFO.ifoodUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EA1D2C] hover:bg-[#C81220] text-white font-black text-xs sm:text-sm px-8 py-3.5 rounded-xl shadow-[0_0_20px_rgba(234,29,44,0.4)] uppercase tracking-tight transition-all active:scale-95 cursor-pointer border border-red-400/30"
            >
              <span className="bg-white text-[#EA1D2C] font-black text-[10px] px-1.5 py-0.5 rounded uppercase">iFood</span>
              <span>Pedir Combos e Vitaminas no iFood</span>
            </a>
          </div>

        </section>
      )}

      {/* ==========================================
          BLOCO 3: SUCOS NATURAIS, POLPAS, SALGADOS & BEBIDAS
      ========================================== */}
      {(activeTab === 'todos' || activeTab === 3) && (
        <section className="bg-[#2A0835] border-l-4 border-l-[#EA1D2C] border-t border-r border-b border-[#8E156A]/50 rounded-r-2xl p-5 sm:p-7 shadow-2xl space-y-6">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#8E156A]/40 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🍹</span>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  Sucos Naturais, Polpas, Salgados & Bebidas
                </h3>
              </div>
              <p className="text-xs text-[#E0E0E0] mt-1">
                Sucos feitos na hora, polpas de fruta selecionadas, salgados e refrigerantes bem gelados
              </p>
            </div>

            <a
              href={BRAND_INFO.ifoodUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#EA1D2C] hover:bg-[#C81220] text-white font-black text-xs px-5 py-3 rounded-xl shadow-[0_0_15px_rgba(234,29,44,0.3)] uppercase tracking-tight transition-all active:scale-95 cursor-pointer shrink-0 border border-red-400/30"
            >
              <span className="bg-white text-[#EA1D2C] font-black text-[9px] px-1 py-0.5 rounded uppercase">iFood</span>
              <span>Pedir Sucos & Salgados no iFood</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Video Banner for Block 3 */}
          <div className="relative rounded-2xl overflow-hidden border border-[#8E156A]/60 shadow-xl bg-[#1E0427] max-h-[320px] sm:max-h-[380px]">
            <video
              src="https://res.cloudinary.com/gu3r4btn/video/upload/v1786296558/SnapInsta.to_AQNLLl847QpP2FQDV6PiLt7jwmop8_ml2FnWmLg2NdluSXmf8wYMkyOlFfdwH9Mvd2mkNHmQ2ZXTnrEhH_YFI49oQ_DMWR4IW2mSQEA_prgg0w.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center max-h-[320px] sm:max-h-[380px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E0427] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
              <span className="bg-[#1E0427]/80 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full border border-[#8E156A] uppercase tracking-wider">
                Sucos & Salgados Deliciosos 🍹
              </span>
            </div>
          </div>

          {/* Sucos Naturais Lines */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-[#C77DFF] uppercase tracking-wider flex items-center gap-1.5">
              <span>• SUCOS NATURAIS DA FRUTA</span>
            </h4>

            <div className="bg-[#1E0427] rounded-2xl border border-[#8E156A]/40 overflow-hidden divide-y divide-[#8E156A]/30">
              {SUCOS_FRUTAS.filter(item => matchesSearch(item.name, item.description)).map((item) => (
                <div key={item.id} className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:bg-[#2A0835]/60 transition-colors">
                  <div>
                    <span className="font-black text-white text-base">{item.name}</span>
                    {item.description && (
                      <p className="text-xs text-[#E0E0E0] mt-0.5 max-w-xl">{item.description}</p>
                    )}
                  </div>

                  <div className="text-right self-end sm:self-center shrink-0">
                    <span className="text-xl font-black text-[#00C853]">
                      R$ {item.price?.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Polpas Naturais Lines */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-black text-[#C77DFF] uppercase tracking-wider flex items-center gap-1.5">
              <span>• SUCOS DE POLPA NATURAL (ACEROLA, GRAVIOLA, CAJÁ, GOIABA, ABACAXI)</span>
            </h4>

            <div className="bg-[#1E0427] rounded-2xl border border-[#8E156A]/40 overflow-hidden divide-y divide-[#8E156A]/30">
              <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 hover:bg-[#2A0835]/60 transition-colors">
                <div>
                  <span className="font-black text-white text-base">Polpa com Água (500ml)</span>
                  <p className="text-xs text-[#E0E0E0]">Sabores: Acerola, Graviola, Cajá, Goiaba, Abacaxi</p>
                </div>
                <span className="text-xl font-black text-[#00C853]">R$ 7,00</span>
              </div>

              <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 hover:bg-[#2A0835]/60 transition-colors">
                <div>
                  <span className="font-black text-white text-base">Polpa com Leite (500ml)</span>
                  <p className="text-xs text-[#E0E0E0]">Batida com leite integral gelado e cremoso</p>
                </div>
                <span className="text-xl font-black text-[#00C853]">R$ 8,00</span>
              </div>

              <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 hover:bg-[#2A0835]/60 transition-colors">
                <div>
                  <span className="font-black text-white text-base">Polpa de Maracujá Especial (500ml)</span>
                  <p className="text-xs text-[#E0E0E0]">Sabor intenso de maracujá natural</p>
                </div>
                <span className="text-xl font-black text-[#00C853]">R$ 10,00</span>
              </div>
            </div>
          </div>

          {/* Salgados & Bebidas Lines */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-black text-[#C77DFF] uppercase tracking-wider flex items-center gap-1.5">
              <span>• SALGADOS & BEBIDAS</span>
            </h4>

            <div className="bg-[#1E0427] rounded-2xl border border-[#8E156A]/40 overflow-hidden divide-y divide-[#8E156A]/30">
              {SALGADOS_E_BEBIDAS.filter(item => matchesSearch(item.name, item.description)).map((item) => (
                <div key={item.id} className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:bg-[#2A0835]/60 transition-colors">
                  <div>
                    <span className="font-black text-white text-base">{item.name}</span>
                    {item.description && (
                      <p className="text-xs text-[#E0E0E0] mt-0.5 max-w-xl">{item.description}</p>
                    )}
                  </div>

                  <div className="text-right self-end sm:self-center shrink-0">
                    <span className="text-xl font-black text-[#00C853]">
                      R$ {item.price?.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action */}
          <div className="pt-2 flex justify-center">
            <a
              href={BRAND_INFO.ifoodUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EA1D2C] hover:bg-[#C81220] text-white font-black text-xs sm:text-sm px-8 py-3.5 rounded-xl shadow-[0_0_20px_rgba(234,29,44,0.4)] uppercase tracking-tight transition-all active:scale-95 cursor-pointer border border-red-400/30"
            >
              <span className="bg-white text-[#EA1D2C] font-black text-[10px] px-1.5 py-0.5 rounded uppercase">iFood</span>
              <span>Pedir Sucos, Salgados & Bebidas no iFood</span>
            </a>
          </div>

        </section>
      )}

      {/* Final iFood Quick Checkout Strip */}
      <div className="bg-gradient-to-r from-[#EA1D2C] via-[#C81220] to-[#EA1D2C] text-white p-5 rounded-2xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-red-400/50">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="p-3 bg-white text-[#EA1D2C] rounded-xl font-black text-sm uppercase shadow">
            iFood
          </div>
          <div>
            <h4 className="font-black text-lg uppercase tracking-tight">Escolha seus favoritos e Peça no iFood!</h4>
            <p className="text-xs text-white/90">Entrega garantida e rápida na Praia do Francês.</p>
          </div>
        </div>

        <a
          href={BRAND_INFO.ifoodUrl}
          target="_blank"
          rel="noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#EA1D2C] hover:bg-gray-100 font-black text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-xl uppercase tracking-tight transition-all active:scale-95 shrink-0"
        >
          <span>Abrir Cardápio no iFood</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

    </div>
  );
};
