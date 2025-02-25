"use client";
import {useRef} from "react";
import { motion, useInView } from "motion/react"
import { containerVariants,itemVariants } from "../helpers/framerMotionAnimations";

const LearnMore = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.section
    ref={ref}
    id="learnMore"
    variants={containerVariants} animate={isInView ? "visible" : "hidden"}
    initial="hidden" className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-12">
      <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
        <div className="grid gap-12">
          <div>
            <motion.h2 variants={itemVariants} className="block font-bold text-gray-800 text-2xl md:text-4xl lg:text-6xl text-center">
              Our vision
            </motion.h2>
            <motion.p variants={itemVariants} className="mt-12 text-gray-800">
              For as long as there have been cities, the public square has been
              a fundamental part of the urban landscape - an open, approachable
              space to meet and engage with friends and neighbours. Space aims
              to capture this spirit of bringing people together in an exciting,
              welcoming environment.
            </motion.p>
          </div>

          <div className="space-y-6 lg:space-y-10">
            <motion.div variants={itemVariants} className="flex gap-x-5 sm:gap-x-8">
              <svg
                className="shrink-0 mt-2 size-6 text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                <path d="M10 6h4" />
                <path d="M10 10h4" />
                <path d="M10 14h4" />
                <path d="M10 18h4" />
              </svg>
              <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                  High quality Co-Living spaces
                </h3>
                <p className="mt-1 text-gray-600">
                  Our fully furnished spaces are designed and purpose-built with
                  Co-Living in mind, featuring high-end finishes and amenities
                  that go far beyond traditional apartment buildings.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-x-5 sm:gap-x-8">
              <svg
                className="shrink-0 mt-2 size-6 text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                  Fostering vibrant communities
                </h3>
                <p className="mt-1 text-gray-600">
                  Our passion is bringing people together. Beyond creating
                  beautiful spaces, we provide shared experiences.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-x-5 sm:gap-x-8">
              <svg
                className="shrink-0 mt-2 size-6 text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 10v12" />
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
              </svg>
              <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                  Simple and all-inclusive
                </h3>
                <p className="mt-1 text-gray-600">
                  We worry about the details so that our residents don't have
                  to. From our online application process to simple,
                  all-inclusive billing we aim to make the living experience as
                  effortless as possible.
                </p>
              </div>
          </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default LearnMore;
