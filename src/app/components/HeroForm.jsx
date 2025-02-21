"use client";
import {useRef} from "react";
import { motion, useInView } from "motion/react"
import { containerVariants,itemVariants } from "../helpers/framerMotionAnimations";
export const HeroForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.section ref={ref} variants={containerVariants} animate={isInView ? "visible" : "hidden"} initial="hidden" className="relative mt-12 overflow-hidden bg-[#f3f3f3] before:bg-secondary before:absolute before:w-[15%] before:rotate-45 before:right-0 before:h-[200%] ">
      <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">        
        <div className="mt-5 max-w-3xl text-center mx-auto">
          <motion.h2 variants={itemVariants} className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
            Umów się na <br/> bezpłatną konsultację            
          </motion.h2>
        </div>

        <div className="mt-5 max-w-3xl text-center mx-auto">
          <motion.p variants={itemVariants} className="text-2xl text-gray-800">
            Zadzwoń <a className="text-secondary font-bold" href="tel:+48178652525">+48 17 865 25 25</a> albo zostaw nam swój kontakt
          </motion.p>
        </div>
        <div className="mt-8 gap-3 flex justify-center">
          <motion.button
          type="button"
          variants={itemVariants}
            className="btn-secondary "
            
          >
            Umów się        
          </motion.button>          
        </div>        
      </div>
    </motion.section>
  );
};
