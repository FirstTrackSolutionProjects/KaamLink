import { useState, useMemo } from "react";
import { Search, Clock, Mail, ArrowRight } from "lucide-react";
import useReveal from "../hooks/useReveal";
import { blogFeatured, blogCovers } from "../assets/asset";

const CATEGORIES = [
  "All",
  "Cleaning Tips",
  "Pest Control",
  "Home Maintenance",
  "Seasonal Guides",
  "Company News",
];

const POSTS = [
  {
    title: "5 Signs Your Home Needs a Deep Clean",
    category: "Cleaning Tips",
    excerpt:
      "From dust buildup behind appliances to grout discoloration, here's how to tell it's time to book a deep clean.",
    author: "Team Manayata",
    date: "Jul 14, 2026",
    readTime: "4 min read",
  },
  {
    title: "Monsoon-Proofing: A Pest Control Checklist",
    category: "Pest Control",
    excerpt:
      "Damp weather brings more than rain — here's how to keep cockroaches, mosquitoes and termites out this season.",
    author: "Sana Iyer",
    date: "Jul 2, 2026",
    readTime: "5 min read",
  },
  {
    title: "AC Maintenance Guide Before Summer Hits",
    category: "Home Maintenance",
    excerpt:
      "A pre-summer service can cut your cooling bill and extend your AC's lifespan. Here's what a full service covers.",
    author: "Karan Rao",
    date: "Jun 21, 2026",
    readTime: "6 min read",
  },
  {
    title: "How We Verify Every Manayata Professional",
    category: "Company News",
    excerpt:
      "A behind-the-scenes look at our background-check process, skills assessment and ongoing quality reviews.",
    author: "Team Manayata",
    date: "Jun 9, 2026",
    readTime: "5 min read",
  },
  {
    title: "Festive Season Home Prep Checklist",
    category: "Seasonal Guides",
    excerpt:
      "Get your home guest-ready ahead of the festivities with this room-by-room prep checklist.",
    author: "Divya Menon",
    date: "May 28, 2026",
    readTime: "4 min read",
  },
  {
    title: "DIY vs Professional: When to Call an Expert",
    category: "Home Maintenance",
    excerpt:
      "Some fixes are fine to DIY. Others can cost you more down the line. Here's how to know the difference.",
    author: "Team Manayata",
    date: "May 12, 2026",
    readTime: "5 min read",
  },
];

export default function Blog() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [headerRef, headerIn] = useReveal();
  const [gridRef, gridIn] = useReveal();

  const filtered = useMemo(() => {
    return POSTS.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-ivory pt-10 pb-4">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-gradient-to-br from-brand-400/20 to-gold-400/20 blur-3xl animate-float" />
        <div
          ref={headerRef}
          className={`reveal ${headerIn ? "in-view" : ""} relative max-w-3xl mx-auto px-6 lg:px-8 pt-10 pb-12 text-center`}
        >
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
            The Home Care Journal
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Tips, guides & stories from Manayata
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Practical advice on cleaning, maintenance and getting the most out
            of home services.
          </p>

          <div className="relative mt-8 max-w-md mx-auto">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-full bg-white pl-11 pr-4 py-3.5 text-sm shadow-sm border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-50 outline-none placeholder:text-slate-400 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Category filters */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-14">
        <div className="flex overflow-x-auto no-scrollbar justify-start md:justify-center gap-2 pb-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                category === cat
                  ? "bg-brand-600 text-white shadow-md border border-brand-600"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-brand-300 hover:text-brand-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured post */}
      {category === "All" && !query && (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
          <a
            href="/blog"
            className="group grid lg:grid-cols-2 gap-8 rounded-[2rem] bg-white p-4 lg:p-6 shadow-card border border-slate-100 hover:shadow-soft transition-all items-center"
          >
            <div className="overflow-hidden rounded-2xl aspect-[8/5]">
              <img
                src={blogFeatured.src}
                width={blogFeatured.width}
                height={blogFeatured.height}
                alt={blogFeatured.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="pr-2 pb-4 lg:pb-0">
              <span className="inline-block rounded-full bg-brand-50 border border-brand-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-600">
                Featured · Company News
              </span>
              <h2 className="mt-4 text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">
                Inside Manayata: How 12,000 Professionals Get Verified
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                From identity checks to skills assessments and ongoing quality
                audits — a full walkthrough of what it takes to wear the
                Manayata badge.
              </p>
              <div className="mt-5 flex items-center gap-4 text-sm font-medium text-slate-500">
                <span>Team Manayata</span>
                <span className="h-1 w-1 rounded-full bg-slate-300" />
                <span className="flex items-center gap-1">
                  <Clock size={14} /> 7 min read
                </span>
              </div>
            </div>
          </a>
        </div>
      )}

      {/* Post grid */}
      <section className="pb-24">
        <div
          ref={gridRef}
          className={`reveal ${gridIn ? "in-view" : ""} max-w-7xl mx-auto px-6 lg:px-8`}
        >
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">No articles match your search yet.</p>
              <button onClick={() => { setQuery(""); setCategory("All"); }} className="mt-4 text-brand-600 font-semibold hover:underline">
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => {
                const cover = blogCovers[POSTS.indexOf(post)];
                return (
                  <a
                    href="/blog"
                    key={post.title}
                    className="group flex flex-col overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="overflow-hidden aspect-[3/2]">
                      <img
                        src={cover.src}
                        width={cover.width}
                        height={cover.height}
                        alt={cover.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                        {post.category}
                      </span>
                      <h3 className="mt-2 text-lg font-display font-bold leading-snug text-slate-900 group-hover:text-brand-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-500 line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="mt-5 flex items-center justify-between text-xs font-medium text-slate-400 pt-4 border-t border-slate-100">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-md">
                          <Clock size={12} /> {post.readTime}
                        </span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 px-6 py-12 lg:py-16 text-center shadow-xl">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-500/20 via-slate-900 to-slate-900 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="mx-auto h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center mb-5 border border-white/20">
                <Mail size={24} className="text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Get home care tips in your inbox
              </h2>
              <p className="mt-3 text-slate-300 text-sm max-w-md mx-auto">
                Join 10,000+ homeowners. One email a month. No spam, unsubscribe anytime.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="flex-1 rounded-full px-5 py-3.5 text-sm outline-none text-slate-900 placeholder:text-slate-400 bg-white/90 focus:bg-white transition-colors"
                />
                <button
                  type="submit"
                  className="group rounded-full bg-brand-600 px-7 py-3.5 text-sm font-bold text-white hover:bg-brand-500 transition-colors whitespace-nowrap flex items-center justify-center gap-2 shadow-lg"
                >
                  Subscribe
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}