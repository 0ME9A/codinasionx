"use client";
import { container } from "app/_framerVariants/framerVariants";
import { orgHighlightsData } from "@/data/Obj/orghighlights";
import { random } from "app/_functions/functions";
import { motion } from "framer-motion";
import OrgHighlightCard from "./OrgHighlightCard";

export default function OrgHighlights() {
  return (
    <motion.div
    variants={container}
    initial={"hidden"}
    whileInView={"show"}
    className="lg:container mx-auto grid lg:grid-cols-12 gap-5 relative -top-20 px-2">
      {orgHighlightsData.map((item) => (
        <OrgHighlightCard
          key={random()}
          style={item.style}
          title={item.title}
          text={item.text}
          icon={item.icon}
        />
      ))}
    </motion.div>
  );
}
