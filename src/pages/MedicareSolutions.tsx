
import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { ServiceHero } from "@/components/ServiceHero";

const MedicareSolutions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="w-full h-screen">
        <ServiceHero title="Medicare Solutions" />
      </div>
      
      {/* Content Section */}
      <div className="flex items-center justify-center py-20">
        <div className="text-center max-w-4xl px-4">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Navigate Medicare with Confidence</h2>
            
            <p className="text-gray-600 text-left mb-4">Medicare can be complex and overwhelming. Our team of Medicare specialists is dedicated to helping you understand your options and find the right coverage for your healthcare needs.</p>
            
            <p className="text-gray-600 text-left mb-4">We provide personalized guidance on all aspects of Medicare to ensure you have the right coverage while maximizing your benefits and minimizing your costs.</p>
            
            <h3 className="text-xl font-semibold mb-2 mt-6 text-gray-800">Our Medicare Services Include:</h3>
            <ul className="list-disc pl-5 mb-4 text-left text-gray-600">
              <li>Medicare Part A & B (Original Medicare) guidance</li>
              <li>Medicare Advantage (Part C) plan comparisons</li>
              <li>Medicare Supplement (Medigap) policy selection</li>
              <li>Prescription Drug (Part D) plan analysis</li>
              <li>Annual Medicare review and optimization</li>
              <li>Assistance with enrollment and transitions</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-2 mt-6 text-gray-800">Why Choose Our Medicare Services:</h3>
            <ul className="list-disc pl-5 mb-4 text-left text-gray-600">
              <li>Unbiased recommendations based on your specific needs</li>
              <li>Clear explanations of complex Medicare concepts</li>
              <li>Ongoing support as your health needs change</li>
              <li>Access to multiple carriers and plan options</li>
              <li>No additional cost for our services</li>
            </ul>
            
            <p className="text-gray-600 text-left mt-6">Whether you're approaching Medicare eligibility, already enrolled, or helping a loved one, we're here to simplify the process and ensure you have the right coverage for your healthcare journey.</p>
          </div>
        </div>
      </div>
      
      {/* Navbar */}
      <NavBarDemo />
      
      {/* Footer */}
      <StackedCircularFooter />
    </div>
  );
};

export default MedicareSolutions;
