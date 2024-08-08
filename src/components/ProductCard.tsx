import { Product } from "@/types/Product";
import { motion } from "framer-motion";
import Image from "next/image";

type ProductCardProps = {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onFavorite?: (product: Product) => void;
};

export default function ProductCard({
  product,
  onAddToCart = () => {},
  onFavorite = () => {},
}: ProductCardProps) {
  return (
    <div className="flex max-w-sm flex-col items-start justify-center gap-6 p-2">
      <div className="relative w-full cursor-pointer rounded-xl bg-white px-8 pb-6 pt-16 shadow-md">
        <motion.button
          type="button"
          className="absolute right-3 top-4 rounded-full bg-black p-2"
          onClick={() => onFavorite(product)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            src={
              product.isFavorite
                ? "/icons/favorite-fill.svg"
                : "/icons/favorite.svg"
            }
            alt="Favorite"
            width={16}
            height={16}
          />
        </motion.button>
        <div className="h-[267px] w-full bg-[#D9D9D9]" />
      </div>
      <div className="flex w-full flex-col flex-nowrap items-start justify-between xl:flex-row xl:items-center">
        <h4 className="text-xl font-extrabold">{product.name}</h4>
        <p className="text-balance text-right text-xl font-extrabold">
          {product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </div>
      <p className="text-balance text-base">{product.description}</p>
      <div className="flex flex-row items-center justify-start gap-2">
        <ul className="flex flex-row items-center justify-start gap-1">
          {Array.from({ length: product.rating }, (_, i) => (
            <li key={i}>
              <Image src="/icons/star.svg" alt="star" width={16} height={16} />
            </li>
          ))}
        </ul>
        <p className="text-balance text-base">({product.reviews})</p>
      </div>
      <motion.button
        type="button"
        className={`flex flex-row items-center justify-center gap-3 rounded-full border px-6 py-2 text-base ${
          product.isAddedToCart
            ? "bg-[#AFE638] font-bold"
            : "border-black bg-white"
        }`}
        onClick={() => onAddToCart(product)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {product.isAddedToCart ? (
          "Added"
        ) : (
          <>
            <Image
              src="/icons/cart.svg"
              alt="shopping-cart"
              width={16}
              height={16}
            />
            Add to cart
          </>
        )}
      </motion.button>
    </div>
  );
}
