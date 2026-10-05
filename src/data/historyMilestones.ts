export interface Milestone {
  year: string;
  label: string;
  icon: string;
  tag: string;
  title: string;
  description: string;
  badges: string[];
  sideCard: {
    icon: string;
    bigText: string;
    subtitle: string;
    linkText: string;
    linkTarget: string;
  };
}

export const MILESTONES: Milestone[] = [
  {
    year: '1993',
    label: 'Fundación Inicial',
    icon: 'flag',
    tag: 'Nacimiento del Concesionario Oficial',
    title: '1993: Fundación y Primer Salón en Ramos Mejía',
    description: 'LNG Olivieri nace como respuesta a la creciente demanda de usuarios que buscaban un respaldo genuino para la icónica línea Volkswagen. Iniciando con una propuesta de transparencia comercial y peritaje riguroso, dimos los primeros pasos estableciendo bases que hoy sostienen tres décadas de lealtad.',
    badges: [
      'Designación Oficial VW Argentina',
      'Primer Salón Comercial Homologado',
      'Primeros 1.000 Clientes Satisfechos'
    ],
    sideCard: {
      icon: 'handshake',
      bigText: '1.ª Sede',
      subtitle: 'ZONA OESTE BONAERENSE',
      linkText: 'Conocer sucursales activas →',
      linkTarget: '#sucursales'
    }
  },
  {
    year: '2002',
    label: 'Sede San Justo',
    icon: 'account_balance',
    tag: 'Expansión Estratégica Territorial',
    title: '2002: Inauguración de Sucursal San Justo y Centro Autoahorro',
    description: 'Consolidación de nuestra presencia en La Matanza con la apertura de una sede integral modelo de más de 3.500 m². Incorporamos el centro neurálgico de Autoahorro Volkswagen y taller con bahías de servicio rápido para responder con agilidad.',
    badges: [
      '3.500 m² de Salón y Taller',
      'Centro Exclusivo de Autoahorro',
      'Certificación ISO 9001 de Procesos'
    ],
    sideCard: {
      icon: 'storefront',
      bigText: '2.ª Sede',
      subtitle: 'SAN JUSTO INTEGRAL',
      linkText: 'Ver detalles de San Justo →',
      linkTarget: '#sucursales'
    }
  },
  {
    year: '2012',
    label: 'Expansión Ciudadela',
    icon: 'build',
    tag: 'Ingeniería & Especialización Técnica',
    title: '2012: Mega Taller Ciudadela y Centro NORA Mayorista',
    description: 'Revolucionamos la postventa con la modernización de nuestro complejo sobre Av. Rivadavia, instalando cabinas de pintura presurizadas, banco de estiramiento computarizado y convirtiéndonos en nodo oficial de distribución NORA para talleres independientes.',
    badges: [
      'Cabina Térmica Homologada CESVI',
      'Centro Distribuidor NORA VW',
      'Líder en Venta de Repuestos Genuinos'
    ],
    sideCard: {
      icon: 'precision_manufacturing',
      bigText: 'NORA B2B',
      subtitle: 'DISTRIBUCIÓN OFICIAL MAYORISTA',
      linkText: 'Conocé Centro NORA →',
      linkTarget: '#nora-center'
    }
  },
  {
    year: '2018',
    label: 'Premio Postventa',
    icon: 'military_tech',
    tag: 'Máximo Reconocimiento Nacional',
    title: '2018: Galardón Diamante de Calidad Postventa Volkswagen',
    description: 'Volkswagen Argentina premia a LNG Olivieri como Concesionario Líder en Índice de Satisfacción al Cliente (CSI) y efectividad en diagnósticos de taller para toda la región metropolitana, consagrando el compromiso de nuestro equipo técnico.',
    badges: [
      'Premio Calidad CSI VW Argentina',
      'Técnicos Certificados Nivel Máster',
      'Más de 35.000 Unidades Entregadas'
    ],
    sideCard: {
      icon: 'workspace_premium',
      bigText: 'N.º 1 CSI',
      subtitle: 'CALIDAD EN POSTVENTA Y SERVICIO',
      linkText: 'Ver reseñas de clientes →',
      linkTarget: '#asesores'
    }
  },
  {
    year: '2024',
    label: 'Electromovilidad',
    icon: 'bolt',
    tag: 'Era Eléctrica & Transformación Digital',
    title: '2024: Preparados para el Futuro: Red ID., Tera y Conectividad',
    description: 'Instalación de cargadores de alta potencia para vehículos híbridos y eléctricos, habilitación de la preventa del Nuevo Tera y digitalización 100% de la gestión de turnos online y suscripciones a planes de ahorro desde cualquier dispositivo.',
    badges: [
      'Puntos de Carga Rápida Oficiales',
      'Lanzamiento Preventa Nuevo Tera',
      'Turnos Online en Menos de 2 Minutos'
    ],
    sideCard: {
      icon: 'electric_car',
      bigText: 'Era Eléctrica',
      subtitle: 'CONECTIVIDAD & NUEVO TERA',
      linkText: 'Consultar Preventa Tera →',
      linkTarget: '#contacto-directo'
    }
  }
];
