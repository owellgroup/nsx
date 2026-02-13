import { Shield, BarChart3, Globe, Building2 } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Electronic Trading Platform",
    desc: "Equity trading matched via JSE's MIT Millennium Exchange and bonds via the Bond Trading System.",
  },
  {
    icon: Globe,
    title: "Dual Listing Focus",
    desc: "Actively encourages dual listings, making us one of Africa's largest exchanges by market capitalisation.",
  },
  {
    icon: Shield,
    title: "Regulated & Supervised",
    desc: "Self-regulatory organization under the Stock Exchange Control Act and NAMFISA supervision.",
  },
  {
    icon: Building2,
    title: "Multiple Market Boards",
    desc: "Main Board, Development Capital Board (DevX), and Over-the-Counter (OTC) market.",
  },
];

const AboutSection = () => (
  <section className="py-20 bg-muted/50">
    <div className="container">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Powering Namibia's Capital Markets Since 1992
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          The NSX provides a regulated, electronic platform for listing and trading equities, bonds, and ETFs — facilitating capital raising and investment opportunities across Namibia.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f) => (
          <div key={f.title} className="bg-card rounded-lg p-6 border border-border hover:border-secondary/40 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
              <f.icon className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
