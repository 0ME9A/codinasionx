"use client";
import { childScaleReverse, noFramer } from "app/_framerVariants/framerVariants";
import { motion } from "framer-motion";
import Atropos from "atropos/react";
import Image from "next/image";

type imageType = {
  imgUrl: string;
  radius?: number;
  style?: string;
  alt: string;
  imgSize?: number[];
  framer?: boolean;
};
export default function AstroImg({
  imgUrl,
  alt,
  style,
  radius,
  imgSize = [100, 100],
  framer = true,
}: imageType) {
  return (
    <motion.figure
      variants={framer ? childScaleReverse : noFramer}
      className={`h-fit aspect-square bg-very-dark dark:bg-very-light shadow-lightShadow-md dark:shadow-darkShadow-md md:shadow-lightShadow-lg md:dark:shadow-darkShadow-lg ${style} ${ radius && `atropos-banner rounded-[${radius}px]`}`}>
      <Atropos
        activeOffset={40}
        shadowScale={0.8}
        highlight={true}
        className={`w-full h-full`}>
        <Image
          src={imgUrl}
          alt={`${alt} avatar`}
          width={imgSize[0]}
          height={imgSize[1]}
          style={{ borderRadius: `${radius || 0}px` }}
          className={`w-full h-full object-cover ${ radius && `!rounded-[${radius}px]`}`}
        />
      </Atropos>
    </motion.figure>
  );
}
