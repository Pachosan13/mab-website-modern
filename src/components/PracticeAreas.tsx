import React from 'react';
import { ArrowRight, Building, Ship, Home, Calculator, Scale, Lightbulb, Users, Shield } from 'lucide-react';

const PracticeAreas = () => {
  const areas = [
    {
      icon: Building,
      title: 'Abogados corporativos en Panamá',
      description: 'asesoría en constitución de sociedades, fusiones y adquisiciones, contratos comerciales.'
    },
    {
      icon: Ship,
      title: 'Derecho marítimo',
      description: 'registro de naves, asesoría para navieras y empresas internacionales.'
    },
    {
      icon: Home,
      title: 'Derecho inmobiliario',
      description: 'compra, venta, traspaso y protección de activos inmobiliarios.'
    },
    {
      icon: Calculator,
      title: 'Derecho tributario y fiscal',
      description: 'planeación fiscal, defensa ante auditorías, estructuras offshore.'
    },
    {
      icon: Scale,
      title: 'Litigios y resolución de disputas',
      description: 'defensa estratégica y negociación en tribunales.'
    },
    {
      icon: Lightbulb,
      title: 'Propiedad intelectual',
      description: 'registro de marcas y patentes en Panamá.'
    },
    {
      icon: Users,
      title: 'Derecho laboral',
      description: 'cumplimiento y defensa para empresas.'
    },
    {
      icon: Shield,
      title: 'Derecho penal, familiar, sucesorio e inmigración',
      description: 'representación y defensa integral en cada área.'
    }
  ];

  return (
    <section id="areas" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Áreas de Práctica Legal en Panamá
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Descubre cómo nuestros abogados en Panamá pueden anticipar tus riesgos y blindar tu patrimonio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div 
                key={index}
                className="group bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-amber-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a 
            href="#contacto" 
            className="group inline-flex items-center bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Descubre Cómo Podemos Ayudarte
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;