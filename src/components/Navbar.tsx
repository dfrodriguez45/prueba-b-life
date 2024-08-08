"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row flex-nowrap items-center justify-between bg-white px-6 py-5 md:px-16 xl:px-28">
      <Image src="/logo.svg" alt="logo" width={130} height={100} />
      <ul className="hidden flex-col flex-nowrap items-center gap-6 p-4 text-xs font-semibold text-neutral-500/80 lg:flex lg:flex-row">
        <li className="p-4">
          <Link href="/" className="hover:underline">
            HOME
          </Link>
        </li>
        <li className="p-4">
          <Link href="/" className="hover:underline">
            PRICING
          </Link>
        </li>
        <li className="p-4">
          <Link href="/" className="hover:underline">
            EVENTS
          </Link>
        </li>
        <li className="p-4">
          <Link href="/" className="hover:underline">
            COMPANY
          </Link>
        </li>
      </ul>
      <div className="hidden flex-row flex-nowrap gap-6 lg:flex">
        <button
          type="button"
          className="p-4 text-xs font-semibold text-neutral-500/80 hover:underline"
        >
          LOGIN
        </button>
        <motion.button
          type="button"
          className="font-base flex flex-row items-center justify-center gap-2 text-nowrap rounded-full bg-black px-8 py-4 text-xs text-white"
          whileTap={{
            scale: 0.9,
          }}
        >
          Sign Up Now
          <Image
            src="/icons/arrow-down.svg"
            alt="arrow-down"
            width={16}
            height={16}
          />
        </motion.button>
      </div>
      <button type="button" className="lg:hidden">
        <Image src="/icons/menu.svg" alt="menu" width={24} height={24} />
      </button>
    </nav>
  );
}
