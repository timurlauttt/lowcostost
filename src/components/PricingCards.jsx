import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PricingCards() {
  const packages = [
    {
      name: 'Paket 12 Bulan Medium',
      price: '750.000',
      period: '/tahun',
      description: 'Hosting Medium + Domain .my.id',
      popular: false,
      features: [
        'Max File 1GB',
        'Free Domain .my.id',
        'SSL Gratis',
        'Setup Server & Domain',
        'Terima Beres/Anti Ribet'
      ]
    },
    {
      name: 'Hosting PHP Bulanan',
      price: '50.000',
      period: '/bulan',
      description: 'Paket Small + Subdomain Gratis',
      popular: true,
      badge: 'Paling Populer',
      features: [
        'Max File 512MB',
        'Free Subdomain',
        'SSL Gratis',
        'Setup Server Instan',
        'Terima Beres/Anti Ribet',
      ]
    },
    {
      name: 'Paket 12 Bulan Large',
      price: '1.000.000',
      period: '/tahun',
      description: 'Hosting Large + Domain .com',
      popular: false,
      features: [
        'Max File 2GB',
        'Free Domain .com',
        'SSL Gratis',
        'Setup Server & Domain',
        'Terima Beres/Anti Ribet',
      ]
    }
  ];

  return (
    <section id='pricing' className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary-dark mb-4">
            Paket Hosting Terbaik
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Pilih paket sesuai kebutuhan Anda. Nggak perlu pusing atur server/panel, kami yang urus teknisnya. Anda terima beres!
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-lg border-2 transition-all duration-300 ${pkg.popular
                  ? 'bg-gradient-to-br from-primary via-primary-dark to-primary border-primary shadow-2xl shadow-primary/30 md:scale-105'
                  : 'bg-white border-gray-200 hover:border-primary/50 hover:shadow-xl'
                }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.3 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2"
                >
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-lg">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-bold text-primary-dark">{pkg.badge}</span>
                  </div>
                </motion.div>
              )}

              {/* Package Header */}
              <div className={`mb-6 ${pkg.popular ? 'text-white' : 'text-primary-dark'}`}>
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className={`text-sm ${pkg.popular ? 'text-white/80' : 'text-gray-600'}`}>
                  {pkg.description}
                </p>
              </div>

              {/* Price */}
              <div className={`mb-6 ${pkg.popular ? 'text-white' : 'text-primary-dark'}`}>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-semibold">Rp</span>
                  <span className="text-5xl font-black">{pkg.price}</span>
                  <span className={`text-lg ${pkg.popular ? 'text-white/70' : 'text-gray-500'}`}>
                    {pkg.period}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-lg flex items-center justify-center ${pkg.popular ? 'bg-white' : 'bg-primary'
                      }`}>
                      <Check className={`w-3 h-3 ${pkg.popular ? 'text-white' : 'text-primary'}`} />
                    </div>
                    <span className={`text-sm ${pkg.popular ? 'text-white/90' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                to="/hosting"
                className={`block w-full py-3 px-6 rounded-lg font-bold text-center transition-all duration-300 ${pkg.popular
                    ? 'bg-white text-primary-dark hover:shadow-xl hover:shadow-white/20'
                    : 'bg-primary text-white hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30'
                  }`}
              >
                Pilih Paket
              </Link>
            </motion.div>
          ))}
        </div>
        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-8"
        >
          <Link to="/pricing">
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(56, 189, 248, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-bold overflow-hidden transition-all duration-300 flex items-center gap-3 text-base sm:text-lg"
            >
              <span className="relative z-10">Lihat Selengkapnya</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
