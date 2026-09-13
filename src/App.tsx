/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';

export default function App() {
  const [isIgBrowser, setIsIgBrowser] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    let targetUrl = '';
    
    if (path === '/Barrio_Vista_Pueblo_Mza_G_casa_14') {
      targetUrl = 'https://script.google.com/a/wpietrobon.com/macros/s/AKfycbxIHFmWkPhXes9gSIqRt8evjMtFOxYPNF4MZH9sh2GLjiRgcg1q4kQ4CW5Fj-AmxJIg8w/exec?page=viewer&folderId=16fJNx6-KEscDv4e-Bnw0AVj4gwGv6HQL';
    } else if (path === '/Barrio_Las_Cortaderas_II_Mza_K_casa_7') {
      targetUrl = 'https://script.google.com/a/wpietrobon.com/macros/s/AKfycbxIHFmWkPhXes9gSIqRt8evjMtFOxYPNF4MZH9sh2GLjiRgcg1q4kQ4CW5Fj-AmxJIg8w/exec?page=viewer&folderId=1tZXZn23wysaiHgpqRSQY0YHbt4Ij5RMw';
    }

    if (targetUrl) {
      const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
      if (ua.indexOf('Instagram') > -1 || ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1) {
        setIsIgBrowser(true);
      } else {
        window.location.href = targetUrl;
      }
    }
  }, []);

  if (window.location.pathname === '/Barrio_Vista_Pueblo_Mza_G_casa_14' || window.location.pathname === '/Barrio_Las_Cortaderas_II_Mza_K_casa_7') {
    if (isIgBrowser) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F5F7] text-[#1D1D1F] p-6 text-center">
          <div className="bg-white p-8 rounded-3xl shadow-sm max-w-md w-full space-y-6">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
            </div>
            <h2 className="text-2xl font-semibold">Casi listo...</h2>
            <p className="text-[#86868B]">
              El navegador de Instagram no soporta Tours 360 completos. Para verlo correctamente:
            </p>
            <div className="bg-gray-50 p-4 rounded-xl text-left space-y-3 border border-gray-100">
              <p className="text-sm font-medium flex items-center gap-2">
                <span className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span> 
                Toca los 3 puntos (•••) arriba a la derecha
              </p>
              <p className="text-sm font-medium flex items-center gap-2">
                <span className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                Selecciona "Abrir en el navegador"
              </p>
            </div>
            <div className="pt-4">
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('¡Enlace copiado! Pégalo en tu navegador.');
                }}
                className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                O copiar enlace manualmente
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F5F7] text-[#1D1D1F]">
        <p className="text-xl font-light">Redirigiendo al Tour 360...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      
      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-24 px-6 md:px-12 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-[#86868B]">Portfolio</span>
            <h2 className="text-3xl md:text-6xl font-semibold tracking-tight leading-tight">Resultados que hablan por sí mismos.</h2>
            <p className="text-[#86868B] text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto md:mx-0">
              Traspasamos la barrera de lo convencional para ofrecer piezas audiovisuales que no solo se ven bien, sino que cumplen objetivos estratégicos.
            </p>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="aspect-square bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 group">
               <img src="https://lh3.googleusercontent.com/d/1y7R471Yayja0YYUmc4VLRB0HmBxxAC-K" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Portfolio 1" />
            </div>
            <div className="aspect-square bg-white rounded-3xl overflow-hidden shadow-sm sm:mt-12 hover:shadow-xl transition-shadow duration-500 group">
               <img src="https://lh3.googleusercontent.com/d/1-1ZYNk3QVShwYyv3v-vjz6bfETjjQBdi" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Portfolio 2" />
            </div>
          </div>
        </div>
      </section>

      <Contact />

      <footer className="py-12 px-6 border-t border-[#D2D2D7] bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[#86868B] text-sm">
          <div className="font-bold tracking-tighter text-[#1D1D1F]">
            © 2026 WALTER PIETROBON.
          </div>
          <div className="flex flex-wrap gap-8">
            <a href="mailto:wp@wpietrobon.com" className="hover:text-[#1D1D1F] transition-colors">wp@wpietrobon.com</a>
            <a href="https://instagram.com/wpietrobon" target="_blank" rel="noopener noreferrer" className="hover:text-[#1D1D1F] transition-colors">Instagram (@wpietrobon)</a>
            <a href="#" className="hover:text-[#1D1D1F] transition-colors">Términos</a>
            <a href="#" className="hover:text-[#1D1D1F] transition-colors">Privacidad</a>
          </div>
          <div>
            Audiovisual Expert | Mendoza, Argentina
          </div>
        </div>
      </footer>
    </main>
  );
}

