import { Phone, Clock } from "lucide-react";

const TopBar = () => (
  <div className="bg-primary text-primary-foreground text-sm py-2">
    <div className="container flex items-center justify-between">
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-1.5">
          <Phone className="w-3.5 h-3.5" />
          +264 83 722 7647
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          Mon – Fri 08:00 – 17:00
        </span>
      </div>
    </div>
  </div>
);

export default TopBar;
