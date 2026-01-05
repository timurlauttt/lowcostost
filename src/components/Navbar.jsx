import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Beranda', href: '/', external: false },
    { name: 'Produk', href: '/#pricing', external: false },
    { name: 'Keunggulan', href: '/#features', external: false },
    { name: 'Kontak', href: '/#contact', external: false },
    { name: 'Tentang Kami', href: '/tentang-kami', external: false },
  ];

  const handleClick = (href) => {
    setIsOpen(false);
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      if (path === '' || path === '/') {
        if (location.pathname !== '/') {
          window.location.href = href;
        } else {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-primary backdrop-blur-sm">
      <div className="flex items-center justify-between px-12 sm:px-16 md:px-24 lg:px-32 py-3 sm:py-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link to="/">
            <img 
              src="/LowCostHost-logo.png" 
              alt="Low-Cost-Host" 
              className="h-6 sm:h-10 md:h-12" 
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {menuItems.map((item, index) => {
            if (item.href.startsWith('/') && !item.href.includes('#')) {
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    className="text-white hover:text-primary-dark font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              );
            }
            return (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (item.href.includes('#')) {
                    e.preventDefault();
                    handleClick(item.href);
                  }
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-white hover:text-primary-dark font-medium transition-colors"
              >
                {item.name}
              </motion.a>
            );
          })}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: menuItems.length * 0.1 }}
          >
            <Link
              to="/hosting"
              className="px-6 py-2.5 bg-white text-primary-dark font-bold rounded-lg hover:shadow-lg hover:shadow-white/30 transition-all inline-block"
            >
              Daftar Hosting
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        className="lg:hidden overflow-hidden bg-primary-dark/95 backdrop-blur-sm"
      >
        <div className="px-12 py-6 space-y-4">
          {menuItems.map((item) => {
            if (item.href.startsWith('/') && !item.href.includes('#')) {
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-white hover:text-primary font-medium transition-colors py-2"
                >
                  {item.name}
                </Link>
              );
            }
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (item.href.includes('#')) {
                    e.preventDefault();
                    handleClick(item.href);
                  }
                  setIsOpen(false);
                }}
                className="block text-white hover:text-primary font-medium transition-colors py-2"
              >
                {item.name}
              </a>
            );
          })}
          <Link
            to="/hosting"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 bg-white text-primary-dark font-bold rounded-lg text-center hover:bg-primary hover:text-white transition-all"
          >
            Daftar Hosting
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
