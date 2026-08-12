"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "sketchbook-ui";
import "sketchbook-ui/style.css";
import { COLORS } from "@/lib/colors";
import Tag from "@/components/ui/Tag";
import Doodle from "@/components/ui/Doodle";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/3-D/Scene"), {
  ssr: false,
  loading: () => <div className="h-screen w-full bg-transparent" />,
});

// Container variant for orchestration & staggered children
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// General fade & slide up for elements
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function Landing() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  return (
    <section
      className="relative flex min-h-screen w-full overflow-hidden"
      id="landing"
    >
      <span id="home" className="absolute top-0" aria-hidden="true" />
      <Doodle src="/doodles/Star.png" width={1} x={7} y={12} rotation={-12} />
      <Doodle
        src="/doodles/githubcat.png"
        width={150}
        x={50}
        y={75}
        rotation={18}
        zIndex={0}
        className="mix-blend-screen"
        alt="GitHub cat doodle"
      />
      <Doodle
        src="/doodles/Bird_Small.png"
        width={76}
        x={87}
        y={28}
        rotation={14}
        opacity={0.52}
        zIndex={0}
        className="md:hidden"
        alt=""
      />
      <Doodle
        src="/doodles/Barcode.png"
        width={124}
        x={76}
        y={16}
        rotation={4}
        opacity={0.2}
        zIndex={0}
        className="md:hidden"
        alt=""
      />
      <Doodle
        src="/doodles/Computer.png"
        width={118}
        x={86}
        y={58}
        rotation={-8}
        opacity={0.38}
        zIndex={0}
        className="md:hidden mix-blend-screen"
        alt=""
      />
      <Doodle
        src="/doodles/Small_Icon_5.png"
        width={54}
        x={18}
        y={72}
        rotation={-16}
        opacity={0.34}
        zIndex={0}
        className="md:hidden"
        alt=""
      />
      <Doodle
        src="/doodles/Red_Search.png"
        width={82}
        x={56}
        y={86}
        rotation={-10}
        opacity={0.24}
        zIndex={0}
        className="md:hidden"
        alt=""
      />
      <Doodle
        src="/doodles/Red_Plant_1.png"
        width={112}
        x={79}
        y={88}
        rotation={12}
        opacity={0.42}
        zIndex={0}
        className="md:hidden"
        alt=""
      />
      {/* LEFT */}
      <div className="relative z-10 flex w-full items-center justify-center px-6 pt-20 pb-28 sm:pt-24 lg:w-[50%] lg:px-16 lg:py-16">
        <motion.div
          className="w-full max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-text-secondary font-bree text-3xl md:text-4xl"
          >
            Hi, I&apos;m
          </motion.p>

          {/* Name - Standard Lazy/Spawn-in Animation */}
          <motion.h1
            variants={itemVariants}
            className="text-text-primary font-splash mt-3 text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Kishan MN
          </motion.h1>

          {/* Tags */}
          <motion.div
            variants={itemVariants}
            className="mt-7 flex flex-wrap gap-2.5"
          >
            {["AI Tools", "Full-Stack", "Machine Learning", "Blockchain"].map(
              (tag) => (
                <Tag key={tag} text={tag} />
              ),
            )}
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="font-gochi mt-7 max-w-xl text-base leading-7 text-white"
          >
            I build technical products across AI developer tools, fraud
            detection, RAG systems, blockchain infrastructure, analytics
            platforms, and applied machine learning.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button
              size="sm"
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              colors={{
                bg: "transparent",
                bgOverlay: "transparent",
                stroke: COLORS.primary,
                text: COLORS.primary,
              }}
              typography={{
                fontFamily: "Gochi Hand",
              }}
            >
              Projects
            </Button>

            <Button
              size="sm"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              colors={{
                bg: "transparent",
                bgOverlay: "transparent",
                stroke: COLORS.primary,
                text: COLORS.primary,
              }}
              typography={{
                fontFamily: "Gochi Hand",
              }}
            >
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* RIGHT */}
      <div className="hidden w-[50%] items-center justify-center overflow-clip lg:flex">
        {isDesktop && <Scene />}
      </div>
    </section>
  );
}
