import { Search, CalendarCheck, ShieldCheck, Wallet } from "lucide-react";
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
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${inView ? "in-view" : ""} text-center max-w-xl mx-auto mb-16`}
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-pink-600">
            Simple process
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
            How KaamLink works
          </h2>
        </div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {/* connecting line, desktop only */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-amber-300 via-pink-400 to-amber-300" />

          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative text-center">
              <div className="mx-auto h-16 w-16 rounded-2xl bg-ivory border border-line grid place-items-center relative z-10">
                <Icon size={24} className="text-pink-600" />
                <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-gradient-to-br from-amber-500 to-pink-600 text-white text-xs font-bold grid place-items-center">
                  {i + 1}
                </span>
              </div>
              <p className="mt-5 font-display font-bold">{title}</p>
              <p className="mt-1.5 text-sm text-muted max-w-[220px] mx-auto">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
