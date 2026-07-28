import { ShieldCheck, Star, Search } from "lucide-react";
import useReveal from "../hooks/useReveal";
import { heroImage } from "../assets/asset";

export default function Hero() {
  const [ref, inView] = useReveal();

  return (
    <section className="relative overflow-hidden">
      {/* Ombre blobs */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-amber-300/40 to-pink-400/30 blur-3xl animate-blob-float" />
      <div className="absolute top-32 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-pink-300/30 to-amber-200/30 blur-3xl animate-blob-float [animation-delay:2s]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-24 lg:pt-24 lg:pb-28 grid lg:grid-cols-2 gap-12 items-center">
        <div
          ref={ref}
          className={`reveal ${inView ? "in-view" : ""}`}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-ink/70 shadow-card">
            <ShieldCheck size={14} className="text-pink-600" />
            Background-verified professionals
          </span>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Home services,
            <br />
            <span className="bg-gradient-to-r from-amber-500 to-pink-600 bg-clip-text text-transparent">
              done right
            </span>{" "}
            — at your door.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-muted max-w-lg">
            Deep cleaning, pest control, repairs and 8 more services. Pick a
            slot, get a verified pro, pay only after the job's done.
          </p>

          {/* Primary CTA — pincode search */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md"
          >
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
              />
              <input
                type="text"
                placeholder="Enter your pincode"
                className="w-full rounded-full bg-white pl-11 pr-4 py-3.5 text-sm shadow-card focus:shadow-soft outline-none placeholder:text-muted/70"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-amber-500 to-pink-600 px-6 py-3.5 text-sm font-semibold text-white shadow-card hover:shadow-soft hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              Check availability
            </button>
          </form>

          
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-amber-200/50 to-pink-200/40 rotate-3 scale-95" />
          <img
            src={heroImage.src}
            width={heroImage.width}
            height={heroImage.height}
            alt={heroImage.alt}
            className="relative w-full max-w-md mx-auto rounded-[2.5rem] shadow-soft"
          />
        </div>
      </div>
    </section>
  );
}
