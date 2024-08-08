import { motion } from "framer-motion";
import Image from "next/image";

type CategoryIconLabelProps = {
  icon: string;
  label: string;
};

export default function CategoryIconLabel({
  icon,
  label,
}: CategoryIconLabelProps) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="m-auto flex size-20 items-center justify-center rounded-full bg-white shadow-md">
        <Image
          src={icon}
          alt={label}
          width={40}
          height={40}
          className="w-auto"
        />
      </div>
      <p className="mt-4 text-center text-lg font-medium">{label}</p>
    </motion.div>
  );
}
