"use client";

import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Socials } from "@/lib/data";
import { motion } from "framer-motion";
import { BookOpen, Lock, Mail, Share } from "lucide-react";

interface IPhoneProps {
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
  const isMailto = href.startsWith("mailto:");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMailto) {
      e.preventDefault();
      window.location.href = href;
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      target={isMailto ? undefined : "_blank"}
      rel={isMailto ? undefined : "noreferrer"}
      aria-label={label}
      className="group flex min-w-0 cursor-pointer flex-col items-center justify-center gap-1 border-2 border-[#1e1e1e] bg-[#fff5e8] px-2 py-1.5 text-[#1e1e1e] shadow-[2px_2px_0_#e25543] focus-visible:ring-2 focus-visible:ring-bg-tertiary focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4e0cc] focus-visible:outline-none"
    >
      <div className="flex size-8 items-center justify-center rounded-full border-2 border-[#1e1e1e] bg-[#f4e0cc] text-bg-tertiary">
        {children}
      </div>
      <span className="text-[9px] font-black uppercase leading-none">
        {label}
      </span>
      <span className="max-w-20 truncate font-mono text-[7px] leading-none text-[#1e1e1e]/55">
        {value}
      </span>
    </a>
  );
}

export default function IPhone({ children }: IPhoneProps) {
  return (
    <motion.div
      className="mx-auto flex w-full max-w-[340px] justify-center p-2 select-none sm:p-3"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        ease: [0.21, 1.11, 0.81, 0.99], // Subtle spring effect on entrance
      }}
    >
      {/* IPHONE OUTER BODY */}
      <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[42px] border-[8px] border-[#222325] bg-[#0c0c0e] shadow-2xl ring-1 ring-white/10">
        {/* Dynamic Island Notch */}
        <div className="absolute top-3 left-1/2 z-50 flex h-5 w-24 -translate-x-1/2 items-center justify-between rounded-full bg-black px-2 shadow-sm">
          <div className="h-2.5 w-2.5 rounded-full bg-[#08081a] ring-1 ring-white/10" />
          <div className="h-2 w-2 rounded-full bg-[#111122]" />
        </div>

        {/* Screen Display Viewport */}
        <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#020205] pt-10 text-white">
          {children ? (
            children
          ) : (
            <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#020205] p-3 font-sans">
              <div className="absolute inset-0 bg-[#f4e0cc]" />
              <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:var(--bg-grain)] [background-size:110px_110px]" />
              <Image
                src="/doodles/CofeeStain.png"
                alt=""
                width={160}
                height={160}
                className="pointer-events-none absolute -right-12 bottom-8 z-0 opacity-30"
              />

              {/* SOCIAL SHORTCUTS GRID */}
              <div className="z-10 flex items-center justify-around px-1.5 pt-1.5">
                <AppIcon
                  label="GitHub"
                  value="Kishan0703"
                  href={Socials.GitHub}
                >
                  <FaGithub size={18} />
                </AppIcon>

                <AppIcon
                  label="LinkedIn"
                  value="kishan-mn"
                  href={Socials.LinkedIn}
                >
                  <FaLinkedin size={18} />
                </AppIcon>

                <AppIcon
                  label="Email"
                  value="say hi"
                  href={Socials.Mail}
                >
                  <Mail size={18} />
                </AppIcon>
              </div>

              {/* MOBILE SAFARI MOCKUP */}
              <div className="z-10 my-auto flex max-h-[70%] flex-1 flex-col overflow-hidden rounded-2xl border-2 border-[#1e1e1e] bg-[#f9ead8] text-[#1e1e1e] shadow-xl">
                <div className="flex-1 overflow-y-auto p-3 select-text">
                  <p className="font-mono text-[9px] font-bold tracking-[0.18em] text-bg-tertiary uppercase">
                    ~/connect
                  </p>
                  <h2 className="font-gochi mt-1 text-2xl leading-none">
                    Have a reason to reach out?
                  </h2>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-[#1e1e1e]/75">
                    I&apos;m always happy to hear from people building things,
                    solving interesting problems, or exploring ideas.
                  </p>

                  <div className="mt-2.5 space-y-1.5">
                    {contactReasons.map((reason, index) => (
                      <div
                        key={reason}
                        className={`border-2 border-[#1e1e1e] bg-[#fff5e8] px-2 py-1.5 shadow-[2px_2px_0_#1e1e1e] ${
                          index % 2 === 0 ? "-rotate-1" : "rotate-1"
                        }`}
                      >
                        <p className="font-gochi text-sm leading-tight">
                          {reason}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 border-t-2 border-dashed border-[#1e1e1e]/40 pt-2">
                    <p className="font-gochi text-base leading-tight">
                      If there&apos;s something worth building or figuring out,
                      say hi.
                    </p>
                    <div className="mt-2 bg-[#1e1e1e] px-3 py-2 font-mono text-[9px] leading-relaxed text-[#f4e0cc]">
                      <p>~/connect</p>
                      <p>status: open to conversations</p>
                    </div>
                  </div>
                </div>

                {/* SAFARI BOTTOM URL & NAV BAR */}
                <div className="flex items-center justify-between border-t border-neutral-800 bg-neutral-950/90 px-3 py-2 text-neutral-400">
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <Lock size={10} className="text-emerald-500" />
                    <span className="max-w-[150px] truncate text-neutral-300">
                      ~/connect
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Share
                      size={12}
                      className="cursor-pointer hover:text-white"
                    />
                    <BookOpen
                      size={12}
                      className="cursor-pointer hover:text-white"
                    />
                  </div>
                </div>
              </div>

              {/* iOS Home Indicator Bar */}
              <div className="mt-1 flex w-full justify-center pb-1">
                <div className="h-1 w-28 rounded-full bg-white/40" />
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
