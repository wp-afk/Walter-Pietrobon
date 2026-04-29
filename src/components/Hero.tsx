import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 opacity-60">
        <img
          src="https://lh3.googleusercontent.com/d/1KL1TTWMTonb8j6C5sAemf6VUNgJvkir7"
          alt="Walter Pietrobon - Servicios Audiovisuales"
          className="w-full h-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-linear-to-b from-white/30 via-transparent to-white" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 md:space-y-8"
        >
          <span className="inline-block text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-[#86868B]">
            Premium Audiovisual
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tight text-gradient leading-[1.1]">
            Perspectivas que elevan tu visión.
          </h1>
          <p className="text-lg md:text-2xl text-[#86868B] font-light max-w-2xl mx-auto px-4">
            Capturamos la esencia de tus proyectos con tecnología de vanguardia y una mirada cinematográfica.
          </p>
          
          <div className="pt-4 md:pt-8 px-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-[#1D1D1F] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#323236] transition-all duration-300 shadow-xl shadow-black/5 active:scale-95"
            >
              Consultar presupuesto
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#86868B]"
      >
        <div className="w-px h-12 bg-linear-to-b from-[#86868B] to-transparent animate-bounce mx-auto" />
      </motion.div>
    </section>
  );
}
