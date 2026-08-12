"use client";

import { memo } from "react";
import WhiteboardBackground from "./WhiteboardBackground";
import GoalCard from "./GoalCard";
import CoreAbilities from "./CoreAbilities";
import AvatarCard from "./AvatarCard";
import StatsCard from "./StatsCard";
import MobileAboutCarousel from "./MobileAboutCarousel";

const Whiteboard = memo(function Whiteboard() {
  return (
    <section className="relative w-full px-3 py-3 sm:px-5 sm:py-5 lg:px-10">
      <div
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[18px] sm:rounded-[24px]
          border-[3px] sm:border-[4px]
          border-[#3E3124]
          bg-[#E9D3BB]
          shadow-[0_18px_50px_rgba(0,0,0,0.25)]
        "
      >
        <WhiteboardBackground />

        <div
          className="
            relative
            z-10
            grid
            grid-cols-1
            gap-2.5 sm:gap-3
            p-2.5 sm:p-4
            lg:grid-cols-2
            lg:items-start
          "
        >
          {/* Left Column */}
          <div className="flex flex-col gap-2.5 sm:gap-3">
            <GoalCard />
            <div className="lg:hidden">
              <AvatarCard />
            </div>
            <MobileAboutCarousel />
            <div className="hidden lg:block">
              <CoreAbilities />
            </div>
          </div>

          {/* Right Column */}
          <div className="hidden lg:flex lg:flex-col lg:gap-3">
            <AvatarCard />
            <StatsCard />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Whiteboard;
