"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { ProjectTicket } from "@/components/projects/ProjectTicket";
import Navbar from "@/components/ui/NavBar";
import MobileNavbar from "@/components/ui/MobileNavbar";
import SectionHeader from "@/components/ui/SectionHeading";
import Footer from "@/sections/Footer";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <main className="font-bree bg-bg-tertiary min-h-screen w-full overflow-x-hidden">
      <div className="block md:hidden">
        <MobileNavbar />
      </div>

      <div className="hidden md:block">
        <Navbar />
      </div>

      <section className="relative z-10 flex w-full flex-col px-4 pt-28 pb-12 sm:px-8 md:pt-36 md:pb-20 lg:pb-24">
        <div className="mx-auto w-full max-w-5xl">
          <Link
            href="/#projects"
            className="focus-visible:ring-text-primary hover:border-text-primary hover:text-text-primary mb-8 inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm font-bold text-white transition-colors focus-visible:ring-2 focus-visible:outline-none"
          >
            <ArrowLeft size={17} />
            Back
          </Link>

          <SectionHeader
            id="projects"
            title="Projects"
            subtitle="Complete Build Log"
            inverted
          />
        </div>

        <div className="relative z-20 mx-auto mt-10 flex w-full max-w-md flex-col gap-8 sm:max-w-xl md:max-w-4xl md:gap-10 lg:max-w-5xl">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 42, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
                delay: Math.min(index * 0.025, 0.16),
              }}
            >
              <ProjectTicket project={project} />
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
