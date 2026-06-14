import { useState } from "react";
import useReveal from "../components/useReveal";

export default function Contact() {
  const [form, setForm]     = useState({ name: "", clinic: "", phone: "", email: "" });
  const [sent, setSent]     = useState(false);
  const [loading, setLoad]  = useState(false);
  const headerRef = useReveal();

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    // Simulate async submit — replace with your preferred form handler
    // e.g. Formspree, EmailJS, or a Firebase write
    await new Promise((r) => setTimeout(r, 900));
    setSent(true);
    setLoad(false);
  };

  const inputClass =
    "w-full border-2 border-gray-100 focus:border-brand rounded-xl px-4 py-3.5 text-[0.95rem] text-gray-800 placeholder-gray-300 outline-none transition-colors duration-150 bg-white";

  return (
    <section id="contact" className="py-28 px-5 sm:px-8 bg-navy">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left — copy */}
        <div ref={headerRef} className="reveal">
          <p className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-brand-light mb-3">
            Get started
          </p>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black tracking-tight text-white leading-[1.1] mb-5">
            Ready to go<br />paperless?
          </h2>
          <p className="text-[1.05rem] text-white/60 leading-[1.75] mb-8">
            We set up MediTrackUg for your clinic in under a day. No servers, no IT team
            required — just a smartphone and an internet connection.
          </p>

          <ul className="space-y-4">
            {[
              "Free setup and onboarding",
              "Works on any Android phone",
              "Data stays in your clinic",
              "WhatsApp support in Luganda & English",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[0.9rem] text-white/70">
                <span className="w-5 h-5 rounded-full bg-brand/20 border border-brand flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-brand-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3">
            <a
              href="tel:+256700000000"
              className="inline-flex items-center gap-2.5 text-white/70 hover:text-white text-[0.9rem] font-medium transition-colors"
            >
              <span className="text-brand-light">📞</span> +256 701 373 284
            </a>
            <a
              href="mailto:hello@meditrackug.com"
              className="inline-flex items-center gap-2.5 text-white/70 hover:text-white text-[0.9rem] font-medium transition-colors"
            >
              <span className="text-brand-light">✉️</span> hello@meditrackug.com
            </a>
          </div>
        </div>

        {/* Right — form */}
        <div className="reveal" style={{ transitionDelay: "150ms" }}>
          {sent ? (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-white mb-2">Request received!</h3>
              <p className="text-white/60 text-[0.9rem]">
                We'll reach out within 24 hours to schedule your clinic setup.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 space-y-4"
            >
              <h3 className="text-lg font-bold text-white mb-1">Request a free demo</h3>
              <p className="text-white/50 text-[0.82rem] mb-2">
                We'll call you to set up a live walkthrough at your clinic.
              </p>

              <div>
                <label className="block text-[0.8rem] font-semibold text-white/60 mb-1.5">
                  Your name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={set("name")}
                  className={inputClass}
                  placeholder="Dr. Sarah Nakato"
                  required
                />
              </div>
              <div>
                <label className="block text-[0.8rem] font-semibold text-white/60 mb-1.5">
                  Clinic name
                </label>
                <input
                  type="text"
                  value={form.clinic}
                  onChange={set("clinic")}
                  className={inputClass}
                  placeholder="Nakawa Health Centre III"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[0.8rem] font-semibold text-white/60 mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={set("phone")}
                    className={inputClass}
                    placeholder="0700 123 456"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[0.8rem] font-semibold text-white/60 mb-1.5">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    className={inputClass}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand hover:bg-brand-light text-white font-bold py-4 rounded-xl text-[0.95rem] transition-all duration-200 disabled:opacity-60 active:scale-[0.98]"
              >
                {loading ? "Sending..." : "📧 Request Demo →"}
              </button>

              <p className="text-center text-[0.75rem] text-white/30">
                No spam. We'll only contact you about your demo request.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
