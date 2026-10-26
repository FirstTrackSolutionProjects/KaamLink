// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BottomNav from "./BottomNav";
import Chatbot from "./Chatbot";

export default function MainLayout() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-ivory">
      <Navbar />
      
      {/* pt-24 ensures content doesn't hide behind the floating navbar. 
          pb-20 keeps space for the mobile BottomNav. */}
      <main className="flex-1 pt-24 pb-20 md:pb-0">
        <Outlet />
      </main>
      
      <Chatbot />
      <Footer />
      <BottomNav />
    </div>
  );
}




// import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import BottomNav from "./BottomNav";
// import Chatbot from "./Chatbot";

// export default function MainLayout() {
//   return (
//     <div id="top" className="min-h-screen flex flex-col bg-ivory">
//       <Navbar />
//       {/* pb-16 reserves space for the fixed BottomNav on mobile only */}
//       <main className="flex-1 pb-16 md:pb-0">
//         <Outlet />
//       </main>
//       <Chatbot/>
//       <Footer />
//       <BottomNav />
//     </div>
//   );
// }