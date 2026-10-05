import React, { useState } from 'react';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReviewAdded?: (review: { advisor: string; author: string; quote: string; rating: number }) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose, onReviewAdded }) => {
  const [advisor, setAdvisor] = useState('Martin Morales');
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('');
  const [model, setModel] = useState('Nuevo Tera');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onReviewAdded) {
      onReviewAdded({
        advisor,
        author: `${author}, ${location}`,
        quote: comment,
        rating
      });
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#081224]/80 backdrop-blur-md"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-[#081224] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#005bc0] flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[20px]">rate_review</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-heading">
                Calificá tu Experiencia con LNG Olivieri
              </h3>
              <p className="text-xs text-slate-300">
                Tu opinión ayuda a futuros compradores y valida la atención de nuestros asesores
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

        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <span className="material-symbols-outlined text-[32px]">check_circle</span>
            </div>
            <h4 className="text-lg font-bold text-slate-900 font-heading mb-1">
              ¡Muchas Gracias por tu Reseña!
            </h4>
            <p className="text-sm text-slate-600">
              Tu calificación fue verificada y publicada con éxito.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-3.5">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Asesor que te atendió
              </label>
              <select
                value={advisor}
                onChange={(e) => setAdvisor(e.target.value)}
                className="w-full h-9 px-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 text-xs outline-none focus:ring-2 focus:ring-[#005bc0]"
              >
                <option value="Martin Morales">Martín Morales (Ventas 0km - Ramos Mejía)</option>
                <option value="Luciana Rossi">Luciana Rossi (Autoahorro - San Justo)</option>
                <option value="Gonzalo Benitez">Gonzalo Benítez (Ventas Usados - Ciudadela)</option>
                <option value="Equipo Postventa">Equipo de Recepción Taller (Florida/San Justo)</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Tu Nombre y Apellido
                </label>
                <input
                  type="text"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Ej. Martín P."
                  className="w-full h-9 px-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 text-xs outline-none focus:ring-2 focus:ring-[#005bc0]"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Localidad / Zona
                </label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Ej. Ramos Mejía, Haedo, Morón"
                  className="w-full h-9 px-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 text-xs outline-none focus:ring-2 focus:ring-[#005bc0]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Modelo Adquirido o Consultado
              </label>
              <input
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="Ej. Taos, Polo, Amarok, Usado"
                className="w-full h-9 px-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 text-xs outline-none focus:ring-2 focus:ring-[#005bc0]"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Calificación
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 text-amber-400 hover:scale-110 transition-transform cursor-pointer"
                  >
                    <span
                      className="material-symbols-outlined text-[26px]"
                      style={{ fontVariationSettings: rating >= star ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      star
                    </span>
                  </button>
                ))}
                <span className="text-xs font-bold text-slate-700 ml-2">
                  {rating} de 5 estrellas
                </span>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Tu Reseña / Comentario
              </label>
              <textarea
                required
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Contanos cómo fue el proceso de asesoramiento, tiempos de entrega y trato recibido..."
                className="w-full p-2.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 text-xs outline-none focus:ring-2 focus:ring-[#005bc0] resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="py-2 px-3.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="py-2 px-4 rounded-lg bg-[#005bc0] hover:bg-[#004493] text-white text-xs font-bold transition-colors shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">send</span>
                Publicar Reseña
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
