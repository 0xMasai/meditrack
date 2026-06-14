import useReveal from "../components/useReveal";

const PLANS = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    desc: "For single-room clinics getting started.",
    features: [
      "Up to 50 patients / month",
      "1 clinic location",
      "2 user accounts",
      "Reception + Doctor roles",
      "Basic visit queue",
      "Email support",
    ],
    cta: "Get started free",
    ctaHref: "#contact",
    highlight: false,
  },
  {
    name: "Clinic",
    price: "UGX 350k",
    period: "/ month",
    desc: "The full system for a busy Level II or III facility.",
    features: [
      "Unlimited patients",
      "1 clinic location",
      "10 user accounts",
      "All 4 staff roles",
      "Lab module + real-time results",
      "Admin dashboard + charts",
      "Priority WhatsApp support",
    ],
    cta: "Request a demo",
    ctaHref: "#contact",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For hospital groups and multi-site networks.",
    features: [
      "Unlimited patients & visits",
      "Multiple clinic locations",
      "Unlimited user accounts",
      "Custom roles & permissions",
      "Data export & reporting",
      "Dedicated onboarding",
      "SLA-backed support",
    ],
    cta: "Contact us",
    ctaHref: "#contact",
    highlight: false,
  },
];

function PlanCard({ plan, delay }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal relative rounded-2xl p-8 flex flex-col transition-all duration-200 ${
        plan.highlight
          ? "bg-navy text-white shadow-2xl shadow-navy/30 scale-[1.02]"
          : "bg-white border-2 border-gray-100 hover:border-brand/30 hover:shadow-lg"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {plan.highlight && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand text-white text-[0.7rem] font-bold tracking-[0.08em] uppercase px-4 py-1.5 rounded-full shadow">
          Most popular
        </div>
      )}

      <div className="mb-6">
        <p className={`text-[0.75rem] font-bold tracking-[0.1em] uppercase mb-1 ${plan.highlight ? "text-brand-light" : "text-brand"}`}>
          {plan.name}
        </p>
        <div className="flex items-end gap-1 mb-2">
          <span className={`text-[2.4rem] font-black tracking-tight leading-none ${plan.highlight ? "text-white" : "text-navy"}`}>
            {plan.price}
          </span>
          {plan.period && (
            <span className={`text-[0.9rem] mb-1 ${plan.highlight ? "text-white/50" : "text-gray-400"}`}>
              {plan.period}
            </span>
          )}
        </div>
        <p className={`text-[0.875rem] ${plan.highlight ? "text-white/60" : "text-gray-500"}`}>
          {plan.desc}
        </p>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[0.875rem]">
            <svg
              className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? "text-brand-light" : "text-brand"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            <span className={plan.highlight ? "text-white/80" : "text-gray-600"}>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={plan.ctaHref}
        className={`block text-center font-bold text-[0.9rem] py-3.5 rounded-xl transition-all duration-200 ${
          plan.highlight
            ? "bg-brand hover:bg-brand-light text-white"
            : "bg-gray-50 hover:bg-brand-pale text-navy border-2 border-gray-100 hover:border-brand"
        }`}
      >
        {plan.cta}
      </a>
    </div>
  );
}

export default function Pricing() {
  const headerRef = useReveal();

  return (
    <section id="pricing" className="py-28 px-5 sm:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-16">
          <p className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-brand mb-3">
            Pricing
          </p>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.7rem)] font-black tracking-tight text-navy leading-[1.12] mb-4">
            Simple, transparent pricing.
          </h2>
          <p className="text-[1.05rem] text-gray-500 leading-[1.75] max-w-xl mx-auto">
            Start free. Upgrade when you're ready. No hidden fees, no annual lock-in.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} delay={i * 100} />
          ))}
        </div>

        <p className="text-center text-[0.8rem] text-gray-400 mt-10">
          All prices in Ugandan Shillings. Billing monthly. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
