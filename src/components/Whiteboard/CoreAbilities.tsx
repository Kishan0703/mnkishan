"use client";

import { motion } from "framer-motion";
import SketchCard from "./SketchCard";
import MarkerHeading from "./MarkerHeading";

const rotations = [
  "-rotate-2",
  "rotate-2",
  "rotate-1",
  "-rotate-1",
];

const workNotes = [
  "I'd rather ask a dumb question than pretend I understood.",
  "Most of what I know, I learned from people better than me, so I stay quiet and pay attention.",
  "Good ideas don't care who says them. I've learned more by shutting up than by speaking up.",
  "I build best with people around me. Good conversations usually make the work better.",
];

export default function CoreAbilities() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <SketchCard rotate="right" className="!p-4 sm:!p-5">
        <MarkerHeading>How I Work</MarkerHeading>

        <div className="mt-2.5 grid grid-cols-1 gap-2 sm:mt-4 sm:grid-cols-2 sm:gap-3">
          {workNotes.map((note, index) => (
            <motion.div
              key={note}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              whileHover={{
                y: -4,
                rotate: 0,
                scale: 1.015,
              }}
              className={rotations[index]}
            >
              <div
                className="
                  relative
                  min-h-16
                  rounded-2xl sm:rounded-3xl
                  border-[2px] sm:border-[3px]
                  border-[#3E3124]
                  bg-[#FFF8F0]
                  p-3 sm:p-3.5
                  shadow-md sm:shadow-lg
                "
              >
                <div className="absolute -top-1.5 left-4 h-4 w-12 rotate-[-8deg] rounded bg-[#ead9c7] sm:-top-2 sm:left-5 sm:h-6 sm:w-16" />

                <p className="font-gochi mt-1.5 text-base leading-snug text-[#3E3124] sm:text-lg">
                  {note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SketchCard>
    </motion.div>
  );
}
