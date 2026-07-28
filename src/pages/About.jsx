import { ShieldCheck, IndianRupee, Award, Heart, ArrowRight } from "lucide-react";
import useReveal from "../hooks/useReveal";
import { aboutHero, teamMembers } from "../assets/asset";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Trust & Safety",
    desc: "Every professional is background-verified before they ever enter a customer's home.",
  },
  {
    icon: IndianRupee,
    title: "Fair Pricing",
    desc: "Upfront pricing with no hidden charges — for customers and fair earnings for our pros.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    desc: "Every job comes with a 7-day service warranty and a real human support team.",
  },
  {
    icon: Heart,
    title: "Community Impact",
    desc: "We train and upskill local service professionals to build sustainable careers.",
  },
];

const TIMELINE = [
  { year: "2021", text: "KaamLink founded in Bengaluru with 3 services and 40 professionals." },
  { year: "2022", text: "Expanded to Mumbai and Pune; crossed 1,000 verified professionals." },
  { year: "2023", text: "Reached 50,000+ completed bookings across 5 cities." },
  { year: "2024", text: "Grew the professional network past 12,000, added 4 new service categories." },
  { year: "2025", text: "Live in 8 cities with a dedicated Trust & Safety team." },
  { year: "2026", text: "Building toward pan-India coverage, one verified professional at a time." },
];

const TEAM = [
  { name: "Arjun Khanna", role: "Co-founder & CEO" },
  { name: "Divya Menon", role: "Co-founder & COO" },
  { name: "Karan Rao", role: "Head of Operations" },
  { name: "Sana Iyer", role: "Head of Trust & Safety" },
];

const STATS = [
  { value: "50K+", label: "Homes serviced" },
  { value: "12K+", label: "Verified professionals" },
  { value: "8", label: "Cities live" },
  { value: "4.8/5", label: "Average rating" },
];

export default function About() {
  const [heroRef, heroIn] = useReveal();
  const [valuesRef, valuesIn] = useReveal();
  const [timelineRef, timelineIn] = useReveal();
  const [teamRef, teamIn] = useReveal();
  const [statsRef, statsIn] = useReveal();
  const [ctaRef, ctaIn] = useReveal();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-amber-300/40 to-pink-400/30 blur-3xl animate-blob-float" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div ref={heroRef} className={`reveal ${heroIn ? "in-view" : ""}`}>
            <span className="text-xs font-semibold uppercase tracking-wider text-pink-600">
              About KaamLink
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1]">
              We're making home services something you can{" "}
              <span className="bg-gradient-to-r from-amber-500 to-pink-600 bg-clip-text text-transparent">
                actually trust
              </span>
              .
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted max-w-lg">
              KaamLink started with a simple frustration: finding a reliable
              professional for basic home needs shouldn't be this hard. So we
              built a platform where every professional is verified, every
              price is upfront, and every job is backed by a warranty.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-amber-200/50 to-pink-200/40 -rotate-3 scale-95" />
            <img
              src={aboutHero.src}
              width={aboutHero.width}
              height={aboutHero.height}
              alt={aboutHero.alt}
              className="relative w-full max-w-md mx-auto rounded-[2.5rem] shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-24 bg-white">
        <div
          ref={valuesRef}
          className={`reveal ${valuesIn ? "in-view" : ""} max-w-7xl mx-auto px-6 lg:px-8`}
        >
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-pink-600">
              What drives us
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Our mission & values
            </h2>
            <p className="mt-3 text-muted">
              To make quality home services accessible, reliable and fairly
              priced for every Indian household.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-3xl bg-ivory p-6 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all"
              >
                <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-amber-500 to-pink-600 grid place-items-center mb-4">
                  <Icon size={20} className="text-white" />
                </div>
                <p className="font-display font-bold">{title}</p>
                <p className="mt-1.5 text-sm text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-24">
        <div
          ref={timelineRef}
          className={`reveal ${timelineIn ? "in-view" : ""} max-w-3xl mx-auto px-6 lg:px-8`}
        >
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-pink-600">
              Our journey
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
              From 3 services to 10
            </h2>
          </div>
          <div className="relative pl-8 border-l-2 border-line space-y-10">
            {TIMELINE.map((t) => (
              <div key={t.year} className="relative">
                <span className="absolute -left-[2.55rem] top-0 h-5 w-5 rounded-full bg-gradient-to-br from-amber-500 to-pink-600 ring-4 ring-white" />
                <p className="text-sm font-bold text-pink-600">{t.year}</p>
                <p className="mt-1 text-ink/80">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-24 bg-white">
        <div
          ref={teamRef}
          className={`reveal ${teamIn ? "in-view" : ""} max-w-7xl mx-auto px-6 lg:px-8`}
        >
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-pink-600">
              Leadership
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
              The team behind KaamLink
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <div key={member.name} className="text-center">
                <img
                  src={teamMembers[i].src}
                  width={teamMembers[i].width}
                  height={teamMembers[i].height}
                  alt={teamMembers[i].alt}
                  className="mx-auto h-32 w-32 rounded-3xl object-cover shadow-card"
                />
                <p className="mt-4 font-display font-bold">{member.name}</p>
                <p className="text-sm text-muted">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20">
        <div
          ref={statsRef}
          className={`reveal ${statsIn ? "in-view" : ""} max-w-7xl mx-auto px-6 lg:px-8`}
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

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div
          ref={ctaRef}
          className={`reveal ${ctaIn ? "in-view" : ""} max-w-3xl mx-auto px-6 lg:px-8 text-center`}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Want to join the KaamLink network?
          </h2>
          <p className="mt-3 text-muted">
            We're always looking for skilled, background-verified professionals
            to join our platform.
          </p>
          
            <a href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-pink-600 px-6 py-3.5 text-sm font-semibold text-white shadow-card hover:shadow-soft hover:-translate-y-0.5 transition-all"
          >
            Partner with us
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}