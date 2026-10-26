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
    <section className="py-16 lg:py-20 bg-white">
      <div ref={ref} className={`reveal ${inView ? "in-view" : ""} max-w-7xl mx-auto px-6 lg:px-8`}>
        <div className="rounded-3xl border border-line bg-ivory px-6 py-10 lg:py-12 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 lg:divide-x divide-line">
          {STATS.map((s) => (
            <div key={s.label} className="text-center lg:px-6">
              <p className="text-3xl sm:text-4xl font-display font-extrabold text-brand-600">
                {s.value}
              </p>
              <p className="mt-1.5 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}