export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Blusa "Serenidad"',
    price: 49.99,
    description: 'Una blusa ligera y cómoda, perfecta para encontrar tu paz interior. Hecha con 100% algodón orgánico.',
    image: 'https://placehold.co/400x600/F2E8C7/2B4916?text=Magia+Interna',
  },
  {
    id: '2',
    name: 'Pantalón "Raíces"',
    price: 79.99,
    description: 'Siente la conexión con la tierra con estos pantalones de lino. Diseño elegante y corte holgado para máxima comodidad.',
    image: 'https://placehold.co/400x600/535347/F2E8C7?text=Magia+Interna',
  },
  {
    id: '3',
    name: 'Vestido "Fluir"',
    price: 129.99,
    description: 'Un vestido versátil que se adapta a tu movimiento. Ideal para una tarde de meditación o una salida casual.',
    image: 'https://placehold.co/400x600/B36233/F2E8C7?text=Magia+Interna',
  },
  {
    id: '4',
    name: 'Chaqueta "Abrazo"',
    price: 149.99,
    description: 'Una chaqueta cálida que se siente como un abrazo. Hecha con materiales reciclados y un forro suave.',
    image: 'https://placehold.co/400x600/D78C31/2B4916?text=Magia+Interna',
  },
    {
    id: '5',
    name: 'Falda "Libertad"',
    price: 69.99,
    description: 'Una falda con un vuelo espectacular que te hará sentir libre. Estampado inspirado en la naturaleza.',
    image: 'https://placehold.co/400x600/2B4916/F2E8C7?text=Magia+Interna',
  },
  {
    id: '6',
    name: 'Camisa "Esencia"',
    price: 59.99,
    description: 'Vuelve a lo esencial con esta camisa de corte clásico. Un básico imprescindible en tu armario consciente.',
    image: 'https://placehold.co/400x600/F2E8C7/535347?text=Magia+Interna',
  },
];
