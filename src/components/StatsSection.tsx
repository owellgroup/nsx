const stats = [
  { value: "30+", label: "Years of Operation" },
  { value: "43", label: "Listed Companies" },
  { value: "4", label: "Registered Brokers" },
  { value: "N$2T+", label: "Market Capitalisation" },
];

const StatsSection = () => (
  <section className="py-16 bg-primary">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl md:text-5xl font-bold text-secondary mb-2">{s.value}</div>
            <div className="text-primary-foreground/80 text-sm font-medium uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
