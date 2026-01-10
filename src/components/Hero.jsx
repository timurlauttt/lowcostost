import { Rocket, Sparkles, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToProduct = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 relative overflow-hidden" style={{ backgroundColor: '#38BDF8' }}>
      <motion.div 
        className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-3xl"
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ top: '-15%', left: '-15%' }}
      />
      
      <motion.div 
        className="absolute w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-gradient-to-br from-white/8 to-blue-200/10 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ bottom: '-15%', right: '-15%' }}
      />

      <motion.div 
        className="absolute w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-gradient-to-br from-white/15 to-blue-300/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      />

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/40 rounded-full"
          animate={{
            y: [0, -1000],
            x: [0, Math.random() * 200 - 100],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: '100%',
          }}
        />
      ))}

      <div className="text-center max-w-7xl mx-auto relative z-10 px-2">

        <motion.h1 
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-4 sm:mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            className="inline-block bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent drop-shadow-lg"
            animate={{
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ backgroundSize: '200%' }}
          >
            LOWCOSTHOST
          </motion.span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white font-semibold sm:font-md mb-2 sm:mb-3 leading-tight">
            Digital Solutions Without Barriers
          </p>
          
          <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8 md:mb-12 max-w-4xl mx-auto font-light px-4">
            Affordable, Accessible, and Scalable
          </p>
        </motion.div>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-12"
        >
          {[
            { icon: Zap, text: 'Fast & Reliable' },
            { icon: Shield, text: 'Secure Hosting' },
            { icon: Sparkles, text: '24/7 Support' }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg"
            >
              <feature.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              <span className="text-xs sm:text-sm text-white font-medium">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16 w-full sm:w-auto px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            onClick={scrollToProduct}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(255, 255, 255, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-dark rounded-lg font-bold overflow-hidden transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
          >
            <Rocket size={18} className="relative z-10 sm:w-5 sm:h-5" />
            <span className="relative z-10">Lihat Produk Kami</span>
          </motion.button>
          
          <motion.a 
            href="https://wa.me/62882008146761?text=Halo%20min%20mau%20tanya%20dong"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 20px 60px rgba(255, 255, 255, 0.2)',
              backgroundColor: 'rgba(255, 255, 255, 1)'
            }}
            whileTap={{ scale: 0.98 }}
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 hover:text-primary-dark text-sm sm:text-base"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>Hubungi Kami</span>
          </motion.a>
        </motion.div>
      </div>

              {/* Scroll indicator with animation - positioned at bottom center */}
      <motion.button
        onClick={scrollToProduct}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 cursor-pointer bg-transparent border-none outline-none z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white hover:text-white/90 transition-colors drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.button>
    </section>
  );
}
