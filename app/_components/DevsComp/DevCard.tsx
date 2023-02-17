"use client";
import { childScale } from "app/_framerVariants/framerVariants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type DevType = {
  imgUrl: string;
  devName: string;
  target?: string;
};
export default function DevCard({
  imgUrl,
  devName,
  target = "_self",
}: DevType) {
  return (
    <motion.div
      className="space-y-1 p-2 hover:shadow-lg border-2 border-transparent relative group rounded-2xl overflow-hidden w-full hover:border-darkII dark:shadow-dark hover:bg-light dark:hover:bg-dark"
      variants={childScale}
    >
      <Link
        href={`/developers/${devName}`}
        target={target}
        className="grid justify-center"
      >
        <Image
          src={imgUrl}
          alt={`${devName} profile avatar`}
          width={"100"}
          height={"100"}
          className={`w-[80px] aspect-square rounded-full group-hover:shadow-2xl mx-auto object-cover  scale-90 group-hover:scale-100 group-hover:brightness-125`}
        />
        <span className="opacity-80 hover:opacity-100 text-center">
          {devName}
        </span>
      </Link>
    </motion.div>
  );
}
