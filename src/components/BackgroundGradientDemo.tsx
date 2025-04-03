
import React from 'react';
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Link } from "react-router-dom";

export function BackgroundGradientDemo() {
  // Function to handle scrolling to top when navigating
  const handleNavigation = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-6xl mx-auto">
      <BackgroundGradient className="rounded-[22px] p-6 sm:p-10 bg-white dark:bg-zinc-900">
        <Link to="/life-health-insurance" onClick={handleNavigation} className="block hover:no-underline">
          <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white">
            Life & Health Insurance
          </h3>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Protect what matters most with our comprehensive life and health insurance solutions.
          </p>
        </Link>
      </BackgroundGradient>
      
      <BackgroundGradient className="rounded-[22px] p-6 sm:p-10 bg-white dark:bg-zinc-900">
        <Link to="/annuities" onClick={handleNavigation} className="block hover:no-underline">
          <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white">
            Annuities
          </h3>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Secure your financial future with guaranteed income through our annuity options.
          </p>
        </Link>
      </BackgroundGradient>
      
      <BackgroundGradient className="rounded-[22px] p-6 sm:p-10 bg-white dark:bg-zinc-900">
        <Link to="/medicare-solutions" onClick={handleNavigation} className="block hover:no-underline">
          <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white">
            Medicare Solutions
          </h3>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Navigate Medicare with confidence through our expert guidance and tailored solutions.
          </p>
        </Link>
      </BackgroundGradient>
    </div>
  );
}
