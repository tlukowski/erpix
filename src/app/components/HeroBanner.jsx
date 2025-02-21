"use client"
import React from "react";
import Image from "next/image";
import { motion } from "motion/react"
import { containerVariants,itemVariants } from "../helpers/framerMotionAnimations";

export const HeroBanner = () => {
  return (
    <section className="relative mt-24 bg-primary py-12">
      <motion.div variants={containerVariants}
        animate="visible"
        initial="hidden" className="grid grid-cols-2 container mx-auto items-center h-full">
        <div className="px-6 py-3">
          <motion.h1  variants={itemVariants} className="text-6xl font-bold uppercase">
            Odkurzacze przemysłowe i budowlane
          </motion.h1>
          <motion.p variants={itemVariants} className="text-4xl font-bold uppercase mt-4">
            Skorzystaj z naszej oferty
          </motion.p>
          <motion.button variants={itemVariants} className="btn-secondary mt-8">
            Dowiedz się więcej
          </motion.button>
        </div>
        <motion.div variants={itemVariants} className="flex justify-self-end px-6 py-3">
          <Image
            className="rounded-xl max-w-full h-auto"
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
