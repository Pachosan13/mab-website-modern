import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Mail, Phone, Linkedin, ArrowLeft } from 'lucide-react';

interface LawyerProfileProps {
  foto_abogado: string;
  nombre_completo: string;
  cargo: string;
  email?: string;
  linkedin_url?: string;
  telefono?: string;
  bio_corta: string;
  bio_extendida: string;
  educacion_lista: string[];
  areas_practica_lista: string[];
  news_insights_lista: string[];
}

const LawyerProfile: React.FC<LawyerProfileProps> = ({
  foto_abogado,
  nombre_completo,
  cargo,
  email = '',
  linkedin_url,
  telefono = '',
  bio_corta,
  bio_extendida,
  educacion_lista,
  areas_practica_lista,
  news_insights_lista
}) => {
  const hasEmail = Boolean(email) && !email.startsWith('TODO');
  const hasPhone = Boolean(telefono) && !telefono.startsWith('TODO');
  const hasLinkedin = Boolean(linkedin_url) && !linkedin_url.startsWith('TODO');
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    bio: false,
    educacion: false,
    areas: false,
    news: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation Back */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/nuestro-equipo" 
            className="inline-flex items-center text-slate-300 hover:text-amber-400 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al Equipo
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                  <img 
                    src={foto_abogado} 
                    alt={nombre_completo}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-blue-400/20 rounded-3xl blur-xl -z-10"></div>
              </div>
            </div>

            {/* Info */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {nombre_completo}
              </h1>
              <p className="text-2xl text-amber-400 font-semibold mb-8">
                {cargo}
              </p>

              {/* Contact Icons */}
              {(hasEmail || hasPhone || hasLinkedin) && (
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-8">
                  {hasEmail && (
                    <a 
                      href={`mailto:${email}`}
                      className="group flex items-center justify-center lg:justify-start bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                    >
                      <Mail className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  )}

                  {hasPhone && (
                    <a 
                      href={`tel:${telefono}`}
                      className="group flex items-center justify-center lg:justify-start bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                    >
                      <Phone className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  )}

                  {hasLinkedin && (
                    <a 
                      href={linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center lg:justify-start bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                    >
                      <Linkedin className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  )}
                </div>
              )}

              {/* Short Bio */}
              <p className="text-xl text-slate-300 leading-relaxed">
                {bio_corta}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extended Bio and Accordion Sections Side by Side */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Professional Profile Accordion */}
            <div>
              <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-slate-700/50 transition-colors duration-300"
                  onClick={() => toggleSection('bio')}
                >
                  <h2 className="text-3xl font-bold text-white">Perfil Profesional</h2>
                  {openSections.bio ? (
                    <ChevronUp className="w-6 h-6 text-amber-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-400" />
                  )}
                </button>
                
                {openSections.bio && (
                  <div className="px-8 pb-8 border-t border-slate-700">
                    <div className="pt-6">
                      <div className="prose prose-lg prose-invert max-w-none">
                        <p className="text-slate-300 leading-relaxed text-lg whitespace-pre-line">
                          {bio_extendida}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Accordion Sections */}
            <div>
              <div className="space-y-6">
                {/* Educación */}
                <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
                  <button
                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-slate-700/50 transition-colors duration-300"
                    onClick={() => toggleSection('educacion')}
                  >
                    <h3 className="text-2xl font-bold text-white">Educación</h3>
                    {openSections.educacion ? (
                      <ChevronUp className="w-6 h-6 text-amber-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-slate-400" />
                    )}
                  </button>
                  
                  {openSections.educacion && (
                    <div className="px-8 pb-8 border-t border-slate-700">
                      <div className="pt-6 space-y-4">
                        {educacion_lista.map((item, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                            <p className="text-slate-300 leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>



                {/* Áreas de Práctica */}
                <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
                  <button
                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-slate-700/50 transition-colors duration-300"
                    onClick={() => toggleSection('areas')}
                  >
                    <h3 className="text-2xl font-bold text-white">Áreas de Práctica</h3>
                    {openSections.areas ? (
                      <ChevronUp className="w-6 h-6 text-amber-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-slate-400" />
                    )}
                  </button>
                  
                  {openSections.areas && (
                    <div className="px-8 pb-8 border-t border-slate-700">
                      <div className="pt-6 space-y-4">
                        {areas_practica_lista.map((item, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                            <p className="text-slate-300 leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* News & Insights */}
                <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
                  <button
                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-slate-700/50 transition-colors duration-300"
                    onClick={() => toggleSection('news')}
                  >
                    <h3 className="text-2xl font-bold text-white">News & Insights</h3>
                    {openSections.news ? (
                      <ChevronUp className="w-6 h-6 text-amber-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-slate-400" />
                    )}
                  </button>
                  
                  {openSections.news && (
                    <div className="px-8 pb-8 border-t border-slate-700">
                      <div className="pt-6 space-y-4">
                        {news_insights_lista.map((item, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                            <p className="text-slate-300 leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LawyerProfile;