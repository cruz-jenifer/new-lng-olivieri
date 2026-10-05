import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onOpenLogin: () => void;
  onOpenTurno: () => void;
  onSearchQuery?: (q: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenLogin,
  onOpenTurno,
  onSearchQuery
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearchQuery) onSearchQuery(searchQuery);
    const target = document.getElementById('gama-modelos');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    setIsSearchOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-md border-b border-slate-200 py-2'
          : 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-2.5'
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        {/* Identidad de Marca */}
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjfja2nEVXymqpr-JgKJLa0P1PiOMbwRB3a2b83_00pnxFd0dHZz85lLgYugK3L82lzWhJlSf0Cp8NXwfG9750c2SSPZLJ_D-0Toh403Wvnz2DutV1Exqrg1dzf1pOKJSxngPKc9Empn6Vz95doalmiLeoyAuIbPuBAcEEiRUYR7CDuOEbwbSH2wRUrLjfSqFSMVwD-z_Yd5eL_U9CSZrkueoqJrbgDTHrivg5m8g_Q6yHqwtKGm6m2QRH0V8ZUdXiUHg"
              alt="Volkswagen Logo"
              className="w-10 h-10 object-contain rounded-full transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col justify-center border-l border-slate-300 pl-3">
              <span className="font-heading font-extrabold text-base tracking-tight text-[#081224] leading-none">
                LNG OLIVIERI
              </span>
              <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-0.5">
                Concesionario Oficial
              </span>
            </div>
          </a>
        </div>

        {/* Navegación Desktop - Enlaces Ancla y Mega-menús */}
        <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-1 h-full">
          {/* Mega Menú: 0km / Modelos */}
          <div className="group relative flex items-center h-full">
            <a
              href="#gama-modelos"
              className="flex items-center gap-1 text-xs font-semibold px-3 py-2 text-slate-700 hover:text-[#005bc0] hover:bg-slate-100 rounded-lg transition-colors"
            >
              <span>0km</span>
              <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:rotate-180">
                expand_more
              </span>
            </a>
            <div className="pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 transition-all duration-200 absolute top-full left-0 w-[580px] bg-white border border-slate-200 rounded-2xl shadow-2xl p-5 z-50">
              <div className="grid grid-cols-3 gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-1 mb-2 text-[#005bc0] text-xs uppercase tracking-wider font-bold">
                    <span className="material-symbols-outlined text-[16px]">directions_car</span>
                    <span>SUVW</span>
                  </div>
                  <ul className="space-y-1">
                    <li>
                      <a href="#gama-modelos" className="block p-1.5 rounded hover:bg-slate-50 text-xs font-medium text-slate-800">
                        Taos <span className="text-[10px] text-slate-500 block font-normal">Nacional 250 TSI</span>
                      </a>
                    </li>
                    <li>
                      <a href="#gama-modelos" className="block p-1.5 rounded hover:bg-slate-50 text-xs font-medium text-slate-800">
                        Tiguan Allspace <span className="text-[10px] text-slate-500 block font-normal">7 Plazas 4Motion</span>
                      </a>
                    </li>
                    <li>
                      <a href="#gama-modelos" className="block p-1.5 rounded hover:bg-slate-50 text-xs font-medium text-slate-800">
                        T-Cross <span className="text-[10px] text-slate-500 block font-normal">Eficiencia Urbana</span>
                      </a>
                    </li>
                    <li>
                      <a href="#gama-modelos" className="block p-1.5 rounded hover:bg-blue-50 text-xs font-bold text-[#005bc0]">
                        Nuevo Tera <span className="text-[10px] text-blue-600 block font-semibold">Preventa 2025</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2 text-[#005bc0] text-xs uppercase tracking-wider font-bold">
                    <span className="material-symbols-outlined text-[16px]">speed</span>
                    <span>Autos</span>
                  </div>
                  <ul className="space-y-1">
                    <li>
                      <a href="#gama-modelos" className="block p-1.5 rounded hover:bg-slate-50 text-xs font-medium text-slate-800">
                        Polo Track <span className="text-[10px] text-slate-500 block font-normal">Económico y Robusto</span>
                      </a>
                    </li>
                    <li>
                      <a href="#gama-modelos" className="block p-1.5 rounded hover:bg-slate-50 text-xs font-medium text-slate-800">
                        Nuevo Polo <span className="text-[10px] text-slate-500 block font-normal">Conectividad VW Play</span>
                      </a>
                    </li>
                    <li>
                      <a href="#gama-modelos" className="block p-1.5 rounded hover:bg-slate-50 text-xs font-medium text-slate-800">
                        Vento GLI <span className="text-[10px] text-slate-500 block font-normal">230 CV Deportivo DSG</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2 text-[#005bc0] text-xs uppercase tracking-wider font-bold">
                    <span className="material-symbols-outlined text-[16px]">front_loader</span>
                    <span>Pick-Ups</span>
                  </div>
                  <ul className="space-y-1">
                    <li>
                      <a href="#gama-modelos" className="block p-1.5 rounded hover:bg-slate-50 text-xs font-medium text-slate-800">
                        Nueva Amarok V6 <span className="text-[10px] text-slate-500 block font-normal">258 CV Líder</span>
                      </a>
                    </li>
                    <li>
                      <a href="#gama-modelos" className="block p-1.5 rounded hover:bg-slate-50 text-xs font-medium text-slate-800">
                        Amarok 2.0 TDI <span className="text-[10px] text-slate-500 block font-normal">Trabajo y Confort</span>
                      </a>
                    </li>
                    <li>
                      <a href="#gama-modelos" className="block p-1.5 rounded hover:bg-slate-50 text-xs font-medium text-slate-800">
                        Saveiro <span className="text-[10px] text-slate-500 block font-normal">Cabina Simple y Doble</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-slate-200 pt-3 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">Tasa 0% en 18 meses para modelos seleccionados</span>
                <a href="#gama-modelos" className="text-xs font-bold text-[#005bc0] hover:underline flex items-center gap-1">
                  Ver gama completa 0km
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* Enlace ancla: Ofertas */}
          <a
            href="#ofertas-destacadas"
            className="text-xs font-semibold px-3 py-2 text-slate-700 hover:text-[#005bc0] hover:bg-slate-100 rounded-lg transition-colors"
          >
            Ofertas
          </a>

          {/* Enlace ancla: Usados */}
          <a
            href="#usados"
            className="text-xs font-semibold px-3 py-2 text-slate-700 hover:text-[#005bc0] hover:bg-slate-100 rounded-lg transition-colors"
          >
            Usados
          </a>

          {/* Mega Menú: Posventa */}
          <div className="group relative flex items-center h-full">
            <a
              href="#postventa-servicios"
              className="flex items-center gap-1 text-xs font-semibold px-3 py-2 text-slate-700 hover:text-[#005bc0] hover:bg-slate-100 rounded-lg transition-colors"
            >
              <span>Posventa</span>
              <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:rotate-180">
                expand_more
              </span>
            </a>
            <div className="pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 transition-all duration-200 absolute top-full left-0 w-[480px] bg-white border border-slate-200 rounded-2xl shadow-2xl p-5 z-50">
              <div className="bg-slate-50 rounded-xl p-3 mb-3 flex items-center justify-between border border-slate-200">
                <div>
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#005bc0] text-[18px]">calendar_month</span>
                    Agenda de Turnos Online
                  </div>
                  <span className="text-[11px] text-slate-500">Agendá en menos de 2 minutos</span>
                </div>
                <button
                  type="button"
                  onClick={onOpenTurno}
                  className="px-3 py-1.5 rounded-lg bg-[#005bc0] text-white text-xs font-bold hover:bg-[#004493] transition-colors shadow-sm cursor-pointer"
                >
                  Agendar Turno
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a href="#postventa-servicios" className="p-2 rounded-lg hover:bg-slate-50 text-slate-700 font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#005bc0]">build</span>
                  Mantenimiento Programado
                </a>
                <a href="#carroceria-cesvi" className="p-2 rounded-lg hover:bg-slate-50 text-slate-700 font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#005bc0]">hardware</span>
                  Carrocería & CESVI
                </a>
                <a href="#nora-center" className="p-2 rounded-lg hover:bg-slate-50 text-slate-700 font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#005bc0]">inventory_2</span>
                  NORA Center B2B
                </a>
                <a href="#encontra-tu-taller" className="p-2 rounded-lg hover:bg-slate-50 text-slate-700 font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#005bc0]">storefront</span>
                  Red de Talleres
                </a>
              </div>
            </div>
          </div>

          {/* Enlace ancla: Autoahorro */}
          <a
            href="#autoahorro"
            className="text-xs font-semibold px-3 py-2 text-slate-700 hover:text-[#005bc0] hover:bg-slate-100 rounded-lg transition-colors"
          >
            Autoahorro
          </a>

          {/* Enlace ancla: Corporativo */}
          <a
            href="#corporativo"
            className="text-xs font-semibold px-3 py-2 text-slate-700 hover:text-[#005bc0] hover:bg-slate-100 rounded-lg transition-colors"
          >
            Corporativo
          </a>

          {/* Enlace ancla: Sucursales */}
          <a
            href="#sucursales"
            className="text-xs font-semibold px-3 py-2 text-slate-700 hover:text-[#005bc0] hover:bg-slate-100 rounded-lg transition-colors"
          >
            Sucursales
          </a>

          {/* Enlace ancla: Trabajá con nosotros */}
          <a
            href="#trabaja-con-nosotros"
            className="text-xs font-semibold px-3 py-2 text-slate-700 hover:text-[#005bc0] hover:bg-slate-100 rounded-lg transition-colors"
          >
            Trabajá con nosotros
          </a>
        </nav>

        {/* Herramientas de Acción Directa */}
        <div className="flex items-center gap-2">
          {/* Buscador trigger */}
          <button
            type="button"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Abrir buscador global"
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            title="Buscar modelos o servicios"
          >
            <span className="material-symbols-outlined text-[18px]">search</span>
          </button>

          {/* Botón Login/Perfil */}
          <button
            type="button"
            onClick={onOpenLogin}
            aria-label="Acceso portal de clientes"
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            title="Portal de Clientes / Login"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>

          {/* WhatsApp Directo */}
          <a
            href="https://wa.me/5491146580000?text=Hola,%20quisiera%20asesoramiento%20comercial%20en%20LNG%20Olivieri"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp Oficial"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#128C7E] hover:bg-[#0e7064] text-white text-xs font-bold transition-all shadow-sm group"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiMDsLYdIkcCYnmvjy7QTsGnswlj9W5eJrJv7qufR22spVIsTQf9WAZ0YZj20wguNBMoSj1jVmoaR7Q5564MUAGbGXgr0O4-4obVoVTrTSQrTZ4OmuBVgBAYy8kBLWuESZPULrXlDoS9bJUkkgoqTLp2pjmE2pf1fMg-PZI349Gmdfidptn8HdZRA_36_0OS3faSOicpAtiIktgafG6OTyuxt5bl8UF7AJtw9mwnvGRw3EndX9TGm8IKFj0456MYecZcc"
              alt="WA"
              className="w-4 h-4 object-contain"
            />
            <span>WhatsApp</span>
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
            aria-label="Menú móvil"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Barra de Búsqueda Desplegable */}
      {isSearchOpen && (
        <div className="w-full bg-white border-b border-slate-200 px-4 py-3 shadow-md animate-in fade-in slide-in-from-top-2 duration-150">
          <form onSubmit={handleSearchSubmit} className="max-w-[1440px] mx-auto flex items-center gap-3">
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#005bc0] text-[20px]">
                search
              </span>
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="¿Qué modelo (ej. Tera, Taos, Amarok), repuesto o servicio estás buscando?"
                className="w-full h-10 pl-10 pr-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm outline-none focus:ring-2 focus:ring-[#005bc0] focus:bg-white"
              />
            </div>
            <button
              type="submit"
              className="h-10 px-5 rounded-xl bg-[#005bc0] text-white text-xs font-bold hover:bg-[#004493] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Buscar</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
            <button
              type="button"
              onClick={() => setIsSearchOpen(false)}
              className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </form>
        </div>
      )}

      {/* Menú Móvil Desplegable */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 shadow-xl space-y-2 animate-in fade-in slide-in-from-top-3">
          <a
            href="#gama-modelos"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 hover:text-[#005bc0] border-b border-slate-100"
          >
            0km (Modelos Volkswagen)
          </a>
          <a
            href="#ofertas-destacadas"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 hover:text-[#005bc0] border-b border-slate-100"
          >
            Ofertas Destacadas del Mes
          </a>
          <a
            href="#usados"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 hover:text-[#005bc0] border-b border-slate-100"
          >
            Usados Seleccionados (Garantía 150 Puntos)
          </a>
          <a
            href="#postventa-servicios"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 hover:text-[#005bc0] border-b border-slate-100"
          >
            Posventa & Servicios Oficiales
          </a>
          <a
            href="#autoahorro"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 hover:text-[#005bc0] border-b border-slate-100"
          >
            Autoahorro Volkswagen
          </a>
          <a
            href="#corporativo"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 hover:text-[#005bc0] border-b border-slate-100"
          >
            Ventas Corporativas & Flotas
          </a>
          <a
            href="#historia"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 hover:text-[#005bc0] border-b border-slate-100"
          >
            Historia & Hitos (25+ años)
          </a>
          <a
            href="#sucursales"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 hover:text-[#005bc0] border-b border-slate-100"
          >
            Sucursales & Talleres
          </a>
          <a
            href="#trabaja-con-nosotros"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 hover:text-[#005bc0]"
          >
            Trabajá con nosotros
          </a>
          <div className="pt-3 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTurno();
              }}
              className="flex-1 py-2 rounded-lg bg-[#005bc0] text-white text-xs font-bold text-center"
            >
              Agendar Turno
            </button>
            <a
              href="https://wa.me/5491146580000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 rounded-lg bg-[#128C7E] text-white text-xs font-bold text-center flex items-center justify-center gap-1"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
