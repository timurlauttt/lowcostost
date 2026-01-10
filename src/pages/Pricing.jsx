import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, Globe, Server } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('hosting-php');
  const [selectedDuration, setSelectedDuration] = useState('1'); // Default 1 bulan untuk hosting-domain

  const pricingData = {
    'hosting-php': {
      title: 'Layanan Hosting PHP Bulanan',
      subtitle: 'Hosting Only , Free Subdomain',
      color: 'cyan',
      segments: [
        {
          duration: '1 Bulan',
          packages: [
            { name: 'Small-Hosting-1 bulan', spec: 'Max File 512 Mb', price: '50.000' },
            { name: 'Medium-Hosting-1 bulan', spec: 'Max File 1 Gb', price: '75.000' },
            { name: 'Large-Hosting-1 bulan', spec: 'Max File 2 Gb', price: '100.000' }
          ]
        },
        {
          duration: '6 Bulan',
          packages: [
            { name: 'Small-Hosting-6 bulan', spec: 'Max File 512 Mb', price: '250.000' },
            { name: 'Medium-Hosting-6 bulan', spec: 'Max File 1 Gb', price: '375.000' },
            { name: 'Large-Hosting-6 bulan', spec: 'Max File 2 Gb', price: '500.000' }
          ]
        },
        {
          duration: '12 Bulan',
          packages: [
            { name: 'Small-Hosting-12 bulan', spec: 'Max File 512 Mb + Free domain .my.id', price: '500.000' },
            { name: 'Medium-Hosting-12 bulan', spec: 'Max File 1 Gb + Free domain .my.id', price: '750.000' },
            { name: 'Large-Hosting-12 bulan', spec: 'Max File 2 Gb + Free domain .com', price: '1.000.000' }
          ]
        }
      ]
    },
    'hosting-domain': {
      title: 'Paket Hosting + Domain',
      subtitle: 'Bundle Hosting & Domain',
      color: 'green',
      durations: {
        '1': [
          { name: 'Paket Silver 1', spec: 'Host Max File 512 Mb + Domain .my.id', price: '80.000' },
          { name: 'Paket Silver 2', spec: 'Host Max File 512 Mb + Domain .com', price: '275.000' },
          { name: 'Paket Silver 3', spec: 'Host Max File 512 Mb + Domain .id', price: '300.000' },
          { name: 'Paket Gold 1', spec: 'Host Max File 1 Gb + Domain .my.id', price: '100.000' },
          { name: 'Paket Gold 2', spec: 'Host Max File 1 Gb + Domain .com', price: '300.000' },
          { name: 'Paket Gold 3', spec: 'Host Max File 1 Gb + Domain .id', price: '325.000' },
          { name: 'Paket Diamond 1', spec: 'Host Max File 2 Gb + Domain .my.id', price: '120.000' },
          { name: 'Paket Diamond 2', spec: 'Host Max File 2 Gb + Domain .com', price: '325.000' },
          { name: 'Paket Diamond 3', spec: 'Host Max File 2 Gb + Domain .id', price: '350.000' }
        ],
        '3': [
          { name: 'Paket Silver 1', spec: 'Host Max File 512 Mb + Domain .my.id', price: '240.000' },
          { name: 'Paket Silver 2', spec: 'Host Max File 512 Mb + Domain .com', price: '825.000' },
          { name: 'Paket Silver 3', spec: 'Host Max File 512 Mb + Domain .id', price: '900.000' },
          { name: 'Paket Gold 1', spec: 'Host Max File 1 Gb + Domain .my.id', price: '300.000' },
          { name: 'Paket Gold 2', spec: 'Host Max File 1 Gb + Domain .com', price: '900.000' },
          { name: 'Paket Gold 3', spec: 'Host Max File 1 Gb + Domain .id', price: '975.000' },
          { name: 'Paket Diamond 1', spec: 'Host Max File 2 Gb + Domain .my.id', price: '360.000' },
          { name: 'Paket Diamond 2', spec: 'Host Max File 2 Gb + Domain .com', price: '975.000' },
          { name: 'Paket Diamond 3', spec: 'Host Max File 2 Gb + Domain .id', price: '1.050.000' }
        ],
        '6': [
          { name: 'Paket Silver 1', spec: 'Host Max File 512 Mb + Domain .my.id', price: '280.000' },
          { name: 'Paket Silver 2', spec: 'Host Max File 512 Mb + Domain .com', price: '475.000' },
          { name: 'Paket Silver 3', spec: 'Host Max File 512 Mb + Domain .id', price: '500.000' },
          { name: 'Paket Gold 1', spec: 'Host Max File 1 Gb + Domain .my.id', price: '405.000' },
          { name: 'Paket Gold 2', spec: 'Host Max File 1 Gb + Domain .com', price: '600.000' },
          { name: 'Paket Gold 3', spec: 'Host Max File 1 Gb + Domain .id', price: '625.000' },
          { name: 'Paket Diamond 1', spec: 'Host Max File 2 Gb + Domain .my.id', price: '530.000' },
          { name: 'Paket Diamond 2', spec: 'Host Max File 2 Gb + Domain .com', price: '725.000' },
          { name: 'Paket Diamond 3', spec: 'Host Max File 2 Gb + Domain .id', price: '750.000' }
        ],
        '12': [
          { name: 'Paket Silver 1', spec: 'Host Max File 512 Mb + Domain .my.id', price: '500.000' },
          { name: 'Paket Silver 2', spec: 'Host Max File 512 Mb + Domain .com', price: '725.000' },
          { name: 'Paket Silver 3', spec: 'Host Max File 512 Mb + Domain .id', price: '750.000' },
          { name: 'Paket Gold 1', spec: 'Host Max File 1 Gb + Domain .my.id', price: '750.000' },
          { name: 'Paket Gold 2', spec: 'Host Max File 1 Gb + Domain .com', price: '975.000' },
          { name: 'Paket Gold 3', spec: 'Host Max File 1 Gb + Domain .id', price: '1.000.000' },
          { name: 'Paket Diamond 1', spec: 'Host Max File 2 Gb + Domain .my.id', price: '1.030.000' },
          { name: 'Paket Diamond 2', spec: 'Host Max File 2 Gb + Domain .com', price: '1.000.000' },
          { name: 'Paket Diamond 3', spec: 'Host Max File 2 Gb + Domain .id', price: '1.250.000' }
        ]
      }
    },
    'custom-project': {
      title: 'Harga Custom Project',
      subtitle: 'Pembuatan Sistem & Aplikasi',
      color: 'yellow',
      segments: [
        {
          duration: '',
          packages: [
            { name: 'Sistem Basic', spec: 'Max 2 fitur CRUD + modul login', price: 'Rp299.000' },
            { name: 'Sistem Intermediate', spec: 'Max 10 fitur CRUD', price: 'Rp499.000' },
            { name: 'Coding Simple', spec: 'To do list, game simple, kalkulator, dll', price: 'Rp49.000' },
            { name: 'Mobile App', spec: 'Flutter, android native, react, dll', price: 'Rp749.000' },
            { name: 'Sistem Advanced', spec: 'Hubungi kami', price: '-' }
          ]
        }
      ]
    },
  };

  const tabs = [
    { id: 'hosting-php', label: 'Hosting PHP', shortLabel: 'Hosting PHP', icon: Server },
    { id: 'hosting-domain', label: 'Hosting + Domain', shortLabel: 'Hosting + Domain', icon: Globe },
    { id: 'custom-project', label: 'Custom Project', shortLabel: 'Custom', icon: Server },
  ];

  const benefits = [
    'Hosting tanpa ribet & ready to use',
    'Harga terjangkau dengan layanan profesional',
    'Keamanan data terjamin'
  ];

  return (
    <div className="antialiased bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 md:px-8 relative overflow-hidden" style={{ backgroundColor: '#38BDF8' }}>
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
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg mb-6"
          >
            <span className="text-lg font-bold text-white">Daftar Harga</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4"
          >
            Jasa Layanan<br />
            <span className="text-3xl sm:text-5xl md:text-7xl">LOWCOSTHOST.ID</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-white/90 text-xs sm:text-base mb-6 px-4"
          >
            <div className="flex items-center gap-2 min-w-0">
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
              </svg>
              <span className="truncate">lowcosthost.id</span>
            </div>
            <div className="flex items-center gap-2 min-w-0">
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2 0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2z"/>
              </svg>
              <span className="truncate">lowcosthost.id</span>
            </div>
            <div className="flex items-center gap-2 min-w-0">
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="truncate">+62 882-0081-46761</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-8 px-4 sm:px-6 md:px-8 bg-white border-b-2 border-gray-100 top-[72px] z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center gap-2 sm:gap-4 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-bold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <tab.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-base hidden sm:inline">{tab.label}</span>
                <span className="text-xs sm:hidden">{tab.shortLabel}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl sm:text-3xl md:text-4xl font-black text-center mb-4"
            style={{ color: '#3B82F6' }}
          >
            {pricingData[activeTab].title}
          </motion.h2>
          
          {pricingData[activeTab].subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center text-gray-600 mb-8 sm:mb-12 text-sm sm:text-lg"
            >
              {pricingData[activeTab].subtitle}
            </motion.p>
          )}

          {/* Duration Selector untuk Hosting+Domain */}
          {activeTab === 'hosting-domain' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-md mx-auto mb-8 sm:mb-12"
            >
              <label className="block text-center text-gray-700 font-bold mb-2 sm:mb-3 text-base sm:text-lg">
                Pilih Durasi:
              </label>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-bold text-center rounded-lg border-2 border-primary bg-white text-gray-900 focus:outline-none focus:ring-4 focus:ring-primary/30 transition-all cursor-pointer shadow-lg hover:shadow-xl"
              >
                <option value="1">1 Bulan</option>
                <option value="3">3 Bulan</option>
                <option value="6">6 Bulan</option>
                <option value="12">12 Bulan</option>
              </select>
            </motion.div>
          )}

          {/* Pricing Tables - Loop through segments */}
          <div className={`grid grid-cols-1 ${activeTab === 'custom-project' ? 'max-w-4xl mx-auto' : activeTab === 'hosting-domain' ? 'lg:grid-cols-1 max-w-4xl mx-auto' : 'lg:grid-cols-3'} gap-6 lg:gap-8 mb-12`}>
            {activeTab === 'hosting-domain' ? (
              // Render hosting-domain dengan durasi terpilih
              <motion.div
                key={selectedDuration}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col"
              >
                <div className="bg-green-500 text-white px-4 py-3 sm:py-4 rounded-t-lg">
                  <h3 className="text-lg sm:text-xl font-bold text-center">
                    {selectedDuration === '1' ? '1 Bulan' : selectedDuration === '3' ? '3 Bulan' : selectedDuration === '6' ? '6 Bulan' : '12 Bulan'}
                  </h3>
                </div>
                
                <div className="bg-white rounded-lg rounded-t-none border-2 border-green-500 overflow-hidden shadow-lg flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 p-3 sm:p-4">
                    {pricingData['hosting-domain'].durations[selectedDuration].map((pkg, index) => {
                      const getBadgeColor = (name) => {
                        if (name.includes('Silver')) return 'bg-cyan-500';
                        if (name.includes('Gold')) return 'bg-green-500';
                        if (name.includes('Diamond')) return 'bg-orange-500';
                        return 'bg-purple-600';
                      };
                      
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="p-3 sm:p-4 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:shadow-lg transition-all bg-white"
                        >
                          <div className="flex flex-col items-center text-center">
                            <span className={`px-2.5 sm:px-3 py-1 sm:py-1.5 ${getBadgeColor(pkg.name)} text-white font-bold rounded-lg text-xs sm:text-sm mb-2 sm:mb-3`}>
                              {pkg.name}
                            </span>
                            <div className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">
                              {pkg.spec}
                            </div>
                            <span className="font-bold text-gray-900 text-base sm:text-lg">
                              {pkg.price}
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ) : (
              // Render untuk hosting-php dan custom-project seperti biasa
              pricingData[activeTab].segments.map((segment, segmentIndex) => {
                const colorScheme = {
                  cyan: {
                    bg: 'bg-cyan-500',
                    border: 'border-cyan-500',
                    hover: 'hover:bg-cyan-50',
                  },
                  green: {
                    bg: 'bg-green-500',
                    border: 'border-green-500',
                    hover: 'hover:bg-green-50',
                  },
                  yellow: {
                    bg: 'bg-yellow-500',
                    border: 'border-yellow-500',
                    hover: 'hover:bg-yellow-50',
                  }
                };
                
                const colors = colorScheme[pricingData[activeTab].color];
                
                return (
                  <motion.div
                    key={segmentIndex}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: segmentIndex * 0.1 }}
                    className="flex flex-col"
                  >
                    {segment.duration && (
                      <div className={`${colors.bg} text-white px-4 py-4 rounded-t-lg`}>
                        <h3 className="text-xl font-bold text-center">
                          {segment.duration}
                        </h3>
                      </div>
                    )}
                    
                    <div className={`bg-white rounded-lg ${segment.duration ? 'rounded-t-none' : ''} border-2 ${colors.border} overflow-hidden shadow-lg flex-1`}>
                      <div>
                        {segment.packages.map((pkg, index) => {
                          // Badge color berdasarkan nama paket
                          const getBadgeColor = (name) => {
                            if (name.includes('Silver')) return 'bg-cyan-500';
                            if (name.includes('Gold')) return 'bg-green-500';
                            if (name.includes('Diamond')) return 'bg-orange-500';
                            // Untuk custom project
                            if (name.includes('Basic')) return 'bg-cyan-500';
                            if (name.includes('Intermediate')) return 'bg-green-500';
                            if (name.includes('Advanced')) return 'bg-red-500';
                            if (name.includes('Mobile')) return 'bg-indigo-500';
                            if (name.includes('Coding')) return 'bg-yellow-500';
                            return 'bg-purple-600';
                          };
                          
                          return (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className={`p-4 border-b border-gray-100 ${colors.hover} transition-colors ${
                                index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className={`px-3 py-1.5 ${getBadgeColor(pkg.name)} text-white font-bold rounded-lg text-sm`}>
                                  {pkg.name}
                                </span>
                                <span className="font-bold text-gray-900 text-base">
                                  {pkg.price}
                                </span>
                              </div>
                              <div className="text-gray-600 text-sm">
                                {pkg.spec}
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                );
              })
            )}
            </div>

          {/* Section khusus untuk Custom Project */}
          {activeTab === 'custom-project' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 rounded-lg p-8 sm:p-12 text-white shadow-2xl">
                <h3 className="text-2xl sm:text-3xl font-black text-center mb-8">Our Best Project</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Left Project */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
                  >
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">🌐</div>
                      <h4 className="font-bold text-lg">Website dinamis & interaktif</h4>

                    </div>
                    <motion.a
                      href="https://wa.me/62882008146761?text=Halo,%20saya%20ingin%20info%20project%20website"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="block w-full px-4 py-2 bg-white text-purple-600 font-bold rounded-lg text-center hover:shadow-xl transition-all"
                    >
                      Info lebih hubungi MinHost
                    </motion.a>
                  </motion.div>

                  {/* Right Project */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
                  >
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">📱</div>
                      <h4 className="font-bold text-lg">Mobile App Project</h4>

                    </div>
                    <motion.a
                      href="https://wa.me/62882008146761?text=Halo,%20saya%20ingin%20info%20project%20mobile%20app"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="block w-full px-4 py-2 bg-white text-purple-600 font-bold rounded-lg text-center hover:shadow-xl transition-all"
                    >
                      Info lebih hubungi MinHost
                    </motion.a>
                  </motion.div>
                </div>
              </div>

              {/* Keuntungan Section untuk Custom Project */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-8 bg-white rounded-lg border-2 border-gray-200 p-6 sm:p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">Keuntungan yang Kami berikan:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-primary flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Hosting tanpa ribet & ready to use</h4>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-primary flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Harga terjangkau dengan layanan profesional</h4>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-primary flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Keamanan data terjamin</h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Features Section - hanya untuk non-custom project */}
          {activeTab !== 'custom-project' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-lg border-2 border-gray-200 p-6 sm:p-8 shadow-lg mb-12"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6 text-center">Fitur yang Didapatkan</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'SSL Gratis',
                'Email Support 24/7',
                'Free Migration',
                'Unlimited Bandwidth',
                'Free Subdomain',
                'PHP & MySQL Support',
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-xs sm:text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          )}

          {/* Benefits Section - hanya untuk non-custom project */}
          {activeTab !== 'custom-project' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Benefits List */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Keuntungan yang Kami berikan:</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-primary flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Custom Project CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white rounded-lg p-8 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-xs sm:text-sm font-semibold mb-1 sm:mb-2 opacity-90">TERSEDIA PAKET PREMIUM & CUSTOM</div>
                <div className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 opacity-90">PROJECT PEMBUATAN SISTEM</div>
                
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6">
                  Custom Project:<br />
                  <span className="text-3xl sm:text-4xl md:text-5xl">Start From 299.000</span>
                </h3>

                <motion.a
                  href="https://wa.me/62882008146761?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20custom%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-dark font-bold rounded-lg hover:shadow-xl transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Info lebih hubungi MinHost</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          )}
        </div>
      </section>

      <Footer />
      <ScrollToTop />

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
