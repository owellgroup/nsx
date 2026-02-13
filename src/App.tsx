import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import TradePage from "./pages/TradePage";
import BrokersPage from "./pages/BrokersPage";
import HowToTradePage from "./pages/HowToTradePage";
import TradingHoursPage from "./pages/TradingHoursPage";
import CalendarPage from "./pages/CalendarPage";
import MarketDataPage from "./pages/MarketDataPage";
import ListingPage from "./pages/ListingPage";
import InsightPage from "./pages/InsightPage";
import CareersPage from "./pages/CareersPage";
import FAQPage from "./pages/FAQPage";
import GlossaryPage from "./pages/GlossaryPage";
import NamCodePage from "./pages/NamCodePage";
import AnnualReportsPage from "./pages/AnnualReportsPage";
import RulesPage from "./pages/RulesPage";
import AboutPage from "./pages/AboutPage";
import AboutHistoryPage from "./pages/AboutHistoryPage";
import NewsPage from "./pages/NewsPage";
import LinksPage from "./pages/LinksPage";
import CSDPage from "./pages/CSDPage";
import TransferSecretariesPage from "./pages/TransferSecretariesPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Trade */}
          <Route path="/trade" element={<TradePage />} />
          <Route path="/trade/brokers" element={<BrokersPage />} />
          <Route path="/trade/how-to-trade" element={<HowToTradePage />} />
          <Route path="/trade/trading-hours" element={<TradingHoursPage />} />
          <Route path="/trade/calendar" element={<CalendarPage />} />
          {/* Market Data */}
          <Route path="/market-data" element={<MarketDataPage />} />
          {/* Listing */}
          <Route path="/listing" element={<ListingPage />} />
          {/* Insight */}
          <Route path="/insight" element={<InsightPage />} />
          <Route path="/insight/careers" element={<CareersPage />} />
          <Route path="/insight/faq" element={<FAQPage />} />
          <Route path="/insight/glossary" element={<GlossaryPage />} />
          <Route path="/insight/namcode" element={<NamCodePage />} />
          <Route path="/insight/reports" element={<AnnualReportsPage />} />
          <Route path="/insight/rules" element={<RulesPage />} />
          {/* About */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/history" element={<AboutHistoryPage />} />
          <Route path="/about/news" element={<NewsPage />} />
          {/* Links */}
          <Route path="/links" element={<LinksPage />} />
          <Route path="/links/csd" element={<CSDPage />} />
          <Route path="/links/transfer-secretaries" element={<TransferSecretariesPage />} />
          {/* Contact */}
          <Route path="/contact" element={<ContactPage />} />
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
