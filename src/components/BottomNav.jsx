// src/components/BottomNav.jsx
import { NavLink } from "react-router-dom";
import { Home, Sparkles, BookOpen, Phone, LogIn } from "lucide-react";

const ITEMS = [
  { to: "/", label: "Home", icon: Home, end: true },
  { to: "/#services", label: "Services", icon: Sparkles },
  { to: "/blog", label: "Blog", icon: BookOpen },
  { to: "/contact", label: "Contact", icon: Phone },
  { to: "/login", label: "Account", icon: LogIn },
];

export default function BottomNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/90 backdrop-blur-xl pb-[env(safe-area-inset-bottom)] md:hidden"
      aria-label="Bottom navigation"
    >
      <ul className="flex items-stretch justify-around px-2">
        {ITEMS.map(({ to, label, icon: Icon, end }) => (
          <li key={label} className="flex-1">
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1.5 py-3 text-[10px] font-bold transition-all ${
                  isActive ? "text-brand-600" : "text-slate-400 hover:text-slate-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`grid h-7 w-12 place-items-center rounded-full transition-all duration-300 ${
                      isActive ? "bg-brand-50 text-brand-600" : "bg-transparent"
                    }`}
                  >
                    <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                  </span>
                  {label}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}




// import { NavLink } from "react-router-dom";
// import { Home, Sparkles, BookOpen, Phone, LogIn } from "lucide-react";

// const ITEMS = [
//   { to: "/", label: "Home", icon: Home, end: true },
//   { to: "/#services", label: "Services", icon: Sparkles },
//   { to: "/blog", label: "Blog", icon: BookOpen },
//   { to: "/contact", label: "Contact", icon: Phone },
//   { to: "/login", label: "Account", icon: LogIn  },
// ];

// export default function BottomNav() {
//   return (
//     <nav
//       className="fixed bottom-0 left-0 right-0 z-50 border-t border-line bg-white/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)] md:hidden"
//       aria-label="Bottom navigation"
//     >
//       <ul className="flex items-stretch justify-around">
//         {ITEMS.map(({ to, label, icon: Icon, end }) => (
//           <li key={label} className="flex-1">
//             <NavLink
//               to={to}
//               end={end}
//               className={({ isActive }) =>
//                 `flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium transition-colors ${
//                   isActive ? "text-pink-600" : "text-muted"
//                 }`
//               }
//             >
//               {({ isActive }) => (
//                 <>
//                   <span
//                     className={`grid h-6 w-8 place-items-center rounded-full transition-colors ${
//                       isActive ? "bg-gradient-to-br from-amber-500 to-pink-600" : ""
//                     }`}
//                   >
//                     <Icon size={18} className={isActive ? "text-white" : "text-muted"} />
//                   </span>
//                   {label}
//                 </>
//               )}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }