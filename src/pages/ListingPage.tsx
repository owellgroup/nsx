import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, FileText, TrendingUp, Shield } from "lucide-react";

const ListingPage = () => (
  <>
    <TopBar />
    <Header />
    <main className="py-16">
      <div className="container">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Listing on the NSX</h1>
        <p className="text-muted-foreground text-lg mb-12 max-w-3xl">
          The NSX provides companies with access to capital markets through a regulated listing process. Whether you're a local enterprise or an international company looking for dual listing, the NSX offers a transparent and efficient path to public markets.
        </p>

        {/* Listing Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: TrendingUp, title: "Access to Capital", desc: "Raise equity and debt capital from institutional and retail investors across Namibia." },
            { icon: Building2, title: "Enhanced Profile", desc: "Gain credibility, visibility and prestige through a public listing on Namibia's exchange." },
            { icon: Shield, title: "Regulatory Framework", desc: "Operate under a transparent, well-regulated environment supervised by NAMFISA." },
            { icon: FileText, title: "Dual Listing", desc: "Benefit from dual listing opportunities with the JSE and other African exchanges." },
          ].map((f) => (
            <div key={f.title} className="bg-card border border-border rounded-lg p-6 hover:border-secondary/40 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <f.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Market Structure */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">Market Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary text-primary-foreground rounded-lg p-8">
              <h3 className="font-display text-xl font-bold mb-3">Main Board</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                For established companies meeting full listing requirements. Includes equities, bonds, and ETFs with comprehensive disclosure standards.
              </p>
            </div>
            <div className="bg-secondary text-secondary-foreground rounded-lg p-8">
              <h3 className="font-display text-xl font-bold mb-3">DevX Board</h3>
              <p className="text-secondary-foreground/80 text-sm leading-relaxed">
                The Development Capital Board is designed for growth-stage companies seeking capital. Features relaxed listing criteria to encourage new listings.
              </p>
            </div>
            <div className="bg-nsx-dark text-primary-foreground rounded-lg p-8">
              <h3 className="font-display text-xl font-bold mb-3">OTC Market</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                The Over-the-Counter market administered by the NSX for unlisted public companies seeking a regulated trading environment.
              </p>
            </div>
          </div>
        </div>

        {/* Asset Classes */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">Asset Classes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Equities", desc: "Ordinary shares of local and dual-listed companies" },
              { name: "Bonds", desc: "Government, corporate, and sustainable bonds" },
              { name: "ETFs", desc: "Exchange Traded Funds tracking various indices" },
              { name: "ETNs", desc: "Exchange Traded Notes for diversified exposure" },
            ].map((a) => (
              <div key={a.name} className="bg-card border border-border rounded-lg p-5">
                <h3 className="font-display font-semibold text-foreground mb-1">{a.name}</h3>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Listing Process */}
        <div className="bg-card border border-border rounded-lg p-8">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">Listing Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Appoint a Sponsor", desc: "Engage an NSX-approved sponsor to guide you through the listing process." },
              { step: "02", title: "Prepare Documentation", desc: "Draft your prospectus or pre-listing statement with all required disclosures." },
              { step: "03", title: "NSX Review", desc: "Submit your application for review by the NSX Listings Committee." },
              { step: "04", title: "List & Trade", desc: "Upon approval, your securities are listed and available for trading on the exchange." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="font-display text-lg font-bold text-secondary">{s.step}</span>
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Interested in listing your company on the NSX?</p>
          <a href="tel:0812320168" className="inline-block bg-secondary text-secondary-foreground px-8 py-3 rounded font-semibold text-sm hover:brightness-110 transition-all">
            Contact Us Today
          </a>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default ListingPage;
