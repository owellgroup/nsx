import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Download, Eye, Shield } from "lucide-react";

const documents = [
  {
    title: "Stock Exchange Control Act (Act 1 of 1985)",
    desc: "The primary legislation governing the operation of the Namibia Securities Exchange.",
    category: "Legislation",
  },
  {
    title: "NSX Listing Requirements",
    desc: "Comprehensive rules governing the listing and maintenance of listing of securities on the NSX.",
    category: "Rules",
  },
  {
    title: "NSX Trading Rules",
    desc: "Rules governing trading activity, market conduct and operational procedures on the exchange.",
    category: "Rules",
  },
  {
    title: "NSX Directive: Settlement Cycles",
    desc: "Directive on settlement cycles for local listed (T+5) and dual listed (T+3) companies.",
    category: "Directives",
  },
  {
    title: "NSX Gazette #111 — Public Holiday Trading",
    desc: "Directive on NSX closure during South African public holidays for equity market trading.",
    category: "Directives",
  },
  {
    title: "NSX Gazette #136 — Dual Listed Settlement",
    desc: "Directive on T+3 settlement cycle for all secondary listed companies.",
    category: "Directives",
  },
  {
    title: "NAMFISA Regulatory Framework",
    desc: "Supervisory framework under which the NSX operates as a self-regulatory organization.",
    category: "Legislation",
  },
];

const RulesPage = () => (
  <>
    <TopBar />
    <Header />
    <main className="py-16">
      <div className="container max-w-4xl">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-8 h-8 text-secondary" />
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">Rules, Directives & Legislation</h1>
        </div>
        <p className="text-muted-foreground text-lg mb-10">
          The NSX operates under the Stock Exchange Control Act of 1985 and is supervised by NAMFISA. Below are the key regulatory documents.
        </p>

        {["Legislation", "Rules", "Directives"].map((cat) => (
          <div key={cat} className="mb-10">
            <h2 className="font-display text-xl font-semibold text-secondary mb-4">{cat}</h2>
            <div className="space-y-4">
              {documents.filter(d => d.category === cat).map((doc) => (
                <div key={doc.title} className="bg-card border border-border rounded-lg p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground text-sm">{doc.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{doc.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button className="flex items-center gap-1.5 bg-muted hover:bg-muted/80 text-foreground px-3 py-2 rounded text-xs font-medium transition-colors">
                      <Eye className="w-3.5 h-3.5" /> View
                    </button>
                    <button className="flex items-center gap-1.5 bg-secondary text-secondary-foreground px-3 py-2 rounded text-xs font-medium hover:brightness-110 transition-all">
                      <Download className="w-3.5 h-3.5" /> Download
                    </button>
                  </div>
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

export default RulesPage;
