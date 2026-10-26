import { Link } from "react-router-dom";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const SERVICE_LINKS = [
  "Deep Cleaning",
  "Pest Control",
  "AC Repair",
  "Plumbing",
  "Electrical",
];

const COMPANY_LINKS = [
  { label: "About Us", to: "/about" },
  { label: "Careers", to: "/contact" },
  { label: "Partner with us", to: "/contact" },
  { label: "Blog", to: "/blog" },
];

const QUICK_LINKS = [
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Refund & Cancellation", to: "/refund" },
  { label: "Data Security", to: "/data" },
];

const SOCIALS = [
  { Icon: FaFacebookF, href: "#top", label: "Facebook" },
  { Icon: FaInstagram, href: "#top", label: "Instagram" },
  { Icon: FaTwitter,   href: "#top", label: "Twitter"  },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink text-ivory/80 overflow-hidden">
      {/* Top hairline — visible on dark bg */}
      <div className="h-px w-full bg-white/10" />

      {/* Soft ambient glow (optional, matches Hero blobs) */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-32 h-72 w-72 rounded-full bg-coral-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-14 grid grid-cols-2 md:grid-cols-6 gap-10">
        {/* Brand column */}
        <div className="col-span-2">
        <p className="text-2xl font-display font-extrabold text-ivory">
  Mana<span className="gradient-text">yata</span>
</p>

          <p className="mt-3 text-sm leading-relaxed max-w-xs text-ivory/60">
            Verified home professionals, booked in minutes. Cleaning, repairs
            and more — trusted in every home we visit.
          </p>

          {/* Socials */}
          <div className="flex gap-3 mt-5">
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="h-9 w-9 grid place-items-center rounded-full bg-white/5 border border-white/10 text-ivory/70 hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-colors"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <p className="text-sm font-semibold text-ivory mb-4">Service</p>
          <ul className="space-y-2.5 text-sm">
            {SERVICE_LINKS.map((s) => (
              <li key={s}>
                <a href="/#services" className="text-ivory/60 hover:text-ivory transition-colors">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="text-sm font-semibold text-ivory mb-4">Company</p>
          <ul className="space-y-2.5 text-sm">
            {COMPANY_LINKS.map((c) => (
              <li key={c.label}>
                <Link to={c.to} className="text-ivory/60 hover:text-ivory transition-colors">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-sm font-semibold text-ivory mb-4">Quick Links</p>
          <ul className="space-y-2.5 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-ivory/60 hover:text-ivory transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-sm font-semibold text-ivory mb-4">Get in touch</p>
          <ul className="space-y-2.5 text-sm text-ivory/60">
            <li>
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-ivory transition-colors">
                <Phone size={14} className="text-brand-400" />
                +91 98765 43210
              </a>
            </li>
            <li>
              <a href="mailto:info@kaamlink.in" className="flex items-center gap-2 hover:text-ivory transition-colors">
                <Mail size={14} className="text-brand-400" />
                info@manayata.in
              </a>
            </li>
            <li>
              <Link to="/contact" className="mt-1 inline-flex items-center gap-1 text-brand-400 hover:text-coral-400 transition-colors font-medium">
                Book a service <ArrowUpRight size={14} />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-5 text-center text-xs text-ivory/50">
        © {new Date().getFullYear()} Manayata. All rights reserved.
      </div>
    </footer>
  );
}


