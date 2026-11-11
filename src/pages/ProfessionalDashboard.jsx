import { useState, useEffect } from "react";
import { Calendar, MapPin, CheckCircle, IndianRupee, Briefcase } from "lucide-react";

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;

export default function ProfessionalDashboard({ token }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/bookings/available`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.json())
      .then((data) => { if (data.success) setJobs(data.data); });
  }, [token]);

  const handleAccept = async (id) => {
    const res = await fetch(`${BACKEND_URL}/api/bookings/${id}/accept`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${token}` }
    });
    if (res.ok) {
      alert("Job Accepted! Check your schedule.");
      setJobs(jobs.filter((j) => j.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      
      {/* STATS ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-card border border-line flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center"><Briefcase size={24} /></div>
          <div><p className="text-xs text-muted font-bold uppercase tracking-wider">Available Jobs</p><h3 className="text-2xl font-extrabold">{jobs.length}</h3></div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-card border border-line flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center"><IndianRupee size={24} /></div>
          <div><p className="text-xs text-muted font-bold uppercase tracking-wider">Total Earnings</p><h3 className="text-2xl font-extrabold">₹0</h3></div>
        </div>
      </div>

      {/* JOB BOARD */}
      <h2 className="text-xl font-bold mt-8 mb-4">Open Job Board</h2>
      {jobs.length === 0 ? (
        <div className="bg-white p-12 rounded-2xl border border-line text-center shadow-card">
          <CheckCircle size={48} className="mx-auto text-green-500 mb-4" />
          <h3 className="text-lg font-bold">You're all caught up!</h3>
          <p className="text-muted">No new jobs available in your category right now.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {jobs.map((j) => (
            <div key={j.id} className="bg-white p-6 rounded-2xl shadow-card border border-line">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-ink">{j.service?.name}</h3>
                  <p className="text-sm text-pink-600 font-bold mt-1">₹{j.amount}</p>
                </div>
                <button onClick={() => handleAccept(j.id)} className="rounded-full bg-gradient-to-r from-amber-500 to-pink-600 px-5 py-2 text-white text-sm font-bold shadow-card hover:shadow-soft transition-all">
                  Accept Job
                </button>
              </div>
              <div className="space-y-2 text-sm text-muted">
                <p className="flex items-center gap-2"><Calendar size={16} /> {new Date(j.slot_start).toLocaleDateString()} at {new Date(j.slot_start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                <p className="flex items-center gap-2"><MapPin size={16} /> {j.address_line} ({j.pincode})</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}