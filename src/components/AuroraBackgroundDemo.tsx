
"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { RainbowButton } from "@/components/ui/rainbow-button";

export function AuroraBackgroundDemo() {
  const handleReadMore = () => {
    // Scroll down to the welcome section
    const heroSection = document.querySelector('.py-20');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback if the hero section can't be found
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return <AuroraBackground>
      <motion.div initial={{
      opacity: 0.0,
      y: 40
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.3,
      duration: 0.8,
      ease: "easeInOut"
    }} className="relative flex flex-col gap-4 items-center justify-center px-4">
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">Securing your financial future</div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          and your greatest wealth - your health.
        </div>
        <div className="mt-6">
          <RainbowButton onClick={handleReadMore}>Read more</RainbowButton>
        </div>
      </motion.div>
    </AuroraBackground>;
}
