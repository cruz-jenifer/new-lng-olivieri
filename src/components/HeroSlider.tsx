import React, { useState, useEffect, useRef } from 'react';

interface HeroSliderProps {
  onOpenTurno: () => void;
  onReplayIntro?: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenTurno, onReplayIntro }) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [mousePos, setMousePos] = useState({ x: -300, y: -300 });
  const [targetPos, setTargetPos] = useState({ x: -300, y: -300 });
  const [isHovered, setIsHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Fotografías en HD y de las instalaciones
  const HERO_IMAGES = [
    "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=2560&q=80",
    "/Entrada.jpg",
    "/Boxes%20de%20Servicio.JPG",
    "/Chapa%20y%20carrocer%C3%ADa.JPG",
    "/Área%20de%20Pintura%205.jpg"
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % HERO_IMAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // 1. Mouse tracking directo, sutil y preciso
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        setIsHovered(true);
        setTargetPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      } else {
        setIsHovered(false);
      }
    };

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / (rect.height || 1), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 2. LERP suave para inercia fluida del círculo
  useEffect(() => {
    let animId: number;
    const updateMouse = () => {
      setMousePos((prev) => {
        const dx = targetPos.x - prev.x;
        const dy = targetPos.y - prev.y;
        if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) return prev;
        return {
          x: prev.x + dx * 0.14,
          y: prev.y + dy * 0.14
        };
      });
      animId = requestAnimationFrame(updateMouse);
    };
    animId = requestAnimationFrame(updateMouse);
    return () => cancelAnimationFrame(animId);
  }, [targetPos]);

  // 3. Renderizado Canvas con parallax sutil y slider
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.src = HERO_IMAGES[currentImageIndex];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.parentElement?.clientWidth || window.innerWidth;
      const height = canvas.parentElement?.clientHeight || window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', resize);
    resize();

    let animId: number;
    let currentProgress = 0;

    const render = () => {
      currentProgress += (scrollProgress - currentProgress) * 0.1;

      const w = canvas.parentElement?.clientWidth || window.innerWidth;
      const h = canvas.parentElement?.clientHeight || window.innerHeight;

      ctx.clearRect(0, 0, w, h);

      // Fondo base oscuro
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, '#040d1a');
      grad.addColorStop(0.6, '#081224');
      grad.addColorStop(1, '#020617');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      if (img.complete && img.naturalWidth > 0) {
        ctx.save();

        const zoom = 1.0 + currentProgress * 0.15;
        const panY = currentProgress * (h * 0.04);
        ctx.translate(w / 2, h / 2 - panY);
        ctx.scale(zoom, zoom);

        const imgAspect = img.naturalWidth / img.naturalHeight;
        const canvasAspect = w / h;
        let drawW = w;
        let drawH = h;

        if (canvasAspect > imgAspect) {
          drawW = w;
          drawH = w / imgAspect;
        } else {
          drawH = h;
          drawW = h * imgAspect;
        }

        ctx.drawImage(img, -drawW / 2, -drawH / 2, drawW, drawH);
        ctx.restore();
      }

      // Brillo sutil de faros LED IQ.Light
      const flare = ctx.createRadialGradient(w * 0.65, h * 0.54, 5, w * 0.65, h * 0.54, w * 0.25);
      flare.addColorStop(0, 'rgba(0, 210, 255, 0.28)');
      flare.addColorStop(0.5, 'rgba(0, 91, 192, 0.15)');
      flare.addColorStop(1, 'transparent');
      ctx.fillStyle = flare;
      ctx.fillRect(0, 0, w, h);

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [scrollProgress, currentImageIndex]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[640px] h-[92vh] sm:h-screen bg-[#081224] text-white overflow-hidden flex items-center justify-center cursor-default select-none"
      id="inicio"
    >
      {/* Canvas con la imagen única del Tera */}
      <canvas
        id="hero-scroll-canvas"
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-[1] block pointer-events-none"
      />

      {/* Degradado cinematográfico para legibilidad */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 75% 50%, rgba(8,18,36,0.1) 0%, rgba(8,18,36,0.85) 100%), linear-gradient(90deg, rgba(8,18,36,0.96) 0%, rgba(8,18,36,0.6) 45%, rgba(8,18,36,0.2) 100%)'
        }}
      />

      {/* CÍRCULO SUTIL SOBRE EL MOUSE (DESENFOQUE TRANSPARENTE, SIN RELLENO SÓLIDO) */}
      <div
        className="absolute z-[4] pointer-events-none rounded-full transition-opacity duration-200 -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: '148px',
          height: '148px',
          opacity: isHovered ? 1 : 0,
          backdropFilter: 'blur(9px)',
          WebkitBackdropFilter: 'blur(9px)',
          backgroundColor: 'rgba(255, 255, 255, 0.02)', // Transparente, sin relleno sólido
          border: '1px solid rgba(255, 255, 255, 0.35)',
          boxShadow:
            '0 0 25px rgba(0, 210, 255, 0.22), inset 0 0 15px rgba(255, 255, 255, 0.09)'
        }}
      >
        {/* Retícula sutil interior y punto central */}
        <div className="absolute inset-2.5 rounded-full border border-white/15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-[#00d2ff]/40 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00d2ff] shadow-[0_0_8px_#00d2ff]" />
        </div>
      </div>

      {/* Contenido Comercial del Nuevo Tera */}
      <div className="relative z-[5] w-full max-w-[1440px] mx-auto px-6 lg:px-16 py-12 flex flex-col justify-center">
        <div className="max-w-2xl">
          {/* Badges superiores */}
          <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
            <span className="px-3.5 py-1 rounded-full bg-[#005bc0] text-white text-[11px] font-bold uppercase tracking-widest shadow-md">
              Lanzamiento Exclusivo
            </span>
            <span className="text-[#adc6ff] text-xs font-semibold uppercase tracking-wider">
              Gama SUVW 2025
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold uppercase tracking-wider">
              Preventa Oficial
            </span>
          </div>

          {/* Título de impacto */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-none mb-4">
            Nuevo Tera.
          </h1>

          {/* Bajada */}
          <p className="text-slate-200 text-sm sm:text-lg leading-relaxed mb-6 max-w-xl">
            El nuevo ícono de Volkswagen en la Argentina. Vanguardia compacta, diseño audaz, ingeniería alemana y la última generación de conectividad inteligente con VW Play.
          </p>

          {/* Ficha rápida de especificaciones */}
          <div className="grid grid-cols-3 gap-3 max-w-lg mb-8 bg-white/5 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
            <div className="border-r border-white/10 pr-2">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">Motorización</span>
              <span className="text-xs sm:text-sm font-bold text-white">1.0 TSI Turbo</span>
            </div>
            <div className="border-r border-white/10 px-2">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">Iluminación</span>
              <span className="text-xs sm:text-sm font-bold text-[#00d2ff]">IQ.Light LED</span>
            </div>
            <div className="pl-2">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">Financiación</span>
              <span className="text-xs sm:text-sm font-bold text-emerald-300">Tasa 0% 18m</span>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-wrap items-center gap-3.5">
            <a
              href="#contacto-directo"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#005bc0] hover:bg-[#004493] text-white font-heading font-bold text-xs sm:text-sm transition-all shadow-lg hover:shadow-blue-500/25"
            >
              <span>Consultar Preventa</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>

            <button
              type="button"
              onClick={onOpenTurno}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-heading font-semibold text-xs sm:text-sm border border-white/20 transition-colors backdrop-blur-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px] text-emerald-400">calendar_month</span>
              <span>Agendar Turno</span>
            </button>

            {/* Removed Replay Intro Button */}
            <a
              href="#gama-modelos"
              className="inline-flex items-center gap-1 px-3 py-3.5 text-slate-300 hover:text-white font-heading font-semibold text-xs transition-colors"
            >
              <span>Explorar 0km</span>
              <span className="material-symbols-outlined text-[16px]">expand_more</span>
            </a>
          </div>
        </div>
      </div>

      {/* Indicador inferior */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-[5] flex items-center gap-1.5 pointer-events-none text-slate-400 text-[11px] font-semibold tracking-wider">
        <span>Deslizá para explorar</span>
        <span className="material-symbols-outlined text-[16px] animate-bounce">expand_more</span>
      </div>
    </section>
  );
};
