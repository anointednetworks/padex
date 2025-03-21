
"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

interface ServiceHeroProps {
  title: string;
  subheading?: string;
}

export function ServiceHero({ title, subheading = "Expert guidance for your financial well-being" }: ServiceHeroProps) {
  return (
    <AuroraBackground>
      <motion.div 
        initial={{
          opacity: 0.0,
          y: 40
        }} 
        whileInView={{
          opacity: 1,
          y: 0
        }} 
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut"
        }} 
        className="relative flex flex-col gap-4 items-center justify-center px-4 h-full"
      >
        <div className="text-3xl md:text-6xl font-bold dark:text-white text-center">{title}</div>
        <div className="font-extralight text-base md:text-3xl dark:text-neutral-200 py-4">
          {subheading}
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
