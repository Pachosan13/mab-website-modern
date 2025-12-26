import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WhyChooseMAB from '../components/WhyChooseMAB';
import FounderTestimonial from '../components/FounderTestimonial';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  const location = useLocation();

  // Handle hash navigation when coming from other pages
  useEffect(() => {
    if (location.hash) {
      // Small delay to ensure DOM is fully rendered
      const timer = setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  // Initialize AOS on mount
  useEffect(() => {
    const initAOS = () => {
      if (typeof window !== 'undefined' && (window as any).AOS) {
        (window as any).AOS.init({ 
          once: true,
          duration: 800,
          easing: 'ease-in-out'
        });
        // Refresh AOS to detect new elements
        (window as any).AOS.refresh();
      }
    };

    // Wait for AOS script to load
    if ((window as any).AOS) {
      initAOS();
    } else {
      // If AOS is not loaded yet, wait a bit
      const timer = setTimeout(initAOS, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <HeroSection />
      <WhyChooseMAB />
      <FounderTestimonial />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;