import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Project } from "@/types/types";

type ProjectTicketProps = {
  project: Project;
};

export const ProjectTicket = ({ project }: ProjectTicketProps) => {
  return (
    <article className="bg-bg-primary @container relative w-full rounded-[1.5rem] transition-all duration-300 md:rounded-[2.25rem]">
      <div className="bg-bg-tertiary absolute top-0 left-0 z-20 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-12 sm:w-12 md:h-15 md:w-15" />
      <div className="bg-bg-tertiary absolute top-0 right-0 z-20 h-12 w-12 translate-x-1/2 -translate-y-1/2 rounded-full sm:h-12 sm:w-12 md:h-15 md:w-15" />
      <div className="bg-bg-tertiary absolute bottom-0 left-0 z-20 h-12 w-12 -translate-x-1/2 translate-y-1/2 rounded-full sm:h-12 sm:w-12 md:h-15 md:w-15" />
      <div className="bg-bg-tertiary absolute right-0 bottom-0 z-20 h-12 w-12 translate-x-1/2 translate-y-1/2 rounded-full sm:h-12 sm:w-12 md:h-15 md:w-15" />

      <div className="xs:p-4 grid h-full grid-cols-1 items-stretch gap-3 p-3.5 sm:p-5 md:grid-cols-[4%_28%_4%_60%_4%] md:gap-0 md:p-[2.8%_1.8%]">
        <div className="flex w-full flex-row items-center justify-between px-2 py-1 md:hidden">
          {Array.from({ length: 15 }).map((_, index) => (
            <span
              key={`project-left-hole-mobile-${project.id}-${index}`}
              className="bg-bg-tertiary h-2 w-2 rounded-full opacity-60 sm:h-2 sm:w-2"
            />
          ))}
        </div>

        <div className="hidden md:flex md:h-full md:w-auto md:flex-col md:items-center md:justify-between md:px-0">
          {Array.from({ length: 10 }).map((_, index) => (
            <span
              key={`project-left-hole-desktop-${project.id}-${index}`}
              className="bg-bg-tertiary rounded-full opacity-60 md:h-[1.5cqw] md:w-[1.5cqw]"
            />
          ))}
        </div>

        <div className="border-bg-tertiary/80 flex min-h-[220px] flex-col justify-between gap-4 overflow-hidden rounded-lg border-2 border-dashed bg-[#1d1d1d] p-4 md:mx-1 md:min-h-[300px] md:rounded-xs md:border-[2.5px] md:p-[8%]">
          <div>
            <p className="font-bree text-text-primary text-sm font-black tracking-wide">
              Project {String(project.id).padStart(2, "0")}
            </p>
            <h3 className="font-bree text-text-primary mt-3 text-2xl leading-tight font-bold tracking-wide md:text-[clamp(1.4rem,2.25cqw,2.4rem)]">
              {project.title}
            </h3>
            {project.tagline ? (
              <p className="font-bree mt-2 text-base leading-snug font-bold text-white md:text-[clamp(.9rem,1cqw,1.1rem)]">
                {project.tagline}
              </p>
            ) : null}
          </div>

          <div className="border-t border-dashed border-white/10 pt-3">
            <div className="flex flex-wrap gap-3">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} on GitHub`}
                  className="focus-visible:ring-text-primary hover:border-text-primary hover:text-text-primary inline-flex h-10 items-center gap-2 rounded-md border border-white/15 px-3 text-sm font-bold text-white transition-colors focus-visible:ring-2 focus-visible:outline-none"
                >
                  <SiGithub className="h-[17px] w-[17px]" />
                  GitHub
                </a>
              ) : null}

              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} live demo`}
                  className="focus-visible:ring-text-primary hover:border-text-primary hover:text-text-primary inline-flex h-10 items-center gap-2 rounded-md border border-white/15 px-3 text-sm font-bold text-white transition-colors focus-visible:ring-2 focus-visible:outline-none"
                >
                  <ExternalLink size={17} />
                  Demo
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <div className="relative my-2 flex items-center justify-center md:my-0 md:h-full">
          <div className="border-bg-tertiary/60 w-full border-t-2 border-dashed md:h-full md:w-auto md:border-t-0 md:border-l-2" />
          <div className="bg-bg-tertiary absolute top-0 z-30 hidden h-[3.5cqw] max-h-[42px] w-[3.5cqw] max-w-[42px] -translate-y-[135%] rounded-full md:block" />
          <div className="bg-bg-tertiary absolute bottom-0 z-30 hidden h-[3.5cqw] max-h-[42px] w-[3.5cqw] max-w-[42px] translate-y-[135%] rounded-full md:block" />
        </div>

        <div className="border-bg-tertiary/80 flex min-h-[270px] flex-col justify-between gap-5 overflow-hidden rounded-lg border-2 border-dashed bg-[#1d1d1d] p-4 md:mx-1 md:rounded-sm md:border-[2.5px] md:p-[2.5%]">
          <div>
            <h4 className="font-bree text-text-primary text-base font-bold tracking-wide sm:text-lg md:text-[clamp(1rem,1.6cqw,1.45rem)]">
              What I Built:
            </h4>
            <p className="font-bree mt-2 text-sm leading-6 text-[#F5F5F5] opacity-95 sm:text-[15px] md:text-[clamp(.8rem,.95cqw,1rem)]">
              {project.description}
            </p>

            <ul className="font-bree mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-[#F5F5F5] opacity-95 sm:text-[15px] md:text-[clamp(.8rem,.92cqw,.98rem)]">
              {project.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bree text-text-primary mb-2 text-base font-bold tracking-wide sm:text-lg md:text-[clamp(1rem,1.6cqw,1.45rem)]">
              Stack:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => {
                const Icon = tech.icon;

                return (
                  <span
                    key={tech.name}
                    className="inline-flex h-8 items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 text-xs font-bold text-white"
                  >
                    <Icon className="h-4 w-4" style={{ color: tech.color }} />
                    {tech.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex w-full flex-row items-center justify-between px-2 py-1 md:hidden">
          {Array.from({ length: 15 }).map((_, index) => (
            <span
              key={`project-right-hole-mobile-${project.id}-${index}`}
              className="bg-bg-tertiary h-2 w-2 rounded-full opacity-60 sm:h-2 sm:w-2"
            />
          ))}
        </div>

        <div className="hidden md:flex md:h-full md:w-auto md:flex-col md:items-center md:justify-between md:px-0">
          {Array.from({ length: 10 }).map((_, index) => (
            <span
              key={`project-right-hole-desktop-${project.id}-${index}`}
              className="bg-bg-tertiary rounded-full opacity-60 md:h-[1.5cqw] md:w-[1.5cqw]"
            />
          ))}
        </div>
      </div>

      <div className="bg-bg-tertiary absolute top-[45%] left-0 z-30 h-5 w-5 -translate-x-1/2 rounded-full md:hidden" />
      <div className="bg-bg-tertiary absolute top-[45%] right-0 z-30 h-5 w-5 translate-x-1/2 rounded-full md:hidden" />
    </article>
  );
};
