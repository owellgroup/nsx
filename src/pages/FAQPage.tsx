import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    category: "Buying & Selling Shares",
    items: [
      { q: "Can I deal for myself or does the broker make all the decisions for me?", a: "That is your choice. You may give the broker authority to trade on your account or make decisions yourself. If you give the broker permission (managed portfolio), you will need to sign a mandate." },
      { q: "Can I trade directly through NSX as a private individual?", a: "No, a private individual can only trade through a registered stockbroker." },
      { q: "I am a first-time investor. How do I buy shares?", a: "Your first port of call would be one of the NSX registered brokers. Contact details are available under the Brokers page." },
      { q: "How do I select which shares to buy?", a: "Contact any of the registered stockbrokers who are qualified to advise clients on investments." },
      { q: "I am still a minor – am I able to deal on the NSX?", a: "Yes, but you will need written approval from your parent or legal guardian." },
    ],
  },
  {
    category: "Company Information & Communication",
    items: [
      { q: "What are the communication channels between listed companies and shareholders?", a: "Listed companies must ensure information is available through press announcements, SENS announcements, circulars and pre-listing statements." },
      { q: "What is SENS and its function at the NSX?", a: "SENS facilitates early, equal and wide dissemination of relevant company information, improving communication between companies and the market." },
      { q: "When does SENS need an announcement?", a: "The company must submit all relevant and price sensitive information to SENS as soon as possible after authorisation, before newspaper publication." },
    ],
  },
  {
    category: "Stock Broking Examinations",
    items: [
      { q: "How do I become a Stock Broker?", a: "You need to pass 3 examinations administered by the NSX: Rules & Regulations, Investment Principles, and Portfolio Management. Exams take place in March and September." },
      { q: "What additional examinations are offered?", a: "Additional exams include Registered Persons, Traders, Settlement Officers, and Compliance Officer exams offered by SAIFM." },
    ],
  },
];

const FAQPage = () => (
  <>
    <TopBar />
    <Header />
    <main className="py-16">
      <div className="container max-w-4xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
        <p className="text-muted-foreground mb-10">Find answers to common questions about trading on the NSX.</p>

        {faqs.map((cat) => (
          <div key={cat.category} className="mb-10">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4 text-secondary">{cat.category}</h2>
            <Accordion type="single" collapsible className="border border-border rounded-lg overflow-hidden">
              {cat.items.map((item, i) => (
                <AccordionItem key={i} value={`${cat.category}-${i}`} className="border-b border-border last:border-0">
                  <AccordionTrigger className="px-6 py-4 text-left text-sm font-medium text-foreground hover:text-secondary">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-sm text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </>
);

export default FAQPage;
