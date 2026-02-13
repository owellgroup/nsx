import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Download, Eye, Calendar } from "lucide-react";

const reports = [
  { year: "2024", title: "NSX Annual Report 2024", date: "March 2025", status: "Latest" },
  { year: "2023", title: "NSX Annual Report 2023", date: "March 2024", status: "" },
  { year: "2022", title: "NSX Annual Report 2022", date: "March 2023", status: "" },
  { year: "2021", title: "NSX Annual Report 2021", date: "March 2022", status: "" },
  { year: "2020", title: "NSX Annual Report 2020", date: "March 2021", status: "" },
  { year: "2019", title: "NSX Annual Report 2019", date: "March 2020", status: "" },
];

const AnnualReportsPage = () => (
  <>
    <TopBar />
    <Header />
    <main className="py-16">
      <div className="container max-w-4xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">NSX Annual Reports</h1>
        <p className="text-muted-foreground text-lg mb-10">
          View and download the Namibia Securities Exchange annual reports.
        </p>

        <div className="space-y-4">
          {reports.map((r) => (
            <div key={r.year} className="bg-card border border-border rounded-lg p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-secondary/40 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <FileText className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-semibold text-foreground">{r.title}</h3>
                    {r.status && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-secondary/10 text-secondary">{r.status}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
                    <Calendar className="w-3.5 h-3.5" />
                    Published: {r.date}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 bg-muted hover:bg-muted/80 text-foreground px-4 py-2 rounded font-medium text-sm transition-colors">
                  <Eye className="w-4 h-4" /> View
                </button>
                <button className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded font-medium text-sm hover:brightness-110 transition-all">
                  <Download className="w-4 h-4" /> Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default AnnualReportsPage;
