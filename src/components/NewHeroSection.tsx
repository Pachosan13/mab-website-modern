import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Calculator, Ship, Scale } from 'lucide-react';
import { getAllPracticeAreas } from '../data/practiceAreas';
import AnimatedCounter from './AnimatedCounter';

const NewHeroSection = () => {
  const practiceAreas = getAllPracticeAreas();
  
  // Icon mapping for practice areas
  const iconMap: { [key: string]: any } = {
    'derecho-corporativo-y-empresarial': Building2,
    'derecho-tributario-y-fiscal': Calculator,
    'derecho-maritimo': Ship,
    'derecho-civil-y-litigios': Scale,
  };

  // Get first 4 practice areas for display
  const featuredAreas = practiceAreas.slice(0, 4);

  return (
    <section className="relative min-h-screen bg-slate-900 pt-24 overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <img 
          src="/fondohero.png" 
          alt="MAB Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/75 to-slate-900/80"></div>
        {/* Subtle curved lines inspired by the reference */}
        <div className="absolute top-1/4 right-0 w-96 h-96 opacity-10">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <path
              d="M50,200 Q200,50 350,200 Q200,350 50,200"
              stroke="rgb(245,158,11)"
              strokeWidth="2"
              fill="none"
              opacity="0.3"
            />
            <path
              d="M80,200 Q200,80 320,200 Q200,320 80,200"
              stroke="rgb(245,158,11)"
              strokeWidth="1"
              fill="none"
              opacity="0.2"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Firm Name */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                MORENO &{' '}
                <span className="text-white">ARJONA</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8">
                BUREAU
              </h2>
            </div>

            {/* Tagline */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-amber-600 mb-6">
                Bufete Legal, Asesoría Corporativa y Servicios Legales En Panamá
              </h3>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                Especializados en derecho corporativo, tributario, asesoría legal, 
                fiscal y consultoría empresarial. Brindamos soluciones integrales que 
                impulsan el crecimiento empresarial y garantizan el cumplimiento normativo.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-8">
              <div className="text-center">
                <AnimatedCounter targetValue="45+" duration={2000} />
                <div className="text-slate-300 font-medium">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <AnimatedCounter targetValue="500+" duration={2000} />
                <div className="text-slate-300 font-medium">Clientes Atendidos</div>
              </div>
              <div className="text-center">
                <AnimatedCounter targetValue="12" duration={2000} />
                <div className="text-slate-300 font-medium">Áreas de Práctica</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/#contacto"
                className="group bg-amber-600 text-slate-900 px-8 py-4 rounded-xl text-lg font-bold hover:bg-amber-500 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center"
              >
                Agendar Consulta
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/areas"
                className="group border-2 border-amber-600 text-amber-400 px-8 py-4 rounded-xl text-lg font-bold hover:bg-amber-600 hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                Nuestros Servicios
              </Link>
            </div>
          </div>

          {/* Right Column - Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredAreas.map((area, index) => {
              const Icon = iconMap[area.slug] || Building2;
              return (
                <Link
                  key={area.slug}
                  to={`/areas/${area.slug}`}
                  className="group bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-amber-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                    {area.nombre}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors duration-300">
                    {area.heroParrafo.split('.')[0]}.
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-4 w-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:w-12 transition-all duration-500 rounded-full"></div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  );
};

export default NewHeroSection;