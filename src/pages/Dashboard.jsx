import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LayoutDashboard, Calendar, MessageSquare, LogOut, Settings, Menu, X, Users, ShieldCheck } from "lucide-react";
import CustomerDashboard from "./CustomerDashboard";
import ProfessionalDashboard from "./ProfessionalDashboard";
import AdminDashboard from "./AdminDashboard";
import OwnerDashboard from "./OwnerDashboard"; // Make sure you create this file!
import { assets } from "../assets/asset";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedToken = localStorage.getItem("accessToken");
    const savedUser = localStorage.getItem("user");

    if (!savedToken || !savedUser) {
      navigate("/login");
      return;
    }

    setToken(savedToken);
    setUser(JSON.parse(savedUser));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) return <div className="p-20 text-center text-ink">Loading Dashboard...</div>;

  // Sidebar links based on role
  const getSidebarLinks = () => {
    if (user.role === "customer") return [{ name: "My Bookings", icon: Calendar, active: true }];
    if (user.role === "professional") return [{ name: "Job Board", icon: LayoutDashboard, active: true }];
    if (user.role === "admin") return [{ name: "Platform Overview", icon: LayoutDashboard, active: true }];
    if (user.role === "owner") return [
      { name: "Owner Overview", icon: LayoutDashboard, active: true },
      { name: "Manage Admins", icon: Users },
      { name: "Platform Settings", icon: Settings }
    ];
    return [];
  };

  return (
    <div className="flex h-screen bg-ivory text-ink overflow-hidden">
      
      {/* MOBILE SIDEBAR OVERLAY */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-ink/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* SIDEBAR */}
      <aside className={`fixed md:static inset-y-0 left-0 z-50 w-64 bg-ink text-ivory flex flex-col transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
        
        {/* Logo */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-ivory/10">
          <Link to="/" className="flex items-center gap-2">
            <img src={assets.logoImg} alt="Logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-display font-extrabold tracking-tight">
              Kaam<span className="bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">Link</span>
            </span>
          </Link>
          <button className="md:hidden text-ivory/70 hover:text-ivory" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* User Info */}
        <div className="px-6 py-6 border-b border-ivory/10">
          <p className="text-xs text-ivory/60 uppercase tracking-wider mb-1">Signed in as</p>
          <p className="font-semibold text-lg truncate">{user.full_name}</p>
          <p className="text-xs text-pink-400 capitalize mt-0.5">{user.role}</p>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 py-6 px-4 space-y-2">
          {getSidebarLinks().map((link, i) => (
            <button key={i} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${link.active ? "bg-white/10 text-white" : "text-ivory/60 hover:text-white hover:bg-white/5"}`}>
              <link.icon size={18} />
              {link.name}
            </button>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-ivory/10 space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-ivory/60 hover:text-ivory transition-colors">
            <Settings size={18} /> Settings
          </button>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:text-red-300 transition-colors">
            <LogOut size={18} /> Log out
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-line flex items-center justify-between px-6 lg:px-8 shrink-0">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-ink" onClick={() => setSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            <h1 className="text-2xl font-display font-bold text-ink capitalize">{user.role} Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-500 to-pink-600 flex items-center justify-center text-white font-bold shadow-card">
              {user.full_name.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        {/* Dynamic Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-8">
          {user.role === "customer" && <CustomerDashboard token={token} />}
          {user.role === "professional" && <ProfessionalDashboard token={token} />}
          {user.role === "admin" && <AdminDashboard token={token} />}
          {user.role === "owner" && <OwnerDashboard token={token} />}
        </div>
      </main>
      
    </div>
  );
}