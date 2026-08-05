/**
 * KaamLink — image asset registry
 * ---------------------------------------------------------------
 * Every image used across the landing page is registered here.
 * Right now each entry points to a PLACEHOLDER (placehold.co) sized
 * to the EXACT dimensions the layout expects, so nothing shifts
 * once you swap it.
 *
 * Source ONLY from Freepik (freepik.com) — illustrations & photos.
 *
 * HOW TO REPLACE A PLACEHOLDER:
 * 1. Download the image from Freepik at (at least) the dimensions
 *    listed below.
 * 2. Drop the file into this same `src/assets/` folder
 *    (e.g. `hero-illustration.png`).
 * 3. Uncomment the matching `import` line at the top of this file.
 * 4. Replace that entry's `src:` value with the imported variable
 *    instead of the placeholder URL.
 *
 * Example:
 *   import heroImg from "./hero-illustration.png";
 *   export const heroImage = {
 *     src: heroImg,          // was: "https://placehold.co/..."
 *     width: 600,
 *     height: 600,
 *     alt: "...",
 *   };
 * ---------------------------------------------------------------
 */

// --- Uncomment as you add each downloaded file ---
// import heroImg from "./hero-illustration.png";
// import avatar1 from "./avatar-1.png";
// import avatar2 from "./avatar-2.png";
// import avatar3 from "./avatar-3.png";
// import avatar4 from "./avatar-4.png";
// import avatar5 from "./avatar-5.png";
// import footerImg from "./footer-illustration.png";
import logoImg from "../assets/logo.png"

export const assets = {
  logoImg,
};
// Hero illustration — square, sits beside the headline
// Freepik search: "home service illustration" / "cleaning service flat illustration"
export const heroImage = {
  src: "https://placehold.co/600x600/FDE9C8/DB2777?text=Hero+Illustration",
  // src: heroImg,
  width: 600,
  height: 600,
  alt: "Illustration of a home services professional at a customer's door",
};

// Testimonial avatars — square, small
// Freepik search: "indian person portrait illustration" or "avatar icon flat"
export const testimonialAvatars = [
  {
    src: "https://placehold.co/80x80/FDE9C8/27170F?text=A",
    // src: avatar1,
    width: 80,
    height: 80,
    alt: "Portrait of Ananya R.",
  },
  {
    src: "https://placehold.co/80x80/FCE7F3/27170F?text=R",
    // src: avatar2,
    width: 80,
    height: 80,
    alt: "Portrait of Rohit S.",
  },
  {
    src: "https://placehold.co/80x80/FDE9C8/27170F?text=M",
    // src: avatar3,
    width: 80,
    height: 80,
    alt: "Portrait of Meera K.",
  },
  {
    src: "https://placehold.co/80x80/FCE7F3/27170F?text=S",
    // src: avatar4,
    width: 80,
    height: 80,
    alt: "Portrait of Sameer P.",
  },
  {
    src: "https://placehold.co/80x80/FDE9C8/27170F?text=P",
    // src: avatar5,
    width: 80,
    height: 80,
    alt: "Portrait of Priya N.",
  },
];

// Footer brand mark / small decorative graphic (optional)
// Freepik search: "location map illustration flat" (recolor to brand ombre if needed)
export const footerGraphic = {
  src: "https://placehold.co/320x240/FDE9C8/DB2777?text=Footer+Illustration",
  // src: footerImg,
  width: 320,
  height: 240,
  alt: "Decorative illustration of a mapped service area",
};
// About page hero — square, sits beside the story headline
export const aboutHero = {
  src: "https://placehold.co/600x600/FCE7F3/DB2777?text=About+Hero",
  width: 600,
  height: 600,
  alt: "Illustration representing the KaamLink team and mission",
};

// About page — leadership team, square headshots
export const teamMembers = [
  { src: "https://placehold.co/240x240/FDE9C8/27170F?text=A+K", width: 240, height: 240, alt: "Portrait of Arjun Khanna, Co-founder & CEO" },
  { src: "https://placehold.co/240x240/FCE7F3/27170F?text=D+M", width: 240, height: 240, alt: "Portrait of Divya Menon, Co-founder & COO" },
  { src: "https://placehold.co/240x240/FDE9C8/27170F?text=K+R", width: 240, height: 240, alt: "Portrait of Karan Rao, Head of Operations" },
  { src: "https://placehold.co/240x240/FCE7F3/27170F?text=S+I", width: 240, height: 240, alt: "Portrait of Sana Iyer, Head of Trust & Safety" },
];

// Blog — featured post cover, wide
export const blogFeatured = {
  src: "https://placehold.co/800x500/FDE9C8/DB2777?text=Featured+Post",
  width: 800,
  height: 500,
  alt: "Cover image for the featured blog post",
};

// Blog — grid post covers, 4:3-ish
export const blogCovers = [
  { src: "https://placehold.co/480x320/FCE7F3/27170F?text=Cleaning", width: 480, height: 320, alt: "Cover image: home cleaning tips" },
  { src: "https://placehold.co/480x320/FDE9C8/27170F?text=Pest", width: 480, height: 320, alt: "Cover image: pest control checklist" },
  { src: "https://placehold.co/480x320/FCE7F3/27170F?text=AC", width: 480, height: 320, alt: "Cover image: AC maintenance" },
  { src: "https://placehold.co/480x320/FDE9C8/27170F?text=Verify", width: 480, height: 320, alt: "Cover image: professional verification" },
  { src: "https://placehold.co/480x320/FCE7F3/27170F?text=Festive", width: 480, height: 320, alt: "Cover image: festive home prep" },
  { src: "https://placehold.co/480x320/FDE9C8/27170F?text=DIY", width: 480, height: 320, alt: "Cover image: DIY vs professional" },
];