"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { COLORS } from "@/lib/colors";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Ensure slight scrolling buffer to avoid hyper-sensitivity trigger glitches
      if (Math.abs(currentScrollY - lastScrollY.current) < 5) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scrolling Down - Hide Navbar
        setIsVisible(false);
      } else {
        // Scrolling Up - Reveal Navbar
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-center px-1 sm:px-2">
        {/* Dynamic responsive container width: wider on small screens to fit all scaled links smoothly */}
        <motion.div
          className="xs:w-[92%] relative w-[96%] max-w-screen-2xl sm:w-[85%] md:w-[70%] lg:w-[60%]"
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: [0, -2, 0],
            opacity: 1,
          }}
          transition={{
            y: {
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            },
            opacity: {
              duration: 0.5,
            },
          }}
        >
          {/* Paper Background SVG */}
          <Image
            src="/images/Paper.svg"
            alt="Sketchbook Navbar"
            priority
            draggable={false}
            width={1600}
            height={220}
            className="xs:min-h-[60px] pointer-events-none h-auto min-h-[54px] w-full object-cover select-none sm:min-h-0 sm:object-contain"
          />

          {/* Header Content Overlay */}
          <div className="xs:px-6 absolute inset-0 flex items-center justify-between px-4 pb-0.5 sm:px-6 sm:pb-1 md:px-10 lg:px-16">
            {/* Logo */}
            <Link href="/" className="shrink-0 pr-1 sm:pr-0">
              <motion.div
                whileHover={{
                  rotate: [0, -10, 8, -5, 5, 0],
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="/images/Logo.svg"
                  alt="Logo"
                  width={54}
                  height={54}
                  className="xs:w-8 h-auto w-7 sm:w-8 md:w-10 lg:w-12"
                />
              </motion.div>
            </Link>

            {/* Scaled Inline Navigation (Zero scrollbars, smooth inline fit) */}
            <nav className="xs:gap-3.5 flex min-w-0 [scrollbar-width:none] items-center justify-end gap-3 overflow-x-auto overflow-y-hidden [-ms-overflow-style:none] sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 [&::-webkit-scrollbar]:hidden">
              {navItems.map((item, idx) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="xs:text-[14px] text-text-tertiary xs:tracking-normal font-gochi relative px-0.5 py-1 text-[13px] tracking-tight whitespace-nowrap transition-colors duration-200 sm:text-sm sm:tracking-wide md:text-lg lg:text-xl"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.span
                    className="relative z-10 block"
                    animate={{
                      y: hoveredIndex === idx ? -2 : 0,
                      rotate:
                        hoveredIndex === idx ? (idx % 2 === 0 ? 1.5 : -1.5) : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    {item.name}
                  </motion.span>

                  {/* Animated Hand-drawn underline SVG */}
                  <AnimatePresence>
                    {hoveredIndex === idx && (
                      <svg
                        className="pointer-events-none absolute bottom-0 left-0 z-0 h-[6px] w-full"
                        viewBox="0 0 100 10"
                        preserveAspectRatio="none"
                      >
                        <motion.path
                          d="M 2,5 Q 35,2 70,5 T 98,6"
                          fill="none"
                          stroke={COLORS.primary}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.95 }}
                          exit={{ pathLength: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                        />
                        {/* Double stroke for sketch texture */}
                        <motion.path
                          d="M 5,7 Q 45,9 85,6 T 95,8"
                          fill="none"
                          stroke={COLORS.primary}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 0.9, opacity: 0.7 }}
                          exit={{ pathLength: 0, opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: "easeOut",
                            delay: 0.05,
                          }}
                        />
                      </svg>
                    )}
                  </AnimatePresence>
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
