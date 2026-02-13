import { TrendingDown, Clock } from "lucide-react";

const indices = [
  { name: "NSX OVERALL", date: "13.02.2026 13:00", value: "1,505.50", change: "-2.93%", down: true },
  { name: "NSX LOCAL", date: "13.02.2026 13:00", value: "682.45", change: "+1.32%", down: false },
  { name: "FINANCIALS", date: "13.02.2026 13:00", value: "512.48", change: "-1.18%", down: true },
  { name: "REAL ESTATE", date: "13.02.2026 13:00", value: "1,702.74", change: "+1.50%", down: false },
];

const MarketIndices = () => (
  <section className="py-12 bg-background">
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {indices.map((idx) => (
          <div key={idx.name} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="font-display text-sm font-semibold text-muted-foreground tracking-wider uppercase">{idx.name}</h3>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1 mb-3">
              <Clock className="w-3 h-3" />
              {idx.date}
            </div>
            <div className="flex items-end gap-3">
              <span className="font-display text-2xl font-bold text-foreground">{idx.value}</span>
              <span className={`text-sm font-semibold flex items-center gap-1 ${idx.down ? "text-stat-down" : "text-stat-up"}`}>
                <TrendingDown className={`w-4 h-4 ${!idx.down ? "rotate-180" : ""}`} />
                {idx.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MarketIndices;
