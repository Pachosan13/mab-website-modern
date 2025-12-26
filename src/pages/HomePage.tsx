import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import NewHeroSection from '../components/NewHeroSection';
import HighlightedBanner from '../components/HighlightedBanner';
import WhyChoose from '../components/WhyChoose';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Location from '../components/Location';
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

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <NewHeroSection />
      <HighlightedBanner />
      <WhyChoose />
      <FAQ />
      <Contact />
      <Location />
      <Footer />
    </div>
  );
};

export default HomePage;