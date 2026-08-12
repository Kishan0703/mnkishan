"use client";

import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import MarkerHeading from "./MarkerHeading";
import SketchCard from "./SketchCard";

type AboutPanel = {
  id: string;
  title: string;
  notes: string[];
  accent?: boolean;
};

const panels: AboutPanel[] = [
  {
    id: "work",
    title: "How I Work",
    notes: [
      "I'd rather ask a dumb question than pretend I understood.",
      "Most of what I know, I learned from people better than me, so I stay quiet and pay attention.",
      "Good ideas don't care who says them. I've learned more by shutting up than by speaking up.",
      "I build best with people around me. Good conversations usually make the work better.",
    ],
  },
  {
    id: "chasing",
    title: "What I'm Chasing",
    notes: [
      "I want harder problems. The kind where I have to learn half the stuff before I can even start.",
      "I want to be around people who make me think, 'damn, I need to get better.'",
      "I'm chasing curiosity more than a specific title right now.",
      "I don't have the whole path figured out. I'm just enjoying getting better at it.",
    ],
  },
];

const noteRotations = ["-rotate-1", "rotate-1", "rotate-1", "-rotate-1"];

export default function MobileAboutCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const activePanel = panels[activeIndex] ?? panels[0];

  const showPanel = (nextIndex: number) => {
    const wrappedIndex = (nextIndex + panels.length) % panels.length;
    setDirection(wrappedIndex > activeIndex || nextIndex < 0 ? 1 : -1);
    setActiveIndex(wrappedIndex);
  };

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeDistance = 48;
    const swipeVelocity = 420;

    if (info.offset.x < -swipeDistance || info.velocity.x < -swipeVelocity) {
      showPanel(activeIndex + 1);
      return;
    }

    if (info.offset.x > swipeDistance || info.velocity.x > swipeVelocity) {
      showPanel(activeIndex - 1);
    }
  };

  return (
    <SketchCard rotate="right" className="!p-4 sm:!p-5 lg:hidden">
      <div className="mb-2 flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <MarkerHeading>{activePanel.title}</MarkerHeading>
        </div>

        <div className="mt-0.5 flex shrink-0 items-center gap-1 rounded-full border-2 border-[#3E3124]/35 bg-[#FFF8F0] px-1.5 py-1 shadow-sm">
          <button
            type="button"
            aria-label="Show previous about panel"
            onClick={() => showPanel(activeIndex - 1)}
            className="flex h-7 w-7 items-center justify-center rounded-full text-[#3E3124] transition hover:bg-[#E9D3BB] focus-visible:ring-2 focus-visible:ring-[#E25543] focus-visible:outline-none"
          >
            <ChevronLeft size={18} strokeWidth={2.4} />
          </button>
          <button
            type="button"
            aria-label="Show next about panel"
            onClick={() => showPanel(activeIndex + 1)}
            className="flex h-7 w-7 items-center justify-center rounded-full text-[#3E3124] transition hover:bg-[#E9D3BB] focus-visible:ring-2 focus-visible:ring-[#E25543] focus-visible:outline-none"
          >
            <ChevronRight size={18} strokeWidth={2.4} />
          </button>
        </div>
      </div>

      <div className="mb-3 flex items-center justify-center gap-2">
        <span className="font-gochi text-sm text-[#3E3124]/70">Swipe</span>
        {panels.map((panel, index) => (
          <button
            key={panel.id}
            type="button"
            aria-label={`Show ${panel.title}`}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => showPanel(index)}
            className={`h-2.5 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-[#E25543] focus-visible:outline-none ${
              index === activeIndex
                ? "w-7 bg-[#E25543]"
                : "w-2.5 bg-[#3E3124]/35"
            }`}
          />
        ))}
      </div>

      <div className="relative min-h-[390px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={activePanel.id}
            custom={direction}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.14}
            onDragEnd={handleDragEnd}
            initial={{ x: direction * 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction * -80, opacity: 0 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="absolute inset-0 grid touch-pan-y grid-cols-1 content-start gap-2.5"
          >
            {activePanel.notes.map((note, index) => (
              <div key={note} className={noteRotations[index]}>
                <div
                  className={`relative min-h-16 rounded-2xl border-[2px] border-[#3E3124] p-3 shadow-md ${
                    activePanel.accent && index === 0
                      ? "bg-[#E25543] text-white"
                      : "bg-[#FFF8F0] text-[#3E3124]"
                  }`}
                >
                  <div className="absolute -top-1.5 left-4 h-4 w-12 rotate-[-8deg] rounded bg-[#ead9c7]" />
                  <p className="font-gochi mt-1.5 text-base leading-snug">
                    {note}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </SketchCard>
  );
}
