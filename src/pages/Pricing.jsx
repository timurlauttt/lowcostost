import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Check, Globe, Server, Star, Zap, Shield, Rocket, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('hosting-php');
  const [selectedDuration, setSelectedDuration] = useState('1');

  const pricingData = {
    'hosting-php': {
      title: 'Hosting PHP Bulanan',
      subtitle: 'Solusi hemat untuk website PHP, Laravel, atau WordPress',
      color: 'blue',
      durations: {
        '1': [
          { name: 'Small', spec: 'Max File 512MB', price: '50.000', popular: true },
          { name: 'Medium', spec: 'Max File 1GB', price: '75.000', popular: false },
          { name: 'Large', spec: 'Max File 2GB', price: '100.000', popular: false }
        ],
        '3': [
          { name: 'Small', spec: 'Max File 512MB', price: '150.000', popular: false },
          { name: 'Medium', spec: 'Max File 1GB', price: '225.000', popular: true },
          { name: 'Large', spec: 'Max File 2GB', price: '300.000', popular: false }
        ],
        '6': [
          { name: 'Small', spec: 'Max File 512MB', price: '250.000', popular: false },
          { name: 'Medium', spec: 'Max File 1GB', price: '375.000', popular: true },
          { name: 'Large', spec: 'Max File 2GB', price: '500.000', popular: false }
        ],
        '12': [
          { name: 'Small', spec: 'Max File 512MB + Free Domain .my.id', price: '500.000', popular: false },
          { name: 'Medium', spec: 'Max File 1GB + Free Domain .my.id', price: '750.000', popular: true },
          { name: 'Large', spec: 'Max File 2GB + Free Domain .com', price: '1.000.000', popular: false }
        ]
      }
    },
    'hosting-domain': {
      title: 'Paket Hosting + Domain',
      subtitle: 'Bundle lengkap langsung online, terima beres!',
      color: 'green',
      durations: {
        '1': [
          { name: 'Silver 1', spec: '512MB + Domain .my.id', price: '80.000' },
          { name: 'Silver 2', spec: '512MB + Domain .com', price: '275.000' },
          { name: 'Silver 3', spec: '512MB + Domain .id', price: '300.000' },
          { name: 'Gold 1', spec: '1GB + Domain .my.id', price: '100.000', popular: true },
          { name: 'Gold 2', spec: '1GB + Domain .com', price: '300.000' },
          { name: 'Gold 3', spec: '1GB + Domain .id', price: '325.000' },
          { name: 'Diamond 1', spec: '2GB + Domain .my.id', price: '120.000' },
          { name: 'Diamond 2', spec: '2GB + Domain .com', price: '325.000' },
          { name: 'Diamond 3', spec: '2GB + Domain .id', price: '350.000' }
        ],
        '3': [
          { name: 'Silver 1', spec: '512MB + Domain .my.id', price: '240.000' },
          { name: 'Silver 2', spec: '512MB + Domain .com', price: '825.000' },
          { name: 'Silver 3', spec: '512MB + Domain .id', price: '900.000' },
          { name: 'Gold 1', spec: '1GB + Domain .my.id', price: '300.000', popular: true },
          { name: 'Gold 2', spec: '1GB + Domain .com', price: '900.000' },
          { name: 'Gold 3', spec: '1GB + Domain .id', price: '975.000' },
          { name: 'Diamond 1', spec: '2GB + Domain .my.id', price: '360.000' },
          { name: 'Diamond 2', spec: '2GB + Domain .com', price: '975.000' },
          { name: 'Diamond 3', spec: '2GB + Domain .id', price: '1.050.000' }
        ],
        '6': [
          { name: 'Silver 1', spec: '512MB + Domain .my.id', price: '280.000' },
          { name: 'Silver 2', spec: '512MB + Domain .com', price: '475.000' },
          { name: 'Silver 3', spec: '512MB + Domain .id', price: '500.000' },
          { name: 'Gold 1', spec: '1GB + Domain .my.id', price: '405.000', popular: true },
          { name: 'Gold 2', spec: '1GB + Domain .com', price: '600.000' },
          { name: 'Gold 3', spec: '1GB + Domain .id', price: '625.000' },
          { name: 'Diamond 1', spec: '2GB + Domain .my.id', price: '530.000' },
          { name: 'Diamond 2', spec: '2GB + Domain .com', price: '725.000' },
          { name: 'Diamond 3', spec: '2GB + Domain .id', price: '750.000' }
        ],
        '12': [
          { name: 'Silver 1', spec: '512MB + Domain .my.id', price: '500.000' },
          { name: 'Silver 2', spec: '512MB + Domain .com', price: '725.000' },
          { name: 'Silver 3', spec: '512MB + Domain .id', price: '750.000' },
          { name: 'Gold 1', spec: '1GB + Domain .my.id', price: '750.000', popular: true },
          { name: 'Gold 2', spec: '1GB + Domain .com', price: '975.000' },
          { name: 'Gold 3', spec: '1GB + Domain .id', price: '1.000.000' },
          { name: 'Diamond 1', spec: '2GB + Domain .my.id', price: '1.030.000' },
          { name: 'Diamond 2', spec: '2GB + Domain .com', price: '1.000.000' },
          { name: 'Diamond 3', spec: '2GB + Domain .id', price: '1.250.000' }
        ]
      }
    },
    'custom-project': {
      title: 'Custom Project & Aplikasi',
      subtitle: 'Realisasikan ide aplikasi Anda bersama tim expert kami',
      color: 'purple',
      segments: [
        {
          duration: '',
          packages: [
            {
              name: 'Coding Simple',
              spec: 'Tugas kuliah, script sederhana',
              price: '49.000',
              features: ['Full Source Code', 'Garansi Error', 'Sekali Bayar']
            },
            {
              name: 'Sistem Basic',
              spec: 'Web Profile, Landing Page',
              price: '299.000',
              features: ['Full Source Code', 'Database MySQL', 'Revisi Minor']
            },
            {
              name: 'Sistem Menengah',
              spec: 'Toko Online, SISFO, Kasir',
              price: '499.000',
              features: ['Full Source Code', 'Fitur CRUD', 'Revisi & Garansi']
            },
            {
              name: 'Mobile App',
              spec: 'Android/iOS (Flutter/React Native)',
              price: '749.000',
              features: ['APK File', 'Source Code', 'Publish (Opt)']
            },
            {
              name: 'Enterprise',
              spec: 'Sistem skala besar custom',
              price: 'Hubungi Kami',
              features: ['Full Custom', 'Prioritas Support', 'Maintenance']
            }
          ]
        }
      ]
    },
  };

  const tabs = [
    { id: 'hosting-php', label: 'Hosting PHP', icon: Server },
    { id: 'hosting-domain', label: 'Hosting + Domain', icon: Globe },
    { id: 'custom-project', label: 'Custom Project', icon: Rocket },
  ];

  return (
    <div className="antialiased bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden" style={{ backgroundColor: '#38BDF8' }}>

        {/* Animated background gradient orbs */}
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-3xl"
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
          className="absolute w-[500px] h-[500px] bg-gradient-to-br from-white/8 to-blue-200/10 rounded-full blur-3xl"
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
          className="absolute w-[400px] h-[400px] bg-gradient-to-br from-white/15 to-blue-300/20 rounded-full blur-3xl"
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

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span>Harga Transparan & Terjangkau</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Pilih Paket Hosting<br />
            <span className="text-white">
              Sesuai Kebutuhan Anda
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white max-w-2xl mx-auto mb-10"
          >
            Tanpa biaya tersembunyi. Setup server & domain kami yang urus, Anda terima beres dan langsung pakai.
          </motion.p>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 bg-white/10 p-2 rounded-xl backdrop-blur-md inline-flex border border-white/20"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all duration-300 ${activeTab === tab.id
                  ? 'bg-white text-sky-500 shadow-lg scale-105'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Content */}
      <section className="py-20 px-4 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto">

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Duration Selector untuk Hosting+Domain & Hosting PHP */}
              {(activeTab === 'hosting-domain' || activeTab === 'hosting-php') && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex justify-center mb-10"
                >
                  <div className="bg-white p-2 rounded-xl shadow-lg border border-gray-100 flex gap-2">
                    {(activeTab === 'hosting-php' ? ['1', '3', '6', '12'] : ['1', '6', '12']).map((dur) => (
                      <button
                        key={dur}
                        onClick={() => setSelectedDuration(dur)}
                        className={`px-4 sm:px-6 py-2 rounded-lg font-bold text-sm transition-all whitespace-nowrap ${selectedDuration === dur
                          ? 'bg-gray-900 text-white shadow-md'
                          : 'text-gray-500 hover:bg-gray-50'
                          }`}
                      >
                        {dur} Bulan
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Grid Layout */}
              <div className={`grid gap-6 ${(activeTab === 'hosting-domain' || activeTab === 'hosting-php')
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                }`}>
                {(activeTab === 'hosting-domain' || activeTab === 'hosting-php') ? (
                  // Logic khusus Hosting + Domain & Hosting PHP (Durations based)
                  pricingData[activeTab].durations[selectedDuration] ? (
                    pricingData[activeTab].durations[selectedDuration].map((pkg, idx) => (
                      <PricingCard
                        key={idx}
                        pkg={pkg}
                        idx={idx}
                        color={pricingData[activeTab].color}
                        duration={`${selectedDuration} Bulan`}
                      />
                    ))
                  ) : (
                    <div className="col-span-3 text-center py-10 text-gray-500">
                      Pilih durasi yang tersedia.
                    </div>
                  )
                ) : (
                  // Logic Custom Project
                  pricingData[activeTab].segments.map((segment, sIdx) => {
                    const content = segment.packages.map((pkg, pIdx) => (
                      <PricingCard
                        key={`${sIdx}-${pIdx}`}
                        pkg={pkg}
                        idx={pIdx}
                        color={pricingData[activeTab].color}
                        duration={segment.duration || ''}
                      />
                    ));
                    return content;
                  })
                )}
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* Feature Highlight */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-green-600">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Setup Instan & Anti Ribet</h3>
              <p className="text-gray-600">Terima beres! Kami setup semua keperluan server Anda sampai online.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Keamanan Terjamin</h3>
              <p className="text-gray-600">Data Anda aman dengan proteksi SSL gratis dan backup berkala.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-purple-600">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Performa Tinggi</h3>
              <p className="text-gray-600">Server optimal menjamin website Anda loading cepat dan stabil.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

function PricingCard({ pkg, idx, color, duration }) {
  const isPopular = pkg.popular;
  const isCustom = pkg.price === 'Hubungi Kami' || pkg.price.includes('49.000') || pkg.price.includes('299.000') || pkg.price.includes('499.000') || pkg.price.includes('749.000');

  const features = pkg.features || [
    'Setup Server & Domain',
    'Managed Services',
    'Full Support',
    'Terima Beres'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
      className={`flex flex-col relative group bg-white rounded-2xl border transition-all duration-300 overflow-hidden hover:-translate-y-1 ${isPopular ? 'border-primary shadow-xl ring-1 ring-primary/20' : 'border-gray-200 hover:shadow-lg hover:border-primary/50'
        }`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
          BEST CHOICE
        </div>
      )}

      <div className="p-6 sm:p-8 flex-1">
        <div className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-gray-900">{pkg.name}</h3>
            {duration && (
              <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">
                {duration}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 line-clamp-2">{pkg.spec}</p>
        </div>

        <div className="mb-6 flex items-baseline gap-1">
          {pkg.price !== 'Hubungi Kami' && <span className="text-sm font-semibold text-gray-500">Rp</span>}
          <span className={`text-3xl font-black ${isPopular ? 'text-primary' : 'text-gray-900'}`}>{pkg.price}</span>
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((feat, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
              <Check className={`w-4 h-4 ${isPopular ? 'text-primary' : 'text-green-500'} flex-shrink-0`} />
              {feat}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 sm:p-8 pt-0 mt-auto">
        <a
          href={isCustom
            ? `https://wa.me/62882008146761?text=Halo,%20saya%20tertarik%20dengan%20project%20${pkg.name}`
            : `https://wa.me/62882008146761?text=Halo,%20saya%20tertarik%20dengan%20paket%20${pkg.name}%20harga%20${pkg.price}`
          }
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full py-3.5 px-6 rounded-xl font-bold text-center transition-all ${isPopular
              ? 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/30'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}
        >
          {isCustom ? 'Hubungi Kami' : 'Pilih Paket'}
        </a>
      </div>
    </motion.div>
  );
}
