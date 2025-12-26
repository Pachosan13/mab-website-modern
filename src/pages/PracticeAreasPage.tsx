import React from 'react';
import Header from '../components/Header';
import PracticeAreasHero from '../components/PracticeAreasHero';
import PracticeAreasGrid from '../components/PracticeAreasGrid';
import Footer from '../components/Footer';

const PracticeAreasPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <PracticeAreasHero />
      <PracticeAreasGrid />
      <Footer />
    </div>
  );
};

export default PracticeAreasPage;