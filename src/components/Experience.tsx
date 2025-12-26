import React from 'react';
import { CheckCircle, Users, Clock, Shield } from 'lucide-react';

const Experience = () => {
  const highlights = [
    {
      icon: Users,
      title: 'Atención Personalizada',
      description: 'Nuestros socios atienden personalmente cada caso'
    },
    {
      icon: Clock,
      title: 'Respuesta Inmediata',
      description: 'Precisión, velocidad y anticipación a cada detalle legal'
    },
    {
      icon: Shield,
      title: 'Confidencialidad Garantizada',
      description: 'Nunca tengas dudas de quién defiende tus intereses'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Abogados en Ciudad de Panamá con{' '}
              <span className="text-amber-600">Experiencia Real</span> y{' '}
              <span className="text-amber-600">Atención Personalizada</span>
            </h2>
            
            <div className="prose prose-lg text-slate-600 mb-8">
              <p className="mb-6">
                Nuestros clientes llegan a MAB cuando enfrentan auditorías fiscales, sucesiones complejas, 
                litigios comerciales, o cuando requieren constituir sociedades o estructurar su legado.
              </p>
              <p className="mb-6">
                Han probado otros bufetes, pero eligen MAB por nuestra precisión, velocidad y capacidad 
                de anticiparnos a cada detalle legal.
              </p>
              <p className="mb-6 font-semibold text-slate-700">
                ¿Te preocupa la confidencialidad? ¿Temes errores legales costosos?
              </p>
              <p>
                En MAB, nuestros socios atienden personalmente cada caso para que nunca tengas dudas 
                de quién defiende tus intereses.
              </p>
            </div>

            <a 
              href="#contacto" 
              className="inline-flex items-center bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              Agenda tu Consulta
            </a>
          </div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div 
                  key={index}
                  className="group flex items-start p-6 bg-slate-50 rounded-2xl hover:bg-amber-50 transition-all duration-300 hover:scale-105 border border-slate-100 hover:border-amber-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="text-slate-600">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;