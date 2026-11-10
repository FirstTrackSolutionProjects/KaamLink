import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BottomNav from "./BottomNav";
import Chatbot from "./Chatbot";

export default function MainLayout() {
  const location = useLocation();
  
  // Check if the current URL starts with /dashboard
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <div id="top" className="min-h-screen flex flex-col bg-ivory">
      {/* Only show Navbar if NOT in dashboard */}
      {!isDashboard && <Navbar />}

      <main className={`flex-1 ${!isDashboard ? "pb-16 md:pb-0" : ""}`}>
        <Outlet />
      </main>

      {/* Only show Chatbot, Footer, and BottomNav if NOT in dashboard */}
      {!isDashboard && (
        <>
          <Chatbot />
          <Footer />
          <BottomNav />
        </>
      )}
    </div>
  );
}