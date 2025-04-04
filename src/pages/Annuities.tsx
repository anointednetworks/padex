
import { NavBarDemo } from "@/components/NavBarDemo";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { ServiceHero } from "@/components/ServiceHero";
import { SEOHead } from "@/components/SEOHead";
import { ResourceList } from "@/components/resource/ResourceList";

const Annuities = () => {
  return <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <SEOHead title="Annuities" description="Secure your financial future with our annuity solutions. Learn how annuities can provide income for life and help meet your retirement goals." canonicalUrl="https://illuminated-links.com/annuities" />
      
      {/* Hero Section */}
      <div className="w-full h-96">
        <ServiceHero 
          title="Annuities" 
          subheading="Secure your peace of mind with income you cannot outlive" 
        />
      </div>
      
      {/* Content Section */}
      <div className="flex items-center justify-center py-12">
        <div className="text-left max-w-4xl px-4">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full max-w-3xl mx-auto">
            
            <h1 className="text-3xl font-bold mb-6">Annuity</h1>
            <p className="text-gray-700 mb-6">
              An annuity is an agreement where you pay a premium (either a lump sum or multiple payments) to an insurance
              company, and in return, they promise to make payments to you either now or in the future. The interest your
              money earns while it's in the annuity grows tax-deferred, meaning you don't pay taxes on it until you start
              receiving payouts or take withdrawals. These payments can continue for a set period or for the rest of your life,
              helping ensure you have income even if you live longer than expected.
            </p>
            
            <p className="text-gray-700 mb-6">
              When you withdraw or get payments, that money is taxed as ordinary income. If you pull money out before you
              are 59½, you might face a 10% federal tax penalty on top of the regular income tax. Annuities have fees and
              charges associated with the contract, and a surrender charge also may apply if the contract owner elects to give
              up the annuity before certain time-period conditions are satisfied.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Here's how the process breaks down:</h2>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li className="text-gray-700">
                <span className="font-semibold">Accumulation Phase:</span> During this phase, you contribute money to the annuity, and your investment
                grows tax-deferred, meaning you don't pay taxes on any earnings until you start receiving payments.
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Distribution Phase:</span> This is when the insurance company begins paying you back. You can choose to
                receive a lump sum or regular payments (e.g., monthly or annually), which are taxed as ordinary
                income.
              </li>
            </ul>
            
            <p className="text-gray-700 mb-8">
              Annuities are particularly valuable in retirement because they can replace the regular paycheck you no longer
              receive, offering peace of mind by reducing the risk of outliving your savings. However, they often come with
              fees, and withdrawing money before age 59½ may incur penalties, so they require careful planning.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Types of Annuities</h2>
            <p className="text-gray-700 mb-4">
              There are three primary types of annuities—fixed, variable, and indexed—each with distinct features, risks, and
              benefits. Here's a detailed look at each:
            </p>

            <h3 className="text-xl font-semibold mb-2">1. Fixed Annuities</h3>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li className="text-gray-700">
                <span className="font-semibold">How It Works:</span> A fixed annuity guarantees a specific payment amount that doesn't change, regardless of
                market performance. The insurance company invests your premium and promises a set return.
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Pros:</span>
                <ul className="list-circle pl-8 mt-1">
                  <li>Predictable, stable income.</li>
                  <li>Low risk, as payments are guaranteed.</li>
                </ul>
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Cons:</span>
                <ul className="list-circle pl-8 mt-1">
                  <li>Returns are typically lower than other annuity types.</li>
                  <li>Inflation may reduce the purchasing power of fixed payments over time.</li>
                </ul>
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Best For:</span> Conservative retirees who value security and predictable cash flow over higher growth potential.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">2. Variable Annuities</h3>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li className="text-gray-700">
                <span className="font-semibold">How It Works:</span> With a variable annuity, your payments depend on the performance of the investments (called sub-accounts, like mutual funds) you select within the annuity. You have control over how aggressively or conservatively your money is invested.
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Pros:</span>
                <ul className="list-circle pl-8 mt-1">
                  <li>Potential for higher returns if the investments perform well.</li>
                  <li>Flexibility to tailor investments to your goals.</li>
                </ul>
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Cons:</span>
                <ul className="list-circle pl-8 mt-1">
                  <li>Higher risk—payments can decrease if investments underperform, and you could lose money.</li>
                  <li>Typically comes with higher fees than fixed annuities.</li>
                </ul>
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Best For:</span> Retirees comfortable with market fluctuations who seek greater growth potential.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">3. Indexed Annuities</h3>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li className="text-gray-700">
                <span className="font-semibold">How It Works:</span> Indexed annuities tie your returns to a market index, like the S&P 500, while often providing a guaranteed minimum return. This means you can benefit from market gains (up to a cap) but are protected from major losses.
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Pros:</span>
                <ul className="list-circle pl-8 mt-1">
                  <li>Offers a balance of growth potential and downside protection.</li>
                  <li>Less risky than variable annuities due to the minimum return guarantee.</li>
                </ul>
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Cons:</span>
                <ul className="list-circle pl-8 mt-1">
                  <li>Returns are often capped, limiting how much you can earn even in a strong market.</li>
                  <li>Can be complex, with fees and terms that require careful review.</li>
                </ul>
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Best For:</span> Those who want some exposure to market growth without the full risk of a variable annuity.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Choosing the Right Annuity</h2>
            <p className="text-gray-700 mb-4">
              The best type of annuity for you depends on your financial situation and retirement goals:
            </p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li className="text-gray-700"><span className="font-semibold">Fixed:</span> Ideal if you prioritize stability and guaranteed income.</li>
              <li className="text-gray-700"><span className="font-semibold">Variable:</span> Suitable if you're willing to take on risk for the chance of higher returns.</li>
              <li className="text-gray-700"><span className="font-semibold">Indexed:</span> A good middle-ground option if you want growth potential with a safety net.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Annuities can be a powerful tool to secure retirement income, but they're not one-size-fits-all. Fees, tax implications, and your personal risk tolerance should all factor into your decision. Consulting a financial advisor can help you determine if an annuity—and which type—fits your retirement plan.
            </p>
            
          </div>
        </div>
      </div>
      
      {/* Navbar */}
      <NavBarDemo />
      
      {/* Footer */}
      <StackedCircularFooter />
    </div>;
};

export default Annuities;
