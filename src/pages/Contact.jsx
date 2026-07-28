import { useState } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  ChevronDown,
  Send,
} from "lucide-react";
import useReveal from "../hooks/useReveal";

const METHODS = [
  {
    icon: Phone,
    title: "Call us",
    detail: "+91 1800-123-4567",
    note: "Mon–Sun, 7am–11pm",
  },
  {
    icon: Mail,
    title: "Email us",
    detail: "support@kaamlink.in",
    note: "We reply within 24 hours",
  },
  {
    icon: MessageCircle,
    title: "Live chat",
    detail: "Chat in the app",
    note: "Fastest response, 9am–9pm",
  },
  {
    icon: MapPin,
    title: "Visit us",
    detail: "HSR Layout, Bengaluru",
    note: "By appointment only",
  },
];

const HOURS = [
  { day: "Monday – Friday", time: "7:00 AM – 11:00 PM" },
  { day: "Saturday – Sunday", time: "8:00 AM – 10:00 PM" },
];

const MINI_FAQS = [
  {
    q: "Do you operate in my city?",
    a: "We're currently live in Bengaluru, Mumbai, Delhi NCR, Pune, Hyderabad, Chennai, Kolkata and Ahmedabad, with new cities added regularly.",
  },
  {
    q: "How do I become a KaamLink partner?",
    a: "Fill out the form on this page with \"Partner with us\" as the subject, and our onboarding team will reach out within 2 business days.",
  },
  {
    q: "What if I'm not satisfied with a service?",
    a: "Every booking includes a 7-day warranty — contact support and we'll send a professional back at no extra cost.",
  },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [headerRef, headerIn] = useReveal();
  const [methodsRef, methodsIn] = useReveal();
  const [formRef, formIn] = useReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-amber-300/40 to-pink-400/30 blur-3xl animate-blob-float" />
        <div
          ref={headerRef}
          className={`reveal ${headerIn ? "in-view" : ""} relative max-w-3xl mx-auto px-6 lg:px-8 pt-16 pb-14 lg:pt-24 text-center`}
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-pink-600">
            We're here to help
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight">
            Get in touch with KaamLink
          </h1>
          <p className="mt-4 text-muted">
            Questions about a booking, interested in partnering with us, or
            just want to say hello — reach us any way that works for you.
          </p>
        </div>
      </section>

      {/* Contact methods */}
      <section className="pb-16 lg:pb-20">
        <div
          ref={methodsRef}
          className={`reveal ${methodsIn ? "in-view" : ""} max-w-7xl mx-auto px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6`}
        >
          {METHODS.map(({ icon: Icon, title, detail, note }) => (
            <div
              key={title}
              className="rounded-3xl bg-white p-6 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all"
            >
              <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-amber-500 to-pink-600 grid place-items-center mb-4">
                <Icon size={20} className="text-white" />
              </div>
              <p className="font-display font-bold">{title}</p>
              <p className="mt-1 text-sm font-semibold text-ink">{detail}</p>
              <p className="mt-0.5 text-xs text-muted">{note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + side info */}
      <section className="pb-20 lg:pb-28 bg-white">
        <div
          ref={formRef}
          className={`reveal ${formIn ? "in-view" : ""} max-w-7xl mx-auto px-6 lg:px-8 pt-20 grid lg:grid-cols-5 gap-10`}
        >
          {/* Form */}
          <div className="lg:col-span-3 rounded-[2rem] bg-ivory p-6 sm:p-8 shadow-card">
            <h2 className="text-2xl font-extrabold tracking-tight">Send us a message</h2>
            <p className="mt-1.5 text-sm text-muted">
              Fill in the details below and our team will get back to you.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl bg-white border border-line p-8 text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-gradient-to-br from-amber-500 to-pink-600 grid place-items-center">
                  <Send size={20} className="text-white" />
                </div>
                <p className="mt-4 font-display font-bold">Message sent</p>
                <p className="mt-1 text-sm text-muted">
                  Thanks for reaching out — we'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-ink/70">Full name</label>
                    <input
                      type="text"
                      required
                      placeholder="Priya Sharma"
                      className="mt-1.5 w-full rounded-xl bg-white border border-line px-4 py-3 text-sm outline-none focus:border-pink-400 placeholder:text-muted/60"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-ink/70">Phone number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="mt-1.5 w-full rounded-xl bg-white border border-line px-4 py-3 text-sm outline-none focus:border-pink-400 placeholder:text-muted/60"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-ink/70">Email address</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="mt-1.5 w-full rounded-xl bg-white border border-line px-4 py-3 text-sm outline-none focus:border-pink-400 placeholder:text-muted/60"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-ink/70">Subject</label>
                  <select
                    required
                    defaultValue=""
                    className="mt-1.5 w-full rounded-xl bg-white border border-line px-4 py-3 text-sm outline-none focus:border-pink-400"
                  >
                    <option value="" disabled>
                      Select a topic
                    </option>
                    <option>General inquiry</option>
                    <option>Booking support</option>
                    <option>Partner with us</option>
                    <option>Feedback</option>
                    <option>Press & media</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-ink/70">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we help?"
                    className="mt-1.5 w-full rounded-xl bg-white border border-line px-4 py-3 text-sm outline-none focus:border-pink-400 placeholder:text-muted/60 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-pink-600 px-6 py-3.5 text-sm font-semibold text-white shadow-card hover:shadow-soft hover:-translate-y-0.5 transition-all"
                >
                  Send message
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>

          {/* Side info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-3xl overflow-hidden border border-line">
              <iframe
                title="KaamLink HQ location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.325678217299!2d85.84452907349846!3d20.286782412852265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909ff3be3f2dd%3A0x17413e884c672a69!2sBMC%20Bhawani%20Mall%2C%20BMC%20Bhawani%20Mall%20St%2C%20Saheed%20Nagar%2C%20Bhubaneswar%2C%20Odisha%20751007!5e0!3m2!1sen!2sin!4v1785219566576!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            <div className="rounded-3xl bg-ivory p-6 shadow-card">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} className="text-pink-600" />
                <p className="font-display font-bold text-sm">Support hours</p>
              </div>
              <ul className="space-y-2 text-sm">
                {HOURS.map((h) => (
                  <li key={h.day} className="flex justify-between text-muted">
                    <span>{h.day}</span>
                    <span className="font-medium text-ink">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-ivory p-6 shadow-card">
              <p className="font-display font-bold text-sm mb-4">Quick answers</p>
              <div className="space-y-2">
                {MINI_FAQS.map((item, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div key={item.q} className="rounded-xl border border-line bg-white overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(isOpen ? -1 : i)}
                        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="text-sm font-semibold">{item.q}</span>
                        <ChevronDown
                          size={15}
                          className={`shrink-0 text-pink-600 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-4 pb-3 text-xs text-muted leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}