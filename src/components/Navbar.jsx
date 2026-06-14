import { useState, useEffect } from "react";
import LogoMark from "./LogoMark";

const NAV_LINKS = [
  { href: "#features",  label: "Features"     },
  { href: "#journey",   label: "How it works" },
  { href: "#roles",     label: "For your team" },
  { href: "#pricing",   label: "Pricing"      },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [activeLink,  setActiveLink]  = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group" aria-label="MediTrackUg home">
          <LogoMark size={36} />
          <span className="text-[1.15rem] font-extrabold tracking-tight text-navy">
            MediTrack<span className="text-brand">Ug</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => handleNavClick(l.href)}
                className={`text-[0.875rem] font-medium transition-colors duration-150 ${
                  activeLink === l.href ? "text-navy" : "text-gray-500 hover:text-navy"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="text-[0.875rem] font-semibold text-navy hover:text-brand transition-colors"
          >
            Sign in
          </a>
          <a
            href="#contact"
            className="bg-brand hover:bg-navy text-white text-[0.875rem] font-bold px-5 py-2.5 rounded-lg transition-colors duration-200"
          >
            Request Demo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg text-navy hover:bg-brand-pale transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-b border-gray-100 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-5 py-4 space-y-1">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => handleNavClick(l.href)}
                className="block py-3 px-4 rounded-xl text-[0.95rem] font-medium text-gray-700 hover:bg-brand-pale hover:text-brand transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-3 pb-1">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center bg-brand hover:bg-navy text-white font-bold py-3.5 rounded-xl transition-colors"
            >
              Request Demo
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
