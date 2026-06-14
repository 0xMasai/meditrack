import useReveal from "../components/useReveal";

const STEPS = [
  {
    icon: "🏥",
    role: "Reception",
    title: "Register & check in",
    desc: "New or returning patient is registered, visit type selected, and department assigned in under 30 seconds.",
    color: "border-brand bg-white",
  },
  {
    icon: "👨‍⚕️",
    role: "Doctor",
    title: "Review & consult",
    desc: "Full patient history shown instantly. Doctor records symptoms, diagnosis, and treatment — lab tests visible throughout.",
    color: "border-brand bg-white",
  },
  {
    icon: "🔬",
    role: "Laboratory",
    title: "Test & report",
    desc: "Lab requests appear automatically. Results entered once, visible on the doctor's screen in real time.",
    color: "border-brand bg-white",
  },
  {
    icon: "📊",
    role: "Admin",
    title: "Monitor & report",
    desc: "Daily stats, visit volumes, and lab backlogs tracked automatically. No end-of-day manual counting.",
    color: "border-brand bg-white",
  },
];

export default function Journey() {
  const headerRef = useReveal();

  return (
    <section id="journey" className="py-28 px-5 sm:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="reveal mb-16 max-w-2xl">
          <p className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-brand mb-3">
            Patient journey
          </p>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.7rem)] font-black tracking-tight text-navy leading-[1.12] mb-4">
            From arrival to discharge — tracked.
          </h2>
          <p className="text-[1.05rem] text-gray-500 leading-[1.75]">
            Every handoff is visible to every team member in real time. No phone calls between
            departments, no confusion about patient status.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-brand-pale via-brand to-brand-pale" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {STEPS.map(({ icon, role, title, desc }, i) => {
              const ref = useReveal();
              return (
                <div
                  key={title}
                  ref={ref}
                  className="reveal text-center"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Circle */}
                  <div className="relative z-10 w-14 h-14 rounded-full border-[3px] border-brand bg-white flex items-center justify-center text-[1.4rem] mx-auto mb-5 shadow-md shadow-brand/10">
                    {icon}
                  </div>
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-brand/30 transition-all duration-200">
                    <p className="text-[0.7rem] font-bold tracking-[0.1em] uppercase text-brand mb-1.5">
                      {role}
                    </p>
                    <h3 className="text-[0.95rem] font-bold text-navy mb-2">{title}</h3>
                    <p className="text-[0.83rem] text-gray-500 leading-[1.65]">{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
