"use client";
import {React, useRef, useEffect, useState} from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react"
import { containerVariants,itemVariants } from "../helpers/framerMotionAnimations";
export const HeroBanner2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (isInView) {
      setVideoLoaded(true);
    }
  }, [isInView]);

  return (
    <section className="relative mt-12 bg-primary py-12">
      <motion.div
        ref={ref}
        variants={containerVariants}
        animate={isInView ? "visible" : "hidden"}
        initial="hidden"
        className="grid grid-cols-2 container mx-auto items-center h-full"
      >
        <motion.div variants={itemVariants} className="flex px-6 py-3">
          {videoLoaded ? (
            <video controls width="100%" autoPlay loop muted>
              <source src="/video.mp4" type="video/mp4" />
            </video>
          ) : (
            <div className="w-full h-[200px] bg-gray-300 animate-pulse"></div>
          )}
        </motion.div>
        <div className="px-6 py-3 text-right">
          <motion.h2 variants={itemVariants} className="text-6xl font-bold uppercase">
            Szukasz odkurzacza przemysłowego?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-2xl font-bold uppercase mt-4">
            Zorganizujemy bezpłatny pokaz w Twojej firmie!*
          </motion.p>
          <motion.button
            variants={itemVariants}
            className="btn-secondary mt-8"
          >
            Umów się
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};