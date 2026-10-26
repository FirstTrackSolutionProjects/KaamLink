import { useEffect, useRef, useState } from "react";
import { X, Send, Star, Phone, Copy, Check, RotateCcw } from "lucide-react";

const BOT_DELAY = 600;
const TYPING_DELAY = 900;

const OPTIONS = {
  "Booking Issue": {
    icon: "📅",
    options: [
      "Where is my professional?",
      "Booking not confirmed",
      "Need to reschedule",
      "Professional didn't show up",
    ],
    replies: {
      "Where is my professional?":
        "You can track your professional's arrival from 'My Bookings'. We also send an SMS with their live location and estimated arrival time.",
      "Booking not confirmed":
        "If your booking shows as pending for over 15 minutes, we're likely still matching you with an available professional nearby. You'll get a confirmation shortly.",
      "Need to reschedule":
        "You can reschedule for free up to 2 hours before your slot from 'My Bookings'. Want us to reschedule this one for you right now?",
      "Professional didn't show up":
        "We're really sorry about that. Share your booking ID and we'll immediately send another verified professional plus a service credit for the inconvenience.",
    },
  },
  "Service Query": {
    icon: "🧰",
    options: [
      "Is this service right for my need?",
      "Service quality concern",
      "How long does the service take?",
      "What's included in the service?",
    ],
    replies: {
      "Is this service right for my need?":
        "Each service page lists exactly what's covered. If you're still unsure, our support team can help you pick the right service for your home.",
      "Service quality concern":
        "We're sorry to hear that. Every service comes with a 7-day warranty — we'll send a professional back at no extra cost to make it right.",
      "How long does the service take?":
        "Most services take 45 minutes to a few hours depending on scope. The estimated duration is shown before you confirm your booking.",
      "What's included in the service?":
        "Every listing has a detailed checklist of what's covered. Tell us the specific service and we'll share the full list.",
    },
  },
  "Payment Issue": {
    icon: "💳",
    options: [
      "Charged but booking not placed",
      "Refund not received",
      "Payment failed",
      "Incorrect amount charged",
    ],
    replies: {
      "Charged but booking not placed":
        "If payment was deducted but your booking wasn't confirmed, the amount is automatically refunded within 48 hours. No action needed from your side.",
      "Refund not received":
        "Refunds typically take 5–7 business days depending on your bank. We're checking the status of your refund right now and will update you shortly.",
      "Payment failed":
        "Payment failures are usually due to a bank-side issue. Please retry with a different payment method — your previous attempt was not charged.",
      "Incorrect amount charged":
        "We're reviewing your transaction. If there's a mismatch between the quoted and charged price, we'll refund the difference within 3 business days.",
    },
  },
  "Cancellations & Refunds": {
    icon: "🔄",
    options: [
      "How do I cancel a booking?",
      "Cancellation charges",
      "Refund status check",
      "Reschedule instead of cancel",
    ],
    replies: {
      "How do I cancel a booking?":
        "You can cancel any booking for free up to 2 hours before your scheduled slot from 'My Bookings'.",
      "Cancellation charges":
        "Cancelling within 2 hours of your slot may carry a small fee to compensate the assigned professional. Cancelling earlier is always free.",
      "Refund status check":
        "Refunds for cancelled bookings are processed within 5–7 business days to your original payment method.",
      "Reschedule instead of cancel":
        "Rescheduling is free and instant — just pick a new slot from 'My Bookings' instead of cancelling entirely.",
    },
  },
  "Account & Login": {
    icon: "👤",
    options: [
      "Can't log into my account",
      "Update my address",
      "Delete my account",
      "Change phone number",
    ],
    replies: {
      "Can't log into my account":
        "Please try resetting your password via 'Forgot Password'. Still stuck? We'll verify your identity and restore access manually.",
      "Update my address":
        "You can update your saved address from Account → Saved Addresses. For an upcoming booking, contact us right away so we can update the professional's route.",
      "Delete my account":
        "We're sorry to see you go. Account deletion is permanent and removes your booking history. Please confirm and we'll process it within 48 hours.",
      "Change phone number":
        "You can update your phone number from Account → Profile Settings. We'll send a confirmation to your new number.",
    },
  },
  "Professional & Safety": {
    icon: "🛡️",
    options: [
      "Is the professional verified?",
      "Report unprofessional behavior",
      "Safety concern",
      "Warranty claim",
    ],
    replies: {
      "Is the professional verified?":
        "Yes — every Manayata professional passes an identity check, background verification, and a skills assessment before joining the platform.",
      "Report unprofessional behavior":
        "We take this seriously. Please share the details and we'll investigate immediately, which may include suspending the professional from the platform.",
      "Safety concern":
        "Your safety matters to us. If you feel unsafe at any point during a service, contact our support line immediately using the number below.",
      "Warranty claim":
        "Most services include a 7-day warranty. Share your booking ID and we'll send a professional back to resolve the issue at no extra cost.",
    },
  },
};

