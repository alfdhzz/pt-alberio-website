import { useState, useEffect } from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Legality from './components/Legality'
import Clients from './components/Clients'
import Services from './components/Services'
import Products from './components/Products'
import MachineList from './components/MachineList'
import Stats from './components/Stats'
import Deliveries from './components/Deliveries'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Calculator from './components/Calculator'
import FloatingWA from './components/FloatingWA'

function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(false); // Default to light mode

  // Initialize scroll reveal animations
  useScrollReveal();

  useEffect(() => {
    // Check local storage
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
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
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg-primary overflow-hidden transition-opacity duration-500">
        {/* Animated Background Blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-[#c0000c]/15 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-3/4 w-56 h-56 md:w-72 md:h-72 bg-[#e00010]/10 rounded-full blur-[80px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 flex flex-col items-center animate-slide-in">
          {/* Glowing Logo */}
          <div className="mb-10 relative">
            <div className="absolute inset-0 bg-[#c0000c]/20 rounded-3xl animate-ping opacity-60 blur-md" style={{ animationDuration: '3s' }}></div>
            <img 
              src="/LogoPT.jpeg" 
              alt="Logo PT Alberio" 
              className="relative w-28 h-28 md:w-32 md:h-32 object-contain rounded-3xl bg-white shadow-[0_0_40px_rgba(192,0,12,0.2)] border border-[#c0000c]/20 animate-float" 
            />
          </div>
          
          {/* Typography with Gradient */}
          <h2 className="text-2xl md:text-3xl font-black text-text-primary tracking-widest uppercase text-center mb-1">
            ALBERIO <span className="text-gradient">PRATAMA</span> ABADI
          </h2>
          
          <p className="text-text-secondary font-bold text-xs tracking-[0.2em] text-center uppercase opacity-70">
            Specialist Roll Forming & Cutting Laser
          </p>

          {/* Premium Loading Bar */}
          <div className="mt-12 flex flex-col items-center gap-3">
            <div className="w-64 h-1.5 bg-border-color/30 rounded-full overflow-hidden relative backdrop-blur-sm">
              <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-[#c0000c] to-[#ff4444] rounded-full animate-[slide_1.5s_ease-in-out_infinite] shadow-[0_0_15px_rgba(192,0,12,0.8)]"></div>
            </div>
            <span className="text-text-primary text-[10px] font-bold tracking-[0.3em] uppercase animate-pulse opacity-60">Memuat...</span>
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
        <Deliveries />
        <Contact />
        <Footer />
        <FloatingWA />
      </div>
    </>
  );
}

export default App
