import React from 'react';

interface ServiciosYCanalesProps {
  onOpenTurno: (branch?: string) => void;
  onOpenCotizacion?: (type: string) => void;
}

export const ServiciosYCanales: React.FC<ServiciosYCanalesProps> = ({
  onOpenTurno,
  onOpenCotizacion
}) => {
  const insuranceCompanies = [
    'Zurich', 'La Meridional', 'Federación Patronal', 'SMG', 'Allianz',
    'Mercantil Andina', 'Seguros Bernardino Rivadavia', 'La Caja', 'Mapfre',
    'Provincia Seguros', 'La Holando', 'HDI', 'Paraná Seguros', 'Chubb',
    'Galeno', 'La Segunda', 'Sancor', 'Río Uruguay'
  ];

  return (
    <div className="w-full">
      {/* ====================================================
          SUBSECCIÓN 1: POSTVENTA INTEGRAL & BONIFICACIÓN 0KM
          ==================================================== */}
      <section className="w-full bg-[#081224] text-white py-16" id="postventa-servicios">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#adc6ff] text-xs uppercase tracking-widest font-bold block mb-2">
              Servicio Técnico Oficial Volkswagen
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-3">
              El mantenimiento de tu Volkswagen ahora cuesta mucho menos.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Comprando un Volkswagen 0km en LNG Olivieri te bonificamos la Mano de Obra de 2 Servicios de Mantenimiento Programado oficiales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Card 1: Motor Nafta */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between hover:bg-white/10 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#005bc0] text-white text-[10px] font-bold uppercase tracking-wider">
                    Garantía 3 años o 100.000 km
                  </span>
                  <span className="material-symbols-outlined text-[#adc6ff] text-[28px]">
                    local_gas_station
                  </span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-2">
                  Vehículos motor nafta
                </h3>
                <p className="text-slate-300 text-xs mb-6">
                  Service cada 15.000 km o 1 año (lo primero que se cumpla).
                </p>
                <div className="bg-[#001a40] p-5 rounded-xl border border-white/10">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#adc6ff] text-[24px] shrink-0 mt-0.5">
                      verified
                    </span>
                    <div>
                      <h4 className="font-heading font-bold text-base text-white mb-1">
                        2do y 3er servicio con mano de obra bonificada
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Válido para vehículos de la gama nafta entregados en la red oficial de concesionarios.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Amarok */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between hover:bg-white/10 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#005bc0] text-white text-[10px] font-bold uppercase tracking-wider">
                    Garantía 6 años o 150.000 km
                  </span>
                  <span className="material-symbols-outlined text-[#adc6ff] text-[28px]">
                    directions_car
                  </span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-2">
                  Amarok 2.0 & V6
                </h3>
                <div className="space-y-3 mt-4">
                  <div className="bg-[#001a40] p-4 rounded-xl border border-white/10 flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#adc6ff] text-[20px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <div>
                      <span className="font-heading font-bold text-sm text-white block">
                        Gama 2.0 L TDI
                      </span>
                      <p className="text-xs text-slate-300">
                        Mano de obra bonificada en 3er y 4to service para la gama 2.0L.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#001a40] p-4 rounded-xl border border-white/10 flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#adc6ff] text-[20px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <div>
                      <span className="font-heading font-bold text-sm text-white block">
                        Gama V6 258 CV
                      </span>
                      <p className="text-xs text-slate-300">
                        Primeros tres servicios de mantenimiento bonificados al 100% para la gama V6.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botones de Turnos */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenTurno('central')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#005bc0] hover:bg-[#004493] text-white font-heading font-bold text-sm transition-all shadow-lg cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
              <span>Solicitar turnos de servicio</span>
            </button>
            <button
              type="button"
              onClick={() => onOpenTurno('central')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/30 text-white font-heading font-semibold text-sm hover:bg-white/10 transition-colors cursor-pointer backdrop-blur-sm"
            >
              <span className="material-symbols-outlined text-[20px]">build</span>
              <span>Solicitar turnos de carrocería</span>
            </button>
          </div>
        </div>
      </section>

      {/* ====================================================
          SUBSECCIÓN 2: CARROCERÍA & PINTURA HOMOLOGADA CESVI
          ==================================================== */}
      <section className="w-full bg-[#f7f9fb] py-16 border-t border-slate-200" id="carroceria-cesvi">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200 mb-8">
              <div className="max-w-3xl">
                <span className="text-xs uppercase tracking-widest text-[#005bc0] font-bold block mb-1">
                  Certificado & Homologado Oficialmente
                </span>
                <h2 className="font-heading font-extrabold text-3xl text-[#081224] tracking-tight mb-2">
                  Taller de Carrocería & Pintura
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Queremos ofrecerle tranquilidad y confianza a la hora de reparar su auto. Por eso, contamos con la tecnología de última generación y personal altamente capacitado por CESVI Argentina para devolverle a su Volkswagen los estándares de seguridad y terminación de fábrica.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => onOpenTurno('central')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#005bc0] hover:bg-[#004493] text-white text-xs font-bold transition-colors shadow-md cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">support_agent</span>
                  <span>Solicitar un asesor</span>
                </button>
                <a
                  href="https://wa.me/5491146580000?text=Hola,%20quisiera%20solicitar%20información%20sobre%20Carrocería%20y%20Pintura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#128C7E] hover:bg-[#0e7064] text-white text-xs font-bold transition-opacity shadow-md"
                >
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiMDsLYdIkcCYnmvjy7QTsGnswlj9W5eJrJv7qufR22spVIsTQf9WAZ0YZj20wguNBMoSj1jVmoaR7Q5564MUAGbGXgr0O4-4obVoVTrTSQrTZ4OmuBVgBAYy8kBLWuESZPULrXlDoS9bJUkkgoqTLp2pjmE2pf1fMg-PZI349Gmdfidptn8HdZRA_36_0OS3faSOicpAtiIktgafG6OTyuxt5bl8UF7AJtw9mwnvGRw3EndX9TGm8IKFj0456MYecZcc"
                    alt="WhatsApp"
                    className="w-4 h-4 object-contain"
                  />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Grilla de Tecnologías y Servicios Especializados */}
            <div className="mb-8">
              <h3 className="font-heading font-bold text-lg text-[#081224] mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#005bc0] text-[22px]">
                  precision_manufacturing
                </span>
                <span>Tecnología & Servicios Especializados</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#005bc0] text-[24px]">air</span>
                  <div>
                    <h4 className="font-bold text-xs text-[#081224]">Cabina de pintura presurizada</h4>
                    <p className="text-[11px] text-slate-500">Secado térmico controlado sin impurezas</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#005bc0] text-[24px]">light_mode</span>
                  <div>
                    <h4 className="font-bold text-xs text-[#081224]">Lámpara de onda corta</h4>
                    <p className="text-[11px] text-slate-500">Polimerización infrarroja rápida y uniforme</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#005bc0] text-[24px]">hardware</span>
                  <div>
                    <h4 className="font-bold text-xs text-[#081224]">Soldadura MIG-MAG</h4>
                    <p className="text-[11px] text-slate-500">Unión de aceros sin alteración estructural</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#005bc0] text-[24px]">straighten</span>
                  <div>
                    <h4 className="font-bold text-xs text-[#081224]">Bancada de estiramiento</h4>
                    <p className="text-[11px] text-slate-500">Alineación milimétrica computarizada de chasis</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#005bc0] text-[24px]">filter_alt</span>
                  <div>
                    <h4 className="font-bold text-xs text-[#081224]">Lijado en seco con aspiración</h4>
                    <p className="text-[11px] text-slate-500">Ambiente 100% libre de micropartículas</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#005bc0] text-[24px]">palette</span>
                  <div>
                    <h4 className="font-bold text-xs text-[#081224]">Laboratorio de colores</h4>
                    <p className="text-[11px] text-slate-500">Igualación con fórmula de color original VW</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 sm:col-span-2 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#005bc0] text-[24px]">home_repair_service</span>
                  <div>
                    <h4 className="font-bold text-xs text-[#081224]">Herramientas de última generación</h4>
                    <p className="text-[11px] text-slate-500">Herramental exclusivo homologado por Volkswagen Group en Alemania</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Compañías de Seguros con Convenio Directo */}
            <div className="pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-[#005bc0] text-[20px]">security</span>
                <h4 className="font-heading font-bold text-sm text-[#081224]">
                  Compañías de Seguros con las que trabajamos (Convenio Directo)
                </h4>
              </div>
              <p className="text-xs text-slate-600 mb-4">
                Gestión directa de siniestros, peritaciones ágiles y repuestos originales garantizados:
              </p>
              <div className="flex flex-wrap gap-2">
                {insuranceCompanies.map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1 rounded-lg bg-slate-100 text-[#081224] text-xs font-semibold border border-slate-200"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          NUEVA SECCIÓN: GALERÍA DE INSTALACIONES
          ==================================================== */}
      <section className="w-full bg-[#f7f9fb] py-16 border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs uppercase tracking-widest text-[#005bc0] font-bold block mb-2">
              Nuestras Instalaciones
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#081224] tracking-tight">
              Conocé Nuestro Taller
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-md aspect-video bg-black">
              <video src="/Boxes%20de%20Servicio.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md aspect-video">
              <img src="/Boxes%20de%20Servicio.JPG" alt="Boxes de Servicio" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md aspect-video">
              <img src="/Chapa%20y%20carrocer%C3%ADa.JPG" alt="Chapa y carrocería" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md aspect-video">
              <img src="/Entrada.jpg" alt="Entrada" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" loading="lazy" />
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-md aspect-video lg:col-span-2 bg-black">
              <video src="/%C3%81rea%20de%20Pintura.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md aspect-video">
              <img src="/%C3%81rea%20de%20lavado%20de%20veh%C3%ADculos%202.jpg" alt="Área de lavado de vehículos" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md aspect-video">
              <img src="/%C3%81rea%20de%20Pintura%207.jpg" alt="Área de Pintura" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          SUBSECCIÓN 3: RED TÉCNICA / ENCONTRÁ TU TALLER
          ==================================================== */}
      <section className="w-full bg-white py-16 border-t border-slate-200" id="encontra-tu-taller">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-[#005bc0] font-bold block mb-1">
              Red Técnica Especializada
            </span>
            <h2 className="font-heading font-extrabold text-3xl text-[#081224] tracking-tight">
              Encontrá tu taller oficial
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Taller 1: Casa Central */}
            <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div
                className="h-52 bg-cover bg-center"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBt7bNrIj7OhYFB0t2lCe_eIjPPjsUNHaywdaMk1DH1ttb3HYk9PCM7iTSwi6Yyl1sPI7ewTpSq5HFReiW7_Yph4bW0broAh5TIxBsWuBt_4pmRb_74ANv5At8aHtl8gT5gf4zKas4A6rpEU_v8O0cEmjmYhnjLKG0jlK7ytUNbv2lolYIIR2PitJthNq4vS7_y46qLM9X8WgZAFE-i6-rJUPPts60nXez-UrJ_r__Vn8EpyKHgFoBGVAXOO6DrISrRk5HwGnjoWhS-6Hc")`
                }}
              />
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-base text-[#081224] uppercase mb-1">
                    SUCURSAL CASA CENTRAL
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    Av. Rivadavia 12980 (B1702CHZ)<br />Ciudadela / Ramos Mejía, Buenos Aires.
                  </p>
                  <button
                    type="button"
                    onClick={() => onOpenTurno('central')}
                    className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#081224] hover:bg-[#005bc0] text-white text-xs font-bold transition-colors cursor-pointer mb-4"
                  >
                    Reservar Turno
                  </button>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1">
                  <div><strong>Tel:</strong> 5129-3300 int. 130/181</div>
                  <div><strong>WhatsApp:</strong> 1521657800 / 1535437607</div>
                  <div className="text-[#005bc0] break-all">turnosservicios@lngolivieri.com.ar</div>
                </div>
              </div>
            </article>

            {/* Taller 2: San Justo */}
            <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div
                className="h-52 bg-cover bg-center"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAHIbgC8bvk6NnebsNXavF52gywDj20ez-lrpp9jWZL9S9YJQkUybFMhJjwfxiz74bhswIlanAPEfG9lhF2jocinmTzRsXBpqjakINzJqgiF_VsnyGfZ3zLF8dJJ8JcuewS2W3qw19WhUBaS9OhrB_KVLlqZUp4qjww1eGwr41uu3_aANhZRBdR602EHbS3I7-xtMHf6-CwWlJ32DNcOTh03euPu9wXS14vJHzFuEn6HbaBo3aa0krQS0ZBurGYRHc59mnkyeehOyLDfVM")`
                }}
              />
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-base text-[#081224] uppercase mb-1">
                    SUCURSAL SAN JUSTO
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    Diego Armando Maradona 3366 (B1754BZN)<br />San Justo, Buenos Aires.
                  </p>
                  <button
                    type="button"
                    onClick={() => onOpenTurno('san-justo')}
                    className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#081224] hover:bg-[#005bc0] text-white text-xs font-bold transition-colors cursor-pointer mb-4"
                  >
                    Reservar Turno
                  </button>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1">
                  <div><strong>Tel:</strong> 5550-1140 / 5550-1100</div>
                  <div><strong>WhatsApp:</strong> 1535437608</div>
                  <div className="text-[#005bc0] break-all">postventasj@lngolivieri.com.ar</div>
                </div>
              </div>
            </article>

            {/* Taller 3: Florida */}
            <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div
                className="h-52 bg-cover bg-center"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAwEk7ewf1xOFeIhux9qy0H9fjpG21nECv-248k43MNdytz2cuemwXnljyEaLKwqT-MtwEHASiTpqsxXXxs4rfPNudsdnPq9G5PZhkVWvgzKUsPIRnPE9IXfdCQFTR6qPQe1BT9MjGfZWZM5We7w9y2pRPIHsfEuWCuMoTltQig0_OeMI3o4S3FTk46xnPNBb7Tz2o3I8KF_gisestKfG0KBXRWcjfLIV7XDFJXZuNbPfqhXd-0oaQQTf5M9bqyTtQtoz5429hlsKuNr3I")`
                }}
              />
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-base text-[#081224] uppercase mb-1">
                    TALLER FLORIDA
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    Laprida 3363 (B1603AAE)<br />Florida, Vicente López, Buenos Aires.
                  </p>
                  <button
                    type="button"
                    onClick={() => onOpenTurno('florida')}
                    className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#081224] hover:bg-[#005bc0] text-white text-xs font-bold transition-colors cursor-pointer mb-4"
                  >
                    Reservar Turno
                  </button>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1">
                  <div><strong>Tel:</strong> 5531-0600 int. 200</div>
                  <div><strong>WhatsApp:</strong> 1554052681</div>
                  <div className="text-[#005bc0] break-all">turnosflorida@lngolivieri.com.ar</div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ====================================================
          SUBSECCIÓN 4: NORA CENTER LNG OLIVIERI (CANAL B2B)
          ==================================================== */}
      <section className="w-full bg-[#f7f9fb] py-16 border-t border-slate-200" id="nora-center">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#081224] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="px-3 py-1 rounded-full bg-[#005bc0] text-white text-[11px] uppercase tracking-wider font-bold inline-block mb-3">
                  Canal B2B Exclusivo Volkswagen
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-2">
                  NORA Center LNG Olivieri
                </h2>
                <h3 className="text-base sm:text-lg text-blue-200 font-semibold mb-4">
                  Suministro mayorista oficial para talleres independientes y profesionales del sector
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-8 max-w-2xl">
                  NORA (No Representative Authorized) es la red oficial de Volkswagen concebida para abastecer a talleres mecánicos independientes con repuestos genuinos a precios competitivos, soporte técnico de catálogos ETKA y logística programada de entrega rápida.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#contacto-directo"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#005bc0] hover:bg-[#004493] text-white font-heading font-bold text-sm transition-all shadow-md"
                  >
                    <span>Registrar mi Taller</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </a>
                  <a
                    href="#contacto-directo"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-heading font-semibold text-sm border border-white/20 transition-colors"
                  >
                    <span>Conocé más sobre NORA</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#005bc0]/30 flex items-center justify-center text-[#adc6ff] shrink-0">
                      <span className="material-symbols-outlined text-[22px]">local_shipping</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">Envíos Diarios</h4>
                      <p className="text-xs text-slate-300 mt-0.5">Distribución en Zona Oeste y CABA con vehículos propios de logística.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#005bc0]/30 flex items-center justify-center text-[#adc6ff] shrink-0">
                      <span className="material-symbols-outlined text-[22px]">support_agent</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">Mesa Técnica Especializada</h4>
                      <p className="text-xs text-slate-300 mt-0.5">Asesoramiento de despieces exactos y compatibilidades de números de parte.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#005bc0]/30 flex items-center justify-center text-[#adc6ff] shrink-0">
                      <span className="material-symbols-outlined text-[22px]">sell</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">Condiciones Comerciales</h4>
                      <p className="text-xs text-slate-300 mt-0.5">Cuentas corrientes para talleres registrados y escalas de descuento.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          SUBSECCIÓN 5: AUTOHORRO VW & VENTAS CORPORATIVAS
          ==================================================== */}
      <section className="w-full bg-white py-16 border-t border-slate-200" id="autoahorro">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tarjeta Autoahorro */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
              <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6k9dEfHlj6We-ZJj0leS7cE1I8KeO30Ox_8UGF7hBnuamLvLA2Nc8KWdQvUBBYsPr2HtU9TMQN-6zYeETKk40qEovynfp6DT6DLx38rH6QAL-J3323DgiBdUiTFo-a8T9etWqu-5Osw8LqE3MeZWycY1TTRExm-bMDFl71gDCIv5fY6tnFiCbTZAtgVfO1mOW2IdoegcI4wkP251-67xAzY4YtI1tLrnfNeFzz5jNfjD4eyzNV0Hdww"
                  alt="Entrega de 0km Autoahorro Volkswagen"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#005bc0] text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                  Planes 100% Financiados
                </span>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-[#081224] mb-2 group-hover:text-[#005bc0] transition-colors">
                    Autoahorro Volkswagen
                  </h3>
                  <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                    Accedé a tu Volkswagen 0km con cuotas en pesos sin interés bancario. Planes de 84 cuotas con adjudicación pactada desde cuota 3 y suscripción digital ágil respaldada por LNG Olivieri.
                  </p>

                  <div className="space-y-2 mb-6 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
                      <span>100% financiado en cuotas en pesos sin interés</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
                      <span>Adjudicación pactada por contrato oficial VW</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
                      <span>Tomamos tu vehículo usado bajo modalidad Llave contra Llave</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                  <a
                    href="#contacto-directo"
                    className="flex-1 py-3 rounded-xl bg-[#005bc0] hover:bg-[#004493] text-white text-xs font-bold text-center transition-colors shadow-sm"
                  >
                    Suscribí tu Plan Digital
                  </a>
                  <a
                    href="https://wa.me/5491149867488?text=Hola,%20quisiera%20asesoramiento%20por%20Planes%20de%20Autoahorro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-[#128C7E] hover:bg-[#0e7064] text-white text-xs font-bold flex items-center gap-1.5"
                  >
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Tarjeta Ventas Corporativas */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 group" id="corporativo">
              <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWIOlNXT8SXAz4b4F3LddQJz1DPOco-w730W_viuiT8n0ddPTBWMLH5eMICcc6k0k66-x70vn3aZ8VgYbOubhqSBV_no3yeqvJ-aCeLDsybtbybF08nwzU1AjhkWRJZNlZTQQUO1mlaDv5DLTH0M7WY_MMv7ljjsnv1KfcgbrHVrg5_Us7-lKBZrTu7NPfe3XRvy_9GWfsFpuGsWIJDHHyjFzFw8N4p-XCnoSFQcI5-bAtrk1NUCdSgQ"
                  alt="Flotas Corporativas Amarok LNG Olivieri"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#081224] text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                  Flotas Comerciales & Leasing
                </span>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-[#081224] mb-2 group-hover:text-[#005bc0] transition-colors">
                    Ventas Corporativas & Flotas
                  </h3>
                  <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                    Soluciones comerciales diseñadas para empresas, pymes y productores agropecuarios. Facturación directa de fábrica, beneficios impositivos y líneas de crédito especiales para la adquisición de flotas.
                  </p>

                  <div className="space-y-2 mb-6 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
                      <span>Beneficios impositivos (IVA y amortización acelerada)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
                      <span>Leasing financiero y operativo a medida</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
                      <span>Atención técnica prioritaria de flota en nuestros talleres</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                  <a
                    href="#contacto-directo"
                    className="flex-1 py-3 rounded-xl bg-[#081224] hover:bg-[#005bc0] text-white text-xs font-bold text-center transition-colors shadow-sm"
                  >
                    Solicitar Cotización Flotas
                  </a>
                  <a
                    href="https://wa.me/5491149867488?text=Hola,%20quisiera%20asesoramiento%20por%20Ventas%20Corporativas%20y%20Flotas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-[#128C7E] hover:bg-[#0e7064] text-white text-xs font-bold flex items-center gap-1.5"
                  >
                    <span>WhatsApp Flotas</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
