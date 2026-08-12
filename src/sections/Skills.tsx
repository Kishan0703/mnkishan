"use client";

import React, { useState, memo } from "react";
import { motion, Variants } from "framer-motion";
import Photo from "@/components/ui/Photo";
import { SKILL_DATA } from "@/lib/data";
import DraggableBubble from "@/components/ui/DraggableBubble";
import SectionHeader from "@/components/ui/SectionHeading";
import Doodle from "@/components/ui/Doodle";

type SkillKey = (typeof SKILL_DATA)[number]["key"];
type Easing = [number, number, number, number];

const smoothEase: Easing = [0.16, 1, 0.3, 1];

const cardContainerVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: smoothEase,
      staggerChildren: 0.1,
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const featItemVariants: Variants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

type MobileSkillsPanelProps = {
  activeSkill: (typeof SKILL_DATA)[number];
  selectedSkillKey: SkillKey;
  onSelectSkill: (key: SkillKey) => void;
};

const MobileSkillsPanel = ({
  activeSkill,
  selectedSkillKey,
  onSelectSkill,
}: MobileSkillsPanelProps) => {
  return (
    <div className="mx-auto mt-1 w-[min(92vw,42rem)] md:hidden">
      <div className="rounded-[22px] border-2 border-[#5b5248] bg-[#171717]/92 p-3 shadow-[0_18px_45px_rgba(0,0,0,0.4)]">
        <div className="grid grid-cols-2 gap-2">
          {SKILL_DATA.map((skill) => {
            const isSelected = skill.key === selectedSkillKey;

            return (
              <button
                key={skill.key}
                type="button"
                aria-pressed={isSelected}
                onClick={() => onSelectSkill(skill.key)}
                className={`font-gochi min-h-12 rounded-xl border px-3 py-2 text-sm leading-tight transition focus-visible:ring-2 focus-visible:ring-[#F5E1CD] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717] focus-visible:outline-none ${
                  isSelected
                    ? "border-[#E25543] bg-[#E25543] text-white shadow-[0_0_16px_rgba(226,85,67,0.32)]"
                    : "border-[#D4BAA3]/70 bg-transparent text-[#D4BAA3]"
                }`}
              >
                {skill.title}
              </button>
            );
          })}
        </div>

        <div className="mt-4 rounded-2xl border border-neutral-800 bg-[#101010]/90 p-4">
          <h3 className="text-text-primary font-bree text-2xl">
            {activeSkill.title}
          </h3>

          <div className="mt-3 flex flex-wrap gap-2">
            {activeSkill.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-[#F5E1CD]/70 bg-[#E25543] px-2.5 py-1.5 text-xs font-bold text-white shadow-[0_2px_8px_rgba(226,85,67,0.22)]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-5 border-t border-neutral-800 pt-4">
            <p className="text-text-primary font-bree text-xs font-bold tracking-wider uppercase">
              Proof of Work
            </p>
            <div className="mt-3 flex max-h-[270px] flex-col gap-2 overflow-y-auto pr-1">
              {activeSkill.achievements.map((achievement) => (
                <div
                  key={achievement}
                  className="flex gap-2.5 rounded-xl border border-neutral-800/70 bg-neutral-900/50 p-3"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E25543] shadow-[0_0_7px_#E25543]" />
                  <p className="text-text-secondary text-sm leading-snug">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Skills() {
  const ruler = Array.from({ length: 16 }, (_, i) => i + 1);

  const [selectedSkillKey, setSelectedSkillKey] = useState<SkillKey>(
    SKILL_DATA[0]?.key ?? "aiLlms",
  );

  const activeSkill =
    SKILL_DATA.find((item) => item.key === selectedSkillKey) || SKILL_DATA[0];

  return (
    <div className="relative min-h-screen overflow-x-hidden pb-20">
      {/* Header Section */}
      <SectionHeader id="skills" title="Skills" subtitle="My Palette" />
      <Doodle
        src="/doodles/Camera.png"
        width={140}
        x={75}
        y={15}
        rotation={22}
      />

      <MobileSkillsPanel
        activeSkill={activeSkill}
        selectedSkillKey={selectedSkillKey}
        onSelectSkill={setSelectedSkillKey}
      />

      {/* Stack/Overlap Wrapper */}
      <motion.div
        className="relative mx-auto mt-1 hidden min-h-[620px] w-[95vw] max-w-7xl items-center justify-center md:mt-6 md:flex md:aspect-16/10 md:min-h-[520px] lg:aspect-video"
        variants={cardContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Background Card */}
        <motion.div
          className="bg-bg-tertiary shadow-text-primary/10 text-text-primary absolute inset-0 flex h-full w-full -rotate-2 items-center justify-center rounded-md border shadow-xl"
          whileHover={{ rotate: -1, scale: 1.005 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />

        {/* Foreground Card */}
        <motion.div
          className="bg-accent-foreground text-text-primary absolute inset-0 mx-1 flex h-full w-full rotate-1 gap-1.5 rounded-2xl border p-2 shadow-2xl shadow-black/50 sm:mx-2 sm:gap-2 md:mx-8 md:p-4"
          whileHover={{ rotate: 0.5 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {/* Left Ruler Graphic */}
          <div className="flex w-[4%] flex-col justify-around sm:w-[3%] md:w-[2%]">
            {ruler.map((num) => (
              <motion.div
                key={num}
                className="text-text-secondary font-bree text-center text-[10px] select-none sm:text-xs md:text-base"
                whileHover={{ scale: 1.3, color: "#E25543" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {num}
              </motion.div>
            ))}
          </div>

          {/* Interactive Workbench Area */}
          <div
            className="relative flex w-[96%] flex-col justify-between overflow-hidden rounded-xl border bg-repeat p-2 sm:w-[97%] sm:p-3 md:w-[98%]"
            style={{
              backgroundImage: "url('/images/sheet-bg.svg')",
              backgroundSize: "150px",
            }}
          >
            {/* Stacked Draggable Photos Layer */}
            {SKILL_DATA.map((skill) => {
              const isSelected = skill.key === selectedSkillKey;

              return (
                <Photo
                  key={skill.key}
                  src={skill.photo.src}
                  size={skill.photo.size}
                  rotation={skill.photo.rotation}
                  defaultX={skill.photo.defaultX}
                  defaultY={skill.photo.defaultY}
                  orientation={skill.photo.orientation}
                  caption={skill.photo.caption}
                  isSelected={isSelected}
                  onClick={() => setSelectedSkillKey(skill.key)}
                />
              );
            })}

            {/* Dynamic Spacer */}
            <div className="min-h-[20px] flex-grow md:min-h-0" />

            {/* Info Panel */}
            <motion.div
              className="relative z-10 h-auto w-full overflow-hidden rounded-2xl border p-3 shadow-2xl backdrop-blur-md sm:p-4 md:h-[46%]"
              initial="hidden"
              animate="visible"
              variants={titleVariants}
            >
              <div className="grid h-full grid-cols-1 items-stretch gap-3 md:grid-cols-12 md:gap-4">
                {/* Left Column */}
                <div className="flex h-full flex-col justify-between md:col-span-5">
                  <div>
                    <h3 className="text-text-primary text-lg font-extrabold tracking-wide drop-shadow sm:text-xl md:text-2xl">
                      {activeSkill.title}
                    </h3>
                  </div>

                  <div className="bg-bg-primary/60 relative mt-2 min-h-[120px] flex-1 overflow-hidden rounded-xl border border-neutral-800 p-2 sm:min-h-[135px] sm:p-2.5">
                    {activeSkill.tech.map((t, idx) => {
                      return (
                        <DraggableBubble
                          key={t}
                          label={t}
                          index={idx}
                          totalCount={activeSkill.tech.length}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex h-full flex-col border-t border-neutral-800 pt-3 pl-0 md:col-span-7 md:border-t-0 md:border-l md:pt-0 md:pl-4">
                  <div className="text-text-primary mb-1.5 flex items-center gap-2 text-[11px] font-bold tracking-wider uppercase opacity-80 sm:mb-2">
                    <span>Proof of Work</span>
                  </div>

                  <div className="flex max-h-[165px] flex-1 flex-col gap-1.5 overflow-x-hidden overflow-y-auto pr-1 md:max-h-none">
                    {activeSkill.achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        variants={featItemVariants}
                        whileHover={{
                          scale: 1.015,
                          x: 4,
                          backgroundColor: "rgba(23, 23, 23, 0.8)",
                          borderColor: "rgba(226, 85, 67, 0.4)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                        className="flex items-center gap-2.5 rounded-xl border border-neutral-800/60 bg-neutral-900/40 p-2 transition duration-200 sm:p-2.5"
                      >
                        <motion.div
                          className="bg-bg-tertiary h-1.5 w-1.5 shrink-0 rounded-full shadow-[0_0_6px_#E25543]"
                          animate={{ scale: [1, 1.25, 1] }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeInOut",
                            delay: idx * 0.2,
                          }}
                        />
                        <p className="text-text-secondary text-[11px] leading-snug font-medium md:text-xs">
                          {achievement}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default memo(Skills);
