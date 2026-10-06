import { MessageCircle } from 'lucide-react';

export default function FloatingWA() {
  return (
    <a
      href="https://wa.me/6287781133382?text=Halo, saya ingin bertanya tentang layanan PT Alberio Pratama Abadi"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(37,211,102,0.4)] transition-all duration-300 group cursor-pointer"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} />
      
      {/* Tooltip */}
      <div className="absolute right-16 px-3 py-1.5 bg-black/80 text-white font-medium text-xs rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 whitespace-nowrap shadow-lg">
        Hubungi via WhatsApp
      </div>
      
      {/* Ping effect behind the button */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-40 -z-10" style={{ animationDuration: '3s' }}></div>
    </a>
  );
}
