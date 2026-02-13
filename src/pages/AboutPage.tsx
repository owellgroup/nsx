import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Clock, BookOpen } from "lucide-react";

const AboutPage = () => (
  <>
    <TopBar />
    <Header />
    <main className="py-16">
      <div className="container max-w-4xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">About the NSX</h1>
        <p className="text-muted-foreground text-lg mb-6">
          The Namibia Securities Exchange (NSX) is Namibia's sole licensed stock exchange, established in 1992 to provide a regulated, electronic platform for listing and trading equities, bonds, and ETFs.
        </p>
        <p className="text-muted-foreground mb-12">
          It facilitates capital raising for companies and investment opportunities for investors, with a focus on both local and dual-listed securities, particularly from South Africa. The NSX operates from 09h00 to 17h00, Monday to Friday, from its offices on Montreux Street, Auas View, Windhoek.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Link
            to="/about/history"
            className="bg-card border border-border rounded-lg p-8 hover:border-secondary/40 hover:shadow-md transition-all group"
          >
            <Clock className="w-10 h-10 text-secondary mb-4" />
            <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-secondary transition-colors mb-2">History & Structure</h3>
            <p className="text-sm text-muted-foreground">
              From the 1904 diamond rush exchange to today — explore our timeline and organisational structure.
            </p>
          </Link>
          <Link
            to="/about/news"
            className="bg-card border border-border rounded-lg p-8 hover:border-secondary/40 hover:shadow-md transition-all group"
          >
            <BookOpen className="w-10 h-10 text-secondary mb-4" />
            <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-secondary transition-colors mb-2">News & Updates</h3>
            <p className="text-sm text-muted-foreground">
              Stay informed with the latest news, announcements, and publications from the NSX.
            </p>
          </Link>
        </div>

        {/* Key Facts */}
        <div className="bg-card border border-border rounded-lg p-8">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">Key Functions</h2>
          <div className="space-y-4">
            {[
              { title: "Trading Platform", desc: "Operates as an electronic market, with equity trading matched via the JSE's MIT Millennium Exchange and bonds via the Bond Trading System (MITS)." },
              { title: "Asset Classes", desc: "Lists and trades equities, Exchange Traded Products (ETPs), Exchange Traded Notes (ETNs), and bonds (government, corporate, and sustainable)." },
              { title: "Market Structure", desc: "Comprises a Main Board, Development Capital Board (DevX), and an Over-the-Counter (OTC) market." },
              { title: "Dual Listing Focus", desc: "Actively encourages dual listings, which significantly increases total market capitalisation, making it one of Africa's largest exchanges." },
              { title: "Regulation", desc: "Functions as a self-regulatory organization under the Stock Exchange Control Act of 1985 and supervision of NAMFISA." },
              { title: "Objectives", desc: "Aims to deepen Namibian capital markets, foster a local investment culture, and aid in economic growth." },
            ].map((item) => (
              <div key={item.title} className="border-b border-border pb-4 last:border-0 last:pb-0">
                <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default AboutPage;
