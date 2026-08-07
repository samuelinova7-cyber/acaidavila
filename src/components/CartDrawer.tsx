import React, { useState } from 'react';
import { CartItem, CustomerOrderData, OrderType, PaymentMethod } from '../types';
import { BRAND_INFO } from '../data/menu';
import { X, Trash2, Plus, Minus, ShoppingBag, Send, MapPin, Bike, Store, CreditCard, DollarSign, QrCode } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (cartItemId: string, delta: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderData, setOrderData] = useState<CustomerOrderData>({
    orderType: 'delivery',
    customerName: '',
    phone: '',
    streetAddress: '',
    neighborhood: 'Praia do Francês',
    referencePoint: '',
    pickupTime: '',
    paymentMethod: 'pix',
    needChange: false,
    changeAmount: '',
    notes: '',
  });

  const [formError, setFormError] = useState<string | null>(null);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  const handleSendWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      setFormError('Seu carrinho está vazio!');
      return;
    }

    if (!orderData.customerName.trim()) {
      setFormError('Por favor, informe seu nome.');
      return;
    }

    if (orderData.orderType === 'delivery' && !orderData.streetAddress?.trim()) {
      setFormError('Por favor, informe o endereço para entrega.');
      return;
    }

    setFormError(null);

    // Format WhatsApp message
    let msg = `*NOVO PEDIDO - AÇAÍ DA VILA* ✨\n\n`;
    msg += `*Tipo de Pedido:* ${orderData.orderType === 'delivery' ? '🛵 Delivery na Praia do Francês' : '🛍️ Retirada no Local'}\n`;
    msg += `*Cliente:* ${orderData.customerName.trim()}\n`;
    if (orderData.phone.trim()) {
      msg += `*Telefone/Contato:* ${orderData.phone.trim()}\n`;
    }

    if (orderData.orderType === 'delivery') {
      msg += `*Endereço:* ${orderData.streetAddress.trim()}\n`;
      msg += `*Bairro:* ${orderData.neighborhood || 'Praia do Francês'}\n`;
      if (orderData.referencePoint?.trim()) {
        msg += `*Ponto de Ref.:* ${orderData.referencePoint.trim()}\n`;
      }
    } else {
      msg += `*Local de Retirada:* ${BRAND_INFO.address}\n`;
    }

    msg += `\n*ITENS DO PEDIDO:*\n`;
    msg += `----------------------------------\n`;

    cartItems.forEach((item, index) => {
      msg += `*${item.quantity}x ${item.title}* - R$ ${(item.unitPrice * item.quantity).toFixed(2).replace('.', ',')}\n`;
      
      if (item.subtitle) {
        msg += `  _${item.subtitle}_\n`;
      }

      if (item.customDetails?.accompaniments && item.customDetails.accompaniments.length > 0) {
        msg += `  • *Acompanhamentos:* ${item.customDetails.accompaniments.join(', ')}\n`;
      }

      if (item.customDetails?.addOns && item.customDetails.addOns.length > 0) {
        msg += `  • *Adicionais:* ${item.customDetails.addOns.map(a => a.name).join(', ')}\n`;
      }

      if (item.customDetails?.notes) {
        msg += `  • *Obs:* ${item.customDetails.notes}\n`;
      }

      msg += `\n`;
    });

    msg += `----------------------------------\n`;
    
    // Payment method text
    let payText = '';
    if (orderData.paymentMethod === 'pix') payText = 'Pix (Chave informada no atendimento)';
    else if (orderData.paymentMethod === 'cartao_credito') payText = 'Cartão de Crédito (Maquininha)';
    else if (orderData.paymentMethod === 'cartao_debito') payText = 'Cartão de Débito (Maquininha)';
    else if (orderData.paymentMethod === 'dinheiro') {
      payText = `Dinheiro${orderData.needChange && orderData.changeAmount ? ` (Troco para R$ ${orderData.changeAmount})` : ''}`;
    }

    msg += `*Forma de Pagamento:* ${payText}\n`;

    if (orderData.notes?.trim()) {
      msg += `*Observações Gerais:* ${orderData.notes.trim()}\n`;
    }

    msg += `\n*VALOR TOTAL:* *R$ ${subtotal.toFixed(2).replace('.', ',')}*\n\n`;
    msg += `_"Muito Mais Sabor, Muito Mais Vila" 🍧_`;

    const encodedMessage = encodeURIComponent(msg);
    const whatsappUrl = `${BRAND_INFO.whatsappUrl}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm flex justify-end">
      
      {/* Slide drawer container */}
      <div className="relative w-full max-w-lg bg-[#1E0427] text-white h-full flex flex-col shadow-2xl border-l border-[#8E156A]/50 animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 bg-[#2A0835] border-b border-[#8E156A]/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#00C853]" />
            <h2 className="text-lg font-black text-white font-serif">Seu Pedido</h2>
            <span className="bg-[#8E156A] text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)} {cartItems.length === 1 ? 'item' : 'itens'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {cartItems.length > 0 && (
              <button
                type="button"
                onClick={onClearCart}
                className="text-xs text-rose-300 hover:text-rose-100 underline cursor-pointer mr-2"
              >
                Esvaziar
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-[#1E0427] text-[#E0E0E0] hover:text-white border border-[#8E156A]/40 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6">
          
          {/* Cart Items List */}
          {cartItems.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#2A0835] border border-[#8E156A]/40 flex items-center justify-center mx-auto text-2xl">
                🍧
              </div>
              <p className="text-sm text-[#E0E0E0] font-medium">Seu carrinho está vazio.</p>
              <p className="text-xs text-[#C77DFF]">Escolha seus açaís, cremes ou bebidas no cardápio para fazer seu pedido!</p>
              <button
                onClick={onClose}
                className="mt-4 bg-[#8E156A] text-white text-xs font-bold px-5 py-2.5 rounded-xl border border-[#C77DFF]/30 cursor-pointer"
              >
                Voltar ao Cardápio
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-[#C77DFF] uppercase tracking-wider">
                Itens Selecionados
              </h3>

              {cartItems.map((item) => (
                <div
                  key={item.cartItemId}
                  className="bg-[#2A0835] border border-[#8E156A]/40 rounded-xl p-3.5 space-y-2 relative"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      {item.subtitle && (
                        <p className="text-xs text-[#C77DFF] mt-0.5">{item.subtitle}</p>
                      )}
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.cartItemId)}
                      className="text-rose-400 hover:text-rose-200 p-1 cursor-pointer shrink-0"
                      title="Remover item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Accompaniments & Addons display */}
                  {item.customDetails?.accompaniments && item.customDetails.accompaniments.length > 0 && (
                    <div className="text-[11px] text-[#E0E0E0] bg-[#1E0427] p-2 rounded-lg border border-[#8E156A]/20">
                      <span className="font-semibold text-[#C77DFF]">Acompanhamentos: </span>
                      {item.customDetails.accompaniments.join(', ')}
                    </div>
                  )}

                  {item.customDetails?.addOns && item.customDetails.addOns.length > 0 && (
                    <div className="text-[11px] text-[#00C853] bg-[#1E0427] p-2 rounded-lg border border-[#8E156A]/20">
                      <span className="font-semibold text-white">Adicionais: </span>
                      {item.customDetails.addOns.map(a => `${a.name} (+R$${a.price.toFixed(2)})`).join(', ')}
                    </div>
                  )}

                  {item.customDetails?.notes && (
                    <p className="text-[11px] text-amber-300 italic">
                      Obs: "{item.customDetails.notes}"
                    </p>
                  )}

                  {/* Quantity and unit price */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#8E156A]/20 text-xs">
                    <span className="font-bold text-[#00C853]">
                      R$ {(item.unitPrice * item.quantity).toFixed(2).replace('.', ',')}
                    </span>

                    <div className="flex items-center gap-2 bg-[#1E0427] rounded-lg p-1 border border-[#8E156A]/40">
                      <button
                        onClick={() => onUpdateQuantity(item.cartItemId, -1)}
                        className="w-6 h-6 rounded bg-[#8E156A] text-white flex items-center justify-center font-bold hover:bg-[#8E156A]/80 cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-bold px-1">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.cartItemId, 1)}
                        className="w-6 h-6 rounded bg-[#00C853] text-[#1E0427] flex items-center justify-center font-bold hover:bg-[#00A843] cursor-pointer"
                      >
                        <Plus className="w-3 h-3 stroke-[3]" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {cartItems.length > 0 && (
            <form onSubmit={handleSendWhatsAppOrder} className="space-y-5 pt-2 border-t border-[#8E156A]/30">
              
              {/* Order Type Toggle */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#C77DFF] uppercase tracking-wider">
                  Tipo de Entrega / Retirada
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setOrderData({ ...orderData, orderType: 'delivery' })}
                    className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                      orderData.orderType === 'delivery'
                        ? 'bg-[#8E156A] border-[#00C853] text-white shadow-lg'
                        : 'bg-[#2A0835] border-[#8E156A]/30 text-[#E0E0E0]'
                    }`}
                  >
                    <Bike className="w-4 h-4 text-[#00C853]" />
                    <span>Delivery (Praia do Francês)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOrderData({ ...orderData, orderType: 'retirada' })}
                    className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                      orderData.orderType === 'retirada'
                        ? 'bg-[#8E156A] border-[#00C853] text-white shadow-lg'
                        : 'bg-[#2A0835] border-[#8E156A]/30 text-[#E0E0E0]'
                    }`}
                  >
                    <Store className="w-4 h-4 text-[#C77DFF]" />
                    <span>Retirada no Local</span>
                  </button>
                </div>
              </div>

              {/* Customer Info Fields */}
              <div className="space-y-3 bg-[#2A0835] p-4 rounded-2xl border border-[#8E156A]/40">
                <h4 className="text-xs font-bold text-[#C77DFF] uppercase tracking-wider">
                  Dados do Cliente
                </h4>

                <div>
                  <label className="block text-[11px] text-[#E0E0E0] mb-1">Seu Nome *</label>
                  <input
                    type="text"
                    required
                    value={orderData.customerName}
                    onChange={(e) => setOrderData({ ...orderData, customerName: e.target.value })}
                    placeholder="Ex: Maria Silva"
                    className="w-full bg-[#1E0427] border border-[#8E156A]/40 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#00C853]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-[#E0E0E0] mb-1">WhatsApp / Telefone</label>
                  <input
                    type="tel"
                    value={orderData.phone}
                    onChange={(e) => setOrderData({ ...orderData, phone: e.target.value })}
                    placeholder="Ex: (82) 99999-9999"
                    className="w-full bg-[#1E0427] border border-[#8E156A]/40 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#00C853]"
                  />
                </div>

                {orderData.orderType === 'delivery' && (
                  <>
                    <div>
                      <label className="block text-[11px] text-[#E0E0E0] mb-1">Endereço de Entrega *</label>
                      <input
                        type="text"
                        required
                        value={orderData.streetAddress}
                        onChange={(e) => setOrderData({ ...orderData, streetAddress: e.target.value })}
                        placeholder="Rua, número, complemento..."
                        className="w-full bg-[#1E0427] border border-[#8E156A]/40 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#00C853]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] text-[#E0E0E0] mb-1">Bairro</label>
                        <input
                          type="text"
                          value={orderData.neighborhood}
                          onChange={(e) => setOrderData({ ...orderData, neighborhood: e.target.value })}
                          className="w-full bg-[#1E0427] border border-[#8E156A]/40 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00C853]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-[#E0E0E0] mb-1">Ponto de Referência</label>
                        <input
                          type="text"
                          value={orderData.referencePoint}
                          onChange={(e) => setOrderData({ ...orderData, referencePoint: e.target.value })}
                          placeholder="Ex: Próximo à pousada..."
                          className="w-full bg-[#1E0427] border border-[#8E156A]/40 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#00C853]"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Payment Method */}
              <div className="space-y-3 bg-[#2A0835] p-4 rounded-2xl border border-[#8E156A]/40">
                <h4 className="text-xs font-bold text-[#C77DFF] uppercase tracking-wider">
                  Forma de Pagamento
                </h4>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setOrderData({ ...orderData, paymentMethod: 'pix' })}
                    className={`p-2.5 rounded-xl border flex items-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                      orderData.paymentMethod === 'pix'
                        ? 'bg-[#8E156A] border-[#00C853] text-white'
                        : 'bg-[#1E0427] border-[#8E156A]/30 text-[#E0E0E0]'
                    }`}
                  >
                    <QrCode className="w-4 h-4 text-[#00C853]" />
                    <span>Pix</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOrderData({ ...orderData, paymentMethod: 'cartao_credito' })}
                    className={`p-2.5 rounded-xl border flex items-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                      orderData.paymentMethod === 'cartao_credito'
                        ? 'bg-[#8E156A] border-[#00C853] text-white'
                        : 'bg-[#1E0427] border-[#8E156A]/30 text-[#E0E0E0]'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-[#C77DFF]" />
                    <span>Cartão Crédito/Débito</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOrderData({ ...orderData, paymentMethod: 'dinheiro' })}
                    className={`p-2.5 rounded-xl border flex items-center gap-2 text-xs font-bold transition-all cursor-pointer col-span-2 ${
                      orderData.paymentMethod === 'dinheiro'
                        ? 'bg-[#8E156A] border-[#00C853] text-white'
                        : 'bg-[#1E0427] border-[#8E156A]/30 text-[#E0E0E0]'
                    }`}
                  >
                    <DollarSign className="w-4 h-4 text-[#00C853]" />
                    <span>Dinheiro</span>
                  </button>
                </div>

                {orderData.paymentMethod === 'dinheiro' && (
                  <div className="pt-2 border-t border-[#8E156A]/20 space-y-2">
                    <label className="flex items-center gap-2 text-xs text-[#E0E0E0]">
                      <input
                        type="checkbox"
                        checked={orderData.needChange}
                        onChange={(e) => setOrderData({ ...orderData, needChange: e.target.checked })}
                        className="rounded border-[#8E156A] text-[#00C853] focus:ring-[#00C853]"
                      />
                      <span>Precisa de troco?</span>
                    </label>

                    {orderData.needChange && (
                      <input
                        type="text"
                        value={orderData.changeAmount}
                        onChange={(e) => setOrderData({ ...orderData, changeAmount: e.target.value })}
                        placeholder="Troco para quanto? Ex: 50,00"
                        className="w-full bg-[#1E0427] border border-[#8E156A]/40 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#00C853]"
                      />
                    )}
                  </div>
                )}
              </div>

              {/* Form Error Message */}
              {formError && (
                <div className="p-3 bg-rose-500/20 border border-rose-500/50 rounded-xl text-xs text-rose-200 font-medium">
                  {formError}
                </div>
              )}

              {/* Order Total Summary & WhatsApp Submit */}
              <div className="bg-[#2A0835] p-4 rounded-2xl border border-[#00C853]/40 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#E0E0E0]">Subtotal dos Itens:</span>
                  <span className="font-bold text-white">R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                </div>

                <div className="flex items-center justify-between text-xs text-[#C77DFF]">
                  <span>Taxa de Entrega:</span>
                  <span>A combinar no WhatsApp</span>
                </div>

                <div className="pt-2 border-t border-[#8E156A]/40 flex items-center justify-between">
                  <span className="text-base font-black text-white">Total do Pedido:</span>
                  <span className="text-2xl font-black text-[#00C853]">
                    R$ {subtotal.toFixed(2).replace('.', ',')}
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#00C853] hover:bg-[#00A843] text-[#1E0427] font-black text-sm px-6 py-4 rounded-xl shadow-[0_0_20px_rgba(0,200,83,0.3)] uppercase tracking-tight transition-all transform active:scale-95 cursor-pointer"
                >
                  <Send className="w-5 h-5 fill-current" />
                  <span>Enviar Pedido no WhatsApp</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
