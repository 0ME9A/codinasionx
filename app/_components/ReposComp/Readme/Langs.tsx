"use client";
import { child } from "app/_framerVariants/framerVariants";
import { motion } from "framer-motion";
import Loading from "app/_components/Loading/Loading";
import Box from "app/_components/LayoutsComp/Box";

export default function Langs({ langs }: { langs: object | null }) {
  const langsArr = langs ? Object.keys(langs) : null;
  return (
    <Box title="Languages">
      {langsArr ? (
        <ul className="flex flex-wrap gap-1">
          {langsArr.map((item: string) => (
            <motion.li
              variants={child}
              key={crypto.randomUUID()}
              className="p-2 text-sm py-0 text-gray-700 dark:text-gray-300 bg-light/50 dark:bg-dark/50 rounded-full"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      ) : (
        <Loading basic={true} />
      )}
    </Box>
  );
}
