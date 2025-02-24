"use client";
import {React, useRef, useEffect, useState} from "react";
import { motion, useInView } from "motion/react"
import { containerVariants,itemVariants } from "../helpers/framerMotionAnimations";
import { useModal } from "../context/ModalContext";
export const HeroBanner2 = () => {
  const {openModal} = useModal();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (isInView) {
      setVideoLoaded(true);
    }
  }, [isInView]);

  return (
    <section className="relative mt-6 lg:mt-12 bg-primary py-8 lg:py-24 px-4">
      <motion.div
        ref={ref}
        variants={containerVariants}
        animate={isInView ? "visible" : "hidden"}
        initial="hidden"
        className="flex flex-col lg:grid lg:grid-cols-2 gap-8 container mx-auto items-center h-full"
      >
        <motion.div variants={itemVariants} className="flex">
          {videoLoaded ? (
            <video width="100%" autoPlay loop muted>
              <source src="/video.mp4" type="video/mp4" />
            </video>
          ) : (
            <div className="w-full h-[200px] bg-gray-300 animate-pulse"></div>
          )}
        </motion.div>
        <div className="px-6 text-center lg:text-right">
          <motion.h2 variants={itemVariants} className="text-xl md:text-3xl lg:text-6xl font-bold uppercase">
            Szukasz odkurzacza przemysłowego?
          </motion.h2>
          <motion.p variants={itemVariants} className=" md:text-xl lg:text-4xl font-bold uppercase mt-2 lg:mt-4">
            Zorganizujemy bezpłatny pokaz w Twojej firmie!*
          </motion.p>
          <motion.button
            onClick={openModal}
            variants={itemVariants}
            className="btn-secondary mt-4 lg:mt-8"
          >
            Umów się
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};