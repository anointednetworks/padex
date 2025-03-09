import { NavBarDemo } from "@/components/NavBarDemo";
import { BackgroundGradientDemo } from "@/components/BackgroundGradientDemo";
import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
const Index = () => {
  return <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Aurora Background Demo Section */}
      <div className="w-full h-screen">
        <AuroraBackgroundDemo />
      </div>
      
      {/* Hero Section */}
      <div className="flex items-center justify-center py-20">
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-5xl font-bold mb-6 tracking-tight text-gray-900">Welcome to Padex Benefit Advisors</h1>
          <p className="text-xl text-gray-600 mb-8">Experience seamless navigation with our beautiful, animated interface.</p>
          <div className="flex justify-center mt-12">
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Health Is Your Greatest Wealth</h2>
              <p className="text-gray-600">Navigating today’s economic landscape comes with challenges, but it also brings opportunities for those who recognize long-term trends.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Gradient Section */}
      <div className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Services</h2>
        <BackgroundGradientDemo />
      </div>
      
      {/* Navbar */}
      <NavBarDemo />
      
      {/* Footer */}
      <StackedCircularFooter />
    </div>;
};
export default Index;