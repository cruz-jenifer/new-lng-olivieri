import React, { useEffect, useState } from 'react';

export const ScrollEffects: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);
  const [cursorActive, setCursorActive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // 1. Detección de dispositivos touch y prefers-reduced-motion
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // 2. Barra de progreso de lectura global
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const pct = Math.min(Math.max((window.scrollY / scrollHeight) * 100, 0), 100);
        setScrollPercent(pct);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3. Custom Cursor Magnético (solo en desktop)
  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      // Detectar elementos con atributos interactivos
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const card = target.closest('article, button, .catalog-card, a');
      if (card) {
        setCursorActive(true);
        if (card.tagName === 'ARTICLE') {
          setCursorLabel('Ver Ficha');
        } else if (card.tagName === 'BUTTON' || card.tagName === 'A') {
          setCursorLabel(null);
        }
      } else {
        setCursorActive(false);
        setCursorLabel(null);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isTouchDevice]);

  // 4. Efecto 3D Tilt y Radial Spotlight sobre tarjetas al interactuar con el mouse
  useEffect(() => {
    if (isTouchDevice) return;

    const cards = document.querySelectorAll<HTMLElement>('article, .bg-white.rounded-2xl, .bg-white.rounded-xl');

    const handleMouseMoveCard = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Inclinación máxima de 4 grados para mantener la elegancia sin distorsión
      const rotateX = ((y - centerY) / centerY) * -3;
      const rotateY = ((x - centerX) / centerX) * 3;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
      card.style.transition = 'transform 0.1s ease-out';
    };

    const handleMouseLeaveCard = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      card.style.transition = 'transform 0.4s ease-out';
    };

    cards.forEach((card) => {
      card.addEventListener('mousemove', handleMouseMoveCard as EventListener);
      card.addEventListener('mouseleave', handleMouseLeaveCard as EventListener);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', handleMouseMoveCard as EventListener);
        card.removeEventListener('mouseleave', handleMouseLeaveCard as EventListener);
      });
    };
  }, [isTouchDevice]);

  // 5. Animación de Contadores Numéricos con Odometer / Deceleración elástica
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const targetVal = parseFloat(el.getAttribute('data-counter-target') || '0');
            const isFloat = el.getAttribute('data-counter-float') === 'true';
            const suffix = el.getAttribute('data-counter-suffix') || '';
            const prefix = el.getAttribute('data-counter-prefix') || '';

            let current = 0;
            const duration = 1600; // ms
            const startTime = performance.now();

            const updateCount = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Easing out quint
              const easeOut = 1 - Math.pow(1 - progress, 4);

              current = targetVal * easeOut;

              if (isFloat) {
                el.innerText = `${prefix}${current.toFixed(1)}${suffix}`;
              } else {
                el.innerText = `${prefix}${Math.round(current).toLocaleString('es-AR')}${suffix}`;
              }

              if (progress < 1) {
                requestAnimationFrame(updateCount);
              } else {
                // Brillo azul momentáneo al terminar
                el.classList.add('glow-pulse');
                setTimeout(() => el.classList.remove('glow-pulse'), 800);
              }
            };

            requestAnimationFrame(updateCount);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('[data-counter-target]').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Barra de progreso de lectura fijada superior (2px de alto con degradado azul VW) */}
      <div
        className="fixed top-0 left-0 h-[2.5px] z-[101] pointer-events-none transition-all duration-75"
        style={{
          width: `${scrollPercent}%`,
          background: 'linear-gradient(90deg, #005bc0 0%, #00d2ff 100%)',
          boxShadow: '0 0 10px rgba(0, 210, 255, 0.7)'
        }}
      />

      {/* Custom Cursor Magnético interactivo (solo desktop) */}
      {!isTouchDevice && (
        <div
          className="fixed pointer-events-none z-[999] transition-transform duration-75 ease-out flex items-center justify-center"
          style={{
            transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)`,
            left: 0,
            top: 0
          }}
        >
          <div
            className={`rounded-full flex items-center justify-center transition-all duration-200 ${
              cursorActive
                ? 'w-16 h-16 -ml-8 -mt-8 bg-white/30 backdrop-blur-md border border-[#005bc0]/20 shadow-[0_4_20px_rgba(0,0,0,0.1)] scale-100'
                : 'w-6 h-6 -ml-3 -mt-3 bg-white/20 backdrop-blur-sm border border-[#005bc0]/30 shadow-sm scale-75'
            }`}
          >
            {cursorLabel && cursorActive && (
              <span className="text-[10px] text-[#081224] font-heading font-black tracking-tight uppercase whitespace-nowrap px-1">
                {cursorLabel}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Estilos embebidos para el resplandor de contadores */}
      <style>{`
        .glow-pulse {
          text-shadow: 0 0 16px rgba(0, 91, 192, 0.8), 0 0 30px rgba(0, 210, 255, 0.5);
          transition: text-shadow 0.3s ease;
        }
      `}</style>
    </>
  );
};
