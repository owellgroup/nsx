import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrendingUp, TrendingDown, Download } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const indexData = [
  { code: "N098", name: "Overall", value: "1,505.50", prev: "1,550.94", movement: "-45.44", change: "-2.93%", divYield: "5.74", dec2023: "-7.83%", high: "1,603.99", low: "1,505.50", down: true },
  { code: "N099", name: "Local", value: "682.45", prev: "673.55", movement: "+8.90", change: "+1.32%", divYield: "7.34", dec2023: "+1.60%", high: "682.45", low: "670.10", down: false },
  { code: "N15", name: "Telecommunications", value: "256.24", prev: "255.71", movement: "+0.54", change: "+0.21%", divYield: "9.24", dec2023: "+1.15%", high: "256.24", low: "253.07", down: false },
  { code: "N30", name: "Financials", value: "512.48", prev: "518.59", movement: "-6.11", change: "-1.18%", divYield: "6.33", dec2023: "-6.29%", high: "541.14", low: "511.66", down: true },
  { code: "N35", name: "Real Estate", value: "1,702.74", prev: "1,677.60", movement: "+25.14", change: "+1.50%", divYield: "8.10", dec2023: "+7.82%", high: "1,717.95", low: "1,551.83", down: false },
  { code: "N40", name: "Consumer Discretionary", value: "3,675.23", prev: "3,585.45", movement: "+89.78", change: "+2.50%", divYield: "7.24", dec2023: "+5.02%", high: "3,675.23", low: "3,237.61", down: false },
  { code: "N45", name: "Consumer Staples", value: "1,301.19", prev: "1,320.68", movement: "-19.49", change: "-1.48%", divYield: "2.62", dec2023: "-3.86%", high: "1,358.72", low: "1,282.80", down: true },
  { code: "N55", name: "Basic Materials", value: "443.34", prev: "472.94", movement: "-29.60", change: "-6.26%", divYield: "5.35", dec2023: "-11.86%", high: "486.33", low: "443.34", down: true },
  { code: "N65", name: "Utilities", value: "1,107.49", prev: "1,107.49", movement: "0.00", change: "0.00%", divYield: "-", dec2023: "0.00%", high: "1,107.49", low: "1,107.49", down: false },
  { code: "J203", name: "JSE All Share Index", value: "73,423.30", prev: "74,382.00", movement: "-958.70", change: "-1.29%", divYield: "-", dec2023: "-4.51%", high: "75,709.10", low: "71,693.10", down: true },
];

const tradingData = [
  { sector: "Local (N099)", freeFloat: "16,035", shares: "479,809", value: "8,630,865", deals: 49 },
  { sector: "Telecommunications (N15)", freeFloat: "2,860", shares: "9,020", value: "108,150", deals: 1 },
  { sector: "Financials (N30)", freeFloat: "958,047", shares: "420,322", value: "44,759,770", deals: 65 },
  { sector: "Real Estate (N35)", freeFloat: "15,876", shares: "680,473", value: "10,122,247", deals: 9 },
  { sector: "Consumer Discretionary (N40)", freeFloat: "28,618", shares: "-", value: "-", deals: 0 },
  { sector: "Consumer Staples (N45)", freeFloat: "135,412", shares: "293,114", value: "46,393,812", deals: 17 },
  { sector: "Basic Materials (N55)", freeFloat: "589,283", shares: "143,314", value: "59,671,476", deals: 6 },
  { sector: "Utilities (N65)", freeFloat: "786", shares: "92,350", value: "830,227", deals: 2 },
  { sector: "Overall (N098)", freeFloat: "1,730,881", shares: "1,644,593", value: "161,931,896", deals: 104 },
];

