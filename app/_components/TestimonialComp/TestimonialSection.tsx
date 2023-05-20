"use client";
import { scrollX } from "app/_framerVariants/framerVariants";
import { testimonialType } from "app/_types/Testimonial";
import { testimonialList } from "@/data/testimonial";
import { random } from "app/_functions/functions";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import Header from "../CommonComp/header";


export default function TestimonialSection({ header }: { header?: boolean }) {
  const [testimonialId, setTestimonialId] = useState<number>(1);

  useEffect(() => {
    setTimeout(() => {
      if (testimonialId >= testimonialList.length) { setTestimonialId(1); }
      else { setTestimonialId(testimonialId + 1); }
    }, 10000);
  }, [testimonialId]);

  return (
    <section className="p-5 px-3">
      {header &&
        <Header
          title={"Testimonial"}
          subTitle={"Some words from our users"}
          animateDirection={"l"}
          style={`xl:container mx-auto`}
        />
      }
      <div className="xl:container mx-auto bg-very-light dark:bg-very-dark grid grid-cols-12">
        <ul className="col-span-12 md:col-span-11">
          {testimonialList.map((item: testimonialType) =>
            item.id === testimonialId && (
              <li key={random()}>
                <TestimonialCard
                  imgUrl={item.imgUrl}
                  name={item.name}
                  profession={item.profession}
                  text={item.text}
                  style={`grayscale  ${item.style}`}
                />
              </li>
            )
          )}
        </ul>
        <ul className="col-span-12 flex md:col-span-1 md:flex-col mt-5 md:mt-0 justify-center items-center gap-2 ">
          {testimonialList.map((item: testimonialType) => (
            <motion.li
              title={`Testimonial ${testimonialId}`}
              key={random()}
              className={`w-5 aspect-square shadow-lg dark:glowI rounded-full border block bg-lightII dark:bg-dark border-black dark:border-white ${testimonialId === item.id ? "glowI" : ""}`}
              style={{ opacity: testimonialId === item.id ? 1 : 0.5 }}
              variants={scrollX(-50)}
              initial="offscreen"
              whileInView={"onscreen"}>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
