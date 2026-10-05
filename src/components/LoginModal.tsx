import React, { useState } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoggedInUser(email);
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  const handleGoogleLogin = () => {
    setLoggedInUser('usuario.google@gmail.com');
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#081224]/80 backdrop-blur-md"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-[#081224] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#005bc0] flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[20px]">account_circle</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-heading">
                {isRegister ? 'Crear Cuenta de Cliente' : 'Portal de Clientes LNG Olivieri'}
              </h3>
              <p className="text-xs text-slate-300">
                {isRegister ? 'Registrate para gestionar tus turnos y cotizaciones' : 'Accedé a tus servicios, planes y estado de unidades'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>

        {loggedInUser ? (
          <div className="p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <span className="material-symbols-outlined text-[32px]">verified</span>
            </div>
            <h4 className="text-lg font-bold text-slate-900 font-heading mb-1">
              ¡Bienvenido a LNG Olivieri!
            </h4>
            <p className="text-sm text-slate-600 mb-3">
              Sesión iniciada con éxito como <strong>{loggedInUser}</strong>.
            </p>
            <span className="text-xs text-slate-400">Redirigiendo a tu panel...</span>
          </div>
        ) : (
          <div className="p-6">
            {/* Google Sign In */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors shadow-sm cursor-pointer mb-4"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"></path>
              </svg>
              <span>Continuar con Google</span>
            </button>

            <div className="flex items-center my-4">
              <div className="flex-1 h-px bg-slate-200"></div>
              <span className="px-3 text-[11px] text-slate-400 font-semibold uppercase tracking-wider">o con tu email</span>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              {isRegister && (
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Juan Gómez"
                    className="w-full h-9 px-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 text-sm outline-none focus:ring-2 focus:ring-[#005bc0] focus:bg-white"
                  />
                </div>
              )}

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@correo.com"
                  className="w-full h-9 px-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 text-sm outline-none focus:ring-2 focus:ring-[#005bc0] focus:bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Contraseña
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-9 px-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 text-sm outline-none focus:ring-2 focus:ring-[#005bc0] focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-[#005bc0] hover:bg-[#004493] text-white text-xs font-bold transition-colors shadow-md cursor-pointer mt-2"
              >
                {isRegister ? 'Completar Registro' : 'Iniciar Sesión'}
              </button>
            </form>

            <div className="pt-4 mt-4 border-t border-slate-200 text-center text-xs text-slate-600">
              {isRegister ? (
                <span>
                  ¿Ya tenés cuenta?{' '}
                  <button
                    type="button"
                    onClick={() => setIsRegister(false)}
                    className="text-[#005bc0] font-bold hover:underline cursor-pointer"
                  >
                    Ingresá aquí
                  </button>
                </span>
              ) : (
                <span>
                  ¿Todavía no tenés cuenta?{' '}
                  <button
                    type="button"
                    onClick={() => setIsRegister(true)}
                    className="text-[#005bc0] font-bold hover:underline cursor-pointer"
                  >
                    Registrate gratis
                  </button>
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
