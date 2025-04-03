
import React from 'react';
import { AuroraBackground } from "@/components/ui/aurora-background";
import { HeroDemo } from "@/components/ui/hero-demo";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <div className="z-10 relative">
        <HeroDemo />
      </div>
    </AuroraBackground>
  );
}
