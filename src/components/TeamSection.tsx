import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Linkedin } from 'lucide-react';
import { getAllLawyers } from '../data/lawyers';

const TeamSection = () => {
  const lawyers = getAllLawyers();

  return (
    <section id="equipo" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-amber-600 font-semibold text-lg tracking-wider uppercase">Nuestro Equipo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Abogados Expertos en MAB
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Conozca a nuestro equipo de abogados especializados, cada uno con experiencia comprobada 
            en sus áreas de práctica y comprometidos con la excelencia legal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lawyers.map((lawyer, index) => (
            <div 
              key={lawyer.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden border border-slate-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={lawyer.foto_abogado} 
                    alt={lawyer.nombre_completo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                
                {/* Contact overlay */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <a 
                      href={`mailto:${lawyer.email}`}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                    >
                      <Mail className="w-5 h-5 text-white" />
                    </a>
                    {lawyer.linkedin_url && (
                      <a 
                        href={lawyer.linkedin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                      >
                        <Linkedin className="w-5 h-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                  {lawyer.nombre_completo}
                </h3>
                <p className="text-amber-600 font-semibold mb-4">
                  {lawyer.cargo}
                </p>
                
                <div className="space-y-2 mb-6">
                  {lawyer.areas_practica_lista.slice(0, 2).map((specialty, idx) => (
                    <span 
                      key={idx}
                      className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium mr-2"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                <Link 
                  to={`/abogados/${lawyer.slug}`}
                  className="group/btn inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-300"
                >
                  Ver Perfil Completo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-slate-900 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-6">
              ¿Necesita Asesoría Legal Especializada?
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de abogados expertos está listo para brindarle la asesoría 
              legal que necesita con la confidencialidad y excelencia que caracteriza a MAB.
            </p>
            <Link 
              to="/#contacto"
              className="inline-flex items-center bg-amber-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-amber-700 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Contactar Equipo Legal
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;