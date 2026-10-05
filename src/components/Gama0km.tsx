import React, { useState } from 'react';
import { VW_MODELS, VWModel } from '../data/models';

interface Gama0kmProps {
  onSelectModel?: (modelName: string) => void;
}

export const Gama0km: React.FC<Gama0kmProps> = ({ onSelectModel }) => {
  // Por defecto 'suvw' para mostrar solo 4 modelos y no apilar 10 verticalmente
  const [activeCategory, setActiveCategory] = useState<'suvw' | 'autos' | 'pickups'>('suvw');

  const filteredModels = VW_MODELS.filter((m) => m.category === activeCategory);

  const handleCotizar = (model: VWModel) => {
    if (onSelectModel) onSelectModel(model.name);
    const formEl = document.getElementById('contacto-directo');
    if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-[#f7f9fb] py-8 border-t border-slate-200" id="gama-modelos">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado ultra compacto */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#005bc0]/10 text-[#005bc0] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">directions_car</span>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-[#005bc0] font-extrabold leading-none">
                Gama 0km Volkswagen Oficial
              </div>
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[#081224] tracking-tight leading-tight">
                Modelos Volkswagen
              </h2>
            </div>
          </div>

          {/* Pestañas de filtrado agrupadas */}
          <div className="flex items-center gap-1 bg-slate-200/80 p-1 rounded-xl">
            <button
              type="button"
              onClick={() => setActiveCategory('suvw')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'suvw'
                  ? 'bg-white text-[#081224] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              SUVW (4)
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('autos')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'autos'
                  ? 'bg-white text-[#081224] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Autos (3)
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('pickups')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'pickups'
                  ? 'bg-white text-[#081224] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Pick-Ups (3)
            </button>
          </div>
        </div>

        {/* Grilla ultra compacta: sólo 3-4 modelos visibles por pestaña */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-5">
          {filteredModels.map((model) => (
            <article
              key={model.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-200 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Imagen compacta */}
                <div className="relative h-32 bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center p-2 overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-[#081224] text-white text-[9px] font-bold uppercase tracking-wider">
                    {model.badge}
                  </span>
                </div>

                {/* Info del Modelo */}
                <div className="p-3">
                  <h3 className="font-heading font-extrabold text-sm text-[#081224] mb-1.5 group-hover:text-[#005bc0] transition-colors leading-tight">
                    {model.name}
                  </h3>

                  {/* Chips en una sola línea horizontal */}
                  <div className="flex items-center gap-1 overflow-hidden whitespace-nowrap mb-2">
                    <span className="px-1.5 py-0.5 rounded bg-slate-100 text-[10px] font-semibold text-slate-600 truncate">
                      {model.segment}
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-slate-100 text-[10px] font-semibold text-slate-600 truncate">
                      {model.engine}
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-blue-50 text-[10px] font-bold text-[#005bc0] truncate">
                      {model.power}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-600 line-clamp-1 leading-snug">
                    {model.description}
                  </p>
                </div>
              </div>

              {/* Botones al pie en una sola fila */}
              <div className="p-3 pt-0 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleCotizar(model)}
                  className="flex-1 py-1.5 px-2.5 rounded-lg bg-[#005bc0] hover:bg-[#004493] text-white text-xs font-bold text-center transition-colors shadow-sm cursor-pointer"
                >
                  Cotizar Unidad
                </button>
                <a
                  href="#contacto-directo"
                  onClick={() => handleCotizar(model)}
                  className="py-1.5 px-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold text-center transition-colors"
                >
                  Ficha
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Barra horizontal compacta de Financiación (1 sola fila) */}
        <div className="bg-[#081224] text-white rounded-xl px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-2.5 text-xs">
            <span className="material-symbols-outlined text-[#adc6ff] text-[18px]">credit_score</span>
            <span className="font-heading font-bold text-white">
              Financiación Directa con Tasa Subsidiada:
            </span>
            <span className="text-slate-300 hidden md:inline">
              Tasa 0% en hasta 18 cuotas fijas en pesos y toma de usados.
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="#contacto-directo"
              className="py-1.5 px-3.5 rounded-lg bg-[#005bc0] hover:bg-[#004493] text-white text-xs font-bold transition-colors"
            >
              Simular Financiación
            </a>
            <a
              href="#ofertas-destacadas"
              className="py-1.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-colors"
            >
              Ver Ofertas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
