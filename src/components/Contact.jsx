import { Mail, MapPin, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c0000c]/3 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-line"></div>
            <span className="text-[#c0000c] text-sm font-semibold tracking-widest uppercase">Kontak</span>
            <div className="section-line"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-text-primary">
            Hubungi
            <span className="text-gradient"> Kami</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto leading-relaxed">
            Pilih salah satu metode di bawah ini untuk terhubung dengan kami. Kami siap melayani kebutuhan Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* WhatsApp Card */}
          <a
            href="https://wa.me/6287781133382?text=Halo, saya ingin bertanya tentang layanan PT Alberio Pratama Abadi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-glass border border-border-color rounded-3xl p-8 flex items-center gap-6 hover:bg-[#111111]/5 dark:hover:bg-[#ffffff]/5 hover:border-[#25D366]/50 transition-all duration-300 group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
              <MessageSquare size={28} className="text-[#25D366]" />
            </div>
            <div>
              <p className="text-text-secondary text-sm mb-1">Chat via WhatsApp</p>
              <p className="text-text-primary font-bold text-lg group-hover:text-[#25D366] transition-colors duration-300">0877-8113-3382</p>
            </div>
          </a>

          {/* Email Card */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=alberiopratamaabadi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-glass border border-border-color rounded-3xl p-8 flex items-center gap-6 hover:bg-[#111111]/5 dark:hover:bg-[#ffffff]/5 hover:border-[#c0000c]/50 transition-all duration-300 group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#c0000c]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Mail size={28} className="text-[#c0000c]" />
            </div>
            <div>
              <p className="text-text-secondary text-sm mb-1">Kirim Email</p>
              <p className="text-text-primary font-bold text-lg group-hover:text-[#c0000c] transition-colors duration-300 break-all">alberiopratamaabadi@gmail.com</p>
            </div>
          </a>

          {/* TikTok Card */}
          <a
            href="https://www.tiktok.com/@alberiopratamaabadi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-glass border border-border-color rounded-3xl p-8 flex items-center gap-6 transition-all duration-300 group cursor-pointer"
          >
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
              style={{ backgroundColor: 'var(--border-color)' }}
            >
              <svg className="w-7 h-7 text-text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </div>
            <div>
              <p className="text-text-secondary text-sm mb-1">TikTok</p>
              <p className="text-text-primary font-bold text-lg transition-colors duration-300">@alberiopratamaabadi</p>
            </div>
          </a>

          {/* Instagram Card */}
          <a
            href="https://www.instagram.com/alberio_pratama_abadi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-glass border border-border-color rounded-3xl p-8 flex items-center gap-6 hover:bg-[#111111]/5 dark:hover:bg-[#ffffff]/5 hover:border-[#E1306C]/50 transition-all duration-300 group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#E1306C]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-[#E1306C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </div>
            <div>
              <p className="text-text-secondary text-sm mb-1">Instagram</p>
              <p className="text-text-primary font-bold text-lg group-hover:text-[#E1306C] transition-colors duration-300">@alberio_pratama_abadi</p>
            </div>
          </a>

          {/* YouTube Card */}
          <a
            href="https://www.youtube.com/@mesinbajaringan_82"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-glass border border-border-color rounded-3xl p-8 flex items-center gap-6 hover:bg-[#111111]/5 dark:hover:bg-[#ffffff]/5 hover:border-[#FF0000]/50 transition-all duration-300 group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#FF0000]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-[#FF0000]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <div>
              <p className="text-text-secondary text-sm mb-1">YouTube Channel</p>
              <p className="text-text-primary font-bold text-lg group-hover:text-[#FF0000] transition-colors duration-300">@mesinbajaringan_82</p>
            </div>
          </a>

          {/* Google Maps Card */}
          <a
            href="https://maps.app.goo.gl/L3QvyYxLyuvXK9V9A"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-glass border border-border-color rounded-3xl p-8 flex items-center gap-6 hover:bg-[#111111]/5 dark:hover:bg-[#ffffff]/5 hover:border-[#4285F4]/50 transition-all duration-300 group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#4285F4]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
              <MapPin size={28} className="text-[#4285F4]" />
            </div>
            <div>
              <p className="text-text-secondary text-sm mb-1">Google Maps</p>
              <p className="text-text-primary font-bold text-sm leading-snug group-hover:text-[#4285F4] transition-colors duration-300">
                Jl. Citra 1 No.13, Mangunjaya,<br/>Kec. Tambun Sel., Kab. Bekasi
              </p>
            </div>
          </a>
        </div>

        {/* Owner Social Media */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <p className="text-text-secondary text-sm font-semibold tracking-widest uppercase">Sosial Media Pemilik</p>
            <p className="text-text-primary font-bold text-xl mt-1">Bagus Yudhistiro</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Owner Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=100009523002805"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-glass border border-border-color rounded-3xl p-6 flex items-center gap-5 hover:bg-[#111111]/5 dark:hover:bg-[#ffffff]/5 hover:border-[#1877F2]/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#1877F2]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div>
                <p className="text-text-secondary text-sm mb-1">Facebook</p>
                <p className="text-text-primary font-bold text-base group-hover:text-[#1877F2] transition-colors duration-300">Bagus Yudhistiro</p>
              </div>
            </a>

            {/* Owner Instagram */}
            <a
              href="https://www.instagram.com/mesinbajaringan_82"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-glass border border-border-color rounded-3xl p-6 flex items-center gap-5 hover:bg-[#111111]/5 dark:hover:bg-[#ffffff]/5 hover:border-[#E1306C]/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#E1306C]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-[#E1306C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </div>
              <div>
                <p className="text-text-secondary text-sm mb-1">Instagram Pemilik</p>
                <p className="text-text-primary font-bold text-base group-hover:text-[#E1306C] transition-colors duration-300">@mesinbajaringan_82</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
