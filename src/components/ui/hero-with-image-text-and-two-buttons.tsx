
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";

function Hero() {
  // Add a function to handle scrolling to top when navigating
  const handleNavigation = () => {
    window.scrollTo(0, 0);
  };

  return <div className="w-full py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="space-y-6">
            {/* Removed the Badge component */}
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Understanding Medicare and Your Coverage Options
            </h2>
            <p className="text-gray-600 max-w-prose">Schedule your Medicare Plan Consultation. Request a no cost one-on-one appointment.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact" onClick={handleNavigation}>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Schedule a Consultation <MoveRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl h-[300px]">
            <Image 
              src="/lovable-uploads/dc1fc61b-a39e-4f22-a2ec-efa927562736.png" 
              alt="Insurance advisor consulting with senior couple" 
              className="w-full h-full" 
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>;
}
export { Hero };
