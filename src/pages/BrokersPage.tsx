import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, MapPin, Mail } from "lucide-react";
import { useState } from "react";

const brokers = [
  { name: "Cirrus Securities (Pty) Ltd.", address: "35 Schanzen Road, Windhoek, Namibia", po: "P.O. Box 27, Windhoek", tel: "061 - 256 666" },
  { name: "IJG Securities (Pty) Ltd.", address: "1@Steps, Corner Grove & Chasie Street, Kleine Kuppe", po: "P.O. Box 186, Windhoek", tel: "081 - 958 3500" },
  { name: "PSG Wealth Management (Pty) Ltd.", address: "Thorer and Feld Street, Windhoek", po: "P.O. Box 196, Windhoek", tel: "061 - 378 900" },
  { name: "Simonis Storm Securities (Pty) Ltd.", address: "Corner Hugo Hahn & Koch Street Nr 4, Windhoek", po: "P.O. Box 3970, Windhoek", tel: "833 - 254 194" },
];

const BrokersPage = () => {
  const [contactOpen, setContactOpen] = useState<string | null>(null);

  return (
    <>
      <TopBar />
      <Header />
      <main className="py-16">
        <div className="container">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Registered Brokers</h1>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            To invest on the NSX, you must work through one of our registered stockbrokers. Contact any of the brokers below to open your account.
          </p>

          <div className="grid gap-6">
            {brokers.map((b) => (
              <div key={b.name} className="bg-card border border-border rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{b.name}</h3>
                    <div className="flex flex-col gap-1 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-secondary" />{b.address}</span>
                      <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-secondary" />{b.po}</span>
                      <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-secondary" />{b.tel}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setContactOpen(contactOpen === b.name ? null : b.name)}
                    className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded font-semibold text-sm hover:brightness-110 transition-all shrink-0"
                  >
                    Contact Us
                  </button>
                </div>
                {contactOpen === b.name && (
                  <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-border pt-6">
                    <input placeholder="Full Name" className="border border-border rounded px-4 py-2.5 text-sm bg-background" />
                    <input placeholder="Email" type="email" className="border border-border rounded px-4 py-2.5 text-sm bg-background" />
                    <input placeholder="Phone" className="border border-border rounded px-4 py-2.5 text-sm bg-background" />
                    <input placeholder="Subject" className="border border-border rounded px-4 py-2.5 text-sm bg-background" />
                    <textarea placeholder="Message" rows={3} className="border border-border rounded px-4 py-2.5 text-sm bg-background md:col-span-2" />
                    <button type="button" className="bg-primary text-primary-foreground px-6 py-2.5 rounded font-semibold text-sm">Send Message</button>
                  </form>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BrokersPage;
