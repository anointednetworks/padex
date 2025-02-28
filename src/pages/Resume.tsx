
import React from 'react';
import { NavBarDemo } from "@/components/NavBarDemo";

const Resume = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 tracking-tight text-gray-900 text-center">Resume</h1>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Experience</h2>
            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-800">Senior Designer</h3>
              <p className="text-gray-600 mb-2">Design Studio • 2020 - Present</p>
              <p className="text-gray-700">
                Led design initiatives for multiple high-profile clients, focusing on creating minimal, 
                intuitive interfaces with attention to detail.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-800">UX Designer</h3>
              <p className="text-gray-600 mb-2">Tech Company • 2017 - 2020</p>
              <p className="text-gray-700">
                Developed user-centered design solutions emphasizing simplicity and functionality.
              </p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {["UI Design", "UX Research", "Prototyping", "Design Systems", "Front-end Development"].map((skill) => (
                <span key={skill} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
      <NavBarDemo />
    </div>
  );
};

export default Resume;
