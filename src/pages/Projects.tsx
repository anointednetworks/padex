
import React from 'react';
import { NavBarDemo } from "@/components/NavBarDemo";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold mb-6 tracking-tight text-gray-900">Projects</h1>
        <p className="text-xl text-gray-600 mb-8">
          Explore our carefully crafted work showcasing our design philosophy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-400">
                Project Image {item}
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Project {item}</h2>
              <p className="text-gray-600">A showcase of our design and development expertise.</p>
            </div>
          ))}
        </div>
      </div>
      <NavBarDemo />
    </div>
  );
};

export default Projects;
