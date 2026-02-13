import { TrendingUp, TrendingDown } from "lucide-react";

const tickerData = [
  { code: "NHM", value: "38,178", change: 0.01, up: true },
  { code: "RNI", value: "53,896", change: 1.05, up: false },
  { code: "NRP", value: "14,852", change: 0.05, up: true },
  { code: "REM", value: "18,523", change: 1.31, up: false },
  { code: "PPH", value: "2,612", change: 0.38, up: false },
  { code: "INP", value: "13,743", change: 0.76, up: true },
  { code: "MNP", value: "20,721", change: 0.66, up: false },
  { code: "BVT", value: "24,698", change: 1.29, up: true },
];

const MarketTicker = () => (
  <div className="bg-ticker-bg overflow-hidden py-3">
    <div className="ticker-scroll flex gap-10 whitespace-nowrap">
      {[...tickerData, ...tickerData].map((item, i) => (
        <div key={i} className="flex items-center gap-2 text-sm">
          <span className="text-ticker-text font-semibold">{item.code}:</span>
          <span className="text-ticker-text">{item.value}</span>
          <span className={`flex items-center gap-0.5 ${item.up ? "text-stat-up" : "text-stat-down"}`}>
            {item.up ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
            {item.change}%
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default MarketTicker;
