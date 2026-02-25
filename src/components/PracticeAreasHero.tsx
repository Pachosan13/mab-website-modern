import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

const PracticeAreasHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[78vh] overflow-hidden pt-24 bg-slate-950">
      <div className="absolute inset-0">
        <img
          src="/EQUIPO3.jpg"
          alt="Equipo legal de MAB"
          className="h-full w-full object-cover object-center scale-105"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050a14]/95 via-[#0a1528]/78 to-[#0b1220]/48" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(245,158,11,0.28),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_82%,rgba(16,24,40,0.72),transparent_58%)]" />
        <div className="absolute inset-0 border-y border-white/10" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[78vh] max-w-7xl grid-cols-1 items-end gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className={`lg:col-span-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="mb-7 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-white/90 backdrop-blur-md">
            MAB LEGAL STRATEGY
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] text-white md:text-6xl lg:text-7xl">
            Áreas de Práctica
            <span className="mt-3 block bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Precisión jurídica para decisiones críticas
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
            Combinamos visión estratégica, ejecución técnica y experiencia multisectorial para proteger patrimonio, escalar negocios y resolver conflictos complejos en Panamá.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/#contacto"
              className="group inline-flex items-center justify-center rounded-xl bg-amber-500 px-7 py-4 text-base font-semibold text-slate-950 shadow-2xl shadow-amber-900/40 transition-all duration-300 hover:scale-[1.03] hover:bg-amber-400"
            >
              Agenda tu Consulta
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="#lista-areas"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-white/20"
            >
              Ver Especialidades
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {['12 áreas especializadas', '45+ años de experiencia', 'Legal500 y Chambers'].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm font-medium text-slate-100 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className={`hidden lg:block lg:col-span-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-2xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-white/70">ENFOQUE MAB</p>
            <p className="mt-4 text-2xl font-semibold text-white">Estrategia legal con impacto real en negocio.</p>
            <div className="mt-6 h-px w-full bg-gradient-to-r from-white/0 via-white/40 to-white/0" />
            <p className="mt-6 text-sm leading-relaxed text-slate-200">
              Desde estructuración corporativa hasta litigios complejos, cada intervención se diseña para reducir riesgo y maximizar protección patrimonial.
            </p>
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