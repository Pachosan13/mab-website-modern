import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0A2540' }}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/Imagen4.png" 
          alt="Equipo MAB" 
          className="w-full h-full object-cover"
          style={{ zIndex: 1 }}
        />
        {/* Overlay 60% más oscuro para resaltar el headline */}
        <div className="absolute inset-0 bg-black/60" style={{ zIndex: 2 }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/50 via-[#0A2540]/40 to-[#0A2540]/50" style={{ zIndex: 3 }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Headline */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            Bufete de Abogados en Panamá Especializado en Asesoría Legal Corporativa
          </h1>

          {/* Subheadline */}
          <p 
            className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-4xl mx-auto"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            Más de 45 años protegiendo el patrimonio de empresas, familias e inversionistas con estrategia, confidencialidad y rigor legal.
          </p>

          {/* CTA Button */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            <Link
              to="/#contacto"
              className="inline-flex items-center bg-amber-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-amber-500 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Agendar Consulta
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;

