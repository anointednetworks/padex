import React from 'react';
import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
const Projects = () => {
  return <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <NavBarDemo />
      <div className="flex-grow flex items-center justify-center px-4 py-20">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl font-bold mb-6 tracking-tight text-gray-900">Resources</h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore our featured projects and see how we bring ideas to life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Project Alpha</h2>
              <p className="text-gray-600">A cutting-edge web application designed to streamline workflow.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Project Beta</h2>
              <p className="text-gray-600">Mobile app that connects users with local services.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Project Gamma</h2>
              <p className="text-gray-600">E-commerce platform with a focus on user experience.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Project Delta</h2>
              <p className="text-gray-600">A data analytics dashboard for business insights.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Project Epsilon</h2>
              <p className="text-gray-600">Social networking platform for creative professionals.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Project Zeta</h2>
              <p className="text-gray-600">Cloud-based storage solution with enhanced security features.</p>
            </div>
          </div>
        </div>
      </div>
      <StackedCircularFooter />
    </div>;
};
export default Projects;