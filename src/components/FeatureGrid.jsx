import { motion } from 'framer-motion';
import { Shield, Zap, HeadphonesIcon, HardDrive, Lock, RefreshCcw } from 'lucide-react';

export default function FeatureGrid() {
  const features = [
    {
      icon: Shield,
      title: 'SSL Gratis',
      description: 'Keamanan maksimal dengan sertifikat SSL gratis selamanya',
      color: 'from-primary to-primary-dark'
    },
    {
      icon: HardDrive,
      title: 'Backup Harian',
      description: 'Data Anda aman dengan backup otomatis setiap hari',
      color: 'from-primary-dark to-primary'
    },
    {
      icon: HeadphonesIcon,
      title: 'Support 24/7',
      description: 'Tim support siap membantu kapan saja via WA & email',
      color: 'from-primary to-primary-dark'
    },
    {
      icon: Zap,
      title: 'Server Cepat',
      description: 'Performa maksimal dengan teknologi SSD & LiteSpeed',
      color: 'from-primary-dark to-primary'
    },
    {
      icon: Lock,
      title: 'Privacy Terjaga',
      description: 'Data privasi dan keamanan pelanggan prioritas utama',
      color: 'from-primary to-primary-dark'
    },
    {
      icon: RefreshCcw,
      title: 'Migrasi Gratis',
      description: 'Pindah hosting tanpa ribet, kami bantu gratis!',
      color: 'from-primary-dark to-primary'
    }
  ];

  return (
    <section id='features' className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-4">
            Keunggulan Kami
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Layanan hosting terbaik dengan fitur lengkap untuk kesuksesan bisnis Anda
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(56, 189, 248, 0.2)' }}
              className="group p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white rounded-lg border-2 border-gray-100 hover:border-primary/30 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 mb-4 rounded-lg bg-primary p-0.5`}
              >
                <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                  <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
              </motion.div>

              <h3 className="text-xl sm:text-2xl font-bold text-primary-dark mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
