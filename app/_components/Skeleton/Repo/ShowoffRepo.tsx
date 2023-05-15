"use client";
import { container, scrollX } from "app/_framerVariants/framerVariants";
import { motion } from "framer-motion";

type showoffRepos = {
  order: number[];
  id: number;
};
export default function ShowoffRepo({ order, id }: showoffRepos) {
  return (
    <motion.div
      className={`grid grid-cols-12 gap-2 md:gap-8 xl:gap-10 rounded-[50px] hover:bg-white/50 dark:hover:bg-black/50 md:hover:bg-very-light dark:md:hover:bg-very-dark mx-auto`}
      variants={container}
      initial={"hidden"}
      whileInView={"show"}>
      <div
        className={`col-span-12 md:col-span-5 xl:col-span-6 aspect-square w-full h-full rounded-[50px] relative z-10 bg-gradient-to-l from-transparent to-white dark:to-dark dark:shadow-darkShadow-lg shadow-lightShadow-lg animate-pulse ${order && order.includes(id) ? " md:order-1 " : " md:-order-1 "}`}>
      </div>
      <div
        className={`col-span-12 md:col-span-7 xl:col-span-6 rounded-[50px] flex flex-col items-start gap-3 p-2 justify-center text-black dark:text-white`}>
        <div className={`pt-2 w-full flex gap-5`}>
          <motion.div
            variants={scrollX(-50)}
            className="w-24 h-6 rounded-full bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse">
          </motion.div>
          <motion.div
            variants={scrollX(-50)}
            className="w-24 h-6 rounded-full bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse">
          </motion.div>
        </div>
        <motion.div
          variants={scrollX(-50)}
          className="w-1/2 h-10 rounded-lg bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse">
        </motion.div>
        <motion.div
          variants={scrollX(-50)}
          className="w-full h-24 rounded-lg bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse">
        </motion.div>
        <div className={`pt-2 w-full flex gap-5`}>
          <motion.div
            variants={scrollX(-50)}
            className="w-32 h-10 rounded-full bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse">
          </motion.div>
          <motion.div
            variants={scrollX(-50)}
            className="w-32 h-10 rounded-full bg-gradient-to-l from-transparent to-white dark:to-dark animate-pulse">
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
