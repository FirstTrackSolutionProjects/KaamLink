import { useState, useMemo } from "react";
import { Search, Clock, Mail } from "lucide-react";
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
    author: "Team KaamLink",
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
    title: "How We Verify Every KaamLink Professional",
    category: "Company News",
    excerpt:
      "A behind-the-scenes look at our background-check process, skills assessment and ongoing quality reviews.",
    author: "Team KaamLink",
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
    author: "Team KaamLink",
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
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-gradient-to-br from-pink-300/30 to-amber-200/30 blur-3xl animate-blob-float" />
        <div
          ref={headerRef}
          className={`reveal ${headerIn ? "in-view" : ""} relative max-w-3xl mx-auto px-6 lg:px-8 pt-16 pb-12 lg:pt-24 text-center`}
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-pink-600">
            The Home Care Journal
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight">
            Tips, guides & stories from KaamLink
          </h1>
          <p className="mt-4 text-muted">
            Practical advice on cleaning, maintenance and getting the most out
            of home services.
          </p>

          <div className="relative mt-8 max-w-md mx-auto">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-full bg-white pl-11 pr-4 py-3.5 text-sm shadow-card focus:shadow-soft outline-none placeholder:text-muted/70"
            />
          </div>
        </div>
      </section>

      {/* Category filters */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap justify-center gap-2 mb-14">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              category === cat
                ? "bg-gradient-to-r from-amber-500 to-pink-600 text-white shadow-card"
                : "bg-white text-ink/70 border border-line hover:border-pink-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured post */}
      {category === "All" && !query && (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
          
           <a href="/blog"
            className="group grid lg:grid-cols-2 gap-8 rounded-[2rem] bg-white p-4 lg:p-6 shadow-card hover:shadow-soft transition-shadow items-center"
          >
            <img
              src={blogFeatured.src}
              width={blogFeatured.width}
              height={blogFeatured.height}
              alt={blogFeatured.alt}
              className="w-full rounded-2xl object-cover aspect-[8/5]"
            />
            <div className="pr-2 pb-4 lg:pb-0">
              <span className="inline-block rounded-full bg-gradient-to-r from-amber-500 to-pink-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Featured · Company News
              </span>
              <h2 className="mt-4 text-2xl lg:text-3xl font-extrabold tracking-tight group-hover:text-pink-600 transition-colors">
                Inside KaamLink: How 12,000 Professionals Get Verified
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                From identity checks to skills assessments and ongoing quality
                audits — a full walkthrough of what it takes to wear the
                KaamLink badge.
              </p>
              <div className="mt-5 flex items-center gap-4 text-sm text-muted">
                <span>Team KaamLink</span>
                <span className="h-1 w-1 rounded-full bg-line" />
                <span className="flex items-center gap-1">
                  <Clock size={13} /> 7 min read
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
            <p className="text-center text-muted py-16">
              No articles match your search yet.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => {
                const cover = blogCovers[POSTS.indexOf(post)];
                return (
                  
                    <a href="/blog"
                    key={post.title}
                    className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-card hover:shadow-soft hover:-translate-y-1 transition-all"
                  >
                    <img
                      src={cover.src}
                      width={cover.width}
                      height={cover.height}
                      alt={cover.alt}
                      className="w-full aspect-[3/2] object-cover"
                    />
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-pink-600">
                        {post.category}
                      </span>
                      <h3 className="mt-2 font-display font-bold leading-snug group-hover:text-pink-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center justify-between text-xs text-muted pt-4 border-t border-line">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1">
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
          <div className="rounded-[2rem] bg-gradient-to-r from-amber-500 to-pink-600 px-6 py-12 lg:py-14 text-center">
            <Mail size={28} className="mx-auto text-white" />
            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Get home care tips in your inbox
            </h2>
            <p className="mt-2 text-white/85 text-sm">
              One email a month. No spam, unsubscribe anytime.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 rounded-full px-5 py-3 text-sm outline-none placeholder:text-muted/70"
              />
              <button
                type="submit"
                className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-ink/90 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}