import { UserPlus, PhoneCall, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Contact a Broker",
    desc: "Select and contact one of our four registered stockbrokers to open your trading account.",
  },
  {
    icon: UserPlus,
    step: "02",
    title: "Open Your Account",
    desc: "Complete the registration process and fund your account to start trading on the NSX.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Start Trading",
    desc: "Buy and sell equities, bonds, and ETFs on Namibia's sole licensed securities exchange.",
  },
];

const HowItWorks = () => (
  <section className="py-20 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          How to Start Investing
        </h2>
        <p className="text-muted-foreground text-lg">
          Getting started with the NSX is simple. Follow these three steps to begin building your portfolio.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((s) => (
          <div key={s.step} className="text-center group">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-secondary/15 transition-colors">
              <s.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
            </div>
            <span className="text-secondary font-display text-sm font-bold uppercase tracking-widest">Step {s.step}</span>
            <h3 className="font-display text-xl font-bold text-foreground mt-2 mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
