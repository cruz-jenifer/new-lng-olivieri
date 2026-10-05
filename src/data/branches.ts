export interface Branch {
  id: string;
  name: string;
  badge: string;
  type: string;
  address: string;
  postalCode: string;
  phone: string;
  phoneExt?: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  hours: string;
  services: string[];
  mapQuery: string;
  statusBadge: string;
}

export const BRANCHES: Branch[] = [
  {
    id: 'central',
    name: 'Casa Central Ramos Mejía / Ciudadela',
    badge: 'CASA CENTRAL',
    type: 'Salón 0km, Usados Seleccionados & Taller Oficial',
    address: 'Av. Rivadavia 12980, Ciudadela / Ramos Mejía, Buenos Aires',
    postalCode: 'B1702CHZ',
    phone: '(011) 4658-0000 / 5129-3300',
    phoneExt: 'int. 130 / 181',
    whatsapp: '5491146580000',
    whatsappDisplay: '+54 9 11 4658-0000',
    email: 'turnosservicios@lngolivieri.com.ar',
    hours: 'Lunes a Viernes de 09:00 a 19:00 hs | Sábados de 09:00 a 13:00 hs',
    services: ['Venta 0km', 'Usados Seleccionados', 'Taller Homologado', 'Repuestos Genuinos', 'Autoahorro'],
    mapQuery: 'Av.+Rivadavia+12980,+Ciudadela,+Buenos+Aires',
    statusBadge: 'Sede Central Activa | Salón Abierto'
  },
  {
    id: 'florida',
    name: 'Sucursal & Taller Florida',
    badge: 'GBA NORTE',
    type: 'Salón Comercial, Entrega & Postventa Especializada',
    address: 'Av. Mitre 333 / Laprida 3363, Florida, Vicente López, Buenos Aires',
    postalCode: 'B1603AAE',
    phone: '(011) 5531-0600',
    phoneExt: 'int. 200',
    whatsapp: '5491155405268',
    whatsappDisplay: '+54 9 11 5540-5268',
    email: 'turnosflorida@lngolivieri.com.ar',
    hours: 'Lunes a Viernes de 09:00 a 19:00 hs | Sábados de 09:00 a 13:00 hs',
    services: ['Ventas 0km', 'Mantenimiento Programado', 'Repuestos Legítimos', 'Atención Flotas'],
    mapQuery: 'Laprida+3363,+Florida,+Buenos+Aires',
    statusBadge: 'Sucursal Florida Activa | Salón Abierto'
  },
  {
    id: 'san-justo',
    name: 'Sucursal San Justo',
    badge: 'ZONA OESTE',
    type: 'Ventas 0km, Planes de Ahorro & Taller Integral',
    address: 'Diego Armando Maradona 3366, San Justo, Buenos Aires',
    postalCode: 'B1754BZN',
    phone: '(011) 5550-1100 / 5550-1140',
    whatsapp: '5491149867488',
    whatsappDisplay: '+54 9 11 4986-7488',
    email: 'postventasj@lngolivieri.com.ar',
    hours: 'Lunes a Viernes de 09:00 a 19:00 hs | Sábados de 09:00 a 13:00 hs',
    services: ['Venta 0km', 'Centro de Autoahorro', 'Taller Oficial', 'Mecánica Pesada Amarok'],
    mapQuery: 'Diego+Armando+Maradona+3366,+San+Justo,+Buenos+Aires',
    statusBadge: 'Sucursal San Justo Activa | Salón Abierto'
  },
  {
    id: 'usados-ciudadela',
    name: 'Sucursal Usados Seleccionados',
    badge: 'USADOS SELECCIONADOS',
    type: 'Peritaje 150 Puntos & Seminuevos Garantizados',
    address: 'Av. Rivadavia 12674, Ciudadela / Ramos Mejía, Buenos Aires',
    postalCode: 'B1702',
    phone: '(011) 5550-1113',
    whatsapp: '5491149867488',
    whatsappDisplay: '+54 9 11 4986-7488',
    email: 'usados@lngolivieri.com.ar',
    hours: 'Lunes a Viernes de 09:00 a 18:30 hs | Sábados de 09:00 a 13:00 hs',
    services: ['Tasación de Usados', 'Entrega Inmediata', 'Gestoría Integral', 'Financiación en Cuotas Fijas'],
    mapQuery: 'Av.+Rivadavia+12674,+Ciudadela,+Buenos+Aires',
    statusBadge: 'Playa de Usados Activa | Abierto'
  }
];
