import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Briefcase, HelpCircle, BookOpen, Shield, FileText, Scale } from "lucide-react";

const insightLinks = [
  { icon: Briefcase, title: "Careers", desc: "View current openings at the NSX", path: "/insight/careers" },
  { icon: HelpCircle, title: "FAQ", desc: "Frequently asked questions about the NSX", path: "/insight/faq" },
  { icon: BookOpen, title: "Glossary", desc: "Key financial terms and definitions", path: "/insight/glossary" },
  { icon: Shield, title: "NamCode", desc: "Corporate Governance Code for Namibia", path: "/insight/namcode" },
  { icon: FileText, title: "NSX Annual Reports", desc: "View and download annual reports", path: "/insight/reports" },
  { icon: Scale, title: "Rules & Legislation", desc: "Regulatory documents and directives", path: "/insight/rules" },
];

const InsightPage = () => (
  <>
    <TopBar />
    <Header />
    <main className="py-16">
      <div className="container max-w-4xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Insight</h1>
        <p className="text-muted-foreground text-lg mb-10">
          Explore resources, reports, and information about the Namibia Securities Exchange.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {insightLinks.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="bg-card border border-border rounded-lg p-6 hover:border-secondary/40 hover:shadow-md transition-all group flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                <item.icon className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-secondary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default InsightPage;
