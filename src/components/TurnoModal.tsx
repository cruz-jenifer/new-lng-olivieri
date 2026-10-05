import React, { useState } from 'react';

interface TurnoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialBranch?: string;
}

export const TurnoModal: React.FC<TurnoModalProps> = ({
  isOpen,
  onClose,
  initialBranch = 'central'
}) => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [servicio, setServicio] = useState('mantenimiento');
  const [sucursal, setSucursal] = useState(initialBranch);
  const [modelo, setModelo] = useState('');
  const [consulta, setConsulta] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(true);
  const [aceptaDatos, setAceptaDatos] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#081224]/80 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-3xl max-h-[90vh] overflow-y-auto overflow-x-hidden flex flex-col relative animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#081224] text-white px-6 py-4 rounded-t-2xl flex items-center justify-between sticky top-0 z-20 border-b border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#005bc0]/20 flex items-center justify-center text-[#adc6ff] shrink-0 border border-[#005bc0]/40">
              <span className="material-symbols-outlined text-[22px]">calendar_month</span>
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-tight text-white leading-tight font-heading">
                Solicitar Turno Oficial Volkswagen
              </h3>
              <p className="text-xs text-slate-300">
                Coordiná tu turno de mantenimiento o carrocería en menos de 2 minutos
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar modal de turnos"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center flex flex-col items-center justify-center py-16">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>
            <h4 className="text-2xl font-bold text-[#081224] font-heading mb-2">
              ¡Turno Solicitado con Éxito!
            </h4>
            <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed mb-4">
              Gracias <strong>{nombre || 'estimado cliente'}</strong>. Un asesor técnico oficial de LNG Olivieri se comunicará a la brevedad al <strong>{telefono}</strong> para coordinar el horario exacto en la sede seleccionada.
            </p>
            <span className="text-xs text-slate-400">
              Cerrando esta ventana automáticamente...
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
              {/* Columna Izquierda: Datos Personales */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-[#005bc0] uppercase tracking-wider mb-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">person</span>
                  Datos del Titular y Vehículo
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-800 block mb-1">
                    Nombre y Apellido <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ej. Juan Pérez"
                    className="w-full h-9 px-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 text-sm outline-none focus:ring-2 focus:ring-[#005bc0] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-800 block mb-1">
                    Teléfono / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="Ej. 11 4658 0000"
                    className="w-full h-9 px-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 text-sm outline-none focus:ring-2 focus:ring-[#005bc0] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-800 block mb-1">
                    Correo Electrónico <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ejemplo@correo.com"
                    className="w-full h-9 px-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 text-sm outline-none focus:ring-2 focus:ring-[#005bc0] focus:bg-white transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-xs font-semibold text-slate-800 block mb-1">
                      Modelo VW
                    </label>
                    <input
                      type="text"
                      value={modelo}
                      onChange={(e) => setModelo(e.target.value)}
                      placeholder="Ej. Taos, Amarok, Polo"
                      className="w-full h-9 px-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 text-sm outline-none focus:ring-2 focus:ring-[#005bc0] focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-800 block mb-1">
                      Tipo de Servicio
                    </label>
                    <select
                      value={servicio}
                      onChange={(e) => setServicio(e.target.value)}
                      className="w-full h-9 px-2 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 text-xs outline-none focus:ring-2 focus:ring-[#005bc0] focus:bg-white transition-all"
                    >
                      <option value="mantenimiento">Service Programado (15k/30k/etc)</option>
                      <option value="carroceria">Chapa & Pintura / Siniestro</option>
                      <option value="recall">Campaña / Recall Oficial</option>
                      <option value="mecanica">Diagnóstico Mecánico General</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-semibold text-slate-800 block">
                      Detalle de consulta / Kilometraje
                    </label>
                    <span className="text-[10px] text-slate-500">
                      {consulta.length} / 250
                    </span>
                  </div>
                  <textarea
                    maxLength={250}
                    value={consulta}
                    onChange={(e) => setConsulta(e.target.value)}
                    rows={2}
                    placeholder="Indique kilometraje actual o fallas a revisar..."
                    className="w-full p-2.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 text-xs outline-none focus:ring-2 focus:ring-[#005bc0] focus:bg-white transition-all resize-none leading-snug"
                  />
                </div>
              </div>

              {/* Columna Derecha: Sucursales y Aceptaciones */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-[#005bc0] uppercase tracking-wider mb-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  Seleccioná la Sucursal de Preferencia
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <label
                    className={`flex items-start gap-2 p-2.5 rounded-xl border transition-all cursor-pointer ${
                      sucursal === 'central'
                        ? 'border-[#005bc0] bg-blue-50/70 shadow-sm ring-1 ring-[#005bc0]'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="sucursal"
                      value="central"
                      checked={sucursal === 'central'}
                      onChange={() => setSucursal('central')}
                      className="mt-0.5 text-[#005bc0] focus:ring-[#005bc0]"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900 leading-tight">
                        CASA CENTRAL
                      </div>
                      <p className="text-[11px] text-slate-600 leading-tight mt-0.5">
                        Av. Rivadavia 12980, Ciudadela
                        <span className="font-semibold text-slate-800 block">Tel: 5129-3300</span>
                      </p>
                    </div>
                  </label>

                  <label
                    className={`flex items-start gap-2 p-2.5 rounded-xl border transition-all cursor-pointer ${
                      sucursal === 'florida'
                        ? 'border-[#005bc0] bg-blue-50/70 shadow-sm ring-1 ring-[#005bc0]'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="sucursal"
                      value="florida"
                      checked={sucursal === 'florida'}
                      onChange={() => setSucursal('florida')}
                      className="mt-0.5 text-[#005bc0] focus:ring-[#005bc0]"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900 leading-tight">
                        SUCURSAL FLORIDA
                      </div>
                      <p className="text-[11px] text-slate-600 leading-tight mt-0.5">
                        Laprida 3363, Vicente López
                        <span className="font-semibold text-slate-800 block">Tel: 5531-0600</span>
                      </p>
                    </div>
                  </label>

                  <label
                    className={`flex items-start gap-2 p-2.5 rounded-xl border transition-all cursor-pointer ${
                      sucursal === 'san-justo'
                        ? 'border-[#005bc0] bg-blue-50/70 shadow-sm ring-1 ring-[#005bc0]'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="sucursal"
                      value="san-justo"
                      checked={sucursal === 'san-justo'}
                      onChange={() => setSucursal('san-justo')}
                      className="mt-0.5 text-[#005bc0] focus:ring-[#005bc0]"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900 leading-tight">
                        SUCURSAL SAN JUSTO
                      </div>
                      <p className="text-[11px] text-slate-600 leading-tight mt-0.5">
                        Maradona 3366, San Justo
                        <span className="font-semibold text-slate-800 block">Tel: 5550-1100</span>
                      </p>
                    </div>
                  </label>

                  <label
                    className={`flex items-start gap-2 p-2.5 rounded-xl border transition-all cursor-pointer ${
                      sucursal === 'usados'
                        ? 'border-[#005bc0] bg-blue-50/70 shadow-sm ring-1 ring-[#005bc0]'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="sucursal"
                      value="usados"
                      checked={sucursal === 'usados'}
                      onChange={() => setSucursal('usados')}
                      className="mt-0.5 text-[#005bc0] focus:ring-[#005bc0]"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900 leading-tight">
                        PLAYA CIUDADELA
                      </div>
                      <p className="text-[11px] text-slate-600 leading-tight mt-0.5">
                        Av. Rivadavia 12674
                        <span className="font-semibold text-slate-800 block">Peritaje & Seminuevos</span>
                      </p>
                    </div>
                  </label>
                </div>

                {/* Consentimientos */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={aceptaTerminos}
                      onChange={(e) => setAceptaTerminos(e.target.checked)}
                      className="mt-0.5 rounded text-[#005bc0] focus:ring-[#005bc0]"
                    />
                    <span className="text-[11px] text-slate-600 leading-tight">
                      Acepto las <a href="#pie-pagina" className="text-[#005bc0] underline font-medium">Políticas de Privacidad</a> de LNG Olivieri S.A.
                    </span>
                  </label>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={aceptaDatos}
                      onChange={(e) => setAceptaDatos(e.target.checked)}
                      className="mt-0.5 rounded text-[#005bc0] focus:ring-[#005bc0]"
                    />
                    <span className="text-[11px] text-slate-600 leading-tight">
                      Autorizo el contacto comercial y técnico para la confirmación de la cita.
                    </span>
                  </label>
                </div>

                {/* reCAPTCHA badge */}
                <div className="p-2.5 rounded-lg border border-slate-200 bg-white flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      defaultChecked
                      className="w-4 h-4 rounded text-[#005bc0] focus:ring-[#005bc0]"
                    />
                    <span className="text-xs font-medium text-slate-800">
                      Verificación de seguridad
                    </span>
                  </label>
                  <div className="flex items-center gap-1 text-[10px] text-slate-500 font-semibold uppercase">
                    <span className="material-symbols-outlined text-[16px] text-[#005bc0]">verified_user</span>
                    Certificado SSL
                  </div>
                </div>
              </div>
            </div>

            {/* Footer de Acciones */}
            <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-3 mt-2">
              <button
                type="button"
                onClick={onClose}
                className="py-2 px-4 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="py-2 px-5 rounded-lg bg-[#005bc0] hover:bg-[#004493] text-white text-xs font-semibold transition-colors shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">send</span>
                Confirmar Solicitud de Turno
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
