"use client";
import { orgHighlightsData } from "@/data/Obj/orghighlights";
import { container } from "app/_framerVariants/framerVariants";
import { motion } from "framer-motion";
import OrgHighlightCard from "./OrgHighlightCard";

export default function OrgHighlights() {
  return (
    <motion.div
    variants={container}
    initial={"hidden"}
    whileInView={"show"}
    className="lg:container mx-auto grid lg:grid-cols-12 gap-5 relative -top-20 px-2">
      {/* <OrgHighlightCard
        title={orgHighlightsData[0].title}
        text={orgHighlightsData[0].text}
        style={" col-span-12 xl:!col-span-4 "}
        icon={orgHighlightsData[0].icon}
      />
      <OrgHighlightCard
        title={orgHighlightsData[1].title}
        text={orgHighlightsData[1].text}
        style={" col-span-12 sm:col-span-6 xl:!col-span-3 "}
        icon={orgHighlightsData[1].icon}

        // style={` col-span-12 sm:col-span-6 xl:!col-span-3 `}
        // icon={<AiOutlineStar className="text-8xl mx-auto opacity-90" />}
      />
      <OrgHighlightCard
        title={orgHighlightsData[2].title}
        text={orgHighlightsData[2].text}
        style={" col-span-12 sm:col-span-6 xl:!col-span-5 "}
        icon={orgHighlightsData[2].icon}
      /> */}
      {orgHighlightsData.map((item) => (
        <OrgHighlightCard
          key={crypto.randomUUID()}
          style={item.style}
          title={item.title}
          text={item.text}
          icon={item.icon}
        />
      ))}
    </motion.div>
  );
}
