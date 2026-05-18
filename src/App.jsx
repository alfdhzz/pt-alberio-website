import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Legality from './components/Legality'
import Clients from './components/Clients'
import Services from './components/Services'
import Products from './components/Products'
import MachineList from './components/MachineList'
import Stats from './components/Stats'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'
import Calculator from './components/Calculator'

function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(true); // Default to dark mode

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-500 bg-bg-secondary overflow-hidden">
        {/* Decorative Background Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#c0000c]/10 to-transparent rounded-full blur-3xl animate-[spin_15s_linear_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-bl from-[#ff4444]/5 to-transparent rounded-full blur-3xl animate-[spin_10s_linear_infinite_reverse]"></div>
        
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center animate-slide-in">
          {/* Logo with Glow */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-[#c0000c] rounded-3xl blur-xl opacity-40 animate-pulse"></div>
            <img 
              src="/LogoPT.jpeg" 
              alt="Logo PT Alberio" 
              className="relative w-28 h-28 object-contain rounded-3xl shadow-[0_0_50px_rgba(192,0,12,0.3)] border border-border-color bg-white" 
            />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-black text-text-primary tracking-widest uppercase text-center">
            PT. ALBERIO PRATAMA ABADI
          </h2>
          
          <p className="text-[#c0000c] font-bold text-xs md:text-sm tracking-[0.2em] mt-2 text-center uppercase">
            Specialist Roll Forming & Cutting Laser
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 opacity-80">
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-[#c0000c]"></div>
            <p className="text-text-secondary text-sm font-medium italic text-center">
              "Presisi Tinggi, Kualitas Teruji"
            </p>
            <div className="w-10 h-px bg-gradient-to-l from-transparent to-[#c0000c]"></div>
          </div>
          
          {/* Loading Bar */}
          <div className="w-64 h-1.5 bg-border-color mt-12 rounded-full overflow-hidden relative shadow-inner">
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-[#c0000c] to-transparent animate-[slide_1.5s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-bg-primary text-text-primary transition-colors duration-300">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <Hero />
        <Clients />
        <About />
        <Legality />
        <Services />
        <Products />
        <MachineList />
        <Calculator />
        <Stats />
        <Contact />
        <Footer />
      </div>
      <ChatWidget />
    </>
  );
}

export default App
