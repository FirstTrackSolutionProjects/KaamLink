import { MapPin, ArrowRight } from "lucide-react";
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
    <section id="cities" className="py-20 lg:py-28">
      <div
        ref={ref}
        className={`reveal ${inView ? "in-view" : ""} max-w-4xl mx-auto px-6 lg:px-8 text-center`}
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-pink-600">
          Now live in
        </span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
          8 cities, and counting
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {CITIES.map((city) => (
            <span
              key={city}
              className="inline-flex items-center gap-1.5 rounded-full bg-white border border-line px-4 py-2 text-sm font-medium shadow-card hover:shadow-soft hover:-translate-y-0.5 transition-all"
            >
              <MapPin size={14} className="text-pink-600" />
              {city}
            </span>
          ))}
          <span className="inline-flex items-center rounded-full bg-line/60 px-4 py-2 text-sm font-medium text-muted">
            + more every month
          </span>
        </div>

        <a
          href="#top"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-pink-600 px-6 py-3.5 text-sm font-semibold text-white shadow-card hover:shadow-soft hover:-translate-y-0.5 transition-all"
        >
          Check availability in your city
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
