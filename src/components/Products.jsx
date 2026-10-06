import { useState, useRef, useEffect } from 'react';
import { Package, ChevronRight, X, Download, Search, PlayCircle } from 'lucide-react';

const categories = ['Semua', 'Mesin Roll Forming', 'Mesin Potong & Tekuk', 'Mesin Lainnya'];

const products = [
  {
    name: 'Mesin Canal C',
    category: 'Mesin Roll Forming',
    desc: 'Mesin pencetak profil Canal C / Baja Ringan presisi tinggi',
    specs: ['Otomatis penuh', 'Presisi tinggi', 'Custom ukuran'],
    badge: 'Bestseller',
    badgeColor: '#c0000c',
    videoUrl: '/videos/mesin canal c.mp4',
  },
  {
    name: 'Mesin Bending',
    category: 'Mesin Potong & Tekuk',
    desc: 'Mesin tekuk plat presisi untuk berbagai kebutuhan industri',
    specs: ['Akurasi tekuk', 'Sistem hidrolik', 'Tahan lama'],
    badge: 'Popular',
    badgeColor: '#8b0009',
    videoUrls: [
      '/videos/mesin bending1.mp4',
      '/videos/mesin bending2.mp4'
    ],
  },
  {
    name: 'Mesin Cutting Laser',
    category: 'Mesin Potong & Tekuk',
    desc: 'Mesin pemotong laser untuk plat besi dan material lain',
    specs: ['Pemotongan cepat', 'Akurasi ±0.1mm', 'Multi material'],
    badge: null,
    badgeColor: null,
    videoUrl: '/videos/mesin cutting laser.mp4',
  },
  {
    name: 'Mesin Furing',
    category: 'Mesin Roll Forming',
    desc: 'Mesin pencetak profil furing untuk rangka plafon',
    specs: ['Produksi cepat', 'Profil standar', 'Mudah dioperasikan'],
    badge: null,
    badgeColor: null,
    videoUrl: '/videos/mesin furing.mp4',
  },
  {
    name: 'Mesin Holo Sistem Jahit',
    category: 'Mesin Roll Forming',
    desc: 'Mesin pembuat besi hollow dengan sistem jahit (seaming)',
    specs: ['Sambungan kuat', 'Ukuran presisi', 'Sistem otomatis'],
    badge: null,
    badgeColor: null,
    videoUrl: '/videos/mesin holo sistem jahit.mp4',
  },
  {
    name: 'Mesin Nok',
    category: 'Mesin Roll Forming',
    desc: 'Mesin pencetak nok / wuwungan atap',
    specs: ['Desain rapi', 'Custom profil', 'Produksi stabil'],
    badge: null,
    badgeColor: null,
    videoUrl: '/videos/mesin nok.mp4',
  },
  {
    name: 'Mesin Seng Gelombang',
    category: 'Mesin Roll Forming',
    desc: 'Mesin pencetak atap seng gelombang',
    specs: ['Gelombang rapi', 'Lebar presisi', 'Kecepatan tinggi'],
    badge: null,
    badgeColor: null,
    videoUrl: '/videos/mesin seng gelombang.mp4',
  },
  {
    name: 'Mesin Talang Air',
    category: 'Mesin Roll Forming',
    desc: 'Mesin pencetak profil talang air',
    specs: ['Anti bocor', 'Tebal custom', 'Potong otomatis'],
    badge: null,
    badgeColor: null,
    videoUrl: '/videos/mesin talang air.mp4',
  },
  {
    name: 'Mesin Unistrut Chanel',
    category: 'Mesin Roll Forming',
    desc: 'Mesin pencetak profil unistrut chanel',
    specs: ['Tebal plat tinggi', 'Lubang presisi', 'Konstruksi kuat'],
    badge: null,
    badgeColor: null,
    videoUrl: '/videos/mesin unistrut chanel.mp4',
  },
  {
    name: 'Mesin Slitting Coil',
    category: 'Mesin Potong & Tekuk',
    desc: 'Mesin pembelah plat gulungan (coil) baja',
    specs: ['Pisau presisi', 'Kecepatan tinggi', 'Kapasitas besar'],
    badge: null,
    badgeColor: null,
    videoUrl: '/videos/Mesin Slitting coil.mp4',
  },
  {
    name: 'Mesin Tekuk Lempeng Pipa',
    category: 'Mesin Potong & Tekuk',
    desc: 'Mesin penekuk lempeng / profil pipa presisi',
    specs: ['Sudut akurat', 'Sistem hidrolik', 'Efisien'],
    badge: null,
    badgeColor: null,
    videoUrl: '/videos/mesin tekuk lempeng pipa.mp4',
  },
  {
    name: 'Mesin Tekuk Spandek',
    category: 'Mesin Potong & Tekuk',
    desc: 'Mesin tekuk hidrolik khusus untuk atap spandek',
    specs: ['Custom profil', 'Presisi tinggi', 'Otomatis'],
    badge: null,
    badgeColor: null,
    videoUrl: '/videos/mesin tekuk spandek.mp4',
  },
  {
    name: 'Mesin Pelurus',
    category: 'Mesin Lainnya',
    desc: 'Mesin pelurus plat (Leveling Machine)',
    specs: ['Hasil rata', 'Roller presisi', 'Heavy duty'],
    badge: null,
    badgeColor: null,
    videoUrl: '/videos/mesin pelurus.mp4',
  },
  {
    name: 'Mesin CNP Plat Besi',
    category: 'Mesin Roll Forming',
    desc: 'Mesin pencetak profil CNP presisi',
    specs: ['Otomatis penuh', 'Presisi tinggi', 'Heavy duty'],
    badge: null,
    badgeColor: null,
    videoUrl: '/videos/Mesin CNP Plat Besi.mp4',
  },
  {
    name: 'Mesin Potong Plat (Shearing)',
    category: 'Mesin Potong & Tekuk',
    desc: 'Mesin pemotong plat besi sistem shearing hidrolik',
    specs: ['Pisau tajam', 'Sistem hidrolik', 'Akurat'],
    badge: null,
    badgeColor: null,
    videoUrl: '/videos/Mesin Potong plat ( Shearing ).mp4',
  },
  {
    name: 'Mesin Recoiler',
    category: 'Mesin Lainnya',
    desc: 'Mesin penggulung ulang plat coil',
    specs: ['Kapasitas besar', 'Kecepatan stabil', 'Otomatis'],
    badge: null,
    badgeColor: null,
    imageUrl: '/videos/Mesin Recoiler.jpeg',
  },
  {
    name: 'Mesin Uncoiler',
    category: 'Mesin Lainnya',
    desc: 'Mesin pengurai plat coil baja',
    specs: ['Kapasitas berat', 'Sistem rem', 'Durabel'],
    badge: null,
    badgeColor: null,
    videoUrl: '/videos/Mesin Uncoiler.mp4',
  },
  {
    name: 'Mesin Atap Spandek',
    category: 'Mesin Roll Forming',
    desc: 'Mesin pencetak atap spandek',
    specs: ['Profil rapi', 'Lebar presisi', 'Kecepatan tinggi'],
    badge: null,
    badgeColor: null,
    videoUrl: '/videos/mesin atap spandek.mp4',
  },
  {
    name: 'Mesin Bondek',
    category: 'Mesin Roll Forming',
    desc: 'Mesin pencetak plat lantai bondek',
    specs: ['Tebal plat tinggi', 'Gelombang kuat', 'Presisi'],
    badge: null,
    badgeColor: null,
    videoUrl: '/videos/mesin bondek.mp4',
  },
  {
    name: 'Mesin Genteng Metal',
    category: 'Mesin Roll Forming',
    desc: 'Mesin pencetak genteng metal',
    specs: ['Profil akurat', 'Step presisi', 'Produksi cepat'],
    badge: null,
    badgeColor: null,
    videoUrl: '/videos/mesin genteng.mp4',
  },
  {
    name: 'Mesin Kiplok (Click)',
    category: 'Mesin Roll Forming',
    desc: 'Mesin pencetak atap kiplok / click',
    specs: ['Sistem kuncian', 'Anti bocor', 'Otomatis'],
    badge: null,
    badgeColor: null,
    videoUrl: '/videos/mesin kiplok atau click.mp4',
  },
  {
    name: 'Mesin Reng',
    category: 'Mesin Roll Forming',
    desc: 'Mesin pencetak profil reng baja ringan',
    specs: ['Otomatis penuh', 'Presisi tinggi', 'Produksi cepat'],
    badge: 'New',
    badgeColor: '#c0000c',
    videoUrl: '/videos/Mesin Reng.mp4',
  },
  {
    name: 'Mesin Holo Kotak & Pipa Besi',
    category: 'Mesin Roll Forming',
    desc: 'Mesin pencetak besi hollow kotak dan pipa bulat',
    specs: ['Multi fungsi', 'Heavy duty', 'Presisi'],
    badge: 'New',
    badgeColor: '#c0000c',
    videoUrls: [
      '/videos/Mesin holo kotak Besi dan pipa Besi1.mp4',
      '/videos/Mesin holo kotak Besi dan pipa Besi2.mp4'
    ],
  },
  {
    name: 'Jasa Emboss & Printing Merek',
    category: 'Mesin Lainnya',
    desc: 'Layanan penambahan emboss (cetak timbul) dan printing (cetak tinta) merek pada produk baja',
    specs: ['Custom logo/teks', 'Tahan lama', 'Rapi & Presisi'],
    badge: 'Jasa',
    badgeColor: '#8b0009',
    imageUrls: [
      '/videos/Contoh emboss merek dan printing1.jpeg',
      '/videos/Contoh emboss merek dan printing2.jpeg'
    ],
  },
];

