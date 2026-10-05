import React, { useEffect, useState } from 'react';

interface IntroLoaderProps {
  onComplete: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'initial' | 'zoom' | 'fadeout'>('initial');

  useEffect(() => {
    // 0.0s a 0.6s: Impacto inicial
    const tZoom = setTimeout(() => {
      setStage('zoom');
    }, 600);

    // 0.6s a 1.4s: Zoom violento Netflix
    const tFade = setTimeout(() => {
      setStage('fadeout');
    }, 1400);

    // 1.4s a 2.0s: Fin exacto a los 2000 ms
    const tDone = setTimeout(() => {
      onComplete();
    }, 2000);

    // Bloqueo de scroll
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(tZoom);
      clearTimeout(tFade);
      clearTimeout(tDone);
      document.body.style.overflow = 'auto';
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 w-screen h-screen bg-black z-[999999] flex items-center justify-center overflow-hidden transition-opacity duration-600 ${
        stage === 'fadeout' ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
      aria-hidden="true"
    >
      {/* Fondo con resplandor radial */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,91,192,0.25)_0%,rgba(0,0,0,0.98)_75%,#000000_100%)] pointer-events-none" />

      {/* Ráfagas de luz vertical hiperespacial estilo Netflix */}
      {stage !== 'initial' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 bottom-0 left-[18%] w-[2.5px] bg-gradient-to-b from-transparent via-[#00d2ff] via-white to-transparent shadow-[0_0_20px_#00d2ff] animate-pulse" />
          <div className="absolute top-0 bottom-0 left-[32%] w-[4px] bg-gradient-to-b from-transparent via-white via-[#005bc0] to-transparent shadow-[0_0_25px_#005bc0]" />
          <div className="absolute top-0 bottom-0 left-[48%] w-[2px] bg-gradient-to-b from-transparent via-[#00d2ff] to-transparent shadow-[0_0_15px_#00d2ff]" />
          <div className="absolute top-0 bottom-0 left-[64%] w-[5px] bg-gradient-to-b from-transparent via-white to-transparent shadow-[0_0_30px_#00d2ff]" />
          <div className="absolute top-0 bottom-0 left-[82%] w-[3px] bg-gradient-to-b from-transparent via-[#00d2ff] to-transparent shadow-[0_0_20px_#005bc0]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vmax] h-[140vmax] rounded-full bg-[radial-gradient(circle,rgba(0,210,255,0.45)_0%,rgba(0,91,192,0.2)_30%,transparent_60%)] animate-ping" />
        </div>
      )}

      {/* Contenedor central del Logotipo */}
      <div
        className="relative z-10 flex flex-col items-center justify-center transition-all will-change-transform"
        style={{
          transform:
            stage === 'initial'
              ? 'scale(1.0)'
              : stage === 'zoom'
              ? 'scale(15)'
              : 'scale(18)',
          opacity: stage === 'fadeout' ? 0 : 1,
          filter:
            stage === 'zoom'
              ? 'brightness(3.0) drop-shadow(0 0 60px #00d2ff)'
              : 'brightness(1.0) drop-shadow(0 0 25px rgba(0,210,255,0.8))',
          transitionDuration: stage === 'zoom' ? '800ms' : '600ms',
          transitionTimingFunction:
            stage === 'zoom' ? 'cubic-bezier(0.7, 0, 0.84, 0)' : 'cubic-bezier(0.2, 0.9, 0.3, 1.2)'
        }}
      >
        {/* Isotipo Oficial Volkswagen SVG */}
        <svg
          className="w-28 h-28 text-white drop-shadow-[0_0_30px_rgba(0,210,255,0.9)]"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="4.5" />
          <circle cx="50" cy="50" r="41.5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
          <path d="M30 26 L46.5 64 L50 64 L53.5 64 L70 26 L63 26 L50 56 L37 26 Z" fill="currentColor" />
          <path d="M22 44 L37.5 76 L42 76 L50 57.5 L58 76 L62.5 76 L78 44 L71 44 L59 69 L51.5 52 L48.5 52 L41 69 L29 44 Z" fill="currentColor" />
        </svg>

        <div className="mt-4 font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight text-shadow-[0_0_20px_rgba(0,210,255,0.8)]">
          LNG Olivieri
        </div>
        <div className="mt-1 font-bold text-[9px] tracking-[0.25em] uppercase text-[#adc6ff]">
          Concesionario Oficial Volkswagen
        </div>
      </div>
    </div>
  );
};
