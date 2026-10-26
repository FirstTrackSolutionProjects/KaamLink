import { useState, useEffect, useRef, useMemo } from "react";
import {
  Sparkles, Bug, Wind, Wrench, Zap, Settings, PaintRoller,
  Hammer, Scissors, Truck, ChevronLeft, ChevronRight,
  Star, Clock, ArrowUpRight,
} from "lucide-react";

const SERVICES = [
  { icon: Sparkles, name: "Deep Cleaning", desc: "Full home deep clean, kitchen & bathrooms included", rating: 4.9, reviews: "2.3k", duration: "3-4 hrs", price: 499, original: 699, tag: "Bestseller" },
  { icon: Bug, name: "Pest Control", desc: "Cockroach, ant & termite treatment, odourless spray", rating: 4.8, reviews: "1.8k", duration: "60-90 min", price: 599, original: 799, tag: "Popular" },
  { icon: Wind, name: "AC Repair & Service", desc: "Gas refill, servicing & installation for split/window ACs", rating: 4.7, reviews: "1.2k", duration: "45-60 min", price: 399, original: null, tag: null },
  { icon: Wrench, name: "Plumbing", desc: "Leak fixes, tap & pipe repair, bathroom fittings", rating: 4.6, reviews: "950", duration: "30-45 min", price: 299, original: null, tag: null },
  { icon: Zap, name: "Electrical", desc: "Wiring, switchboard & appliance connection repairs", rating: 4.7, reviews: "890", duration: "30-45 min", price: 299, original: null, tag: null },
  { icon: Settings, name: "Appliance Repair", desc: "Washing machine, fridge & microwave repairs at home", rating: 4.6, reviews: "760", duration: "45-60 min", price: 349, original: null, tag: null },
  { icon: PaintRoller, name: "Painting", desc: "Interior & exterior wall painting with premium finish", rating: 4.8, reviews: "540", duration: "1-2 days", price: 899, original: null, tag: "New" },
  { icon: Hammer, name: "Carpentry", desc: "Furniture repair, fittings & custom woodwork", rating: 4.5, reviews: "610", duration: "45-60 min", price: 349, original: null, tag: null },
  { icon: Scissors, name: "Salon at Home", desc: "Haircut, facial & grooming by certified experts", rating: 4.9, reviews: "2.1k", duration: "60-90 min", price: 449, original: 599, tag: "Popular" },
  { icon: Truck, name: "Packers & Movers", desc: "Safe, insured home shifting within and across cities", rating: 4.7, reviews: "430", duration: "Half day", price: 1499, original: null, tag: null },
];

const TAG_STYLES = {
  Bestseller: "bg-gradient-to-r from-amber-500 to-pink-600 text-white",
  Popular: "bg-ink text-white",
  New: "bg-white border border-pink-500 text-pink-600",
};

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function ServiceCard({ s }) {
  const Icon = s.icon;
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft">
      <div className="flex items-start justify-between">
        <div className="h-11 w-11 rounded-xl bg-brand-50 grid place-items-center transition-colors group-hover:bg-brand-600">
          <Icon size={20} className="text-brand-600 transition-colors group-hover:text-white" />
        </div>
        {s.tag && (
          <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${
            s.tag === "Bestseller"
              ? "bg-gold-400/15 text-gold-600"
              : s.tag === "Popular"
              ? "bg-brand-50 text-brand-600"
              : "bg-white border border-line text-muted"
          }`}>
            {s.tag}
          </span>
        )}
      </div>

      <h3 className="mt-4 font-display text-base font-bold leading-snug text-ink">{s.name}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted line-clamp-2">{s.desc}</p>

      <div className="mt-3 flex items-center gap-3 text-xs text-muted">
        <span className="inline-flex items-center gap-1">
          <Star size={12} className="fill-gold-400 text-gold-400" />
          <span className="font-semibold text-ink">{s.rating}</span>
          <span>({s.reviews})</span>
        </span>
        <span className="h-1 w-1 rounded-full bg-line" />
        <span className="inline-flex items-center gap-1"><Clock size={12} /> {s.duration}</span>
      </div>

      <div className="mt-auto pt-4 flex items-end justify-between border-t border-line mt-4">
        <div>
          <p className="text-[10px] uppercase tracking-wide text-muted">From</p>
          <p className="flex items-baseline gap-1.5">
            <span className="font-display text-lg font-extrabold text-ink">₹{s.price}</span>
            {s.original && <span className="text-xs text-muted line-through">₹{s.original}</span>}
          </p>
        </div>
        <button
          aria-label={`Book ${s.name}`}
          className="grid h-9 w-9 place-items-center rounded-full bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white"
        >
          <ArrowUpRight size={15} />
        </button>
      </div>
    </div>
  );
}

export default function Services() {
  const pages = useMemo(() => chunk(SERVICES, 3), []);
  const [page, setPage] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) setPage((p) => (p + 1) % pages.length);
    }, 5000);
    return () => clearInterval(id);
  }, [pages.length]);

  const goTo = (i) => setPage((i + pages.length) % pages.length);

  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-pink-600">
              What we offer
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              10 services, one app
            </h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              onClick={() => goTo(page - 1)}
              className="grid h-11 w-11 place-items-center rounded-full bg-white shadow-card transition-shadow hover:shadow-soft"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => goTo(page + 1)}
              className="grid h-11 w-11 place-items-center rounded-full bg-white shadow-card transition-shadow hover:shadow-soft"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          className="overflow-hidden"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              width: `${pages.length * 100}%`,
              transform: `translateX(-${(100 / pages.length) * page}%)`,
            }}
          >
            {pages.map((group, i) => (
              <div key={i} style={{ width: `${100 / pages.length}%` }} className="shrink-0 px-1">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {group.map((s) => (
                    <ServiceCard key={s.name} s={s} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                page === i ? "w-6 bg-gradient-to-r from-amber-500 to-pink-600" : "w-2 bg-line"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}