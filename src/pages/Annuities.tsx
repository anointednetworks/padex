
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
      
      {/* Navbar - moved to top */}
      <NavBarDemo />
      
      {/* Hero Section - with specific height to avoid overlap */}
      <div className="w-full pt-16">
        <ServiceHero 
          title="Annuities" 
          subheading="Secure your peace of mind with income you cannot outlive"
          height="24rem" 
        />
      </div>
      
      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 mt-4">
        <Card className="bg-white border border-gray-100 hover:shadow-md transition-shadow rounded-xl overflow-visible max-w-2xl mx-auto">
          <CardContent className="p-8 md:p-10">
            {/* New content section */}
            <article className="prose prose-gray max-w-none">
              <h2 className="text-2xl font-bold mb-4">Annuity</h2>
              
              <p className="mb-4">
                An annuity is an agreement where you pay a premium (either a lump sum or multiple payments) to an insurance company, and in return, they promise to make payments to you either now or in the future. The interest your money earns while it's in the annuity grows tax-deferred, meaning you don't pay taxes on it until you start receiving payouts or take withdrawals. These payments can continue for a set period or for the rest of your life, helping ensure you have income even if you live longer than expected.
              </p>
              
              <p className="mb-4">
                When you withdraw or get payments, that money is taxed as ordinary income. If you pull money out before you are 59½, you might face a 10% federal tax penalty on top of the regular income tax. Annuities have fees and charges associated with the contract, and a surrender charge also may apply if the contract owner elects to give up the annuity before certain time-period conditions are satisfied.
              </p>
              
              <p className="mb-2">Here's how the process breaks down:</p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Accumulation Phase: During this phase, you contribute money to the annuity, and your investment grows tax-deferred, meaning you don't pay taxes on any earnings until you start receiving payments.</li>
                <li className="mb-2">Distribution Phase: This is when the insurance company begins paying you back. You can choose to receive a lump sum or regular payments (e.g., monthly or annually), which are taxed as ordinary income.</li>
              </ul>
              
              <p className="mb-4">
                Annuities are particularly valuable in retirement because they can replace the regular paycheck you no longer receive, offering peace of mind by reducing the risk of outliving your savings. However, they often come with fees, and withdrawing money before age 59½ may incur penalties, so they require careful planning.
              </p>

              {/* New section on Types of Annuities */}
              <h2 className="text-2xl font-bold mb-4 mt-8">Types of Annuities</h2>
              <p className="mb-4">
                There are three primary types of annuities—fixed, variable, and indexed—each with distinct features, risks, and benefits. Here's a detailed look at each:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">1. Fixed Annuities</h3>
              <p className="mb-2"><strong>How It Works:</strong> A fixed annuity guarantees a specific payment amount that doesn't change, regardless of market performance. The insurance company invests your premium and promises a set return.</p>
              
              <p className="mb-1"><strong>Pros:</strong></p>
              <ul className="list-disc pl-10 mb-3">
                <li>Predictable, stable income.</li>
                <li>Low risk, as payments are guaranteed.</li>
              </ul>
              
              <p className="mb-1"><strong>Cons:</strong></p>
              <ul className="list-disc pl-10 mb-3">
                <li>Returns are typically lower than other annuity types.</li>
                <li>Inflation may reduce the purchasing power of fixed payments over time.</li>
              </ul>
              
              <p className="mb-4"><strong>Best For:</strong> Conservative retirees who value security and predictable cash flow over higher growth potential.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">2. Variable Annuities</h3>
              <p className="mb-2"><strong>How It Works:</strong> With a variable annuity, your payments depend on the performance of the investments (called sub-accounts, like mutual funds) you select within the annuity. You have control over how aggressively or conservatively your money is invested.</p>
              
              <p className="mb-1"><strong>Pros:</strong></p>
              <ul className="list-disc pl-10 mb-3">
                <li>Potential for higher returns if the investments perform well.</li>
                <li>Flexibility to tailor investments to your goals.</li>
              </ul>
              
              <p className="mb-1"><strong>Cons:</strong></p>
              <ul className="list-disc pl-10 mb-3">
                <li>Higher risk—payments can decrease if investments underperform, and you could lose money.</li>
                <li>Typically comes with higher fees than fixed annuities.</li>
              </ul>
              
              <p className="mb-4"><strong>Best For:</strong> Retirees comfortable with market fluctuations who seek greater growth potential.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">3. Indexed Annuities</h3>
              <p className="mb-2"><strong>How It Works:</strong> Indexed annuities offer returns tied to a market index (like the S&P 500), but with protection against market downturns. They provide a guaranteed minimum return plus potential for higher returns based on the index performance.</p>
              
              <p className="mb-1"><strong>Pros:</strong></p>
              <ul className="list-disc pl-10 mb-3">
                <li>Combines features of both fixed and variable annuities.</li>
                <li>Protection against market losses while allowing participation in market gains.</li>
              </ul>
              
              <p className="mb-1"><strong>Cons:</strong></p>
              <ul className="list-disc pl-10 mb-3">
                <li>Complex fee structures and participation rates may limit upside potential.</li>
                <li>Returns are typically capped and may not fully match market performance.</li>
              </ul>
              
              <p className="mb-4"><strong>Best For:</strong> Individuals who want some market exposure but with downside protection.</p>
            </article>
            
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
      
      {/* Footer */}
      <StackedCircularFooter />
    </div>
  );
};

export default Annuities;
