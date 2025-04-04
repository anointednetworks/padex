
import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { ServiceHero } from "@/components/ServiceHero";
import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const Annuities = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <SEOHead 
        title="Annuities" 
        description="Secure your financial future with our annuity solutions. Learn how annuities can provide income for life and help meet your retirement goals." 
        canonicalUrl="https://illuminated-links.com/annuities" 
      />
      
      {/* Hero Section */}
      <div className="w-full h-96">
        <ServiceHero 
          title="Annuities" 
          subheading="Secure your peace of mind with income you cannot outlive" 
        />
      </div>
      
      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <Card className="bg-white border border-gray-100 hover:shadow-md transition-shadow rounded-xl overflow-visible max-w-2xl mx-auto">
          <CardContent className="p-8 md:p-10">
            {/* Content cleared - ready for new content */}
            
            <div className="mt-10">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center">
                  <div className="w-full sm:w-1/3">
                    <img 
                      src="/lovable-uploads/22d461b9-3797-4850-830d-5e5bdeecd9e4.png" 
                      alt="Annuities" 
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </div>
                  <div className="w-full sm:w-2/3">
                    <h3 className="text-2xl font-bold mb-4">Ready to Secure Your Future?</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Our financial advisors can help you navigate the complex world of annuities and find the solution that's right for your retirement needs.
                    </p>
                    <a 
                      href="/contact" 
                      className="bg-primary text-white px-6 py-3 rounded-full inline-block hover:bg-opacity-90 transition-colors"
                    >
                      Schedule a Consultation
                    </a>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Navbar */}
      <NavBarDemo />
      
      {/* Footer */}
      <StackedCircularFooter />
    </div>
  );
};

export default Annuities;
