/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';

export default function App() {
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
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#1D1D1F] transition-colors">Términos</a>
            <a href="#" className="hover:text-[#1D1D1F] transition-colors">Privacidad</a>
            <a href="#" className="hover:text-[#1D1D1F] transition-colors">Instagram</a>
          </div>
          <div>
            Audiovisual Expert | Mendoza, Argentina
          </div>
        </div>
      </footer>
    </main>
  );
}

