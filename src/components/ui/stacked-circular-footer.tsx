
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

function StackedCircularFooter() {
  return (
    <footer className="bg-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/205d5d94-d950-49f6-a520-d2bdb3a39474.png"
              alt="Padex Benefit Advisors Logo"
              className="h-36 w-auto"
            />
          </div>
          <div className="mb-8 flex space-x-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
          
          {/* Mailchimp Form - Shortened Version */}
          <div className="mb-8 w-full max-w-md">
            <div id="mc_embed_signup" className="bg-white p-4 rounded-lg shadow-sm">
              <form 
                action="https://brookhaven-hathaway.us11.list-manage.com/subscribe/post?u=c9566827692b2fb74f389836c&amp;id=dabf4caebb&amp;f_id=000f72e1f0" 
                method="post" 
                id="mc-embedded-subscribe-form" 
                name="mc-embedded-subscribe-form" 
                className="validate" 
                target="_blank"
              >
                <div id="mc_embed_signup_scroll">
                  <h2 className="text-lg font-medium mb-2">Subscribe to our newsletter</h2>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="flex-grow">
                      <input 
                        type="email" 
                        name="EMAIL" 
                        className="required email w-full px-3 py-2 border border-gray-300 rounded-md" 
                        id="mce-EMAIL" 
                        placeholder="Email Address *" 
                        required 
                      />
                    </div>
                    <div>
                      <input 
                        type="submit" 
                        name="subscribe" 
                        id="mc-embedded-subscribe" 
                        className="bg-primary text-white px-4 py-2 rounded-md cursor-pointer hover:bg-primary/90" 
                        value="Subscribe" 
                      />
                    </div>
                  </div>
                  <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                    <input type="text" name="b_c9566827692b2fb74f389836c_dabf4caebb" tabIndex={-1} value="" />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Padex Benefit Advisors. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { StackedCircularFooter };
