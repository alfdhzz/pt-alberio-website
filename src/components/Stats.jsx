import { useEffect, useRef, useState } from 'react';
import { Users, Briefcase, Trophy, Clock } from 'lucide-react';

const stats = [
  { icon: Clock, value: 10, suffix: '+', label: 'Tahun Pengalaman', desc: 'Melayani industri baja sejak 2014' },
  { icon: Users, value: 500, suffix: '+', label: 'Klien Aktif', desc: 'Dari berbagai sektor industri' },
  { icon: Briefcase, value: 1000, suffix: '+', label: 'Proyek Selesai', desc: 'Dengan tingkat kepuasan tinggi' },
  { icon: Trophy, value: 98, suffix: '%', label: 'Tingkat Kepuasan', desc: 'Klien merekomendasikan kami' },
];

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

function StatCard({ stat, started }) {
  const count = useCountUp(stat.value, 2000, started);
  const Icon = stat.icon;

  return (
    <div className="relative bg-glass rounded-3xl p-8 text-center group card-hover border border-border-color hover:border-[#c0000c]/20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#c0000c]/3 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

      <div className="relative z-10">
        <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-[#c0000c]/10 border border-[#c0000c]/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#c0000c]/20 transition-all duration-300">
          <Icon size={28} className="text-[#c0000c]" />
        </div>
        <div className="text-5xl font-black text-text-primary mb-1">
          {count}
          <span className="text-[#c0000c]">{stat.suffix}</span>
        </div>
        <div className="text-text-primary font-bold text-base mb-2">{stat.label}</div>
        <div className="text-text-secondary text-sm">{stat.desc}</div>
      </div>
    </div>
  );
}

export default function Stats() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" ref={ref} className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Red stripe */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c0000c] to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c0000c] to-transparent"></div>

      {/* Big number bg decoration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[20rem] font-black text-text-primary/[0.015] leading-none">APA</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-line"></div>
            <span className="text-[#c0000c] text-sm font-semibold tracking-widest uppercase">Pencapaian Kami</span>
            <div className="section-line"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-text-primary">
            Angka yang
            <span className="text-gradient"> Berbicara</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} started={started} />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#c0000c] to-[#8b0009] rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 50%, white 0%, transparent 50%)'}}></div>
          <div className="relative z-10">
            <h3 className="text-text-primary font-black text-3xl mb-3">Siap Bekerja Sama?</h3>
            <p className="text-red-200 mb-6 max-w-xl mx-auto">
              Hubungi tim kami sekarang untuk konsultasi gratis dan penawaran terbaik untuk kebutuhan manufaktur Anda.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-[#c0000c] font-black px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors duration-300 cursor-pointer text-sm"
            >
              Mulai Sekarang →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
