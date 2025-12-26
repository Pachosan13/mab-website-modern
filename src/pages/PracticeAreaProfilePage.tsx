import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import PracticeAreaProfile from '../components/PracticeAreaProfile';
import Footer from '../components/Footer';
import { getPracticeAreaBySlug } from '../data/practiceAreas';

const PracticeAreaProfilePage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/areas" replace />;
  }

  const practiceAreaData = getPracticeAreaBySlug(slug);

  if (!practiceAreaData) {
    return <Navigate to="/areas" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{practiceAreaData.seoTitle || `${practiceAreaData.nombre} | MAB`}</title>
        <meta name="description" content={practiceAreaData.seoDescription || `Asesoría especializada en ${practiceAreaData.nombre.toLowerCase()} en Panamá.`} />
        {practiceAreaData.keywords && (
          <meta name="keywords" content={practiceAreaData.keywords.join(', ')} />
        )}
        <meta property="og:title" content={practiceAreaData.seoTitle || `${practiceAreaData.nombre} | MAB`} />
        <meta property="og:description" content={practiceAreaData.seoDescription || `Asesoría especializada en ${practiceAreaData.nombre.toLowerCase()} en Panamá.`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://mab.com.pa/areas/${slug}`} />
      </Helmet>
      
      <div>
        <Header />
        <div className="pt-24">
          <PracticeAreaProfile {...practiceAreaData} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PracticeAreaProfilePage;