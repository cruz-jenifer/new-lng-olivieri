import React, { useState } from 'react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const channels = [
    {
      label: 'Ventas 0km & Preventa Tera',
      phone: '5491146580000',
      text: 'Hola, quisiera información y cotización sobre vehículos 0km Volkswagen en LNG Olivieri.'
    },
    {
      label: 'Usados Seleccionados',
      phone: '5491149867488',
      text: 'Hola, me comunico por las unidades usadas seleccionadas con garantía en sede Ciudadela.'
    },
    {
      label: 'Taller & Turnos de Postventa',
      phone: '5491146580000',
      text: 'Hola, necesito coordinar un turno de mantenimiento o consultar por repuestos legítimos.'
    },
    {
      label: 'Autoahorro Volkswagen',
      phone: '5491149867488',
      text: 'Hola, quisiera suscribirme a un Plan de Ahorro 100% en pesos sin interés.'
    },
    {
      label: 'Ventas Corporativas & Flotas',
      phone: '5491149867488',
      text: 'Hola, represento a una empresa y solicito cotización para flota comercial / leasing.'
    }
  ];

  return (
    <div className="fixed bottom-20 right-6 z-40 flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="bg-[#128C7E] text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">chat</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold leading-tight">WhatsApp Oficial</h4>
                  <p className="text-[11px] text-emerald-100">LNG Olivieri • Respuesta en minutos</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            </div>
          </div>

          <div className="p-3 bg-slate-50 border-b border-slate-100">
            <p className="text-xs text-slate-600">
              Seleccioná el canal de atención para conectarte con un asesor oficial:
            </p>
          </div>

          <div className="p-2 space-y-1 max-h-64 overflow-y-auto">
            {channels.map((ch, idx) => (
              <a
                key={idx}
                href={`https://wa.me/${ch.phone}?text=${encodeURIComponent(ch.text)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-emerald-50 transition-colors group text-left border border-transparent hover:border-emerald-200"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-[#128C7E] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[16px]">send</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-800 group-hover:text-emerald-800">
                    {ch.label}
                  </span>
                </div>
                <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:text-[#128C7E]">
                  chevron_right
                </span>
              </a>
            ))}
          </div>

          <div className="p-2.5 bg-slate-100 text-center text-[10px] text-slate-500">
            Lunes a Viernes de 09:00 a 19:00 hs • Sábados de 09:00 a 13:00 hs
          </div>
        </div>
      )}

      {/* Main trigger button with pulse and badge */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir canales de WhatsApp LNG Olivieri"
        className="group relative flex items-center gap-2.5 bg-[#128C7E] hover:bg-[#0e7064] text-white p-3.5 rounded-full shadow-2xl transition-all hover:scale-105 cursor-pointer ring-4 ring-[#128C7E]/20"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full"></span>
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiMDsLYdIkcCYnmvjy7QTsGnswlj9W5eJrJv7qufR22spVIsTQf9WAZ0YZj20wguNBMoSj1jVmoaR7Q5564MUAGbGXgr0O4-4obVoVTrTSQrTZ4OmuBVgBAYy8kBLWuESZPULrXlDoS9bJUkkgoqTLp2pjmE2pf1fMg-PZI349Gmdfidptn8HdZRA_36_0OS3faSOicpAtiIktgafG6OTyuxt5bl8UF7AJtw9mwnvGRw3EndX9TGm8IKFj0456MYecZcc"
          alt="WhatsApp Logo"
          className="w-7 h-7 object-contain"
        />
        <span className="hidden md:inline-block font-heading font-bold text-xs pr-1">
          WhatsApp Oficial
        </span>
      </button>
    </div>
  );
};
