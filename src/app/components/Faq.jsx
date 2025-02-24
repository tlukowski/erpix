"use client";
import {React, useRef} from "react";
import { FaqItem } from "./FaqItem";
import { motion, useInView } from "motion/react"
import { containerVariants,itemVariants } from "../helpers/framerMotionAnimations";

const faq = ({ items }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.section ref={ref} variants={containerVariants} animate={isInView ? "visible" : "hidden"} initial="hidden" className="max-w-6xl mt-6 md:mt-12 lg:mt-24 mx-auto">
      <motion.div className="max-w-6xl mx-auto text-center mb-8 md:mb-12 lg:mb-14 px-4">
        <motion.h2 variants={itemVariants} className="text-2xl font-bold md:text-4xl md:leading-tight">
          Odpowiedzi na Twoje pytania
        </motion.h2>
        <motion.p variants={itemVariants} className="mt-2 text-gray-600">
          Odpowiedzi na najczęściej zadawane pytania.
        </motion.p>
      </motion.div>
      <div className="max-w-3xl mx-auto px-4">
        <div className="hs-accordion-group flex gap-4 flex-col">
          {items.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <FaqItem
                id={item.id}
                title={item.title}
                description={item.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default faq;
