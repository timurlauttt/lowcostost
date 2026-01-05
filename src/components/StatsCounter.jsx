import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Users, Clock, HeadphonesIcon } from 'lucide-react';

function Counter({ end, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, hasAnimated]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  const stats = [
    {
      icon: Users,
      value: 100,
      suffix: '+',
      label: 'Pelanggan Aktif',
      color: 'from-primary to-primary-dark'
    },
    {
      icon: Clock,
      value: 99.9,
      suffix: '%',
      label: 'Uptime Guarantee',
      color: 'from-primary-dark to-primary'
    },
    {
      icon: HeadphonesIcon,
      value: 24,
      suffix: '/7',
      label: 'Support Online',
      color: 'from-primary to-primary-dark'
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden bg-gradient-to-b from-primary to-primary-dark">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </motion.div>
              
              <div className={`text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              
              <p className="text-base sm:text-lg text-white/80 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
