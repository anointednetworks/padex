
import React from 'react';
import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

const Glossary = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <NavBarDemo />
      <div className="flex-grow flex items-center justify-center px-4 py-20">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl font-bold mb-6 tracking-tight text-gray-900">Glossary</h1>
          <p className="text-xl text-gray-600 mb-8">
            Find definitions and explanations for key terms used throughout our services.
          </p>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-left">
            <div className="mb-6">
              <input 
                type="text" 
                placeholder="Search glossary terms..." 
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Digital Experience</h3>
                <p className="text-gray-600 mt-1">The overall experience a user has when interacting with digital products or services, encompassing usability, accessibility, and design elements.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800">User Interface (UI)</h3>
                <p className="text-gray-600 mt-1">The visual elements that users interact with in a digital product, including buttons, menus, and layout.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800">User Experience (UX)</h3>
                <p className="text-gray-600 mt-1">The overall experience a user has when interacting with a product, focusing on ease of use, accessibility, and satisfaction.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Responsive Design</h3>
                <p className="text-gray-600 mt-1">An approach to web design that makes web pages render well on various devices and window or screen sizes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StackedCircularFooter />
    </div>
  );
};

export default Glossary;
