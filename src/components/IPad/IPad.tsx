"use client";

import React, { useState } from "react";
import { resumeData } from "./ResumeData";
import { Download, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";

function IPad() {
  const { personal, education, projects, openSource, skills } = resumeData;
  const [isOn, setIsOn] = useState(true);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume/Kishan_MN_resume.pdf";
    link.download = "Kishan_MN_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      className="relative mx-auto w-full max-w-sm transition-all duration-300 select-none sm:max-w-lg md:max-w-3xl"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom smooth cubic-bezier curve
      }}
    >
      {/* REALISTIC HARDWARE BUTTONS */}
      {/* Top Power Edge Button */}
      <button
        onClick={() => setIsOn(!isOn)}
        className="absolute -top-[5px] right-14 z-40 h-[5px] w-12 cursor-pointer rounded-t-md border-x border-t border-neutral-500/50 bg-gradient-to-r from-neutral-700 via-neutral-600 to-neutral-700 shadow-sm active:translate-y-[1px]"
        title="Power Button (Toggle Screen)"
        aria-label="Toggle Screen"
      />

      {/* Side Volume Buttons */}
      <div className="absolute top-20 -left-[5px] z-40 flex flex-col gap-3">
        <div className="h-10 w-[5px] rounded-l-md border-y border-l border-neutral-500/50 bg-gradient-to-b from-neutral-700 via-neutral-600 to-neutral-700" />
        <div className="h-10 w-[5px] rounded-l-md border-y border-l border-neutral-500/50 bg-gradient-to-b from-neutral-700 via-neutral-600 to-neutral-700" />
      </div>

      {/* CHASSIS CONTAINER (Multi-layered metallic bevels + depth shadow) */}
      <div className="relative aspect-[10/17] w-full rounded-[2rem] border-[6px] border-[#262626] bg-[#171717] p-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.2)] ring-1 ring-neutral-800 md:aspect-[16/10] md:rounded-[2.4rem] md:border-[8px] md:p-3">
        {/* Front-Facing Camera Dot */}
        <div className="absolute top-2 left-1/2 z-30 flex -translate-x-1/2 items-center justify-center">
          <div className="flex h-2 w-2 items-center justify-center rounded-full bg-[#0d0d0d] ring-1 ring-neutral-800">
            <div className="h-0.5 w-0.5 rounded-full bg-blue-900/60" />
          </div>
        </div>

        {/* SCREEN VIEWPORT */}
        <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-[#F5F5F5] p-3.5 font-sans text-[#222222] shadow-inner md:p-[3%]">
          {/* Subtle Glass Surface Reflection Glow */}
          <div className="pointer-events-none absolute -top-24 -left-24 z-40 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

          {/* DISGUISED ACTION BAR (iPad OS Top Status Bar) */}
          <div className="absolute top-2 right-4 z-30 flex items-center gap-2 text-xs font-semibold text-neutral-600">
            <button
              onClick={handleDownload}
              className="flex cursor-pointer items-center gap-1.5 rounded-full bg-black/5 px-2.5 py-1 text-[11px] font-medium text-neutral-700 backdrop-blur-sm transition-all hover:bg-black/10 active:scale-95"
              title="Download resume DOCX"
            >
              <Download size={12} className="text-neutral-800" />
              <span className="hidden sm:inline">Download DOCX</span>
            </button>
          </div>

          {/* Animated Black Screen Overlay for Power On/Off */}
          <div
            className={`pointer-events-none absolute inset-0 z-50 bg-black transition-all duration-500 ease-in-out ${
              isOn ? "scale-105 opacity-0 blur-none" : "scale-100 opacity-100"
            }`}
          />

          {/* Resume Sheet Content */}
          <div className="flex h-full w-full flex-col justify-between gap-3">
            {/* HEADER SECTION */}
            <div className="flex flex-col gap-1.5 border-b-2 border-black pb-1.5 md:flex-row md:items-baseline md:justify-between">
              <div>
                <h1 className="text-lg font-extrabold tracking-tight sm:text-xl md:text-2xl">
                  {personal.name}
                </h1>
                <p className="mt-0.5 text-[10px] font-bold tracking-wide text-gray-700 uppercase md:text-xs">
                  {personal.role}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-[9px] font-medium text-gray-700 sm:text-[10px] md:gap-4">
                {personal.phone ? (
                  <span className="flex items-center gap-1">
                    <Phone size={11} /> {personal.phone}
                  </span>
                ) : null}
                <span className="flex items-center gap-1">
                  <Mail size={11} /> {personal.email}
                </span>
                <span className="flex items-center gap-1">
                  <FaGithub /> {personal.github}
                </span>
                <span className="flex items-center gap-1">
                  <FaLinkedin /> {personal.linkedin}
                </span>
              </div>
            </div>

            {/* MAIN CONTAINER: 1 Column on Mobile, 2 Columns on Tablet/Desktop */}
            <div className="flex flex-col gap-4 overflow-y-auto md:mt-1 md:grid md:h-full md:grid-cols-12 md:gap-3 md:overflow-hidden">
              {/* LEFT COLUMN */}
              <div className="flex flex-col gap-2.5 md:col-span-7 md:h-full md:overflow-hidden md:pr-2">
                <div>
                  <h2 className="mb-1 text-xs font-black tracking-widest text-black uppercase">
                    PROFILE
                  </h2>
                  <hr className="mb-2 border-gray-400" />
                  <p className="text-[9px] leading-relaxed text-gray-700 md:text-[10px]">
                    {personal.summary}
                  </p>
                </div>

                <div>
                  <h2 className="mb-1 text-xs font-black tracking-widest text-black uppercase">
                    EDUCATION
                  </h2>
                  <hr className="mb-2 border-gray-400" />
                  {education.map((edu, idx) => (
                    <div key={idx} className="mb-1.5 text-[10px]">
                      <div className="flex justify-between font-bold">
                        <span>
                          {edu.degree} •{" "}
                          <span className="font-normal text-gray-600">
                            {edu.university}
                          </span>
                        </span>
                        {edu.cgpa ? (
                          <span className="font-extrabold whitespace-nowrap">
                            CGPA {edu.cgpa}
                          </span>
                        ) : null}
                      </div>
                      <div className="text-[9px] text-gray-500">
                        {edu.duration}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="min-h-0 flex-1">
                  <h2 className="mb-1 text-xs font-black tracking-widest text-black uppercase">
                    PROJECTS
                  </h2>
                  <hr className="mb-2 border-gray-400" />
                  <div className="space-y-2 md:max-h-full md:overflow-y-auto md:pr-1">
                    {projects.map((proj) => (
                      <div key={proj.name} className="text-[9px] md:text-[10px]">
                        <div className="flex items-baseline justify-between gap-2 font-bold">
                          <span>{proj.name}</span>
                          <span className="text-[9px] font-normal whitespace-nowrap text-gray-500">
                            {proj.type}
                          </span>
                        </div>
                        <div className="mb-0.5 text-[9px] font-medium text-gray-600 italic">
                          {proj.stack.join(" • ")}
                        </div>
                        <ul className="list-disc space-y-0.5 pl-4 text-[9px] leading-snug text-gray-700 md:text-[10px]">
                          {proj.points.map((pt) => (
                            <li key={pt}>{pt}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col gap-3 md:col-span-5 md:h-full md:border-l md:border-gray-300 md:pl-3">
                <div>
                  <h2 className="mb-1 text-xs font-black tracking-widest text-black uppercase">
                    OPEN SOURCE
                  </h2>
                  <hr className="mb-2 border-gray-400" />
                  <div className="space-y-2">
                    {openSource.map((repo) => (
                      <div key={repo.name} className="text-[10px]">
                        <div className="font-bold">{repo.name}</div>
                        <div className="text-gray-700">{repo.focus}</div>
                        <div className="truncate font-mono text-[9px] text-gray-500">
                          {repo.github}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="mb-1 text-xs font-black tracking-widest text-black uppercase">
                    SKILLS
                  </h2>
                  <hr className="mb-2 border-gray-400" />
                  <div className="space-y-1.5 text-[10px] leading-snug md:text-[11px]">
                    {skills.map((skillGroup) => (
                      <div key={skillGroup.title} className="font-medium text-gray-800">
                        <span className="font-bold text-black">
                          {skillGroup.title}:
                        </span>{" "}
                        {skillGroup.skills.join(", ")}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto rounded-lg border border-gray-300 bg-black/[0.03] p-2 text-[10px] leading-relaxed text-gray-700">
                  Public, implementation-heavy portfolio across AI/ML systems,
                  developer tools, analytics dashboards, blockchain flows and
                  full-stack product interfaces.
                </div>
              </div>
            </div>
          </div>

          {/* DISGUISED ACTION DOCK (Floating iPadOS Home Bar) */}
          <div className="absolute bottom-1.5 left-1/2 z-30 flex -translate-x-1/2 items-center justify-center">
            <div className="group flex items-center gap-2 rounded-full bg-neutral-900/80 px-2 py-1 shadow-lg backdrop-blur-md">
              <div className="h-1.5 w-16 rounded-full bg-white/40 transition-colors group-hover:bg-white/80" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default IPad;
