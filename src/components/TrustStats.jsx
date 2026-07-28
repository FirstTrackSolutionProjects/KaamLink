import useReveal from "../hooks/useReveal";

const STATS = [
  { value: "50K+", label: "Homes serviced" },
  { value: "12K+", label: "Verified professionals" },
  { value: "4.8/5", label: "Average rating" },
  { value: "25+", label: "Cities covered" },
];

export default function TrustStats() {
  const [ref, inView] = useReveal();

  return (
    <section className="py-16 lg:py-20">
      <div
        ref={ref}
        className={`reveal ${inView ? "in-view" : ""} max-w-7xl mx-auto px-6 lg:px-8`}
      >
        <div className="rounded-[2rem] bg-gradient-to-r from-amber-500 to-pink-600 px-6 py-12 lg:py-14 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                {s.value}
              </p>
              <p className="mt-1.5 text-sm text-white/85">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
