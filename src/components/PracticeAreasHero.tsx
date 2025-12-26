import React, { useEffect, useState } from 'react';
import { Scale, ChevronDown } from 'lucide-react';

const PracticeAreasHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
      {/* Background with Panama City skyline effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Legal Scale Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <Scale className="w-10 h-10 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Áreas de Práctica –{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">
              Moreno & Arjona Bureau
            </span>
          </h1>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              Descubre nuestras especialidades legales y cómo podemos ayudarte con soluciones jurídicas 
              de alto nivel en Panamá.
            </p>

            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Cada área de práctica está respaldada por la experiencia de nuestros socios y el reconocimiento 
              internacional de Legal500 y Chambers.
            </p>
          </div>

          {/* Trust indicators */}
          <div className={`flex flex-col sm:flex-row gap-8 justify-center items-center mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
              <span className="text-white font-semibold">12 Áreas Especializadas</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
              <span className="text-amber-400 font-semibold">Reconocimiento Internacional</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
              <span className="text-white font-semibold">Atención Personalizada</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center mb-2">
            <div className="w-1 h-4 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
          <ChevronDown className="w-6 h-6 text-white/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasHero;