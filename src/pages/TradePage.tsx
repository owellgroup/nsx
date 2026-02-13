import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { BarChart3, Users, BookOpen, Calendar } from "lucide-react";

const TradePage = () => (
  <>
    <TopBar />
    <Header />
    <main className="py-16">
      <div className="container max-w-4xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Trade</h1>
        <p className="text-muted-foreground text-lg mb-10">
          Everything you need to know about trading on the Namibia Securities Exchange.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: Users, title: "Brokers", desc: "View registered stockbrokers and their contact details", path: "/trade/brokers" },
            { icon: BookOpen, title: "How to Trade", desc: "Learn how to start investing on the NSX", path: "/trade/how-to-trade" },
            { icon: BarChart3, title: "Trading Hours", desc: "View trading hours, settlement cycles and market schedules", path: "/trade/trading-hours" },
            { icon: Calendar, title: "Calendar", desc: "Trading calendar with public holidays and early close dates", path: "/trade/calendar" },
          ].map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="bg-card border border-border rounded-lg p-8 hover:border-secondary/40 hover:shadow-md transition-all group flex items-start gap-4"
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

export default TradePage;
