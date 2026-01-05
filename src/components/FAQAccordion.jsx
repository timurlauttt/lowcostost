import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Bagaimana cara order hosting?',
      answer: 'Mudah sekali! Pilih paket yang sesuai, klik tombol "Pilih Paket", lalu hubungi kami via WhatsApp. Tim kami akan memandu Anda step by step sampai website aktif.'
    },
    {
      question: 'Apa perbedaan antar paket hosting?',
      answer: 'Perbedaan utama ada di kapasitas storage, bandwidth, dan jumlah domain. Paket Starter cocok untuk pemula, Paket Bisnis untuk UMKM, dan Paket Enterprise untuk perusahaan besar dengan traffic tinggi.'
    },
    {
      question: 'Apakah bisa migrasi dari hosting lain?',
      answer: 'Bisa! Kami menyediakan layanan migrasi GRATIS untuk semua paket. Tim teknis kami akan membantu proses perpindahan tanpa downtime dan data Anda tetap aman.'
    },
    {
      question: 'Metode pembayaran apa saja yang diterima?',
      answer: 'Kami menerima pembayaran via Transfer Bank (BCA, Mandiri, BRI, BNI), E-wallet (OVO, GoPay, DANA), dan QRIS. Pembayaran bisa dilakukan bulanan atau tahunan.'
    },
    {
      question: 'Bagaimana jika ada masalah teknis?',
      answer: 'Tim support kami siap membantu 24/7! Hubungi kami via WhatsApp atau email kapan saja. Kami komit untuk merespon dalam maksimal 30 menit untuk masalah urgent.'
    },
    {
      question: 'Apakah ada jaminan uptime?',
      answer: 'Ya! Kami berkomitmen memberikan uptime 99.9%. Jika terjadi downtime di luar maintenance terjadwal, kami akan memberikan kompensasi sesuai kebijakan SLA.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary-dark mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Temukan jawaban untuk pertanyaan umum seputar layanan kami
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-primary/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-bold text-primary-dark pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-primary" />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center p-6 bg-gradient-to-r from-primary/10 to-primary-dark/10 rounded-lg"
        >
          <p className="text-gray-700 mb-4">
            Masih ada pertanyaan lain? Jangan ragu untuk menghubungi kami!
          </p>
          <motion.a
            href="https://wa.me/62882008146761?text=Halo,%20saya%20mau%20tanya%20tentang%20hosting"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 transition-all"
          >
            Hubungi Support
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
