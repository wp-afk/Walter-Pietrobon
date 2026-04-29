import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function Contact() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/2615437508', '_blank');
  };

  return (
    <section id="contacto" className="py-12 md:py-24 px-4 md:px-12 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-24 shadow-sm border border-[#E8E8ED] relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl mx-auto space-y-8 md:space-y-10">
            <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-[#86868B]">Contacto</span>
            <h2 className="text-4xl md:text-7xl font-semibold tracking-tight leading-tight">Hagamos algo extraordinario.</h2>
            <p className="text-lg md:text-xl text-[#86868B] font-light leading-relaxed">
              ¿Tienes un proyecto en mente? Estamos listos para llevarlo al siguiente nivel con una propuesta personalizada centrada en resultados.
            </p>
            
            <div className="pt-4 md:pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <button 
                onClick={handleWhatsApp}
                className="group flex items-center gap-3 bg-[#25D366] text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-lg font-medium hover:bg-[#22bf5c] transition-all duration-300 shadow-xl shadow-green-500/10 active:scale-95 w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                Hablemos por WhatsApp
              </button>
              
              <button className="text-[#1D1D1F] px-8 md:px-10 py-4 md:py-5 border border-[#D2D2D7] rounded-full text-lg font-medium hover:bg-[#F5F5F7] transition-all duration-300 w-full sm:w-auto">
                Enviar E-mail
              </button>
            </div>
            
            <div className="pt-8 md:pt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-[#86868B]">
              <div>
                <p className="font-semibold text-[#1D1D1F] uppercase tracking-wider mb-2">WhatsApp Directo</p>
                <p>+54 261 543 7508</p>
              </div>
              <div>
                <p className="font-semibold text-[#1D1D1F] uppercase tracking-wider mb-2">Localización</p>
                <p>Mendoza, Argentina</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#25D366]/5 rounded-full blur-[80px]" />
        </motion.div>
      </div>
    </section>
  );
}
