"use client"
import React from "react";
import Image from "next/image";
import { motion } from "motion/react"
import { containerVariants,itemVariants } from "../helpers/framerMotionAnimations";

export const HeroBanner = () => {
  return (
    <section className="relative mt-32 md:mt-24 bg-primary py-8 lg:py-12 px-4">
      <motion.div variants={containerVariants}
        animate="visible"
        initial="hidden" className="flex flex-col lg:grid gap-8 lg:gap-4 lg:grid-cols-2 container mx-auto items-center h-full">
        <div className="lg:py-3 order-1 w-full text-center lg:text-left">
          <motion.h1  variants={itemVariants} className="text-xl md:text-3xl lg:text-6xl font-bold uppercase">
            Odkurzacze przemysłowe i budowlane
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl lg:text-4xl font-bold uppercase mt-2 lg:mt-4">
            Skorzystaj z naszej oferty
          </motion.p>
          <motion.button variants={itemVariants} className="btn-secondary mt-4 lg:mt-8">
            Dowiedz się więcej
          </motion.button>
        </div>
        <motion.div variants={itemVariants} className="flex justify-center lg:justify-self-end lg:py-3 order-0 lg:order-1 w-full">
          <Image
            className="rounded-xl w-2/3 lg:w-full lg:max-w-full h-auto"
            alt="HeroBanner"
            width={614}
            height={582}
            src="/hero.png"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
