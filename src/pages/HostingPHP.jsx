import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Upload, FileText, Check, ChevronRight, ChevronLeft, Server, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function HostingPHP() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    framework: 'wordpress',
    packageType: 'hosting-only',
    duration: '1',
    domainType: 'subdomain',
    domainName: '',
    projectLink: '',
    database: null,
    notes: '',
    payment: null
  });

  const [resiNumber, setResiNumber] = useState('');
  const [showResi, setShowResi] = useState(false);

  const steps = [
    { number: 1, title: 'Data Diri' },
    { number: 2, title: 'Paket & Domain' },
    { number: 3, title: 'Upload File' },
    { number: 4, title: 'Konfirmasi' },
    { number: 5, title: 'Selesai' }
  ];

  const frameworks = [
    { value: 'wordpress', label: 'WordPress' },
    { value: 'laravel', label: 'Laravel' },
    { value: 'codeigniter', label: 'CodeIgniter' },
    { value: 'php-native', label: 'PHP Native' },
    { value: 'html+css', label: 'HTML + CSS' }
  ];

  const packageTypes = [
    { value: 'hosting-only', label: 'Hosting Only (Tanpa Domain)' },
    { value: 'hosting-domain', label: 'Hosting + Domain' }
  ];

  // Pricing berdasarkan paket dan durasi
  const getPricing = () => {
    const duration = parseInt(formData.duration);
    const isHostingOnly = formData.packageType === 'hosting-only';
    
    if (isHostingOnly) {
      // Hosting Only - Small package
      const prices = {
        1: 50000,
        3: 140000, // Hemat 10k
        6: 250000, // Hemat 50k
        12: 500000 // Free domain .my.id
      };
      return prices[duration] || 0;
    } else {
      // Hosting + Domain
      if (formData.domainType === 'my.id') {
        const prices = {
          1: 80000,
          3: 220000,
          6: 400000,
          12: 500000
        };
        return prices[duration] || 0;
      } else if (formData.domainType === 'com') {
        const prices = {
          1: 275000,
          3: 800000,
          6: 1500000,
          12: 2900000
        };
        return prices[duration] || 0;
      } else if (formData.domainType === 'id') {
        const prices = {
          1: 300000,
          3: 875000,
          6: 1650000,
          12: 3200000
        };
        return prices[duration] || 0;
      }
    }
    return 0;
  };

  const getDomainOptions = () => {
    if (formData.packageType === 'hosting-only') {
      return [
        { value: 'subdomain', label: 'Subdomain Gratis' }
      ];
    } else {
      return [
        { value: 'my.id', label: 'Domain .my.id' },
        { value: 'com', label: 'Domain .com' },
        { value: 'id', label: 'Domain .id' }
      ];
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      
      // Reset domain type jika package type berubah
      if (name === 'packageType') {
        if (value === 'hosting-only') {
          newData.domainType = 'subdomain';
        } else {
          newData.domainType = 'my.id';
        }
      }
      
      return newData;
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0]
    });
  };

  const generateResiNumber = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `LCH-PHP-${timestamp}-${random}`;
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    const newResi = generateResiNumber();
    setResiNumber(newResi);
    setShowResi(true);
    nextStep();
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="antialiased bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 relative overflow-hidden" style={{ backgroundColor: '#38BDF8' }}>
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
            className="text-2xl sm:text-4xl md:text-6xl font-black text-white mb-4 sm:mb-6"
          >
            Form Hosting PHP
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-lg md:text-xl text-white/90"
          >
            Lengkapi form di bawah ini untuk memulai setup hosting PHP Anda
          </motion.p>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="py-4 sm:py-8 px-3 sm:px-6 md:px-8 bg-white border-b-2 border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between relative">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center relative z-10">
                {/* Step Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-xs sm:text-base transition-all ${
                    currentStep > step.number
                      ? 'bg-green-500 text-white'
                      : currentStep === step.number
                      ? 'bg-primary text-white ring-4 ring-primary/30'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {currentStep > step.number ? (
                    <Check className="w-5 h-5 sm:w-6 sm:h-6" />
                  ) : (
                    step.number
                  )}
                </motion.div>
                
                {/* Step Label */}
                <span className={`text-[10px] sm:text-xs mt-2 font-medium text-center whitespace-nowrap ${
                  currentStep >= step.number ? 'text-primary' : 'text-gray-400'
                }`}>
                  {step.title}
                </span>
              </div>
            ))}
            
            {/* Connecting Lines */}
            <div className="absolute left-0 right-0 top-5 sm:top-6 flex items-center justify-between px-5 sm:px-6 -z-0">
              {steps.slice(0, -1).map((step, index) => (
                <div key={`line-${index}`} className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden mx-1 first:ml-0 last:mr-0">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: '0%' }}
                    animate={{
                      width: currentStep > step.number ? '100%' : '0%'
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Steps */}
      <section className="py-8 sm:py-16 md:py-20 px-3 sm:px-6 md:px-8 bg-gradient-to-b from-gray-50 to-white min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {/* Step 1: Data Diri */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-white rounded-lg border-2 border-gray-200 p-4 sm:p-8 space-y-4 sm:space-y-6"
              >
                <h2 className="text-xl sm:text-2xl font-black text-primary-dark mb-4 sm:mb-6">Data Diri & Framework</h2>
                
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Nomor WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                    placeholder="08123456789"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Framework / Platform *
                  </label>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {frameworks.map((fw) => (
                      <label
                        key={fw.value}
                        className={`p-3 sm:p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          formData.framework === fw.value
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 hover:border-primary/30'
                        }`}
                      >
                        <input
                          type="radio"
                          name="framework"
                          value={fw.value}
                          checked={formData.framework === fw.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-medium text-gray-700">{fw.label}</span>
                          {formData.framework === fw.value && (
                            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end pt-2 sm:pt-4">
                  <motion.button
                    onClick={nextStep}
                    disabled={!formData.name || !formData.phone}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-primary text-white font-bold rounded-lg hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                  >
                    Selanjutnya
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Paket & Domain */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-white rounded-lg border-2 border-gray-200 p-4 sm:p-8 space-y-4 sm:space-y-6"
              >
                <h2 className="text-xl sm:text-2xl font-black text-primary-dark mb-4 sm:mb-6">Pilih Paket & Domain</h2>
                
                {/* Tipe Paket */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                    Tipe Paket *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {packageTypes.map((pkg) => (
                      <label
                        key={pkg.value}
                        className={`p-4 sm:p-6 rounded-lg border-2 cursor-pointer transition-all ${
                          formData.packageType === pkg.value
                            ? 'border-primary bg-primary/5 ring-2 ring-primary/30'
                            : 'border-gray-200 hover:border-primary/30'
                        }`}
                      >
                        <input
                          type="radio"
                          name="packageType"
                          value={pkg.value}
                          checked={formData.packageType === pkg.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-2 sm:gap-3">
                            {pkg.value === 'hosting-only' ? (
                              <Server className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                            ) : (
                              <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                            )}
                            <div>
                              <p className="text-sm sm:text-base font-bold text-gray-900">{pkg.label}</p>
                              <p className="text-[10px] sm:text-xs text-gray-600 mt-1">
                                {pkg.value === 'hosting-only' 
                                  ? 'Gratis subdomain' 
                                  : 'Pilih domain .my.id, .com, atau .id'}
                              </p>
                            </div>
                          </div>
                          {formData.packageType === pkg.value && (
                            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Durasi */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                    Durasi Hosting *
                  </label>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {[
                      { value: '1', label: '1 Bulan' },
                      { value: '3', label: '3 Bulan' },
                      { value: '6', label: '6 Bulan' },
                      { value: '12', label: '12 Bulan' }
                    ].map((dur) => (
                      <label
                        key={dur.value}
                        className={`p-3 sm:p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          formData.duration === dur.value
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 hover:border-primary/30'
                        }`}
                      >
                        <input
                          type="radio"
                          name="duration"
                          value={dur.value}
                          checked={formData.duration === dur.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-medium text-gray-700">{dur.label}</span>
                          {formData.duration === dur.value && (
                            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Pricing Display */}
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-4 sm:p-6 border-2 border-primary/20">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs sm:text-sm text-gray-600 mb-1">Total Harga</p>
                      <p className="text-xl sm:text-3xl font-black text-primary">
                        {formatPrice(getPricing())}
                      </p>
                      <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
                        Untuk {formData.duration} bulan
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs sm:text-sm text-gray-600">Paket</p>
                      <p className="text-sm sm:text-base font-bold text-gray-900">
                        {formData.packageType === 'hosting-only' ? 'Hosting Only' : 'Hosting + Domain'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Domain Options */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                    Pilihan Domain *
                  </label>
                  <div className="space-y-2 sm:space-y-3">
                    {getDomainOptions().map((domain) => (
                      <label
                        key={domain.value}
                        className={`p-3 sm:p-4 rounded-lg border-2 cursor-pointer transition-all block ${
                          formData.domainType === domain.value
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 hover:border-primary/30'
                        }`}
                      >
                        <input
                          type="radio"
                          name="domainType"
                          value={domain.value}
                          checked={formData.domainType === domain.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-medium text-gray-700">{domain.label}</span>
                          {formData.domainType === domain.value && (
                            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Domain Name */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Nama Domain *
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      name="domainName"
                      value={formData.domainName}
                      onChange={handleChange}
                      required
                      className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                      placeholder={
                        formData.domainType === 'subdomain' 
                          ? 'namaanda' 
                          : `namaanda.${formData.domainType}`
                      }
                    />
                    {formData.domainType === 'subdomain' && (
                      <span className="flex items-center px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm bg-gray-100 text-gray-600 rounded-lg border-2 border-gray-200 whitespace-nowrap">
                        domain
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex justify-between pt-2 sm:pt-4">
                  <motion.button
                    onClick={prevStep}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 transition-all flex items-center gap-1 sm:gap-2"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    Kembali
                  </motion.button>
                  <motion.button
                    onClick={nextStep}
                    disabled={!formData.domainName}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-primary text-white font-bold rounded-lg hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-1 sm:gap-2"
                  >
                    Selanjutnya
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Upload File */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-white rounded-lg border-2 border-gray-200 p-4 sm:p-8 space-y-4 sm:space-y-6"
              >
                <h2 className="text-xl sm:text-2xl font-black text-primary-dark mb-4 sm:mb-6">Upload File Project</h2>
                
                {/* Link Google Drive */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Link Google Drive Project (ZIP) *
                  </label>
                  <input
                    type="url"
                    name="projectLink"
                    value={formData.projectLink}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                    placeholder="https://drive.google.com/file/d/..."
                  />
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-1.5 sm:mt-2">
                    Upload project Anda dalam format ZIP ke Google Drive dan pastikan link dapat diakses
                  </p>
                </div>

                {/* Upload Database */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Upload File Database (.sql) *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center hover:border-primary transition-colors">
                    <input
                      type="file"
                      name="database"
                      accept=".sql"
                      onChange={handleFileChange}
                      required
                      className="hidden"
                      id="database-upload"
                    />
                    <label htmlFor="database-upload" className="cursor-pointer">
                      <Upload className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-2 sm:mb-3" />
                      <p className="text-xs sm:text-sm text-gray-600 mb-1">
                        {formData.database ? (
                          <span className="text-primary font-semibold">{formData.database.name}</span>
                        ) : (
                          'Klik untuk upload file database'
                        )}
                      </p>
                      <p className="text-[10px] sm:text-xs text-gray-500">Format: .sql (Max 50MB)</p>
                    </label>
                  </div>
                </div>

                {/* Catatan Tambahan */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Catatan Tambahan (Opsional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tulis catatan khusus atau instruksi tambahan untuk setup hosting Anda..."
                  />
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-1.5 sm:mt-2">
                    Contoh: "Mohon install plugin WooCommerce", "Database menggunakan prefix wp2_", dll.
                  </p>
                </div>

                <div className="flex justify-between pt-2 sm:pt-4">
                  <motion.button
                    onClick={prevStep}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 transition-all flex items-center gap-1 sm:gap-2"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    Kembali
                  </motion.button>
                  <motion.button
                    onClick={nextStep}
                    disabled={!formData.projectLink || !formData.database}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-primary text-white font-bold rounded-lg hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-1 sm:gap-2"
                  >
                    Selanjutnya
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Konfirmasi & Pembayaran */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-white rounded-lg border-2 border-gray-200 p-4 sm:p-8 space-y-4 sm:space-y-6"
              >
                <h2 className="text-xl sm:text-2xl font-black text-primary-dark mb-4 sm:mb-6">Konfirmasi & Pembayaran</h2>
                
                {/* Rangkuman Pesanan */}
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Rangkuman Pesanan</h3>
                  
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div className="text-gray-600">Nama</div>
                    <div className="font-semibold text-gray-900">{formData.name}</div>
                    
                    <div className="text-gray-600">WhatsApp</div>
                    <div className="font-semibold text-gray-900">{formData.phone}</div>
                    
                    <div className="text-gray-600">Framework</div>
                    <div className="font-semibold text-gray-900">
                      {frameworks.find(f => f.value === formData.framework)?.label}
                    </div>
                    
                    <div className="text-gray-600">Tipe Paket</div>
                    <div className="font-semibold text-gray-900">
                      {formData.packageType === 'hosting-only' ? 'Hosting Only' : 'Hosting + Domain'}
                    </div>
                    
                    <div className="text-gray-600">Durasi</div>
                    <div className="font-semibold text-gray-900">{formData.duration} Bulan</div>
                    
                    <div className="text-gray-600">Domain</div>
                    <div className="font-semibold text-gray-900">
                      {formData.domainName}
                      {formData.domainType === 'subdomain' 
                        ? '.lowcosthost.id' 
                        : `.${formData.domainType}`}
                    </div>
                    
                    <div className="text-gray-600">Database</div>
                    <div className="font-semibold text-gray-900 truncate">
                      {formData.database?.name || '-'}
                    </div>
                  </div>

                  {formData.notes && (
                    <>
                      <hr className="my-4" />
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Catatan:</p>
                        <p className="text-sm text-gray-900 bg-white p-3 rounded-lg">{formData.notes}</p>
                      </div>
                    </>
                  )}

                  <hr className="my-4" />
                  
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-base sm:text-lg font-bold text-gray-900">Total Pembayaran</span>
                    <span className="text-xl sm:text-2xl font-black text-primary">
                      {formatPrice(getPricing())}
                    </span>
                  </div>
                </div>

                {/* Info Pembayaran */}
                <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Informasi Pembayaran</h3>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bank</span>
                      <span className="font-semibold text-gray-900">BCA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">No. Rekening</span>
                      <span className="font-semibold text-gray-900">1234567890</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Atas Nama</span>
                      <span className="font-semibold text-gray-900">LowCostHost</span>
                    </div>
                  </div>
                </div>

                {/* Upload Bukti Pembayaran */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Upload Bukti Pembayaran *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center hover:border-primary transition-colors">
                    <input
                      type="file"
                      name="payment"
                      accept="image/*"
                      onChange={handleFileChange}
                      required
                      className="hidden"
                      id="payment-upload"
                    />
                    <label htmlFor="payment-upload" className="cursor-pointer">
                      <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-2 sm:mb-3" />
                      <p className="text-xs sm:text-sm text-gray-600 mb-1">
                        {formData.payment ? (
                          <span className="text-primary font-semibold">{formData.payment.name}</span>
                        ) : (
                          'Klik untuk upload bukti pembayaran'
                        )}
                      </p>
                      <p className="text-[10px] sm:text-xs text-gray-500">Format: JPG, PNG (Max 5MB)</p>
                    </label>
                  </div>
                </div>

                <div className="flex justify-between pt-2 sm:pt-4">
                  <motion.button
                    onClick={prevStep}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 transition-all flex items-center gap-1 sm:gap-2"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    Kembali
                  </motion.button>
                  <motion.button
                    onClick={handleSubmit}
                    disabled={!formData.payment}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-1 sm:gap-2"
                  >
                    <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                    Kirim Pesanan
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Step 5: Selesai - Nota & Resi */}
            {currentStep === 5 && showResi && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-lg border-2 border-gray-200 p-6 sm:p-8"
              >
                <div className="text-center mb-6 sm:mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Check className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  
                  <h2 className="text-xl sm:text-3xl font-black text-primary-dark mb-3 sm:mb-4">
                    Pendaftaran Berhasil!
                  </h2>
                  <p className="text-gray-600">
                    Terima kasih telah mempercayai LowCostHost untuk kebutuhan hosting Anda
                  </p>
                </div>

                {/* Nomor Resi */}
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 border-2 border-primary/20">
                  <p className="text-xs sm:text-sm text-gray-600 mb-2 text-center">Nomor Resi Anda:</p>
                  <p className="text-lg sm:text-2xl font-black text-primary mb-3 sm:mb-4 font-mono text-center break-all">
                    {resiNumber}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                    <button
                      onClick={() => navigator.clipboard.writeText(resiNumber)}
                      className="px-3 sm:px-4 py-2 bg-primary text-white text-xs sm:text-sm font-bold rounded-lg hover:bg-primary-dark transition-all"
                    >
                      Copy Nomor Resi
                    </button>
                    <a
                      href="/cek-status"
                      className="px-3 sm:px-4 py-2 bg-white border-2 border-primary text-primary text-xs sm:text-sm font-bold rounded-lg hover:bg-primary hover:text-white transition-all text-center"
                    >
                      Cek Status
                    </a>
                  </div>
                </div>

                {/* Nota Pembelian */}
                <div className="bg-white border-2 border-gray-200 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 pb-2 sm:pb-3 border-b-2 border-gray-100">
                    Nota Pembelian
                  </h3>
                  
                  <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tanggal</span>
                      <span className="font-semibold text-gray-900">
                        {new Date().toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">No. Resi</span>
                      <span className="font-mono font-semibold text-gray-900">{resiNumber}</span>
                    </div>
                    
                    <hr className="my-3" />
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Nama</span>
                      <span className="font-semibold text-gray-900">{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">WhatsApp</span>
                      <span className="font-semibold text-gray-900">{formData.phone}</span>
                    </div>
                    
                    <hr className="my-3" />
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Paket</span>
                      <span className="font-semibold text-gray-900">
                        {formData.packageType === 'hosting-only' ? 'Hosting Only' : 'Hosting + Domain'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Framework</span>
                      <span className="font-semibold text-gray-900">
                        {frameworks.find(f => f.value === formData.framework)?.label}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Durasi</span>
                      <span className="font-semibold text-gray-900">{formData.duration} Bulan</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Domain</span>
                      <span className="font-semibold text-gray-900">
                        {formData.domainName}
                        {formData.domainType === 'subdomain' 
                          ? '.lowcosthost.id' 
                          : `.${formData.domainType}`}
                      </span>
                    </div>
                    
                    <hr className="my-3" />
                    
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-base sm:text-lg font-bold text-gray-900">Total</span>
                      <span className="text-lg sm:text-2xl font-black text-primary">
                        {formatPrice(getPricing())}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info Selanjutnya */}
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                  <h3 className="text-sm sm:text-base font-bold text-blue-900 mb-2 sm:mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Langkah Selanjutnya
                  </h3>
                  <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-blue-900">
                    <li className="flex gap-2">
                      <span className="font-bold">1.</span>
                      <span>Tim kami akan memverifikasi pembayaran Anda</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">2.</span>
                      <span>Setup hosting akan dimulai dalam 1-2 jam kerja</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">3.</span>
                      <span>Anda akan dihubungi via WhatsApp untuk konfirmasi</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">4.</span>
                      <span>Gunakan nomor resi untuk cek status hosting Anda</span>
                    </li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <motion.a
                    href={`https://wa.me/62882008146761?text=Halo,%20saya%20sudah%20melakukan%20pembayaran%20dengan%20nomor%20resi:%20${resiNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all text-center flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Hubungi via WhatsApp
                  </motion.a>
                  <motion.a
                    href="/"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-all text-center"
                  >
                    Kembali ke Beranda
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}