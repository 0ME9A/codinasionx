"use client";
import { imgUrl } from "app/_functions/functions";
import Atropos from "atropos/react";
import Article from "./Article";
import Aside from "./Aside";
import Image from "next/image";
import { useState } from "react";
import { devsType, readmeType } from "app/repositories/[repo]/page";
import { motion } from "framer-motion";
import { childScale, container } from "app/_framerVariants/framerVariants";

type repoReadmeType = {
  repo: readmeType | null;
  langs: object | null;
  devs: devsType | null;
};
export default function Readme({ repo, langs, devs }: repoReadmeType) {
  const [aside, setAside] = useState<boolean>(false);
  return (
    <motion.div
      variants={container}
      initial={"hidden"}
      whileInView={"show"}
      className="lg:container mx-auto pt-0 pb-2 space-y-3"
    >
      <motion.div variants={childScale}>
        <Atropos className="relative bg-very-dark dark:bg-very-light">
          <Image
            src={imgUrl}
            height="2000"
            width={"2000"}
            alt="repo avatar"
            className="w-full h-[400px] object-cover"
          />
        </Atropos>
      </motion.div>
      <div className="flex gap-3 relative h-auto">
        <Article state={aside} setState={setAside} repo={repo} />
        <Aside
          state={aside}
          setState={setAside}
          repo={repo}
          langs={langs}
          devs={devs}
        />
      </div>
    </motion.div>
  );
}
