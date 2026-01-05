import { motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function TestimonialCarousel() {
  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'Pemilik Toko Online',
      image: '👨‍💼',
      rating: 5,
      text: 'Sejak pindah ke LowCostHost, website toko online saya jadi lebih cepat dan stabil. Support-nya juga responsif banget!'
    },
    {
      name: 'Siti Nurhaliza',
      role: 'Blogger',
      image: '👩‍💻',
      rating: 5,
      text: 'Harga terjangkau tapi kualitas premium! Blog saya yang dulunya lemot sekarang jadi ngebut. Recommended!'
    },
    {
      name: 'Ahmad Rizky',
      role: 'Owner UMKM',
      image: '👨‍🍳',
      rating: 5,
      text: 'Migrasi gratis dan dibantu setup sampai selesai. Tim LowCostHost sangat membantu, cocok buat yang awam seperti saya.'
    },
    {
      name: 'Dewi Lestari',
      role: 'Freelance Designer',
      image: '👩‍🎨',
      rating: 5,
      text: 'Portfolio website saya loading-nya super cepat! Client pada impressed semua. Thank you LowCostHost!'
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section id="testimonial" className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-primary-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-lg"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white rounded-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Testimoni Pelanggan
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Dengar cerita sukses dari pelanggan yang sudah merasakan layanan kami
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 sm:p-8 h-full"
                  >
                    {/* Avatar */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-lg bg-white/20 flex items-center justify-center text-3xl">
                        {testimonial.image}
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg">{testimonial.name}</h3>
                        <p className="text-white/70 text-sm">{testimonial.role}</p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-white/90 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 rounded-lg transition-all duration-300 ${
                  index === selectedIndex
                    ? 'bg-white w-8'
                    : 'bg-white/30 w-2 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
