import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import LawyerProfile from '../components/LawyerProfile';
import Footer from '../components/Footer';
import { getLawyerBySlug } from '../data/lawyers';

const LawyerProfilePage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/" replace />;
  }

  const lawyerData = getLawyerBySlug(slug);

  if (!lawyerData) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <LawyerProfile {...lawyerData} />
      <Footer />
    </div>
  );
};

export default LawyerProfilePage;