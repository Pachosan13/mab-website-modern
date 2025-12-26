import React, { useEffect, useState } from 'react';
import { ArrowRight, Shield, Scale, Users, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white pt-24">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-10 leading-tight">
            Abogados En Panamá Para{' '}
            <span className="relative">
              <span className="text-amber-700">
                Ejecutivos y Empresas
              </span>
            </span>{' '}
            Que No Admiten Errores
          </h1>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed max-w-4xl mx-auto">
              En Moreno & Arjona – Bureau (MAB), somos el bufete de abogados en Panamá que anticipa riesgos, 
              protege tu patrimonio y resuelve lo que otros ni siquiera ven venir.
            </p>

          </div>

          <div className={`flex flex-col sm:flex-row gap-8 justify-center items-center mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a 
              href="#contacto" 
              className="group relative bg-slate-900 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-2xl flex items-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative z-10">Agenda tu Consulta Legal</span>
              <ArrowRight className="ml-3 w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            </a>
            <a 
              href="tel:+50729755566" 
              className="group border-2 border-slate-300 text-slate-700 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-slate-100 hover:text-slate-900 transition-all duration-300 hover:scale-105"
            >
              +507 297-5566
            </a>
          </div>

          {/* Trust indicators with enhanced design */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { icon: Shield, title: 'Confidencialidad Total', desc: 'Discreción absoluta en cada caso' },
              { icon: Scale, title: 'Reconocimiento Internacional', desc: 'Legal500 y Chambers' },
              { icon: Users, title: 'Atención Personalizada', desc: 'Socios atienden cada caso' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="group flex flex-col items-center p-8 bg-slate-100 rounded-2xl border border-slate-200 hover:bg-slate-200 hover:border-slate-300 transition-all duration-500 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-amber-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-slate-900 font-bold text-xl mb-3 text-center">{item.title}</h3>
                  <p className="text-slate-600 text-center leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-8 h-12 border-2 border-slate-300 rounded-full flex justify-center mb-2">
            <div className="w-1 h-4 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <ChevronDown className="w-6 h-6 text-slate-400 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;