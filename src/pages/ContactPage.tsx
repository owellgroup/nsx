import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactPage = () => (
  <>
    <TopBar />
    <Header />
    <main className="py-16">
      <div className="container">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Contact Us</h1>
        <p className="text-muted-foreground mb-10">Get in touch with the Namibia Securities Exchange.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {[
                { icon: Phone, label: "Phone", value: "+264 83 722 7647" },
                { icon: Mail, label: "Email", value: "info@nsx.com.na" },
                { icon: MapPin, label: "Address", value: "Montreux Street, Auas View, Windhoek" },
                { icon: Clock, label: "Hours", value: "Mon – Fri 08:00 – 17:00" },
              ].map((c) => (
                <div key={c.label} className="bg-card border border-border rounded-lg p-5 flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{c.label}</span>
                    <p className="text-sm text-foreground mt-0.5">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="font-display text-xl font-semibold text-foreground mb-6">Send us a message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input placeholder="Full Name" className="border border-border rounded px-4 py-2.5 text-sm bg-background w-full" />
                <input placeholder="Email" type="email" className="border border-border rounded px-4 py-2.5 text-sm bg-background w-full" />
              </div>
              <input placeholder="Subject" className="border border-border rounded px-4 py-2.5 text-sm bg-background w-full" />
              <textarea placeholder="Your message..." rows={5} className="border border-border rounded px-4 py-2.5 text-sm bg-background w-full" />
              <button type="button" className="bg-secondary text-secondary-foreground px-8 py-3 rounded font-semibold text-sm hover:brightness-110 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default ContactPage;
