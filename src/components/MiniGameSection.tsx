import React from 'react';
import { Gamepad2, Trophy, Sparkles, Play, Flame, ExternalLink, Zap } from 'lucide-react';
import { BRAND_INFO } from '../data/menu';

export const MiniGameSection: React.FC = () => {
  const gameUrl = BRAND_INFO.gameUrl || 'https://acaidavilagame.vercel.app/';

  return (
    <section 
      id="mini-game"
      className="relative my-10 overflow-hidden rounded-3xl bg-gradient-to-br from-[#1E0427] via-[#2A0835] to-[#120117] border-2 border-[#8E156A]/60 shadow-[0_10px_40px_rgba(0,0,0,0.6)] p-6 sm:p-8"
    >
      {/* Background Decorative Neon Glows */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#8E156A]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#FFD600]/15 blur-3xl" />
      
      {/* Grid Pattern Accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(199,125,255,0.08)_1px,transparent_0)] bg-[size:24px_24px] opacity-70" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Left Content Column */}
        <div className="flex-1 text-center lg:text-left space-y-4">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD600]/15 border border-[#FFD600]/40 text-[#FFD600] text-xs font-black uppercase tracking-wider shadow-sm">
            <Gamepad2 className="w-4 h-4 animate-bounce" />
            <span>Mini Game Oficial do Açaí da Vila</span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E676] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E676]"></span>
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight leading-tight">
            Diversão & Sabor: <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD600] via-[#FFA000] to-[#C77DFF]">
              Jogue o Game do Açaí!
            </span>
          </h2>

          {/* Subtitle / Description */}
          <p className="text-sm sm:text-base text-gray-200 font-medium max-w-xl leading-relaxed mx-auto lg:mx-0">
            Enquanto seu açaí geladinho chega ou você relaxa na Praia do Francês, venha se divertir! Colete os ingredientes, desvie dos desafios e veja quantos pontos consegue marcar.
          </p>

          {/* Feature Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E0E0E0] bg-[#1E0427]/80 border border-[#8E156A]/50 px-3 py-1.5 rounded-xl">
              <Zap className="w-3.5 h-3.5 text-[#FFD600]" />
              100% Grátis & Online
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E0E0E0] bg-[#1E0427]/80 border border-[#8E156A]/50 px-3 py-1.5 rounded-xl">
              <Trophy className="w-3.5 h-3.5 text-[#00E676]" />
              Bata seu Recorde
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E0E0E0] bg-[#1E0427]/80 border border-[#8E156A]/50 px-3 py-1.5 rounded-xl">
              <Sparkles className="w-3.5 h-3.5 text-[#C77DFF]" />
              No Celular ou Computador
            </span>
          </div>

        </div>

        {/* Right CTA / Action Card */}
        <div className="w-full lg:w-auto flex flex-col items-center justify-center">
          <div className="w-full max-w-sm bg-[#1E0427]/90 border-2 border-[#FFD600]/40 rounded-2xl p-6 sm:p-7 shadow-2xl flex flex-col items-center text-center space-y-4 relative overflow-hidden backdrop-blur-md">
            
            {/* Corner Badge */}
            <div className="absolute -top-1 -right-1 bg-gradient-to-r from-[#FFD600] to-[#FFA000] text-[#1E0427] font-black text-[10px] px-3 py-1 rounded-bl-xl uppercase tracking-wider shadow">
              Web Game 🕹️
            </div>

            {/* Game Icon Graphic */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-[#8E156A] to-[#C77DFF] p-0.5 shadow-[0_0_25px_rgba(199,125,255,0.5)] flex items-center justify-center">
              <div className="w-full h-full bg-[#1E0427] rounded-2xl flex items-center justify-center">
                <Gamepad2 className="w-9 h-9 sm:w-11 sm:h-11 text-[#FFD600]" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-black text-white uppercase tracking-tight">
                Açaí da Vila Game
              </h3>
              <p className="text-xs text-gray-300 mt-0.5">
                Clique abaixo para começar a jogar agora
              </p>
            </div>

            {/* Play Button */}
            <a
              href={gameUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FFD600] via-[#FFA000] to-[#FF8F00] hover:from-[#FFE082] hover:to-[#FFA000] text-[#1E0427] font-black text-sm sm:text-base px-6 py-4 rounded-xl shadow-[0_0_25px_rgba(255,214,0,0.5)] uppercase tracking-tight transition-all duration-300 transform hover:scale-[1.03] active:scale-95 cursor-pointer btn-arcade-glow border border-amber-200"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>Jogar Mini Game Agora</span>
              <ExternalLink className="w-4 h-4 stroke-[2.5]" />
            </a>

            <span className="text-[11px] text-gray-400 font-medium">
              Abre instantaneamente em uma nova aba
            </span>

          </div>
        </div>

      </div>
    </section>
  );
};
