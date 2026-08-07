import React, { useState, useRef } from 'react';
import { Header } from './components/Header';
import { AcaiBuilder } from './components/AcaiBuilder';
import { MenuCatalog } from './components/MenuCatalog';
import { CartDrawer } from './components/CartDrawer';
import { LocationModal } from './components/LocationModal';
import { Footer } from './components/Footer';
import { InstagramCarousel } from './components/InstagramCarousel';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { MapSection } from './components/MapSection';
import { CartItem } from './types';
import { BRAND_INFO } from './data/menu';
import { ShoppingBag, MessageCircle, Bike, Store, MapPin, Sparkles, ChevronRight } from 'lucide-react';
import heroBannerImage from './assets/images/acai_hero_banner_1786137925494.jpg';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const builderRef = useRef<HTMLDivElement>(null);

  const handleAddToCart = (newItem: CartItem) => {
    setCartItems(prevItems => {
      // Check if identical non-custom item exists
      if (!newItem.customDetails) {
        const existingIndex = prevItems.findIndex(i => i.title === newItem.title && !i.customDetails);
        if (existingIndex > -1) {
          const updated = [...prevItems];
          updated[existingIndex].quantity += newItem.quantity;
          return updated;
        }
      }
      return [newItem, ...prevItems];
    });
  };

  const handleUpdateQuantity = (cartItemId: string, delta: number) => {
    setCartItems(prevItems => {
      return prevItems
        .map(item => {
          if (item.cartItemId === cartItemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems(prevItems => prevItems.filter(i => i.cartItemId !== cartItemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToBuilder = () => {
    builderRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartPrice = cartItems.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);

  return (
    <div className="min-h-screen bg-[#1E0427] text-white flex flex-col font-sans selection:bg-[#C77DFF] selection:text-[#1E0427]">
      
      {/* Header */}
      <Header
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
        onOpenInfo={() => setIsInfoOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 space-y-8">

        {/* Hero Visual Banner Card */}
        <div className="relative rounded-r-3xl rounded-l-xl overflow-hidden border-l-4 border-l-[#00C853] border-t border-r border-b border-[#8E156A]/50 shadow-2xl bg-[#2A0835]">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#1E0427] via-[#1E0427]/85 to-transparent" />
          
          <img
            src={heroBannerImage}
            alt="Açaí da Vila Especial"
            referrerPolicy="no-referrer"
            className="w-full h-56 sm:h-72 object-cover object-center"
          />

          <div className="absolute inset-0 z-20 p-6 sm:p-10 flex flex-col justify-center items-start max-w-xl">
            <span className="bg-[#00C853] text-[#1E0427] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-2 shadow-sm">
              Sabor Incomparável ✨
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
              Açaí Fresco & Cremoso na Praia do Francês
            </h2>
            <p className="text-xs sm:text-sm text-[#E0E0E0] mt-2 font-light">
              Escolha seu tamanho ideal, adicione seus acompanhamentos prediletos e receba via Delivery ou retire na hora!
            </p>

            <button
              onClick={scrollToBuilder}
              className="mt-4 inline-flex items-center gap-2 bg-[#00C853] hover:bg-[#00A843] text-[#1E0427] font-black text-xs sm:text-sm px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(0,200,83,0.3)] uppercase tracking-tight transition-all active:scale-95 cursor-pointer"
            >
              <span>Montar Meu Açaí Agora</span>
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>

        {/* Quick Info Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          
          <div className="bg-[#2A0835] border-l-4 border-l-[#00C853] border-t border-r border-b border-[#8E156A]/40 rounded-r-2xl p-4 flex items-center gap-3 shadow-lg">
            <div className="p-2.5 rounded-xl bg-[#1A237E]/60 text-[#00C853] shrink-0 border border-[#8E156A]/30">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-[#C77DFF] font-black uppercase tracking-widest">Endereço</p>
              <p className="text-xs font-semibold text-white">{BRAND_INFO.address}</p>
            </div>
          </div>

          <div className="bg-[#2A0835] border-l-4 border-l-[#C77DFF] border-t border-r border-b border-[#8E156A]/40 rounded-r-2xl p-4 flex items-center gap-3 shadow-lg">
            <div className="p-2.5 rounded-xl bg-[#1A237E]/60 text-[#C77DFF] shrink-0 border border-[#8E156A]/30">
              <Bike className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-[#C77DFF] font-black uppercase tracking-widest">Entrega & Retirada</p>
              <p className="text-xs font-semibold text-white">Delivery na Praia do Francês & Balcão</p>
            </div>
          </div>

          <div className="bg-[#2A0835] border-l-4 border-l-[#00C853] border-t border-r border-b border-[#8E156A]/40 rounded-r-2xl p-4 flex items-center gap-3 shadow-lg">
            <div className="p-2.5 rounded-xl bg-[#1A237E]/60 text-[#00C853] shrink-0 border border-[#8E156A]/30">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-[#C77DFF] font-black uppercase tracking-widest">Pedido via WhatsApp</p>
              <p className="text-xs font-semibold text-white">(82) 98763-0110</p>
            </div>
          </div>

        </div>

        {/* Instagram Feed & Carousel */}
        <InstagramCarousel />

        {/* Section 1: Interactive Acai / Creme Builder */}
        <div ref={builderRef} className="scroll-mt-6">
          <AcaiBuilder onAddToCart={handleAddToCart} />
        </div>

        {/* Section 2: Full Menu Catalog */}
        <MenuCatalog
          onAddToCart={handleAddToCart}
          onSelectCustomAcai={scrollToBuilder}
        />

        {/* Section 3: Google Reviews (Social Proof) */}
        <GoogleReviewsSection />

        {/* Section 4: Interactive Location Map (Praia do Francês) */}
        <MapSection />

      </main>

      {/* Floating Bottom Cart Bar (Mobile/Desktop overlay when cart has items) */}
      {totalCartCount > 0 && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:w-96 z-40 animate-in slide-in-from-bottom duration-300">
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full bg-[#00C853] hover:bg-[#00A843] text-[#1E0427] font-black p-4 rounded-2xl shadow-2xl flex items-center justify-between border-2 border-white/20 cursor-pointer active:scale-95 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <ShoppingBag className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-[#8E156A] text-white font-black text-xs w-5 h-5 rounded-full flex items-center justify-center border border-white">
                  {totalCartCount}
                </span>
              </div>
              <div className="text-left">
                <p className="text-xs uppercase font-bold tracking-wider opacity-80">Ver Meu Pedido</p>
                <p className="text-sm font-black">{totalCartCount} {totalCartCount === 1 ? 'item' : 'itens'}</p>
              </div>
            </div>

            <div className="text-right">
              <span className="text-lg font-black">R$ {totalCartPrice.toFixed(2).replace('.', ',')}</span>
              <p className="text-[10px] uppercase tracking-wider opacity-90 font-bold">Finalizar no WhatsApp →</p>
            </div>
          </button>
        </div>
      )}

      {/* Cart Drawer Modal */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

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
