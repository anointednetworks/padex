
import React from 'react';
import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <NavBarDemo />
      <div className="flex-grow flex items-center justify-center px-4 py-12 sm:py-20">
        <BackgroundGradient containerClassName="max-w-3xl w-full" className="p-8 rounded-3xl">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 via-red-500 via-orange-500 via-yellow-500 via-green-500 to-blue-600 bg-clip-text text-transparent animate-gradient pb-2">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 mt-4">
              We would love to hear from you! Please reach out with any questions or feedback.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100 relative rainbow-border-container">
            <form className="space-y-5">
              <div className="transition-all duration-300 hover:shadow-md rounded-lg overflow-hidden relative input-rainbow-glow">
                <Input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-4 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 hover:border-blue-300 transition-all z-10 relative bg-white"
                />
              </div>
              <div className="transition-all duration-300 hover:shadow-md rounded-lg overflow-hidden relative input-rainbow-glow">
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-4 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 hover:border-blue-300 transition-all z-10 relative bg-white"
                />
              </div>
              <div className="transition-all duration-300 hover:shadow-md rounded-lg overflow-hidden relative input-rainbow-glow">
                <textarea 
                  placeholder="Your Message" 
                  className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-300 transition-all z-10 relative bg-white"
                  rows={4}
                />
              </div>
              <div className="relative rounded-lg overflow-hidden rainbow-button-container">
                <Button 
                  type="submit" 
                  className="w-full bg-black text-white p-3 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:scale-[1.02] z-10 relative"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </BackgroundGradient>
      </div>
      <StackedCircularFooter />
    </div>
  );
};

export default Contact;
