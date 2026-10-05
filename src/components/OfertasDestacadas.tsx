import React, { useState } from 'react';
import { FEATURED_OFFERS, OfferItem } from '../data/offers';

interface OfertasDestacadasProps {
  onSelectOffer?: (offerName: string) => void;
}

export const OfertasDestacadas: React.FC<OfertasDestacadasProps> = ({ onSelectOffer }) => {
  // Las 3 ofertas destacadas principales (Polo Comfortline, Polo Highline, Nuevo Nivus Comfortline)
  // o paginación compacta de 3 en 3
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(FEATURED_OFFERS.length / itemsPerPage);

  const displayedOffers = FEATURED_OFFERS.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  const handleContact = (item: OfferItem) => {
    if (onSelectOffer) onSelectOffer(item.name);
    const el = document.getElementById('contacto-directo');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-white py-8 border-t border-slate-200" id="ofertas-destacadas">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado ultra compacto */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#005bc0] text-[20px]">verified</span>
            <div>
              <span className="text-[10px] text-[#005bc0] font-bold uppercase tracking-widest block leading-none">
                Oportunidades Comerciales del Mes
              </span>
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[#081224] tracking-tight leading-tight">
                Ofertas destacadas
              </h2>
            </div>
          </div>

          {/* Controles compactos */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-semibold hidden sm:inline">
              Página {page + 1} de {totalPages}
            </span>
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))}
                aria-label="Página anterior ofertas"
                className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">chevron_left</span>
              </button>
              <button
                type="button"
                onClick={() => setPage((prev) => (prev + 1) % totalPages)}
                aria-label="Página siguiente ofertas"
                className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        {/* Grilla horizontal de 3 columnas compactas (< 260px de alto) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {displayedOffers.map((offer) => (
            <article
              key={offer.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-200 overflow-hidden flex flex-col justify-between group max-h-[250px]"
            >
              {/* Imagen compacta con badges */}
              <div className="relative h-28 bg-slate-50 flex items-center justify-center p-2 overflow-hidden shrink-0">
                <img
                  src={offer.image}
                  alt={offer.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#005bc0] text-white text-[9px] font-bold uppercase tracking-wider">
                  Tasa 0%
                </span>
                {offer.immediateDelivery && (
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[9px] font-bold uppercase tracking-wider">
                    Entrega Inmediata
                  </span>
                )}
              </div>

              {/* Contenido sin precios numéricos */}
              <div className="p-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-0.5">
                    {offer.category}
                  </div>
                  <h3 className="font-heading font-extrabold text-sm text-[#081224] leading-tight mb-1 truncate">
                    {offer.name}
                  </h3>

                  {/* Etiqueta de beneficio (sin montos) */}
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#005bc0] mb-2.5">
                    <span className="material-symbols-outlined text-[15px]">credit_score</span>
                    <span className="truncate">Financiación Tasa 0% en 18 meses</span>
                  </div>
                </div>

                {/* Botón único "Contactar Asesor" */}
                <button
                  type="button"
                  onClick={() => handleContact(offer)}
                  className="w-full py-1.5 px-3 rounded-lg bg-[#081224] hover:bg-[#005bc0] text-white text-xs font-bold text-center transition-colors shadow-sm cursor-pointer"
                >
                  Contactar Asesor
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
