import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar as CalendarIcon } from "lucide-react";

const holidays2024 = [
  { date: "1 January", name: "New Year's Day", market: "Closed" },
  { date: "21 March", name: "Independence Day (NAM)", market: "Closed" },
  { date: "22 March", name: "Human Rights Day (RSA)", market: "Closed" },
  { date: "29 March", name: "Good Friday", market: "Closed" },
  { date: "1 April", name: "Family Day (RSA)", market: "Closed" },
  { date: "27 April", name: "Freedom Day (RSA)", market: "Closed" },
  { date: "1 May", name: "Workers' Day", market: "Closed" },
  { date: "4 May", name: "Cassinga Day (NAM)", market: "Closed" },
  { date: "25 May", name: "Africa Day (NAM)", market: "Closed" },
  { date: "16 June", name: "Youth Day (RSA)", market: "Closed" },
  { date: "9 August", name: "Women's Day (RSA)", market: "Closed" },
  { date: "26 August", name: "Heroes' Day (NAM)", market: "Closed" },
  { date: "24 September", name: "Heritage Day (RSA)", market: "Closed" },
  { date: "16 December", name: "Day of Reconciliation (RSA)", market: "Closed" },
  { date: "25 December", name: "Christmas Day", market: "Closed" },
  { date: "26 December", name: "Day of Goodwill", market: "Closed" },
];

const CalendarPage = () => (
  <>
    <TopBar />
    <Header />
    <main className="py-16">
      <div className="container max-w-4xl">
        <div className="flex items-center gap-3 mb-4">
          <CalendarIcon className="w-8 h-8 text-secondary" />
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">Trading Calendar</h1>
        </div>
        <p className="text-muted-foreground mb-10">
          The NSX is closed for trading and dual-listed settlements on all South African Public Holidays (for the equity market). For the bond market, the ATS follows the Namibian public holiday calendar.
        </p>

        <div className="bg-card border border-border rounded-lg overflow-hidden mb-8">
          <div className="bg-primary px-6 py-3">
            <h2 className="font-display text-lg font-semibold text-primary-foreground">2024 Public Holiday Schedule</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left py-3 px-6 font-semibold text-foreground">Date</th>
                  <th className="text-left py-3 px-6 font-semibold text-foreground">Holiday</th>
                  <th className="text-center py-3 px-6 font-semibold text-foreground">Market Status</th>
                </tr>
              </thead>
              <tbody>
                {holidays2024.map((h, i) => (
                  <tr key={i} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="py-3 px-6 font-mono text-foreground">{h.date}</td>
                    <td className="py-3 px-6 text-foreground">{h.name}</td>
                    <td className="py-3 px-6 text-center">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent">
                        {h.market}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-muted rounded-lg p-6 space-y-3">
          <h3 className="font-display font-semibold text-foreground">Important Notes</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li>The NSX is closed for trading and dual-listed settlements on all South African Public Holidays, as per NSX Gazette #111, 31 Mar 2008, for the equity market.</li>
            <li>For the bond market, the ATS follows the Namibian public holiday calendar.</li>
            <li>The end of market close times refers to the end of the administration period.</li>
            <li>All times are Namibian Standard Time.</li>
          </ul>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default CalendarPage;
