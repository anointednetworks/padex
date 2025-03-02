
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
            <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent animate-gradient pb-2">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 mt-4">
              We would love to hear from you! Please reach out with any questions or feedback.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100">
            <form className="space-y-5">
              <div className="transition-all duration-300 hover:shadow-md rounded-lg">
                <Input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-4 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 hover:border-blue-300 transition-all"
                />
              </div>
              <div className="transition-all duration-300 hover:shadow-md rounded-lg">
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-4 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 hover:border-blue-300 transition-all"
                />
              </div>
              <div className="transition-all duration-300 hover:shadow-md rounded-lg">
                <textarea 
                  placeholder="Your Message" 
                  className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-300 transition-all"
                  rows={4}
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-white p-3 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:scale-[1.02]"
              >
                Send Message
              </Button>
            </form>
          </div>
        </BackgroundGradient>
      </div>
      <StackedCircularFooter />
    </div>
  );
};

export default Contact;
