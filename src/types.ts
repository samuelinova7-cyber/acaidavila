export type CategoryType = 
  | 'acai'
  | 'cremes'
  | 'vitaminas'
  | 'sucos'
  | 'salgados_bebidas'
  | 'especiais';

export interface BaseMenuItem {
  id: string;
  name: string;
  category: CategoryType;
  description?: string;
  price?: number;
  popular?: boolean;
  image?: string;
}

export interface SizeOption {
  ml: string;
  label: string;
  price: number;
  maxAccompaniments: number;
}

export interface Accompaniment {
  id: string;
  name: string;
  category?: 'caldas' | 'pos' | 'crocantes' | 'frutas' | 'doces';
}

export interface AddOn {
  id: string;
  name: string;
  price: number;
}

export interface CustomAcaiItem {
  id: string;
  type: 'acai' | 'creme';
  size: SizeOption;
  selectedAccompaniments: string[];
  selectedAddOns: AddOn[];
  cremeFlavor?: string; // For Monte seu Creme (Ninho, Cupuaçu, Morango)
  notes?: string;
  totalPrice: number;
}

export interface CustomCreamBallItem {
  id: string;
  ballsCount: number;
  selectedFlavors: string[];
  totalPrice: number;
}

export interface CartItem {
  cartItemId: string;
  title: string;
  subtitle?: string;
  unitPrice: number;
  quantity: number;
  customDetails?: {
    size?: string;
    accompaniments?: string[];
    addOns?: { name: string; price: number }[];
    flavor?: string;
    notes?: string;
  };
}

export type OrderType = 'delivery' | 'retirada';
export type PaymentMethod = 'pix' | 'cartao_credito' | 'cartao_debito' | 'dinheiro';

export interface CustomerOrderData {
  orderType: OrderType;
  customerName: string;
  phone: string;
  streetAddress?: string;
  neighborhood?: string; // Praia do Francês, etc
  referencePoint?: string;
  pickupTime?: string;
  paymentMethod: PaymentMethod;
  needChange: boolean;
  changeAmount?: string;
  notes?: string;
}
