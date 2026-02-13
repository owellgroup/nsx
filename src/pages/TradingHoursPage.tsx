import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TradingHoursPage = () => (
  <>
    <TopBar />
    <Header />
    <main className="py-16">
      <div className="container max-w-4xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Trading Hours & Settlement</h1>
        <p className="text-muted-foreground mb-10">
          All times are Namibian Standard Time. The NSX is closed on all South African Public Holidays for equity trading and dual-listed settlements.
        </p>

        {/* Equity Trading Hours */}
        <div className="bg-card border border-border rounded-lg overflow-hidden mb-8">
          <div className="bg-primary px-6 py-3">
            <h2 className="font-display text-lg font-semibold text-primary-foreground">Equity Market — Normal Trading Hours</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left py-3 px-6 font-semibold text-foreground">Market</th>
                  <th className="text-left py-3 px-6 font-semibold text-foreground">Segment</th>
                  <th className="text-center py-3 px-6 font-semibold text-foreground">Open</th>
                  <th className="text-center py-3 px-6 font-semibold text-foreground">Close</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 px-6 text-foreground">Equity</td>
                  <td className="py-3 px-6 text-foreground">ZA11 (Local Listed)</td>
                  <td className="py-3 px-6 text-center font-mono text-foreground">09:00</td>
                  <td className="py-3 px-6 text-center font-mono text-foreground">17:00</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-6 text-foreground">Equity</td>
                  <td className="py-3 px-6 text-foreground">ZA12 (Dual Listed)</td>
                  <td className="py-3 px-6 text-center font-mono text-foreground">09:00</td>
                  <td className="py-3 px-6 text-center font-mono text-foreground">17:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Early Close */}
        <div className="bg-card border border-border rounded-lg overflow-hidden mb-8">
          <div className="bg-secondary/90 px-6 py-3">
            <h2 className="font-display text-lg font-semibold text-secondary-foreground">Early Close Trading Hours (24 & 31 December)</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left py-3 px-6 font-semibold text-foreground">Market</th>
                  <th className="text-left py-3 px-6 font-semibold text-foreground">Segment</th>
                  <th className="text-center py-3 px-6 font-semibold text-foreground">Open</th>
                  <th className="text-center py-3 px-6 font-semibold text-foreground">Close</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 px-6 text-foreground">Equity</td>
                  <td className="py-3 px-6 text-foreground">ZA11 (Local Listed)</td>
                  <td className="py-3 px-6 text-center font-mono text-foreground">09:00</td>
                  <td className="py-3 px-6 text-center font-mono text-foreground">13:00</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-6 text-foreground">Equity</td>
                  <td className="py-3 px-6 text-foreground">ZA12 (Dual Listed)</td>
                  <td className="py-3 px-6 text-center font-mono text-foreground">09:00</td>
                  <td className="py-3 px-6 text-center font-mono text-foreground">13:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bond Market */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">Bond Market</h2>
          <p className="text-muted-foreground mb-4">
            Trading is done ON-Market since October 2023. The bond market follows the Namibian public holiday calendar. Default settlement cycle is T+1, but can be done on T+1, T+2, or T+3.
          </p>
        </div>

        {/* Settlement Cycles */}
        <div className="bg-card border border-border rounded-lg overflow-hidden mb-8">
          <div className="bg-nsx-dark px-6 py-3">
            <h2 className="font-display text-lg font-semibold text-primary-foreground">Settlement Cycles</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="bg-muted rounded-lg p-4">
              <h3 className="font-display font-semibold text-foreground mb-1">Local/Primary Listed Companies</h3>
              <p className="text-sm text-muted-foreground">Settlement takes place on a T+5 cycle for all local listed companies.</p>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <h3 className="font-display font-semibold text-foreground mb-1">Dual/Secondary Listed Companies</h3>
              <p className="text-sm text-muted-foreground">Settlement takes place on a T+3 cycle for all secondary listed companies (NSX Gazette #136, February 2007).</p>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <h3 className="font-display font-semibold text-foreground mb-1">Bond Settlement</h3>
              <p className="text-sm text-muted-foreground">Settlement takes place on a T+1, T+2, or T+3 business day basis.</p>
            </div>
          </div>
        </div>

        {/* NENS Announcements */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">NENS Announcements</h2>
          <p className="text-muted-foreground text-sm mb-3">
            On 24 and 31 December, NENS will release announcements between 07:05 – 12:50. Announcements submitted after 12:50 will be stored and released the next business day.
          </p>
          <p className="text-muted-foreground text-sm">
            <strong className="text-foreground">NB:</strong> The Issuer/Sponsor must submit all relevant company and price sensitive information to the NSX as soon as possible after authorization for release on the NENS System. An announcement must be released on SENS before it's published in the newspaper.
          </p>
        </div>

        <div className="mt-8 bg-muted rounded-lg p-6 text-center">
          <p className="text-muted-foreground mb-2">Information Service Centre</p>
          <p className="text-foreground font-semibold">+264 83 722 7647 | Mon – Fri 08:00 – 17:00</p>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default TradingHoursPage;
