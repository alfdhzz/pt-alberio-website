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
import Calculator from './components/Calculator'

function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(false); // Default to light mode

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
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg-primary transition-opacity duration-500">
        <div className="relative z-10 flex flex-col items-center animate-slide-in">
          {/* Clean Logo */}
          <div className="mb-8">
            <img 
              src="/LogoPT.jpeg" 
              alt="Logo PT Alberio" 
              className="w-24 h-24 md:w-28 md:h-28 object-contain rounded-2xl bg-white shadow-sm border border-border-color" 
            />
          </div>
          
          {/* Clean Typography */}
          <h2 className="text-xl md:text-2xl font-bold text-text-primary tracking-widest uppercase text-center">
            PT. ALBERIO PRATAMA ABADI
          </h2>
          
          <p className="text-text-secondary font-medium text-xs md:text-sm tracking-[0.15em] mt-2 text-center uppercase opacity-80">
            Specialist Roll Forming & Cutting Laser
          </p>

          {/* Minimalist Loading Bar */}
          <div className="w-48 h-1 bg-border-color mt-10 rounded-full overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full w-1/2 bg-[#c0000c] rounded-full animate-[slide_1.5s_ease-in-out_infinite]"></div>
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
    </>
  );
}

export default App
