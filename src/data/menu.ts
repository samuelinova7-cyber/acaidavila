import { SizeOption, Accompaniment, AddOn, BaseMenuItem } from '../types';

export const BRAND_INFO = {
  name: "Açaí da Vila",
  slogan: "Muito Mais Sabor, Muito Mais Vila",
  badge: "Cara Nova ✨",
  address: "Vila dos Pescadores, Nº 28 — Praia do Francês",
  phone: "(82) 98763-0110",
  whatsappNumber: "5582987630110",
  whatsappUrl: "https://wa.me/5582987630110",
  hours: "Segunda a Domingo, das 14h às 22h",
  openingStartHour: 14,
  openingEndHour: 22,
  services: ["Retirada no local", "Delivery na Praia do Francês"],
  instagram: "@acaidavila_f6",
  instagramUrl: "https://instagram.com/acaidavila_f6",
  deliveryZone: "Praia do Francês"
};

export const ACAI_SIZES: SizeOption[] = [
  { ml: '250', label: 'Kids (250 ml)', price: 9.99, maxAccompaniments: 3 },
  { ml: '300', label: '300 ml', price: 14.00, maxAccompaniments: 5 },
  { ml: '400', label: '400 ml', price: 16.00, maxAccompaniments: 5 },
  { ml: '500', label: '500 ml', price: 19.00, maxAccompaniments: 5 },
];

export const CREME_SIZES: SizeOption[] = [
  { ml: '300', label: '300 ml', price: 18.00, maxAccompaniments: 5 },
  { ml: '400', label: '400 ml', price: 20.00, maxAccompaniments: 5 },
  { ml: '500', label: '500 ml', price: 23.00, maxAccompaniments: 5 },
];

export const CREME_FLAVORS = [
  { id: 'ninho', name: 'Ninho' },
  { id: 'cupuacu', name: 'Cupuaçu' },
  { id: 'morango', name: 'Morango' },
];

export const ACCOMPANIMENTS: Accompaniment[] = [
  { id: 'leite_condensado', name: 'Leite Condensado', category: 'caldas' },
  { id: 'mel', name: 'Mel', category: 'caldas' },
  { id: 'farinha_lactea', name: 'Farinha Láctea', category: 'pos' },
  { id: 'leite_em_po', name: 'Leite em Pó', category: 'pos' },
  { id: 'neston', name: 'Neston', category: 'pos' },
  { id: 'granola', name: 'Granola', category: 'crocantes' },
  { id: 'pacoca', name: 'Paçoca', category: 'crocantes' },
  { id: 'flocos_amendoim', name: 'Flocos de Amendoim', category: 'crocantes' },
  { id: 'chocoball', name: 'Chocoball', category: 'crocantes' },
  { id: 'farinha_amendoim', name: 'Farinha de Amendoim', category: 'pos' },
  { id: 'marshmello', name: 'Marshmello', category: 'doces' },
  { id: 'amendoim', name: 'Amendoim', category: 'crocantes' },
  { id: 'flocos_arroz', name: 'Flocos de Arroz', category: 'crocantes' },
  { id: 'aveia', name: 'Aveia', category: 'crocantes' },
  { id: 'sucrilhos', name: 'Sucrilhos', category: 'crocantes' },
  { id: 'canudos', name: 'Canudos', category: 'doces' },
  { id: 'jujuba', name: 'Jujuba', category: 'doces' },
  { id: 'ovomaltine', name: 'Ovomaltine', category: 'pos' },
  { id: 'm_and_m', name: 'M&M', category: 'doces' },
  { id: 'banana', name: 'Banana', category: 'frutas' },
  { id: 'morango', name: 'Morango', category: 'frutas' },
  { id: 'kiwi', name: 'Kiwi', category: 'frutas' },
];

export const ADD_ONS: AddOn[] = [
  { id: 'nutella', name: 'Nutella', price: 5.00 },
  { id: 'kitkat', name: 'KitKat', price: 3.00 },
  { id: 'gotas_chocolate', name: 'Gotas de Chocolate', price: 3.00 },
  { id: 'baton', name: 'Baton', price: 2.00 },
  { id: 'oreo', name: 'Oreo', price: 3.00 },
  { id: 'tortuguita', name: 'Tortuguita', price: 2.00 },
];

