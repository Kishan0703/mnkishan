"use client";

import { ExperienceTicket } from "@/components/projects/ExperienceTicket";
import SectionHeader from "@/components/ui/SectionHeading";
import React from "react";
import { motion } from "framer-motion";
import Doodle from "@/components/ui/Doodle";
import { experiences, openSourceContributions } from "@/lib/data";
import { OpenSourceContribution, Project } from "@/types/types";

const cardMotion = {
  initial: { opacity: 0, y: 42, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-80px" },
  transition: {
    duration: 0.65,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    delay: 0.05,
  },
};

function experienceToProject(
  exp: (typeof experiences)[number],
  index: number
): Project {
  return {
    id: index + 1,
    title: exp.company,
    tagline: exp.role,
    description: "",
    image: exp.logo,
    technologies: [...exp.technologies],
    github: exp.github,
    demo: exp.demo,
    achievements: exp.description,
  };
}

function openSourceToProject(
  contribution: OpenSourceContribution,
  index: number
): Project {
  return {
    id: index + 1,
    title: contribution.title,
    tagline: contribution.tagline,
    description: "",
    image: "",
    technologies: [...contribution.technologies],
    github: contribution.github,
    achievements: contribution.description,
  };
}

export default function ExperienceNew() {
  const visibleExperiences = experiences.filter(
    (exp) => exp.company !== "Bitwise Learn"
  );

  return (
    <section
      id="experience"
      className="bg-bg-tertiary relative z-10 flex w-full flex-col px-4 py-8 sm:px-8 md:py-14 lg:py-16"
    >
      <Doodle
        src="/doodles/Ramen.png"
        width={120}
        x={5}
        y={15}
        rotation={16}
      />
      <Doodle
        src="/doodles/Red_Ramen.png"
        width={110}
        x={88}
        y={12}
        rotation={-20}
      />
      <Doodle
        src="/doodles/Rabbit.png"
        width={100}
        x={7}
        y={48}
        rotation={-8}
        className="hidden lg:block"
      />
      <Doodle
        src="/doodles/Red_Cat.png"
        width={110}
        x={91}
        y={45}
        rotation={8}
        className="hidden lg:block"
      />
      <Doodle
        src="/doodles/Flower.png"
        width={90}
        x={90}
        y={90}
        rotation={10}
        className="hidden lg:block"
      />
      <Doodle
        src="/doodles/Map.png"
        width={180}
        x={8}
        y={86}
        rotation={-18}
        className="hidden lg:block"
      />

      <motion.div
        className="mx-auto w-full max-w-5xl pb-6 sm:pb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <SectionHeader
          id="experience-heading"
          title="Experience"
          subtitle="My Journey"
          inverted
        />
      </motion.div>

      <div className="relative z-20 mx-auto flex w-full max-w-md flex-col gap-6 sm:max-w-xl md:max-w-4xl md:gap-7 lg:max-w-5xl">
        {visibleExperiences.map((experience, index) => (
          <motion.div
            key={`${experience.company}-${experience.role}-${index}`}
            {...cardMotion}
            transition={{
              ...cardMotion.transition,
              delay: Math.min(index * 0.05, 0.15),
            }}
          >
            <ExperienceTicket
              project={experienceToProject(experience, index)}
              period={`${experience.from} – ${experience.to}`}
              location={experience.location}
            />
          </motion.div>
        ))}

        <motion.div
          className="pt-6 sm:pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3
            className="font-splash text-text-tertiary text-center text-4xl tracking-wide sm:text-5xl md:text-6xl"
          >
            Open Source Contributions
          </h3>
        </motion.div>

        {openSourceContributions.map((contribution, index) => (
          <motion.div
            key={contribution.title}
            {...cardMotion}
            transition={{
              ...cardMotion.transition,
              delay: Math.min(index * 0.05, 0.15),
            }}
          >
            <ExperienceTicket
              project={openSourceToProject(contribution, index)}
              period={contribution.period}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
