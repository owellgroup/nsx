import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Briefcase, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

const openings = [
  {
    title: "Market Analyst",
    department: "Market Operations",
    location: "Windhoek",
    type: "Full-time",
    desc: "Analyse market data, trends and prepare weekly reports. Support the market operations team with research and analytics.",
  },
  {
    title: "Compliance Officer",
    department: "Regulatory Affairs",
    location: "Windhoek",
    type: "Full-time",
    desc: "Ensure compliance with the Stock Exchange Control Act, NAMFISA regulations and NSX listing requirements.",
  },
  {
    title: "IT Systems Administrator",
    department: "Technology",
    location: "Windhoek",
    type: "Full-time",
    desc: "Manage and maintain the trading platform infrastructure, NENS systems and internal IT operations.",
  },
];

const CareersPage = () => {
  const [applyOpen, setApplyOpen] = useState<string | null>(null);

  return (
    <>
      <TopBar />
      <Header />
      <main className="py-16">
        <div className="container max-w-4xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Careers at the NSX</h1>
          <p className="text-muted-foreground text-lg mb-12">
            Join Namibia's sole licensed securities exchange and help shape the future of capital markets in Namibia.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-6">Current Openings</h2>

          <div className="space-y-6 mb-12">
            {openings.map((job) => (
              <div key={job.title} className="bg-card border border-border rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-secondary" />
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span>{job.department}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{job.type}</span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{job.desc}</p>
                  </div>
                  <button
                    onClick={() => setApplyOpen(applyOpen === job.title ? null : job.title)}
                    className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded font-semibold text-sm hover:brightness-110 transition-all shrink-0 flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Apply
                  </button>
                </div>
                {applyOpen === job.title && (
                  <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-border pt-6">
                    <input placeholder="Full Name" className="border border-border rounded px-4 py-2.5 text-sm bg-background" />
                    <input placeholder="Email" type="email" className="border border-border rounded px-4 py-2.5 text-sm bg-background" />
                    <input placeholder="Phone" className="border border-border rounded px-4 py-2.5 text-sm bg-background" />
                    <input placeholder="Position Applying For" value={job.title} readOnly className="border border-border rounded px-4 py-2.5 text-sm bg-muted" />
                    <textarea placeholder="Cover Letter / Message" rows={4} className="border border-border rounded px-4 py-2.5 text-sm bg-background md:col-span-2" />
                    <button type="button" className="bg-primary text-primary-foreground px-6 py-2.5 rounded font-semibold text-sm">Submit Application</button>
                  </form>
                )}
              </div>
            ))}
          </div>

          <div className="bg-muted rounded-lg p-8 text-center">
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">Don't see a suitable opening?</h3>
            <p className="text-muted-foreground mb-4">We're always looking for talented individuals. Send your CV to our HR department.</p>
            <a href="tel:0812320168" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded font-semibold text-sm hover:brightness-110 transition-all">
              Contact HR
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CareersPage;
