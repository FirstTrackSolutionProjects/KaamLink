import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, LogIn, UserPlus, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "About", href: "/about", isRoute: true },
  { label: "Blog", href: "/blog", isRoute: true },
  { label: "Contact", href: "/contact", isRoute: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const accountRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (accountRef.current && !accountRef.current.contains(e.target)) {
        setAccountOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const linkClasses =
    "hover:text-ink transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-amber-500 after:to-pink-600 hover:after:w-full after:transition-all";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ivory/80 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 h-18 py-4">
        <Link to="/" className="text-2xl font-display font-extrabold tracking-tight">
          Kaam
          <span className="bg-gradient-to-r from-amber-500 to-pink-600 bg-clip-text text-transparent">
            Link
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 font-medium text-sm text-ink/80">
          {NAV_LINKS.map((link) =>
            link.isRoute ? (
              <li key={link.href}>
                <Link to={link.href} className={linkClasses}>
                  {link.label}
                </Link>
              </li>
            ) : (
              <li key={link.href}>
                <a href={link.href} className={linkClasses}>
                  {link.label}
                </a>
              </li>
            )
          )}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {/* Account icon + dropdown */}
          <div className="relative" ref={accountRef}>
            <button
              onClick={() => setAccountOpen((v) => !v)}
              className={`grid h-10 w-10 place-items-center rounded-full border border-line transition-colors ${
                accountOpen ? "bg-ivory border-pink-300" : "bg-white hover:bg-ivory"
              }`}
              aria-label="Account menu"
              aria-expanded={accountOpen}
            >
              <User size={18} className="text-ink/70" />
            </button>

            <div
              className={`absolute right-0 mt-3 w-56 origin-top-right rounded-2xl bg-white p-2 shadow-soft border border-line transition-all duration-200 ${
                accountOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
              }`}
            >
              <Link
                to="/login"
                onClick={() => setAccountOpen(false)}
                className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ink/80 hover:bg-ivory hover:text-ink transition-colors"
              >
                <span className="flex items-center gap-2.5">
                  <LogIn size={16} className="text-pink-600" />
                  Log in
                </span>
                <ArrowRight
                  size={14}
                  className="text-muted opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                />
              </Link>
              <Link
                to="/signup"
                onClick={() => setAccountOpen(false)}
                className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ink/80 hover:bg-ivory hover:text-ink transition-colors"
              >
                <span className="flex items-center gap-2.5">
                  <UserPlus size={16} className="text-pink-600" />
                  Register
                </span>
                <ArrowRight
                  size={14}
                  className="text-muted opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                />
              </Link>
            </div>
          </div>

          
           <a href="/#services"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-amber-500 to-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:shadow-soft hover:-translate-y-0.5 transition-all"
          >
            Book a Service
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-line/60 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out bg-ivory/95 backdrop-blur-md border-t border-line ${
          open ? "max-h-[30rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) =>
            link.isRoute ? (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-ink/80 font-medium hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ) : (
              <li key={link.href}>
                
                  <a href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-ink/80 font-medium hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            )
          )}

          <li className="pt-2 border-t border-line mt-2">
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 py-2.5 text-ink/80 font-medium hover:text-ink"
            >
              <LogIn size={16} className="text-pink-600" />
              Log in
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 py-2.5 text-ink/80 font-medium hover:text-ink"
            >
              <UserPlus size={16} className="text-pink-600" />
              Register
            </Link>
          </li>
          <li className="pt-2">
            
              <a href="/#services"
              onClick={() => setOpen(false)}
              className="block text-center rounded-full bg-gradient-to-r from-amber-500 to-pink-600 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Book a Service
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}