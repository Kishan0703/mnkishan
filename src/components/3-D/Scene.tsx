"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLoading } from "@/context/LoadingContext";

type ThoughtNote = {
  id: string;
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotate: number;
  variant?: "headline" | "tiny" | "done";
};

const thoughtNotes: ThoughtNote[] = [
  {
    id: "work",
    text: "How I Approach Things",
    x: 6,
    y: 7,
    width: 36,
    height: 20,
    rotate: -6,
    variant: "headline",
  },
  {
    id: "research",
    text: "Research — has someone solved this?",
    x: 51,
    y: 9,
    width: 34,
    height: 16,
    rotate: 5,
  },
  {
    id: "architecture",
    text: "Architecture",
    x: 30,
    y: 35,
    width: 28,
    height: 15,
    rotate: -2,
  },
  {
    id: "ai",
    text: "AI?",
    x: 62,
    y: 32,
    width: 13,
    height: 10,
    rotate: 8,
    variant: "tiny",
  },
  {
    id: "model",
    text: "Model?",
    x: 76,
    y: 35,
    width: 15,
    height: 10,
    rotate: -4,
    variant: "tiny",
  },
  {
    id: "db",
    text: "DB?",
    x: 63,
    y: 45,
    width: 13,
    height: 10,
    rotate: 3,
    variant: "tiny",
  },
  {
    id: "scale",
    text: "Scale?",
    x: 77,
    y: 48,
    width: 15,
    height: 10,
    rotate: -1,
    variant: "tiny",
  },
  {
    id: "prototype",
    text: "Prototype — build it ugly",
    x: 9,
    y: 58,
    width: 32,
    height: 15,
    rotate: 6,
  },
  {
    id: "break",
    text: "Break it",
    x: 46,
    y: 62,
    width: 20,
    height: 13,
    rotate: -5,
  },
  {
    id: "fix",
    text: "Fix it",
    x: 61,
    y: 67,
    width: 19,
    height: 13,
    rotate: 2,
  },
  {
    id: "ship",
    text: "Ship",
    x: 77,
    y: 78,
    width: 17,
    height: 12,
    rotate: -3,
    variant: "done",
  },
];

const stringPaths = [
  "M 24 26 Q 38 20 55 24",
  "M 58 26 Q 50 34 44 41",
  "M 58 43 Q 65 38 69 39",
  "M 58 43 Q 76 39 84 42",
  "M 58 43 Q 67 50 70 51",
  "M 58 43 Q 77 51 85 55",
  "M 40 51 Q 29 56 25 64",
  "M 41 67 Q 47 70 56 69",
  "M 65 74 Q 70 76 78 81",
];

const getNoteTextClass = (variant: ThoughtNote["variant"]) => {
  if (variant === "headline") {
    return "text-[clamp(1.15rem,3.2cqw,2rem)] leading-[1.02]";
  }

  if (variant === "tiny") {
    return "text-[clamp(.72rem,1.45cqw,.98rem)] leading-none";
  }

  if (variant === "done") {
    return "text-[clamp(1rem,2.2cqw,1.55rem)] leading-none";
  }

  return "text-[clamp(.88rem,2cqw,1.35rem)] leading-[1.04]";
};

export default function Scene() {
  const { isLoading } = useLoading();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <motion.div
        className="relative aspect-square w-[min(34rem,78vh)] overflow-hidden [container-type:inline-size]"
        initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
        animate={
          isLoading
            ? { opacity: 0, scale: 0.92, rotate: -4 }
            : { opacity: 1, scale: 1, rotate: 0 }
        }
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-[4%] rounded-lg border-2 border-dashed border-[#D4BAA3]/35 bg-[#1E1E1E]/20 shadow-[0_0_44px_rgba(226,85,67,0.12)]" />

        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {stringPaths.map((path) => (
            <path
              key={path}
              d={path}
              fill="none"
              stroke="#D4BAA3"
              strokeDasharray="3 4"
              strokeLinecap="round"
              strokeWidth="0.55"
              opacity="0.7"
            />
          ))}
        </svg>

        {thoughtNotes.map((note) => (
          <motion.div
            key={note.id}
            className="group absolute"
            style={{
              left: `${note.x}%`,
              top: `${note.y}%`,
              width: `${note.width}%`,
              height: `${note.height}%`,
            }}
            initial={{ rotate: note.rotate }}
            animate={{ rotate: note.rotate }}
            whileHover={
              shouldReduceMotion
                ? { rotate: 0 }
                : {
                    rotate: 0,
                    y: -6,
                  }
            }
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="relative flex h-full w-full items-center justify-center rounded-[10px] border-2 border-[#3E3124] bg-[#F5E1CD] px-[7%] py-[5%] text-center shadow-[4px_4px_0_#3E3124] transition-shadow duration-200 group-hover:shadow-[8px_10px_18px_rgba(0,0,0,.25)]">
              <span className="absolute top-0 left-1/2 h-[10%] min-h-2 w-[10%] min-w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#3E3124]/50 bg-[#E25543] shadow-sm" />
              <p
                className={`font-gochi text-[#3E3124] ${getNoteTextClass(note.variant)}`}
              >
                {note.text}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