const MAIN_CATEGORIES = [
  ...Object.keys(OPTIONS).map((k) => ({ label: k, icon: OPTIONS[k].icon })),
  { label: "Other", icon: "💬" },
];

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-gold-500 flex items-center justify-center text-white text-xs font-black flex-shrink-0 shadow-sm">
        M
      </div>
      <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center shadow-sm">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-brand-500"
            style={{ animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite` }}
          />
        ))}
      </div>
    </div>
  );
}

function StarRating({ onRate }) {
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex flex-col gap-3 mt-1">
      <p className="text-slate-500 text-xs font-semibold">Rate your support experience:</p>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((s) => (
          <button
            key={s}
            onMouseEnter={() => setHovered(s)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => {
              setSelected(s);
              onRate(s);
            }}
            className="transition-transform hover:scale-125 focus:outline-none"
          >
            <Star
              size={26}
              className={s <= (hovered || selected) ? "text-gold-500 fill-gold-500" : "text-slate-200"}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Chatbot() {
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [step, setStep] = useState("WELCOME");
  const [currentCategory, setCurrentCategory] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [rated, setRated] = useState(false);
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [unread, setUnread] = useState(0);

  const TICKET_REF = "MNY-" + Math.random().toString(36).slice(2, 8).toUpperCase();

  const scrollToBottom = () => bottomRef.current?.scrollIntoView({ behavior: "smooth" });

  const addBot = (text, extra = {}) => {
    setIsTyping(false);
    setMessages((prev) => [...prev, { from: "bot", text, ...extra }]);
    if (!open) setUnread((u) => u + 1);
  };

  const addUser = (text) =>
    setMessages((prev) => [...prev, { from: "user", text }]);

  const botSay = (text, delay = BOT_DELAY, extra = {}) => {
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => addBot(text, extra), TYPING_DELAY);
    }, delay);
  };

  useEffect(() => { scrollToBottom(); }, [messages, isTyping, currentOptions]);

  useEffect(() => {
    if (open) {
      setUnread(0);
      if (messages.length === 0) initChat();
    }
  }, [open]);

  const initChat = () => {
    botSay("👋 Hi! Welcome to Manayata Support.", 300);
    setTimeout(() => {
      botSay("I'm here to help with bookings, services, payments, and more. How can I assist you today?", 300 + TYPING_DELAY + 400);
      setTimeout(() => {
        setCurrentOptions(MAIN_CATEGORIES);
        setStep("MAIN");
      }, 300 + TYPING_DELAY * 2 + 600);
    }, 0);
  };

  const handleOption = (option) => {
    const label = typeof option === "string" ? option : option.label;
    addUser(label);
    setCurrentOptions([]);
    setShowInput(false);

    if (step === "MAIN") {
      if (label === "Other") {
        botSay("Please describe your issue below and our team will get back to you:");
        setTimeout(() => setShowInput(true), BOT_DELAY + TYPING_DELAY + 200);
      } else {
        setCurrentCategory(label);
        botSay(`Got it — "${label}". Please choose a specific issue:`);
        setTimeout(() => {
          setCurrentOptions(OPTIONS[label].options.map((o) => o));
          setStep("SUB");
        }, BOT_DELAY + TYPING_DELAY + 200);
      }
    } else if (step === "SUB") {
      botSay(OPTIONS[currentCategory].replies[label]);
      setTimeout(() => askSolved(), BOT_DELAY + TYPING_DELAY + 400);
    } else if (step === "SOLVED") {
      handleSolved(label);
    } else if (step === "AGENT") {
      handleAgent(label);
    }
  };

  const askSolved = () => {
    botSay("Was this helpful? Is your issue resolved?", 0);
    setTimeout(() => {
      setCurrentOptions(["✅ Yes, resolved", "❌ No, still have issue", "🎧 Talk to live agent"]);
      setStep("SOLVED");
    }, TYPING_DELAY + 200);
  };

  const handleSolved = (answer) => {
    if (answer === "✅ Yes, resolved") {
      botSay("That's great! 🎉 Thank you for choosing Manayata.", 0, { showRating: true });
      setTimeout(() => setShowRating(true), TYPING_DELAY + 200);
      setStep("DONE");
    } else if (answer === "🎧 Talk to live agent") {
      botSay("Connecting you to a live support agent. Please hold on...", 0);
      setTimeout(() => {
        botSay("Our support team is available at:", 0, { showAgent: true });
        setStep("AGENT");
      }, TYPING_DELAY + 500);
    } else {
      botSay("I'm sorry to hear that. Let me raise a support ticket for you.", 0);
      setTimeout(() => {
        setShowTicketForm(true);
        setStep("TICKET");
      }, TYPING_DELAY + 300);
    }
  };

  const handleAgent = () => {};

  const submitTicket = () => {
    if (!bookingId.trim()) return;
    addUser(`Booking ID: ${bookingId}`);
    setShowTicketForm(false);
    setBookingId("");
    botSay(
      `✅ Ticket raised successfully! Your ticket ID is **${TICKET_REF}**. Our support team will contact you within 2 hours.`,
      0,
      { ticketRef: TICKET_REF }
    );
    setTicketSubmitted(true);
    setTimeout(() => setShowRating(true), TYPING_DELAY + 500);
    setStep("DONE");
  };

  const submitFreeText = () => {
    if (!inputText.trim()) return;
    addUser(inputText);
    setShowInput(false);
    setInputText("");
    botSay("Thank you for describing your issue. Let me raise a ticket for you.", 0);
    setTimeout(() => {
      setShowTicketForm(true);
      setStep("TICKET");
    }, TYPING_DELAY + 300);
  };

  const copyTicket = () => {
    navigator.clipboard.writeText(TICKET_REF).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const restartChat = () => {
    setMessages([]);
    setCurrentOptions([]);
    setStep("WELCOME");
    setCurrentCategory("");
    setShowInput(false);
    setInputText("");
    setIsTyping(false);
    setShowRating(false);
    setRated(false);
    setShowTicketForm(false);
    setBookingId("");
    setTicketSubmitted(false);
    setTimeout(() => initChat(), 100);
  };

  return (
    <>
      <style>{`
        @keyframes bounce {
          0%,60%,100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
        @keyframes fadeSlideUp {
          from { opacity:0; transform:translateY(16px) scale(0.97); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: 0.4; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .chat-window { animation: fadeSlideUp 0.3s cubic-bezier(0.34,1.2,0.64,1) forwards; }
        .pulse-ring  { animation: pulse-ring 1.5s ease-out infinite; }
      `}</style>

      {/* Floating Button */}
      <div className="fixed bottom-20 md:bottom-6 right-4 z-[100] flex flex-col items-end gap-3">
        {!open && (
          <div className="relative">
            <div className="pulse-ring absolute inset-0 rounded-full bg-brand-500 pointer-events-none" />
            <button
              onClick={() => setOpen(true)}
              className="relative w-14 h-14 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 text-white flex items-center justify-center shadow-[0_8px_32px_rgba(79,70,229,0.4)] transition-all active:scale-95 hover:shadow-[0_8px_40px_rgba(79,70,229,0.55)] hover:-translate-y-1"
            >
              {/* Home / service chat icon */}
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <rect x="3" y="3" width="20" height="20" rx="5" fill="rgba(255,255,255,0.15)" />
                <path
                  d="M8 13.5 13 9l5 4.5M9.5 12.5V17h7v-4.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="13" cy="13" r="10" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
              </svg>
              {unread > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-black flex items-center justify-center border-2 border-white">
                  {unread}
                </span>
              )}
            </button>
          </div>
        )}

        {/* Chat Window */}
        {open && (
          <div
            className="chat-window flex flex-col bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl"
            style={{
              width: "min(380px, calc(100vw - 24px))",
              height: "min(600px, calc(100dvh - 120px))",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-slate-900 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-black text-sm border border-white/20">
                  M
                </div>
                <div>
                  <p className="text-white text-sm font-bold leading-none">Manayata Support</p>
                  <p className="text-slate-400 text-[11px] flex items-center gap-1.5 mt-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                    Online · Replies instantly
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={restartChat}
                  className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                  title="Restart chat"
                >
                  <RotateCcw size={14} />
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto px-4 py-5 flex flex-col gap-4 bg-slate-50/50"
              style={{ scrollbarWidth: "none" }}
            >
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "items-end gap-2.5"}`}>
                  {msg.from === "bot" && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-gold-500 flex items-center justify-center text-white text-xs font-black flex-shrink-0 shadow-sm">
                      M
                    </div>
                  )}
                  <div
                    className={[
                      "px-4 py-3 rounded-2xl text-sm max-w-[82%] leading-relaxed shadow-sm",
                      msg.from === "user"
                        ? "bg-brand-600 text-white font-medium rounded-br-sm"
                        : "bg-white border border-slate-200 text-slate-700 rounded-bl-sm",
                    ].join(" ")}
                  >
                    {msg.text}

                    {/* Ticket ref copy */}
                    {msg.ticketRef && (
                      <div className="mt-3 flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2">
                        <span className="text-brand-600 text-xs font-black">{msg.ticketRef}</span>
                        <button onClick={copyTicket} className="ml-auto text-slate-400 hover:text-brand-600 transition-colors">
                          {copied ? <Check size={14} /> : <Copy size={14} />}
                        </button>
                      </div>
                    )}

                    {/* Live agent info */}
                    {msg.showAgent && (
                      <div className="mt-3 flex flex-col gap-2">
                        <a href="tel:+911800123456"
                          className="flex items-center gap-2 bg-brand-50 border border-brand-100 text-brand-700 px-3 py-2.5 rounded-xl text-xs font-bold hover:bg-brand-100 transition-all"
                        >
                          <Phone size={14} /> Call: 1800-123-4567
                        </a>
                        <a href="https://wa.me/911800123456"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-3 py-2.5 rounded-xl text-xs font-bold hover:bg-green-100 transition-all"
                        >
                          💬 WhatsApp Support
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && <TypingIndicator />}

              {/* Option buttons */}
              {!isTyping && currentOptions.length > 0 && (
                <div className="flex flex-col gap-2 ml-10">
                  {currentOptions.map((opt, i) => {
                    const label = typeof opt === "string" ? opt : opt.label;
                    const icon = typeof opt === "object" ? opt.icon : null;
                    return (
                      <button
                        key={i}
                        onClick={() => handleOption(opt)}
                        className="flex items-center gap-2.5 w-full text-left bg-white border border-slate-200 hover:border-brand-300 hover:bg-brand-50 text-slate-700 text-xs font-semibold px-4 py-3 rounded-xl transition-all duration-200 active:scale-[0.98] shadow-sm"
                      >
                        {icon && <span className="text-base">{icon}</span>}
                        {label}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Free text input */}
              {showInput && (
                <div className="ml-10 flex gap-2">
                  <input
                    ref={inputRef}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && submitFreeText()}
                    placeholder="Describe your issue..."
                    className="flex-1 bg-white border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-50 rounded-xl px-3.5 py-2.5 text-sm text-slate-700 placeholder-slate-400 outline-none transition-all"
                  />
                  <button
                    onClick={submitFreeText}
                    className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center transition-all active:scale-95 flex-shrink-0 hover:bg-brand-700 shadow-sm"
                  >
                    <Send size={16} />
                  </button>
                </div>
              )}

              {/* Ticket form */}
              {showTicketForm && (
                <div className="ml-10 bg-white border border-slate-200 rounded-2xl p-4 flex flex-col gap-3 shadow-sm">
                  <p className="text-brand-600 text-[10px] font-bold tracking-widest uppercase">Raise a Ticket</p>
                  <input
                    value={bookingId}
                    onChange={(e) => setBookingId(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && submitTicket()}
                    placeholder="Enter Booking ID (e.g. MN-12345)"
                    className="bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-50 rounded-xl px-3.5 py-2.5 text-sm text-slate-700 placeholder-slate-400 outline-none transition-all"
                  />
                  <button
                    onClick={submitTicket}
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm py-2.5 rounded-xl transition-all active:scale-[0.98]"
                  >
                    Submit Ticket
                  </button>
                </div>
              )}

              {/* Star rating */}
              {showRating && !rated && (
                <div className="ml-10 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
                  <StarRating
                    onRate={(r) => {
                      setRated(true);
                      setShowRating(false);
                      addUser(`Rated: ${"⭐".repeat(r)}`);
                      botSay(
                        r >= 4
                          ? "🌟 Thank you for the great rating! We're glad we could help — see you next time your home needs some care."
                          : "Thank you for your feedback. We'll use it to keep improving our service for you."
                      );
                    }}
                  />
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Bottom bar */}
            <div className="px-4 py-2.5 border-t border-slate-100 flex items-center justify-center bg-white">
              <p className="text-slate-400 text-[10px] tracking-wide font-medium">
                Powered by <span className="text-brand-600 font-bold">Manayata</span> Support
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}