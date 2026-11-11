import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, User, LogIn, UserPlus, ArrowRight, LayoutDashboard, LogOut, ChevronDown } from "lucide-react";
import { assets } from "../assets/asset";

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;

const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
    isRoute: true,
  },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about", isRoute: true },
  { label: "Blog", href: "/blog", isRoute: true },
  { label: "Contact", href: "/contact", isRoute: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // New states for the Book Menu
  const [bookMenuOpen, setBookMenuOpen] = useState(false);
  const [navServices, setNavServices] = useState([]);
  
  const accountRef = useRef(null);
  const bookMenuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check login status when component mounts
    const token = localStorage.getItem("accessToken");
    if (token) setIsLoggedIn(true);

    // Fetch services for the dropdown
    fetch(`${BACKEND_URL}/api/services`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setNavServices(data.data);
      })
      .catch((err) => console.log("Error fetching services in navbar", err));

    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (accountRef.current && !accountRef.current.contains(e.target)) {
        setAccountOpen(false);
      }
      if (bookMenuRef.current && !bookMenuRef.current.contains(e.target)) {
        setBookMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setAccountOpen(false);
    navigate("/");
  };

  const linkClasses =
    "hover:text-ink transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-amber-500 after:to-pink-600 hover:after:w-full after:transition-all";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ivory/80 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 h-18 py-4">
        
        <Link to="/" className="flex  items-center group">
          <img
            src={assets.logoImg}
            alt=" Logo"
            className="w-18 h-17 object-contain group-hover:scale-105 transition-transform duration-200"
          />
          <span className="text-2xl font-display font-extrabold tracking-tight">
            Kaam
            <span className="bg-gradient-to-r from-amber-500 to-pink-600 bg-clip-text text-transparent">
              Link
            </span>
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
              {isLoggedIn ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setAccountOpen(false)}
                    className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ink/80 hover:bg-ivory hover:text-ink transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <LayoutDashboard size={16} className="text-pink-600" />
                      Dashboard
                    </span>
                    <ArrowRight
                      size={14}
                      className="text-muted opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ink/80 hover:bg-ivory hover:text-ink transition-colors text-left"
                  >
                    <span className="flex items-center gap-2.5">
                      <LogOut size={16} className="text-pink-600" />
                      Log out
                    </span>
                  </button>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>

          {/* Desktop Book Menu Dropdown */}
          <div className="relative" ref={bookMenuRef}>
            <button
              onClick={() => setBookMenuOpen(!bookMenuOpen)}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:shadow-soft hover:-translate-y-0.5 transition-all"
            >
              Book a Service
              <ChevronDown size={14} className={`transition-transform duration-200 ${bookMenuOpen ? "rotate-180" : ""}`} />
            </button>

            <div
              className={`absolute right-0 mt-3 w-56 origin-top-right rounded-2xl bg-white p-2 shadow-soft border border-line transition-all duration-200 z-50 ${
                bookMenuOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
              }`}
            >
              {navServices.length > 0 ? (
                navServices.map((service) => (
                  <Link
                    key={service.id}
                    to={`/book/${service.id}`}
                    onClick={() => setBookMenuOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-ink/80 hover:bg-ivory hover:text-ink transition-colors"
                  >
                    {service.name}
                  </Link>
                ))
              ) : (
                <p className="px-3 py-2 text-sm text-muted">No services available</p>
              )}
            </div>
          </div>
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out bg-ivory/95 backdrop-blur-md border-t border-line ${
          open ? "max-h-[40rem] opacity-100" : "max-h-0 opacity-0"
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

          {isLoggedIn ? (
            <>
              <li className="pt-2 border-t border-line mt-2">
                <Link
                  to="/dashboard"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2.5 py-2.5 text-ink/80 font-medium hover:text-ink"
                >
                  <LayoutDashboard size={16} className="text-pink-600" />
                  Dashboard
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    setOpen(false);
                  }}
                  className="flex items-center gap-2.5 py-2.5 text-ink/80 font-medium hover:text-ink w-full text-left"
                >
                  <LogOut size={16} className="text-pink-600" />
                  Log out
                </button>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}

          {/* Mobile Book Services List */}
          <li className="pt-2 border-t border-line mt-2">
            <p className="py-2 text-xs font-bold uppercase tracking-wider text-muted">Book a Service</p>
            <ul className="flex flex-col gap-1">
              {navServices.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/book/${service.id}`}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm font-medium text-ink/80 hover:text-pink-600"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}