const stockData = [
  { code: "ANM", name: "Anglo-American plc", price: "408.13", prevClose: "437.20", volume: "143,314", valueTrd: "59,671,476", deals: 6, high: "418.51", low: "408.09", divYield: "5.59%", change: "-6.6%", down: true },
  { code: "PDN", name: "Paladin Energy Limited", price: "16.32", prevClose: "16.86", volume: "-", valueTrd: "-", deals: 0, high: "16.32", low: "16.32", divYield: "-", change: "-3.2%", down: true },
  { code: "B2G", name: "B2Gold Corporation", price: "49.99", prevClose: "52.69", volume: "-", valueTrd: "-", deals: 0, high: "49.99", low: "49.99", divYield: "6.02%", change: "-5.1%", down: true },
  { code: "NBS", name: "Namibia Breweries", price: "31.48", prevClose: "30.00", volume: "136,203", valueTrd: "4,201,608", deals: 12, high: "31.48", low: "31.48", divYield: "0.00%", change: "+4.9%", down: false },
  { code: "SHP", name: "Shoprite Holdings", price: "263.45", prevClose: "268.09", volume: "156,911", valueTrd: "42,192,204", deals: 5, high: "264.54", low: "262.01", divYield: "2.52%", change: "-1.7%", down: true },
  { code: "CGP", name: "Capricorn Group Limited", price: "17.12", prevClose: "17.10", volume: "117,236", valueTrd: "2,004,564", deals: 15, high: "-", low: "-", divYield: "5.84%", change: "+0.1%", down: false },
  { code: "FSR", name: "Firstrand Limited", price: "64.67", prevClose: "66.43", volume: "21,260", valueTrd: "1,415,288", deals: 5, high: "65.30", low: "64.50", divYield: "5.93%", change: "-2.6%", down: true },
  { code: "FNB", name: "FirstRand Namibia Ltd", price: "52.00", prevClose: "52.00", volume: "1,050", valueTrd: "54,600", deals: 1, high: "-", low: "-", divYield: "11.11%", change: "0.0%", down: false },
  { code: "NED", name: "Nedbank Group Limited", price: "219.31", prevClose: "216.68", volume: "112,125", valueTrd: "24,476,031", deals: 4, high: "219.31", low: "213.81", divYield: "8.02%", change: "+1.2%", down: false },
  { code: "SBK", name: "Standard Bank Group", price: "199.09", prevClose: "201.33", volume: "47,569", valueTrd: "9,504,605", deals: 9, high: "199.09", low: "195.00", divYield: "7.00%", change: "-1.1%", down: true },
  { code: "SBN", name: "SBN Holdings Ltd", price: "8.45", prevClose: "7.80", volume: "4,950", valueTrd: "40,804", deals: 7, high: "-", low: "-", divYield: "10.41%", change: "+8.3%", down: false },
  { code: "INL", name: "Investec Limited", price: "119.66", prevClose: "121.17", volume: "4,601", valueTrd: "553,882", deals: 4, high: "120.24", low: "118.85", divYield: "6.47%", change: "-1.2%", down: true },
  { code: "SNT", name: "Santam Limited", price: "298.92", prevClose: "289.37", volume: "5,598", valueTrd: "1,645,014", deals: 7, high: "310.00", low: "290.00", divYield: "4.53%", change: "+3.3%", down: false },
  { code: "MMI", name: "Momentum Metropolitan", price: "20.21", prevClose: "20.70", volume: "4,701", valueTrd: "97,484", deals: 3, high: "21.21", low: "20.14", divYield: "5.80%", change: "-2.4%", down: true },
  { code: "OML", name: "Old Mutual Ltd", price: "11.99", prevClose: "12.29", volume: "38,613", valueTrd: "471,425", deals: 4, high: "12.14", low: "11.94", divYield: "6.85%", change: "-2.4%", down: true },
  { code: "SLM", name: "Sanlam Limited", price: "71.75", prevClose: "71.25", volume: "62,619", valueTrd: "4,496,074", deals: 6, high: "72.89", low: "71.75", divYield: "4.98%", change: "+0.7%", down: false },
  { code: "ORY", name: "Oryx Properties Limited", price: "11.90", prevClose: "12.00", volume: "113,000", valueTrd: "1,344,700", deals: 7, high: "-", low: "-", divYield: "13.05%", change: "-0.8%", down: true },
  { code: "VKE", name: "Vukile Property Fund", price: "15.35", prevClose: "15.09", volume: "567,473", valueTrd: "8,777,547", deals: 2, high: "15.48", low: "15.10", divYield: "7.62%", change: "+1.7%", down: false },
  { code: "MTC", name: "Mobile Telecommunications", price: "7.72", prevClose: "7.70", volume: "6,000", valueTrd: "46,214", deals: 4, high: "7.72", low: "7.72", divYield: "11.06%", change: "+0.3%", down: false },
  { code: "PNH", name: "Paratus Namibia Holdings", price: "11.99", prevClose: "11.99", volume: "9,020", valueTrd: "108,150", deals: 1, high: "-", low: "-", divYield: "1.67%", change: "0.0%", down: false },
  { code: "ANI", name: "Alpha Namibia Ind. Renewable", price: "8.99", prevClose: "8.99", volume: "92,350", valueTrd: "830,227", deals: 2, high: "-", low: "-", divYield: "0.00%", change: "0.0%", down: false },
];

