
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
          
          {/* Mailchimp Form */}
          <div className="mb-8 w-full flex justify-center">
            <div id="mc_embed_shell">
              <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
              <style type="text/css">
                {`
                  #mc_embed_signup{
                    background:#fff; 
                    clear:left; 
                    font:14px Helvetica,Arial,sans-serif; 
                    width: 600px;
                  }
                `}
              </style>
              <div id="mc_embed_signup">
                <form 
                  action="https://brookhaven-hathaway.us11.list-manage.com/subscribe/post?u=c9566827692b2fb74f389836c&amp;id=dabf4caebb&amp;f_id=000f72e1f0" 
                  method="post" 
                  id="mc-embedded-subscribe-form" 
                  name="mc-embedded-subscribe-form" 
                  className="validate" 
                  target="_blank"
                >
                  <div id="mc_embed_signup_scroll">
                    <h2>Subscribe</h2>
                    <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                      <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required value="" />
                    </div>
                    <div id="mce-responses" className="clear foot">
                      <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                      <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                    </div>
                    <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                      <input type="text" name="b_c9566827692b2fb74f389836c_dabf4caebb" tabIndex={-1} value="" />
                    </div>
                    <div className="optionalParent">
                      <div className="clear foot">
                        <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                        <p style={{ margin: '0px auto' }}>
                          <a href="http://eepurl.com/i1kxw-" title="Mailchimp - email marketing made easy and fun">
                            <span style={{ display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px' }}>
                              <img 
                                className="refferal_badge" 
                                src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" 
                                alt="Intuit Mailchimp" 
                                style={{ width: '220px', height: '40px', display: 'flex', padding: '2px 0px', justifyContent: 'center', alignItems: 'center' }} 
                              />
                            </span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
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
