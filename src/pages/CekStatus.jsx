import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, CheckCircle, XCircle, Clock, Server, Globe, Calendar, AlertCircle, FileText } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { orderService } from '../services/orderService';

export default function CekStatus() {
  const [searchInput, setSearchInput] = useState('');
  const [searchType, setSearchType] = useState('domain'); // 'domain' or 'resi'
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  // Helper untuk mapping status API ke status UI
  const mapApiStatusToUi = (apiStatus) => {
    switch (apiStatus) {
      case 'pending':
      case 'paid':
      case 'processing':
        return 'on progress';
      case 'completed':
        return 'active';
      case 'cancelled':
        return 'expired';
      default:
        return 'unknown';
    }
  };

  const handleCheck = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const cleanInput = searchInput.toLowerCase().trim();
      const data = await orderService.checkStatus(cleanInput);

      if (data) {
        const uiStatus = mapApiStatusToUi(data.status);

        const mappedResult = {
          status: uiStatus,
          apiStatus: data.status,
          statusLabel: data.status_label,
          domain: data.nama_domain,
          resi: data.resi,
          paket: data.paket,
          tglOrder: new Date(data.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
          // Data default untuk field yang mungkin belum ada di API
          estimasiSelesai: '1-2 Hari Kerja',
          progress: data.status === 'processing' ? 50 : 25,
          ssl: 'Dalam Proses',
          backup: 'Belum Aktif',
          notes: data.status_label || 'Sedang diproses',

          // Data Mockup untuk status active (karena API belum return detail technical)
          tglAktif: data.created_at ? new Date(data.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : '-',
          tglExpired: '-',
          sisaHari: 30,
          storage: { used: '0 MB', total: '1 GB', percentage: 0 },
          bandwidth: { used: '0 GB', total: 'Unlimited', percentage: 0 },
          cpanel: '#'
        };

        setResult(mappedResult);
      } else {
        setResult({
          status: 'notfound',
          searchValue: cleanInput,
          searchType: searchType
        });
      }
    } catch (error) {
      console.error('Error checking status:', error);
      alert('Gagal terhubung ke server. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };


  const getStatusBadge = (status, sisaHari, apiStatus, statusLabel) => {
    if (status === 'on progress') {
      // Prioritize statusLabel from backend, otherwise map apiStatus
      let text = 'Sedang Diproses';
      if (statusLabel) {
        text = statusLabel;
      } else if (apiStatus === 'pending') {
        text = 'Menunggu Pembayaran';
      } else if (apiStatus === 'paid') {
        text = 'Sudah Dibayar';
      }

      return {
        text: text,
        color: 'bg-blue-500',
        icon: Clock
      };
    } else if (status === 'expired') {
      return {
        text: 'Expired',
        color: 'bg-red-500',
        icon: XCircle
      };
    } else if (status === 'warning' || sisaHari < 30) {
      return {
        text: 'Akan Expired',
        color: 'bg-yellow-500',
        icon: AlertCircle
      };
    } else if (status === 'active') {
      return {
        text: 'Aktif',
        color: 'bg-green-500',
        icon: CheckCircle
      };
    }
    return {
      text: 'Unknown',
      color: 'bg-gray-500',
      icon: Clock
    };
  };

  return (
    <div className="antialiased bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 md:px-8 relative overflow-hidden" style={{ backgroundColor: '#38BDF8' }}>
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
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6"
          >
            Cek Status Hosting
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-white/90 mb-8"
          >
            Masukkan nama domain Anda untuk mengecek status hosting
          </motion.p>

          {/* Search Form */}
          <motion.form
            onSubmit={handleCheck}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            {/* Search Type Selector */}
            <div className="flex justify-center gap-2 sm:gap-4 mb-4">
              <button
                type="button"
                onClick={() => setSearchType('domain')}
                className={`px-3 sm:px-6 py-2 rounded-lg font-bold transition-all text-sm sm:text-base ${searchType === 'domain'
                  ? 'bg-white text-primary-dark'
                  : 'bg-white/10 text-white border-2 border-white/20 hover:bg-white/20'
                  }`}
              >
                <Globe className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                Cari Domain
              </button>
              <button
                type="button"
                onClick={() => setSearchType('resi')}
                className={`px-3 sm:px-6 py-2 rounded-lg font-bold transition-all text-sm sm:text-base ${searchType === 'resi'
                  ? 'bg-white text-primary-dark'
                  : 'bg-white/10 text-white border-2 border-white/20 hover:bg-white/20'
                  }`}
              >
                <FileText className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                Cari Nomor Resi
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                {searchType === 'domain' ? (
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                ) : (
                  <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                )}
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder={
                    searchType === 'domain'
                      ? 'Masukkan domain (contoh: namadomain.com)'
                      : 'Masukkan nomor resi (contoh: LCH-PHP-1234567890-123)'
                  }
                  className="w-full pl-12 pr-4 py-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all shadow-lg"
                  required
                />
              </div>
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-950 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                {loading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Checking...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    Cek Status
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Results Section */}
      {result && (
        <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-5xl mx-auto">
            {result.status === 'notfound' ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg border-2 border-gray-200 p-8 text-center shadow-lg"
              >
                <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {result.searchType === 'domain' ? 'Domain Tidak Ditemukan' : 'Nomor Resi Tidak Ditemukan'}
                </h3>
                <p className="text-gray-600 mb-6">
                  {result.searchType === 'domain' ? 'Domain' : 'Nomor resi'}{' '}
                  <span className="font-semibold text-primary">{result.searchValue}</span> tidak terdaftar dalam sistem kami.
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Pastikan domain yang Anda masukkan sudah benar atau hubungi admin untuk informasi lebih lanjut.
                </p>
                <motion.a
                  href="https://wa.me/62882008146761?text=Halo,%20saya%20ingin%20bertanya%20tentang%20status%20hosting"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Hubungi Admin
                </motion.a>
              </motion.div>
            ) : (
              <>
                {/* Status Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8"
                >
                  {(() => {
                    const statusBadge = getStatusBadge(result.status, result.sisaHari, result.apiStatus, result.statusLabel);
                    const StatusIcon = statusBadge.icon;
                    return (
                      <div className="bg-white rounded-lg border-2 border-gray-200 p-6 shadow-lg">
                        <div className="flex items-center justify-between flex-wrap gap-4">
                          <div className="flex items-center gap-4">
                            <div className={`w-16 h-16 ${statusBadge.color} rounded-lg flex items-center justify-center`}>
                              <StatusIcon className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <h2 className="text-2xl font-black text-gray-900">{result.domain}</h2>
                              <p className="text-gray-600">Paket: {result.paket}</p>
                            </div>
                          </div>
                          <div className={`px-6 py-3 ${statusBadge.color} text-white font-bold rounded-lg text-lg`}>
                            {statusBadge.text}
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>

                {/* Nomor Resi */}
                {result.resi && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="mb-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 border-2 border-primary/20"
                  >
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Nomor Resi:</p>
                        <p className="text-xl font-black text-primary font-mono">{result.resi}</p>
                      </div>
                      <button
                        onClick={() => navigator.clipboard.writeText(result.resi)}
                        className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-dark transition-all"
                      >
                        Copy Resi
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Info Grid untuk On Progress */}
                {result.status === 'on progress' ? (
                  <div className="mb-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="bg-white rounded-lg border-2 border-gray-200 p-6 shadow-lg mb-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Clock className="w-6 h-6 text-blue-500" />
                        <h3 className="text-lg font-bold text-gray-900">Progress Setup</h3>
                      </div>
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-bold text-blue-500">{result.progress}%</span>
                        </div>
                        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${result.progress}%` }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="h-full bg-blue-500"
                          />
                        </div>
                      </div>

                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-lg border-2 border-gray-200 p-6 shadow-lg"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Calendar className="w-6 h-6 text-primary" />
                          <h3 className="text-lg font-bold text-gray-900">Tanggal Order</h3>
                        </div>
                        <p className="text-2xl font-bold text-primary">{result.tglOrder}</p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white rounded-lg border-2 border-gray-200 p-6 shadow-lg"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Clock className="w-6 h-6 text-blue-500" />
                          <h3 className="text-lg font-bold text-gray-900">Estimasi Selesai</h3>
                        </div>
                        <p className="text-2xl font-bold text-blue-500">{result.estimasiSelesai}</p>
                      </motion.div>
                    </div>



                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6"
                    >
                      <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5" />
                        Informasi
                      </h3>
                      <p className="text-sm text-blue-900 mb-3">
                        Hosting Anda sedang dalam proses setup. Tim kami akan menghubungi Anda via WhatsApp
                        setelah hosting siap digunakan.
                      </p>
                      <a
                        href={`https://wa.me/62882008146761?text=Halo,%20saya%20ingin%20cek%20status%20hosting%20dengan%20resi:%20${result.resi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        Hubungi Admin
                      </a>
                    </motion.div>
                  </div>
                ) : (
                  <>
                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {/* Tanggal Aktif */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-lg border-2 border-gray-200 p-6 shadow-lg"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Calendar className="w-6 h-6 text-primary" />
                          <h3 className="text-lg font-bold text-gray-900">Tanggal Aktif</h3>
                        </div>
                        <p className="text-2xl font-bold text-primary">{result.tglAktif}</p>
                      </motion.div>

                      {/* Tanggal Expired */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-lg border-2 border-gray-200 p-6 shadow-lg"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Clock className="w-6 h-6 text-red-500" />
                          <h3 className="text-lg font-bold text-gray-900">Tanggal Expired</h3>
                        </div>
                        <p className="text-2xl font-bold text-red-500">{result.tglExpired}</p>
                        <p className="text-sm text-gray-600 mt-2">
                          {result.sisaHari > 0 ? (
                            <span className="text-green-600">Sisa {result.sisaHari} hari</span>
                          ) : (
                            <span className="text-red-600">Expired {Math.abs(result.sisaHari)} hari yang lalu</span>
                          )}
                        </p>
                      </motion.div>
                    </div>



                    {/* Action Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      {result.sisaHari < 30 && result.sisaHari > 0 && (
                        <a
                          href="https://wa.me/62882008146761?text=Halo,%20saya%20ingin%20perpanjang%20hosting"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-6 py-4 bg-green-500 text-white font-bold rounded-lg text-center hover:bg-green-600 hover:shadow-xl transition-all"
                        >
                          Perpanjang Sekarang
                        </a>
                      )}
                      {result.status === 'expired' && (
                        <a
                          href="https://wa.me/62882008146761?text=Halo,%20hosting%20saya%20expired,%20bagaimana%20cara%20perpanjang?"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-6 py-4 bg-red-500 text-white font-bold rounded-lg text-center hover:bg-red-600 hover:shadow-xl transition-all"
                        >
                          Hubungi Admin
                        </a>
                      )}
                    </motion.div>
                  </>
                )}
              </>
            )}
          </div>
        </section>
      )}



      <Footer />
      <ScrollToTop />
    </div>
  );
}
