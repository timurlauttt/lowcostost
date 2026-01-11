import { motion } from 'framer-motion';
import { Target, Eye, Users, Award, Rocket, Heart, TrendingUp, Shield, Zap, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function TentangKami() {
  const visiMisi = [
    {
      icon: Eye,
      title: 'Visi',
      description: 'Menjadi penyedia layanan hosting dan solusi IT terpercaya yang membantu mahasiswa, UMKM, blogger, dan perusahaan di Indonesia untuk berkembang di era digital dengan harga yang terjangkau.',
      color: 'from-primary to-primary-dark'
    },
    {
      icon: Target,
      title: 'Misi',
      description: 'Memberikan layanan hosting berkualitas tinggi dengan harga terjangkau, support responsif 24/7, dan komitmen untuk membantu setiap pelanggan mencapai kesuksesan online mereka.',
      color: 'from-primary-dark to-primary'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Kepuasan pelanggan adalah prioritas utama kami'
    },
    {
      icon: Award,
      title: 'Quality Service',
      description: 'Layanan berkualitas tanpa kompromi'
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Terus berinovasi mengikuti teknologi terkini'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Server stabil dan dapat diandalkan 24/7'
    }
  ];

  const stats = [
    { icon: Target, title: 'Setup Instan', description: 'Website langsung aktif tanpa perlu konfigurasi rumit' },
    { icon: Shield, title: 'SSL Otomatis', description: 'Sertifikat SSL langsung terpasang, tanpa ribet install manual' },
    { icon: Heart, title: 'Support Ramah', description: 'Bantuan cepat dan mudah dipahami, tanpa istilah teknis ribet' },
    { icon: Zap, title: 'Performa Stabil', description: 'Website cepat dan stabil, tanpa perlu optimasi manual' },
    { icon: Rocket, title: 'Keamanan Terjamin', description: 'Perlindungan lengkap aktif otomatis, tanpa setup rumit' }
  ];

  const team = [
    {
      name: 'Tim Technical',
      role: 'Server & Infrastructure',
      emoji: '👨‍💻',
      description: 'Memastikan server berjalan optimal dengan teknologi terkini dan monitoring 24/7',
      skills: ['Server Management', 'Security', 'Performance Optimization']
    },
    {
      name: 'Tim Support',
      role: 'Customer Service',
      emoji: '👩‍💼',
      description: 'Siap membantu Anda kapan saja dengan respons cepat dan solusi yang tepat',
      skills: ['Customer Care', 'Problem Solving', 'Technical Assistance']
    },
    {
      name: 'Tim Marketing',
      role: 'Business Development',
      emoji: '👨‍💼',
      description: 'Menghadirkan paket dan solusi terbaik sesuai kebutuhan bisnis Anda',
      skills: ['Business Strategy', 'Digital Marketing', 'Sales']
    }
  ];

  return (
    <div className="antialiased bg-white">
      <Navbar />

      {/* Hero Section with Animation */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 md:px-8 relative overflow-hidden" style={{ backgroundColor: '#38BDF8' }}>
        {/* Animated background gradient orbs */}
        <motion.div 
          className="absolute w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-3xl"
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
          className="absolute w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-gradient-to-br from-white/8 to-blue-200/10 rounded-full blur-3xl"
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
          className="absolute w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-gradient-to-br from-white/15 to-blue-300/20 rounded-full blur-3xl"
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

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg mb-6"
          >
            <Award className="w-5 h-5 text-white" />
            <span className="text-sm font-medium text-white">Trusted Hosting Provider</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
          >
            Tentang <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">LowCostHost</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto"
          >
            Solusi hosting terjangkau dengan kualitas premium untuk kesuksesan digital Anda
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-lg border-2 border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-lg mb-4 p-0.5"
                >
                  <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                </motion.div>
                <h3 className="text-lg font-bold text-primary-dark mb-2">
                  {stat.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary-dark mb-6">
                Cerita Kami
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  <span className="font-bold text-primary">LowCostHost</span> hadir sebagai solusi inovatif bagi mahasiswa, UMKM, dan teman-teman yang baru memulai yang membutuhkan layanan hosting berkualitas dengan harga terjangkau. Kami memahami bahwa dalam perjalanan akademis dan pengembangan portofolio digital, setiap investasi harus memberikan nilai maksimal tanpa membebani anggaran.
                </p>
                <p>
                  Sebagai platform yang sedang berkembang, kami didukung oleh tim dengan keahlian teknis yang kompeten dan track record yang terbukti dalam mengelola infrastruktur web. Kami menghadirkan ekosistem hosting yang tidak hanya ekonomis, tetapi juga menjamin reliabilitas, keamanan data, serta dukungan teknis yang responsif untuk setiap kebutuhan Anda.
                </p>
                <p>
                  Komitmen kami adalah memastikan setiap server beroperasi dengan performa optimal, data Anda terlindungi dengan standar keamanan terkini, dan tim support kami selalu siaga untuk memberikan solusi. Kami percaya bahwa keterbatasan anggaran tidak boleh menjadi penghalang untuk memiliki infrastruktur digital yang profesional dan andal.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="p-6 bg-white rounded-lg border-2 border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all"
                  >
                    <value.icon className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-bold text-primary-dark mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visi Misi with Enhanced Design */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary-dark mb-4">
              Visi & Misi Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Komitmen kami untuk memberikan yang terbaik bagi setiap pelanggan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {visiMisi.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-10 rounded-lg blur-xl group-hover:opacity-20 transition-opacity`}></div>
                <div className="relative p-8 sm:p-10 bg-white rounded-lg border-2 border-gray-100 hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mb-6 shadow-xl`}
                  >
                    <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl font-black text-primary-dark mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Enhanced Cards */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary-dark mb-4">
              Tim Profesional Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Berpengalaman dan dedikasi tinggi untuk kesuksesan Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white rounded-lg border-2 border-gray-100 group-hover:border-primary/30 overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  {/* Header with Gradient */}
                  <div className="h-32 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-white/10"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0]
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    ></motion.div>
                  </div>

                  {/* Avatar */}
                  <div className="relative -mt-16 px-8">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-28 h-28 bg-white rounded-lg flex items-center justify-center text-6xl shadow-xl border-4 border-white mx-auto"
                    >
                      {member.emoji}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-8 pt-4 text-center">
                    <h3 className="text-xl font-bold text-primary-dark mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {member.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Animation */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 md:px-8 relative overflow-hidden" style={{ backgroundColor: '#38BDF8' }}>
        {/* Animated background gradient orbs */}
        <motion.div 
          className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
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
          className="absolute w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
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

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-300/40 rounded-full"
            animate={{
              y: [0, -800],
              x: [0, Math.random() * 200 - 100],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ type: 'spring' }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Mari Bergabung Bersama Kami!
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Wujudkan website impian Anda dengan layanan hosting terbaik dari LowCostHost
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/hosting"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(255,255,255,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-primary-dark font-bold rounded-lg hover:shadow-2xl transition-all inline-flex items-center justify-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Daftar Sekarang
              </motion.a>
              
              <motion.a
                href="https://wa.me/62882008146761?text=Halo,%20saya%20ingin%20konsultasi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary-dark transition-all inline-flex items-center justify-center gap-2"
              >
                <Users className="w-5 h-5" />
                Konsultasi Gratis
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