const ProductCard = ({ product, index, setSelectedMedia }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const cardRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const nextImg = (e) => {
    e.stopPropagation();
    if (product.imageUrls) {
      setCurrentImg((prev) => (prev + 1) % product.imageUrls.length);
    } else if (product.videoUrls) {
      setCurrentImg((prev) => (prev + 1) % product.videoUrls.length);
    }
  };

  const prevImg = (e) => {
    e.stopPropagation();
    if (product.imageUrls) {
      setCurrentImg((prev) => (prev - 1 + product.imageUrls.length) % product.imageUrls.length);
    } else if (product.videoUrls) {
      setCurrentImg((prev) => (prev - 1 + product.videoUrls.length) % product.videoUrls.length);
    }
  };

  return (
    <div
      ref={cardRef}
      className="card-hover bg-glass rounded-2xl overflow-hidden group cursor-pointer reveal"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Product Visual */}
      <div 
        className="relative aspect-video bg-gradient-to-br from-[#1a1a1a] to-[#111] flex items-center justify-center overflow-hidden group-hover:cursor-zoom-in"
        onClick={(e) => {
          if (product.videoUrl) {
            e.stopPropagation();
            setSelectedMedia({ type: 'video', url: product.videoUrl });
          } else if (product.videoUrls) {
            e.stopPropagation();
            setSelectedMedia({ type: 'videoGallery', urls: product.videoUrls, index: currentImg });
          } else if (product.imageUrls) {
            e.stopPropagation();
            setSelectedMedia({ type: 'gallery', urls: product.imageUrls, index: currentImg });
          } else if (product.imageUrl) {
            e.stopPropagation();
            setSelectedMedia({ type: 'image', url: product.imageUrl });
          }
        }}
      >
        {product.videoUrl || product.videoUrls ? (
          <>
            {/* Play Icon Overlay (semi-transparent to show thumbnail) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 group-hover:opacity-0 transition-opacity duration-300 z-10 pointer-events-none">
               <PlayCircle size={48} className="mb-2 text-white/90 drop-shadow-lg" />
               <span className="text-[10px] tracking-widest font-bold uppercase text-white drop-shadow-lg">Putar Video</span>
            </div>
            <video 
              key={product.videoUrl || product.videoUrls[currentImg]}
              src={product.videoUrl || product.videoUrls[currentImg]} 
              loop 
              muted 
              playsInline
              preload={isIntersecting ? "metadata" : "none"}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => {
                e.target.pause();
              }}
            />
            {product.videoUrls && product.videoUrls.length > 1 && (
              <>
                <button 
                  onClick={prevImg}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#c0000c] text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
                >
                  <ChevronRight size={16} className="rotate-180" />
                </button>
                <button 
                  onClick={nextImg}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#c0000c] text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
                >
                  <ChevronRight size={16} />
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                  {product.videoUrls.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${currentImg === idx ? 'bg-[#c0000c] w-3' : 'bg-white/50'}`}
                    ></div>
                  ))}
                </div>
              </>
            )}
          </>
        ) : product.imageUrls ? (
          <>
            <img 
              src={product.imageUrls[currentImg]} 
              alt={`${product.name} ${currentImg + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Carousel Controls */}
            {product.imageUrls.length > 1 && (
              <>
                <button 
                  onClick={prevImg}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#c0000c] text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <ChevronRight size={16} className="rotate-180" />
                </button>
                <button 
                  onClick={nextImg}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#c0000c] text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <ChevronRight size={16} />
                </button>
                {/* Dots */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                  {product.imageUrls.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${currentImg === idx ? 'bg-[#c0000c] w-3' : 'bg-white/50'}`}
                    ></div>
                  ))}
                </div>
              </>
            )}
          </>
        ) : product.imageUrl ? (
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-[#c0000c]/5 to-transparent group-hover:from-[#c0000c]/15 transition-all duration-300"></div>
            <div className="relative z-10 flex flex-col items-center gap-2">
              <Package size={40} className="text-[#c0000c]/60 group-hover:text-[#c0000c] transition-colors duration-300" />
              <div className="flex gap-1">
                {[...Array(3)].map((_, j) => (
                  <div key={j} className="w-2 h-8 bg-gradient-to-b from-[#c0000c]/40 to-[#c0000c]/10 rounded-sm group-hover:bg-gradient-to-b group-hover:from-[#c0000c]/80 group-hover:to-[#c0000c]/30 transition-all duration-300" style={{ height: `${20 + j * 8}px` }}></div>
                ))}
              </div>
            </div>
          </>
        )}
        {product.badge && (
          <div
            className="absolute top-3 right-3 text-text-primary text-xs font-bold px-2 py-1 rounded-full z-20"
            style={{ background: product.badgeColor }}
          >
            {product.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-[#c0000c] text-xs font-semibold tracking-wide uppercase">{product.category}</span>
        <h3 className="text-text-primary font-bold text-base mt-1 mb-2">{product.name}</h3>
        <p className="text-text-secondary text-xs leading-relaxed mb-3">{product.desc}</p>

        {/* Specs */}
        <div className="space-y-1 mb-4">
          {product.specs.map((spec) => (
            <div key={spec} className="flex items-center gap-1.5">
              <div className="w-1 h-1 bg-[#c0000c] rounded-full"></div>
              <span className="text-text-secondary text-xs">{spec}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-[#c0000c] text-xs font-semibold group-hover:gap-3 transition-all duration-300 cursor-pointer"
          >
            <span>Minta Penawaran</span>
            <ChevronRight size={12} />
          </button>

          <a
            href={product.videoUrl || (product.videoUrls ? product.videoUrls[currentImg] : (product.imageUrls ? product.imageUrls[currentImg] : product.imageUrl))}
            download
            className="flex items-center gap-1.5 text-text-secondary hover:text-[#c0000c] transition-colors duration-300 text-xs font-medium bg-border-color/30 hover:bg-[#c0000c]/10 px-3 py-1.5 rounded-full"
            title="Download Media"
            onClick={(e) => e.stopPropagation()}
          >
            <Download size={14} />
            <span>Unduh</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Products() {
  const [activeTab, setActiveTab] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMedia, setSelectedMedia] = useState(null);

  const filtered = products.filter(p => {
    const matchCategory = activeTab === 'Semua' || p.category === activeTab;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section id="products" className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#c0000c]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-line"></div>
            <span className="text-[#c0000c] text-sm font-semibold tracking-widest uppercase">Produk Kami</span>
            <div className="section-line"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-text-primary">
            Katalog
            <span className="text-gradient"> Produk</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto leading-relaxed">
            Tersedia berbagai jenis produk baja berkualitas tinggi untuk memenuhi kebutuhan konstruksi dan industri Anda.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col items-center gap-6 mb-10 reveal delay-100">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeTab === cat
                    ? 'bg-[#c0000c] text-text-primary shadow-lg shadow-[#c0000c]/30'
                    : 'bg-glass text-text-secondary hover:text-text-primary hover:border-[#c0000c]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search size={18} className="text-text-secondary" />
            </div>
            <input
              type="text"
              placeholder="Cari nama mesin..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-glass border border-border-color rounded-full text-text-primary placeholder-text-secondary focus:outline-none focus:border-[#c0000c] focus:ring-1 focus:ring-[#c0000c] transition-all duration-300"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, i) => (
            <ProductCard 
              key={product.name} 
              product={product} 
              index={i} 
              setSelectedMedia={setSelectedMedia} 
            />
          ))}
        </div>
      </div>

      {/* Media Modal */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedMedia(null)}
        >
          <div 
            className="relative w-full max-w-6xl bg-black rounded-xl overflow-hidden shadow-2xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              <a 
                href={selectedMedia.type === 'gallery' || selectedMedia.type === 'videoGallery' ? selectedMedia.urls[selectedMedia.index] : selectedMedia.url}
                download
                className="p-2 bg-black/50 hover:bg-[#c0000c] text-white rounded-full transition-colors cursor-pointer flex items-center justify-center"
                title="Download Media"
                onClick={(e) => e.stopPropagation()}
              >
                <Download size={24} />
              </a>
              <button 
                onClick={() => setSelectedMedia(null)}
                className="p-2 bg-black/50 hover:bg-[#c0000c] text-white rounded-full transition-colors cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>

            {(selectedMedia.type === 'gallery' || selectedMedia.type === 'videoGallery') && (
              <>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedMedia(prev => ({ ...prev, index: (prev.index - 1 + prev.urls.length) % prev.urls.length }));
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#c0000c] text-white p-3 rounded-full transition-all duration-300 z-10 cursor-pointer"
                >
                  <ChevronRight size={24} className="rotate-180" />
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedMedia(prev => ({ ...prev, index: (prev.index + 1) % prev.urls.length }));
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#c0000c] text-white p-3 rounded-full transition-all duration-300 z-10 cursor-pointer"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {selectedMedia.type === 'video' ? (
              <video 
                src={selectedMedia.url} 
                controls 
                autoPlay 
                className="w-full h-auto max-h-[90vh] object-contain"
              />
            ) : selectedMedia.type === 'videoGallery' ? (
              <video 
                key={selectedMedia.urls[selectedMedia.index]}
                src={selectedMedia.urls[selectedMedia.index]} 
                controls 
                autoPlay 
                className="w-full h-auto max-h-[90vh] object-contain"
              />
            ) : selectedMedia.type === 'gallery' ? (
              <img 
                src={selectedMedia.urls[selectedMedia.index]} 
                alt="Product Fullscreen"
                className="w-full h-auto max-h-[90vh] object-contain"
              />
            ) : (
              <img 
                src={selectedMedia.url} 
                alt="Product Fullscreen"
                className="w-full h-auto max-h-[90vh] object-contain"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
