"use client";

import { motion } from "framer-motion";
import MarkerHeading from "./MarkerHeading";
import SketchCard from "./SketchCard";

const chasingNotes = [
  "I want harder problems. The kind where I have to learn half the stuff before I can even start.",
  "I want to be around people who make me think, 'damn, I need to get better.'",
  "I'm chasing curiosity more than a specific title right now.",
  "I don't have the whole path figured out. I'm just enjoying getting better at it.",
];

const rotations = ["-rotate-1", "rotate-1", "rotate-1", "-rotate-1"];

export default function StatsCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      className=""
    >
      <SketchCard rotate="left" className="flex flex-col justify-between !p-4 sm:!p-5">
        <div>
          <MarkerHeading>What I&apos;m Chasing</MarkerHeading>

          <div className="mt-2.5 grid grid-cols-1 gap-2 sm:mt-4 sm:grid-cols-2 sm:gap-2.5">
            {chasingNotes.map((note, index) => (
              <motion.div
                key={note}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
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
                    rounded-2xl
                    border-[2px]
                    border-[#3E3124]
                    bg-[#FFF8F0]
                    p-3
                    shadow-md
                  "
                >
                  <div className="absolute -top-1.5 left-4 h-4 w-12 rotate-[-8deg] rounded bg-[#ead9c7]" />

                  <p className="font-gochi mt-1.5 text-sm leading-snug text-[#3E3124] sm:text-base">
                    {note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SketchCard>
    </motion.div>
  );
}
