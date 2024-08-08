"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import CategoryIconLabel from "@/components/CategoryIconLabel";
import CategoryListItem from "@/components/CategoryListItem";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES, CATEGORIESLIST, PRODUCTS, SETTINGS_SLIDER } from "@/constants";
import { Product } from "@/types/Product";

export default function Home() {
  const [products, setProducts] = useState(PRODUCTS);
  const sliderRef = useRef<Slider | null>(null);

  function handleNext() {
    sliderRef.current?.slickNext();
  }

  function handlePrev() {
    sliderRef.current?.slickPrev();
  }

  function handleFavorite(product: Product) {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === product.id
          ? { ...item, isFavorite: !item.isFavorite }
          : item,
      ),
    );
  }

  function handleAddToCart(product: Product) {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === product.id
          ? { ...item, isAddedToCart: !item.isAddedToCart }
          : item,
      ),
    );
  }

  return (
    <>
      {/* Banner */}
      <section className="max-h-lvh w-full overflow-hidden bg-neutral-100 px-6 py-14 md:px-20 xl:px-40">
        <div className="relative m-auto flex max-w-5xl flex-col flex-nowrap gap-8">
          <h2 className="whitespace-pre-line text-balance font-prompt text-5xl leading-snug lg:w-1/2">
            Grab{" "}
            <span className="inline-block w-min -rotate-3 rounded-3xl bg-primary px-5 py-2 text-white">
              50%
            </span>{" "}
            Off Smartphone Collection
          </h2>
          <p className="text-balance text-lg font-normal lg:w-1/2">
            Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus
            vitae leo nunc.
          </p>
          <div className="flex flex-row items-center justify-start gap-4">
            <Image src="/Xiphone-14.png" alt="apple" width={137} height={137} />
            <h3 className="md:max-w-[20%] text-3xl font-semibold">
              Xiphone 14 Edition
            </h3>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 0, y: 100, rotate: 6 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 6 }}
            transition={{ duration: 0.6 }}
            className="right-0 w-1/2 lg:absolute"
          >
            <Image
              src="/mobile.png"
              alt="mobile"
              width={546.42}
              height={762.85}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 450, y: 600 }}
            animate={{ opacity: 1, x: 450, y: 300 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:absolute w-40"
          >
            <Image
              src="/mobile-tag.png"
              alt="mobile-tag"
              width={215}
              height={175.98}
            />
          </motion.div>
        </div>
      </section>
      {/* Categories */}
      <section className="flex flex-col gap-10 px-6 py-14 md:px-16 xl:px-28">
        <h2 className="text-center font-prompt text-5xl">
          What <span className="text-primary">we</span> provide?
        </h2>
        <ul className="flex flex-row flex-wrap items-start justify-center gap-20">
          {CATEGORIES.map((category) => (
            <motion.li
              key={category.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
              }}
              transition={{
                duration: 0.3,
              }}
              className="cursor-pointer"
            >
              <CategoryIconLabel {...category} />
            </motion.li>
          ))}
        </ul>
      </section>
      {/* Products */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        transition={{
          duration: 0.75,
          delay: 0.25,
        }}
        className="flex flex-col gap-10 overflow-x-hidden px-6 py-14 md:px-16 xl:px-28"
      >
        <div className="flex flex-row items-center justify-between gap-4">
          <h3 className="text-start font-prompt text-4xl">
            New <span className="text-primary">arrival</span> for you
          </h3>
          <div className="hidden space-x-3 md:inline-block">
            <motion.button
              type="button"
              className="rounded-full border border-black p-2"
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
            >
              <Image
                src="/icons/arrow-left.svg"
                alt="arrow-left"
                width={16}
                height={16}
              />
            </motion.button>
            <motion.button
              type="button"
              className="rounded-full bg-[#AFE638] p-2"
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
            >
              <Image
                src="/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </motion.button>
          </div>
        </div>

        <div className="flex flex-col gap-10 md:flex-row">
          <ul className="text-nowrap pt-10">
            {CATEGORIESLIST.map((category) => (
              <CategoryListItem key={category.id} {...category} />
            ))}
          </ul>

          <div className="space-x-3 md:hidden">
            <motion.button
              type="button"
              className="rounded-full border border-black p-2"
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
            >
              <Image
                src="/icons/arrow-left.svg"
                alt="arrow-left"
                width={16}
                height={16}
              />
            </motion.button>
            <motion.button
              type="button"
              className="rounded-full bg-[#AFE638] p-2"
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
            >
              <Image
                src="/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </motion.button>
          </div>

          <div className="slider-container">
            <Slider ref={sliderRef} {...SETTINGS_SLIDER}>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onFavorite={handleFavorite}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </Slider>
          </div>
        </div>
      </motion.section>
      <Footer />
    </>
  );
}
