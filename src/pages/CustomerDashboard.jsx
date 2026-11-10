import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Package, ArrowRight } from "lucide-react";

export default function CustomerDashboard({ token }) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/bookings/me", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.json())
      .then((data) => { if (data.success) setBookings(data.data); });
  }, [token]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Your Bookings</h2>
        <Link to="/#services" className="rounded-full bg-gradient-to-r from-amber-500 to-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:shadow-soft transition-all">
          + Book New Service
        </Link>
      </div>

      {bookings.length === 0 ? (
        <div className="bg-white p-12 rounded-3xl border border-line text-center shadow-card">
          <Package size={48} className="mx-auto text-muted mb-4 opacity-50" />
          <h3 className="text-lg font-bold mb-2">No bookings yet</h3>
          <p className="text-muted mb-6">You haven't booked any home services yet.</p>
          <Link to="/#services" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-white font-semibold hover:bg-ink/80 transition-colors">
            Browse Services <ArrowRight size={16} />
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {bookings.map((b) => (
            <div key={b.id} className="bg-white p-6 rounded-2xl shadow-card border border-line">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${b.status === "pending" ? "bg-amber-100 text-amber-700" : "bg-green-100 text-green-700"}`}>
                    {b.status}
                  </span>
                  <h3 className="text-lg font-bold mt-2">{b.service?.name}</h3>
                </div>
                <p className="text-xl font-extrabold text-pink-600">₹{b.amount}</p>
              </div>
              <div className="space-y-2 text-sm text-muted">
                <p className="flex items-center gap-2"><Calendar size={16} /> {new Date(b.slot_start).toLocaleDateString()}</p>
                <p className="flex items-center gap-2"><MapPin size={16} /> {b.address_line}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}