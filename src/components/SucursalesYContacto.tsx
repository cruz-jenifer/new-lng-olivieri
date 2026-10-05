import React, { useState } from 'react';
import { BRANCHES, Branch } from '../data/branches';

interface SucursalesYContactoProps {
  preselectedModel?: string;
  preselectedService?: string;
}

export const SucursalesYContacto: React.FC<SucursalesYContactoProps> = ({
  preselectedModel = '',
  preselectedService = '0km'
}) => {
  const [selectedBranchIndex, setSelectedBranchIndex] = useState(0);

  // Form state
  const [motivo, setMotivo] = useState(preselectedService);
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [modeloInteres, setModeloInteres] = useState(preselectedModel);
  const [usadoMarca, setUsadoMarca] = useState('');
  const [usadoAnio, setUsadoAnio] = useState('');
  const [usadoKm, setUsadoKm] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [sucursalPreferida, setSucursalPreferida] = useState('central');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const activeBranch: Branch = BRANCHES[selectedBranchIndex];

  const handleBranchStep = (dir: number) => {
    setSelectedBranchIndex((prev) => (prev + dir + BRANCHES.length) % BRANCHES.length);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setNombre('');
      setTelefono('');
      setEmail('');
      setMensaje('');
    }, 4000);
  };

  return (
    <div className="w-full">
      {/* ====================================================
          SUBSECCIÓN 1: CENTROS INTEGRALES & MAPA DE SUCURSALES
          ==================================================== */}
      <section className="w-full bg-white py-16" id="sucursales">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-1.5 text-[#005bc0] text-xs font-bold uppercase tracking-widest mb-1.5">
                <span className="material-symbols-outlined text-[18px]">pin_drop</span>
                <span>Red Integral Olivieri</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#081224] tracking-tight">
                Encontrá una sucursal
              </h2>
            </div>
            <p className="text-xs text-slate-500 font-semibold">
              Salones de venta, playas de usados y talleres oficiales con equipamiento homologado
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Mapa Interactivo Google Maps (7 columnas) */}
            <div className="lg:col-span-7 bg-slate-100 rounded-3xl border border-slate-200 overflow-hidden shadow-sm relative min-h-[460px] flex flex-col">
              {/* Chips selectores superiores */}
              <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2 z-10 pointer-events-auto">
                {BRANCHES.map((b, idx) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setSelectedBranchIndex(idx)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shadow-md flex items-center gap-1.5 cursor-pointer ${
                      selectedBranchIndex === idx
                        ? 'bg-[#081224] text-white ring-2 ring-[#005bc0]'
                        : 'bg-white/95 backdrop-blur-sm text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[15px]">pin_drop</span>
                    <span>{b.badge}</span>
                  </button>
                ))}
              </div>

              {/* Iframe del Mapa */}
              <iframe
                title={`Mapa ${activeBranch.name}`}
                src={`https://maps.google.com/maps?q=${activeBranch.mapQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full min-h-[440px] border-0"
                loading="lazy"
              />

              {/* Badge inferior en vivo */}
              <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-md flex items-center gap-2 text-xs font-bold text-[#081224]">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{activeBranch.statusBadge}</span>
              </div>
            </div>

            {/* Ficha Detallada de Sucursal (5 columnas) */}
            <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-[#005bc0] text-xs font-bold uppercase tracking-wider">
                      {activeBranch.badge}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {activeBranch.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-slate-500 mr-1">
                      {selectedBranchIndex + 1} de {BRANCHES.length}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleBranchStep(-1)}
                      aria-label="Sucursal anterior"
                      className="w-8 h-8 rounded-full border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-slate-800 transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleBranchStep(1)}
                      aria-label="Sucursal siguiente"
                      className="w-8 h-8 rounded-full border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-slate-800 transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                    </button>
                  </div>
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-[#081224] mb-2 leading-tight">
                  {activeBranch.name}
                </h3>

                <div className="flex items-start gap-2 mb-5">
                  <span className="material-symbols-outlined text-[#005bc0] text-[20px] shrink-0 mt-0.5">
                    location_on
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {activeBranch.address} ({activeBranch.postalCode})
                  </p>
                </div>

                {/* Detalles de contacto */}
                <div className="bg-slate-50 rounded-2xl p-4 space-y-3 mb-6 border border-slate-100 text-xs">
                  <div className="flex items-center gap-2.5 text-slate-800">
                    <span className="material-symbols-outlined text-[#005bc0] text-[18px]">call</span>
                    <strong>Teléfono:</strong>
                    <span>{activeBranch.phone} {activeBranch.phoneExt && `(${activeBranch.phoneExt})`}</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-slate-800">
                    <span className="material-symbols-outlined text-[#128C7E] text-[18px]">chat</span>
                    <strong>WhatsApp Directo:</strong>
                    <a
                      href={`https://wa.me/${activeBranch.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#005bc0] hover:underline font-bold"
                    >
                      {activeBranch.whatsappDisplay}
                    </a>
                  </div>

                  <div className="flex items-start gap-2.5 text-slate-600 pt-2 border-t border-slate-200">
                    <span className="material-symbols-outlined text-[#005bc0] text-[18px] shrink-0 mt-0.5">
                      schedule
                    </span>
                    <div>
                      <strong className="text-slate-800 block">Horarios de Atención:</strong>
                      <span>{activeBranch.hours}</span>
                    </div>
                  </div>
                </div>

                {/* Servicios disponibles en esta sede */}
                <div className="mb-6">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Servicios en Sede:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeBranch.services.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-[11px] font-medium"
                      >
                        ✓ {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <a
                  href={`https://maps.google.com/?q=${activeBranch.mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-[#081224] hover:bg-[#005bc0] text-white text-xs font-bold text-center transition-colors shadow-sm flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">near_me</span>
                  <span>Cómo llegar</span>
                </a>
                <a
                  href="#contacto-directo"
                  onClick={() => setSucursalPreferida(activeBranch.id)}
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">mail</span>
                  <span>Contactar Sede</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          SUBSECCIÓN 2: FORMULARIO UNIFICADO DE CONTACTO
          ==================================================== */}
      <section className="w-full bg-[#f7f9fb] py-16 border-t border-slate-200" id="contacto-directo">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-sm">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <span className="text-xs uppercase tracking-widest text-[#005bc0] font-bold block mb-1">
                Atención Inmediata
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#081224] tracking-tight mb-2">
                Contactanos
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Completá el formulario y un asesor comercial o de postventa oficial se comunicará en menos de 15 minutos en horario comercial.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 text-center max-w-md mx-auto">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-[36px]">check_circle</span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-[#081224] mb-2">
                  ¡Mensaje Enviado con Éxito!
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Gracias <strong>{nombre || 'estimado cliente'}</strong>. Tu solicitud de <strong>{motivo}</strong> ha sido asignada al equipo de LNG Olivieri en la sede elegida.
                </p>
                <span className="text-xs text-slate-400">
                  Nos comunicaremos a la brevedad al {telefono || email}.
                </span>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="max-w-3xl mx-auto">
                {/* Selector de Motivo */}
                <div className="mb-6">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    Seleccioná tu tipo de consulta:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <button
                      type="button"
                      onClick={() => setMotivo('0km')}
                      className={`p-3 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer ${
                        motivo === '0km'
                          ? 'border-[#005bc0] bg-blue-50/70 text-[#005bc0] ring-2 ring-[#005bc0]'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      Cotizar 0km
                    </button>
                    <button
                      type="button"
                      onClick={() => setMotivo('usado')}
                      className={`p-3 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer ${
                        motivo === 'usado'
                          ? 'border-[#005bc0] bg-blue-50/70 text-[#005bc0] ring-2 ring-[#005bc0]'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      Tasar Usado
                    </button>
                    <button
                      type="button"
                      onClick={() => setMotivo('autoahorro')}
                      className={`p-3 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer ${
                        motivo === 'autoahorro'
                          ? 'border-[#005bc0] bg-blue-50/70 text-[#005bc0] ring-2 ring-[#005bc0]'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      Autoahorro
                    </button>
                    <button
                      type="button"
                      onClick={() => setMotivo('posventa')}
                      className={`p-3 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer ${
                        motivo === 'posventa'
                          ? 'border-[#005bc0] bg-blue-50/70 text-[#005bc0] ring-2 ring-[#005bc0]'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      Postventa / Taller
                    </button>
                  </div>
                </div>

                {/* Campos de Contacto */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Nombre y Apellido <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="Ej. Juan Pérez"
                      className="w-full h-10 px-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-sm outline-none focus:ring-2 focus:ring-[#005bc0] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Teléfono / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      placeholder="Ej. 11 4658 0000"
                      className="w-full h-10 px-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-sm outline-none focus:ring-2 focus:ring-[#005bc0] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ejemplo@correo.com"
                      className="w-full h-10 px-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-sm outline-none focus:ring-2 focus:ring-[#005bc0] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Sucursal de Preferencia
                    </label>
                    <select
                      value={sucursalPreferida}
                      onChange={(e) => setSucursalPreferida(e.target.value)}
                      className="w-full h-10 px-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs font-semibold outline-none focus:ring-2 focus:ring-[#005bc0] focus:bg-white"
                    >
                      <option value="central">Casa Central Ramos Mejía / Ciudadela</option>
                      <option value="florida">Sucursal Florida (Vicente López)</option>
                      <option value="san-justo">Sucursal San Justo</option>
                      <option value="usados">Playa Usados Seleccionados Ciudadela</option>
                    </select>
                  </div>
                </div>

                {/* Campos dinámicos según motivo */}
                {motivo === '0km' && (
                  <div className="mb-4">
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Modelo 0km de Interés
                    </label>
                    <select
                      value={modeloInteres}
                      onChange={(e) => setModeloInteres(e.target.value)}
                      className="w-full h-10 px-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs font-semibold outline-none focus:ring-2 focus:ring-[#005bc0] focus:bg-white"
                    >
                      <option value="">Seleccioná un modelo</option>
                      <option value="Nuevo Tera">Nuevo Tera (Preventa 2025)</option>
                      <option value="Taos Highline">Taos Highline (Nacional)</option>
                      <option value="T-Cross">Nuevo T-Cross</option>
                      <option value="Tiguan Allspace">Tiguan Allspace (7 Plazas)</option>
                      <option value="Polo Track">Polo Track</option>
                      <option value="Nuevo Polo">Nuevo Polo Highline</option>
                      <option value="Vento GLI">Vento GLI (230 CV)</option>
                      <option value="Nueva Amarok V6">Nueva Amarok V6 (258 CV)</option>
                      <option value="Amarok 2.0 TDI">Amarok 2.0 TDI</option>
                      <option value="Saveiro">Saveiro Cabina Doble</option>
                    </select>
                  </div>
                )}

                {motivo === 'usado' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Marca y Modelo de tu Usado
                      </label>
                      <input
                        type="text"
                        value={usadoMarca}
                        onChange={(e) => setUsadoMarca(e.target.value)}
                        placeholder="Ej. Gol Trend 2018"
                        className="w-full h-10 px-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs outline-none focus:ring-2 focus:ring-[#005bc0]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Año
                      </label>
                      <input
                        type="number"
                        value={usadoAnio}
                        onChange={(e) => setUsadoAnio(e.target.value)}
                        placeholder="Ej. 2019"
                        className="w-full h-10 px-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs outline-none focus:ring-2 focus:ring-[#005bc0]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Kilometraje Aprox.
                      </label>
                      <input
                        type="text"
                        value={usadoKm}
                        onChange={(e) => setUsadoKm(e.target.value)}
                        placeholder="Ej. 65.000 km"
                        className="w-full h-10 px-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs outline-none focus:ring-2 focus:ring-[#005bc0]"
                      />
                    </div>
                  </div>
                )}

                <div className="mb-4">
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Consulta o detalle adicional
                  </label>
                  <textarea
                    rows={3}
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    placeholder="Escribí aquí tus dudas sobre financiación, plazos de entrega o servicios..."
                    className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs outline-none focus:ring-2 focus:ring-[#005bc0] resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-slate-500">
                    Al enviar aceptás las políticas de privacidad y tratamiento de datos de LNG Olivieri.
                  </span>
                  <button
                    type="submit"
                    className="py-3 px-8 rounded-xl bg-[#005bc0] hover:bg-[#004493] text-white text-xs font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <span>Enviar Consulta</span>
                    <span className="material-symbols-outlined text-[16px]">send</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ====================================================
          SUBSECCIÓN 3: TRABAJÁ CON NOSOTROS (BOLSA DE TRABAJO)
          ==================================================== */}
      <section className="w-full bg-[#081224] text-white py-16 border-t border-slate-800" id="trabaja-con-nosotros">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="text-xs uppercase tracking-widest text-[#adc6ff] font-bold block mb-2">
                  Recursos Humanos LNG Olivieri
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-3">
                  ¡Te estamos buscando!
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-2xl">
                  Buscamos personas apasionadas por el mundo automotriz que deseen formar parte de un equipo con altos estándares de calidad técnica, comercial y humana. Ofrecemos oportunidades continuas en ventas convencionales, autoahorro, taller oficial y administración contable.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setCvModalOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#081224] font-heading font-bold text-xs transition-all shadow-md cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">upload_file</span>
                    <span>Enviar Currículum Vitae</span>
                  </button>
                  <a
                    href="mailto:rrhh@lngolivieri.com.ar"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white"
                  >
                    rrhh@lngolivieri.com.ar
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="font-heading font-bold text-base text-white mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#adc6ff] text-[20px]">badge</span>
                  <span>Búsquedas Activas</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-400 text-[16px]">check</span>
                    <span>Asesores de Venta Convencionales 0km</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-400 text-[16px]">check</span>
                    <span>Asesores Comerciales de Autoahorro VW</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-400 text-[16px]">check</span>
                    <span>Técnicos Mecánicos Certificados VW</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-400 text-[16px]">check</span>
                    <span>Recepcionistas de Taller y Garantías</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Enviar CV */}
      {cvModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#081224]/80 backdrop-blur-md"
          onClick={(e) => {
            if (e.target === e.currentTarget) setCvModalOpen(false);
          }}
        >
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading font-bold text-lg text-[#081224]">
                Postulación Laboral
              </h3>
              <button
                type="button"
                onClick={() => setCvModalOpen(false)}
                className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            </div>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Adjuntá tu CV actualizado o envialo directamente por correo a <strong>rrhh@lngolivieri.com.ar</strong> indicando en el asunto el puesto de interés (Ventas, Postventa o Administración).
            </p>
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center mb-4 bg-slate-50">
              <span className="material-symbols-outlined text-[32px] text-slate-400 mb-1">
                cloud_upload
              </span>
              <p className="text-xs text-slate-600 font-semibold">
                Arrastrá tu archivo PDF aquí o hacé clic para explorar
              </p>
              <input type="file" className="hidden" id="cv-file" accept=".pdf,.doc,.docx" />
              <label
                htmlFor="cv-file"
                className="inline-block mt-3 px-3 py-1.5 rounded-lg bg-[#005bc0] text-white text-xs font-bold cursor-pointer hover:bg-[#004493]"
              >
                Seleccionar Archivo
              </label>
            </div>
            <button
              type="button"
              onClick={() => {
                alert('¡Gracias por postularte! Tu CV ha sido enviado al equipo de Recursos Humanos de LNG Olivieri.');
                setCvModalOpen(false);
              }}
              className="w-full py-2.5 rounded-xl bg-[#081224] text-white text-xs font-bold hover:bg-[#005bc0] transition-colors"
            >
              Enviar Postulación
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
