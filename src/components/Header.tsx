import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import nsxLogo from "@/assets/nsx-logo.png";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "Trade",
    path: "/trade",
    children: [
      { label: "Brokers", path: "/trade/brokers" },
      { label: "How to Trade", path: "/trade/how-to-trade" },
      { label: "Trading Hours", path: "/trade/trading-hours" },
      { label: "Calendar", path: "/trade/calendar" },
    ],
  },
  { label: "Market Data", path: "/market-data" },
  { label: "Listing", path: "/listing" },
  {
    label: "Insight",
    path: "/insight",
    children: [
      { label: "Careers", path: "/insight/careers" },
      { label: "FAQ", path: "/insight/faq" },
      { label: "Glossary", path: "/insight/glossary" },
      { label: "NamCode", path: "/insight/namcode" },
      { label: "NSX Annual Reports", path: "/insight/reports" },
      { label: "Rules & Legislation", path: "/insight/rules" },
    ],
  },
  {
    label: "About",
    path: "/about",
    children: [
      { label: "History & Structure", path: "/about/history" },
      { label: "News", path: "/about/news" },
    ],
  },
  {
    label: "Links",
    path: "/links",
    children: [
      { label: "CSD", path: "/links/csd" },
      { label: "Transfer Secretaries", path: "/links/transfer-secretaries" },
    ],
  },
  { label: "Contact Us", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between h-24">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={nsxLogo} alt="NSX" className="h-32 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.path}
                className={`px-3 py-2 text-sm font-medium rounded-md flex items-center gap-1 transition-colors
                  ${location.pathname === item.path ? "text-secondary bg-secondary/10" : "text-foreground hover:text-secondary hover:bg-secondary/5"}`}
              >
                {item.label}
                {item.children && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 bg-card border border-border rounded-md shadow-lg min-w-[200px] py-1 z-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.path}
                      className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary/10 hover:text-secondary transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button className="p-2 hover:bg-muted rounded-md transition-colors">
            <Search className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border max-h-[80vh] overflow-auto">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                to={item.path}
                className="block px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary/10 border-b border-border"
                onClick={() => !item.children && setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.label}
                  to={child.path}
                  className="block px-10 py-2.5 text-sm text-muted-foreground hover:text-secondary border-b border-border"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
