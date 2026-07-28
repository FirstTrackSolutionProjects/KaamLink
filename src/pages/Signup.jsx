import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";

function GoogleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...props}>
      <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.24 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.2s2.7-6.2 6-6.2c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.2 14.6 2.2 12 2.2 6.9 2.2 2.8 6.4 2.8 11.5S6.9 20.8 12 20.8c6.9 0 8.9-4.8 8.9-7.3 0-.5-.1-.9-.1-1.3H12z"/>
    </svg>
  );
}
function AppleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M16.4 1.3c.1 1-.3 2-1 2.8-.7.8-1.8 1.4-2.8 1.3-.1-1 .4-2 1-2.7.7-.8 1.9-1.4 2.8-1.4Zm2.9 16.3c-.5 1.1-.7 1.6-1.4 2.6-.9 1.4-2.2 3.1-3.8 3.1-1.4 0-1.8-.9-3.7-.9-1.9 0-2.4.9-3.7.9-1.6 0-2.8-1.5-3.7-2.9C.6 17.6-.4 13 1 9.9c.7-1.6 2-2.6 3.4-2.6 1.4 0 2.3.9 3.6.9 1.2 0 1.9-.9 3.6-.9 1.3 0 2.6.7 3.5 1.9-3.1 1.7-2.6 6.1.2 7.4Z"/>
    </svg>
  );
}

function getStrength(password) {
  if (!password) return 0;
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return score; // 0-4
}

const STRENGTH_LABELS = ["Too short", "Weak", "Fair", "Good", "Strong"];
const STRENGTH_COLORS = ["bg-line", "bg-red-400", "bg-amber-500", "bg-amber-500", "bg-green-500"];

export default function Signup() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const strength = useMemo(() => getStrength(password), [password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook up real account creation here later
  };

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-pink-300/20 to-amber-200/30 blur-3xl animate-blob-float" />

      <div className="relative max-w-md mx-auto px-6">
        <Link to="/" className="block text-center text-2xl font-display font-extrabold tracking-tight mb-8">
          Kaam
          <span className="bg-gradient-to-r from-amber-500 to-pink-600 bg-clip-text text-transparent">
            Link
          </span>
        </Link>

        <div className="rounded-[2rem] bg-white p-8 sm:p-10 shadow-card">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center">
            Create your account
          </h1>
          <p className="mt-1.5 text-sm text-muted text-center">
            Book trusted home services in a few taps.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label className="text-xs font-semibold text-ink/70">Full name</label>
              <div className="relative mt-1.5">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  type="text"
                  required
                  placeholder="Priya Sharma"
                  className="w-full rounded-xl bg-ivory border border-line pl-10 pr-4 py-3 text-sm outline-none focus:border-pink-400 placeholder:text-muted/60"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-ink/70">Email address</label>
              <div className="relative mt-1.5">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl bg-ivory border border-line pl-10 pr-4 py-3 text-sm outline-none focus:border-pink-400 placeholder:text-muted/60"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-ink/70">Phone number</label>
              <div className="relative mt-1.5">
                <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  className="w-full rounded-xl bg-ivory border border-line pl-10 pr-4 py-3 text-sm outline-none focus:border-pink-400 placeholder:text-muted/60"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-ink/70">Password</label>
              <div className="relative mt-1.5">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  className="w-full rounded-xl bg-ivory border border-line pl-10 pr-11 py-3 text-sm outline-none focus:border-pink-400 placeholder:text-muted/60"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-ink"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {password && (
                <div className="mt-2">
                  <div className="flex gap-1.5">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 flex-1 rounded-full ${
                          i < strength ? STRENGTH_COLORS[strength] : "bg-line"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-xs text-muted">{STRENGTH_LABELS[strength]}</p>
                </div>
              )}
            </div>

            <div>
              <label className="text-xs font-semibold text-ink/70">Confirm password</label>
              <div className="relative mt-1.5">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  type={showConfirm ? "text" : "password"}
                  required
                  placeholder="Re-enter your password"
                  className="w-full rounded-xl bg-ivory border border-line pl-10 pr-11 py-3 text-sm outline-none focus:border-pink-400 placeholder:text-muted/60"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-ink"
                  aria-label={showConfirm ? "Hide password" : "Show password"}
                >
                  {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <label className="flex items-start gap-2.5 text-xs text-muted">
              <input
                type="checkbox"
                required
                className="mt-0.5 h-4 w-4 rounded border-line accent-pink-600"
              />
              I agree to the{" "}
              <span className="text-pink-600 font-medium">Terms of Service</span> and{" "}
              <span className="text-pink-600 font-medium">Privacy Policy</span>.
            </label>

            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-amber-500 to-pink-600 py-3.5 text-sm font-semibold text-white shadow-card hover:shadow-soft hover:-translate-y-0.5 transition-all"
            >
              Create account
            </button>
          </form>

          <div className="flex items-center gap-3 my-6">
            <div className="h-px flex-1 bg-line" />
            <span className="text-xs text-muted">or continue with</span>
            <div className="h-px flex-1 bg-line" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 rounded-xl border border-line py-3 text-sm font-medium hover:bg-ivory transition-colors">
              <GoogleIcon /> Google
            </button>
            
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-muted">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-pink-600 hover:text-amber-600 transition-colors">
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
}