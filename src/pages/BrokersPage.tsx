import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, MapPin, Mail } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const brokers = [
  { name: "Cirrus Securities (Pty) Ltd.", address: "35 Schanzen Road, Windhoek, Namibia", po: "P.O. Box 27, Windhoek", tel: "061 - 256 666" },
  { name: "IJG Securities (Pty) Ltd.", address: "1@Steps, Corner Grove & Chasie Street, Kleine Kuppe", po: "P.O. Box 186, Windhoek", tel: "081 - 958 3500" },
  { name: "PSG Wealth Management (Pty) Ltd.", address: "Thorer and Feld Street, Windhoek", po: "P.O. Box 196, Windhoek", tel: "061 - 378 900" },
  { name: "Simonis Storm Securities (Pty) Ltd.", address: "Corner Hugo Hahn & Koch Street Nr 4, Windhoek", po: "P.O. Box 3970, Windhoek", tel: "833 - 254 194" },
];

const BrokersPage = () => {
  const [contactOpen, setContactOpen] = useState<string | null>(null);
  const [formData, setFormData] = useState<Record<string, {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }>>({});

  const getFormData = (brokerName: string) => {
    return formData[brokerName] || { name: "", email: "", phone: "", subject: "", message: "" };
  };

  const handleSubmit = (e: React.FormEvent, brokerName: string) => {
    e.preventDefault();
    const data = getFormData(brokerName);
    // Handle form submission here
    console.log("Form submitted for:", brokerName, data);
    // Reset form and close dialog
    setFormData((prev) => {
      const updated = { ...prev };
      delete updated[brokerName];
      return updated;
    });
    setContactOpen(null);
  };

  const handleInputChange = (brokerName: string, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [brokerName]: {
        ...getFormData(brokerName),
        [field]: value,
      },
    }));
  };

  const handleOpenChange = (open: boolean, brokerName: string) => {
    setContactOpen(open ? brokerName : null);
    if (!open) {
      // Reset form when closing
      setFormData((prev) => {
        const updated = { ...prev };
        delete updated[brokerName];
        return updated;
      });
    }
  };

  return (
    <>
      <TopBar />
      <Header />
      <main className="py-16">
        <div className="container">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Registered Brokers</h1>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            To invest on the NSX, you must work through one of our registered stockbrokers. Contact any of the brokers below to open your account.
          </p>

          <div className="grid gap-6">
            {brokers.map((b) => (
              <div key={b.name} className="bg-card border border-border rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{b.name}</h3>
                    <div className="flex flex-col gap-1 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-secondary" />{b.address}</span>
                      <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-secondary" />{b.po}</span>
                      <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-secondary" />{b.tel}</span>
                    </div>
                  </div>
                  <Button
                    onClick={() => setContactOpen(b.name)}
                    variant="secondary"
                    className="shrink-0"
                  >
                    Contact Us
                  </Button>
                </div>

                <Dialog open={contactOpen === b.name} onOpenChange={(open) => handleOpenChange(open, b.name)}>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle className="font-display text-2xl">Contact {b.name}</DialogTitle>
                      <DialogDescription>
                        Fill out the form below to get in touch with {b.name}. We'll get back to you as soon as possible.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={(e) => handleSubmit(e, b.name)} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor={`name-${b.name}`}>Full Name *</Label>
                          <Input
                            id={`name-${b.name}`}
                            placeholder="Enter your full name"
                            value={getFormData(b.name).name}
                            onChange={(e) => handleInputChange(b.name, "name", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`email-${b.name}`}>Email *</Label>
                          <Input
                            id={`email-${b.name}`}
                            type="email"
                            placeholder="your.email@example.com"
                            value={getFormData(b.name).email}
                            onChange={(e) => handleInputChange(b.name, "email", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor={`phone-${b.name}`}>Phone *</Label>
                          <Input
                            id={`phone-${b.name}`}
                            type="tel"
                            placeholder="+264 XX XXX XXXX"
                            value={getFormData(b.name).phone}
                            onChange={(e) => handleInputChange(b.name, "phone", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`subject-${b.name}`}>Subject *</Label>
                          <Input
                            id={`subject-${b.name}`}
                            placeholder="What is this regarding?"
                            value={getFormData(b.name).subject}
                            onChange={(e) => handleInputChange(b.name, "subject", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`message-${b.name}`}>Message *</Label>
                        <Textarea
                          id={`message-${b.name}`}
                          placeholder="Tell us how we can help you..."
                          rows={5}
                          value={getFormData(b.name).message}
                          onChange={(e) => handleInputChange(b.name, "message", e.target.value)}
                          required
                        />
                      </div>
                      <DialogFooter>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => handleOpenChange(false, b.name)}
                        >
                          Cancel
                        </Button>
                        <Button type="submit">
                          Send Message
                        </Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BrokersPage;
