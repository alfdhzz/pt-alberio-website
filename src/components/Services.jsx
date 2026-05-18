import { useState } from 'react';
import {
  Layers, Crosshair, ArrowRight, ShoppingCart, PenTool, Wrench, Cog
} from 'lucide-react';

const services = [
  {
    icon: ShoppingCart,
    title: 'Penjualan Mesin Baja Ringan',
    desc: 'Menyediakan berbagai jenis mesin baja ringan berkualitas tinggi dan bergaransi untuk mendukung kebutuhan industri konstruksi dan manufaktur Anda.',
    features: ['Kualitas Terjamin', 'Beragam Tipe Mesin', 'Garansi Resmi', 'Harga Kompetitif'],
    color: '#c0000c',
  },
  {
    icon: Layers,
    title: 'Roll Forming Specialist',
    desc: 'Spesialis dalam pembentukan baja lembaran secara kontinu menggunakan mesin roll presisi tinggi untuk menghasilkan profil baja yang kuat dan konsisten.',
    features: ['Profil C & Z Purlin', 'Metal Deck', 'Custom Profile', 'Toleransi Ketat'],
    color: '#e00010',
  },
  {
    icon: PenTool,
    title: 'Desain Manufaktur Custom',
    desc: 'Melayani perancangan dan produksi komponen baja khusus yang disesuaikan sepenuhnya dengan spesifikasi teknis dan kebutuhan proyek Anda.',
    features: ['Sesuai Kebutuhan', 'Engineer Ahli', 'Pembuatan Prototipe', 'Analisis DFM'],
    color: '#c0000c',
  },
  {
    icon: Crosshair,
    title: 'Laser Cutting Presisi Tinggi',
    desc: 'Pemotongan material logam menggunakan teknologi laser terkini dengan tingkat akurasi maksimal untuk memproses desain yang sangat kompleks sekalipun.',
    features: ['Akurasi ±0.1mm', 'Berbagai Material', 'Desain Detail', 'CAD/CAM Ready'],
    color: '#e00010',
  },
  {
    icon: Wrench,
    title: 'Service & Maintenance Mesin Industri',
    desc: 'Layanan perawatan berkala dan perbaikan darurat mesin industri untuk memastikan performa produksi tetap optimal dan mencegah waktu henti produksi.',
    features: ['Teknisi Ahli', 'Respon Darurat', 'Perawatan Rutin', 'Penyelesaian Masalah'],
    color: '#c0000c',
  },
  {
    icon: Cog,
    title: 'Penyedia Sparepart Mesin Lengkap',
    desc: 'Distributor suku cadang asli dan berkualitas terbaik untuk berbagai jenis mesin manufaktur baja guna menjaga usia pakai dan keandalan operasional pabrik.',
    features: ['Suku Cadang Asli', 'Stok Komprehensif', 'Ketersediaan Cepat', 'Support Teknis'],
    color: '#e00010',
  },
];

export default function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="services" className="py-24 bg-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#c0000c]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-line"></div>
            <span className="text-[#c0000c] text-sm font-semibold tracking-widest uppercase">Layanan Kami</span>
            <div className="section-line"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-text-primary">
            Solusi Manufaktur
            <span className="text-gradient"> Lengkap</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto leading-relaxed">
            Kami menyediakan layanan manufaktur baja komprehensif dari proses roll forming,
            cutting laser, hingga pengiriman ke lokasi Anda.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="card-hover bg-glass rounded-3xl p-7 cursor-pointer group relative overflow-hidden"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Hover BG */}
                <div className={`absolute inset-0 bg-gradient-to-br from-[#c0000c]/5 to-transparent rounded-3xl transition-opacity duration-400 ${hovered === i ? 'opacity-100' : 'opacity-0'}`}></div>

                {/* Icon */}
                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}
                  >
                    <Icon size={26} style={{ color: service.color }} />
                  </div>

                  <h3 className="text-text-primary font-bold text-xl mb-3 group-hover:text-[#c0000c] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">{service.desc}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 bg-[#c0000c] rounded-full"></div>
                        <span className="text-text-secondary text-xs">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-[#c0000c] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Pelajari lebih lanjut</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
