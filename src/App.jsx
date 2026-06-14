import Navbar   from "./components/Navbar";
import Footer   from "./components/Footer";
import Hero     from "./sections/Hero";
import StatsStrip from "./sections/StatsStrip";
import Features from "./sections/Features";
import Journey  from "./sections/Journey";
import Roles    from "./sections/Roles";
import Pricing  from "./sections/Pricing";
import Contact  from "./sections/Contact";

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <Features />
        <Journey />
        <Roles />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
