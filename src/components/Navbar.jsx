import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar({ isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'services', 'products', 'calculator', 'stats', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Beranda' },
    { href: '#about', label: 'Tentang Kami' },
    { href: '#services', label: 'Layanan' },
    { href: '#products', label: 'Produk' },
    { href: '#calculator', label: 'Kalkulator' },
    { href: '#contact', label: 'Kontak' },
  ];

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[var(--nav-bg)] backdrop-blur-xl border-b border-border-color shadow-2xl shadow-black/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => scrollTo('#home')} className="flex items-center gap-2 group cursor-pointer">
            <div className="text-left flex flex-col justify-center">
              <span className="text-text-primary font-black text-sm sm:text-base md:text-xl tracking-wide group-hover:text-[#c0000c] transition-colors duration-300 leading-tight">
                PT. ALBERIO PRATAMA ABADI
              </span>
              <span className="text-[#c0000c] font-bold text-[7px] sm:text-[9px] md:text-[10px] tracking-widest uppercase mt-0.5 leading-tight">
                Specialist Roll Forming & Cutting Laser
              </span>
            </div>
          </button>

          {/* Desktop Links & Theme Toggle */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`nav-link text-sm font-medium transition-colors duration-300 cursor-pointer ${
                  activeSection === link.href.slice(1)
                    ? 'text-[#c0000c]'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-bg-secondary text-text-primary hover:bg-border-color transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* CTA Button */}
            <a
              href="https://wa.me/6287781133382?text=Halo, saya ingin bertanya tentang layanan PT Alberio Pratama Abadi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red text-white text-sm font-semibold px-6 py-2.5 rounded-lg cursor-pointer ml-2 block text-center"
            >
              <span>Hubungi Kami</span>
            </a>
          </div>

          {/* Mobile Menu Toggle & Theme */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-bg-secondary text-text-primary hover:bg-border-color transition-colors cursor-pointer"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-text-primary hover:text-[#c0000c] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-[var(--nav-bg)] backdrop-blur-xl border-t border-border-color px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="w-full text-left text-text-primary hover:text-[#c0000c] py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-200 text-sm font-medium"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/6287781133382?text=Halo, saya ingin bertanya tentang layanan PT Alberio Pratama Abadi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full btn-red text-text-primary text-sm font-semibold px-6 py-3 rounded-lg mt-2 cursor-pointer block text-center"
          >
            <span>Hubungi Kami</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
