import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Sobre nosotros', href: '#sobre' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'glass py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="/" className="text-lg md:text-xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-7 h-7 md:w-8 md:h-8 bg-[#1D1D1F] rounded-lg flex items-center justify-center shrink-0">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </div>
          <span className="truncate">WALTER PIETROBON</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-[#1D1D1F]/70 hover:text-[#1D1D1F] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#1D1D1F] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#323236] transition-all"
          >
            Presupuesto
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#1D1D1F]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full glass md:hidden overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-1 p-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    setTimeout(() => {
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                  }}
                  className="text-lg font-medium text-[#1D1D1F] py-4 border-b border-[#F5F5F7] last:border-0 flex items-center justify-between"
                >
                  {link.name}
                  <div className="w-5 h-5 rounded-full bg-[#1D1D1F]/5 flex items-center justify-center">
                     <div className="w-1.5 h-1.5 bg-[#1D1D1F] rounded-full" />
                  </div>
                </a>
              ))}
              <div className="pt-6">
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(() => {
                      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                  }}
                  className="w-full bg-[#1D1D1F] text-white px-6 py-4 rounded-2xl text-lg font-medium shadow-lg"
                >
                  Solicitar Presupuesto
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
