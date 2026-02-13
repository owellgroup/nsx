import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";

const NamCodePage = () => (
  <>
    <TopBar />
    <Header />
    <main className="py-16">
      <div className="container max-w-4xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">NamCode</h1>
        <p className="text-muted-foreground text-lg mb-10">
          The Corporate Governance Code for Namibia (NamCode) provides guidelines for good corporate governance practices for all entities in Namibia.
        </p>

        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">About the NamCode</h2>
          <p className="text-muted-foreground mb-4">
            The NamCode was developed to provide a comprehensive set of principles and practices for corporate governance in Namibia. It is based on international best practices and adapted to the Namibian context.
          </p>
          <p className="text-muted-foreground mb-4">
            All companies listed on the NSX are required to adhere to the NamCode principles and report on their compliance in their annual reports, on an "apply or explain" basis.
          </p>
          <p className="text-muted-foreground">
            The NamCode covers key areas including: Board composition and responsibilities, audit committees, risk management, IT governance, compliance, stakeholder engagement, and integrated reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            { title: "Board & Directors", desc: "Guidelines for board composition, independence, appointment, and evaluation of directors." },
            { title: "Audit Committee", desc: "Requirements for internal and external audit processes, financial reporting, and risk oversight." },
            { title: "Risk Management", desc: "Frameworks for identifying, assessing, and managing material risks across the organisation." },
            { title: "IT Governance", desc: "Guidelines for managing information technology within the governance framework." },
            { title: "Compliance", desc: "Ensuring compliance with laws, regulations, and the organisation's own ethical standards." },
            { title: "Stakeholder Relations", desc: "Principles for managing relationships with shareholders, employees, and the community." },
          ].map((item) => (
            <div key={item.title} className="bg-muted rounded-lg p-5">
              <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
          <p className="text-muted-foreground mb-4">For the complete NamCode document, please contact the NSX.</p>
          <a href="tel:0812320168" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded font-semibold text-sm hover:brightness-110 transition-all">
            <ExternalLink className="w-4 h-4" /> Request NamCode Document
          </a>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default NamCodePage;
