import React, { useState, useEffect } from 'react';
import { MILESTONES } from '../data/historyMilestones';
import { ADVISORS } from '../data/advisors';

interface HistoriaRespaldoProps {
  onOpenReview: () => void;
  onContactAdvisor?: (name: string) => void;
}

export const HistoriaRespaldo: React.FC<HistoriaRespaldoProps> = ({
  onOpenReview,
  onContactAdvisor
}) => {
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0);
  const [isAutoTour, setIsAutoTour] = useState(false);
  const [selectedArticleModal, setSelectedArticleModal] = useState<{ title: string; content: string } | null>(null);

  const activeMilestone = MILESTONES[activeMilestoneIndex];

  // Auto-tour effect
  useEffect(() => {
    if (!isAutoTour) return;
    const timer = setInterval(() => {
      setActiveMilestoneIndex((prev) => (prev + 1) % MILESTONES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoTour]);

  const handleNextMilestone = () => {
    setIsAutoTour(false);
    setActiveMilestoneIndex((prev) => (prev + 1) % MILESTONES.length);
  };

  const handlePrevMilestone = () => {
    setIsAutoTour(false);
    setActiveMilestoneIndex((prev) => (prev === 0 ? MILESTONES.length - 1 : prev - 1));
  };

  return (
    <section className="w-full bg-[#f7f9fb] py-14 border-t border-slate-200" id="historia">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ====================================================
            DIAGRAMA INTERACTIVO DE HITOS HISTÓRICOS
            (Fiel a WhatsApp Image 2026-10-04 at 19.42.46.jpeg)
            ==================================================== */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200 mb-14">
          {/* Header del Diagrama */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-[#005bc0] text-[24px]">
                  account_tree
                </span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#081224] tracking-tight">
                  Diagrama Interactivo de Hitos Históricos
                </h2>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm">
                Navegá las cinco eras de innovación, expansión y excelencia técnica en Buenos Aires
              </p>
            </div>

            {/* Controles: Recorrido Automático y Flechas */}
            <div className="flex items-center gap-2 self-start md:self-auto">
              <button
                type="button"
                onClick={() => setIsAutoTour(!isAutoTour)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all shadow-sm cursor-pointer ${
                  isAutoTour
                    ? 'bg-[#005bc0] text-white shadow-blue-500/25 ring-2 ring-[#005bc0]'
                    : 'bg-blue-50 hover:bg-blue-100 text-[#005bc0] border border-blue-200'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">
                  {isAutoTour ? 'pause' : 'play_arrow'}
                </span>
                <span>{isAutoTour ? 'Pausar Recorrido' : 'Recorrido Automático'}</span>
              </button>

              <div className="flex items-center gap-1.5 ml-1">
                <button
                  type="button"
                  onClick={handlePrevMilestone}
                  aria-label="Hito anterior"
                  className="w-9 h-9 rounded-full border border-slate-200 hover:bg-slate-100 text-[#081224] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                </button>
                <button
                  type="button"
                  onClick={handleNextMilestone}
                  aria-label="Hito siguiente"
                  className="w-9 h-9 rounded-full border border-slate-200 hover:bg-slate-100 text-[#081224] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>

          {/* Línea de Tiempo de 5 Hitos */}
          <div className="relative py-8 overflow-x-auto no-scrollbar">
            <div className="absolute top-1/2 left-8 right-8 h-1 bg-slate-200 -translate-y-4 z-0 hidden sm:block" />

            <div className="relative z-10 flex items-center justify-between min-w-[620px] px-4">
              {MILESTONES.map((m, idx) => {
                const isActive = idx === activeMilestoneIndex;
                return (
                  <button
                    key={m.year}
                    type="button"
                    onClick={() => {
                      setIsAutoTour(false);
                      setActiveMilestoneIndex(idx);
                    }}
                    className="flex flex-col items-center group cursor-pointer text-center focus:outline-none"
                  >
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                        isActive
                          ? 'bg-[#001a40] text-white ring-4 ring-[#005bc0]/30 scale-110'
                          : 'bg-white text-slate-500 border border-slate-300 hover:border-[#005bc0] hover:text-[#005bc0]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[24px]">
                        {m.icon}
                      </span>
                    </div>

                    <span
                      className={`font-heading font-black text-sm mt-2 transition-colors ${
                        isActive ? 'text-[#005bc0]' : 'text-slate-900 group-hover:text-[#005bc0]'
                      }`}
                    >
                      {m.year}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500 mt-0.5">
                      {m.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tarjeta Detallada del Hito Activo */}
          <div className="bg-gradient-to-br from-[#071933] via-[#092244] to-[#040e1d] text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden transition-all duration-500">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#005bc0]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#adc6ff] text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
                  <span className="material-symbols-outlined text-[16px]">account_balance</span>
                  <span>{activeMilestone.tag}</span>
                </div>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-4 leading-tight">
                  {activeMilestone.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {activeMilestone.description}
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {activeMilestone.badges.map((b, bIdx) => (
                    <span
                      key={bIdx}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs text-white font-medium"
                    >
                      <span className="material-symbols-outlined text-blue-400 text-[16px]">
                        check
                      </span>
                      <span>{b}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 text-center flex flex-col items-center justify-center shadow-lg">
                  <div className="w-14 h-14 rounded-full bg-[#005bc0] text-white flex items-center justify-center mb-4 shadow-md">
                    <span className="material-symbols-outlined text-[28px]">
                      {activeMilestone.sideCard.icon}
                    </span>
                  </div>

                  <h4 className="font-heading font-black text-2xl text-white tracking-tight mb-1">
                    {activeMilestone.sideCard.bigText}
                  </h4>
                  <span className="text-[11px] font-bold text-[#adc6ff] uppercase tracking-widest block mb-4">
                    {activeMilestone.sideCard.subtitle}
                  </span>

                  <a
                    href={activeMilestone.sideCard.linkTarget}
                    className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-blue-300 transition-colors"
                  >
                    <span>{activeMilestone.sideCard.linkText}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================
            1. TARJETAS DE SERVICIOS (4 PILARES CON IMÁGENES REALES COVER)
            ==================================================== */}
        {/* Métricas con Odometer y Glow Azul */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center shadow-sm">
            <div
              className="font-heading font-black text-3xl sm:text-4xl text-[#081224]"
              data-counter-target="25"
              data-counter-prefix="+"
              data-counter-suffix=""
            >
              +0
            </div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mt-1">
              Años de Trayectoria
            </span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center shadow-sm">
            <div
              className="font-heading font-black text-3xl sm:text-4xl text-[#005bc0]"
              data-counter-target="30000"
              data-counter-prefix="+"
              data-counter-suffix=""
            >
              +0
            </div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mt-1">
              Clientes Satisfechos
            </span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center shadow-sm">
            <div
              className="font-heading font-black text-3xl sm:text-4xl text-[#081224]"
              data-counter-target="150"
              data-counter-prefix=""
              data-counter-suffix=" Pts"
            >
              0 Pts
            </div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mt-1">
              Peritaje Garantizado
            </span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center shadow-sm">
            <div
              className="font-heading font-black text-3xl sm:text-4xl text-amber-500"
              data-counter-target="4.9"
              data-counter-float="true"
              data-counter-prefix=""
              data-counter-suffix=" ★"
            >
              0.0 ★
            </div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mt-1">
              Calificación de Clientes
            </span>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs uppercase tracking-widest text-[#005bc0] font-bold block mb-1">
            Trayectoria & Solidez en Zona Oeste
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#081224] tracking-tight">
            Seguimos avanzando juntos
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Más de 25 años construyendo relaciones duraderas en cada etapa de tu experiencia con la marca Volkswagen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1: Autoahorro con foto de entrega 0km */}
          <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
            <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6k9dEfHlj6We-ZJj0leS7cE1I8KeO30Ox_8UGF7hBnuamLvLA2Nc8KWdQvUBBYsPr2HtU9TMQN-6zYeETKk40qEovynfp6DT6DLx38rH6QAL-J3323DgiBdUiTFo-a8T9etWqu-5Osw8LqE3MeZWycY1TTRExm-bMDFl71gDCIv5fY6tnFiCbTZAtgVfO1mOW2IdoegcI4wkP251-67xAzY4YtI1tLrnfNeFzz5jNfjD4eyzNV0Hdww"
                alt="Entrega de 0km Autoahorro"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-[#081224]/85 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                100% en Pesos
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-bold text-base text-[#081224] mb-1.5 group-hover:text-[#005bc0] transition-colors">
                  Autoahorro
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Planes transparentes en cuotas en pesos sin interés bancario. Adjudicaciones por sorteo y licitación mensual pactada.
                </p>
              </div>
              <a
                href="#autoahorro"
                className="text-xs font-bold text-[#005bc0] hover:text-[#004493] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Planes Vigentes</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </a>
            </div>
          </article>

          {/* Card 2: Ventas Corporativas con flota utilitarios/Amarok */}
          <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
            <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWIOlNXT8SXAz4b4F3LddQJz1DPOco-w730W_viuiT8n0ddPTBWMLH5eMICcc6k0k66-x70vn3aZ8VgYbOubhqSBV_no3yeqvJ-aCeLDsybtbybF08nwzU1AjhkWRJZNlZTQQUO1mlaDv5DLTH0M7WY_MMv7ljjsnv1KfcgbrHVrg5_Us7-lKBZrTu7NPfe3XRvy_9GWfsFpuGsWIJDHHyjFzFw8N4p-XCnoSFQcI5-bAtrk1NUCdSgQ"
                alt="Flotas Corporativas Amarok"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-[#081224]/85 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                Flotas & Leasing
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-bold text-base text-[#081224] mb-1.5 group-hover:text-[#005bc0] transition-colors">
                  Ventas Corporativas
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Atención preferencial para flotas comerciales, empresas, leasing y ventas especiales por facturación directa de fábrica.
                </p>
              </div>
              <a
                href="#corporativo"
                className="text-xs font-bold text-[#005bc0] hover:text-[#004493] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Beneficios Flotas</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </a>
            </div>
          </article>

          {/* Card 3: Nuestras Sucursales con foto exterior real de concesionario */}
          <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
            <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHIbgC8bvk6NnebsNXavF52gywDj20ez-lrpp9jWZL9S9YJQkUybFMhJjwfxiz74bhswIlanAPEfG9lhF2jocinmTzRsXBpqjakINzJqgiF_VsnyGfZ3zLF8dJJ8JcuewS2W3qw19WhUBaS9OhrB_KVLlqZUp4qjww1eGwr41uu3_aANhZRBdR602EHbS3I7-xtMHf6-CwWlJ32DNcOTh03euPu9wXS14vJHzFuEn6HbaBo3aa0krQS0ZBurGYRHc59mnkyeehOyLDfVM"
                alt="Fachada Sucursal San Justo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-[#081224]/85 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                Infraestructura Integral
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-bold text-base text-[#081224] mb-1.5 group-hover:text-[#005bc0] transition-colors">
                  Nuestras Sucursales
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Salones modelo en San Justo, Ciudadela y Florida con amplias playas de estacionamiento y talleres certificados.
                </p>
              </div>
              <a
                href="#sucursales"
                className="text-xs font-bold text-[#005bc0] hover:text-[#004493] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Ver Sedes</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </a>
            </div>
          </article>

          {/* Card 4: Carrocería Certificada con foto de cabina y taller CESVI */}
          <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
            <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt7bNrIj7OhYFB0t2lCe_eIjPPjsUNHaywdaMk1DH1ttb3HYk9PCM7iTSwi6Yyl1sPI7ewTpSq5HFReiW7_Yph4bW0broAh5TIxBsWuBt_4pmRb_74ANv5At8aHtl8gT5gf4zKas4A6rpEU_v8O0cEmjmYhnjLKG0jlK7ytUNbv2lolYIIR2PitJthNq4vS7_y46qLM9X8WgZAFE-i6-rJUPPts60nXez-UrJ_r__Vn8EpyKHgFoBGVAXOO6DrISrRk5HwGnjoWhS-6Hc"
                alt="Cabina de Pintura Homologada CESVI"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-[#081224]/85 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                CESVI Homologado
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-bold text-base text-[#081224] mb-1.5 group-hover:text-[#005bc0] transition-colors">
                  Carrocería Certificada
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Centro de chapa y pintura de alta tecnología que mantiene la rigidez estructural y la garantía anticorrosiva original.
                </p>
              </div>
              <a
                href="#carroceria-cesvi"
                className="text-xs font-bold text-[#005bc0] hover:text-[#004493] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Homologación CESVI</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </a>
            </div>
          </article>
        </div>

        {/* ====================================================
            2. TARJETAS INSTITUCIONALES (EDITORIALES CON FOTO DE PORTADA SUPERIOR)
            ==================================================== */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-[#005bc0] text-[22px]">public</span>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#005bc0] font-bold block leading-none">
                Autoridad & Compromiso
              </span>
              <h3 className="font-heading font-extrabold text-xl text-[#081224]">
                Actualidad y Respaldo Oficial
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Editorial 1: Premio al Mejor Concesionario */}
            <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCz9NrKMNNGHtFwL1zfWK4tFPCIPVjX99s3RRs4MeMKkUu6l1KrIAQo1b8zZko1xs_YbPMKIC-z4hfzf1jfnAUjTKyObLTqRz8aI_XUquQARYCNwha9OlYVmm-PNW1l2v6zzT6TjzKquCbnNbV8NsBqllxt3JyZpd1YNi89K8UpuX-zVVM0FgDUGHl3djYLJwXwPhObvBxdGUOazyNjf35ikbKa1c6h9sIjw9SGmyqd5OJ2lybpepYcA"
                  alt="Ceremonia Oficial Premiación VW"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#005bc0] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  LNG EN LOS MEDIOS
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-heading font-bold text-base text-[#081224] mb-2 group-hover:text-[#005bc0] transition-colors leading-snug">
                    Premio al Mejor Concesionario Oficial de la Red
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Distinción otorgada por Volkswagen Argentina por desempeño en satisfacción de postventa y volumen de patentamientos en la región metropolitana.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setSelectedArticleModal({
                      title: 'LNG en los Medios: Reconocimiento Nacional',
                      content:
                        'Volkswagen Argentina reconoció a LNG Olivieri por su trayectoria en Zona Oeste, destacando la modernización de los salones comerciales de San Justo y Ciudadela y la inversión en puestos de carga para vehículos electrificados.'
                    })
                  }
                  className="text-xs font-bold text-[#005bc0] hover:text-[#004493] flex items-center gap-1 cursor-pointer self-start"
                >
                  <span>Leer gacetilla completa</span>
                  <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                </button>
              </div>
            </article>

            {/* Editorial 2: Preventa Exclusiva Nuevo Tera */}
            <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm2-hltm0IQKD_8gqUWLkhz2aNmgFopJJUdimrGSxdBUoSU1tSp3K_2NbUws57V_GBgdaqEjF9pYY2Y8e9QsW8-TRSoe-OpKmd0c2x7E32nxtbhkXYd2fw1DqY7cQgDKRxNopkE7VRJHauLESEEJBmK2K98bk77IbbImzh5nLHP_WuXect7jRbhsG92pF8Qb9BkaqZAWhJUEQ0dFogcXd9gyUqBgx4frTi0pn2p9U734j3DTAZn1SEnVIb1TPVx4y7DTZMY3Tp0NjWxj4"
                  alt="Presentación Oficial Nuevo Tera"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#081224] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  NOVEDADES OFICIALES
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-heading font-bold text-base text-[#081224] mb-2 group-hover:text-[#005bc0] transition-colors leading-snug">
                    Apertura de Preventa Exclusiva Nuevo Tera 2025
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Ya se encuentran abiertas las reservas con cupos bonificados para el lanzamiento más esperado del año con conectividad VW Play de última generación.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setSelectedArticleModal({
                      title: 'Lanzamiento Oficial: Nuevo Tera 2025',
                      content:
                        'El Volkswagen Tera arriba a la Argentina para redefinir el segmento de los SUVW compactos con motor turbo TSI, conectividad inalámbrica total y un beneficio promocional de preventa exclusivo en concesionario oficial.'
                    })
                  }
                  className="text-xs font-bold text-[#005bc0] hover:text-[#004493] flex items-center gap-1 cursor-pointer self-start"
                >
                  <span>Conocer detalles de preventa</span>
                  <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                </button>
              </div>
            </article>

            {/* Editorial 3: RSE & Sustentabilidad */}
            <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80"
                  alt="Instalaciones Sustentables y Paneles Solares"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  RSE & SUSTENTABILIDAD
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-heading font-bold text-base text-[#081224] mb-2 group-hover:text-[#005bc0] transition-colors leading-snug">
                    Compromiso Way to Zero: Reciclaje y Energía Solar
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Tratamiento ecológico de fluidos de taller, pintura al agua con cero emisiones tóxicas y migración hacia iluminación 100% fotovoltaica.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setSelectedArticleModal({
                      title: 'Compromiso RSE y Medioambiente',
                      content:
                        'Como parte de la estrategia global Way to Zero de Volkswagen, LNG Olivieri implementa paneles solares en sus talleres, reciclaje del 100% de baterías usadas y cabinas de pintura de ciclo cerrado.'
                    })
                  }
                  className="text-xs font-bold text-[#005bc0] hover:text-[#004493] flex items-center gap-1 cursor-pointer self-start"
                >
                  <span>Ver reporte de sustentabilidad</span>
                  <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                </button>
              </div>
            </article>
          </div>
        </div>

        {/* ====================================================
            3. CONOCÉ A NUESTROS ASESORES (CON FOTOS DE RETRATO PROFESIONALES)
            ==================================================== */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm" id="asesores">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-1.5 text-[#005bc0] text-xs font-bold uppercase tracking-wider mb-1">
                <span className="material-symbols-outlined text-[16px]">verified_user</span>
                <span>Transparencia & Confianza</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#081224] tracking-tight">
                Conocé a nuestros asesores
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
                Calificaciones y experiencias directas de clientes que encontraron su vehículo 0km y financiación ideal en LNG Olivieri.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenReview}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 hover:border-[#081224] text-[#081224] font-heading font-bold text-xs transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[18px]">rate_review</span>
              <span>Dejá tu reseña</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ADVISORS.map((advisor) => (
              <div
                key={advisor.id}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3.5">
                      {/* Foto de retrato profesional con ring e indicador de estado */}
                      <div className="relative shrink-0">
                        <img
                          src={advisor.photo}
                          alt={advisor.name}
                          className="w-14 h-14 rounded-full object-cover ring-2 ring-[#005bc0]/20 shadow-md"
                        />
                        <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" />
                      </div>

                      <div>
                        <h4 className="font-heading font-bold text-base text-[#081224] leading-tight">
                          {advisor.name}
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {advisor.role} • {advisor.location}
                        </p>
                        <div className="flex items-center gap-1 mt-1 text-amber-500">
                          {Array.from({ length: 5 }).map((_, sIdx) => (
                            <span
                              key={sIdx}
                              className="material-symbols-outlined text-[16px]"
                              style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                              star
                            </span>
                          ))}
                          <span className="text-xs font-bold text-slate-800 ml-1">
                            {advisor.rating}
                          </span>
                          <span className="text-[11px] text-slate-500">
                            ({advisor.reviewsCount} reseñas)
                          </span>
                        </div>
                      </div>
                    </div>

                    {advisor.verified && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-100 text-[#005bc0] text-[10px] font-bold uppercase tracking-wider shrink-0">
                        <span className="material-symbols-outlined text-[13px]">check_circle</span>
                        Verificado
                      </span>
                    )}
                  </div>

                  <div className="bg-white p-4 rounded-xl border-l-4 border-[#005bc0] my-4 text-xs text-slate-700 italic border border-slate-200">
                    "{advisor.featuredReview.quote}"
                    <div className="text-[11px] font-semibold text-slate-500 not-italic mt-2">
                      — {advisor.featuredReview.author}, {advisor.featuredReview.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={() => {
                      if (onContactAdvisor) onContactAdvisor(advisor.name);
                      const el = document.getElementById('contacto-directo');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 py-2 px-3 bg-[#005bc0] hover:bg-[#004493] text-white rounded-lg text-xs font-bold text-center transition-colors cursor-pointer"
                  >
                    Contactar a {advisor.name.split(' ')[0]}
                  </button>
                  <button
                    type="button"
                    onClick={onOpenReview}
                    className="py-2 px-3 border border-slate-300 hover:border-slate-800 text-slate-800 rounded-lg text-xs font-semibold text-center transition-colors cursor-pointer"
                  >
                    Ver reseñas
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal de Artículo de Medios / Novedad */}
        {selectedArticleModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#081224]/80 backdrop-blur-md"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedArticleModal(null);
            }}
          >
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-bold text-lg text-[#081224]">
                  {selectedArticleModal.title}
                </h3>
                <button
                  type="button"
                  onClick={() => setSelectedArticleModal(null)}
                  className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200"
                >
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {selectedArticleModal.content}
              </p>
              <button
                type="button"
                onClick={() => setSelectedArticleModal(null)}
                className="w-full py-2.5 rounded-xl bg-[#005bc0] text-white text-xs font-bold hover:bg-[#004493]"
              >
                Cerrar Artículo
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
