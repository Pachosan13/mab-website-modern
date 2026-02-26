import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import LawyerProfilePage from './pages/LawyerProfilePage';
import OurTeamPage from './pages/OurTeamPage';
import PracticeAreasPage from './pages/PracticeAreasPage';
import PracticeAreasIndexPage from './pages/PracticeAreasIndexPage';
import PracticeAreaProfilePage from './pages/PracticeAreaProfilePage';

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  useEffect(() => {
    if (location.hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }

        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }, 100);

      return () => clearTimeout(timer);
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollManager />
        <div className="min-h-screen bg-slate-50">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nuestro-equipo" element={<OurTeamPage />} />
            <Route path="/areas-de-practica" element={<PracticeAreasPage />} />
            <Route path="/areas" element={<PracticeAreasIndexPage />} />
            <Route path="/areas/:slug" element={<PracticeAreaProfilePage />} />
            <Route path="/abogados/:slug" element={<LawyerProfilePage />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;