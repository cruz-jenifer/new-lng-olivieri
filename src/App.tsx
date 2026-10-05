/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { Gama0km } from './components/Gama0km';
import { OfertasDestacadas } from './components/OfertasDestacadas';
import { UsadosSeleccionados } from './components/UsadosSeleccionados';
import { ServiciosYCanales } from './components/ServiciosYCanales';
import { HistoriaRespaldo } from './components/HistoriaRespaldo';
import { SucursalesYContacto } from './components/SucursalesYContacto';
import { Footer } from './components/Footer';
import { TurnoModal } from './components/TurnoModal';
import { LoginModal } from './components/LoginModal';
import { ReviewModal } from './components/ReviewModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScrollEffects } from './components/ScrollEffects';
import { IntroLoader } from './components/IntroLoader';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isTurnoModalOpen, setIsTurnoModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [initialTurnoBranch, setInitialTurnoBranch] = useState('central');
  const [selectedModelForContact, setSelectedModelForContact] = useState('');

  const handleOpenTurno = (branch: string = 'central') => {
    setInitialTurnoBranch(branch);
    setIsTurnoModalOpen(true);
  };

  const handleSelectModel = (modelName: string) => {
    setSelectedModelForContact(modelName);
  };

  const handleSearchQuery = (query: string) => {
    if (!query) return;
    const qLower = query.toLowerCase();
    if (qLower.includes('usado') || qLower.includes('seminuevo')) {
      const el = document.getElementById('usados');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (qLower.includes('taller') || qLower.includes('turno') || qLower.includes('service') || qLower.includes('mantenimiento')) {
      const el = document.getElementById('postventa-servicios');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (qLower.includes('autoahorro') || qLower.includes('plan')) {
      const el = document.getElementById('autoahorro');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById('gama-modelos');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e] flex flex-col font-sans selection:bg-[#005bc0] selection:text-white relative">
      {/* Animación de intro estilo Netflix (2.0 segundos exactos) */}
      {showIntro && (
        <IntroLoader onComplete={() => setShowIntro(false)} />
      )}

      {/* 1. Header (Navegación superior unificada) */}
      <Header
        onOpenLogin={() => setIsLoginModalOpen(true)}
        onOpenTurno={() => handleOpenTurno('central')}
        onSearchQuery={handleSearchQuery}
      />

      <main className="flex-1 w-full">
        {/* 2. Hero (Slider principal + Canvas background con mouse sutil) */}
        <HeroSlider
          onOpenTurno={() => handleOpenTurno('central')}
          onReplayIntro={() => setShowIntro(true)}
        />

        {/* 3. Gama 0km (Modelos Volkswagen) */}
        <Gama0km onSelectModel={handleSelectModel} />

        {/* 4. Ofertas Destacadas y Oportunidades del Mes */}
        <OfertasDestacadas onSelectOffer={handleSelectModel} />

        {/* 5. Usados Seleccionados (Stock verificado 150 puntos) */}
        <UsadosSeleccionados onSelectCar={handleSelectModel} />

        {/* 6. Servicios Oficiales, Financiación y Canales B2B */}
        <ServiciosYCanales onOpenTurno={handleOpenTurno} />

        {/* 7. Historia & Respaldo Institucional (Diagrama de Hitos) */}
        <HistoriaRespaldo
          onOpenReview={() => setIsReviewModalOpen(true)}
          onContactAdvisor={(name) => handleSelectModel(`Atención con ${name}`)}
        />

        {/* 8. Sucursales y Contacto Directo */}
        <SucursalesYContacto preselectedModel={selectedModelForContact} />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Modales y Widgets */}
      <TurnoModal
        isOpen={isTurnoModalOpen}
        onClose={() => setIsTurnoModalOpen(false)}
        initialBranch={initialTurnoBranch}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />

      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
      />

      {/* WhatsApp Flotante */}
      <FloatingWhatsApp />

      {/* Botón flotante accesible para volver a ver la Intro de 2 segundos en cualquier momento */}
      <button
        type="button"
        onClick={() => setShowIntro(true)}
        className="fixed bottom-6 left-6 z-40 bg-[#081224]/90 hover:bg-[#005bc0] text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg border border-white/20 backdrop-blur-md flex items-center gap-1.5 transition-all cursor-pointer hover:scale-105"
        title="Reproducir animación de intro estilo Netflix (2s)"
      >
        <span className="material-symbols-outlined text-[16px] text-[#00d2ff]">play_circle</span>
        <span>Intro 2s</span>
      </button>

      {/* Efectos de scroll */}
      <ScrollEffects />
    </div>
  );
}
