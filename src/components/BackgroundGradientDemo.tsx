
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Image } from "./ui/image";
import { Link } from "react-router-dom";

export function BackgroundGradientDemo() {
  // Function to handle scrolling to top when navigating
  const handleNavigation = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-20">
      {/* First Service */}
      <Link 
        to="/life-health-insurance" 
        onClick={handleNavigation}
        className="block transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-[22px]"
      >
        <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 bg-white dark:bg-zinc-900 h-full">
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
          <span className="text-blue-500 hover:underline mt-4 inline-block">
            Read more
          </span>
        </BackgroundGradient>
      </Link>

      {/* Second Service */}
      <Link 
        to="/annuities" 
        onClick={handleNavigation}
        className="block transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-[22px]"
      >
        <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 bg-white dark:bg-zinc-900 h-full">
          <div className="h-[200px] w-full flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
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
          <span className="text-blue-500 hover:underline mt-4 inline-block">
            Read more
          </span>
        </BackgroundGradient>
      </Link>

      {/* Third Service */}
      <Link 
        to="/medicare-solutions" 
        onClick={handleNavigation}
        className="block transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-[22px]"
      >
        <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 bg-white dark:bg-zinc-900 h-full">
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
          <span className="text-blue-500 hover:underline mt-4 inline-block">
            Read more
          </span>
        </BackgroundGradient>
      </Link>
    </div>
  );
}
