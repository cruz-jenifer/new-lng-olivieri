export interface Advisor {
  id: string;
  name: string;
  initials: string;
  photo: string;
  role: string;
  location: string;
  rating: number;
  reviewsCount: number;
  verified: boolean;
  featuredReview: {
    quote: string;
    author: string;
    location: string;
  };
}

export const ADVISORS: Advisor[] = [
  {
    id: 'martin-morales',
    name: 'Martín Morales',
    initials: 'MM',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    role: 'División Ventas 0km',
    location: 'Casa Central Ramos Mejía',
    rating: 4.9,
    reviewsCount: 42,
    verified: true,
    featuredReview: {
      quote: 'Excelente atención y claridad en los plazos de entrega. Me asesoró con total honestidad en la elección de mi nuevo Taos Highline.',
      author: 'Rodrigo G.',
      location: 'Ramos Mejía'
    }
  },
  {
    id: 'luciana-rossi',
    name: 'Luciana Rossi',
    initials: 'LR',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    role: 'Autoahorro & Entregas Programadas',
    location: 'Sucursal San Justo',
    rating: 5.0,
    reviewsCount: 38,
    verified: true,
    featuredReview: {
      quote: 'Claridad total con las cuotas y pasos de licitación. Me acompañó paso a paso hasta que retiré mi Polo Track en tiempo récord.',
      author: 'Valeria M.',
      location: 'Haedo'
    }
  }
];
