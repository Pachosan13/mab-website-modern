import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PracticeAreasHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[74vh] overflow-hidden pt-24 bg-slate-950">
      <div className="absolute inset-0">
        <img
          src="/EQUIPO3.jpg"
          alt="Equipo legal de MAB"
          className="h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/50 via-[#0A2540]/40 to-[#0A2540]/50" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[74vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className={`w-full max-w-4xl transition-all duration-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="mb-8 inline-flex items-center text-xs font-semibold tracking-[0.26em] text-white/80">
            MAB
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] text-white md:text-6xl lg:text-7xl">
            Áreas de Práctica
            <span className="mt-3 block bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Precisión jurídica para decisiones clave
            </span>
          </h1>

          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
            Asesoría legal estratégica para empresas, inversionistas y familias en Panamá.
          </p>

          <div className="mt-12 h-px w-28 bg-gradient-to-r from-amber-400/90 to-transparent" />

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/#contacto"
              className="group inline-flex items-center justify-center rounded-xl bg-amber-500 px-7 py-4 text-base font-semibold text-slate-950 transition-all duration-300 hover:bg-amber-400"
            >
              Agenda tu Consulta
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="#lista-areas"
              className="inline-flex items-center justify-center rounded-xl border border-white/25 px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 hover:bg-white/10"
            >
              Ver Especialidades
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasHero;