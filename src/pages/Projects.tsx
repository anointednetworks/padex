
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
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Health Insurance</h2>
              <p className="text-gray-700">Insurance transfers the financial risk of life's events to an insurance company. A sound insurance strategy can help protect your family from the financial consequences of those events. A strategy can include personal insurance, liability insurance, and life insurance.</p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Life Insurance</h2>
              <p className="text-gray-700 mb-4">Life insurance isn't just about preparing for the unexpected—it's about protecting your loved ones' financial future.</p>
              <p className="text-gray-700">Discover how the right life insurance policy can provide peace of mind and security for your family when they need it most.</p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Medicare Coverage</h2>
              <p className="text-gray-700 mb-4">Understanding Medicare options doesn't have to be complicated. We help seniors navigate the complexities of Medicare Parts A, B, C, and D.</p>
              <p className="text-gray-700">Learn how to maximize your benefits and find the supplemental coverage that best suits your healthcare needs.</p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Retirement Planning</h2>
              <p className="text-gray-700 mb-4">Securing a comfortable retirement requires strategic planning and informed decision-making throughout your working years.</p>
              <p className="text-gray-700">Explore retirement savings vehicles, income strategies, and ways to protect your nest egg from market volatility and inflation.</p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Long-Term Care</h2>
              <p className="text-gray-700 mb-4">The rising costs of extended healthcare can quickly deplete your savings. Long-term care insurance helps safeguard your assets.</p>
              <p className="text-gray-700">Discover options for covering nursing home care, assisted living, and in-home healthcare services that Medicare doesn't fully cover.</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Estate Planning</h2>
              <p className="text-gray-700 mb-4">Proper estate planning ensures your assets are distributed according to your wishes while minimizing tax implications for your heirs.</p>
              <p className="text-gray-700">Learn about wills, trusts, and other essential documents that form a comprehensive estate plan to protect your legacy.</p>
            </div>
          </div>
        </div>
      </div>
      
      <StackedCircularFooter />
    </div>
  );
};

export default Projects;
