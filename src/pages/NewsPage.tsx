import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, FileText, Download, Eye } from "lucide-react";

const newsItems = [
  {
    date: "10 Feb 2024",
    title: "NSX Weekly Market Report #24.06 Published",
    summary: "The NSX has published its weekly market report for 05–09 February 2024. Overall market traded N$161.9 million in 104 deals.",
    category: "Market Report",
  },
  {
    date: "5 Feb 2024",
    title: "Bond Trading System Celebrates First Anniversary",
    summary: "The NSX bond trading system, launched in October 2023, marks one year of successful ON-Market trading with growing liquidity.",
    category: "Announcement",
  },
  {
    date: "30 Jan 2024",
    title: "CSD License Milestone Achieved",
    summary: "The Central Securities Depository receives its provisional NISS license, marking a significant step toward electronic settlement.",
    category: "Corporate",
  },
  {
    date: "15 Jan 2024",
    title: "10X ETNs Trading Update",
    summary: "Following their listing in February 2023, the 10X ETNs continue to provide investors with diversified investment exposure on the NSX.",
    category: "Market Report",
  },
  {
    date: "8 Jan 2024",
    title: "NSX Rebranding Complete",
    summary: "The Namibian Stock Exchange has officially rebranded to the Namibia Securities Exchange, reflecting its expanded role in capital markets.",
    category: "Corporate",
  },
  {
    date: "20 Dec 2023",
    title: "2024 Trading Calendar Published",
    summary: "The NSX has published the 2024 trading calendar with all public holidays and early close dates for the upcoming year.",
    category: "Announcement",
  },
];

const pdfNews = [
  { title: "NSX Quarterly Newsletter — Q4 2023", date: "January 2024" },
  { title: "NSX Market Performance Summary 2023", date: "December 2023" },
  { title: "NSX Quarterly Newsletter — Q3 2023", date: "October 2023" },
];

const NewsPage = () => (
  <>
    <TopBar />
    <Header />
    <main className="py-16">
      <div className="container">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">News & Updates</h1>
        <p className="text-muted-foreground text-lg mb-12">Stay informed with the latest news from the Namibia Securities Exchange.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News articles */}
          <div className="lg:col-span-2 space-y-6">
            {newsItems.map((news, i) => (
              <article key={i} className="bg-card border border-border rounded-lg p-6 hover:border-secondary/40 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-secondary/10 text-secondary">{news.category}</span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" /> {news.date}
                  </span>
                </div>
                <h2 className="font-display text-lg font-semibold text-foreground mb-2">{news.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{news.summary}</p>
                <button className="mt-4 text-secondary text-sm font-semibold hover:underline">Read More →</button>
              </article>
            ))}
          </div>

          {/* PDF News Sidebar */}
          <div>
            <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">PDF Publications</h3>
              <div className="space-y-4">
                {pdfNews.map((pdf, i) => (
                  <div key={i} className="border-b border-border pb-4 last:border-0 last:pb-0">
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">{pdf.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{pdf.date}</p>
                        <div className="flex gap-2 mt-2">
                          <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-secondary">
                            <Eye className="w-3 h-3" /> View
                          </button>
                          <button className="flex items-center gap-1 text-xs text-secondary font-semibold">
                            <Download className="w-3 h-3" /> Download
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default NewsPage;
