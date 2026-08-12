"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pencil } from "lucide-react";

const LOADING_QUOTES = [
  "Sharpening the colored pencils...",
  "Sketching 3D geometry in the margins...",
  "Doodling ideas on paper...",
  "Erasing stray pixels...",
  "Adding watercolor washes...",
  "Inking the final lines...",
];

// First-screen assets only. Other sections can lazy-load after the site is visible.
const CRITICAL_IMAGES = [
  "/images/Logo.svg",
  "/doodles/Star.png",
  "/doodles/githubcat.png",
  "/doodles/Bird_Small.png",
  "/doodles/Computer.png",
  "/doodles/Barcode.png",
  "/doodles/Small_Icon_5.png",
  "/doodles/Red_Search.png",
  "/doodles/Red_Plant_1.png",
];

interface LoaderProps {
  progress?: number;
  onComplete?: () => void;
}

export default function Loader({ progress = 0, onComplete }: LoaderProps) {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const hasStartedExit = useRef(false);

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [imageProgress, setImageProgress] = useState(0);
  const [displayProgress, setDisplayProgress] = useState(0);

  // Cycle quotes during loading
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % LOADING_QUOTES.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  // Preload critical images
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = CRITICAL_IMAGES.length;

    const onLoad = () => {
      loadedCount++;
      setImageProgress(Math.round((loadedCount / totalImages) * 100));
      if (loadedCount === totalImages) {
        setImagesLoaded(true);
      }
    };

    const onError = () => {
      // Treat errors as loaded so slow or missing assets don't block the site indefinitely
      onLoad();
    };

    CRITICAL_IMAGES.forEach((src) => {
      const img = new globalThis.Image();
      img.src = src;
      if (img.complete) {
        setTimeout(onLoad, 0);
      } else {
        img.addEventListener("load", onLoad);
        img.addEventListener("error", onError);
      }
    });
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Compute a smooth, non-decreasing visual progress
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayProgress((prev) => {
        const isFullyLoaded = imagesLoaded && (isMobile || progress >= 100);

        if (isFullyLoaded) {
          if (prev < 100) {
            return Math.min(prev + 12, 100);
          }
          return 100;
        }

        // Model progress is 100 on initial mount until active loading starts. On mobile, we bypass.
        const adjustedModelProgress = isMobile
          ? 100
          : progress === 100 && prev < 5
            ? 0
            : progress;
        const target = isMobile
          ? imageProgress
          : Math.round((imageProgress + adjustedModelProgress) / 2);

        if (prev < target) {
          return Math.min(prev + 5, 99);
        } else if (prev < 88) {
          // Slow incremental crawl to feel active
          return Number((prev + 0.8).toFixed(1));
        }
        return prev;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [imageProgress, progress, imagesLoaded, isMobile]);

  // Set ready status when displayProgress reaches 100%
  useEffect(() => {
    if (displayProgress >= 100) {
      const timer = setTimeout(() => {
        setIsReady(true);
      }, 0);

      return () => clearTimeout(timer);
    }
  }, [displayProgress]);

  // Safety net: don't let non-critical loading keep the first screen hidden.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isReady || hasStartedExit.current) {
      return;
    }

    hasStartedExit.current = true;
    setIsFadingOut(true);

    const completeTimer = setTimeout(() => {
      onComplete?.();
    }, 450);

    return () => {
      clearTimeout(completeTimer);
    };
  }, [isReady, onComplete]);

  // Inside components/Loader.tsx
  useEffect(() => {
    // Disable scrolling on the entire page when the loader is active
    document.body.style.overflow = "hidden";

    return () => {
      // Re-enable scrolling when loader unmounts/completes
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isFadingOut ? 0 : 1 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between overflow-hidden p-6 select-none ${
        isFadingOut ? "pointer-events-none" : "pointer-events-auto"
      }`}
      style={{
        backgroundColor: "#1E1E1E", // tertiary color
        backgroundImage: `radial-gradient(#646464 1px, transparent 1px)`, // quaternary dot grid
        backgroundSize: "28px 28px",
      }}
    >
      {/* --- BACKGROUND FLOATING DOODLES (Continuous Motion) --- */}
      <FloatingDoodledBackground />

      {/* --- TOP HEADER MARGIN --- */}
      <header className="font-bree z-10 flex w-full max-w-3xl items-center justify-between border-b border-[#646464]/30 pt-2 pb-3 text-xs tracking-widest text-[#D4BAA3]/70 sm:text-sm">
        <motion.div
          animate={{ x: [-2, 2, -2], rotate: [-1, 1, -1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2"
        >
          <span className="bg-bg-tertiary inline-block h-2.5 w-2.5 rounded-full" />
          <span>[ SKETCHBOOK_VOL.1 ]</span>
        </motion.div>

        <span className="font-gochi text-base text-[#D4BAA3]">
          PAGE 00 // INITIALIZING
        </span>
      </header>

      {/* --- MAIN CENTRAL CONTENT --- */}
      <main className="z-10 my-auto flex w-full max-w-md flex-col items-center justify-center text-center">
        {/* Animated Hand-Drawn Wobbly Circle Spinner */}
        <div className="relative mb-6 flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32">
          {/* Rotating Outer Sketch Path */}
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 h-full w-full text-[#E25543]"
            viewBox="0 0 100 100"
          >
            <path
              d="M 50,6 C 78,3 97,22 94,50 C 92,78 76,95 50,94 C 22,93 4,75 6,50 C 7,22 24,8 50,6 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray="5 7"
              strokeLinecap="round"
            />
          </motion.svg>

          {/* Inner Counter-Rotating Pencil Outline */}
          <motion.svg
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 h-[85%] w-[85%] text-[#D4BAA3]/40"
            viewBox="0 0 100 100"
          >
            <path
              d="M 50,8 C 72,5 92,25 90,50 C 88,75 72,92 50,90 C 25,88 8,72 10,50 C 12,25 28,10 50,8 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="10 6"
            />
          </motion.svg>

          {/* Central Sketch Icon (Star / Sparkle) */}
          <motion.div
            animate={{ scale: [0.9, 1.15, 0.9], rotate: [-5, 5, -5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-[#E25543]"
          >
            <svg
              className="h-12 w-12 sm:h-14 sm:w-14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2l2.4 6.6L21 11l-5.4 4.6L17 22l-5-3.8L7 22l1.4-6.4L3 11l6.6-2.4z" />
            </svg>
          </motion.div>
        </div>

        {/* Dynamic Sketch Quotes */}
        <div className="font-gochi flex h-12 items-center justify-center px-2 text-xl text-[#D4BAA3] sm:text-2xl">
          <AnimatePresence mode="wait">
            <motion.p
              key={quoteIndex}
              initial={{ opacity: 0, y: 8, rotate: -1 }}
              animate={{ opacity: 1, y: 0, rotate: 1 }}
              exit={{ opacity: 0, y: -8, rotate: -1 }}
              transition={{ duration: 0.35 }}
            >
              &quot;{LOADING_QUOTES[quoteIndex]}&quot;
            </motion.p>
          </AnimatePresence>
        </div>

        {/* --- PROGRESS BAR --- */}
        <div className="mt-6 flex h-20 w-full flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {!isReady && (
              <motion.div
                key="progress-bar"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full"
              >
                <div
                  className="relative h-8 w-full overflow-hidden rounded-2xl border-2 border-[#D4BAA3] bg-[#1E1E1E] p-1 shadow-[4px_4px_0px_0px_#646464]"
                  style={{
                    borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
                  }}
                >
                  {/* Fill Bar */}
                  <motion.div
                    className="bg-bg-tertiary relative h-full rounded-xl"
                    animate={{
                      width: `${Math.min(100, Math.max(0, displayProgress))}%`,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{
                      borderRadius:
                        "255px 15px 225px 15px/15px 225px 15px 255px",
                    }}
                  />
                </div>

                {/* Percentage Indicator */}
                <div className="font-bree mt-3 flex items-center justify-between px-1 text-sm text-[#D4BAA3]">
                  <span className="font-gochi text-lg text-[#646464]">
                    Doodling 3D scenes...
                  </span>
                  <span className="text-base font-bold text-[#E25543]">
                    {Math.round(displayProgress)}%
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* --- FOOTER TIP --- */}
      <footer className="z-10 pb-2 text-center">
        <motion.p
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="font-gochi text-base text-[#D4BAA3]/80 sm:text-lg"
        >
          💡 Tip: Great ideas always start on a blank sheet of paper.
        </motion.p>
      </footer>
    </motion.div>
  );
}

/* Background floating doodle decorations */
function FloatingDoodledBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Top Left Doodle */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="font-gochi absolute top-12 left-8 hidden items-center gap-3 text-4xl text-[#646464]/30 sm:flex"
      >
        <Pencil color="#E25543" />✦
      </motion.div>

      {/* Top Right Doodle */}
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="font-gochi absolute top-16 right-10 hidden text-5xl text-[#646464]/30 sm:block"
      >
        ✎﹏﹏
      </motion.div>

      {/* Bottom Left Paper Scrap */}
      <motion.div
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="font-gochi absolute bottom-10 left-10 hidden rounded-lg border border-[#646464]/40 p-3 text-xs text-[#D4BAA3]/20 md:block"
        style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
      >
        {"// portfolio_v2.sketch"}
      </motion.div>

      {/* Bottom Right Floating Star */}
      <motion.div
        animate={{ scale: [0.8, 1.1, 0.8], rotate: [0, 45, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-12 bottom-14 hidden text-6xl text-[#E25543]/20 sm:block"
      >
        ✸
      </motion.div>
    </div>
  );
}
