import { useState, useEffect } from "react";
import { Users, CalendarCheck, IndianRupee, MessageSquare, UserPlus } from "lucide-react";

export default function AdminDashboard({ token }) {
  const [bookings, setBookings] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/bookings/all", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.json())
      .then((data) => { if (data.success) setBookings(data.data); });

    fetch("http://localhost:5000/api/contact", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.json())
      .then((data) => { if (data.success) setMessages(data.data); });
  }, [token]);

  const totalRevenue = bookings.reduce((sum, b) => sum + Number(b.amount), 0);

  return (
    <div className="space-y-6">
      
      {/* STATS ROW */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-card border border-line flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center"><CalendarCheck size={24} /></div>
          <div><p className="text-xs text-muted font-bold uppercase tracking-wider">Bookings</p><h3 className="text-2xl font-extrabold">{bookings.length}</h3></div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-card border border-line flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center"><IndianRupee size={24} /></div>
          <div><p className="text-xs text-muted font-bold uppercase tracking-wider">Revenue</p><h3 className="text-2xl font-extrabold">₹{totalRevenue}</h3></div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-card border border-line flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center"><MessageSquare size={24} /></div>
          <div><p className="text-xs text-muted font-bold uppercase tracking-wider">Messages</p><h3 className="text-2xl font-extrabold">{messages.length}</h3></div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-card border border-line flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center"><Users size={24} /></div>
          <div><p className="text-xs text-muted font-bold uppercase tracking-wider">Professionals</p><h3 className="text-2xl font-extrabold">12</h3></div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* BOOKINGS TABLE */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-card border border-line overflow-hidden">
          <div className="p-5 border-b border-line flex justify-between items-center">
            <h2 className="text-lg font-bold">Platform Bookings</h2>
          </div>
          <table className="w-full text-left text-sm">
            <thead className="bg-ivory text-muted">
              <tr>
                <th className="px-5 py-4 font-semibold">Customer</th>
                <th className="px-5 py-4 font-semibold">Service</th>
                <th className="px-5 py-4 font-semibold">Status</th>
                <th className="px-5 py-4 font-semibold text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {bookings.map((b) => (
                <tr key={b.id} className="hover:bg-ivory/50 transition-colors">
                  <td className="px-5 py-4 font-medium">{b.user?.full_name || "Unknown"}</td>
                  <td className="px-5 py-4 text-muted">{b.service?.name}</td>
                  <td className="px-5 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-100 text-amber-700">{b.status}</span>
                  </td>
                  <td className="px-5 py-4 text-right font-bold">₹{b.amount}</td>
                </tr>
              ))}
              {bookings.length === 0 && (
                <tr>
                  <td colSpan="4" className="px-5 py-8 text-center text-muted">No bookings yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* MESSAGES LIST */}
        <div className="bg-white rounded-2xl shadow-card border border-line overflow-hidden">
          <div className="p-5 border-b border-line"><h2 className="text-lg font-bold">Recent Queries</h2></div>
          <div className="p-4 space-y-3">
            {messages.slice(0, 5).map((m) => (
              <div key={m.id} className="p-4 rounded-xl bg-ivory border border-line">
                <p className="font-bold text-sm text-ink">{m.subject}</p>
                <p className="text-xs text-muted mb-2">From: {m.name}</p>
                <p className="text-sm text-ink/80 line-clamp-2">{m.message}</p>
              </div>
            ))}
            {messages.length === 0 && <p className="text-sm text-muted p-4">No messages yet.</p>}
          </div>
        </div>
      </div>

      {/* TEAM & PROFESSIONAL ACCESS MANAGEMENT */}
      <div className="bg-white rounded-2xl shadow-card border border-line overflow-hidden mt-6">
        <div className="p-5 border-b border-line flex justify-between items-center">
          <h2 className="text-lg font-bold">Team & Professional Access</h2>
        </div>
        <div className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="text-sm font-semibold text-ink">Invite a Professional</p>
            <p className="text-sm text-muted mt-1">Send an invite link to a professional to join your team and start receiving jobs.</p>
          </div>
          <button 
            onClick={() => alert("In a production app, this would open a modal to enter an email and send an invite link!")}
            className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-card hover:shadow-soft transition-all shrink-0"
          >
            <UserPlus size={18} />
            Invite Professional
          </button>
        </div>
      </div>
    </div>
  );
}