import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import LawyerProfilePage from './pages/LawyerProfilePage';
import OurTeamPage from './pages/OurTeamPage';
import PracticeAreasPage from './pages/PracticeAreasPage';
import PracticeAreasIndexPage from './pages/PracticeAreasIndexPage';
import PracticeAreaProfilePage from './pages/PracticeAreaProfilePage';

function App() {
  return (
    <HelmetProvider>
      <Router>
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