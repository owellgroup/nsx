import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Building2, FileText } from "lucide-react";

const LinksPage = () => (
  <>
    <TopBar />
    <Header />
    <main className="py-16">
      <div className="container max-w-4xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Links</h1>
        <p className="text-muted-foreground text-lg mb-10">
          Subsidiary services and related entities of the NSX.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/links/csd"
            className="bg-card border border-border rounded-lg p-8 hover:border-secondary/40 hover:shadow-md transition-all group"
          >
            <Building2 className="w-10 h-10 text-secondary mb-4" />
            <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-secondary transition-colors mb-2">Central Securities Depository (CSD)</h3>
            <p className="text-sm text-muted-foreground">
              Electronic clearing, settlement, registration of securities and managing corporate actions. Co-owned by the NSX (51%) and Bank of Namibia (49%).
            </p>
          </Link>
          <Link
            to="/links/transfer-secretaries"
            className="bg-card border border-border rounded-lg p-8 hover:border-secondary/40 hover:shadow-md transition-all group"
          >
            <FileText className="w-10 h-10 text-secondary mb-4" />
            <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-secondary transition-colors mb-2">Transfer Secretaries (FTM-Ts)</h3>
            <p className="text-sm text-muted-foreground">
              Transfer Secretaries (Pty) Ltd provides transfer secretarial services to the majority of Namibian companies listed on the NSX. A wholly owned subsidiary.
            </p>
          </Link>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default LinksPage;
