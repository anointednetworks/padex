import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { ServiceHero } from "@/components/ServiceHero";
import { Hero } from "@/components/ui/hero-with-image-text-and-two-buttons";
const LifeHealthInsurance = () => {
  return <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="w-full h-96">
        <ServiceHero title="Life & Health Insurance" />
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
              <li>Term Life Insurance</li>
              <li>Whole Life Insurance</li>
              <li>Universal Life Insurance</li>
              <li>Variable Life Insurance</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-2 mt-6 text-gray-800">Our Health Insurance Options:</h3>
            <ul className="list-disc pl-5 mb-4 text-left text-gray-600">
              <li>Employer-Sponsored Plans</li>
              <li>Individual Health Insurance</li>
              <li>Affordable Care Act (ACA) Plans</li>
              <li>Short-Term Health Insurance</li>
            </ul>
            
            <p className="text-gray-600 text-left mt-6">Contact us today for a personalized consultation to determine which life and health insurance options best suit your needs and budget.</p>
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