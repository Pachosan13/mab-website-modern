import React from 'react';
import Header from '../components/Header';
import TeamSection from '../components/TeamSection';
import Footer from '../components/Footer';

const OurTeamPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="pt-24">
        <TeamSection />
      </div>
      <Footer />
    </div>
  );
};

export default OurTeamPage;