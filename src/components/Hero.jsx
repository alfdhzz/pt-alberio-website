import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Zap, Shield, Award, Download } from 'lucide-react';

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  left: Math.random() * 100,
  delay: Math.random() * 15,
  duration: Math.random() * 10 + 10,
  color: i % 3 === 0 ? '#c0000c' : i % 3 === 1 ? '#ff4444' : '#8b0009',
}));

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden hero-grid bg-bg-primary">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c0000c]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#c0000c]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c0000c]/3 rounded-full blur-3xl pointer-events-none"></div>

      {/* Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            background: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: 0.4,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left */}
          <div className={`space-y-8 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-start sm:items-center gap-2 bg-[#c0000c]/10 border border-[#c0000c]/30 rounded-2xl sm:rounded-full px-3 py-2 sm:px-4 sm:py-2">
              <Zap size={14} className="text-[#c0000c] shrink-0 mt-0.5 sm:mt-0" />
              <span className="text-text-primary text-[10px] sm:text-xs font-semibold tracking-widest uppercase leading-snug">
                Specialist Roll Forming & Cutting Laser
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] sm:leading-none">
              <span className="text-text-primary">ALBERIO</span>
              <br />
              <span className="text-gradient">PRATAMA</span>
              <br />
              <span className="text-text-primary text-3xl sm:text-4xl lg:text-5xl font-bold tracking-widest">ABADI</span>
            </h1>

            <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-lg">
              Kami adalah perusahaan terdepan dalam industri manufaktur baja,
              menghadirkan solusi <strong className="text-text-primary">Roll Forming</strong> dan{' '}
              <strong className="text-text-primary">Cutting Laser</strong> berteknologi tinggi untuk kebutuhan industri Anda.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 w-full">
              <button
                onClick={() => scrollTo('#services')}
                className="btn-red text-white font-bold px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl flex items-center justify-center gap-2 group cursor-pointer w-full sm:w-auto"
              >
                <span>Lihat Layanan</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="bg-glass text-text-primary font-bold px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl hover:border-[#c0000c]/40 transition-all duration-300 cursor-pointer w-full sm:w-auto text-center"
              >
                Konsultasi Gratis
              </button>
              <a
                href="/documents/Company-Profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-glass text-[#c0000c] border border-[#c0000c]/30 font-bold px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl hover:bg-[#c0000c]/10 transition-all duration-300 cursor-pointer w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <Download size={18} />
                <span>Company Profile</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 pt-4">
              {[
                { icon: Shield, label: 'Bergaransi' },
                { icon: Award, label: 'Berpengalaman' },
                { icon: Zap, label: 'Teknologi Modern' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#c0000c]/10 flex items-center justify-center">
                    <Icon size={14} className="text-[#c0000c]" />
                  </div>
                  <span className="text-text-secondary text-xs font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className={`relative flex items-center justify-center transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {/* Big circle background */}
            <div className="absolute w-80 h-80 lg:w-[480px] lg:h-[480px] rounded-full border border-[#c0000c]/10"></div>
            <div className="absolute w-64 h-64 lg:w-[380px] lg:h-[380px] rounded-full border border-[#c0000c]/20 animate-[spin_30s_linear_infinite]"></div>
            <div className="absolute w-48 h-48 lg:w-72 lg:h-72 rounded-full border border-[#c0000c]/30"></div>

            {/* Center logo container */}
            <div className="relative z-10 animate-float">
              <img 
                src="/LogoPT.jpeg" 
                alt="Logo PT Alberio Pratama Abadi" 
                className="w-56 h-56 lg:w-72 lg:h-72 object-contain rounded-2xl shadow-[0_0_40px_rgba(192,0,12,0.4)]"
              />

              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 bg-[#c0000c] rounded-2xl px-4 py-2 shadow-xl shadow-[#c0000c]/40">
                <p className="text-text-primary font-black text-xl leading-none">10+</p>
                <p className="text-red-200 text-xs">Tahun</p>
              </div>
              <div className="absolute -bottom-4 -left-6 bg-glass border border-[#c0000c]/30 rounded-2xl px-4 py-2">
                <p className="text-[#c0000c] font-black text-xl leading-none">500+</p>
                <p className="text-text-secondary text-xs">Proyek Selesai</p>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute top-8 left-8 w-2 h-2 bg-[#c0000c] rounded-full opacity-60"></div>
            <div className="absolute top-16 left-16 w-1 h-1 bg-[#c0000c] rounded-full opacity-40"></div>
            <div className="absolute bottom-8 right-8 w-2 h-2 bg-[#c0000c] rounded-full opacity-60"></div>
            <div className="absolute bottom-16 right-16 w-1 h-1 bg-[#c0000c] rounded-full opacity-40"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer" onClick={() => scrollTo('#about')}>
        <span className="text-text-secondary text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-border-color rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-[#c0000c] rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
