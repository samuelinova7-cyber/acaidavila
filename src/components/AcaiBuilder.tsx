import React, { useState } from 'react';
import { ACAI_SIZES, CREME_SIZES, CREME_FLAVORS, ACCOMPANIMENTS, ADD_ONS } from '../data/menu';
import { SizeOption, AddOn, CartItem } from '../types';
import { Sparkles, Check, Plus, AlertCircle, ShoppingBag, HeartHandshake } from 'lucide-react';

interface AcaiBuilderProps {
  onAddToCart: (item: CartItem) => void;
}

export const AcaiBuilder: React.FC<AcaiBuilderProps> = ({ onAddToCart }) => {
  const [builderType, setBuilderType] = useState<'acai' | 'creme' | 'bola'>('acai');
  
  // Size selection
  const [selectedSize, setSelectedSize] = useState<SizeOption>(ACAI_SIZES[1]); // Default 300ml
  
  // Creme flavor selection
  const [selectedCremeFlavor, setSelectedCremeFlavor] = useState<string>('Ninho');

  // Cremes por bola state
  const [ballCount, setBallCount] = useState<number>(1);
  const [selectedBallFlavors, setSelectedBallFlavors] = useState<string[]>(['Ninho']);

  // Accompaniments selection
  const [selectedAccompaniments, setSelectedAccompaniments] = useState<string[]>(['Leite Condensado', 'Leite em Pó', 'Granola']);

  // Add-ons selection
  const [selectedAddOns, setSelectedAddOns] = useState<AddOn[]>([]);

  // Notes
  const [notes, setNotes] = useState<string>('');

  // Added notification toast
  const [showToast, setShowToast] = useState(false);

  // Maximum allowed accompaniments
  const maxAccompaniments = selectedSize.maxAccompaniments;

  const handleToggleAccompaniment = (accName: string) => {
    if (selectedAccompaniments.includes(accName)) {
      setSelectedAccompaniments(selectedAccompaniments.filter(a => a !== accName));
    } else {
      if (selectedAccompaniments.length < maxAccompaniments) {
        setSelectedAccompaniments([...selectedAccompaniments, accName]);
      }
    }
  };

  const handleToggleAddOn = (addOn: AddOn) => {
    if (selectedAddOns.some(a => a.id === addOn.id)) {
      setSelectedAddOns(selectedAddOns.filter(a => a.id !== addOn.id));
    } else {
      setSelectedAddOns([...selectedAddOns, addOn]);
    }
  };

  const handleBallFlavorToggle = (flavorName: string) => {
    if (selectedBallFlavors.includes(flavorName)) {
      if (selectedBallFlavors.length > 1) {
        setSelectedBallFlavors(selectedBallFlavors.filter(f => f !== flavorName));
      }
    } else {
      setSelectedBallFlavors([...selectedBallFlavors, flavorName]);
    }
  };

  // Calculate total price
  const calculateTotalPrice = (): number => {
    if (builderType === 'bola') {
      return ballCount * 4.00;
    }
    const basePrice = selectedSize.price;
    const addOnsTotal = selectedAddOns.reduce((sum, a) => sum + a.price, 0);
    return basePrice + addOnsTotal;
  };

  const handleAddCustomToCart = () => {
    const total = calculateTotalPrice();

    if (builderType === 'bola') {
      const item: CartItem = {
        cartItemId: `bola-${Date.now()}`,
        title: `Creme Por Bola (${ballCount} ${ballCount === 1 ? 'Bola' : 'Bolas'})`,
        subtitle: `Sabores: ${selectedBallFlavors.join(', ')}`,
        unitPrice: total,
        quantity: 1,
        customDetails: {
          flavor: selectedBallFlavors.join(', '),
          notes: notes.trim() || undefined
        }
      };
      onAddToCart(item);
    } else if (builderType === 'creme') {
      const item: CartItem = {
        cartItemId: `creme-${Date.now()}`,
        title: `Monte Seu Creme (${selectedSize.label})`,
        subtitle: `Sabor: Creme de ${selectedCremeFlavor}`,
        unitPrice: total,
        quantity: 1,
        customDetails: {
          size: selectedSize.label,
          flavor: selectedCremeFlavor,
          accompaniments: selectedAccompaniments,
          addOns: selectedAddOns.map(a => ({ name: a.name, price: a.price })),
          notes: notes.trim() || undefined
        }
      };
      onAddToCart(item);
    } else {
      // Monte Seu Açaí
      const item: CartItem = {
        cartItemId: `acai-${Date.now()}`,
        title: `Monte Seu Açaí (${selectedSize.label})`,
        subtitle: `${selectedAccompaniments.length} Acompanhamentos ${selectedAddOns.length > 0 ? `+ ${selectedAddOns.length} Adicionais` : ''}`,
        unitPrice: total,
        quantity: 1,
        customDetails: {
          size: selectedSize.label,
          accompaniments: selectedAccompaniments,
          addOns: selectedAddOns.map(a => ({ name: a.name, price: a.price })),
          notes: notes.trim() || undefined
        }
      };
      onAddToCart(item);
    }

    // Show toast
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <div className="bg-[#2A0835] border-l-4 border-l-[#C77DFF] border-t border-r border-b border-[#8E156A]/50 rounded-r-2xl p-4 sm:p-6 shadow-2xl relative overflow-hidden">
      
      {/* Toast Notification */}
      {showToast && (
        <div className="absolute top-4 right-4 z-30 bg-[#00C853] text-[#1E0427] font-black px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 animate-bounce uppercase text-xs tracking-wider">
          <Check className="w-5 h-5 stroke-[3]" />
          <span>Item adicionado ao pedido!</span>
        </div>
      )}

      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-[#8E156A]/30">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs text-[#00C853] font-bold uppercase tracking-widest mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Personalize do Seu Jeito</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            Monte Seu Copo Especial
          </h2>
        </div>

        {/* Builder Type Selector */}
        <div className="flex bg-[#1E0427] p-1 rounded-xl border border-[#8E156A]/40 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => {
              setBuilderType('acai');
              setSelectedSize(ACAI_SIZES[1]);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              builderType === 'acai'
                ? 'bg-[#8E156A] text-white shadow'
                : 'text-[#E0E0E0] hover:text-white'
            }`}
          >
            🍧 Monte Seu Açaí
          </button>
          <button
            type="button"
            onClick={() => {
              setBuilderType('creme');
              setSelectedSize(CREME_SIZES[0]);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              builderType === 'creme'
                ? 'bg-[#8E156A] text-white shadow'
                : 'text-[#E0E0E0] hover:text-white'
            }`}
          >
            🍨 Monte Seu Creme
          </button>
          <button
            type="button"
            onClick={() => setBuilderType('bola')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              builderType === 'bola'
                ? 'bg-[#8E156A] text-white shadow'
                : 'text-[#E0E0E0] hover:text-white'
            }`}
          >
            🍨 Cremes Por Bola
          </button>
        </div>
      </div>

      {/* STEP 1: TAMANHO OU SABOR */}
      {builderType === 'bola' ? (
        <div className="mb-6 space-y-4">
          <h3 className="text-sm font-bold text-[#C77DFF] uppercase tracking-wider">
            1. Quantidade de Bolas (R$ 4,00 / bola)
          </h3>
          <div className="flex items-center gap-4 bg-[#1E0427] p-4 rounded-xl border border-[#8E156A]/30">
            <button
              onClick={() => setBallCount(Math.max(1, ballCount - 1))}
              className="w-10 h-10 rounded-lg bg-[#8E156A] text-white font-bold text-xl flex items-center justify-center hover:bg-[#8E156A]/80"
            >
              -
            </button>
            <span className="text-xl font-black text-white">{ballCount} {ballCount === 1 ? 'Bola' : 'Bolas'} (R$ {(ballCount * 4).toFixed(2).replace('.', ',')})</span>
            <button
              onClick={() => setBallCount(ballCount + 1)}
              className="w-10 h-10 rounded-lg bg-[#00C853] text-[#1E0427] font-bold text-xl flex items-center justify-center hover:bg-[#00A843]"
            >
              +
            </button>
          </div>

          <h3 className="text-sm font-bold text-[#C77DFF] uppercase tracking-wider pt-2">
            2. Escolha o Sabor do Creme
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {CREME_FLAVORS.map(flavor => (
              <button
                key={flavor.id}
                type="button"
                onClick={() => handleBallFlavorToggle(flavor.name)}
                className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                  selectedBallFlavors.includes(flavor.name)
                    ? 'bg-[#8E156A] border-[#00C853] text-white font-bold shadow-lg'
                    : 'bg-[#1E0427] border-[#8E156A]/30 text-[#E0E0E0] hover:border-[#8E156A]'
                }`}
              >
                {flavor.name}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* Sabor do Creme (if Creme) */}
          {builderType === 'creme' && (
            <div className="mb-6">
              <h3 className="text-xs font-bold text-[#C77DFF] uppercase tracking-wider mb-2">
                1. Escolha o Sabor do Creme
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {CREME_FLAVORS.map(flavor => (
                  <button
                    key={flavor.id}
                    type="button"
                    onClick={() => setSelectedCremeFlavor(flavor.name)}
                    className={`p-3 rounded-xl border text-center text-sm transition-all cursor-pointer ${
                      selectedCremeFlavor === flavor.name
                        ? 'bg-[#8E156A] border-[#00C853] text-white font-bold ring-2 ring-[#00C853]/50'
                        : 'bg-[#1E0427] border-[#8E156A]/30 text-[#E0E0E0] hover:border-[#8E156A]'
                    }`}
                  >
                    Creme de {flavor.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tamanho */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold text-[#C77DFF] uppercase tracking-wider">
                {builderType === 'creme' ? '2. Escolha o Tamanho' : '1. Escolha o Tamanho'}
              </h3>
              <span className="text-xs text-[#E0E0E0]">
                Inclui até {selectedSize.maxAccompaniments} acompanhamentos
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {(builderType === 'acai' ? ACAI_SIZES : CREME_SIZES).map((size) => {
                const isSelected = selectedSize.ml === size.ml;
                return (
                  <button
                    key={size.ml}
                    type="button"
                    onClick={() => {
                      setSelectedSize(size);
                      // Adjust accompaniments if current selection exceeds new size limit
                      if (selectedAccompaniments.length > size.maxAccompaniments) {
                        setSelectedAccompaniments(selectedAccompaniments.slice(0, size.maxAccompaniments));
                      }
                    }}
                    className={`p-3.5 rounded-xl border text-left transition-all relative overflow-hidden cursor-pointer ${
                      isSelected
                        ? 'bg-[#8E156A] border-[#00C853] shadow-lg ring-2 ring-[#00C853]/50'
                        : 'bg-[#1E0427] border-[#8E156A]/30 hover:border-[#8E156A]'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-2 right-2 bg-[#00C853] text-[#1E0427] rounded-full p-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                    <div className="text-sm font-black text-white">{size.label}</div>
                    <div className="text-xs text-[#00C853] font-bold mt-1">
                      R$ {size.price.toFixed(2).replace('.', ',')}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 2: ACOMPANHAMENTOS (Até 5 ou 3 Kids) */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3 bg-[#1E0427] p-3 rounded-xl border border-[#8E156A]/30">
              <div>
                <h3 className="text-xs font-bold text-[#C77DFF] uppercase tracking-wider">
                  {builderType === 'creme' ? '3. Escolha os Acompanhamentos' : '2. Escolha os Acompanhamentos'}
                </h3>
                <p className="text-xs text-[#E0E0E0]">
                  Escolha até {maxAccompaniments} opções sem custo extra
                </p>
              </div>

              {/* Counter */}
              <div className={`px-3 py-1 rounded-full text-xs font-black border ${
                selectedAccompaniments.length === maxAccompaniments
                  ? 'bg-[#00C853] text-[#1E0427] border-[#00C853]'
                  : 'bg-[#8E156A]/40 text-[#C77DFF] border-[#8E156A]'
              }`}>
                {selectedAccompaniments.length} / {maxAccompaniments} Selecionados
              </div>
            </div>

            {selectedAccompaniments.length >= maxAccompaniments && (
              <div className="text-xs text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-lg p-2 mb-3 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-amber-400" />
                <span>Você atingiu o limite de {maxAccompaniments} acompanhamentos para este tamanho! Para trocar, desmarque um item.</span>
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-60 overflow-y-auto pr-1">
              {ACCOMPANIMENTS.map((acc) => {
                const isSelected = selectedAccompaniments.includes(acc.name);
                const isDisabled = !isSelected && selectedAccompaniments.length >= maxAccompaniments;

                return (
                  <button
                    key={acc.id}
                    type="button"
                    disabled={isDisabled}
                    onClick={() => handleToggleAccompaniment(acc.name)}
                    className={`p-2.5 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-[#8E156A] border-[#00C853] text-white font-bold shadow'
                        : isDisabled
                        ? 'bg-[#1E0427]/50 border-[#8E156A]/20 text-gray-500 opacity-50 cursor-not-allowed'
                        : 'bg-[#1E0427] border-[#8E156A]/30 text-[#E0E0E0] hover:border-[#8E156A]'
                    }`}
                  >
                    <span className="truncate pr-1">{acc.name}</span>
                    <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'bg-[#00C853] border-[#00C853] text-[#1E0427]'
                        : 'border-gray-500'
                    }`}>
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 3: ADICIONAIS PAGOS */}
          <div className="mb-6">
            <div className="mb-2">
              <h3 className="text-xs font-bold text-[#C77DFF] uppercase tracking-wider">
                {builderType === 'creme' ? '4. Adicionais Especiais (Opcional)' : '3. Adicionais Especiais (Opcional)'}
              </h3>
              <p className="text-xs text-[#E0E0E0]">Turbine seu copo com os nossos doces preferidos</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {ADD_ONS.map((addOn) => {
                const isSelected = selectedAddOns.some(a => a.id === addOn.id);
                return (
                  <button
                    key={addOn.id}
                    type="button"
                    onClick={() => handleToggleAddOn(addOn)}
                    className={`p-2.5 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-[#8E156A] border-[#00C853] text-white shadow'
                        : 'bg-[#1E0427] border-[#8E156A]/30 text-[#E0E0E0] hover:border-[#8E156A]'
                    }`}
                  >
                    <div className="truncate pr-1">
                      <div className="text-xs font-bold text-white">{addOn.name}</div>
                      <div className="text-[11px] text-[#00C853] font-semibold">+ R$ {addOn.price.toFixed(2).replace('.', ',')}</div>
                    </div>
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'bg-[#00C853] border-[#00C853] text-[#1E0427]'
                        : 'border-gray-500'
                    }`}>
                      {isSelected ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* Observações */}
      <div className="mb-6">
        <label className="block text-xs font-bold text-[#C77DFF] uppercase tracking-wider mb-1.5">
          Observações / Preferências
        </label>
        <input
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Ex: Capricha no leite em pó, colocar calda no fundo do copo..."
          className="w-full bg-[#1E0427] border border-[#8E156A]/40 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#00C853]"
        />
      </div>

      {/* FOOTER TOTAL & ADD TO CART CTA */}
      <div className="pt-4 border-t border-[#8E156A]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs text-[#E0E0E0]">Valor Total do Item:</span>
          <div className="text-2xl font-black text-[#00C853]">
            R$ {calculateTotalPrice().toFixed(2).replace('.', ',')}
          </div>
        </div>

        <button
          type="button"
          onClick={handleAddCustomToCart}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00C853] hover:bg-[#00A843] text-[#1E0427] font-black text-sm px-8 py-3.5 rounded-xl shadow-[0_0_20px_rgba(0,200,83,0.3)] uppercase tracking-tight transition-all transform active:scale-95 cursor-pointer"
        >
          <ShoppingBag className="w-5 h-5" />
          <span>Adicionar ao Pedido</span>
        </button>
      </div>

    </div>
  );
};
