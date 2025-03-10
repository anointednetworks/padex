
import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { ServiceHero } from "@/components/ServiceHero";
import { Hero } from "@/components/ui/hero-with-image-text-and-two-buttons";

const Annuities = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="w-full h-96">
        <ServiceHero title="Annuities" />
      </div>
      
      {/* New Hero Component Section */}
      <Hero />
      
      {/* Content Section */}
      <div className="flex items-center justify-center py-20">
        <div className="text-center max-w-4xl px-4">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Secure Your Retirement with Guaranteed Income</h2>
            
            <p className="text-gray-600 text-left mb-4">Annuities are financial products designed to provide a steady stream of income during retirement, helping you maintain financial stability and peace of mind in your golden years.</p>
            
            <p className="text-gray-600 text-left mb-4">With various annuity options available, we can help you find the right solution to meet your specific retirement goals and income needs.</p>
            
            <h3 className="text-xl font-semibold mb-2 mt-6 text-gray-800">Types of Annuities We Offer:</h3>
            <ul className="list-disc pl-5 mb-4 text-left text-gray-600">
              <li>Fixed Annuities - Providing guaranteed interest rates and predictable income</li>
              <li>Variable Annuities - Offering potential for higher returns through market investments</li>
              <li>Indexed Annuities - Linking returns to market indices while providing downside protection</li>
              <li>Immediate Annuities - Beginning payments right away for those already in retirement</li>
              <li>Deferred Annuities - Allowing your investment to grow before taking income</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-2 mt-6 text-gray-800">Benefits of Annuities:</h3>
            <ul className="list-disc pl-5 mb-4 text-left text-gray-600">
              <li>Tax-deferred growth potential</li>
              <li>Guaranteed income for life</li>
              <li>Protection against market volatility</li>
              <li>Legacy planning options</li>
              <li>Various payout options to suit your needs</li>
            </ul>
            
            <p className="text-gray-600 text-left mt-6">Schedule a consultation with our annuity specialists to discuss how these powerful retirement tools can be integrated into your comprehensive financial plan.</p>
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

export default Annuities;
