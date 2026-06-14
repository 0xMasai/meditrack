const STATS = [
  { num: "<30s",  label: "Patient registered"    },
  { num: "100%",  label: "Real-time updates"      },
  { num: "0",     label: "Lost patient records"   },
  { num: "4",     label: "Staff roles supported"  },
];

export default function StatsStrip() {
  return (
    <div className="bg-navy py-14 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
        {STATS.map(({ num, label }) => (
          <div
            key={label}
            className="bg-navy hover:bg-navy-light transition-colors duration-200 px-8 py-10 text-center"
          >
            <div className="text-[2.6rem] font-black text-brand-light tracking-tighter leading-none mb-2">
              {num}
            </div>
            <div className="text-[0.78rem] font-medium text-white/50 tracking-[0.07em] uppercase">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