const etfData = [
  { name: "1nvestPalladium ETF", price: "159.09", prevClose: "170.91", change: "-6.9%", down: true },
  { name: "1nvest Gold ETF NM", price: "373.83", prevClose: "371.99", change: "+0.5%", down: false },
  { name: "1nvest Platinum ETF NM", price: "161.12", prevClose: "164.08", change: "-1.8%", down: true },
  { name: "Satrix S&P Namibia Bond ETF", price: "20.65", prevClose: "20.65", change: "0.0%", down: false },
  { name: "New Gold Issuer Ltd", price: "357.77", prevClose: "355.91", change: "+0.5%", down: false },
  { name: "NewGold Palladium ETF", price: "159.62", prevClose: "171.29", change: "-6.8%", down: true },
  { name: "New Gold Platinum ETF", price: "160.19", prevClose: "162.83", change: "-1.6%", down: true },
  { name: "Satrix MSCI EMG Markets NM", price: "59.05", prevClose: "57.31", change: "+3.0%", down: false },
  { name: "Satrix MSCI World Feeder NM", price: "88.98", prevClose: "86.60", change: "+2.7%", down: false },
  { name: "Satrix Nasdaq 100 NM", price: "192.92", prevClose: "186.78", change: "+3.3%", down: false },
  { name: "Satrix S&P 500 Feeder NM", price: "99.57", prevClose: "96.82", change: "+2.8%", down: false },
];

const ChangeIndicator = ({ value, down }: { value: string; down: boolean }) => (
  <span className={`inline-flex items-center gap-1 font-mono font-semibold ${down ? "text-stat-down" : "text-stat-up"}`}>
    {down ? <TrendingDown className="w-3.5 h-3.5" /> : <TrendingUp className="w-3.5 h-3.5" />}
    {value}
  </span>
);

