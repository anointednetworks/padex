
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Image } from "./ui/image";

export function BackgroundGradientDemo() {
  return (
    <div className="flex justify-center">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <div className="h-[300px] w-full flex items-center justify-center bg-gray-100 rounded-lg">
          <img
            src="/placeholder.svg"
            alt="Product image"
            className="object-contain max-h-[250px]"
          />
        </div>
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Illuminated Links Pro
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Experience our premium navigation system with enhanced features, customizable themes, and advanced animation options for your website or application.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Learn more </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            New
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
