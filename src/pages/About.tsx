
import React from 'react';
import { NavBarDemo } from "@/components/NavBarDemo";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-6 tracking-tight text-gray-900">About</h1>
        <p className="text-xl text-gray-600 mb-8">
          We believe in creating digital experiences that combine beauty and functionality.
        </p>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-left">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Philosophy</h2>
          <p className="text-gray-600 mb-4">
            True innovation comes from merging thoughtful design with seamless user experience. 
            We focus on simplicity and clarity in everything we create.
          </p>
          <p className="text-gray-600">
            Every detail matters — from the subtle animations that guide users through the interface 
            to the careful typography choices that enhance readability.
          </p>
        </div>
      </div>
      <NavBarDemo />
    </div>
  );
};

export default About;
