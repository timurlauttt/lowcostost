import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format WhatsApp message
    const waMessage = `Halo LowCostHost!%0A%0ANama: ${formData.name}%0AEmail: ${formData.email}%0APesan: ${formData.message}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/62882008146761?text=${waMessage}`, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setStatus('Terima kasih! Anda akan diarahkan ke WhatsApp...');
    
    setTimeout(() => setStatus(''), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'admin@lowcosthost.id',
      link: 'mailto:admin@lowcosthost.id'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+62 882-0081-46761',
      link: 'https://wa.me/62882008146761'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@lowcosthost.id',
      link: 'https://instagram.com/lowcosthost.id'
    }
  ];

  return (
    <section id='contact' className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary-dark mb-4">
            Hubungi Kami
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Punya pertanyaan atau ingin konsultasi? Kami siap membantu Anda!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                  placeholder="nama@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>

              {status && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-primary/10 border border-primary/30 rounded-lg text-primary-dark text-sm"
                >
                  {status}
                </motion.div>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              >
                Kirim Pesan via WhatsApp
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(56, 189, 248, 0.2)' }}
                className="flex items-center gap-4 p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-primary/50 transition-all"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">{info.title}</p>
                  <p className="font-bold text-primary-dark">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Map/Illustration Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="p-8 bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-lg border-2 border-primary/20"
            >
              <h3 className="font-bold text-primary-dark text-xl mb-4">
                Jam Operasional Support
              </h3>
              <div className="space-y-2 text-gray-700">
                <p className="flex justify-between">
                  <span className="font-medium">Senin - Jumat:</span>
                  <span>09:00 - 21:00 WIB</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Sabtu - Minggu:</span>
                  <span>10:00 - 18:00 WIB</span>
                </p>
                <p className="mt-4 text-sm text-primary-dark font-semibold">
                  * Emergency support 24/7 via WhatsApp
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
