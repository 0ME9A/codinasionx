"use client";
import { childScale } from "app/_framerVariants/framerVariants";
import { orgHighlightCardType } from "app/_types/About";
import { motion } from "framer-motion";

export default function HighlightCard({ icon, text, title, style }: orgHighlightCardType) {
  return (
    <motion.article
      title={title}
      className={`w-full dark:text-white rounded-3xl lg:rounded-[50px] p-6 xl:p-8 border-2 border-transparent hover:dark:border-black hover:border-white dark:bg-very-dark bg-very-light text-center shadow-xl shadow-gray-500/10 h-fit ${style}`}
      variants={childScale}>
      <>
        {icon}
        <h3 title={title} className="text-3xl font-medium mt-5" data-atropos-offset="5">
          {title}
        </h3>
        <p
          className="mt-3 text-gray-700 dark:text-gray-300"
          data-atropos-offset="2">
          {text}
        </p>
      </>
    </motion.article>
  );
}