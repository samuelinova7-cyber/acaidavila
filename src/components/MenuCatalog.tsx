import React, { useState } from 'react';
import { VITAMINAS, SUCOS_FRUTAS, POLPAS_SABORES, SALGADOS_E_BEBIDAS, ESPECIAIS_COMBO } from '../data/menu';
import { BaseMenuItem, CartItem, CategoryType } from '../types';
import { Search, Plus, Check, Flame, ShoppingBag, Sparkles } from 'lucide-react';

interface MenuCatalogProps {
  onAddToCart: (item: CartItem) => void;
  onSelectCustomAcai: () => void;
}

export const MenuCatalog: React.FC<MenuCatalogProps> = ({ onAddToCart, onSelectCustomAcai }) => {
  const [activeTab, setActiveTab] = useState<CategoryType | 'todos'>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  // Polpa selection state for modal/inline
  const [selectedPolpaFlavor, setSelectedPolpaFlavor] = useState<string>('Acerola');
  const [polpaWithMilk, setPolpaWithMilk] = useState<boolean>(false);
  const [addedItemId, setAddedItemId] = useState<string | null>(null);

  const handleQuickAdd = (item: BaseMenuItem, customSubtitle?: string) => {
    const cartItem: CartItem = {
      cartItemId: `${item.id}-${Date.now()}`,
      title: item.name,
      subtitle: customSubtitle || item.description,
      unitPrice: item.price || 0,
      quantity: 1,
    };
    onAddToCart(cartItem);

    setAddedItemId(item.id);
    setTimeout(() => setAddedItemId(null), 1500);
  };

  const handleAddPolpaToCart = () => {
    const isMaracuja = selectedPolpaFlavor === 'Maracujá';
    const price = isMaracuja ? 10.00 : (polpaWithMilk ? 8.00 : 7.00);
    const subtitle = `${selectedPolpaFlavor} (${polpaWithMilk ? 'Com Leite' : 'Sem Leite'})`;

    const cartItem: CartItem = {
      cartItemId: `polpa-${Date.now()}`,
      title: `Suco de Polpa de ${selectedPolpaFlavor}`,
      subtitle: subtitle,
      unitPrice: price,
      quantity: 1,
      customDetails: {
        flavor: selectedPolpaFlavor,
        notes: polpaWithMilk ? 'Com Leite' : 'Sem Leite'
      }
    };
    onAddToCart(cartItem);

    setAddedItemId(`polpa-${selectedPolpaFlavor}`);
    setTimeout(() => setAddedItemId(null), 1500);
  };

  // Categories definition
  const categories = [
    { id: 'todos', label: 'Todos os Itens', icon: '✨' },
    { id: 'especiais', label: 'Especiais da Vila', icon: '🔥' },
    { id: 'vitaminas', label: 'Vitaminas', icon: '🥤' },
    { id: 'sucos', label: 'Sucos & Polpas', icon: '🍹' },
    { id: 'salgados_bebidas', label: 'Salgados & Bebidas', icon: '🥐' },
  ];

  // Filtering function
  const filterItem = (item: BaseMenuItem) => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (!matchesSearch) return false;
    if (activeTab === 'todos') return true;
    return item.category === activeTab;
  };

  return (
    <div className="space-y-8">
      
      {/* Search & Categories Bar */}
      <div className="bg-[#2A0835] border border-[#8E156A]/40 rounded-2xl p-4 shadow-xl space-y-4">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#C77DFF] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar no cardápio (ex: Moran-Mix, Laranja)..."
              className="w-full bg-[#1E0427] border border-[#8E156A]/40 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#00C853]"
            />
          </div>

          {/* Jump to Acai Builder CTA */}
          <button
            onClick={onSelectCustomAcai}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#8E156A] to-[#2A0835] border border-[#00C853]/50 text-white hover:text-[#00C853] text-xs font-bold px-4 py-2.5 rounded-xl shadow transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#00C853]" />
            <span>Ir para Monte Seu Açaí / Creme</span>
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-[#00C853] text-[#1E0427] shadow-lg font-black'
                  : 'bg-[#1E0427] text-[#E0E0E0] border border-[#8E156A]/30 hover:border-[#8E156A]'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* SECTION 1: ESPECIAIS DA VILA (Combos) */}
      {(activeTab === 'todos' || activeTab === 'especiais') && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[#8E156A]/40 pb-2">
            <Flame className="w-5 h-5 text-[#00C853]" />
            <h3 className="text-xl font-black text-white uppercase tracking-tight">Especiais da Vila (Combos)</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ESPECIAIS_COMBO.filter(filterItem).map((item) => (
              <div
                key={item.id}
                className="bg-[#2A0835] border-l-4 border-l-[#00C853] border-t border-r border-b border-[#8E156A]/40 rounded-r-2xl p-5 shadow-xl flex flex-col justify-between hover:border-[#8E156A] transition-all relative overflow-hidden group"
              >
                {item.popular && (
                  <span className="absolute top-3 right-3 bg-[#8E156A] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full border border-[#C77DFF]/30 uppercase tracking-wider">
                    Mais Pedido 🔥
                  </span>
                )}

                <div>
                  <h4 className="text-base font-black text-white group-hover:text-[#C77DFF] transition-colors pr-16 uppercase tracking-tight">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#E0E0E0] mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#8E156A]/20">
                  <span className="text-xl font-black text-[#00C853]">
                    R$ {item.price?.toFixed(2).replace('.', ',')}
                  </span>

                  <button
                    onClick={() => handleQuickAdd(item)}
                    className="inline-flex items-center gap-1.5 bg-[#00C853] hover:bg-[#00A843] text-[#1E0427] font-black text-xs px-4 py-2 rounded-xl transition-all shadow-[0_0_12px_rgba(0,200,83,0.25)] uppercase tracking-tight cursor-pointer active:scale-95"
                  >
                    {addedItemId === item.id ? (
                      <>
                        <Check className="w-4 h-4 stroke-[3]" />
                        <span>Adicionado!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4 stroke-[3]" />
                        <span>Adicionar</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 2: VITAMINAS */}
      {(activeTab === 'todos' || activeTab === 'vitaminas') && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[#8E156A]/30 pb-2">
            <span className="text-xl">🥤</span>
            <h3 className="text-xl font-black text-white font-serif">Vitaminas Refrescantes</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {VITAMINAS.filter(filterItem).map((item) => (
              <div
                key={item.id}
                className="bg-[#2A0835] border border-[#8E156A]/40 rounded-2xl p-4 shadow-lg flex flex-col justify-between hover:border-[#8E156A] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-black text-white">{item.name}</h4>
                    {item.popular && (
                      <span className="text-[10px] bg-[#00C853]/20 text-[#00C853] font-bold px-2 py-0.5 rounded-full border border-[#00C853]/40">
                        Top
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#E0E0E0] mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#8E156A]/20">
                  <span className="text-base font-black text-[#00C853]">
                    R$ {item.price?.toFixed(2).replace('.', ',')}
                  </span>

                  <button
                    onClick={() => handleQuickAdd(item)}
                    className="inline-flex items-center gap-1 bg-[#00C853] hover:bg-[#00A843] text-[#1E0427] font-bold text-xs px-3 py-1.5 rounded-lg transition-all active:scale-95 cursor-pointer"
                  >
                    {addedItemId === item.id ? (
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 stroke-[3]" />
                    )}
                    <span>{addedItemId === item.id ? 'Pronto' : 'Pedir'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 3: SUCOS E POLPAS */}
      {(activeTab === 'todos' || activeTab === 'sucos') && (
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-[#8E156A]/30 pb-2">
            <span className="text-xl">🍹</span>
            <h3 className="text-xl font-black text-white font-serif">Sucos Naturais & Polpas</h3>
          </div>

          {/* Sucos Frutas */}
          <div>
            <h4 className="text-xs font-bold text-[#C77DFF] uppercase tracking-wider mb-3">
              Sucos Naturais da Fruta
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {SUCOS_FRUTAS.filter(filterItem).map((item) => (
                <div
                  key={item.id}
                  className="bg-[#2A0835] border border-[#8E156A]/40 rounded-2xl p-4 shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <h5 className="text-sm font-black text-white">{item.name}</h5>
                    {item.description && (
                      <p className="text-xs text-[#E0E0E0] mt-1">{item.description}</p>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#8E156A]/20">
                    <span className="text-base font-black text-[#00C853]">
                      R$ {item.price?.toFixed(2).replace('.', ',')}
                    </span>
                    <button
                      onClick={() => handleQuickAdd(item)}
                      className="inline-flex items-center gap-1 bg-[#00C853] hover:bg-[#00A843] text-[#1E0427] font-bold text-xs px-3 py-1.5 rounded-lg transition-all active:scale-95 cursor-pointer"
                    >
                      {addedItemId === item.id ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Plus className="w-3.5 h-3.5 stroke-[3]" />}
                      <span>{addedItemId === item.id ? 'Pronto' : 'Pedir'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Polpas Customizer Box */}
          <div className="bg-[#1E0427] border border-[#8E156A] rounded-2xl p-5 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#8E156A]/30 pb-3">
              <div>
                <h4 className="text-base font-black text-white">Monte seu Suco de Polpa</h4>
                <p className="text-xs text-[#E0E0E0]">Escolha o sabor e se prefere preparado com água ou leite</p>
              </div>

              <span className="bg-[#8E156A] text-[#C77DFF] text-xs font-bold px-3 py-1 rounded-full self-start sm:self-auto">
                Sem Leite: R$ 7,00 | Com Leite: R$ 8,00 | Maracujá: R$ 10,00
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Flavors */}
              <div>
                <label className="block text-xs font-bold text-[#C77DFF] uppercase tracking-wider mb-2">
                  1. Sabor da Polpa
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[...POLPAS_SABORES, 'Maracujá'].map((flavor) => (
                    <button
                      key={flavor}
                      type="button"
                      onClick={() => setSelectedPolpaFlavor(flavor)}
                      className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-left cursor-pointer ${
                        selectedPolpaFlavor === flavor
                          ? 'bg-[#8E156A] border-[#00C853] text-white shadow'
                          : 'bg-[#2A0835] border-[#8E156A]/30 text-[#E0E0E0] hover:border-[#8E156A]'
                      }`}
                    >
                      {flavor} {flavor === 'Maracujá' && '(R$ 10)'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Milk Option & Add Button */}
              <div className="flex flex-col justify-between space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#C77DFF] uppercase tracking-wider mb-2">
                    2. Preparo
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPolpaWithMilk(false)}
                      className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        !polpaWithMilk
                          ? 'bg-[#8E156A] border-[#00C853] text-white'
                          : 'bg-[#2A0835] border-[#8E156A]/30 text-[#E0E0E0]'
                      }`}
                    >
                      Sem Leite (Água)
                    </button>
                    <button
                      type="button"
                      onClick={() => setPolpaWithMilk(true)}
                      className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        polpaWithMilk
                          ? 'bg-[#8E156A] border-[#00C853] text-white'
                          : 'bg-[#2A0835] border-[#8E156A]/30 text-[#E0E0E0]'
                      }`}
                    >
                      Com Leite (+R$ 1)
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleAddPolpaToCart}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#00C853] hover:bg-[#00A843] text-[#1E0427] font-black text-xs px-4 py-3 rounded-xl shadow transition-all active:scale-95 cursor-pointer"
                >
                  <Plus className="w-4 h-4 stroke-[3]" />
                  <span>
                    Adicionar Polpa ({selectedPolpaFlavor}) - R${' '}
                    {(selectedPolpaFlavor === 'Maracujá' ? 10 : polpaWithMilk ? 8 : 7)
                      .toFixed(2)
                      .replace('.', ',')}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4: SALGADOS & BEBIDAS */}
      {(activeTab === 'todos' || activeTab === 'salgados_bebidas') && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[#8E156A]/30 pb-2">
            <span className="text-xl">🥐</span>
            <h3 className="text-xl font-black text-white font-serif">Salgados & Bebidas</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {SALGADOS_E_BEBIDAS.filter(filterItem).map((item) => (
              <div
                key={item.id}
                className="bg-[#2A0835] border border-[#8E156A]/40 rounded-2xl p-4 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-black text-white">{item.name}</h4>
                  {item.description && (
                    <p className="text-xs text-[#E0E0E0] mt-1">{item.description}</p>
                  )}
                </div>

                <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#8E156A]/20">
                  <span className="text-base font-black text-[#00C853]">
                    R$ {item.price?.toFixed(2).replace('.', ',')}
                  </span>

                  <button
                    onClick={() => handleQuickAdd(item)}
                    className="inline-flex items-center gap-1 bg-[#00C853] hover:bg-[#00A843] text-[#1E0427] font-bold text-xs px-3 py-1.5 rounded-lg transition-all active:scale-95 cursor-pointer"
                  >
                    {addedItemId === item.id ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Plus className="w-3.5 h-3.5 stroke-[3]" />}
                    <span>{addedItemId === item.id ? 'Pronto' : 'Pedir'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
};
