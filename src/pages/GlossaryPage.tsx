import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const glossaryTerms = [
  { letter: "A", terms: [
    { term: "Accountant", def: "A financial expert who puts together financial statements" },
    { term: "Amortisation", def: "The setting aside of income for the repayment of debt" },
    { term: "Arbitrage", def: "The working of a market to eliminate excessive profits" },
    { term: "Auditor", def: "An independent accountant who checks financial statements" },
    { term: "Authorised shares", def: "The number of shares a company has registered as available to be issued" },
  ]},
  { letter: "B", terms: [
    { term: "Bank", def: "A financial institution that takes in money from depositors and lends it out to borrowers" },
    { term: "Bear market", def: "A stock market where prices are falling" },
    { term: "Blue chip stock", def: "Shares of successful large companies which are easily traded" },
    { term: "Bond", def: "Long-term debt issued by governments or companies" },
    { term: "Bull market", def: "A stock market where prices are rising" },
  ]},
  { letter: "D", terms: [
    { term: "Dividend", def: "The cash payout of profits to shareholders" },
    { term: "Dividend yield", def: "The dividend per share divided by the share price" },
  ]},
  { letter: "E", terms: [
    { term: "Earnings per share", def: "The profits available to shareholders divided by the number of shares" },
    { term: "Equity finance", def: "Financing business by selling shares" },
    { term: "Exchange rate", def: "The price of one currency against that of another" },
  ]},
  { letter: "I", terms: [
    { term: "Inflation", def: "The general rise of prices in an economy" },
    { term: "Initial Public Offering (IPO)", def: "The placing of shares on a stock exchange for the first time" },
    { term: "Interest rate", def: "The amount charged for borrowing or paid for saving" },
  ]},
  { letter: "L", terms: [
    { term: "Listing", def: "The placing of shares on a stock exchange so that they can be traded" },
    { term: "Liquidity", def: "The amount of trade on a stock exchange or in a particular share" },
  ]},
  { letter: "P", terms: [
    { term: "P/E ratio", def: "Share price divided by earnings per share" },
    { term: "Portfolio", def: "A selection of shares and other securities held by an investor to reduce risk" },
    { term: "Prospectus", def: "The document produced by a company that plans to list" },
  ]},
  { letter: "S", terms: [
    { term: "Share", def: "A unit of ownership in a company" },
    { term: "Stock exchange", def: "A market where shares and bonds are traded" },
    { term: "Stockbroker", def: "Someone who buys and sells shares and bonds for clients" },
  ]},
];

const GlossaryPage = () => (
  <>
    <TopBar />
    <Header />
    <main className="py-16">
      <div className="container max-w-4xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Glossary of Key Terms</h1>
        <p className="text-muted-foreground mb-10">Financial terms and definitions commonly used in securities trading.</p>

        <div className="flex flex-wrap gap-2 mb-10">
          {glossaryTerms.map((g) => (
            <a key={g.letter} href={`#letter-${g.letter}`} className="w-10 h-10 rounded bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-sm hover:bg-secondary transition-colors">
              {g.letter}
            </a>
          ))}
        </div>

        {glossaryTerms.map((g) => (
          <div key={g.letter} id={`letter-${g.letter}`} className="mb-10">
            <h2 className="font-display text-2xl font-bold text-secondary mb-4">{g.letter}</h2>
            <div className="space-y-3">
              {g.terms.map((t) => (
                <div key={t.term} className="bg-card border border-border rounded-lg p-4">
                  <span className="font-semibold text-foreground">{t.term}</span>
                  <span className="text-muted-foreground"> — {t.def}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </>
);

export default GlossaryPage;