export const VITAMINAS: BaseMenuItem[] = [
  {
    id: 'vit_vila_mix',
    name: 'Vila-Mix',
    category: 'vitaminas',
    description: 'Açaí, leite, banana, paçoca, neston, farinha láctea e xarope de guaraná',
    price: 12.00,
    popular: true,
  },
  {
    id: 'vit_nordestina',
    name: 'Nordestina',
    category: 'vitaminas',
    description: 'Açaí, leite, banana, granola, paçoca, amendoim e castanha',
    price: 15.00,
    popular: true,
  },
  {
    id: 'vit_moran_mix',
    name: 'Moran-Mix',
    category: 'vitaminas',
    description: 'Açaí, leite, morango, banana e farinha láctea',
    price: 12.00,
  },
  {
    id: 'vit_avexada',
    name: 'Avexada',
    category: 'vitaminas',
    description: 'Banana, leite, neston e paçoca',
    price: 8.00,
  },
  {
    id: 'vit_coqueiral',
    name: 'Coqueiral',
    category: 'vitaminas',
    description: 'Abacate, leite, farinha láctea e açúcar',
    price: 10.00,
  },
  {
    id: 'vit_coral',
    name: 'Coral',
    category: 'vitaminas',
    description: 'Morango, farinha láctea, neston, leite e açúcar',
    price: 10.00,
  },
];

export const SUCOS_FRUTAS: BaseMenuItem[] = [
  { id: 'suco_laranja', name: 'Suco de Laranja', category: 'sucos', price: 9.00 },
  { id: 'suco_limao', name: 'Suco de Limão', category: 'sucos', price: 9.00 },
  { id: 'suco_morango', name: 'Suco de Morango', category: 'sucos', price: 10.00 },
  { id: 'suco_acai_power', name: 'Açaí Power', category: 'sucos', description: 'Laranja com Açaí', price: 12.00, popular: true },
  { id: 'suco_energia_vila', name: 'Energia da Vila', category: 'sucos', description: 'Laranja com Morango', price: 12.00 },
  { id: 'suco_natural_raiz', name: 'Natural Raiz', category: 'sucos', description: 'Laranja, cenoura e beterraba', price: 12.00 },
];

export const POLPAS_SABORES = ['Acerola', 'Goiaba', 'Graviola', 'Cajá', 'Abacaxi'];

export const SALGADOS_E_BEBIDAS: BaseMenuItem[] = [
  { id: 'salgado_assado', name: 'Salgado Assado', category: 'salgados_bebidas', description: 'Esfiha, empada, enroladinho, pastel assado. Consultar sabores no WhatsApp', price: 8.00 },
  { id: 'salgado_frito', name: 'Salgado Frito', category: 'salgados_bebidas', description: 'Coxinha, risole, enrolado frito. Consultar sabores no WhatsApp', price: 7.50 },
  { id: 'bebida_agua', name: 'Água Mineral 500ml', category: 'salgados_bebidas', price: 4.00 },
  { id: 'bebida_cafe', name: 'Café', category: 'salgados_bebidas', price: 5.00 },
  { id: 'bebida_refri_lata', name: 'Refrigerante Lata', category: 'salgados_bebidas', description: 'Coca-Cola, Guaraná, Fanta (especificar no pedido)', price: 6.00 },
  { id: 'bebida_refri_litro', name: 'Refrigerante 1 Litro', category: 'salgados_bebidas', price: 10.00 },
  { id: 'bebida_del_valle', name: 'Del Valle Lata', category: 'salgados_bebidas', price: 7.00 },
  { id: 'bebida_sprite_lemon', name: 'Sprite Lemon Fresh', category: 'salgados_bebidas', price: 7.00 },
  { id: 'bebida_powerade', name: 'Powerade', category: 'salgados_bebidas', price: 9.00 },
];

export const ESPECIAIS_COMBO: BaseMenuItem[] = [
  {
    id: 'combo_praia_francês',
    name: 'Combo Praia do Francês',
    category: 'especiais',
    description: 'Açaí 500ml + Nutella + Leite em Pó + Morango + KitKat',
    price: 25.00,
    popular: true,
  },
  {
    id: 'combo_kids_alegria',
    name: 'Combo Kids Alegria',
    category: 'especiais',
    description: 'Açaí Kids 250ml + M&M + Leite Condensado + Jujuba + Tortuguita',
    price: 13.50,
  },
  {
    id: 'combo_super_energia',
    name: 'Combo Super Energia',
    category: 'especiais',
    description: 'Vila-Mix + Açaí 400ml com Granola, Banana e Paçoca',
    price: 26.00,
    popular: true,
  },
  {
    id: 'combo_tropical_ninho',
    name: 'Combo Tropical Ninho',
    category: 'especiais',
    description: 'Creme Ninho 400ml + Nutella + Morango + Gotas de Chocolate',
    price: 26.00,
  },
];
