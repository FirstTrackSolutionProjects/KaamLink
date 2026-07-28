import { Mail, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const SERVICE_LINKS = [
  "Deep Cleaning",
  "Pest Control",
  "AC Repair",
  "Plumbing",
  "Electrical",
];

const COMPANY_LINKS = ["About us", "Careers", "Partner with us", "Blog"];

export default function Footer() {
  return (
    <footer className="relative bg-ink text-ivory/80">
      <div className="h-1 w-full bg-gradient-to-r from-amber-500 to-pink-600" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <p className="text-2xl font-display font-extrabold text-ivory">
            Kaam
            <span className="bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">
              Link
            </span>
          </p>

          <p className="mt-3 text-sm leading-relaxed max-w-xs text-ivory/60">
            Verified home professionals, booked in minutes. Cleaning, repairs
            and more — trusted in every home we visit.
          </p>

          <div className="flex gap-3 mt-5">
            {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
              <a
                key={i}
                href="#top"
                className="h-9 w-9 grid place-items-center rounded-full bg-ivory/10 hover:bg-gradient-to-r hover:from-amber-500 hover:to-pink-600 transition-colors"
                aria-label="Social link"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-ivory mb-4">Services</p>
          <ul className="space-y-2.5 text-sm">
            {SERVICE_LINKS.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  className="hover:text-ivory transition-colors"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ivory mb-4">Company</p>
          <ul className="space-y-2.5 text-sm">
            {COMPANY_LINKS.map((c) => (
              <li key={c}>
                <a href="#top" className="hover:text-ivory transition-colors">
                  {c}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ivory mb-4">
            Get in touch
          </p>

          <ul className="space-y-2.5 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={14} />
              +91 98765 43210
            </li>

            <li className="flex items-center gap-2">
              <Mail size={14} />
              help@kaamlink.in
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10 py-5 text-center text-xs text-ivory/50">
        © {new Date().getFullYear()} KaamLink. All rights reserved.
      </div>
    </footer>
  );
}