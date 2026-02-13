import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    headline: "Namibia's Premier Securities Exchange Since 1992",
    subtext: "Providing a regulated electronic platform for trading equities, bonds, and ETFs — powering capital growth across Namibia.",
    cta: "Start Investing",
  },
  {
    image: hero2,
    headline: "Raise Capital & Grow Your Business with the NSX",
    subtext: "From IPOs to dual listings, we connect companies with investors through transparent and efficient market systems.",
    cta: "Explore Listings",
  },
  {
    image: hero3,
    headline: "Windhoek's Trusted Gateway to African Capital Markets",
    subtext: "One of Africa's largest exchanges by market capitalisation, facilitating local and cross-border investment opportunities.",
    cta: "Learn More",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 2000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <div
      className="relative w-full h-[500px] md:h-[600px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-nsx-dark/80 via-nsx-dark/50 to-transparent" />

          <div className="relative container h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="max-w-2xl"
            >
              <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-4">
                {slides[current].headline}
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                {slides[current].subtext}
              </p>
              <a
                href="tel:0812320168"
                className="inline-block bg-secondary text-secondary-foreground px-8 py-3 rounded font-semibold text-sm uppercase tracking-wide hover:brightness-110 transition-all"
              >
                {slides[current].cta}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur rounded-full transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-primary-foreground" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur rounded-full transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-primary-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-secondary w-8" : "bg-primary-foreground/40"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
