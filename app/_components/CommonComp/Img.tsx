"use client";
import { childScaleReverse } from "app/_framerVariants/framerVariants";
import { motion } from "framer-motion";
import Atropos from "atropos/react";
import Image from "next/image";

type imageType = {
  imgUrl: string;
  radius?: string;
  style?: string;
  alt: string;
};
export default function Img({ imgUrl, alt, style, radius }: imageType) {
  return (
    <motion.div
      variants={childScaleReverse}
      className={`h-fit aspect-square rounded-full bg-very-dark dark:bg-very-light shadow-lightShadow-md dark:shadow-darkShadow-md md:shadow-lightShadow-lg md:dark:shadow-darkShadow-lg atropos-banner ${style} ${radius}`}
    >
      <Atropos
        activeOffset={40}
        shadowScale={0.8}
        highlight={true}
      >
        <Image
          src={imgUrl}
          alt={`${alt} avatar`}
          width="400"
          height="400"
          className={`w-full h-full rounded-full object-cover ${radius}`}
        />
      </Atropos>
    </motion.div>
  );
}
