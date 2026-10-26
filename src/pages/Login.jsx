import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, ShieldCheck, Star, ArrowRight } from "lucide-react";

function GoogleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...props}>
      <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.24 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.2s2.7-6.2 6-6.2c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.2 14.6 2.2 12 2.2 6.9 2.2 2.8 6.4 2.8 11.5S6.9 20.8 12 20.8c6.9 0 8.9-4.8 8.9-7.3 0-.5-.1-.9-.1-1.3H12z"/>
    </svg>
  );
}

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook up real authentication here later
  };

  return (
    <section className="min-h-[calc(100vh-4rem)] py-8 lg:py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white rounded-[2.5rem] shadow-soft border border-slate-100 overflow-hidden">
          
          {/* LEFT SIDE: Branding & Benefits (Desktop only) */}
          <div className="hidden lg:flex flex-col justify-between relative bg-slate-900 p-12 h-full min-h-[600px] overflow-hidden">
            {/* Ambient Glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/15 rounded-full blur-[80px]" />

            <div className="relative z-10">
              <Link to="/" className="inline-flex items-center gap-2 text-2xl font-display font-extrabold tracking-tight text-white">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-gold-500 text-white text-base font-black shadow-lift">
                  M
                </span>
                Mana<span className="text-brand-400">yata</span><span className="text-gold-400">.</span>
              </Link>

              <h2 className="mt-12 text-3xl font-extrabold text-white leading-tight">
                Welcome back to <br /> premium home services.
              </h2>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-sm">
                Log in to manage your bookings, track professionals, and unlock exclusive member-only offers.
              </p>
            </div>

            <div className="relative z-10 space-y-4 mt-12">
              <div className="flex items-center gap-3 text-sm font-medium text-slate-300 bg-white/5 border border-white/10 p-3 rounded-2xl backdrop-blur-sm">
                <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  <ShieldCheck size={16} />
                </div>
                100% Background Verified Professionals
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-slate-300 bg-white/5 border border-white/10 p-3 rounded-2xl backdrop-blur-sm">
                <div className="h-8 w-8 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400">
                  <Star size={16} className="fill-gold-400" />
                </div>
                4.8/5 Average Rating from 50k+ Homes
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Login Form */}
          <div className="p-8 sm:p-12 lg:p-16">
            {/* Mobile Logo */}
            <Link to="/" className="lg:hidden flex items-center justify-center gap-2 text-2xl font-display font-extrabold tracking-tight mb-8">
              <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-gradient-to-br from-brand-500 to-gold-500 text-white text-sm font-black">
                M
              </span>
              <span className="text-slate-900">
                Mana<span className="text-brand-600">yata</span><span className="text-gold-500">.</span>
              </span>
            </Link>

            <div className="text-center lg:text-left mb-8">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Log in
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Welcome back! Please enter your details.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-xs font-bold text-slate-700 mb-1.5 block">Email address</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl bg-slate-50 border border-slate-200 pl-11 pr-4 py-3.5 text-sm outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-50 focus:bg-white transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 mb-1.5 block">Password</label>
                <div className="relative">
                  <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    className="w-full rounded-xl bg-slate-50 border border-slate-200 pl-11 pr-11 py-3.5 text-sm outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-50 focus:bg-white transition-all placeholder:text-slate-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand-600 transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-600 font-medium cursor-pointer">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 accent-brand-600" />
                  Remember me
                </label>
                <Link to="/login" className="font-bold text-brand-600 hover:text-brand-700 transition-colors">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-brand-600 py-3.5 text-sm font-bold text-white shadow-md hover:bg-brand-700 hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
              >
                Log in
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="flex items-center gap-3 my-6">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Or continue with</span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <div className="grid grid-cols-1 gap-3">
              <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3.5 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
                <GoogleIcon /> Google
              </button>
            </div>

            <p className="mt-8 text-center text-sm text-slate-500">
              Don't have an account?{" "}
              <Link to="/signup" className="font-bold text-brand-600 hover:text-brand-700 transition-colors">
                Sign up
              </Link>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}