export interface VWModel {
  id: string;
  name: string;
  category: 'suvw' | 'autos' | 'pickups';
  categoryLabel: string;
  segment: string;
  badge: string;
  engine: string;
  power: string;
  description: string;
  image: string;
  startingPrice: string;
  financePromo?: string;
  highlight: string;
}

export const VW_MODELS: VWModel[] = [
  // SUVW
  {
    id: 'tera',
    name: 'Nuevo Tera',
    category: 'suvw',
    categoryLabel: 'SUVW',
    segment: 'Segmento A0 SUV',
    badge: 'Lanzamiento 2025',
    engine: '1.0 TSI Turbo',
    power: '101 CV - 170 Nm',
    description: 'Vanguardia compacta, diseño audaz y la última generación de conectividad inteligente VW Play.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCm2-hltm0IQKD_8gqUWLkhz2aNmgFopJJUdimrGSxdBUoSU1tSp3K_2NbUws57V_GBgdaqEjF9pYY2Y8e9QsW8-TRSoe-OpKmd0c2x7E32nxtbhkXYd2fw1DqY7cQgDKRxNopkE7VRJHauLESEEJBmK2K98bk77IbbImzh5nLHP_WuXect7jRbhsG92pF8Qb9BkaqZAWhJUEQ0dFogcXd9gyUqBgx4frTi0pn2p9U734j3DTAZn1SEnVIb1TPVx4y7DTZMY3Tp0NjWxj4',
    startingPrice: '$ 31.200.000',
    financePromo: 'Tasa 0% en 18 meses • Financiá hasta $15.500.000',
    highlight: 'Preventa Exclusiva con cupos limitados'
  },
  {
    id: 'taos',
    name: 'Taos Highline',
    category: 'suvw',
    categoryLabel: 'SUVW',
    segment: 'SUV Mediano',
    badge: 'Producción Nacional',
    engine: '250 TSI 1.4 Turbo',
    power: '150 CV - 250 Nm',
    description: 'Confort de clase superior, asistencias avanzadas a la conducción IQ.Drive y el baúl más amplio del segmento.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcPP4cD76FNc-mThMvkKHSTvaesjReCSVvpuV8TjZ2srqSsw0C8NZXBuDr3IbUm3m7mRikk8m-xEeAxIB2LFuLouwXipBhiYrbruMpEIN2rHBLUNq2-bM6cNMqaACagE4jJTek2hNESyGqN60naR7OSpl1JQ7R-jvBBqsz6z3fj_orhndj9fHBpAkhgOUi8EKH1THQQxtbnryCUFJzo5lMv7tVYNMER4aKX1gZVGU4i6kMbDtiPuvzrR5gFylCzM0srlHE38u8-zLeorw',
    startingPrice: '$ 53.100.000',
    financePromo: 'Tasa 0% en 18 meses • Financiá hasta $20.000.000',
    highlight: 'Fabricado en Planta Pacheco con 5 estrellas Latin NCAP'
  },
  {
    id: 't-cross',
    name: 'Nuevo T-Cross',
    category: 'suvw',
    categoryLabel: 'SUVW',
    segment: 'SUV Urbano',
    badge: '5 Estrellas NCAP',
    engine: '170 TSI / 200 TSI',
    power: 'Hasta 116 CV',
    description: 'El SUV urbano por excelencia, renovado con firma lumínica LED delantera y conectividad total.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVnPZRqCLZZiKCeY3mklTMJqHUMrMYzDCWuXCT_8vBuWUbpWtRvUzRzuzjK_xShq8kxQ2t3zJsMkL2zH0fwgLn8gwjQAo9pm5ghwUvpq24MeS_jN62wgwoGpp4pS03-jWN_fVO1y8Q8eO20wExzZrs_5lqKO_yHNJogg8yAwziQF4fg581VcElke21gW4EIwP-vcHb0E9YYiwnul4Gr8SjnACHYRFlK7rfaT_Xttplb_Yyu6wOPoEFZV2h78G7Mp0HB4F8M4zjp-aC_9A',
    startingPrice: '$ 37.400.000',
    financePromo: 'Tasa 0% en 18 meses • Financiá hasta $15.500.000',
    highlight: 'Eficiencia urbana con baúl modular'
  },
  {
    id: 'tiguan',
    name: 'Tiguan Allspace',
    category: 'suvw',
    categoryLabel: 'SUVW',
    segment: 'SUV Premium 7 Plazas',
    badge: '7 Asientos',
    engine: '350 TSI 2.0 Turbo 4Motion',
    power: '220 CV - Tracción 4x4',
    description: 'El SUVW a la altura de tu historia con tres filas de asientos y tracción integral inteligente.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBg_GbD574qeA5xgDuaZV2ycvYG7sWjofc9VroO_3XmMapELdipWid-afNdekkC4HOZXzs-yANbfqAgAOsypdP4u865ZeKTQGMqx0mFrWOtGQVkP_eEVd0XLU2i9zYJcYUsZOZlKFYxaS44sr-sUa1sUJOnP5KmLzLuWvsAWWiTbvMz_tX9jpdD9FH-sd__HqQMoOCwE85nNgG2Cz49xhbmdvIIP6bD5S6UF5d0Fr7GzKRtu7pnVDoR3SA4PxtLi_E3D3_iFirKWlq79b4',
    startingPrice: '$ 68.500.000',
    financePromo: 'Planes comerciales especiales y entrega programada',
    highlight: 'Espacio familiar de lujo con tracción 4Motion'
  },

  // AUTOS
  {
    id: 'polo-track',
    name: 'Polo Track',
    category: 'autos',
    categoryLabel: 'Autos',
    segment: 'Hatchback',
    badge: 'Más Elegido',
    engine: '1.6 MSI 16V',
    power: '110 CV',
    description: 'El vehículo más económico y confiable de la familia VW, con despeje elevado y robustez legendaria.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-vNCepMmYkGpNqmkIR3Qb6BsCDUIYmiBuhwRaANghsd5yQYjxisSe1DyjKczita33h3W1X2mvqxvP4wCLGpNVX54QXuGUln1_xjhZq0gFIePJ00nQKmk4NrZr1Br_d2Slx3y-feyoDj0N7FX4ihQ-3UGd4UMZPRagJ3pMOUrg5lvog6hcrD9AQgrm6Vd0VPwMaCuZnkPWBVYQDkufH8U-VfS84tFl7DEjpmS94Cw1Jt42GCt5j-aG5XFL3Kjl-fPnk7bc9uw-5o0PdY0',
    startingPrice: '$ 28.900.000',
    financePromo: 'Disponible para entrega inmediata y Autoahorro',
    highlight: 'Bajo costo de mantenimiento y máximo rendimiento'
  },
  {
    id: 'polo-highline',
    name: 'Nuevo Polo Highline',
    category: 'autos',
    categoryLabel: 'Autos',
    segment: 'Hatchback Premium',
    badge: 'VW Play 10"',
    engine: '170 TSI Turbo',
    power: '101 CV - Caja AT 6 marchas',
    description: 'Conectividad inalámbrica VW Play, tablero 100% digital Active Info Display y climatizador táctil Climatronic.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAssawHG2EN_wi7jUnLeyOOvoldj5kETRwUPbbWevNodCtWWGEInOsLS6FggGYOOO40eifXMmsgQGXVYnllpKt1fyzFuCjejbo9mSi5gbbYcEiWPLXCpCMYroxmdqGgn-_cT58uouSlqXWBTKG2YmK3-viqP7cjOxdQAj11P8OeRUakX-yseYvVt0s5clyP8f5x5uvKdxHL502_UaSVmf6siJSRi1_DsrjWR3BtOGjeh7pnutAdvoOkeHsxUkYbp4zFmco4PIuZg8A-X_A',
    startingPrice: '$ 36.800.000',
    financePromo: 'Tasa 0% en 18 meses • Financiá hasta $20.000.000',
    highlight: 'Tablero Digital 10" y caja automática Tiptronic'
  },
  {
    id: 'vento-gli',
    name: 'Vento GLI 350 TSI DSG',
    category: 'autos',
    categoryLabel: 'Autos',
    segment: 'Sedán Deportivo',
    badge: 'Deportivo 230 CV',
    engine: '2.0 TSI 4 Cilindros',
    power: '230 CV - 350 Nm',
    description: 'El sedán deportivo icónico con transmisión DSG de 7 velocidades, bloqueo de diferencial VAQ y sonido deportivo.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCasxs8WgzCyghRX5CJhz9ppfG3kA2s87eQXzuamPYkQY1Bjov9dFZC-RDuLdrujlAzoN1A23ncBRif0jb_CIteRvGHsU3tXv56BxAAKa_fxJX0UOmOf78dJlQ6bcV-wut1WdLPWDLy5bRGSyw3H2OZePvfZLTnaGS9cQ7Gwh42WjxsFDkDn8Z5SL2KwG3yVFE_uFzzeZDP_e5OZP_uUQdeV_aPJayayU-01gW9blAT-AXYLB1hcyVU4g',
    startingPrice: '$ 60.000.000',
    financePromo: 'Tasa subsidiada y bonificación especial contado',
    highlight: 'Aceleración de 0 a 100 km/h en 6,7 segundos'
  },

  // PICK-UPS
  {
    id: 'amarok-v6',
    name: 'Nueva Amarok V6 4Motion',
    category: 'pickups',
    categoryLabel: 'Pick-Ups',
    segment: 'Pick-Up Mediana',
    badge: 'Líder Potencia 258 CV',
    engine: '3.0 TDI V6 Turbo',
    power: '258 CV (Overboost 272 CV) - 580 Nm',
    description: 'La pick-up más potente y confortable de la Argentina. Tracción permanente 4Motion y caja automática de 8 velocidades.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjZqbwqBrVynklxAlV41qo11oP61q53_nG5DwF9sCBI1gfPquX5SsTqJQNQMOofXVpTTbTAUn6tAbLackt01zQuDwL8-FFloidLszPyC04DWm3RxSYkEaZlnKI922dv2K_Hy4JkoA6bbZpDhEGA2xMNm46yWqC--J23XgPe15b-Zj2eluHrOYVFmLnVF2wDC_LthYxmtbCoRs8JZnoLte_Emq1BbQ21jkZ1xEpFNRR1FRMFJyRQGc9M49EpzaSF8L5Nhw',
    startingPrice: '$ 57.900.000',
    financePromo: 'Tasa 0% en 18 meses • Financiá hasta $24.500.000',
    highlight: 'Primeros 3 servicios de mantenimiento 100% bonificados'
  },
  {
    id: 'amarok-20',
    name: 'Amarok 2.0 TDI Trendline',
    category: 'pickups',
    categoryLabel: 'Pick-Ups',
    segment: 'Pick-Up de Trabajo',
    badge: 'Trabajo y Confort',
    engine: '2.0 TDI Turbo Diesel',
    power: '140 CV / 180 CV',
    description: 'La herramienta infalible para el agro y la industria. Máxima capacidad de carga y suspensión reforzada.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWIOlNXT8SXAz4b4F3LddQJz1DPOco-w730W_viuiT8n0ddPTBWMLH5eMICcc6k0k66-x70vn3aZ8VgYbOubhqSBV_no3yeqvJ-aCeLDsybtbybF08nwzU1AjhkWRJZNlZTQQUO1mlaDv5DLTH0M7WY_MMv7ljjsnv1KfcgbrHVrg5_Us7-lKBZrTu7NPfe3XRvy_9GWfsFpuGsWIJDHHyjFzFw8N4p-XCnoSFQcI5-bAtrk1NUCdSgQ',
    startingPrice: '$ 45.000.000',
    financePromo: 'Tasa 0% en 18 meses • Financiá hasta $26.000.000',
    highlight: 'Mano de obra bonificada en 3er y 4to service'
  },
  {
    id: 'saveiro',
    name: 'Nueva Saveiro Cabina Doble',
    category: 'pickups',
    categoryLabel: 'Pick-Ups',
    segment: 'Pick-Up Compacta',
    badge: 'Versátil y Robusta',
    engine: '1.6 MSI 16V',
    power: '110 CV',
    description: 'Perfecta combinación entre vehículo urbano de uso personal y capacidad de carga utilitaria para tu negocio.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAdr1C4Mp2fbSB9YUYgijjo3rX7FFq9xOtwYIWzAMaMWXeemAAwylWf3enRX7uIAmsVGsR4u-DI0L6MFSLJ330Q_GVnAF6l21dxz6caY4PljN3S3WeTyyMwN8HaMXQqoiDfiBah2cW4_GLPFn7R3fGGEaujFu6v5pTiS5Ez2v6mbTNuqYaB3oS2EPOhONEhI9ZAISVHZZkG6Fj-s3zy5w_vpWlKZ3xzUKN7STRE9gTs3g8GP8G8NYeIg',
    startingPrice: '$ 33.000.000',
    financePromo: 'Tasa 0% en 18 meses • Financiá hasta $15.500.000',
    highlight: 'Control de estabilidad ESP y frenos a disco en las 4 ruedas'
  }
];
