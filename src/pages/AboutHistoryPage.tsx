import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const timeline = [
  { year: "1904", event: "Foundation of the first Namibian stock exchange in Lüderitz due to the diamond rush." },
  { year: "1910", event: "Within a few years the rush was over and the exchange closed." },
  { year: "1990", event: "National Independence from South African occupation — idea of a second Namibian stock exchange." },
  { year: "1992", event: "Official launch of the Namibian stock exchange with one dual listed firm and one stockbroker." },
  { year: "2012", event: "B2Gold entered the market by issuing a Namibian Depositary Receipt (NDR) on NSX." },
  { year: "2013", event: "Agra became the first unlisted public company to be quoted on the OTC Market." },
  { year: "2014", event: "A total of 38 companies listed on the NSX including 4 Commodity ETFs." },
  { year: "2017", event: "1st Capital Pool Company (CPC) to list and re-launch of Scholars Investment Challenge." },
  { year: "2018", event: "1st Green bond to list on the NSX and approval of two new sponsors." },
  { year: "2021", event: "Listing of Mobile Telecommunications Limited (MTC)." },
  { year: "2023", event: "Bond trading system launched and 10X ETNs listed." },
  { year: "2024", event: "CSD license issued. NSX rebranded as Namibia Securities Exchange." },
];

const AboutHistoryPage = () => (
  <>
    <TopBar />
    <Header />
    <main className="py-16">
      <div className="container max-w-4xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">History & Structure</h1>
        <p className="text-muted-foreground text-lg mb-12">
          The NSX is a not-for-profit members association, custodian of the license to operate the securities exchange, comprising 43 founder members and regulated by NAMFISA.
        </p>

        <h2 className="font-display text-2xl font-bold text-foreground mb-8">Our Timeline</h2>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
          {timeline.map((item, i) => (
            <div key={i} className={`relative flex items-start mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-12 md:pl-0`}>
                <span className="font-display text-sm font-bold text-secondary uppercase tracking-wider">{item.year}</span>
                <p className="text-foreground mt-1">{item.event}</p>
              </div>
              <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background mt-1" />
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card border border-border rounded-lg p-8">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">Organisational Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-muted rounded-lg p-5">
              <h3 className="font-display font-semibold text-foreground mb-2">NSX Members Association</h3>
              <p className="text-sm text-muted-foreground">Custodian of the license, 43 founder members, regulated by NAMFISA.</p>
            </div>
            <div className="bg-muted rounded-lg p-5">
              <h3 className="font-display font-semibold text-foreground mb-2">Board of Directors</h3>
              <p className="text-sm text-muted-foreground">Chairman: Grant Marais. 9 members of the business community + NAMFISA representative.</p>
            </div>
            <div className="bg-muted rounded-lg p-5">
              <h3 className="font-display font-semibold text-foreground mb-2">Subsidiaries</h3>
              <p className="text-sm text-muted-foreground">Transfer Secretary (100%), CSD Ltd (51% NSX, 49% Bank of Namibia), Maerua Investments (100%).</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default AboutHistoryPage;
