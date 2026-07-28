import { useState } from "react";
import { ChevronDown } from "lucide-react";
import useReveal from "../hooks/useReveal";

const FAQS = [
  {
    q: "How are professionals verified?",
    a: "Every professional goes through identity verification, background checks, and a skills assessment before joining KaamLink.",
  },
  {
    q: "How is pricing decided?",
    a: "Each service shows an upfront starting price. Any additional cost (extra rooms, parts, materials) is confirmed with you before work begins.",
  },
  {
    q: "Can I reschedule a booking?",
    a: "Yes, you can reschedule or cancel any booking for free up to 2 hours before the scheduled slot from the app.",
  },
  {
    q: "Is there a service warranty?",
    a: "Most services include a 7-day service warranty. If something isn't right, we'll send a professional back at no extra cost.",
  },
  {
    q: "What payment methods are accepted?",
    a: "UPI, cards, net banking, and cash are all accepted, and payment is only collected after the service is completed.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const [ref, inView] = useReveal();

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div
        ref={ref}
        className={`reveal ${inView ? "in-view" : ""} max-w-3xl mx-auto px-6 lg:px-8`}
      >
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-pink-600">
            Questions
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="rounded-2xl border border-line bg-ivory overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-pink-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-muted leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
