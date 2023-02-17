import { Dispatch, SetStateAction } from "react";
import { icons } from "@/data/Obj/eventsIcon";
import { motion } from "framer-motion";
import {
  childScale,
  scrollHeight,
  scrollX,
} from "app/_framerVariants/framerVariants";
import BasicLink from "../Links/BasicLink";

type eventsType = {
  type: string;
  isBtn: boolean;
  state: number;
  setState: Dispatch<SetStateAction<number>>;
};

export default function EventBtn({ type, isBtn, state, setState }: eventsType) {
  return (
    <div className="w-fit">
      <div className="relative z-[50] grid grid-flow-col justify-center items-start gap-3 w-fit">
        <motion.span
          className="mt-1 h-fit text-right truncate w-[30px] sm:w-[100px]"
          variants={scrollX(50)}
        ></motion.span>
        <div className="h-full flex flex-col justify-start items-center">
          <motion.div
            className={`rounded-full glow relative z-10 animate-wiggle animate-spin bg-purple-500`}
            variants={childScale}
          >
            {icons[type].type}
          </motion.div>
          <motion.span
            className="h-full w-2 bg-very-light dark:bg-very-dark  origin-top"
            variants={scrollHeight("110%")}
          ></motion.span>
        </div>
        <motion.div
          className="max-w-[700px] w-full pb-10"
          variants={scrollX(-50)}
        >
          {isBtn ? (
            <BasicLink href={"/events"} target={"_blank"}>
              Load more...
            </BasicLink>
          ) : (
            <button className="pt-1" onClick={() => setState(state + 2)}>
              Load More...
            </button>
          )}
        </motion.div>
      </div>
    </div>
  );
}
