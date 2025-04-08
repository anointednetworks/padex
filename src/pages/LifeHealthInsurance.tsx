
import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { ServiceHero } from "@/components/ServiceHero";
import { Hero } from "@/components/ui/hero-with-image-text-and-two-buttons";
import { HealthInsuranceSection } from "@/components/resource/HealthInsuranceSection";
import { LifeInsuranceSection } from "@/components/resource/LifeInsuranceSection";
import { Image } from "@/components/ui/image";
import { SEOHead } from "@/components/SEOHead";

const LifeHealthInsurance = () => {
  return <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <SEOHead 
        title="Life & Health Insurance"
        description="Explore comprehensive Life and Health Insurance options and find out about insurance benefits you can use while living."
      />
      
      {/* Hero Section */}
      <div className="w-full h-96">
        <ServiceHero title="Life & Health Insurance" subheading="Find out about insurance you don't have to die to use" />
      </div>
      
      {/* Featured Image Section */}
      <div className="w-full flex justify-center py-8">
        <div className="w-full max-w-4xl h-[400px] bg-white rounded-xl overflow-hidden shadow-md">
          <Image 
            src="/lovable-uploads/a17ad995-1411-41dd-a4c2-0bd5b82a1ba7.png"
            alt="Life Insurance Comparison Chart showing Term Life vs Whole Life" 
            className="w-full h-full" 
            objectFit="contain"
          />
        </div>
      </div>
      
      {/* New Hero Component Section */}
      <Hero />
      
      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full max-w-4xl mx-auto">
          <HealthInsuranceSection />
          <LifeInsuranceSection />
          
          <div className="mt-8 text-center">
            <p className="text-lg font-medium text-blue-600">Do you want to know how to benefit from life insurance while living?</p>
            <p className="mt-2 text-gray-600">Contact us today for a personalized consultation.</p>
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
