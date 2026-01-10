import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Server, Database } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function Hosting() {
  const hostingTypes = [
    {
      icon: Code,
      title: 'Hosting PHP',
      description: 'Untuk aplikasi PHP, Laravel, CodeIgniter, WordPress, dll',
      link: '/hosting/php',
      color: 'from-primary to-primary-dark'
    },
    {
      icon: Server,
      title: 'Hosting Node.js',
      description: 'Coming Soon - Untuk aplikasi Node.js, Express, React, dll',
      link: '#',
      color: 'from-green-500 to-green-700',
      disabled: true
    },
    {
      icon: Database,
      title: 'Hosting Python',
      description: 'Coming Soon - Untuk aplikasi Django, Flask, FastAPI, dll',
      link: '#',
      color: 'from-blue-500 to-blue-700',
      disabled: true
    }
  ];

  return (
    <div className="antialiased bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 relative overflow-hidden" style={{ backgroundColor: '#38BDF8' }}>
        {/* Animated background gradient orbs */}
        <motion.div 
          className="absolute w-[600px] h-[600px] bg-gradient-to-br from-white to-blue-200 rounded-full blur-3xl"
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
          className="absolute w-[500px] h-[500px] bg-gradient-to-br from-blue-200 to-white rounded-full blur-3xl"
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
          className="absolute w-[400px] h-[400px] bg-gradient-to-br from-white/60 to-cyan-100/60 rounded-full blur-3xl"
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

        {/* Floating particles */}
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
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6"
          >
            Pilih Jenis Hosting
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-white/90"
          >
            Pilih platform yang sesuai dengan teknologi aplikasi Anda
          </motion.p>
        </div>
      </section>

      {/* Hosting Types Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hostingTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={!type.disabled ? { y: -10, scale: 1.02 } : {}}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${type.color} opacity-10 rounded-lg blur-xl group-hover:opacity-20 transition-opacity`}></div>
                <div className={`relative bg-white rounded-lg border-2 border-gray-100 p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 ${type.disabled ? 'opacity-60' : 'hover:border-primary/30'}`}>
                  <div className={`w-20 h-20 bg-gradient-to-r ${type.color} rounded-lg flex items-center justify-center mb-6 mx-auto shadow-xl`}>
                    <type.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-primary-dark mb-3">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {type.description}
                  </p>
                  {type.disabled ? (
                    <button
                      disabled
                      className="w-full py-3 px-6 bg-gray-300 text-gray-500 font-bold rounded-lg cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  ) : (
                    <Link
                      to={type.link}
                      className="block w-full py-3 px-6 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                    >
                      Pilih Hosting Ini
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary-dark mb-6">
            Butuh Bantuan Memilih?
          </h3>
          <p className="text-gray-600 mb-8">
            Tidak yakin hosting mana yang cocok untuk proyek Anda? Tim kami siap membantu!
          </p>
          <motion.a
            href="https://wa.me/62882008146761?text=Halo,%20saya%20butuh%20bantuan%20memilih%20hosting"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all"
          >
            Konsultasi via WhatsApp
          </motion.a>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
