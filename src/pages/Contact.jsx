import { useState } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  ChevronDown,
  Send,
  CheckCircle2,
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
    detail: "support@manayata.in",
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
    q: "How do I become a Manayata partner?",
    a: 'Fill out the form on this page with "Partner with us" as the subject, and our onboarding team will reach out within 2 business days.',
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
      <section className="relative overflow-hidden bg-ivory pt-10 pb-4">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-brand-400/20 to-gold-400/20 blur-3xl animate-float" />
        <div
          ref={headerRef}
          className={`reveal ${headerIn ? "in-view" : ""} relative max-w-3xl mx-auto px-6 lg:px-8 pt-10 pb-14 text-center`}
        >
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
            We're here to help
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Get in touch with Manayata
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
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
              className="group rounded-3xl bg-white border border-slate-100 p-6 shadow-sm hover:shadow-soft hover:border-brand-100 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-2xl bg-brand-50 text-brand-600 grid place-items-center mb-5 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                <Icon size={22} />
              </div>
              <p className="font-display font-bold text-slate-900">{title}</p>
              <p className="mt-1.5 text-sm font-semibold text-slate-700">{detail}</p>
              <p className="mt-1 text-xs text-slate-500">{note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + side info */}
      <section className="pb-20 lg:pb-28 bg-white">
        <div
          ref={formRef}
          className={`reveal ${formIn ? "in-view" : ""} max-w-7xl mx-auto px-6 lg:px-8 pt-16 grid lg:grid-cols-5 gap-10`}
        >
          {/* Form */}
          <div className="lg:col-span-3 rounded-[2rem] bg-ivory p-6 sm:p-10 shadow-card border border-slate-100">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
              Send us a message
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Fill in the details below and our team will get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl bg-white border border-slate-200 p-10 text-center shadow-sm">
                <div className="mx-auto h-16 w-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} className="text-green-500" />
                </div>
                <p className="text-xl font-display font-bold text-slate-900">Message sent successfully</p>
                <p className="mt-2 text-sm text-slate-500 max-w-sm mx-auto">
                  Thanks for reaching out! Our support team will review your message and get back to you shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-bold text-brand-600 hover:text-brand-700"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-slate-700 mb-1.5 block">Full name</label>
                    <input
                      type="text"
                      required
                      placeholder="Priya Sharma"
                      className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-50 transition-all placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 mb-1.5 block">Phone number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-50 transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 mb-1.5 block">Email address</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-50 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 mb-1.5 block">Subject</label>
                  <select
                    required
                    defaultValue=""
                    className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-50 transition-all text-slate-700"
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
                  <label className="text-xs font-bold text-slate-700 mb-1.5 block">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we help?"
                    className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-50 transition-all placeholder:text-slate-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full sm:w-auto gap-2 rounded-full bg-brand-600 px-8 py-3.5 text-sm font-bold text-white shadow-md hover:bg-brand-700 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  Send message
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Side info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
              <iframe
                title="Manayata HQ location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.325678217299!2d85.84452907349846!3d20.286782412852265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909ff3be3f2dd%3A0x17413e884c672a69!2sBMC%20Bhawani%20Mall%2C%20BMC%20Bhawani%20Mall%20St%2C%20Saheed%20Nagar%2C%20Bhubaneswar%2C%20Odisha%20751007!5e0!3m2!1sen!2sin!4v1785219566576!5m2!1sen!2sin"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="rounded-3xl bg-white border border-slate-100 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600">
                  <Clock size={16} />
                </div>
                <p className="font-display font-bold text-slate-900">Support hours</p>
              </div>
              <ul className="space-y-3 text-sm">
                {HOURS.map((h) => (
                  <li key={h.day} className="flex justify-between items-center text-slate-500">
                    <span>{h.day}</span>
                    <span className="font-semibold text-slate-900 bg-slate-50 px-2 py-1 rounded-md text-xs">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-white border border-slate-100 p-6 shadow-sm">
              <p className="font-display font-bold text-slate-900 mb-4">Quick answers</p>
              <div className="space-y-3">
                {MINI_FAQS.map((item, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div key={item.q} className="rounded-2xl border border-slate-100 bg-slate-50 overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(isOpen ? -1 : i)}
                        className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="text-sm font-semibold text-slate-800">{item.q}</span>
                        <ChevronDown
                          size={16}
                          className={`shrink-0 text-brand-600 transition-transform duration-300 ${
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
                          <p className="px-4 pb-4 text-xs text-slate-500 leading-relaxed">
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