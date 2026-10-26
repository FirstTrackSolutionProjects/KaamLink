// src/components/Navbar.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, LogIn, UserPlus, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/", isRoute: true },
  { label: "Services", href: "/#services" },
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
    const onScroll = () => setScrolled(window.scrollY > 20);
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

  // Clean, professional hover effect
  const linkClasses =
    "px-4 py-2 rounded-full text-slate-600 font-semibold text-sm hover:text-brand-600 hover:bg-brand-50 transition-all duration-300";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all duration-300 pointer-events-none">
      
      {/* Premium Light Frosted Glass Navbar */}
      <nav
        className={`pointer-events-auto max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16 rounded-full border transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            : "bg-white/60 backdrop-blur-md border-slate-200/60 shadow-sm"
        }`}
      >
        
        {/* ---- Logo + wordmark ---- */}
        <Link to="/" className="flex items-center gap-2 text-xl font-display font-extrabold tracking-tight group">
          {/* The 'M' Icon */}
          <span className="grid h-9 w-9 place-items-center rounded-[14px] bg-gradient-to-br from-brand-500 to-gold-500 text-white text-base font-black shadow-md group-hover:scale-105 transition-transform duration-300">
            M
          </span>
          
          {/* The Text */}
          <span className="text-slate-900 text-[1.15rem] tracking-tight">
            Mana<span className="text-brand-600">yata</span>
            <span className="text-gold-500">.</span>
          </span>
        </Link>

        {/* ---- Desktop nav links ---- */}
        <ul className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
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

        {/* ---- Desktop right actions ---- */}
        <div className="hidden md:flex items-center gap-3">
          
          {/* Account icon + dropdown */}
          <div className="relative" ref={accountRef}>
            <button
              onClick={() => setAccountOpen((v) => !v)}
              className={`grid h-10 w-10 place-items-center rounded-full border transition-all duration-300 ${
                accountOpen
                  ? "bg-brand-50 border-brand-200 text-brand-600 ring-4 ring-brand-50"
                  : "bg-white border-slate-200 text-slate-600 hover:border-brand-200 hover:text-brand-600 hover:bg-brand-50"
              }`}
              aria-label="Account menu"
              aria-expanded={accountOpen}
            >
              <User size={18} />
            </button>

            {/* Dropdown */}
            <div
              className={`absolute right-0 mt-4 w-60 origin-top-right rounded-2xl bg-white p-2 shadow-xl border border-slate-100 transition-all duration-300 ${
                accountOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="px-3 py-2 border-b border-slate-100 mb-1">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Account</p>
              </div>
              <Link
                to="/login"
                onClick={() => setAccountOpen(false)}
                className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-600 transition-colors"
              >
                <span className="flex items-center gap-2.5">
                  <LogIn size={16} className="text-slate-400 group-hover:text-brand-600 transition-colors" />
                  Log in
                </span>
                <ArrowRight size={14} className="text-brand-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
              <Link
                to="/signup"
                onClick={() => setAccountOpen(false)}
                className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-600 transition-colors"
              >
                <span className="flex items-center gap-2.5">
                  <UserPlus size={16} className="text-slate-400 group-hover:text-brand-600 transition-colors" />
                  Create Account
                </span>
                <ArrowRight size={14} className="text-brand-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            </div>
          </div>

          <Link
            to="/login"
            className="text-sm font-bold text-slate-700 hover:text-brand-600 transition-colors px-2"
          >
            Log in
          </Link>

          {/* Solid Brand Button for Light Theme */}
          <a
            href="/#services"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-2.5 text-sm font-bold text-white shadow-[0_4px_14px_rgba(79,70,229,0.3)] hover:bg-brand-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Book a Service
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* ---- Mobile menu toggle ---- */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-full text-slate-700 bg-white border border-slate-200 hover:bg-brand-50 hover:text-brand-600 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* ---- Mobile drawer (Light Style) ---- */}
      <div
        className={`pointer-events-auto md:hidden absolute top-[5.5rem] left-4 right-4 overflow-hidden transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-xl ${
          open ? "max-h-[30rem] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
        }`}
      >
        <ul className="flex flex-col gap-1 p-4">
          {NAV_LINKS.map((link) =>
            link.isRoute ? (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-xl text-slate-700 font-semibold hover:bg-brand-50 hover:text-brand-600 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ) : (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-xl text-slate-700 font-semibold hover:bg-brand-50 hover:text-brand-600 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            )
          )}

          <div className="h-px bg-slate-100 my-2 mx-4" />

          <li>
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 font-semibold hover:bg-brand-50 hover:text-brand-600 transition-colors"
            >
              <LogIn size={18} className="text-slate-400" />
              Log in
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 font-semibold hover:bg-brand-50 hover:text-brand-600 transition-colors"
            >
              <UserPlus size={18} className="text-slate-400" />
              Create Account
            </Link>
          </li>
          <li className="pt-2">
            <a
              href="/#services"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3.5 text-sm font-bold text-white shadow-md hover:bg-brand-700 transition-all"
            >
              Book a Service
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}



// // src/components/Navbar.jsx
// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X, User, LogIn, UserPlus, ArrowRight } from "lucide-react";

// const NAV_LINKS = [
//   { label: "Home", href: "/", isRoute: true },
//   { label: "Services", href: "/#services" },
//   { label: "About", href: "/about", isRoute: true },
//   { label: "Blog", href: "/blog", isRoute: true },
//   { label: "Contact", href: "/contact", isRoute: true },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [accountOpen, setAccountOpen] = useState(false);
//   const accountRef = useRef(null);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     const onClick = (e) => {
//       if (accountRef.current && !accountRef.current.contains(e.target)) {
//         setAccountOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", onClick);
//     return () => document.removeEventListener("mousedown", onClick);
//   }, []);

//   // Premium hover effect for menu links
//   const linkClasses =
//     "px-4 py-2 rounded-full text-slate-600 font-semibold text-sm hover:text-brand-600 hover:bg-brand-50 hover:shadow-sm transition-all duration-300";

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all duration-300 pointer-events-none">
      
//       {/* Premium Glass Navbar Container */}
//       <nav
//         className={`pointer-events-auto max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16 rounded-full border transition-all duration-500 ${
//           scrolled
//             ? "bg-white/80 backdrop-blur-2xl border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
//             : "bg-gradient-to-r from-white/90 via-brand-50/50 to-white/90 backdrop-blur-xl border-slate-200/50 shadow-sm"
//         }`}
//       >
        
//         {/* ---- Logo + wordmark ---- */}
//         <Link to="/" className="flex items-center gap-2 text-xl font-display font-extrabold tracking-tight group">
//           {/* The 'M' Icon */}
//           <span className="grid h-9 w-9 place-items-center rounded-[14px] bg-gradient-to-br from-brand-500 to-gold-500 text-white text-base font-black shadow-lift group-hover:scale-105 transition-transform duration-300">
//             M
//           </span>
          
//           {/* The Text */}
//           <span className="text-slate-900 text-[1.15rem] tracking-tight">
//             Mana<span className="text-brand-600">yata</span>
//             <span className="text-gold-500">.</span>
//           </span>
//         </Link>

//         {/* ---- Desktop nav links (Pill style) ---- */}
//         <ul className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 p-1 bg-slate-100/50 rounded-full border border-slate-200/50">
//           {NAV_LINKS.map((link) =>
//             link.isRoute ? (
//               <li key={link.href}>
//                 <Link to={link.href} className={linkClasses}>
//                   {link.label}
//                 </Link>
//               </li>
//             ) : (
//               <li key={link.href}>
//                 <a href={link.href} className={linkClasses}>
//                   {link.label}
//                 </a>
//               </li>
//             )
//           )}
//         </ul>

//         {/* ---- Desktop right actions ---- */}
//         <div className="hidden md:flex items-center gap-3">
          
//           {/* Account icon + dropdown */}
//           <div className="relative" ref={accountRef}>
//             <button
//               onClick={() => setAccountOpen((v) => !v)}
//               className={`grid h-10 w-10 place-items-center rounded-full border transition-all duration-300 ${
//                 accountOpen
//                   ? "bg-brand-50 border-brand-200 text-brand-600 ring-4 ring-brand-50"
//                   : "bg-white/50 border-slate-200 text-slate-600 hover:border-brand-200 hover:text-brand-600 hover:bg-brand-50"
//               }`}
//               aria-label="Account menu"
//               aria-expanded={accountOpen}
//             >
//               <User size={18} />
//             </button>

//             {/* Dropdown */}
//             <div
//               className={`absolute right-0 mt-4 w-60 origin-top-right rounded-2xl bg-white p-2 shadow-xl border border-slate-100 transition-all duration-300 ${
//                 accountOpen
//                   ? "opacity-100 scale-100 translate-y-0"
//                   : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
//               }`}
//             >
//               <div className="px-3 py-2 border-b border-slate-100 mb-1">
//                 <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Account</p>
//               </div>
//               <Link
//                 to="/login"
//                 onClick={() => setAccountOpen(false)}
//                 className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-600 transition-colors"
//               >
//                 <span className="flex items-center gap-2.5">
//                   <LogIn size={16} className="text-slate-400 group-hover:text-brand-600 transition-colors" />
//                   Log in
//                 </span>
//                 <ArrowRight size={14} className="text-brand-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
//               </Link>
//               <Link
//                 to="/signup"
//                 onClick={() => setAccountOpen(false)}
//                 className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-600 transition-colors"
//               >
//                 <span className="flex items-center gap-2.5">
//                   <UserPlus size={16} className="text-slate-400 group-hover:text-brand-600 transition-colors" />
//                   Create Account
//                 </span>
//                 <ArrowRight size={14} className="text-brand-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
//               </Link>
//             </div>
//           </div>

//           <Link
//             to="/login"
//             className="text-sm font-bold text-slate-700 hover:text-brand-600 transition-colors px-2"
//           >
//             Log in
//           </Link>

//           <a
//             href="/#services"
//             className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-2.5 text-sm font-bold text-white shadow-[0_4px_14px_rgba(79,70,229,0.3)] hover:shadow-lift hover:-translate-y-0.5 transition-all duration-300"
//           >
//             Book a Service
//             <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
//           </a>
//         </div>

//         {/* ---- Mobile menu toggle ---- */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden p-2 rounded-full text-slate-700 bg-white/50 border border-slate-200 hover:bg-brand-50 hover:text-brand-600 transition-colors"
//           aria-label="Toggle menu"
//           aria-expanded={open}
//         >
//           {open ? <X size={20} /> : <Menu size={20} />}
//         </button>
//       </nav>

//       {/* ---- Mobile drawer ---- */}
//       <div
//         className={`pointer-events-auto md:hidden absolute top-[5.5rem] left-4 right-4 overflow-hidden transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-2xl border border-slate-200 rounded-3xl shadow-xl ${
//           open ? "max-h-[30rem] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
//         }`}
//       >
//         <ul className="flex flex-col gap-1 p-4">
//           {NAV_LINKS.map((link) =>
//             link.isRoute ? (
//               <li key={link.href}>
//                 <Link
//                   to={link.href}
//                   onClick={() => setOpen(false)}
//                   className="block px-4 py-3 rounded-xl text-slate-700 font-semibold hover:bg-brand-50 hover:text-brand-600 transition-colors"
//                 >
//                   {link.label}
//                 </Link>
//               </li>
//             ) : (
//               <li key={link.href}>
//                 <a
//                   href={link.href}
//                   onClick={() => setOpen(false)}
//                   className="block px-4 py-3 rounded-xl text-slate-700 font-semibold hover:bg-brand-50 hover:text-brand-600 transition-colors"
//                 >
//                   {link.label}
//                 </a>
//               </li>
//             )
//           )}

//           <div className="h-px bg-slate-100 my-2 mx-4" />

//           <li>
//             <Link
//               to="/login"
//               onClick={() => setOpen(false)}
//               className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 font-semibold hover:bg-brand-50 hover:text-brand-600 transition-colors"
//             >
//               <LogIn size={18} className="text-slate-400" />
//               Log in
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/signup"
//               onClick={() => setOpen(false)}
//               className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 font-semibold hover:bg-brand-50 hover:text-brand-600 transition-colors"
//             >
//               <UserPlus size={18} className="text-slate-400" />
//               Create Account
//             </Link>
//           </li>
//           <li className="pt-2">
//             <a
//               href="/#services"
//               onClick={() => setOpen(false)}
//               className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-3.5 text-sm font-bold text-white shadow-md hover:shadow-lift transition-all"
//             >
//               Book a Service
//             </a>
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// }

