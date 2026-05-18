import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2, Zap } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Inisialisasi API Gemini
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
const genAI = new GoogleGenerativeAI(apiKey);

const SYSTEM_PROMPT = `Anda adalah asisten virtual resmi PT Alberio Pratama Abadi, spesialis Roll Forming dan Cutting Laser terkemuka di Indonesia.
Tugas Anda adalah menjawab pertanyaan pelanggan mengenai layanan, produk, dan profil perusahaan kami.
Jawablah dengan ramah, sangat profesional, dan ringkas. Gunakan bahasa Indonesia yang baik dan sopan.
Jika Anda ditanya informasi harga spesifik atau hal teknis mendalam yang Anda tidak tahu, arahkan mereka untuk menghubungi WhatsApp kami di 0877-8113-3382 atau email alberiopratamaabadi@gmail.com.`;

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'model', text: 'Halo! Saya asisten virtual AI dari PT Alberio Pratama Abadi. Ada yang bisa saya bantu terkait layanan Roll Forming atau Cutting Laser kami?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  
  const [chatSession, setChatSession] = useState(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    try {
      if (apiKey) {
        const model = genAI.getGenerativeModel({ 
          model: "gemini-flash-latest",
          systemInstruction: SYSTEM_PROMPT
        });
        
        // Memulai sesi chat agar AI mengingat konteks percakapan sebelumnya
        const chat = model.startChat({
          history: [
            {
              role: "user",
              parts: [{ text: "Halo" }],
            },
            {
              role: "model",
              parts: [{ text: "Halo! Saya asisten virtual AI dari PT Alberio Pratama Abadi. Ada yang bisa saya bantu terkait layanan Roll Forming atau Cutting Laser kami?" }],
            },
          ]
        });
        setChatSession(chat);
      }
    } catch (error) {
      console.error("Error initializing Gemini API:", error);
    }
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    if (!apiKey) {
      setMessages(prev => [...prev, 
        { role: 'user', text: input },
        { role: 'model', text: '⚠️ Sistem belum siap. API Key Gemini belum dikonfigurasi pada file .env Anda. Pastikan Anda telah mengisi VITE_GEMINI_API_KEY.' }
      ]);
      setInput('');
      return;
    }

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      if (!chatSession) throw new Error("Sesi chat belum siap");
      
      const result = await chatSession.sendMessage(userMessage);
      const responseText = result.response.text();
      
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Maaf, terjadi kesalahan saat menyambungkan ke sistem AI. Silakan coba beberapa saat lagi.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-4 sm:right-6 z-[9999] p-4 rounded-full bg-gradient-to-r from-[#c0000c] to-[#ff4444] text-white shadow-xl shadow-[#c0000c]/30 hover:scale-110 hover:shadow-2xl transition-all duration-300 flex items-center justify-center cursor-pointer ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
        aria-label="Chat dengan AI"
      >
        <MessageSquare size={28} />
        {/* Indikator Online */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-4 sm:right-6 z-[9999] w-[calc(100vw-2rem)] max-w-[380px] sm:w-[380px] h-[550px] max-h-[80vh] bg-bg-secondary border border-border-color rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#c0000c] to-[#8b0009] p-4 flex items-center justify-between shadow-md z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 shrink-0 overflow-hidden">
              <img src="/LogoPT.jpeg" alt="Logo PT Alberio" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm leading-tight flex items-center gap-1.5">
                Alberio AI <Bot size={14} />
              </h3>
              <p className="text-white/80 text-xs">Selalu Siap Membantu (24/7)</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-text-primary text-bg-primary' : 'bg-[#c0000c] text-white'}`}>
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`p-3 rounded-2xl max-w-[75%] text-sm leading-relaxed whitespace-pre-wrap ${
                msg.role === 'user' 
                  ? 'bg-text-primary text-bg-primary rounded-tr-sm shadow-md' 
                  : 'bg-glass border border-border-color text-text-primary rounded-tl-sm shadow-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          
          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-[#c0000c] text-white flex items-center justify-center shrink-0">
                <Bot size={16} />
              </div>
              <div className="p-4 rounded-2xl bg-glass border border-border-color rounded-tl-sm flex items-center gap-2 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#c0000c] animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-[#c0000c] animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 rounded-full bg-[#c0000c] animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form Area */}
        <div className="p-4 bg-[var(--nav-bg)] border-t border-border-color backdrop-blur-md">
          <form onSubmit={handleSendMessage} className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanya ke AI..."
              className="w-full bg-bg-secondary border border-border-color rounded-full pl-4 pr-12 py-3 text-sm text-text-primary focus:outline-none focus:border-[#c0000c] transition-colors shadow-inner"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2 bg-[#c0000c] text-white rounded-full disabled:opacity-50 disabled:bg-gray-400 hover:bg-[#8b0009] transition-colors cursor-pointer"
            >
              {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} className="ml-0.5" />}
            </button>
          </form>
          <div className="text-center mt-2 opacity-70">
            <span className="text-[10px] text-text-secondary flex items-center justify-center gap-1">
              <Zap size={10} className="text-[#c0000c]" /> Didukung oleh Google Gemini
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
