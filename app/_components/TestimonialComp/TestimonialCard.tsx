"use client";
import {
  child,
  childScale,
  container,
  scrollScale,
  scrollX,
} from "app/_framerVariants/framerVariants";
import Atropos from "atropos/react";
import { motion } from "framer-motion";
import Image from "next/image";

type testimonialType = {
  name: string;
  text: string;
  imgUrl: string;
  style?: string;
  profession: string;
};
export default function TestimonialCard({
  imgUrl,
  name,
  profession,
  text,
  style,
}: testimonialType) {
  return (
    <motion.div
      className={`grid grid-cols-12 p-2 gap-6 md:gap-0 container mx-auto left-[500px] ${style}`}
      variants={container}
      initial={"hidden"}
      whileInView={"show"}
    >
      <Atropos
        activeOffset={40}
        shadowScale={0.8}
        highlight={true}
        className={
          "md:col-span-5 md:p-[10%] col-span-12 w-28 md:w-full rounded-full overflow-hidden md:rounded-[50px] aspect-square atropos-banner relative z-20"
        }
      >
        <motion.div variants={childScale}>
          <Image
            src={imgUrl}
            width="400"
            height={"400"}
            alt={`Testimonial by ${name}`}
            className="object-cover w-full aspect-square rounded-[50px] shadow-lightShadow-xl dark:shadow-darkShadow-xl"
          />
        </motion.div>
      </Atropos>
      <article className="col-span-12 md:col-span-7 px-2 pr-[10%] flex text-black dark:text-white flex-col justify-center">
        <motion.h2 variants={child} className="text-2xl font-semibold">
          {name}
        </motion.h2>
        <motion.h3
          variants={child}
          className="text-gray-500 font-thin tracking-wider"
        >
          {profession}
        </motion.h3>
        <motion.p variants={child} className="opacity-90 mt-2">
          {text}
        </motion.p>
      </article>
    </motion.div>
  );
}
