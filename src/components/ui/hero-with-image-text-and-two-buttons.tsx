
import { MoveRight, PhoneCall } from "lucide-react";
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
          <div className="rounded-xl overflow-hidden shadow-xl bg-gray-100">
            <div className="relative w-full h-full min-h-[300px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-blue-50 to-gray-100">
                  <div className="relative flex items-center p-8">
                    <div className="absolute z-10 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white left-0">
                      <PhoneCall className="h-6 w-6" />
                    </div>
                    <div className="relative z-0 ml-6 bg-white p-6 pl-10 rounded-lg shadow-md">
                      <h3 className="text-lg font-medium text-gray-800">Medicare Specialist</h3>
                      <p className="text-sm text-gray-500">Ready to answer your questions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}
export { Hero };
