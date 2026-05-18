import { Phone, Mail, MapPin, Camera, Globe, MessageCircle } from 'lucide-react';

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg-secondary border-t border-border-color pt-16 pb-8 relative overflow-hidden">
      {/* Red top accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c0000c] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div>
                <p className="text-text-primary font-black text-lg leading-none">PT. ALBERIO PRATAMA ABADI</p>
                <p className="text-[#c0000c] text-xs tracking-widest mt-1">SPECIALIST ROLL FORMING & CUTTING LASER</p>
              </div>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs mb-6">
              Solusi manufaktur baja terpercaya dengan teknologi roll forming dan cutting laser terkini.
              Melayani seluruh Indonesia sejak 2014.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Camera, href: '#', label: 'Instagram' },
                { icon: MessageCircle, href: '#', label: 'Twitter' },
                { icon: Globe, href: '#', label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/5 border border-border-color rounded-lg flex items-center justify-center hover:bg-[#c0000c]/20 hover:border-[#c0000c]/30 transition-all duration-300 text-text-secondary hover:text-[#c0000c]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-primary font-bold text-sm mb-5 tracking-wide">Navigasi</h4>
            <ul className="space-y-3">
              {[
                { href: '#home', label: 'Beranda' },
                { href: '#about', label: 'Tentang Kami' },
                { href: '#services', label: 'Layanan' },
                { href: '#products', label: 'Produk' },
                { href: '#contact', label: 'Kontak' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-text-secondary hover:text-[#c0000c] text-sm transition-colors duration-300 flex items-center gap-2 group cursor-pointer"
                  >
                    <div className="w-1 h-1 bg-[#c0000c] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-text-primary font-bold text-sm mb-5 tracking-wide">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-[#c0000c] mt-0.5 shrink-0" />
                <a href="tel:+6287781133382" className="text-text-secondary text-sm hover:text-[#c0000c] transition-colors">+62 877-8113-3382</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-[#c0000c] mt-0.5 shrink-0" />
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=alberiopratamaabadi@gmail.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary text-sm hover:text-[#c0000c] transition-colors break-all"
                >
                  alberiopratamaabadi@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#c0000c] mt-0.5 shrink-0" />
                <a href="https://maps.app.goo.gl/L3QvyYxLyuvXK9V9A" target="_blank" rel="noopener noreferrer" className="text-text-secondary text-sm hover:text-[#c0000c] transition-colors">Jl. Citra 1 No.13, Mangunjaya, Kec. Tambun Sel., Kabupaten Bekasi, Jawa Barat 17510</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-color flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-xs text-center">
            © 2024 PT Alberio Pratama Abadi. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-text-secondary text-xs hover:text-text-secondary cursor-pointer transition-colors">Kebijakan Privasi</span>
            <span className="text-gray-700">·</span>
            <span className="text-text-secondary text-xs hover:text-text-secondary cursor-pointer transition-colors">Syarat & Ketentuan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
