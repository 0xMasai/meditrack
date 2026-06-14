import useReveal from "../components/useReveal";

const ROLES = [
  {
    icon: "🏥",
    title: "Receptionist",
    desc: "Registers new patients in two steps, searches existing records by name or phone, and starts visits with one tap. No training beyond 60 seconds.",
    tags: ["Patient registration", "Visit queue", "Patient search"],
    accent: "hover:border-blue-300",
  },
  {
    icon: "👨‍⚕️",
    title: "Doctor / Clinician",
    desc: "Opens any patient to see all past visits and lab results instantly, then records symptoms, diagnosis, and treatment in one form. History is always two taps away.",
    tags: ["Patient history", "Consultation notes", "Lab visibility"],
    accent: "hover:border-green-300",
  },
  {
    icon: "🔬",
    title: "Lab Technician",
    desc: "All pending test requests appear automatically — no verbal handoffs. Enter results directly; they update on the doctor's screen in real time.",
    tags: ["Pending queue", "Enter results", "Completion tracking"],
    accent: "hover:border-purple-300",
  },
  {
    icon: "📊",
    title: "Administrator",
    desc: "Live dashboard shows today's patients, visit types, active queue, pending labs, and 14-day trend charts — all updating without any manual entry.",
    tags: ["Live dashboard", "Daily stats", "Trend charts"],
    accent: "hover:border-orange-300",
  },
];

function RoleCard({ icon, title, desc, tags, accent, delay }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal bg-white border-2 border-gray-100 ${accent} rounded-2xl p-7 transition-all duration-200 hover:shadow-lg`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="text-[1.9rem] mb-4 block">{icon}</span>
      <h3 className="text-[1.02rem] font-bold text-navy mb-2.5">{title}</h3>
      <p className="text-[0.875rem] text-gray-500 leading-[1.7] mb-5">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="text-[0.7rem] font-semibold bg-brand-pale text-brand px-3 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Roles() {
  const headerRef = useReveal();

  return (
    <section id="roles" className="py-28 px-5 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="reveal mb-16 max-w-2xl">
          <p className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-brand mb-3">
            Built for every role
          </p>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.7rem)] font-black tracking-tight text-navy leading-[1.12] mb-4">
            One system.<br />Four roles. Zero confusion.
          </h2>
          <p className="text-[1.05rem] text-gray-500 leading-[1.75]">
            Each staff member sees only what's relevant to their work. Access is controlled by role,
            not by training complexity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {ROLES.map((r, i) => (
            <RoleCard key={r.title} {...r} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
