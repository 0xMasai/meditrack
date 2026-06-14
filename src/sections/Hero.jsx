import LogoMark from "../components/LogoMark";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-white pt-[68px]">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#EEF2F7 1px, transparent 1px), linear-gradient(90deg, #EEF2F7 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Radial fade over grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,transparent_30%,white_80%)] pointer-events-none" />

      {/* Blue glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl px-6 py-16">
        {/* Live badge */}
        <div className="inline-flex items-center gap-2 bg-brand-pale border border-brand-border text-brand text-[0.72rem] font-bold tracking-[0.08em] uppercase px-4 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-[pulseDot_2s_ease-in-out_infinite]" />
          Now live in Kampala clinics
        </div>

        {/* Logo mark */}
        <div className="flex justify-center mb-8">
          <LogoMark size={96} />
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(2.4rem,5.5vw,4.2rem)] font-black tracking-[-0.035em] leading-[1.08] text-navy mb-5 text-balance">
          Clinic management<br />
          built for{" "}
          <span className="text-brand relative">
            Uganda
            <svg
              className="absolute -bottom-1 left-0 w-full"
              viewBox="0 0 200 8"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M2 6 Q50 2 100 5 Q150 8 198 3"
                stroke="#1E8FE1"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                className="hb-path"
                style={{ strokeDasharray: 240, strokeDashoffset: 240 }}
              />
            </svg>
          </span>
        </h1>

        {/* Sub */}
        <p className="text-[clamp(1rem,2vw,1.2rem)] text-gray-500 max-w-[560px] mx-auto leading-[1.75] mb-10 text-balance">
          MediTrackUg replaces paper patient books with a real-time digital system designed
          for Level&nbsp;II &amp; III health facilities — so your team can focus on care, not paperwork.
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-3 flex-wrap mb-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand hover:bg-navy text-white font-bold text-[0.95rem] px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-brand/25"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Request a Demo
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 bg-white hover:bg-brand-pale text-navy font-semibold text-[0.95rem] px-7 py-3.5 rounded-xl border-2 border-gray-100 hover:border-brand transition-all duration-200"
          >
            See how it works
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Heartbeat signature line */}
        <div className="w-full max-w-[560px] mx-auto h-10">
          <svg
            viewBox="0 0 560 40"
            className="w-full h-full overflow-visible"
            aria-hidden="true"
          >
            <path
              className="hb-path"
              d="M0,20 L160,20 L178,20 L192,4 L206,36 L220,4 L234,36 L248,20 L270,20 L560,20"
              fill="none"
              stroke="#1E8FE1"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ strokeDasharray: 1200, strokeDashoffset: 1200 }}
            />
          </svg>
        </div>

        {/* Trusted by */}
        <p className="mt-6 text-[0.78rem] text-gray-400 font-medium tracking-wide uppercase">
          Trusted by health facilities in Kampala
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-300 animate-bounce">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
