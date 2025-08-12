export interface Property {
  id: number;
  price: number;
  location: string;
  status: 'Available' | 'Sold' | 'Rented';
  image: string;
  title?: string;
}

export interface Service {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  description: string;
  color: string;
}