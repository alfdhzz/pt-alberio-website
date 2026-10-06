import { Target, Eye, CheckCircle2 } from 'lucide-react';

export default function About() {
  const values = [
    'Presisi & Akurasi Tinggi',
    'Material Berkualitas Premium',
    'Tim Profesional Berpengalaman',
    'Tepat Waktu & Terpercaya',
    'Harga Kompetitif',
    'Layanan Purna Jual',
  ];

  return (
    <section id="about" className="py-24 bg-bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#c0000c]/3 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main card */}
              <div className="bg-glass rounded-3xl p-8 border border-border-color">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#c0000c]/10 rounded-2xl p-5 border border-[#c0000c]/20">
                    <p className="text-[#c0000c] font-black text-3xl">10+</p>
                    <p className="text-text-secondary text-sm mt-1">Tahun Pengalaman</p>
                  </div>
                  <div className="bg-white/3 rounded-2xl p-5 border border-border-color">
                    <p className="text-text-primary font-black text-3xl">500+</p>
                    <p className="text-text-secondary text-sm mt-1">Klien Puas</p>
                  </div>
                  <div className="bg-white/3 rounded-2xl p-5 border border-border-color">
                    <p className="text-text-primary font-black text-3xl">1000+</p>
                    <p className="text-text-secondary text-sm mt-1">Proyek Selesai</p>
                  </div>
                  <div className="bg-[#c0000c]/10 rounded-2xl p-5 border border-[#c0000c]/20">
                    <p className="text-[#c0000c] font-black text-3xl">24/7</p>
                    <p className="text-text-secondary text-sm mt-1">Support</p>
                  </div>
                </div>

                {/* Bar chart visual */}
                <div className="space-y-3">
                  {[
                    { label: 'Roll Forming', value: 95 },
                    { label: 'Cutting Laser', value: 92 },
                    { label: 'Kepuasan Klien', value: 98 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-text-secondary">{item.label}</span>
                        <span className="text-[#c0000c] font-bold">{item.value}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#c0000c] to-[#ff4444] rounded-full"
                          style={{ width: `${item.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


            </div>

            {/* BG orb */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#c0000c]/10 rounded-full blur-2xl pointer-events-none"></div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 reveal delay-100">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="section-line"></div>
                <span className="text-[#c0000c] text-sm font-semibold tracking-widest uppercase">Tentang Kami</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-text-primary leading-tight">
                Solusi Baja
                <span className="text-gradient"> Terpercaya</span>
                <br />untuk Industri Anda
              </h2>
            </div>

            <p className="text-text-secondary leading-relaxed text-base">
              PT Alberio Pratama Abadi adalah perusahaan manufaktur baja terkemuka yang berspesialisasi dalam
              layanan <strong className="text-text-primary">Roll Forming</strong> dan <strong className="text-text-primary">Cutting Laser</strong>.
              Dengan pengalaman lebih dari satu dekade, kami telah melayani ratusan klien dari berbagai sektor industri
              di seluruh Indonesia.
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-glass-red rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Target size={18} className="text-[#c0000c]" />
                  <span className="text-text-primary font-bold text-sm">Misi</span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Memberikan produk baja berkualitas tinggi dengan presisi maksimal dan harga terjangkau.
                </p>
              </div>
              <div className="bg-glass rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Eye size={18} className="text-[#c0000c]" />
                  <span className="text-text-primary font-bold text-sm">Visi</span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Menjadi mitra manufaktur baja terpercaya dan terdepan di Asia Tenggara.
                </p>
              </div>
            </div>

            {/* Values list */}
            <div className="grid grid-cols-2 gap-2">
              {values.map((val) => (
                <div key={val} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#c0000c] shrink-0" />
                  <span className="text-text-secondary text-sm">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
