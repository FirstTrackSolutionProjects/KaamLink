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
  { year: "2021", text: "Manayata founded in Bengaluru with 3 services and 40 professionals." },
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
      <section className="relative overflow-hidden bg-ivory pt-10 pb-4">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-brand-400/20 to-gold-400/20 blur-3xl animate-float" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-20 grid lg:grid-cols-2 gap-12 items-center">
          <div ref={heroRef} className={`reveal ${heroIn ? "in-view" : ""}`}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-xs font-bold uppercase tracking-wider text-brand-600 mb-4">
              About Manayata
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] text-slate-900">
              We're making home services something you can{" "}
              <span className="bg-gradient-to-r from-brand-600 to-gold-500 bg-clip-text text-transparent">
                actually trust
              </span>
              .
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-500 max-w-lg leading-relaxed">
              Manayata started with a simple frustration: finding a reliable
              professional for basic home needs shouldn't be this hard. So we
              built a platform where every professional is verified, every
              price is upfront, and every job is backed by a warranty.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-100 to-gold-400/20 -rotate-3 scale-95 blur-sm" />
            <img
              src={aboutHero.src}
              width={aboutHero.width}
              height={aboutHero.height}
              alt={aboutHero.alt}
              className="relative w-full max-w-md mx-auto rounded-[2.5rem] shadow-soft border border-slate-100"
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
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-xs font-bold uppercase tracking-wider text-brand-600 mb-4">
              What drives us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Our mission & values
            </h2>
            <p className="mt-3 text-slate-500">
              To make quality home services accessible, reliable and fairly
              priced for every Indian household.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-3xl bg-white border border-slate-100 p-6 shadow-sm hover:shadow-soft hover:border-brand-100 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-2xl bg-brand-50 text-brand-600 grid place-items-center mb-5 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={22} />
                </div>
                <p className="font-display font-bold text-slate-900">{title}</p>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div
          ref={timelineRef}
          className={`reveal ${timelineIn ? "in-view" : ""} max-w-3xl mx-auto px-6 lg:px-8`}
        >
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-brand-600 mb-4">
              Our journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              From 3 services to 10
            </h2>
          </div>
          <div className="relative pl-8 border-l-2 border-slate-200 space-y-10">
            {TIMELINE.map((t) => (
              <div key={t.year} className="relative">
                <span className="absolute -left-[2.55rem] top-0 h-5 w-5 rounded-full bg-gradient-to-br from-brand-500 to-gold-500 ring-4 ring-slate-50" />
                <p className="text-sm font-bold text-brand-600">{t.year}</p>
                <p className="mt-1 text-slate-700 font-medium">{t.text}</p>
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
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-xs font-bold uppercase tracking-wider text-brand-600 mb-4">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              The team behind Manayata
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <div key={member.name} className="text-center group">
                <div className="relative inline-block">
                  <img
                    src={teamMembers[i].src}
                    width={teamMembers[i].width}
                    height={teamMembers[i].height}
                    alt={teamMembers[i].alt}
                    className="mx-auto h-36 w-36 rounded-[2rem] object-cover shadow-sm border border-slate-100 group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300"
                  />
                </div>
                <p className="mt-5 font-display font-bold text-slate-900">{member.name}</p>
                <p className="text-sm font-medium text-brand-600 mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div
          ref={statsRef}
          className={`reveal ${statsIn ? "in-view" : ""} max-w-7xl mx-auto px-6 lg:px-8`}
        >
          <div className="rounded-[2rem] bg-slate-900 px-6 py-12 lg:py-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center shadow-xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-500/20 via-slate-900 to-slate-900 pointer-events-none" />
            
            {STATS.map((s) => (
              <div key={s.label} className="relative z-10">
                <p className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                  {s.value}
                </p>
                <p className="mt-2 text-sm font-medium text-slate-400">{s.label}</p>
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
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Want to join the Manayata network?
          </h2>
          <p className="mt-4 text-slate-500">
            We're always looking for skilled, background-verified professionals
            to join our platform.
          </p>
          
          <a
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-8 py-4 text-sm font-bold text-white shadow-md hover:bg-brand-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Partner with us
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </>
  );
}