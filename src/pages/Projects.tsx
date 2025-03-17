
import React from 'react';
import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { ServiceHero } from "@/components/ServiceHero";
import { SEOHead } from "@/components/SEOHead";
import { Card } from "@/components/ui/card";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <SEOHead 
        title="Resource Center | Illuminated Links"
        description="Explore our resource center for insightful articles on insurance, retirement planning, and financial well-being."
      />
      <NavBarDemo />
      
      <ServiceHero title="Resources" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden p-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Annuities</h2>
              <p className="text-gray-700 mb-4">What are your retirement goals? For most people, it's making sure the money lasts through their retirement.</p>
              <p className="text-gray-700">Do you know the secret about having an income for the rest of your life? Ask me how.</p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Insurance</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Why Do You Need Health Insurance?</h3>
              <p className="text-gray-700">Today, the cost of insurance is high, and still increasing. Who will pay your bills if you have a serious accident or a major illness? Let's discuss insurance you don't have to die to use. It allows you to pay your bills while recuperating, without stress.</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Health Insurance</h2>
              <p className="text-gray-700">Insurance transfers the financial risk of life's events to an insurance company. A sound insurance strategy can help protect your family from the financial consequences of those events. A strategy can include personal insurance, liability insurance, and life insurance.</p>
            </div>
          </div>
        </div>
      </div>
      
      <StackedCircularFooter />
    </div>
  );
};

export default Projects;
