import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-slate-200" id="pie-pagina">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Columna 1: LNG Olivieri */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjfja2nEVXymqpr-JgKJLa0P1PiOMbwRB3a2b83_00pnxFd0dHZz85lLgYugK3L82lzWhJlSf0Cp8NXwfG9750c2SSPZLJ_D-0Toh403Wvnz2DutV1Exqrg1dzf1pOKJSxngPKc9Empn6Vz95doalmiLeoyAuIbPuBAcEEiRUYR7CDuOEbwbSH2wRUrLjfSqFSMVwD-z_Yd5eL_U9CSZrkueoqJrbgDTHrivg5m8g_Q6yHqwtKGm6m2QRH0V8ZUdXiUHg"
                alt="Volkswagen Logo"
                className="w-10 h-10 object-contain rounded-full shrink-0"
              />
              <div className="flex flex-col justify-center">
                <span className="font-heading font-extrabold text-base tracking-tight text-[#081224] leading-none">
                  LNG OLIVIERI
                </span>
                <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-0.5">
                  Concesionario Oficial
                </span>
              </div>
            </div>

            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <a href="#historia" className="hover:text-[#005bc0] transition-colors">
                  Nuestra Empresa & Trayectoria
                </a>
              </li>
              <li>
                <a href="#pie-pagina" className="hover:text-[#005bc0] transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#pie-pagina" className="hover:text-[#005bc0] transition-colors">
                  Leyes y Regulaciones Automotrices
                </a>
              </li>
              <li>
                <a href="#pie-pagina" className="hover:text-[#005bc0] transition-colors">
                  Políticas de Privacidad
                </a>
              </li>
              <li>
                <a href="#pie-pagina" className="hover:text-[#005bc0] transition-colors">
                  Consentimiento de Uso de Datos
                </a>
              </li>
              <li>
                <a href="#pie-pagina" className="hover:text-[#005bc0] transition-colors">
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 2: Contáctenos */}
          <div>
            <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-[#081224] mb-4">
              Contáctenos
            </h3>
            <ul className="space-y-2 text-xs text-slate-600 mb-6">
              <li>
                <a href="#contacto-directo" className="hover:text-[#005bc0] transition-colors">
                  Solicitud de Asesoramiento Comercial
                </a>
              </li>
              <li>
                <a href="#contacto-directo" className="hover:text-[#005bc0] transition-colors">
                  Solicitud de Test Drive
                </a>
              </li>
              <li>
                <a href="#sucursales" className="hover:text-[#005bc0] transition-colors">
                  Nuestras Sucursales (San Justo, Florida, Ciudadela)
                </a>
              </li>
              <li>
                <a href="#trabaja-con-nosotros" className="hover:text-[#005bc0] transition-colors">
                  Bolsa de Trabajo y RRHH
                </a>
              </li>
            </ul>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-[20px] text-[#005bc0]">call</span>
                <span className="font-heading font-bold text-[#081224] text-sm">
                  0810-333-6548
                </span>
              </div>
              <p className="text-[11px] text-slate-500 leading-snug">
                Atención comercial y taller oficial de lunes a sábados.
              </p>
            </div>
          </div>

          {/* Columna 3: Modelos VW */}
          <div>
            <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-[#081224] mb-4">
              Modelos Volkswagen
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <a href="#gama-modelos" className="hover:text-[#005bc0] transition-colors">
                  Todos los modelos 0km
                </a>
              </li>
              <li>
                <a href="#gama-modelos" className="hover:text-[#005bc0] transition-colors">
                  SUVW (Nuevo Tera, Taos, T-Cross, Tiguan)
                </a>
              </li>
              <li>
                <a href="#gama-modelos" className="hover:text-[#005bc0] transition-colors">
                  Compactos (Polo Track, Nuevo Polo)
                </a>
              </li>
              <li>
                <a href="#gama-modelos" className="hover:text-[#005bc0] transition-colors">
                  Deportivos (Vento GLI 230 CV DSG)
                </a>
              </li>
              <li>
                <a href="#gama-modelos" className="hover:text-[#005bc0] transition-colors">
                  Pick-Ups (Nueva Amarok V6, 2.0 TDI, Saveiro)
                </a>
              </li>
              <li>
                <a href="#usados" className="hover:text-[#005bc0] transition-colors">
                  Usados Seleccionados Garantizados
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div>
            <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-[#081224] mb-4">
              Canales Oficiales
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#005bc0] transition-colors"
                >
                  <svg className="w-4 h-4 text-[#005bc0] fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#005bc0] transition-colors"
                >
                  <svg className="w-4 h-4 text-[#005bc0] fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#005bc0] transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#005bc0]">smart_display</span>
                  <span>TikTok</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#005bc0] transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#005bc0]">play_circle</span>
                  <span>YouTube</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#005bc0] transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#005bc0]">business</span>
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra de Legales Inferior */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2025 LNG Olivieri S.A. Todos los derechos reservados. Concesionario Oficial de la Red Volkswagen Argentina.</p>
          <div className="flex items-center gap-6">
            <a href="#pie-pagina" className="hover:text-slate-800 transition-colors">
              Términos y Condiciones
            </a>
            <a href="#pie-pagina" className="hover:text-slate-800 transition-colors">
              Políticas de Privacidad
            </a>
            <a href="#pie-pagina" className="hover:text-slate-800 transition-colors">
              Defensa del Consumidor
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
