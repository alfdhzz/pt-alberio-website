const clients = [
  "PT. Fumira",
  "PT. Sumber Surya Mandiri",
  "PT. Ardon Inti Presisi",
  "PT. Bunka Panca Karya",
  "PT. Mourel",
  "PT. Brikplus Nias",
  "PT. Cirebon Steel Group",
  "PT. Hirale Manufactur",
  "PT. BJ Truss",
  "PT. Amora",
  "PT. Cahaya Berkah Truss",
  "PT. Permata Sinar Utama",
  "PT. Lima Berjaya Persada",
  "AFCO Group"
];

export default function Clients() {
  return (
    <section className="py-20 bg-bg-secondary relative overflow-hidden border-y border-border-color">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#c0000c]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-[#ff4444]/5 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Fade Gradients at edges for seamless scroll */}
      <div className="absolute inset-y-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-bg-secondary to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-bg-secondary to-transparent z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mb-12">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-line w-12"></div>
            <span className="text-[#c0000c] text-sm font-semibold tracking-widest uppercase">Mitra Kami</span>
            <div className="section-line w-12"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-text-primary uppercase tracking-wide">
            KAMI TELAH BEKERJA SAMA DENGAN
          </h2>
        </div>
      </div>

      <div className="flex overflow-hidden group py-4">
        <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused] w-max">
          {/* Double the array for seamless infinite scrolling */}
          {[...clients, ...clients].map((client, index) => (
            <div 
              key={index} 
              className="mx-4 sm:mx-6 px-8 py-5 rounded-2xl border border-[#ff4444] bg-[#c0000c]/5 shadow-[0_0_15px_rgba(255,68,68,0.15)] flex items-center justify-center min-w-[200px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_25px_rgba(255,68,68,0.35)] hover:bg-[#c0000c]/10 cursor-default"
            >
              <span className="text-text-primary font-bold text-base sm:text-lg tracking-wide">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
