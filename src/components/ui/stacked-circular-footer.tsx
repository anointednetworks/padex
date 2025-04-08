import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
        (function ($) {
          window.fnames = window.fnames || [];
          window.ftypes = window.ftypes || [];
          window.fnames[0] = 'EMAIL';
          window.ftypes[0] = 'email';
          window.fnames[1] = 'FNAME';
          window.ftypes[1] = 'text';
          window.fnames[3] = 'ADDRESS';
          window.ftypes[3] = 'address';
          window.fnames[4] = 'PHONE';
          window.ftypes[4] = 'phone';
          window.fnames[6] = 'COMPANY';
          window.ftypes[6] = 'text';
        })(window.jQuery);
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
  return <footer className="bg-gray-50 py-10 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Logo and Contact Information */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <img src="/lovable-uploads/205d5d94-d950-49f6-a520-d2bdb3a39474.png" alt="Padex Benefit Advisors Logo" className="h-24 w-auto" />
            
            {/* Contact Information */}
            <div className="text-sm text-gray-600 space-y-1 text-center md:text-left">
              <p className="font-medium">Padex Benefit Advisors, LLC</p>
              <p>3060 Mercer University Dr</p>
              <p>Ste 110 #614</p>
              <p>Atlanta, GA 30341</p>
              <p>Office: (470) 464-8950</p>
              <p>eFax: (470) 464-7740</p>
              <p>Email: <a href="mailto:pwilliams@padexadvisors.com" className="hover:underline">pwilliams@padexadvisors.com</a></p>
              <p>Website: <a href="https://www.padexadvisors.com" className="hover:underline" target="_blank" rel="noopener noreferrer">www.padexadvisors.com</a></p>
            </div>

            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="rounded-full h-9 w-9">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-9 w-9">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <a 
                href="https://www.instagram.com/padexforlife?igsh=ejFxOG9ud3dhYThu&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon" className="rounded-full h-9 w-9">
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </a>
              <a 
                href="https://www.linkedin.com/in/paddywilliams/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon" className="rounded-full h-9 w-9">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Padex Benefit Advisors. All rights reserved.
            </p>
          </div>
          
          {/* Mailchimp Form */}
          <div className="w-full max-w-md mx-auto md:ml-auto md:mr-0">
            <div id="mc_embed_signup" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <form action="https://brookhaven-hathaway.us11.list-manage.com/subscribe/post?u=c9566827692b2fb74f389836c&amp;id=dabf4caebb&amp;f_id=000f72e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                <div id="mc_embed_signup_scroll">
                  <h2 className="text-lg font-medium mb-2">Stay Updated...Subscribe!</h2>
                  <div className="indicates-required text-xs mb-2"><span className="asterisk text-red-500">*</span> indicates required</div>
                  
                  <div className="mc-field-group mb-4">
                    <Label htmlFor="mce-EMAIL" className="block text-sm mb-1">
                      Email Address <span className="asterisk text-red-500">*</span>
                    </Label>
                    <Input type="email" name="EMAIL" className="required email w-full" id="mce-EMAIL" required />
                  </div>
                  
                  <div id="mce-responses" className="clear foot">
                    <div className="response" id="mce-error-response" style={{
                    display: 'none'
                  }}></div>
                    <div className="response" id="mce-success-response" style={{
                    display: 'none'
                  }}></div>
                  </div>
                  
                  <div aria-hidden="true" style={{
                  position: 'absolute',
                  left: '-5000px'
                }}>
                    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                    <input type="text" name="b_c9566827692b2fb74f389836c_dabf4caebb" tabIndex={-1} value="" readOnly />
                  </div>
                  
                  <div className="optionalParent">
                    <div className="clear foot">
                      <Button type="submit" name="subscribe" id="mc-embedded-subscribe" className="w-full mt-2" value="Subscribe">
                        Subscribe
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}
export { StackedCircularFooter };
