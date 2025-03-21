
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";

function Hero() {
  return <div className="w-full py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="space-y-6">
            <Badge variant="outline" className="px-3 py-1 border-blue-200 bg-blue-50 text-blue-700 rounded-full">
              Medicare Expertise
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Understanding Medicare and Your Coverage Options
            </h2>
            <p className="text-gray-600 max-w-prose">Schedule your Medicare Plan Consultation. Request a no cost one-on-one appointment.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Schedule a Consultation <MoveRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1600&auto=format&fit=crop" 
              alt="Insurance professional in a business setting" 
              className="w-full h-auto object-cover aspect-video" 
            />
          </div>
        </div>
      </div>
    </div>;
}
export { Hero };
