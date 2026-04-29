import { motion } from 'motion/react';
import { Camera, Plane, Box, ArrowRight } from 'lucide-react';

export default function Services() {
  const items = [
    {
      id: 'photography',
      title: 'Fotografía Profesional',
      description: 'Captura de detalles con luz natural y composición artística. Enfoque en arquitectura, eventos y producto.',
      image: '/regenerated_image_1777496766184.png',
      icon: <Camera className="w-6 h-6" />,
      tag: '01'
    },
    {
      id: 'drone',
      title: 'Filmación con Drone 4K',
      description: 'Perspectivas cinematográficas únicas. Tecnología de vanguardia para tomas aéreas fluidas y de alto impacto.',
      image: '/regenerated_image_1777496768729.png',
      icon: <Plane className="w-6 h-6" />,
      tag: '02'
    },
    {
      id: '360',
      title: 'Recorridos Virtuales 360',
      description: 'Experiencias inmersivas para real estate y negocios. Permite que tus clientes caminen por tus espacios.',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
      icon: <Box className="w-6 h-6" />,
      tag: '03',
      link: 'https://script.google.com/a/restoproos.com/macros/s/AKfycbxIHFmWkPhXes9gSIqRt8evjMtFOxYPNF4MZH9sh2GLjiRgcg1q4kQ4CW5Fj-AmxJIg8w/exec?page=viewer&folderId=1op5M4lClYWG1ojqNUDsnzZ_uOXYDAhtf'
    }
  ];

  const handleServiceClick = (link?: string) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <section id="servicios" className="py-20 md:py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-[#86868B]">Servicios</span>
          <h2 className="text-3xl md:text-5xl font-semibold mt-4 tracking-tight leading-tight">Tres pilares de excelencia.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
              onClick={() => {
                if (item.id !== '360') {
                  handleServiceClick(item.link);
                }
              }}
            >
              <div className="relative aspect-4/5 mb-8 overflow-hidden rounded-2xl bg-[#F5F5F7]">
                {item.id === '360' ? (
                  <iframe
                    src={item.link}
                    className="w-full h-full border-none"
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {item.link && (
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/90 text-[#1D1D1F] px-6 py-2 rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          Ver detalles
                        </div>
                      </div>
                    )}
                  </>
                )}
                <div className="absolute top-6 left-6 text-white text-xs font-mono opacity-60">
                  {item.tag}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-[#F5F5F7] group-hover:bg-[#1D1D1F] group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-[#86868B] leading-relaxed">
                  {item.description}
                </p>
                {item.id === '360' && (
                  <div className="flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all duration-300 text-[#1D1D1F]">
                    Explorar ahora <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
