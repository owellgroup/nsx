import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CSDPage = () => (
  <>
    <TopBar />
    <Header />
    <main className="py-16">
      <div className="container max-w-4xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Central Securities Depository</h1>

        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">Background</h2>
          <p className="text-muted-foreground mb-4">
            Over a decade ago, the NSX, the Ministry of Finance, and the Namibia National Payment System identified the establishment of a CSD as a strategic priority. This initiative enhances the operational efficiency of the NSX and fosters an active capital market.
          </p>
          <p className="text-muted-foreground mb-4">
            By integrating the CSD with the Namibia Inter-bank Settlement System (NISS), the goal was to increase market turnover, liquidity, and achieve delivery-versus-payment (DVP) in the settlement of securities transactions.
          </p>
          <p className="text-muted-foreground">
            The CSD Company is co-funded by the Bank of Namibia (49%) and the NSX (51%). It holds securities in electronic form and facilitates electronic clearing, settlement, registration, and managing corporate actions.
          </p>
        </div>

        <div className="bg-muted rounded-lg p-6">
          <h3 className="font-display font-semibold text-foreground mb-2">Contact</h3>
          <p className="text-muted-foreground text-sm">Tjiundja Kazohua — Chief Regulatory Officer — +264 83 722 7647</p>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default CSDPage;
