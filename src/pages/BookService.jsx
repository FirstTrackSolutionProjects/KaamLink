import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, MapPin, CheckCircle } from "lucide-react";

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;

export default function BookService() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/services`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Backend Services Data:", data); // Check F12 console!
        
        if (data.success && Array.isArray(data.data)) {
          // Force both to String to avoid Number vs String mismatch
          const found = data.data.find((s) => String(s.id) === String(id));
          
          if (found) {
            setService(found);
          } else {
            console.error("Service not found in array. Looking for ID:", id);
          }
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      });
  }, [id]);

  const handleBook = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem("accessToken");
    const slot_start = new Date(`${date}T${time}:00`).toISOString();

    try {
      const response = await fetch(`${BACKEND_URL}/api/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          service_id: id,
          address_line: address,
          pincode: pincode,
          slot_start: slot_start,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
      } else {
        alert("Error: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to connect to server");
    } finally {
      setLoading(false);
    }
  };

  if (!service) return <div className="p-20 text-center">Loading...</div>;

  if (success) {
    return (
      <div className="max-w-lg mx-auto px-6 py-24 text-center">
        <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-extrabold mb-2">Booking Confirmed!</h1>
        <p className="text-muted mb-8">Your professional will arrive on {date} at {time}.</p>
        <button onClick={() => navigate("/dashboard")} className="rounded-full bg-ink px-6 py-3 text-white font-semibold">
          Go to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-extrabold mb-2">Book {service.name}</h1>
      <p className="text-pink-600 font-bold mb-8">₹{service.base_price} • {service.duration_mins} mins</p>

      <form onSubmit={handleBook} className="space-y-6 bg-white p-8 rounded-3xl border border-line shadow-card">
        <div>
          <label className="text-sm font-semibold">Full Address</label>
          <div className="relative mt-1.5">
            <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input required type="text" placeholder="Flat 101, Building A, Street..." value={address} onChange={(e) => setAddress(e.target.value)} className="w-full rounded-xl bg-ivory border border-line pl-10 pr-4 py-3 text-sm outline-none focus:border-pink-400" />
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold">Pincode</label>
          <input required type="text" placeholder="560001" value={pincode} onChange={(e) => setPincode(e.target.value)} className="mt-1.5 w-full rounded-xl bg-ivory border border-line px-4 py-3 text-sm outline-none focus:border-pink-400" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-semibold">Date</label>
            <div className="relative mt-1.5">
              <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
              <input required type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full rounded-xl bg-ivory border border-line pl-10 pr-4 py-3 text-sm outline-none focus:border-pink-400" />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold">Time</label>
            <input required type="time" value={time} onChange={(e) => setTime(e.target.value)} className="mt-1.5 w-full rounded-xl bg-ivory border border-line px-4 py-3 text-sm outline-none focus:border-pink-400" />
          </div>
        </div>

        <button type="submit" disabled={loading} className="w-full rounded-full bg-gradient-to-r from-amber-500 to-pink-600 py-4 text-white font-bold shadow-card hover:shadow-soft transition-all">
          {loading ? "Processing..." : `Confirm Booking`}
        </button>
      </form>
    </div>
  );
}