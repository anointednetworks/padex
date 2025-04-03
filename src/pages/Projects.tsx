
import React, { useRef, useState, useEffect } from 'react';
import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { ServiceHero } from "@/components/ServiceHero";
import { SEOHead } from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { ResourceDocumentProcessor } from '@/components/ResourceDocumentProcessor';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Key } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Projects = () => {
  const resourcesContainerRef = useRef<HTMLDivElement>(null);
  const [showAdminTools, setShowAdminTools] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const handleAdminAuth = () => {
    if (inputPassword === adminPassword) {
      setShowAdminTools(true);
      toast({
        title: "Success",
        description: "Admin access granted"
      });
    } else {
      toast({
        title: "Error",
        description: "Invalid password",
        variant: "destructive"
      });
    }
  };

  const handleSetPassword = () => {
    if (inputPassword.length >= 4) {
      setAdminPassword(inputPassword);
      setShowAdminTools(true);
      localStorage.setItem('resourceAdminPassword', inputPassword);
      toast({
        title: "Success",
        description: "Admin password set"
      });
    } else {
      toast({
        title: "Error",
        description: "Password must be at least 4 characters",
        variant: "destructive"
      });
    }
  };

  const handleLogout = () => {
    setShowAdminTools(false);
    setInputPassword('');
  };

  useEffect(() => {
    const savedPassword = localStorage.getItem('resourceAdminPassword');
    if (savedPassword) {
      setAdminPassword(savedPassword);
    }
  }, []);

  const scrollToAnnuities = () => {
    if (resourcesContainerRef.current) {
      const yOffset = -100;
      const element = resourcesContainerRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <SEOHead title="Resource Center | Illuminated Links" description="Explore our resource center for insightful articles on insurance, retirement planning, and financial well-being." />
      <NavBarDemo />
      
      <ServiceHero title="Resources" subheading="Expert guidance for your financial well-being" onReadMoreClick={scrollToAnnuities} showReadMoreButton={true} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="resources">
            <div className="flex justify-between items-center mb-6">
              <TabsList>
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="admin" className="flex items-center">
                  <Key className="mr-2 h-4 w-4" /> Admin
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="resources">
              <div ref={resourcesContainerRef} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden p-8 pt-12">
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Annuities</h2>
                  <p className="text-gray-700 mb-4">What are your retirement goals? For most people, it's making sure the money lasts through their retirement.</p>
                  <p className="text-gray-700">Do you know the secret about having an income for the rest of your life? Ask me how.</p>
                </div>
                
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction to Health Insurance</h2>
                  <p className="text-gray-700 mb-4">Why Do You Need Health Insurance?
Today, the cost of insurance is high, and still increasing. Who will pay your bills if you have a serious accident or a major illness?  Let's discuss insurance you don't have to die to use.  It allows you to pay your bills while recuperating, without stress.  It is also an option to consider for some Long-Term Care.</p>
                  <p className="text-gray-700">Health Insurance transfers the financial risk of life's events to an insurance company. A sound insurance strategy can help protect your family from the financial consequences of those events. A strategy can include personal insurance, liability insurance, and life insurance.</p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction to Medicare</h2>
                  
                  <p className="text-gray-700 mb-4">The Medicare Program Medicare is a health insurance program for:</p>
                  <ul className="list-disc pl-8 mb-4 text-gray-700">
                    <li>People 65 and over</li>
                    <li>People under age 65 with certain disabilities</li>
                    <li>People with End-Stage Renal Disease (permanent kidney failure requiring dialysis or a kidney transplant)</li>
                  </ul>
                  
                  <p className="text-gray-700 mb-4">The Original Medicare Has Two Parts:</p>
                  <ul className="list-disc pl-8 mb-4 text-gray-700">
                    <li className="mb-1">
                      <span className="font-medium">Part A</span>
                      <p>Hospital Insurance (see Medicare Part A).</p>
                      <p>Most people pay for Part A through their payroll taxes when they are working.</p>
                    </li>
                    <li className="mb-1">
                      <span className="font-medium">Part B</span>
                      <p>Medical Insurance (see Medicare Part B)</p>
                    </li>
                    <li className="mb-1">
                      <span className="font-medium">Part C Medicare Advantage</span>
                      <p>(see Medicare Advantage)</p>
                      <p>NOTE: A Member can only receive Medicare Part C, if he/she has Part A and is currently enrolled in Part B.</p>
                    </li>
                    <li className="mb-1">
                      <span className="font-medium">Part D</span>
                      <p>(see Medicare Part D)</p>
                      <p>Prescription Drug Coverage</p>
                      <p>Medicare Prescription Drug Plans are offered by insurance companies and other private companies approved by Medicare.</p>
                    </li>
                  </ul>

                  <h3 className="text-xl font-medium text-gray-800 mt-6 mb-4">Medicare Part A</h3>
                  <p className="text-gray-700 mb-4">Medicare Part A is Hospital Insurance and covers cost associated with confinement in a hospital or skilled nursing facility. (see Medicare Part A)</p>
                  
                  <p className="text-gray-700 mb-4">In general, Part A covers:</p>
                  <ul className="list-disc pl-8 mb-4 text-gray-700">
                    <li>Inpatient care in a hospital</li>
                    <li>Skilled nursing facility care</li>
                    <li>Nursing home care (inpatient care in a skilled nursing facility that's not custodial or long-term care)</li>
                    <li>Hospice care</li>
                    <li>Home health care</li>
                  </ul>

                  <h3 className="text-xl font-medium text-gray-800 mt-6 mb-4">Medicare Part B</h3>
                  <p className="text-gray-700 mb-4">Medicare Part B is Medical Insurance and covers physicians' services, outpatient care, test, and supplies. (see Medicare Part B)</p>
                  
                  <p className="text-gray-700 mb-4">Part B covers 2 types of services:</p>
                  <ul className="list-disc pl-8 mb-4 text-gray-700">
                    <li>Medically necessary services: Services or supplies that are needed to diagnose or treat your medical condition and that meet accepted standards of medical practice.</li>
                    <li>Preventive services: Health care to prevent illness (like the flu) or detect it at an early stage, when treatment is most likely to work best.</li>
                    <li>Preventative Services are free if the services are rendered from a health care provider who accepts assignment.</li>
                  </ul>
                  
                  <p className="text-gray-700 mb-4">Part B covers services such as:</p>
                  <ul className="list-disc pl-8 mb-4 text-gray-700">
                    <li>Clinical research</li>
                    <li>Ambulance services</li>
                    <li>Durable medical equipment (DME)</li>
                    <li>Mental health:
                      <ul className="list-disc pl-8 mt-1">
                        <li>Inpatient</li>
                        <li>Outpatient</li>
                        <li>Partial hospitalization</li>
                      </ul>
                    </li>
                    <li>Limited outpatient prescription drugs</li>
                  </ul>

                  <h3 className="text-xl font-medium text-gray-800 mt-6 mb-4">Medicare Part D</h3>
                  <p className="text-gray-700 mb-4">Medicare offers insurance coverage for prescription drugs through Medicare prescriptions drug plans and other health plan options. Medicare's prescription drug coverage will typically pay over half of your drug costs, for a monthly premium. (see Medicare Part D)</p>
                  
                  <p className="text-gray-700 mb-4">Important points you need to know:</p>
                  <ul className="list-disc pl-8 mb-4 text-gray-700">
                    <li>Medicare prescription drug coverage helps you pay for the prescriptions you need.</li>
                    <li>Medicare prescription drug coverage is available to all people with Medicare.</li>
                    <li>There is additional help for those who need it most.</li>
                    <li>Medicare prescription drug coverage pays for brand name as well as generic drugs.</li>
                  </ul>

                  <h3 className="text-xl font-medium text-gray-800 mt-6 mb-4">Medigap Policies</h3>
                  <p className="text-gray-700 mb-4">Medigap is Medicare Supplement Insurance that helps fill "gaps" in Original Medicare and is sold by private companies. Original Medicare pays for much, but not all, of the cost for covered health care services and supplies. A Medicare Supplement Insurance (Medigap) policy can help pay some of the remaining health care costs, like:</p>
                  <ul className="list-disc pl-8 mb-4 text-gray-700">
                    <li>Copayments</li>
                    <li>Coinsurance</li>
                    <li>Deductibles</li>
                  </ul>
                  
                  <p className="text-gray-700 mb-4">Some Medigap policies also cover services that Original Medicare doesn't cover, like medical care when you travel outside the U.S. If you have Original Medicare and you buy a Medigap policy, here's what happens:</p>
                  <ul className="list-disc pl-8 mb-4 text-gray-700">
                    <li>Medicare will pay its share of the Medicare-approved amount for covered health care costs.</li>
                    <li>Then, your Medigap policy pays its share. Let's discuss how to make the decision that best suites you.</li>
                  </ul>
                  
                  <h3 className="font-bold text-gray-800 mb-4 text-2xl">Life Insurance</h3>
                  <p className="text-gray-700 mb-4">Why do I need Life Insurance? Life insurance is an essential part of financial planning. One reason most people buy life insurance is to replace income that would be lost with the death of a wage earner.</p>

                  <p className="text-gray-700 mb-4">An important feature of life insurance is that no income tax is payable on proceeds paid to beneficiaries. Do you want to see how the facts find the story?</p>

                  <p className="text-gray-700 mb-4">How much Insurance do I need? Before buying life insurance, you should assemble personal financial information and review your family's needs. There are a few factors to consider when determining how much protection you should have.</p>

                  <p className="text-gray-700 mb-4">A rule of thumb used is, buy life insurance that is equal to five to seven times annual gross income. I can assist you with completing a Needs Analysis.</p>

                  <h4 className="text-lg font-medium text-gray-800 mt-6 mb-4">Choosing a Plan</h4>
                  <p className="text-gray-700 mb-4">Choosing life insurance is an important decision but could be complicated. It is important that you understand your needs and the options available to you.</p>

                  <p className="text-gray-700 mb-4">Buying life insurance is financial security for your family. Let's discuss life insurance you don't have to die to use. Among its many uses, life insurance helps ensure that, when you die, your dependents will have the financial resources needed to protect their home, and the income needed to run the household.</p>
                </div>
                
                <div className="mb-12">
                  <h2 className="font-bold text-gray-800 mb-4 text-2xl">Intro to Long Term Care</h2>
                  <p className="text-gray-700 mb-4">What is Long Term Care?</p>

                  <p className="text-gray-700 mb-4">Long Term Care is the assistance individuals need when they are unable to care for themselves and need help with Activities of Daily Living (ADLs):</p>
                  <ul className="list-disc pl-8 mb-4 text-gray-700">
                    <li>bathing</li>
                    <li>dressing</li>
                    <li>transferring</li>
                    <li>toileting</li>
                    <li>continence (control of bodily functions)</li>
                    <li>eating</li>
                  </ul>
                  
                  <p className="text-gray-700 mb-4">- or they have severe cognitive impairment such as Alzheimer's disease. The need for long term care can result from an accident, chronic illness or short-term disability, or from advance age. Long term care can include a broad range of services, provided in any setting outside a hospital. It might be help with simple daily tasks like bathing or dressing. It might include skilled care in your own home, an assisted living facility, some other community resources, or a nursing facility.</p>
                  
                  <p className="text-gray-700 mb-4">Where will your retirement money come from? If you're like most people, qualified-retirement plans, Social Security, personal savings and investments are expected to play a role. Once you have estimated the amount of money you may need for retirement, a sound approach involves taking a close look at your potential retirement-income sources.</p>

                  <p className="text-gray-700 mb-4 pb-4">When you retire, how will you treat your next chapter?</p>
                </div>
                
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Tax</h2>
                  <p className="text-gray-700 mb-4">Understanding tax strategies and managing your tax bill should be part of any sound financial approach. Some taxes can be deferred, and others can be managed through tax-efficient investing. With careful and consistent preparation, you may be able to manage the impact of taxes on your financial efforts.</p>
                </div>
                
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
                  <p className="text-gray-700">We would love to hear from you! Please reach out with any questions or feedback.</p>
                </div>
                
                <div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="admin">
              <Card className="p-6 mb-6">
                {!adminPassword ? <div className="space-y-4">
                    <h3 className="text-lg font-medium">Set Admin Password</h3>
                    <p className="text-sm text-gray-500">
                      Create a password to protect the admin tools. This will be stored locally in your browser.
                    </p>
                    <div className="flex gap-2">
                      <Input type="password" placeholder="Set a password" value={inputPassword} onChange={e => setInputPassword(e.target.value)} />
                      <Button onClick={handleSetPassword}>Set Password</Button>
                    </div>
                  </div> : !showAdminTools ? <div className="space-y-4">
                    <h3 className="text-lg font-medium">Admin Login</h3>
                    <div className="flex gap-2">
                      <Input type="password" placeholder="Enter admin password" value={inputPassword} onChange={e => setInputPassword(e.target.value)} />
                      <Button onClick={handleAdminAuth}>Login</Button>
                    </div>
                  </div> : <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium">Admin Tools</h3>
                      <Button variant="outline" size="sm" onClick={handleLogout}>
                        Logout
                      </Button>
                    </div>
                    <p className="text-sm text-gray-500">
                      Use these tools to manage content. When you're done, click "Logout" to hide the admin tools.
                    </p>
                    <div className="flex gap-2">
                      <Button variant="destructive" size="sm" onClick={() => {
                    localStorage.removeItem('resourceAdminPassword');
                    setAdminPassword('');
                    setShowAdminTools(false);
                    toast({
                      title: "Success",
                      description: "Admin access removed"
                    });
                  }}>
                        Delete Admin Access
                      </Button>
                    </div>
                  </div>}
              </Card>
              
              {showAdminTools && <ResourceDocumentProcessor />}
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <StackedCircularFooter />
    </div>;
};

export default Projects;
