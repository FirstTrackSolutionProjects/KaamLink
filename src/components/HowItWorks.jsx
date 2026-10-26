import { Search, CalendarCheck, ShieldCheck, Wallet, ArrowRight } from "lucide-react";
import useReveal from "../hooks/useReveal";

const STEPS = [
  {
    icon: Search,
    title: "Choose a service",
    desc: "Tell us what your home needs, from cleaning to repairs.",
  },
  {
    icon: CalendarCheck,
    title: "Pick a slot",
    desc: "Same-day and next-day slots available in your city.",
  },
  {
    icon: ShieldCheck,
    title: "Verified pro arrives",
    desc: "Background-checked professional shows up on time.",
  },
  {
    icon: Wallet,
    title: "Pay after service",
    desc: "Rate your experience and pay only when you're satisfied.",
  },
];

export default function HowItWorks() {
  const [ref, inView] = useReveal();

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${inView ? "in-view" : ""} text-center max-w-xl mx-auto mb-16 lg:mb-20`}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-xs font-bold uppercase tracking-wider text-brand-600 mb-4">
            Simple process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            How Manayata works
          </h2>
          <p className="mt-4 text-slate-500">
            Book a verified professional in just a few taps. No hidden charges, no hassle.
          </p>
        </div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Connecting dashed line (Desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-slate-200 z-0" />

          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative group text-center z-10 flex flex-col items-center">
              
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="h-20 w-20 rounded-[1.5rem] bg-white border-2 border-slate-100 shadow-sm grid place-items-center group-hover:border-brand-200 group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300 relative z-10">
                  <Icon size={28} className="text-brand-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                {/* Step Number Badge */}
                <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-gradient-to-br from-brand-500 to-gold-500 text-white text-xs font-bold grid place-items-center shadow-md z-20 border-2 border-white">
                  {i + 1}
                </span>
              </div>

              {/* Text Content */}
              <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-brand-600 transition-colors">
                {title}
              </h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed max-w-[220px]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}