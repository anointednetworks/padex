
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Image } from "./ui/image";

export function BackgroundGradientDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {/* First Product */}
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 bg-white dark:bg-zinc-900">
        <div className="h-[200px] w-full flex items-center justify-center bg-gray-100 rounded-lg">
          <img
            src="/placeholder.svg"
            alt="Product image"
            className="object-contain max-h-[180px]"
          />
        </div>
        <p className="text-base sm:text-lg text-black mt-4 mb-2 dark:text-neutral-200">
          Illuminated Links Pro
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Premium navigation with customizable themes and animations.
        </p>
        <button className="rounded-full px-4 py-1 text-white bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Read more</span>
        </button>
      </BackgroundGradient>

      {/* Second Product */}
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 bg-white dark:bg-zinc-900">
        <div className="h-[200px] w-full flex items-center justify-center bg-gray-100 rounded-lg">
          <img
            src="/placeholder.svg"
            alt="Product image"
            className="object-contain max-h-[180px]"
          />
        </div>
        <p className="text-base sm:text-lg text-black mt-4 mb-2 dark:text-neutral-200">
          Motion Kit Essential
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Animation toolkit with presets for smooth user interfaces.
        </p>
        <button className="rounded-full px-4 py-1 text-white bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Read more</span>
        </button>
      </BackgroundGradient>

      {/* Third Product */}
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 bg-white dark:bg-zinc-900">
        <div className="h-[200px] w-full flex items-center justify-center bg-gray-100 rounded-lg">
          <img
            src="/placeholder.svg"
            alt="Product image"
            className="object-contain max-h-[180px]"
          />
        </div>
        <p className="text-base sm:text-lg text-black mt-4 mb-2 dark:text-neutral-200">
          Gradient Studio
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Create stunning gradient effects with our design tool.
        </p>
        <button className="rounded-full px-4 py-1 text-white bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Read more</span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
