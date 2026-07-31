import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Cities from "./components/Cities";
import TrustStats from "./components/TrustStats";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";

import Hero from "./components/Hero";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />}/>
       <Route index element={<Hero />} />
          <Route path="services" element={<Services />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="cities" element={<Cities />} />
          <Route path="trust-stats" element={<TrustStats />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="faq" element={<FAQ />} />
           <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="terms" element={<Terms />} />
         <Route path="privacy" element={<Privacy />} />
      </Route>
    </Routes>
  );
}
