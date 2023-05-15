import { childScale, scrollHeight, scrollX } from "app/_framerVariants/framerVariants";
import { eventsType } from "app/_types/Events";
import { icons } from "@/data/eventsIcon";
import { motion } from "framer-motion";
import BasicLink from "../Links&Btns/BasicLink";

export default function Event({ id, type, title, description, url, date }: eventsType) {
  return (
    <div className="w-fit">
      <div className="relative z-[50] grid grid-flow-col justify-center items-start gap-3 w-fit">
        <motion.p
          className="mt-1 h-fit text-right truncate w-[30px] sm:w-[100px]"
          title={date}
          variants={scrollX(50)}>
          {date}
        </motion.p>
        <div className="h-full flex flex-col justify-start items-center">
          <motion.div
            className={`rounded-full glow relative z-10 animate-wiggle bg-gray-500`}
            style={{ background: icons[type].color }}
            variants={childScale}>
            {icons[type].type}
          </motion.div>
          <motion.span
            className="h-full w-2 bg-very-light dark:bg-very-dark  origin-top"
            variants={scrollHeight("110%")}>
          </motion.span>
        </div>
        <div className="max-w-[700px] pb-10" title={title}>
          <motion.h2 className="text-2xl" variants={scrollX(-50)}>
            {title}
          </motion.h2>
          <motion.p
            className="pb-2 text-gray-700 dark:text-gray-300"
            variants={scrollX(-50)}>
            {description}
          </motion.p>
          <motion.span variants={scrollX(-50)}>
            <BasicLink title={`Github`} href={url}>
              GitHub
            </BasicLink>
          </motion.span>
        </div>
      </div>
    </div>
  );
}
