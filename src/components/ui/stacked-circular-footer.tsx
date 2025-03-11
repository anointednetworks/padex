
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

// Add type definitions for Mailchimp globals
declare global {
  interface Window {
    fnames: string[];
    ftypes: string[];
    $mcj: any;
    jQuery: any;
  }
}

function StackedCircularFooter() {
  // Add effect to load Mailchimp script after component mounts
  useEffect(() => {
    // Load Mailchimp validation script
    const script = document.createElement('script');
    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize Mailchimp validation when script is loaded
    script.onload = () => {
      // Initialize Mailchimp globals if jQuery is loaded
      if (window.jQuery) {
        (function($) {
          window.fnames = window.fnames || [];
          window.ftypes = window.ftypes || [];
          window.fnames[0]='EMAIL';
          window.ftypes[0]='email';
          window.fnames[1]='FNAME';
          window.ftypes[1]='text';
          window.fnames[3]='ADDRESS';
          window.ftypes[3]='address';
          window.fnames[4]='PHONE';
          window.ftypes[4]='phone';
          window.fnames[6]='COMPANY';
          window.ftypes[6]='text';
        }(window.jQuery));
        window.$mcj = window.jQuery.noConflict(true);
      }
    };

    return () => {
      // Clean up script when component unmounts
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

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
          
          {/* Mailchimp Form */}
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
                  <h2 className="text-lg font-medium mb-2">Subscribe</h2>
                  <div className="indicates-required text-xs mb-2"><span className="asterisk text-red-500">*</span> indicates required</div>
                  <div className="mc-field-group mb-4">
                    <label htmlFor="mce-EMAIL" className="block text-sm mb-1">
                      Email Address <span className="asterisk text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="EMAIL" 
                      className="required email w-full px-3 py-2 border border-gray-300 rounded-md" 
                      id="mce-EMAIL" 
                      required 
                    />
                  </div>
                  <div id="mce-responses" className="clear foot">
                    <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                    <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                  </div>
                  <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                    <input type="text" name="b_c9566827692b2fb74f389836c_dabf4caebb" tabIndex={-1} value="" readOnly />
                  </div>
                  <div className="optionalParent">
                    <div className="clear foot flex flex-col sm:flex-row items-center justify-between">
                      <input 
                        type="submit" 
                        name="subscribe" 
                        id="mc-embedded-subscribe" 
                        className="bg-primary text-white px-4 py-2 rounded-md cursor-pointer hover:bg-primary/90 mb-2 sm:mb-0" 
                        value="Subscribe" 
                      />
                      <p className="text-xs text-gray-500 mt-2 sm:mt-0">
                        Powered by Mailchimp
                      </p>
                    </div>
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
