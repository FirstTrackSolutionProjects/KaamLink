import { ShieldCheck, Search, ArrowRight, Sparkles, Star, CheckCircle2, MapPin } from "lucide-react";
import useReveal from "../hooks/useReveal";

export default function Hero() {
  const [ref, inView] = useReveal();

  return (
    <section className="relative overflow-hidden bg-ivory py-16 lg:py-24">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-400/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute top-40 right-0 w-[30rem] h-[30rem] bg-gold-400/15 rounded-full blur-[100px] animate-float [animation-delay:2s]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: Text & Search */}
        <div ref={ref} className={`reveal ${inView ? "in-view" : ""}`}>
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-line shadow-sm text-xs font-semibold text-slate-700 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            Trusted by 50,000+ Indian homes
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-extrabold leading-[1.1] tracking-tight text-slate-900">
            Home services, <br />
            <span className="text-brand-600">done right</span> <br />
            at your door.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed">
            Deep cleaning, pest control, repairs and 8 more services. Pick a slot, 
            get a background-verified pro, and pay only after the job's done.
          </p>

          {/* Search Bar (Pincode) */}
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md">
            <div className="relative flex-1">
              <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Enter your pincode"
                className="w-full rounded-full bg-white pl-11 pr-4 py-3.5 text-sm shadow-card border border-line focus:border-brand-500 outline-none placeholder:text-slate-400 transition-all"
              />
            </div>
            <button
              type="submit"
              className="group rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lift hover:bg-brand-700 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Check availability
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Micro-features */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-brand-500"/> Background verified</span>
            <span className="flex items-center gap-1.5"><Star size={16} className="text-gold-500 fill-gold-500"/> 4.8/5 average rating</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-green-500"/> 7-day warranty</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Premium 3D UI Mockup */}
        <div className="relative lg:h-[550px] flex items-center justify-center lg:justify-end mt-10 lg:mt-0">
          
          {/* Decorative Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-tr from-brand-500 to-gold-400 rounded-full blur-[80px] opacity-20 animate-pulse" />
          
          {/* Main Card */}
          <div className="relative w-full max-w-[380px] bg-white/80 backdrop-blur-2xl border border-white/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-[2rem] p-6 z-10 rotate-[-2deg] hover:rotate-0 hover:scale-[1.02] transition-all duration-500">
            
            {/* Top Bar (Live tracking) */}
            <div className="flex items-center justify-between pb-5 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
                  <Sparkles size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Deep Cleaning</p>
                  <p className="text-[11px] font-semibold text-green-600 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-ping"></span> Pro is on the way
                  </p>
                </div>
              </div>
              <div className="bg-slate-100 px-2.5 py-1 rounded-md text-[10px] font-bold text-slate-500">
                #BK-892
              </div>
            </div>

            {/* Pro Details */}
            <div className="py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="https://i.pravatar.cc/100?img=11" alt="Pro" className="h-12 w-12 rounded-full border-2 border-white shadow-sm" />
                <div>
                  <p className="text-sm font-bold text-slate-900">Ramesh K.</p>
                  <div className="flex items-center gap-1 text-[11px] font-medium text-slate-500">
                    <Star size={12} className="text-gold-500 fill-gold-500" /> 4.9 (1.2k jobs)
                  </div>
                </div>
              </div>
              <div className="h-8 w-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 border border-green-100">
                <CheckCircle2 size={16} />
              </div>
            </div>

            {/* Price & Timeline */}
            <div className="bg-slate-50 rounded-2xl p-4 mb-5">
              <div className="flex justify-between items-end mb-4">
                <span className="text-xs font-semibold text-slate-500">Total Amount</span>
                <span className="text-2xl font-extrabold text-slate-900">₹499</span>
              </div>
              <div className="space-y-3 relative before:absolute before:inset-0 before:ml-1.5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-500 before:to-slate-200">
                <div className="relative flex items-center gap-3">
                  <div className="h-3.5 w-3.5 rounded-full bg-brand-500 border-2 border-white z-10" />
                  <p className="text-xs font-medium text-slate-600">Booking Confirmed</p>
                </div>
                <div className="relative flex items-center gap-3">
                  <div className="h-3.5 w-3.5 rounded-full bg-brand-500 border-2 border-white z-10" />
                  <p className="text-xs font-medium text-slate-600">Pro Assigned</p>
                </div>
                <div className="relative flex items-center gap-3">
                  <div className="h-3.5 w-3.5 rounded-full bg-white border-2 border-brand-500 z-10 shadow-[0_0_0_3px_rgba(79,70,229,0.2)]" />
                  <p className="text-xs font-bold text-brand-600">Service in Progress</p>
                </div>
              </div>
            </div>

            <button className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors">
              Track Professional
            </button>
          </div>

          {/* Floating Discount Tag (Decorative) */}
          <div className="absolute top-10 -right-4 bg-white p-3 rounded-2xl shadow-xl border border-line rotate-6 animate-float z-20 hidden md:block">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Use Code</p>
            <p className="text-sm font-extrabold text-brand-600 bg-brand-50 px-2 py-1 rounded">FIRST50</p>
          </div>

          {/* Floating Trust Badge (Decorative) */}
          <div className="absolute bottom-12 -left-6 bg-white p-3 rounded-2xl shadow-xl border border-line -rotate-3 animate-float [animation-delay:1s] z-20 hidden md:flex items-center gap-3">
            <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">100% Secure</p>
              <p className="text-[10px] text-slate-500">Verified Pros</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}