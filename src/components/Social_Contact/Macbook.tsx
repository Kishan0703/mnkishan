"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Socials } from "@/lib/data";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Search,
  Plus,
  SlidersHorizontal,
  GripHorizontal,
} from "lucide-react";

interface MacbookProps {
  children?: React.ReactNode;
}

const contactReasons = [
  "Building an AI/ML system and want to discuss the approach",
  "Working on a developer tool or technical product",
  "Looking for someone to build a prototype with",
  "Exploring an open-source idea or contribution",
  "Have an idea that sounds a little crazy and want to talk it through",
];

function AppIcon({
  label,
  value,
  children,
  href,
}: {
  label: string;
  value: string;
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
      aria-label={label}
      className="group flex w-full max-w-44 cursor-pointer items-center gap-2 border-2 border-[#1e1e1e] bg-[#fff5e8] px-2.5 py-2 text-[#1e1e1e] shadow-[3px_3px_0_#e25543] transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-bg-tertiary focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4e0cc] focus-visible:outline-none md:-rotate-1 md:flex-row"
    >
      <div className="flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-[#1e1e1e] bg-[#f4e0cc] text-bg-tertiary transition-transform group-hover:-rotate-6 sm:size-10">
        {children}
      </div>
      <span className="min-w-0 text-left">
        <span className="block text-[11px] font-black tracking-wide uppercase">
          {label}
        </span>
        <span className="block truncate font-mono text-[9px] text-[#1e1e1e]/60">
          {value}
        </span>
      </span>
    </a>
  );
}

