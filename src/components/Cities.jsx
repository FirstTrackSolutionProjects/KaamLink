import { MapPin, ArrowRight, Plus } from "lucide-react";
import useReveal from "../hooks/useReveal";

const CITIES = [
  "Bengaluru",
  "Mumbai",
  "Delhi NCR",
  "Pune",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Ahmedabad",
  "Bhubaneswar"
];

export default function Cities() {
  const [ref, inView] = useReveal();

  return (
    <section id="cities" className="py-20 lg:py-28 relative overflow-hidden">
      <div
        ref={ref}
        className={`reveal ${inView ? "in-view" : ""} max-w-4xl mx-auto px-6 lg:px-8 text-center`}
      >
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-xs font-bold uppercase tracking-wider text-brand-600 mb-4">
          Now live in
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          {CITIES.length} cities, and counting
        </h2>
        <p className="mt-4 text-slate-500 max-w-xl mx-auto">
          We're expanding fast. Find background-verified professionals right in your neighborhood.
        </p>

        {/* City Chips */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {CITIES.map((city) => (
            <span
              key={city}
              className="group inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:shadow-md hover:border-brand-200 hover:text-brand-600 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
            >
              <MapPin size={16} className="text-slate-400 group-hover:text-brand-500 transition-colors" />
              {city}
            </span>
          ))}
          
          {/* More every month chip */}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-transparent px-5 py-2.5 text-sm font-semibold text-slate-500">
            <Plus size={16} /> More every month
          </span>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <a
            href="#top"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-8 py-4 text-sm font-bold text-white shadow-md hover:bg-brand-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Check availability in your city
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}