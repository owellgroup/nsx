import { Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HowToTradePage = () => (
  <>
    <TopBar />
    <Header />
    <main className="py-16">
      <div className="container max-w-4xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">How to Trade on the NSX</h1>
        <div className="prose prose-sm max-w-none text-foreground">
          <p className="text-muted-foreground text-lg mb-6">
            This information is provided by the NSX as an educational service to investors.
          </p>

          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <h2 className="font-display text-xl font-semibold mb-4">Getting Started</h2>
            <p className="text-muted-foreground mb-4">
              To become an investor, you must select and contact a registered stockbroker. A stockbroker is an appointed agent authorized to execute buy or sell instructions on your account.
            </p>
            <p className="text-muted-foreground mb-4">
              They have a fiduciary responsibility to their clients. You can give the broker permission to deal on your account (managed portfolio), or you can make decisions yourself.
            </p>
            <Link to="/trade/brokers" className="inline-block bg-secondary text-secondary-foreground px-6 py-2.5 rounded font-semibold text-sm hover:brightness-110 transition-all">
              View Brokers
            </Link>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <h2 className="font-display text-xl font-semibold mb-4">Who Trades on the NSX?</h2>
            <p className="text-muted-foreground">
              The largest buyers and sellers are institutions — pension funds, life insurance companies, and unit trusts. However, individuals can also buy and sell shares in the same way as these institutions. Government regulations oblige Namibian pension funds to hold 35% of their assets locally.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="font-display text-xl font-semibold mb-4">Trading Hours</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Market</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Segment</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Open</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Close</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border"><td className="py-3 px-4">Equity</td><td className="py-3 px-4">ZA11 (local)</td><td className="py-3 px-4">09:00</td><td className="py-3 px-4">17:00</td></tr>
                  <tr className="border-b border-border"><td className="py-3 px-4">Equity</td><td className="py-3 px-4">ZA12 (dual)</td><td className="py-3 px-4">09:00</td><td className="py-3 px-4">17:00</td></tr>
                  <tr><td className="py-3 px-4">Bond</td><td className="py-3 px-4">ON-Market</td><td className="py-3 px-4">09:00</td><td className="py-3 px-4">17:00</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default HowToTradePage;
