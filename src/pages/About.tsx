import React from 'react';
import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
const About = () => {
  return <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <NavBarDemo />
      <div className="flex-grow flex items-center justify-center px-4 py-20">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl font-bold mb-6 tracking-tight text-gray-900">About Us</h1>
          <p className="text-xl text-gray-600 mb-8">
            We believe in creating digital experiences that combine beauty and functionality.
          </p>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-left">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Philosophy</h2>
            <p className="text-gray-600 mb-4">Padex Benefit Advisors is an independent insurance firm dedicated to finding the most viable solutions for individuals, families, and businesses.  We focus on securing your financial future and your greatest wealth - your health. With a focus on Annuities, Life Insurance, and Medicare services, we match your unique needs with the most suitable coverage options. We combine industry expertise with a client-first approach, ensuring personalized solutions and guidance every step of the way. We believe in building lasting relationships founded on trust, transparency, and exceptional service—helping you protect what matters most today, so you can look forward to tomorrow with confidence.</p>
            <p className="text-gray-600">
              Every detail matters — from the subtle animations that guide users through the interface 
              to the careful typography choices that enhance readability.
            </p>
          </div>
        </div>
      </div>
      <StackedCircularFooter />
    </div>;
};
export default About;