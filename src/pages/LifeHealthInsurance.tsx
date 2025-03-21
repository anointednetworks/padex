import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { ServiceHero } from "@/components/ServiceHero";
import { Hero } from "@/components/ui/hero-with-image-text-and-two-buttons";
const LifeHealthInsurance = () => {
  return <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="w-full h-96">
        <ServiceHero title="Life & Health Insurance" subheading="Find out about insurance you don't have to die to use" />
      </div>
      
      {/* New Hero Component Section */}
      <Hero />
      
      {/* Content Section */}
      <div className="flex items-center justify-center py-20">
        <div className="text-center max-w-4xl px-4">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Comprehensive Coverage for Your Peace of Mind</h2>
            
            <p className="text-gray-600 text-left mb-4">Why do I need Life Insurance?</p>
            
            <p className="text-gray-600 text-left mb-4">Life insurance is an essential part of financial planning. One reason most people buy life insurance is to replace income that would be lost with the death of a wage earner. An important feature of life insurance is that no income tax is payable on proceeds paid to beneficiaries.</p>
            
            
            <ul className="">
              
              
              
              
            </ul>
            
            
            
            
            <p className="text-gray-600 text-left mt-6">Do you want to know how to benefit from life insurance while living?</p>
          </div>
        </div>
      </div>
      
      {/* Navbar */}
      <NavBarDemo />
      
      {/* Footer */}
      <StackedCircularFooter />
    </div>;
};
export default LifeHealthInsurance;