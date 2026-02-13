import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TransferSecretariesPage = () => (
  <>
    <TopBar />
    <Header />
    <main className="py-16">
      <div className="container max-w-4xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Transfer Secretaries</h1>

        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">Background</h2>
          <p className="text-muted-foreground mb-4">
            Transfer Secretaries (Pty) Ltd is the transfer secretaries to the majority of Namibian companies listed on the NSX and other unlisted entities. The company is a wholly owned subsidiary of the NSX.
          </p>
          <p className="text-muted-foreground">
            In addition to providing transfer secretarial services to local listed and unlisted companies, TS also provides services to dual listed companies registered on the NSX as a receiving office.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">Operations</h2>
          <p className="text-muted-foreground mb-4">
            Operations include updating registers (address changes, banking details, FIA requirements) and corporate actions (dividend payments, AGM, etc).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-muted rounded-lg p-5">
              <h3 className="font-display font-semibold text-foreground mb-2">Local Listed Companies</h3>
              <p className="text-sm text-muted-foreground">Including Agra Limited, Gondwana Holdings Ltd, Savanna Beef Processors Ltd and majority of Debt Issuers.</p>
            </div>
            <div className="bg-muted rounded-lg p-5">
              <h3 className="font-display font-semibold text-foreground mb-2">Receiving Office</h3>
              <p className="text-sm text-muted-foreground">All secondary listed companies on the NSX.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default TransferSecretariesPage;