const MarketDataPage = () => (
  <>
    <TopBar />
    <Header />
    <main className="py-16">
      <div className="container">
        <div className="mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Market Data</h1>
          <p className="text-muted-foreground">Weekly market indices and trading reports — 05 to 09 February 2024</p>
        </div>

        <Tabs defaultValue="trading" className="w-full">
          <TabsList className="mb-8 bg-muted p-1 rounded-lg w-full sm:w-auto">
            <TabsTrigger value="trading" className="font-display font-semibold data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground px-6">
              Weekly Trading Report
            </TabsTrigger>
            <TabsTrigger value="index" className="font-display font-semibold data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground px-6">
              Weekly Index Report
            </TabsTrigger>
          </TabsList>

          {/* ====== WEEKLY TRADING REPORT ====== */}
          <TabsContent value="trading" className="space-y-8">
            <div className="flex justify-end">
              <button className="flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-2.5 rounded font-semibold text-sm hover:brightness-110 transition-all">
                <Download className="w-4 h-4" /> Download PDF
              </button>
            </div>

            {/* Market Statistics Summary */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="bg-primary px-6 py-3 flex items-center justify-between">
                <h2 className="font-display text-lg font-semibold text-primary-foreground">Market Statistics — Overall</h2>
                <span className="text-primary-foreground/70 text-sm">#24.06</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Sector</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">Free Float Mkt Cap (N$ mill)</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">Traded (shares)</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">Value Traded (N$)</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">Deals</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tradingData.map((row) => (
                      <tr key={row.sector} className={`border-b border-border hover:bg-muted/50 transition-colors ${row.sector.includes("Overall") ? "bg-muted/30 font-semibold" : ""}`}>
                        <td className="py-3 px-4 text-foreground">{row.sector}</td>
                        <td className="py-3 px-4 text-right font-mono text-foreground">{row.freeFloat}</td>
                        <td className="py-3 px-4 text-right font-mono text-muted-foreground">{row.shares}</td>
                        <td className="py-3 px-4 text-right font-mono text-muted-foreground">{row.value}</td>
                        <td className="py-3 px-4 text-right font-mono text-muted-foreground">{row.deals}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-muted/50 px-6 py-3 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm border-t border-border">
                <div><span className="text-muted-foreground">Overall YTD Shares:</span> <span className="font-mono font-semibold text-foreground">8,029,045</span></div>
                <div><span className="text-muted-foreground">Overall YTD Value:</span> <span className="font-mono font-semibold text-foreground">N$ 618,193,129</span></div>
                <div><span className="text-muted-foreground">Overall YTD Deals:</span> <span className="font-mono font-semibold text-foreground">518</span></div>
              </div>
            </div>

            {/* Individual Stocks */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="bg-nsx-dark px-6 py-3">
                <h2 className="font-display text-lg font-semibold text-primary-foreground">Individual Stock Performance</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Code</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Company</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">Price (NAD)</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">Prev Close</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">Volume</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">Value Traded</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">Deals</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">Div Yield</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stockData.map((row) => (
                      <tr key={row.code} className="border-b border-border hover:bg-muted/50 transition-colors">
                        <td className="py-2.5 px-4 font-semibold text-foreground">{row.code}</td>
                        <td className="py-2.5 px-4 text-foreground text-xs">{row.name}</td>
                        <td className="py-2.5 px-4 text-right font-mono text-foreground">{row.price}</td>
                        <td className="py-2.5 px-4 text-right font-mono text-muted-foreground">{row.prevClose}</td>
                        <td className="py-2.5 px-4 text-right font-mono text-muted-foreground">{row.volume}</td>
                        <td className="py-2.5 px-4 text-right font-mono text-muted-foreground">{row.valueTrd}</td>
                        <td className="py-2.5 px-4 text-right font-mono text-muted-foreground">{row.deals}</td>
                        <td className="py-2.5 px-4 text-right font-mono text-muted-foreground">{row.divYield}</td>
                        <td className="py-2.5 px-4 text-right">
                          <ChangeIndicator value={row.change} down={row.down} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ETFs */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="bg-secondary/90 px-6 py-3">
                <h2 className="font-display text-lg font-semibold text-secondary-foreground">Exchange Traded Funds (ETFs)</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">ETF Name</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">Price (NAD)</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">Prev Close</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {etfData.map((row) => (
                      <tr key={row.name} className="border-b border-border hover:bg-muted/50 transition-colors">
                        <td className="py-3 px-4 text-foreground">{row.name}</td>
                        <td className="py-3 px-4 text-right font-mono text-foreground">{row.price}</td>
                        <td className="py-3 px-4 text-right font-mono text-muted-foreground">{row.prevClose}</td>
                        <td className="py-3 px-4 text-right">
                          <ChangeIndicator value={row.change} down={row.down} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-muted/50 px-6 py-3 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm border-t border-border">
                <div><span className="text-muted-foreground">ETF YTD Shares:</span> <span className="font-mono font-semibold text-foreground">30,557</span></div>
                <div><span className="text-muted-foreground">ETF YTD Value:</span> <span className="font-mono font-semibold text-foreground">N$ 4,008,411</span></div>
                <div><span className="text-muted-foreground">ETF YTD Deals:</span> <span className="font-mono font-semibold text-foreground">8</span></div>
              </div>
            </div>

            {/* OTC Market */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="bg-primary/80 px-6 py-3">
                <h2 className="font-display text-lg font-semibold text-primary-foreground">OTC Market Report</h2>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted">
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Company</th>
                        <th className="text-right py-3 px-4 font-semibold text-foreground">Price</th>
                        <th className="text-right py-3 px-4 font-semibold text-foreground">Prev Close</th>
                        <th className="text-right py-3 px-4 font-semibold text-foreground">Volume</th>
                        <th className="text-right py-3 px-4 font-semibold text-foreground">Value Traded</th>
                        <th className="text-right py-3 px-4 font-semibold text-foreground">Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 text-foreground">Agra Limited</td>
                        <td className="py-3 px-4 text-right font-mono text-foreground">3.40</td>
                        <td className="py-3 px-4 text-right font-mono text-muted-foreground">3.34</td>
                        <td className="py-3 px-4 text-right font-mono text-muted-foreground">42,105</td>
                        <td className="py-3 px-4 text-right font-mono text-muted-foreground">143,157</td>
                        <td className="py-3 px-4 text-right"><ChangeIndicator value="+1.8%" down={false} /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 flex gap-6 text-sm">
                  <span className="text-muted-foreground">OTC YTD Shares: <span className="font-mono font-semibold text-foreground">176,692</span></span>
                  <span className="text-muted-foreground">OTC YTD Value: <span className="font-mono font-semibold text-foreground">N$ 590,550</span></span>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* ====== WEEKLY INDEX REPORT ====== */}
          <TabsContent value="index" className="space-y-8">
            <div className="flex justify-end">
              <button className="flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-2.5 rounded font-semibold text-sm hover:brightness-110 transition-all">
                <Download className="w-4 h-4" /> Download PDF
              </button>
            </div>

            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="bg-primary px-6 py-3">
                <h2 className="font-display text-lg font-semibold text-primary-foreground">Weekly Market Index — 05-09 February 2024</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Code</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Sector / Market</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">Actual (NAD)</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">Prev. Day</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">Movement</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">% Change</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">Div Yield</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">Since Dec 2023</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">2024 High</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">2024 Low</th>
                    </tr>
                  </thead>
                  <tbody>
                    {indexData.map((row) => (
                      <tr key={row.code} className={`border-b border-border hover:bg-muted/50 transition-colors ${row.code === "J203" ? "bg-muted/30" : ""}`}>
                        <td className="py-3 px-4 font-semibold text-foreground">{row.code}</td>
                        <td className="py-3 px-4 text-foreground">{row.name}</td>
                        <td className="py-3 px-4 text-right font-mono text-foreground">{row.value}</td>
                        <td className="py-3 px-4 text-right font-mono text-muted-foreground">{row.prev}</td>
                        <td className="py-3 px-4 text-right">
                          <ChangeIndicator value={row.movement} down={row.down} />
                        </td>
                        <td className="py-3 px-4 text-right">
                          <ChangeIndicator value={row.change} down={row.down} />
                        </td>
                        <td className="py-3 px-4 text-right font-mono text-muted-foreground">{row.divYield}</td>
                        <td className="py-3 px-4 text-right font-mono text-muted-foreground">{row.dec2023}</td>
                        <td className="py-3 px-4 text-right font-mono text-muted-foreground">{row.high}</td>
                        <td className="py-3 px-4 text-right font-mono text-muted-foreground">{row.low}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
    <Footer />
  </>
);

export default MarketDataPage;
