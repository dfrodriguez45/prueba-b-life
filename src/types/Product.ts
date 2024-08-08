export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  reviews: number;
  image: string;
  isFavorite?: boolean;
  isAddedToCart?: boolean;
};
