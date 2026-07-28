import { useState, useEffect, useRef, useMemo } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonialAvatars } from "../assets/asset";

const TESTIMONIALS = [
  { name: "Ananya R.", city: "Bengaluru", service: "Deep Cleaning", quote: "The team was thorough and on time. My kitchen hasn't been this clean since we moved in." },
  { name: "Rohit S.", city: "Pune", service: "Pest Control", quote: "Booked in the evening, pro arrived the next morning. No more cockroach problem at all." },
  { name: "Meera K.", city: "Mumbai", service: "AC Repair", quote: "Transparent pricing and the technician explained exactly what was wrong. Highly recommend." },
  { name: "Sameer P.", city: "Hyderabad", service: "Electrical", quote: "Fixed a tricky wiring issue two other electricians couldn't. Professional and quick." },
  { name: "Priya N.", city: "Delhi NCR", service: "Salon at Home", quote: "Convenient, hygienic, and the stylist was lovely. Booking again for my mom too." },
];

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function TestimonialCard({ t, avatar }) {
  return (
    <figure className="relative flex h-full flex-col rounded-3xl border border-line bg-ivory p-8">
      <Quote size={36} className="text-pink-600/15" />
      <div className="mt-3 flex gap-1 text-pink-600">
        {Array.from({ length: 5 }).map((_, s) => (
          <Star key={s} size={14} className="fill-pink-600" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/80">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        <img
          src={avatar.src}
          width={avatar.width}
          height={avatar.height}
          alt={avatar.alt}
          className="h-11 w-11 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold">{t.name}</p>
          <p className="text-xs text-muted">
            {t.city} · {t.service}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const pages = useMemo(() => chunk(TESTIMONIALS, 3), []);
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
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-pink-600">
              Loved across India
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              What our customers say
            </h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              onClick={() => goTo(page - 1)}
              className="grid h-11 w-11 place-items-center rounded-full bg-ivory shadow-card transition-shadow hover:shadow-soft"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => goTo(page + 1)}
              className="grid h-11 w-11 place-items-center rounded-full bg-ivory shadow-card transition-shadow hover:shadow-soft"
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
                  {group.map((t, idx) => (
                    <TestimonialCard
                      key={t.name}
                      t={t}
                      avatar={testimonialAvatars[TESTIMONIALS.indexOf(t)]}
                    />
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