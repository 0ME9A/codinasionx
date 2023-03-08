"use client";
import { container } from "app/_framerVariants/framerVariants";
import { random } from "app/_functions/functions";
import { events } from "@/data/events";
import { motion } from "framer-motion";
import Loading from "app/_components/Loading/Loading";
import Event from "app/_components/EventsComp/Event";

export default function page() {
  return events ? (
    <motion.div
      variants={container}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: true, amount: 0.1 }}
      className={`w-fit pt-32 px-2 dark:text-white text-black mx-auto`}
    >
      {events.map((item) => (
        <Event
          key={random()}
          id={item.id}
          type={item.type}
          title={item.title}
          description={item.description}
          url={item.url}
          date={item.date}
        />
      ))}
      {/* <EventBtn
        type={"lm"}
        isBtn={false}
        state={eventLimit}
        setState={setLimit}
      /> */}
    </motion.div>
  ) : (
    <Loading />
  );
}
