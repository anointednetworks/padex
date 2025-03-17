
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Why do I need Life Insurance?</h3>
              <p className="text-gray-700 mb-4">Life insurance is an essential part of financial planning. One reason most people buy life insurance is to replace income that would be lost with the death of a wage earner. An important feature of life insurance is that no income tax is payable on proceeds paid to beneficiaries. Do you want to see how the facts find the story?</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How much Insurance do I need?</h3>
              <p className="text-gray-700 mb-4">Before buying life insurance, you should assemble personal financial information and review your family's needs. There are a few factors to consider when determining how much protection you should have.</p>
              <p className="text-gray-700 mb-4">A rule of thumb used is, buy life insurance that is equal to five to seven times annual gross income. I can assist you with completing a Needs Analysis.</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Choosing a Plan</h3>
              <p className="text-gray-700 mb-4">Choosing life insurance is an important decision but could be complicated. It is important that you understand your needs and the options available to you.</p>
              <p className="text-gray-700">Buying life insurance is financial security for your family. Let's discuss life insurance you don't have to die to use. Among its many uses, life insurance helps ensure that, when you die, your dependents will have the financial resources.</p>
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
