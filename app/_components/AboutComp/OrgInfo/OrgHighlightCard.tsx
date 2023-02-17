"use client";
import { IconType } from "react-icons/lib";
import Atropos from "atropos/react";
import { motion } from "framer-motion";
import {
  childScale,
  scrollScale,
  scrollY,
} from "app/_framerVariants/framerVariants";

type cardType = {
  text: string;
  title: string;
  icon: IconType | JSX.Element;
  style: string;
};
export default function OrgHighlightCard({
  icon,
  text,
  title,
  style,
}: cardType) {
  return (
    <motion.div
      className={`w-full dark:text-white rounded-[50px] bg-very-dark dark:bg-very-light text-center shadow-lg h-fit ${style} atropos-banner`}
      variants={childScale}
    >
      <Atropos activeOffset={40} shadowScale={0.8} highlight={true}>
        <article className={`p-6 xl:p-8 dark:bg-dark bg-very-light`}>
          <>
            {icon}
            <h3 className="text-3xl font-medium mt-5" data-atropos-offset="5">
              {title}
            </h3>
            <p
              className="mt-3 text-gray-700 dark:text-gray-300"
              data-atropos-offset="2"
            >
              {text}
            </p>
          </>
        </article>
      </Atropos>
    </motion.div>
  );
}
