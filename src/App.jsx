import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TestimonialCarousel from './components/TestimonialCarousel';
import PricingCards from './components/PricingCards';
import FeatureGrid from './components/FeatureGrid';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="antialiased bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <PricingCards />
      <FeatureGrid />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
