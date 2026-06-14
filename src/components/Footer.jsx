import LogoMark from "../components/LogoMark";

const LINKS = {
  Product:  ["Features", "How it works", "Pricing", "Request Demo"],
  Company:  ["About", "Contact", "Careers"],
  Support:  ["Documentation", "WhatsApp Support", "Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark pt-16 pb-8 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <LogoMark size={32} />
              <span className="text-[1.1rem] font-extrabold tracking-tight text-white">
                MediTrack<span className="text-brand-light">Ug</span>
              </span>
            </div>
            <p className="text-[0.82rem] text-white/40 leading-[1.7] mb-5">
              Real-time clinic management built for Uganda's health facilities.
            </p>
            <p className="text-[0.72rem] font-bold tracking-[0.1em] uppercase text-brand-light/70">
              Connect. Care. Manage.
            </p>
          </div>

          {/* Link cols */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <p className="text-[0.72rem] font-bold tracking-[0.1em] uppercase text-white/40 mb-4">
                {group}
              </p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[0.85rem] text-white/50 hover:text-white transition-colors duration-150"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[0.78rem] text-white/25">
            © {year} MediTrackUg. Kampala, Uganda.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[0.75rem] text-white/30">System operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
