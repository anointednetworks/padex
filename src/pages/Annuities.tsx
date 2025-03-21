
import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { ServiceHero } from "@/components/ServiceHero";
import { Hero } from "@/components/ui/hero-with-image-text-and-two-buttons";
import { SEOHead } from "@/components/SEOHead";

const Annuities = () => {
  return <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <SEOHead title="Annuities" description="Secure your financial future with our annuity solutions. Learn how annuities can provide income for life and help meet your retirement goals." canonicalUrl="https://illuminated-links.com/annuities" />
      
      {/* Hero Section */}
      <div className="w-full h-96">
        <ServiceHero 
          title="Annuities" 
          subheading="Secure your peace of mind with income you cannot outlive" 
        />
      </div>
      
      {/* New Hero Component Section */}
      <Hero />
      
      {/* Content Section */}
      <div className="flex items-center justify-center py-20">
        <div className="text-center max-w-4xl px-4">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full max-w-3xl mx-auto">
            
            <p className="text-gray-600 text-left mb-4">What are your retirement goals? For most people, it's making sure the money lasts through their retirement.</p>
            
            <p className="text-gray-600 text-left mb-4">Want to know the secret to having an income you cannot outlive? Find out how.</p>
            
          </div>
        </div>
      </div>
      
      {/* Navbar */}
      <NavBarDemo />
      
      {/* Footer */}
      <StackedCircularFooter />
    </div>;
};

export default Annuities;