export default function Macbook({ children }: MacbookProps) {
  // Dragging state for the Browser Mockup
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<{ startX: number; startY: number }>({
    startX: 0,
    startY: 0,
  });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX - position.x,
      startY: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragRef.current.startX,
      y: e.clientY - dragRef.current.startY,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <motion.div
      className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center p-2 select-none sm:p-3"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom smooth ease-out curve
      }}
    >
      {/* LAPTOP SCREEN (LID) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-[1.2rem] border-[2px] border-b-0 border-[#38393a] bg-[#0c0c0e] shadow-2xl ring-1 ring-black/40 sm:rounded-t-[1.8rem] sm:border-[4px]">
        {/* Inner Shiny Gloss Bezel Edge */}
        <div className="pointer-events-none absolute inset-0 z-30 rounded-t-[1rem] border border-[#1a1b1c] sm:rounded-t-[1.5rem]" />

        {/* Camera Notch Area */}
        <div className="absolute top-0 left-1/2 z-40 flex h-[3.5%] w-[14%] -translate-x-1/2 items-center justify-center gap-1 rounded-b-sm bg-black sm:w-[11%] sm:gap-1.5 sm:rounded-b-md">
          {/* Camera Lens */}
          <div className="h-0.5 w-0.5 rounded-full border border-blue-900/30 bg-[#040814] sm:h-1 sm:w-1" />
          {/* Ambient Sensor */}
          <div className="invisible h-0.5 w-0.5 rounded-full bg-[#111]" />
        </div>

        {/* Screen Display Viewport */}
        <div className="relative h-full w-full p-[0.6%] pt-[0.6%]">
          <div className="relative h-full w-full overflow-hidden rounded-t-[0.6rem] bg-[#050507] sm:rounded-t-[1rem]">
            {children ? (
              children
            ) : (
              <div
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                className="relative flex h-full w-full flex-col gap-2 overflow-hidden bg-[#020205] p-2 font-sans text-white sm:p-3 md:grid md:grid-cols-12 md:gap-3"
              >
                <div className="absolute inset-0 bg-[#f4e0cc]" />
                <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:var(--bg-grain)] [background-size:120px_120px]" />
                <Image
                  src="/doodles/CofeeStain.png"
                  alt=""
                  width={220}
                  height={180}
                  className="pointer-events-none absolute -right-10 bottom-0 z-0 opacity-35"
                  style={{ width: 220, height: "auto" }}
                />

                {/* SIDE/TOP DOCK: App Shortcuts on Desktop */}
                <div className="z-10 flex shrink-0 flex-row justify-center gap-3 border-b border-white/5 pt-1 pb-2 md:col-span-3 md:flex-col md:items-start md:justify-start md:gap-4 md:border-b-0 md:pt-3 md:pb-0">
                  <AppIcon
                    label="GitHub"
                    value="github.com/Kishan0703"
                    href={Socials.GitHub}
                  >
                    <FaGithub size={23} />
                  </AppIcon>

                  <AppIcon
                    label="LinkedIn"
                    value="linkedin.com/in/kishan..."
                    href={Socials.LinkedIn}
                  >
                    <FaLinkedin size={23} />
                  </AppIcon>

                  <AppIcon
                    label="Email"
                    value="kishanmncontact@gmail..."
                    href={Socials.Mail}
                  >
                    <Mail size={23} />
                  </AppIcon>
                </div>

                {/* BROWSER MOCKUP WINDOW (DRAGGABLE) */}
                <div
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                  }}
                  className="z-10 flex flex-1 flex-col overflow-hidden rounded-xl border-2 border-[#1e1e1e] bg-[#f9ead8] text-[#1e1e1e] shadow-2xl transition-transform duration-75 ease-out md:col-span-9 md:my-auto md:h-[94%]"
                >
                  {/* Browser Window Header (Draggable Handle) */}
                  <div
                    onMouseDown={handleMouseDown}
                    className="flex cursor-grab items-center justify-between border-b-2 border-[#1e1e1e] bg-[#f4e0cc] px-2 py-1.5 active:cursor-grabbing sm:px-4 sm:py-2.5"
                  >
                    {/* Window Controls (Mac Traffic Lights) */}
                    <div className="flex items-center gap-1 sm:gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-[#FF5F56] sm:h-3 sm:w-3" />
                      <div className="h-2 w-2 rounded-full bg-[#FFBD2E] sm:h-3 sm:w-3" />
                      <div className="h-2 w-2 rounded-full bg-[#27C93F] sm:h-3 sm:w-3" />
                    </div>

                    {/* Navigation Controls & Search Bar */}
                    <div className="flex w-2/3 items-center gap-2 sm:w-3/4 sm:gap-3">
                      <div className="hidden gap-2 text-[#1e1e1e]/55 sm:flex">
                        <ArrowLeft size={14} />
                        <ArrowRight size={14} />
                        <RotateCcw size={14} />
                      </div>
                      <div className="flex flex-1 items-center gap-1.5 rounded-lg border-2 border-[#1e1e1e] bg-[#fff5e8] px-2 py-0.5 text-[9px] text-[#1e1e1e]/70 sm:px-2.5 sm:text-[11px]">
                        <Search size={10} className="shrink-0" />
                        <span className="truncate font-mono select-text">~/connect</span>
                      </div>
                    </div>

                    {/* Drag Grip Indicator & Secondary Utilities */}
                    <div className="flex items-center gap-1.5 text-[#1e1e1e]/55 sm:gap-2">
                      <GripHorizontal size={14} />
                      <Plus size={13} />
                      <SlidersHorizontal size={11} />
                    </div>
                  </div>

                  {/* Browser Display Area */}
                  <div className="relative flex-1 overflow-y-auto p-3 select-text sm:p-4">
                    <div className="pointer-events-none absolute top-5 right-6 h-12 w-12 rotate-12 border-2 border-dashed border-bg-tertiary/70" />
                    <div className="mx-auto flex h-full max-w-2xl flex-col gap-3">
                      <div className="max-w-xl">
                        <p className="font-mono text-[10px] font-bold tracking-[0.22em] text-bg-tertiary uppercase">
                          ~/connect
                        </p>
                        <h2 className="font-gochi mt-1 text-2xl leading-none text-[#1e1e1e] sm:text-3xl md:text-4xl">
                          Have a reason to reach out?
                        </h2>
                        <p className="mt-1.5 max-w-lg text-xs leading-relaxed text-[#1e1e1e]/75 sm:text-sm">
                          I&apos;m always happy to hear from people building
                          things, solving interesting problems, or exploring
                          ideas.
                        </p>
                      </div>

                      <div className="grid gap-1.5 sm:grid-cols-2">
                        {contactReasons.map((reason, index) => (
                          <div
                            key={reason}
                            className={`border-2 border-[#1e1e1e] bg-[#fff5e8] px-2.5 py-1.5 shadow-[3px_3px_0_#1e1e1e] ${
                              index % 2 === 0 ? "-rotate-1" : "rotate-1"
                            } ${index === 4 ? "sm:col-span-2 sm:max-w-[78%]" : ""}`}
                          >
                            <p className="font-gochi text-base leading-tight text-[#1e1e1e]">
                              {reason}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-end justify-between gap-2 border-t-2 border-dashed border-[#1e1e1e]/40 pt-2">
                        <p className="font-gochi text-lg leading-tight text-[#1e1e1e]">
                          If there&apos;s something worth building or figuring
                          out, say hi.
                        </p>
                        <div className="bg-[#1e1e1e] px-2.5 py-1.5 font-mono text-[9px] leading-relaxed text-[#f4e0cc]">
                          <p>~/connect</p>
                          <p>status: open to conversations</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* DISPLAY HINGE INNER BASE */}
      <div className="relative z-10 h-1 w-full border-t border-black bg-[#1b1c1e] sm:h-2" />

      {/* LAPTOP CHASSIS BASE */}
      <div className="relative flex h-4 w-[108%] flex-col justify-between rounded-b-[0.6rem] bg-gradient-to-b from-[#a1a2a4] via-[#949597] to-[#7b7c7e] shadow-[0_15px_30px_rgba(0,0,0,0.6)] sm:h-7 sm:rounded-b-[1rem]">
        {/* Top Edge Lip Flaring & Front Lid Notch Groove */}
        <div className="relative h-[2px] w-full rounded-t-sm bg-[#b8b9bb] sm:h-[3px]">
          {/* Center Thumb Display Opening Notch */}
          <div className="absolute top-0 left-1/2 h-[3px] w-[16%] -translate-x-1/2 rounded-b-sm bg-[#67686a] shadow-inner sm:h-[5px] sm:rounded-b-md" />
        </div>

        {/* Bottom Baseline Shadow Layer */}
        <div className="h-[2px] w-full rounded-b-[0.6rem] bg-[#535456] sm:h-[4px] sm:rounded-b-[1rem]" />

        {/* Left Plastic Support Foot */}
        <div className="absolute bottom-[-2px] left-[8%] h-[2px] w-[5%] rounded-b-full bg-black/70 blur-[0.5px] sm:bottom-[-3px] sm:h-[4px] sm:blur-[1px]" />

        {/* Right Plastic Support Foot */}
        <div className="absolute right-[8%] bottom-[-2px] h-[2px] w-[5%] rounded-b-full bg-black/70 blur-[0.5px] sm:bottom-[-3px] sm:h-[4px] sm:blur-[1px]" />
      </div>
    </motion.div>
  );
}
