import { motion } from 'framer-motion';
import { Mail, Instagram, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Produk & Layanan': [
      { name: 'Paket Hosting', href: '#pricing' },
      { name: 'Domain', href: '#pricing' },
      { name: 'Pendaftaran', href: '#contact' }
    ],
    'Keunggulan': [
      { name: 'SSL Gratis', href: '#features' },
      { name: 'Backup Harian', href: '#features' },
      { name: 'Support 24/7', href: '#features' }
    ],
    'Kontak': [
      { name: 'WhatsApp', href: 'https://wa.me/62882008146761' },
      { name: 'Email', href: 'mailto:admin@lowcosthost.id' },
      { name: 'Instagram', href: 'https://instagram.com/lowcosthost.id' }
    ]
  };

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-1"
          >
            <img 
              src="/LowCostHost-logo.png" 
              alt="LowCostHost" 
              className="h-12 mb-4 brightness-0 invert"
            />
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Solusi hosting terjangkau untuk UMKM, blogger, dan perusahaan. 
              Wujudkan website impian Anda bersama kami!
            </p>
            <div className="flex gap-4">
              <motion.a
                href="mailto:admin@lowcosthost.id"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white hover:text-primary-dark flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://instagram.com/lowcosthost.id"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white hover:text-primary-dark flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://wa.me/62882008146761"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white hover:text-primary-dark flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="font-bold text-lg mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>© {currentYear} LowCostHost. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
