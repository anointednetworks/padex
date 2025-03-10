
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Image } from "./ui/image";

export function BackgroundGradientDemo() {
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {/* First Service */}
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 bg-white dark:bg-zinc-900">
        <div className="h-[200px] w-full flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            alt="Life and Health Insurance" 
            className="object-cover w-full h-full"
            width={400}
            height={200} 
          />
        </div>
        <p className="text-base sm:text-lg text-black mt-4 mb-2 dark:text-neutral-200">Life & Health Insurance</p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Protect your future and loved ones with comprehensive coverage options.
        </p>
        <button className="rounded-full px-4 py-1 text-white bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Read more</span>
        </button>
      </BackgroundGradient>

      {/* Second Service */}
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 bg-white dark:bg-zinc-900">
        <div className="h-[200px] w-full flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
            alt="Annuities" 
            className="object-cover w-full h-full"
            width={400}
            height={200} 
          />
        </div>
        <p className="text-base sm:text-lg text-black mt-4 mb-2 dark:text-neutral-200">
          Annuities
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Secure your retirement with guaranteed income solutions.
        </p>
        <button className="rounded-full px-4 py-1 text-white bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Read more</span>
        </button>
      </BackgroundGradient>

      {/* Third Service */}
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 bg-white dark:bg-zinc-900">
        <div className="h-[200px] w-full flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
            alt="Medicare Solutions" 
            className="object-cover w-full h-full"
            width={400}
            height={200} 
          />
        </div>
        <p className="text-base sm:text-lg text-black mt-4 mb-2 dark:text-neutral-200">Medicare Solutions</p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Navigate Medicare options with expert guidance and support.
        </p>
        <button className="rounded-full px-4 py-1 text-white bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Read more</span>
        </button>
      </BackgroundGradient>
    </div>;
}
