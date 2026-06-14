import useReveal from "../components/useReveal";

const FEATURES = [
  {
    icon: "🧾",
    title: "Instant patient registration",
    desc: "Two-step form captures name, gender, contact, and next of kin in under 30 seconds. No paperwork, no lost books — new records are live the moment you save.",
  },
  {
    icon: "⚡",
    title: "Live visit queue",
    desc: "Reception starts a visit, assigns a department, and it appears on every screen instantly. Emergencies automatically surface to the top — no verbal handoffs needed.",
  },
  {
    icon: "👨‍⚕️",
    title: "Full patient history for doctors",
    desc: "Every past visit, diagnosis, and prescription is two taps away. Doctors stop guessing what was prescribed last time — the full record is always visible.",
  },
  {
    icon: "🔬",
    title: "Lab results — pending or complete",
    desc: "Ordered tests always appear on the consultation screen, clearly marked \"Waiting for results\" until the lab updates them. No missing results, no phone calls between departments.",
  },
  {
    icon: "📊",
    title: "Real-time admin dashboard",
    desc: "Daily patient counts, visit trends, and pending lab backlogs update live — no manual tallying, no end-of-day paperwork. Just open the dashboard.",
  },
  {
    icon: "📱",
    title: "Works on low-end Android phones",
    desc: "Designed for Tecno and Itel devices with large touch targets and simple screens. A nurse can learn the full system in under 60 seconds — no tech background needed.",
  },
];

function FeatureCard({ icon, title, desc, delay }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal flex gap-5 items-start"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-brand-pale flex items-center justify-center text-[1.35rem]">
        {icon}
      </div>
      <div>
        <h3 className="text-[1rem] font-bold text-navy mb-1.5">{title}</h3>
        <p className="text-[0.9rem] text-gray-500 leading-[1.7]">{desc}</p>
      </div>
    </div>
  );
}

export default function Features() {
  const headerRef = useReveal();

  return (
    <section id="features" className="py-28 px-5 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="reveal mb-16 max-w-2xl">
          <p className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-brand mb-3">
            Core features
          </p>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.7rem)] font-black tracking-tight text-navy leading-[1.12] mb-4">
            Everything a clinic needs.<br />Nothing it doesn't.
          </h2>
          <p className="text-[1.05rem] text-gray-500 leading-[1.75]">
            Built for the real constraints of Ugandan health facilities — low-end Android phones,
            intermittent connectivity, and staff with varying tech experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} {...f} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
