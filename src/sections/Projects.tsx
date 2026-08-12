"use client";

import { ProjectTicket } from "@/components/projects/ProjectTicket";
import SectionHeader from "@/components/ui/SectionHeading";
import React from "react";
import { motion } from "framer-motion";
import Doodle from "@/components/ui/Doodle";
import { projects } from "@/lib/data";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="bg-bg-tertiary relative z-10 flex w-full flex-col px-4 py-8 sm:px-8 md:py-14 lg:py-16">
      <Doodle
        src="/doodles/Red_Gift.png"
        width={120}
        x={90}
        y={8}
        rotation={-18}
        className="hidden lg:block"
      />
      <Doodle
        src="/doodles/Godzilla.png"
        width={180}
        x={4}
        y={92}
        rotation={15}
        className="hidden lg:block"
      />
      <Doodle
        src="/doodles/Red_Cat.png"
        width={120}
        x={92}
        y={55}
        rotation={0}
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
          id="projects"
          title="Projects"
          subtitle="Build Log"
          inverted
        />
      </motion.div>

      <div className="relative z-20 mx-auto flex w-full max-w-md flex-col gap-6 sm:max-w-xl md:max-w-4xl md:gap-7 lg:max-w-5xl">
        {projects.slice(0, 3).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 42, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1],
              delay: Math.min(index * 0.03, 0.18),
            }}
          >
            <ProjectTicket project={project} />
          </motion.div>
        ))}

        <motion.div
          className="flex justify-center pt-1"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/projects"
            className="focus-visible:ring-text-primary font-gochi inline-flex min-h-10 items-center justify-center rounded-md border-2 border-[#3E3124] bg-[#E9D3BB] px-6 text-xl text-[#3E3124] shadow-[4px_4px_0_#3E3124] transition-transform hover:scale-105 hover:-rotate-1 focus-visible:ring-2 focus-visible:outline-none"
          >
            See more
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
