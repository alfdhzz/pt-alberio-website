import { useState } from 'react';
import { Truck, MapPin, X, ChevronRight, Download } from 'lucide-react';

const deliveries = [
  '/bukti pengiriman/testimoni (1).jpeg',
  '/bukti pengiriman/testimoni (2).jpeg',
  '/bukti pengiriman/testimoni (3).jpeg',
  '/bukti pengiriman/testimoni (4).jpeg',
  '/bukti pengiriman/testimoni (5).jpeg',
  '/bukti pengiriman/testimoni (6).jpeg',
  '/bukti pengiriman/testimoni (7).jpeg',
  '/bukti pengiriman/testimoni (8).jpeg',
];

export default function Deliveries() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <section id="deliveries" className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#c0000c]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-line"></div>
            <span className="text-[#c0000c] text-sm font-semibold tracking-widest uppercase flex items-center gap-2">
              <Truck size={16} /> Bukti Pengiriman
            </span>
            <div className="section-line"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-text-primary mb-6">
            Jangkauan <span className="text-gradient">Seluruh Indonesia</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed text-lg">
            Kami telah dipercaya oleh berbagai perusahaan manufaktur dan kontraktor di seluruh penjuru Nusantara. 
            Mesin yang Anda pesan dipastikan sampai di lokasi pabrik Anda dengan aman dan tepat waktu.
          </p>
          
          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <div className="flex items-center gap-2 bg-[#c0000c]/10 border border-[#c0000c]/20 text-[#c0000c] px-5 py-2.5 rounded-full font-bold text-sm">
              <MapPin size={18} />
              Sabang sampai Merauke
            </div>
            <div className="flex items-center gap-2 bg-glass border border-border-color px-5 py-2.5 rounded-full font-bold text-sm text-text-primary shadow-sm">
              <Truck size={18} className="text-text-secondary" />
              Pengiriman Aman
            </div>
          </div>
        </div>

        {/* Grid Bukti Pengiriman */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {deliveries.map((img, i) => (
            <div 
              key={i}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group reveal shadow-sm border border-border-color bg-glass"
              style={{ transitionDelay: `${(i % 4) * 100}ms` }}
              onClick={() => setSelectedIndex(i)}
            >
              <img 
                src={img} 
                alt={`Bukti Pengiriman ${i+1}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-5">
                <span className="text-white text-xs font-bold tracking-[0.2em] uppercase drop-shadow-md">Perbesar</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Foto */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md transition-opacity"
          onClick={() => setSelectedIndex(null)}
        >
          <div 
            className="relative w-full max-w-5xl rounded-xl overflow-hidden flex items-center justify-center animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4 z-20 flex gap-2">
              <a 
                href={deliveries[selectedIndex]}
                download
                className="p-3 bg-black/60 hover:bg-[#c0000c] text-white rounded-full transition-colors cursor-pointer flex items-center justify-center"
                title="Download Media"
                onClick={(e) => e.stopPropagation()}
              >
                <Download size={24} />
              </a>
              <button 
                onClick={() => setSelectedIndex(null)}
                className="p-3 bg-black/60 hover:bg-[#c0000c] text-white rounded-full transition-colors cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(prev => (prev - 1 + deliveries.length) % deliveries.length);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#c0000c] text-white p-3 rounded-full transition-all duration-300 z-20 cursor-pointer"
            >
              <ChevronRight size={24} className="rotate-180" />
            </button>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(prev => (prev + 1) % deliveries.length);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#c0000c] text-white p-3 rounded-full transition-all duration-300 z-20 cursor-pointer"
            >
              <ChevronRight size={24} />
            </button>

            <img 
              src={deliveries[selectedIndex]} 
              alt="Full Bukti Pengiriman"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg drop-shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
