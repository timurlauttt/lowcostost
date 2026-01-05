import { motion } from 'framer-motion';
import { useState } from 'react';
import { Upload, FileText, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function HostingPHP() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    framework: 'wordpress',
    duration: '1',
    database: null,
    projectLink: '',
    domainType: 'subdomain',
    domainName: '',
    payment: null
  });

  const [resiNumber, setResiNumber] = useState('');
  const [showResi, setShowResi] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate resi number
    const newResi = generateResiNumber();
    setResiNumber(newResi);
    setShowResi(true);

    // Scroll to resi section
    setTimeout(() => {
      document.getElementById('resi-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const frameworks = [
    { value: 'wordpress', label: 'WordPress' },
    { value: 'laravel', label: 'Laravel' },
    { value: 'codeigniter', label: 'CodeIgniter' },
    { value: 'php-native', label: 'PHP Native' }
  ];

  const durations = [
    { value: '1', label: '1 Bulan - Rp 15.000' },
    { value: '3', label: '3 Bulan - Rp 40.000 (Hemat Rp 5.000)' },
    { value: '6', label: '6 Bulan - Rp 75.000 (Hemat Rp 15.000)' },
    { value: '12', label: '12 Bulan - Rp 144.000 (Hemat Rp 36.000)' }
  ];

  const domainTypes = [
    { value: 'subdomain', label: 'Subdomain Gratis' },
    { value: 'custom', label: 'Domain Kustom (namaanda.com)' }
  ];

  return (
    <div className="antialiased bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-primary to-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6"
          >
            Form Hosting PHP
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-white/90"
          >
            Lengkapi form di bawah ini untuk memulai setup hosting PHP Anda
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg border-2 border-gray-200 p-6 sm:p-8 space-y-6">
            
            {/* 1. Nama Pelanggan */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                1. Nama Pelanggan *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                placeholder="Masukkan nama lengkap Anda"
              />
            </div>

            {/* 2. Nomor WA */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                2. Nomor WhatsApp *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                placeholder="08123456789"
              />
            </div>

            {/* 3. Framework */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                3. Framework *
              </label>
              <select
                name="framework"
                value={formData.framework}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
              >
                {frameworks.map((fw) => (
                  <option key={fw.value} value={fw.value}>
                    {fw.label}
                  </option>
                ))}
              </select>
            </div>

            {/* 4. Durasi Hosting */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                4. Durasi Hosting *
              </label>
              <div className="space-y-2">
                {durations.map((dur) => (
                  <label
                    key={dur.value}
                    className={`block p-4 rounded-lg border-2 cursor-pointer transition-all ${
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
                      <span className="font-medium text-gray-700">{dur.label}</span>
                      {formData.duration === dur.value && (
                        <Check className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* 5. Upload File Database */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                5. Upload File Database (.sql) *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
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
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-600 mb-1">
                    {formData.database ? formData.database.name : 'Klik untuk upload file database'}
                  </p>
                  <p className="text-xs text-gray-500">Format: .sql (Max 50MB)</p>
                </label>
              </div>
            </div>

            {/* 6. Link Driver Projek */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                6. Link Google Drive Project (ZIP) *
              </label>
              <input
                type="url"
                name="projectLink"
                value={formData.projectLink}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                placeholder="https://drive.google.com/file/d/..."
              />
              <p className="text-xs text-gray-500 mt-1">
                Upload project Anda dalam format ZIP ke Google Drive dan pastikan link dapat diakses
              </p>
            </div>

            {/* 7. Pilihan Domain */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                7. Pilihan Domain *
              </label>
              <select
                name="domainType"
                value={formData.domainType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
              >
                {domainTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* 8. Nama Domain */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                8. Nama Domain *
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="domainName"
                  value={formData.domainName}
                  onChange={handleChange}
                  required
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                  placeholder={formData.domainType === 'subdomain' ? 'namaanda' : 'namaanda.com'}
                />
                {formData.domainType === 'subdomain' && (
                  <span className="flex items-center px-4 py-3 bg-gray-100 text-gray-600 rounded-lg border-2 border-gray-200">
                    .domain-utama
                  </span>
                )}
              </div>
            </div>

            {/* 9. Bukti Pembayaran */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                9. Bukti Pembayaran *
              </label>
              <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-4 mb-3">
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Transfer ke:</strong>
                </p>
                <p className="text-sm text-gray-600 mb-1">Bank BCA: 1234567890</p>
                <p className="text-sm text-gray-600 mb-1">a.n. LowCostHost</p>
                <p className="text-sm font-bold text-primary mt-2">
                  Total: Rp {parseInt(formData.duration) === 1 ? '15.000' : parseInt(formData.duration) === 3 ? '40.000' : parseInt(formData.duration) === 6 ? '75.000' : '144.000'}
                </p>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
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
                  <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-600 mb-1">
                    {formData.payment ? formData.payment.name : 'Klik untuk upload bukti pembayaran'}
                  </p>
                  <p className="text-xs text-gray-500">Format: JPG, PNG (Max 5MB)</p>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              Submit & Dapatkan Nomor Resi
            </motion.button>
          </form>
        </div>
      </section>

      {/* Resi Section */}
      {showResi && (
        <section id="resi-section" className="py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-primary to-primary-dark">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-lg p-8 text-center shadow-2xl"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-3xl font-black text-primary-dark mb-4">
                Pendaftaran Berhasil!
              </h2>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-sm text-gray-600 mb-2">Nomor Resi Anda:</p>
                <p className="text-2xl font-black text-primary mb-4 font-mono">
                  {resiNumber}
                </p>
                <button
                  onClick={() => navigator.clipboard.writeText(resiNumber)}
                  className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-dark transition-all"
                >
                  Copy Nomor Resi
                </button>
              </div>

              <div className="text-left space-y-3 mb-6">
                <h3 className="font-bold text-gray-900 mb-3">Data Pendaftaran:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="text-gray-600">Nama:</div>
                  <div className="font-semibold text-gray-900">{formData.name}</div>
                  
                  <div className="text-gray-600">WhatsApp:</div>
                  <div className="font-semibold text-gray-900">{formData.phone}</div>
                  
                  <div className="text-gray-600">Framework:</div>
                  <div className="font-semibold text-gray-900">{frameworks.find(f => f.value === formData.framework)?.label}</div>
                  
                  <div className="text-gray-600">Durasi:</div>
                  <div className="font-semibold text-gray-900">{formData.duration} Bulan</div>
                  
                  <div className="text-gray-600">Domain:</div>
                  <div className="font-semibold text-gray-900">
                    {formData.domainName}{formData.domainType === 'subdomain' ? '.lowcosthost.id' : ''}
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-900">
                  <strong>Langkah Selanjutnya:</strong><br/>
                  Tim kami akan memverifikasi pembayaran dan memulai setup hosting Anda dalam 1-2 jam kerja. 
                  Kami akan menghubungi Anda via WhatsApp dengan nomor resi ini untuk konfirmasi.
                </p>
              </div>

              <motion.a
                href={`https://wa.me/62882008146761?text=Halo,%20saya%20ingin%20cek%20status%20hosting%20dengan%20resi:%20${resiNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all"
              >
                Hubungi via WhatsApp
              </motion.a>
            </motion.div>
          </div>
        </section>
      )}

      <Footer />
      <ScrollToTop />
    </div>
  );
}
