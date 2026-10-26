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
    <figure className="group relative flex h-full flex-col rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm hover:shadow-soft hover:-translate-y-1 transition-all duration-300">
      {/* Decorative Quote Icon */}
      <Quote size={40} className="absolute top-6 right-6 text-slate-100 group-hover:text-brand-50 transition-colors duration-300" />
      
      {/* Star Rating */}
      <div className="flex gap-1 text-gold-500 mb-4">
        {Array.from({ length: 5 }).map((_, s) => (
          <Star key={s} size={16} className="fill-gold-500" />
        ))}
      </div>

      {/* Quote Text */}
      <blockquote className="relative z-10 flex-1 text-[15px] leading-relaxed text-slate-700 font-medium">
        “{t.quote}”
      </blockquote>

      {/* User Info */}
      <figcaption className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
        <img
          src={avatar.src}
          width={avatar.width}
          height={avatar.height}
          alt={avatar.alt}
          className="h-12 w-12 rounded-full object-cover ring-2 ring-slate-100 group-hover:ring-brand-100 transition-all"
        />
        <div>
          <p className="text-sm font-bold text-slate-900">{t.name}</p>
          <p className="text-xs font-medium text-brand-600 mt-0.5">
            {t.city} <span className="text-slate-300 mx-1">•</span> {t.service}
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
    <section className="bg-white py-20 lg:py-28 overflow-hidden relative">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-xs font-bold uppercase tracking-wider text-brand-600 mb-4">
              Loved across India
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              What our customers say
            </h2>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => goTo(page - 1)}
              className="grid h-12 w-12 place-items-center rounded-full bg-white border border-slate-200 shadow-sm transition-all hover:bg-slate-50 hover:text-brand-600 hover:border-brand-200 active:scale-95"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => goTo(page + 1)}
              className="grid h-12 w-12 place-items-center rounded-full bg-white border border-slate-200 shadow-sm transition-all hover:bg-slate-50 hover:text-brand-600 hover:border-brand-200 active:scale-95"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Slider */}
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
                  {group.map((t) => (
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

        {/* Pagination Dots */}
        <div className="mt-10 flex justify-center gap-2">
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                page === i ? "w-8 bg-brand-600" : "w-2.5 bg-slate-200 hover:bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}