import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, MessageSquare, ExternalLink, ThumbsUp, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '../data/menu';

interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  tag: string;
}

const GOOGLE_REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Lucas Silveira',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: 'Há 2 dias',
    comment: 'Com certeza o melhor açaí da Praia do Francês! Super cremoso, acompanhamentos frescos e chega super rápido no delivery.',
    tag: 'Cliente Frequente'
  },
  {
    id: '2',
    author: 'Camila Rodrigues',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: 'Há 5 dias',
    comment: 'O creme de Ninho com Nutella e morango é simplesmente inexplicável de tão gostoso! Atendimento nota 1000.',
    tag: 'Compra Verificada'
  },
  {
    id: '3',
    author: 'Matheus Peixoto',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: 'Há 1 semana',
    comment: 'Ambiente aconchegante na Vila dos Pescadores. A vitamina Vila-Mix dá uma energia surreal pra aproveitar a praia!',
    tag: 'Local Guide'
  },
  {
    id: '4',
    author: 'Juliana Mendes',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: 'Há 1 semana',
    comment: 'Pedimos o combo Praia do Francês no hotel e chegou bem geladinho. Açaí de qualidade pura sem gelo.',
    tag: 'Delivery'
  },
  {
    id: '5',
    author: 'Rafael Cavalcante',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: 'Há 2 semanas',
    comment: 'Preço justo pela quantidade e qualidade dos acompanhamentos! Toda vez que venho ao Francês é parada obrigatória.',
    tag: 'Turista'
  },
  {
    id: '6',
    author: 'Beatriz Almeida',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: 'Há 2 semanas',
    comment: 'Copo caprichado demais! A paçoca e o leite condensado vem na medida certa. Parabéns pelo carinho e atendimento.',
    tag: 'Compra Verificada'
  },
  {
    id: '7',
    author: 'Thiago Mello',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: 'Há 3 semanas',
    comment: 'Suco de laranja com açaí (Açaí Power) espetacular! Refresca demais no calor de Alagoas.',
    tag: 'Local Guide'
  },
  {
    id: '8',
    author: 'Fernanda Costa',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: 'Há 3 semanas',
    comment: 'Atendimento muito simpático pelo WhatsApp, agilidade na entrega e açaí delicioso. Recomendo de olhos fechados!',
    tag: 'Delivery'
  },
  {
    id: '9',
    author: 'Gabriel Santos',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: 'Há 1 mês',
    comment: 'O melhor creme de Cupuaçu da região! Sabor autêntico e incomparável. Nota 5 estrelas fácil.',
    tag: 'Cliente Frequente'
  },
  {
    id: '10',
    author: 'Mariana Duarte',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: 'Há 1 mês',
    comment: 'Copos Kids perfeitos paras as crianças e os combos para os adultos são imbatíveis! A família toda amou.',
    tag: 'Compra Verificada'
  }
];

export const GoogleReviewsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll logic
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const googleReviewSearchUrl = `https://www.google.com/search?q=Acai+da+Vila+Praia+do+Frances+Alagoas#lrd=0x0:0x0,3`;

  return (
    <section className="bg-[#2A0835] border-l-4 border-l-[#00C853] border-t border-r border-b border-[#8E156A]/50 rounded-r-2xl p-5 sm:p-8 shadow-2xl space-y-6 my-8">
      
      {/* Header & Overall Google Score */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-[#8E156A]/30">
        
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 bg-[#1E0427] border border-[#8E156A]/50 px-3 py-1 rounded-full text-[11px] font-bold text-[#C77DFF] uppercase tracking-widest">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#00C853]" />
            <span>Avaliações Verificadas do Google</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            Quem Provou, Amou! ⭐
          </h3>
          <p className="text-xs sm:text-sm text-[#E0E0E0] max-w-lg">
            Confira o que nossos clientes dizem sobre o sabor, a cremosidade e o atendimento do Açaí da Vila na Praia do Francês.
          </p>
        </div>

        {/* Rating Card & CTA */}
        <div className="bg-[#1E0427] border border-[#8E156A] p-4 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center gap-4 self-stretch md:self-auto shrink-0">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1">
              <span className="text-3xl font-black text-white">4.9</span>
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-[11px] text-[#C77DFF] font-bold uppercase tracking-wider mt-0.5">
              +250 Avaliações 5 Estrelas
            </p>
          </div>

          <a
            href={googleReviewSearchUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00C853] hover:bg-[#00A843] text-[#1E0427] font-black text-xs px-5 py-3 rounded-xl shadow-[0_0_15px_rgba(0,200,83,0.3)] uppercase tracking-tight transition-all active:scale-95 cursor-pointer shrink-0"
          >
            <Star className="w-4 h-4 fill-[#1E0427] stroke-[#1E0427]" />
            <span>Avaliar no Google</span>
            <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>

      </div>

      {/* Carousel Wrapper */}
      <div 
        className="relative group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        
        {/* Navigation Buttons */}
        <button
          onClick={() => handleScroll('left')}
          className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#1E0427]/90 hover:bg-[#8E156A] text-white border border-[#C77DFF]/50 flex items-center justify-center shadow-xl transition-all cursor-pointer backdrop-blur-sm opacity-90 group-hover:opacity-100"
          title="Anterior"
        >
          <ChevronLeft className="w-5 h-5 stroke-[3]" />
        </button>

        <button
          onClick={() => handleScroll('right')}
          className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#1E0427]/90 hover:bg-[#8E156A] text-white border border-[#C77DFF]/50 flex items-center justify-center shadow-xl transition-all cursor-pointer backdrop-blur-sm opacity-90 group-hover:opacity-100"
          title="Próximo"
        >
          <ChevronRight className="w-5 h-5 stroke-[3]" />
        </button>

        {/* Reviews Cards Track */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-4 overflow-x-auto scrollbar-none py-2 px-1 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {GOOGLE_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="snap-start shrink-0 w-72 sm:w-80 bg-[#1E0427] border border-[#8E156A]/40 rounded-2xl p-5 shadow-xl flex flex-col justify-between hover:border-[#00C853] transition-all duration-300"
            >
              <div className="space-y-3">
                
                {/* Author Info */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover border border-[#C77DFF]"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-white leading-tight">{rev.author}</h4>
                      <span className="text-[10px] text-[#C77DFF]">{rev.date}</span>
                    </div>
                  </div>

                  {/* 5 Stars */}
                  <div className="flex items-center text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Comment Text */}
                <p className="text-xs text-[#E0E0E0] leading-relaxed italic">
                  "{rev.comment}"
                </p>

              </div>

              {/* Tag & Verified Badge */}
              <div className="pt-3 mt-4 border-t border-[#8E156A]/20 flex items-center justify-between text-[10px]">
                <span className="bg-[#8E156A]/40 text-[#C77DFF] font-semibold px-2.5 py-0.5 rounded-full border border-[#8E156A]/50">
                  {rev.tag}
                </span>

                <div className="flex items-center gap-1 text-[#00C853] font-bold">
                  <ThumbsUp className="w-3 h-3" />
                  <span>Recomendado</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
