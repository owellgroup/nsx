import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import nsxLogo from "@/assets/nsx-logo.png";

const Footer = () => (
  <footer className="bg-footer-bg text-footer-text">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <img src={nsxLogo} alt="NSX" className="h-16 w-auto mb-4 brightness-200" />
          <p className="text-sm leading-relaxed opacity-80">
            Namibia's sole licensed stock exchange, providing regulated electronic trading since 1992.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-primary-foreground font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Trade", path: "/trade" },
              { label: "Market Data", path: "/market-data" },
              { label: "About Us", path: "/about" },
              { label: "Contact Us", path: "/contact" },
              { label: "FAQ", path: "/insight/faq" },
            ].map((l) => (
              <li key={l.label}>
                <Link to={l.path} className="hover:text-secondary transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-primary-foreground font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/trade/brokers" className="hover:text-secondary transition-colors">Find a Broker</Link></li>
            <li><Link to="/trade/how-to-trade" className="hover:text-secondary transition-colors">How to Trade</Link></li>
            <li><Link to="/listing" className="hover:text-secondary transition-colors">List Your Company</Link></li>
            <li><Link to="/links/csd" className="hover:text-secondary transition-colors">Central Securities Depository</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-primary-foreground font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-secondary" />
              Montreux Street, Auas View, Windhoek
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0 text-secondary" />
              +264 83 722 7647
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0 text-secondary" />
              info@nsx.com.na
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 shrink-0 text-secondary" />
              Mon – Fri 08:00 – 17:00
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container py-4 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Namibia Securities Exchange (NSX). All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
