"use client";
import { container } from "app/_framerVariants/framerVariants";
import { events } from "@/data/Obj/events";
import { motion } from "framer-motion";
import { useState } from "react";
import Loading from "../Loading/Loading";
import EventBtn from "./EventBtn";
import Event from "./Event";

export default function Events() {
  const [eventLimit, setLimit] = useState<number>(3);

  return events ? (
    <motion.div
      variants={container}
      initial={"hidden"}
      whileInView={"show"}
      className={`w-fit pt-32 px-2 dark:text-white text-black mx-auto`}
    >
      {events.slice(0, eventLimit).map((item) => (
        <Event
          key={crypto.randomUUID()}
          id={item.id}
          type={item.type}
          title={item.title}
          description={item.description}
          url={item.url}
          date={item.date}
        />
      ))}
      <EventBtn
        type={"lm"}
        isBtn={false}
        state={eventLimit}
        setState={setLimit}
      />
    </motion.div>
  ) : (
    <Loading />
  );
}
