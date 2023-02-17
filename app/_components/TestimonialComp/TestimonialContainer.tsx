"use client";
import { testimonialList } from "@/data/Obj/obj";
import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import Header from "../CommonComp/header";
import { motion } from "framer-motion";
import { child, scrollX } from "app/_framerVariants/framerVariants";

export default function TestimonialContainer() {
  const [testimonialId, setTestimonialId] = useState<number>(1);

  useEffect(() => {
    setTimeout(() => {
      if (testimonialId >= testimonialList.length) {
        setTestimonialId(1);
      } else {
        setTestimonialId(testimonialId + 1);
      }
    }, 10000);
  }, [testimonialId]);

  return (
    <div>
      <div className="lg:container mx-auto p-3 lg:p-5">
        <Header
          title={"Testimonial"}
          subTitle={"Some words from our users"}
          animateDirection={"l"}
        />
      </div>
      <div className="bg-very-light dark:bg-very-dark">
        <div className="container mx-auto grid grid-cols-12 py-5">
          <div className="col-span-12 md:col-span-11">
            {testimonialList.map(
              (item) =>
                item.id === testimonialId && (
                  <TestimonialCard
                    imgUrl={item.imgUrl}
                    name={item.name}
                    profession={item.profession}
                    text={item.text}
                    style={`grayscale  ${item.style}`}
                    key={crypto.randomUUID()}
                  />
                )
            )}
          </div>
          <div className="col-span-12 flex md:col-span-1 md:flex-col mt-5 md:mt-0 justify-center items-center gap-2 ">
            {testimonialList.map((item) => (
              <motion.span
                key={crypto.randomUUID()}
                className={`w-5 aspect-square shadow-lg dark:glowI rounded-full border block bg-lightII dark:bg-dark border-black dark:border-white ${
                  testimonialId === item.id ? "glowI" : ""
                }`}
                style={{ opacity: testimonialId === item.id ? 1 : 0.5 }}
                variants={scrollX(-50)}
                initial="offscreen"
                whileInView={"onscreen"}
                // viewport={{ amount: 0.9, once: false }}
              ></motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
