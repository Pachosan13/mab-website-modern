import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import PracticeAreasHero from '../components/PracticeAreasHero';
import Footer from '../components/Footer';
import { getAllPracticeAreas } from '../data/practiceAreas';

const PracticeAreasIndexPage = () => {
  const practiceAreas = getAllPracticeAreas();

  return (
    <>
      <Helmet>
        <title>Áreas de Práctica – Firma Legal en Panamá | MAB</title>
        <meta name="description" content="Explora las áreas de práctica de MAB: corporativo, tributario, marítimo, civil, familiar, penal, laboral, inmobiliario e inmigración." />
        <meta name="keywords" content="areas practica legal panama, servicios legales panama, abogados especializados panama" />
        <meta property="og:title" content="Áreas de Práctica – Firma Legal en Panamá | MAB" />
        <meta property="og:description" content="Explora las áreas de práctica de MAB: corporativo, tributario, marítimo, civil, familiar, penal, laboral, inmobiliario e inmigración." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://mab.com.pa/areas" />
      </Helmet>

      <div className="min-h-screen bg-slate-50">
        <Header />
        <PracticeAreasHero />

        {/* Practice Areas Grid */}
        <section id="lista-areas" className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <span className="text-amber-600 font-semibold text-lg tracking-wider uppercase">Especialidades Legales</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Nuestras Áreas de Práctica
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Cada área está respaldada por la experiencia de nuestros socios y el compromiso 
                con la excelencia que caracteriza a MAB.
              </p>
            </div>

            {/* Practice Areas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {practiceAreas.map((area, index) => (
                <Link
                  key={area.slug}
                  to={`/areas/${area.slug}`}
                  className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-100 hover:border-amber-200/50 overflow-hidden cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating background element */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 group-hover:scale-150"></div>
                  
                  <div className="relative z-10 p-8">
                    <h2 className="text-2xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors duration-300 mb-4 leading-tight">
                      {area.nombre}
                    </h2>
                    
                    <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                      {area.heroParrafo.split('.')[0]}.
                    </p>
                    
                    {/* Call to Action */}
                    <div className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold text-lg transition-all duration-300">
                      Ver más
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                    
                    {/* Hover indicator */}
                    <div className="mt-4 w-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:w-16 transition-all duration-500 rounded-full"></div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Call to Action Section */}
            <div className="text-center">
              <div className="bg-slate-900 rounded-3xl p-12 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-blue-500/10"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-blue-500"></div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    ¿Necesita Asesoría Legal Especializada?
                  </h3>
                  <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Nuestro equipo de abogados expertos está listo para brindarle la asesoría legal 
                    que necesita con la confidencialidad y excelencia que caracteriza a MAB.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link 
                      to="/#contacto"
                      className="group bg-gradient-to-r from-amber-600 to-amber-700 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-amber-700 hover:to-amber-800 transition-all duration-300 hover:scale-105 shadow-xl flex items-center"
                    >
                      Agenda tu Consulta Legal
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <Link 
                      to="tel:+50729755566"
                      className="border-2 border-white/30 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-105 backdrop-blur-sm hover:border-white"
                    >
                      +507 297-5566
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PracticeAreasIndexPage;