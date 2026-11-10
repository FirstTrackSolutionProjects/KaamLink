import { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sparkles, Bug, Wind, Wrench, Zap, Settings, PaintRoller,
  Hammer, Scissors, Truck, ChevronLeft, ChevronRight,
  Star, Clock, ArrowUpRight, Loader2
} from "lucide-react";

// Fallback data just in case the database is empty or backend is down
const FALLBACK_SERVICES = [
  { icon: Sparkles, name: "Deep Cleaning", desc: "Full home deep clean, kitchen & bathrooms included", rating: 4.9, reviews: "2.3k", duration: "3-4 hrs", price: 1499, original: 1999, tag: "Bestseller" },
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

// Map database names to Lucide icons based on matching keywords
const getIconForService = (name) => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes("clean")) return Sparkles;
  if (lowerName.includes("pest")) return Bug;
  if (lowerName.includes("ac") || lowerName.includes("air")) return Wind;
  if (lowerName.includes("plumb")) return Wrench;
  if (lowerName.includes("electric")) return Zap;
  if (lowerName.includes("appliance")) return Settings;
  if (lowerName.includes("paint")) return PaintRoller;
  if (lowerName.includes("carpenter")) return Hammer;
  if (lowerName.includes("salon") || lowerName.includes("hair")) return Scissors;
  if (lowerName.includes("move") || lowerName.includes("pack")) return Truck;
  return Sparkles; // Default
};

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

function ServiceCard({ s, onBook }) {
  const Icon = s.icon;
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
      {s.tag && (
        <span
          className={`absolute top-5 right-5 z-10 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${TAG_STYLES[s.tag] || TAG_STYLES.Bestseller}`}
        >
          {s.tag}
        </span>
      )}

      {/* watermark icon */}
      <Icon
        size={110}
        strokeWidth={1.5}
        className="pointer-events-none absolute -bottom-7 -right-7 rotate-12 text-ink/[0.04]"
      />

      <div className="relative h-12 w-12 shrink-0 rounded-2xl bg-gradient-to-br from-amber-500 to-pink-600 shadow-card grid place-items-center transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-110">
        <Icon size={22} className="text-white" />
      </div>

      <h3 className="relative mt-5 font-display text-lg font-bold leading-snug">
        {s.name}
      </h3>
      <p className="relative mt-1.5 text-sm leading-relaxed text-muted line-clamp-2">
        {s.desc}
      </p>

      <div className="relative mt-4 flex items-center gap-3 text-xs text-muted">
        <span className="inline-flex items-center gap-1">
          <Star size={13} className="fill-amber-500 text-amber-500" />
          <span className="font-semibold text-ink">{s.rating}</span>
          <span>({s.reviews})</span>
        </span>
        <span className="h-1 w-1 rounded-full bg-line" />
        <span className="inline-flex items-center gap-1">
          <Clock size={13} />
          {s.duration}
        </span>
      </div>

      <div className="relative mt-5 flex items-end justify-between border-t border-line/80 pt-5">
        <div>
          <p className="text-[11px] text-muted">Starting at</p>
          <p className="flex items-baseline gap-1.5">
            <span className="font-display text-xl font-extrabold">₹{s.price}</span>
            {s.original && (
              <span className="text-xs text-muted line-through">₹{s.original}</span>
            )}
          </p>
        </div>
        <button
          onClick={() => onBook(s.id)}
          aria-label={`Book ${s.name}`}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ivory transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-pink-600"
        >
          <ArrowUpRight
            size={16}
            className="text-ink transition-colors duration-300 group-hover:text-white"
          />
        </button>
      </div>
    </div>
  );
}

export default function Services() {
  const [rawServices, setRawServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const pausedRef = useRef(false);
  const navigate = useNavigate();

  // Fetch services from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/services")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data.length > 0) {
          // Format database data to match our UI needs
          const formatted = data.data.map((dbService) => ({
            id: dbService.id,
            icon: getIconForService(dbService.name),
            name: dbService.name,
            desc: dbService.description || "Professional service at your doorstep",
            rating: 4.8, // Fake rating for now
            reviews: "100+",
            duration: `${dbService.duration_mins} min`,
            price: dbService.base_price,
            original: null,
            tag: null,
          }));
          setRawServices(formatted);
        } else {
          setRawServices(FALLBACK_SERVICES);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Backend fetch failed, using fallback data.", err);
        setRawServices(FALLBACK_SERVICES);
        setLoading(false);
      });
  }, []);

  const pages = useMemo(() => chunk(rawServices, 3), [rawServices]);

  useEffect(() => {
    if (pages.length <= 1) return;
    const id = setInterval(() => {
      if (!pausedRef.current) setPage((p) => (p + 1) % pages.length);
    }, 5000);
    return () => clearInterval(id);
  }, [pages.length]);

  const goTo = (i) => setPage((i + pages.length) % pages.length);

  const handleBook = (serviceId) => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("Please log in to book a service.");
      navigate("/login");
      return;
    }
    // Navigate to the booking page
    navigate(`/book/${serviceId}`);
  };

  if (loading) {
    return (
      <section id="services" className="py-20 flex justify-center items-center">
        <Loader2 className="animate-spin text-pink-600" size={40} />
      </section>
    );
  }

  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-pink-600">
              What we offer
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Services, one app
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
                    <ServiceCard key={s.id || s.name} s={s} onBook={handleBook} />
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