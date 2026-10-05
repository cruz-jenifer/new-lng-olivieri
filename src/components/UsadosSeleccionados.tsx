import React, { useState } from 'react';
import { USED_CARS, UsedCar } from '../data/usedCars';

interface UsadosSeleccionadosProps {
  onSelectCar?: (carName: string) => void;
}

export const UsadosSeleccionados: React.FC<UsadosSeleccionadosProps> = ({ onSelectCar }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterBrand, setFilterBrand] = useState('Todas');
  const [filterYearMin, setFilterYearMin] = useState<number | ''>('');
  const [selectedCarModal, setSelectedCarModal] = useState<UsedCar | null>(null);

  // Available brands for filter
  const brands = ['Todas', 'Volkswagen', 'Toyota', 'Chevrolet', 'Fiat', 'Jeep', 'Audi', 'DS'];

  // Apply filters (NO PRICE FILTER)
  const filteredCars = USED_CARS.filter((car) => {
    if (filterBrand !== 'Todas' && car.brand.toLowerCase() !== filterBrand.toLowerCase()) {
      return false;
    }
    if (filterYearMin && car.year < filterYearMin) {
      return false;
    }
    return true;
  });

  // Muestra únicamente 1 fila visible de 3 a 4 unidades para evitar scroll vertical excesivo
  const itemsPerPage = 4;
  const totalPages = Math.max(Math.ceil(filteredCars.length / itemsPerPage), 1);
  const activePage = Math.min(currentPage, totalPages);
  const displayedCars = filteredCars.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  const handleConsultar = (car: UsedCar) => {
    if (onSelectCar) onSelectCar(car.fullName);
    const form = document.getElementById('contacto-directo');
    if (form) form.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-[#f7f9fb] py-8 border-t border-slate-200" id="usados">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Barra de Filtros compacta en una sola fila continua */}
        <div className="bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-[#005bc0]">
              <span className="material-symbols-outlined text-[20px]">verified</span>
              <span className="font-heading font-extrabold text-sm text-[#081224] whitespace-nowrap">
                Usados Seleccionados
              </span>
            </div>

            <div className="h-4 w-px bg-slate-200 hidden sm:block" />

            {/* Filtro Marca */}
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-slate-500 uppercase">Marca:</span>
              <select
                value={filterBrand}
                onChange={(e) => {
                  setFilterBrand(e.target.value);
                  setCurrentPage(1);
                }}
                className="h-7 px-2 rounded-lg border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-800 outline-none focus:ring-1 focus:ring-[#005bc0]"
              >
                {brands.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Filtro Año Mínimo */}
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-slate-500 uppercase">Año:</span>
              <select
                value={filterYearMin}
                onChange={(e) => {
                  setFilterYearMin(e.target.value ? Number(e.target.value) : '');
                  setCurrentPage(1);
                }}
                className="h-7 px-2 rounded-lg border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-800 outline-none focus:ring-1 focus:ring-[#005bc0]"
              >
                <option value="">Todos</option>
                <option value="2014">2014+</option>
                <option value="2017">2017+</option>
                <option value="2019">2019+</option>
                <option value="2021">2021+</option>
                <option value="2023">2023+</option>
              </select>
            </div>
          </div>

          {/* Contador y Controles de Paginación en la misma fila */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 font-semibold whitespace-nowrap">
              {filteredCars.length} unidades encontradas
            </span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={activePage === 1}
                aria-label="Página anterior de usados"
                className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">chevron_left</span>
              </button>
              <span className="text-xs font-bold text-slate-700 px-1">
                {activePage} / {totalPages}
              </span>
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={activePage === totalPages}
                aria-label="Página siguiente de usados"
                className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        {/* Fila única visible de 3 a 4 unidades (sin precios numéricos) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-4">
          {displayedCars.map((car) => (
            <article
              key={car.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-200 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Imagen pequeña en proporción horizontal */}
                <div className="relative h-32 bg-slate-100 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.fullName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <span className="absolute bottom-2 right-2 bg-[#081224]/85 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">photo_camera</span>
                    {car.photosCount}
                  </span>
                  <span className="absolute top-2 left-2 bg-[#081224] text-white text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                    Peritaje 150 Puntos
                  </span>
                </div>

                <div className="p-3">
                  <h3 className="font-heading font-extrabold text-xs text-[#081224] uppercase tracking-wide truncate mb-1">
                    {car.fullName}
                  </h3>

                  {/* Una sola línea horizontal para km, año y sede */}
                  <div className="text-[11px] text-slate-500 mb-2 truncate">
                    {car.km} • {car.year} • {car.branch}
                  </div>

                  {/* Estado / Garantía oficial (SIN PRECIOS) */}
                  <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold mb-2">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    <span>Documentación al día • Con garantía</span>
                  </div>
                </div>
              </div>

              {/* Botones de acción en una sola fila */}
              <div className="p-3 pt-0 flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => handleConsultar(car)}
                  className="flex-1 py-1.5 px-2 rounded-lg bg-[#081224] hover:bg-[#005bc0] text-white text-[11px] font-bold transition-colors cursor-pointer text-center truncate"
                >
                  Consultar Disponibilidad
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCarModal(car)}
                  className="py-1.5 px-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-[11px] font-semibold transition-colors cursor-pointer shrink-0"
                >
                  Ver Ficha
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Banner horizontal delgado de cierre: ¿Buscás otro vehículo? */}
        <div className="bg-slate-100 rounded-xl px-4 py-2.5 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#005bc0] text-[20px]">directions_car</span>
            <div>
              <strong className="text-[#081224]">¿Buscás otro vehículo?</strong>{' '}
              <span className="text-slate-600">
                Ingresan más de 30 unidades usadas garantizadas por semana a nuestra sede central.
              </span>
            </div>
          </div>
          <a
            href="#contacto-directo"
            className="py-1 px-3.5 rounded-lg bg-[#005bc0] hover:bg-[#004493] text-white text-xs font-bold transition-colors shrink-0"
          >
            Consultar Stock Semanal
          </a>
        </div>

        {/* Modal de Detalle de Usado (sin precios numéricos) */}
        {selectedCarModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#081224]/80 backdrop-blur-md"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedCarModal(null);
            }}
          >
            <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-150 border border-slate-200">
              <div className="relative h-48 bg-slate-100">
                <img
                  src={selectedCarModal.image}
                  alt={selectedCarModal.fullName}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setSelectedCarModal(null)}
                  className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
                <span className="absolute bottom-2.5 left-2.5 bg-[#081224] text-white text-[10px] px-2.5 py-0.5 rounded font-bold uppercase">
                  Peritaje 150 Puntos Aprobado
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-base text-[#081224] uppercase mb-1">
                  {selectedCarModal.fullName}
                </h3>
                <div className="text-xs text-slate-500 mb-3">
                  {selectedCarModal.km} • Año {selectedCarModal.year} • Sede {selectedCarModal.branch}
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 mb-4">
                  <div className="p-2 bg-slate-50 rounded-lg">
                    <strong>Combustible:</strong> {selectedCarModal.fuel || 'Nafta'}
                  </div>
                  <div className="p-2 bg-slate-50 rounded-lg">
                    <strong>Transmisión:</strong> {selectedCarModal.transmission || 'Manual'}
                  </div>
                </div>

                <div className="bg-emerald-50 text-emerald-800 p-2.5 rounded-lg text-xs font-semibold mb-4 border border-emerald-100 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  <span>Documentación al día, listo para transferir con garantía oficial</span>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      const car = selectedCarModal;
                      setSelectedCarModal(null);
                      handleConsultar(car);
                    }}
                    className="flex-1 py-2 rounded-xl bg-[#005bc0] text-white text-xs font-bold hover:bg-[#004493] text-center"
                  >
                    Cotizar Unidad
                  </button>
                  <a
                    href={`https://wa.me/5491149867488?text=${encodeURIComponent(`Hola, quisiera consultar disponibilidad por el usado ${selectedCarModal.fullName}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-4 rounded-xl bg-[#128C7E] text-white text-xs font-bold flex items-center justify-center gap-1.5"
                  >
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
