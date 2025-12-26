import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Calculator, 
  Ship, 
  Scale, 
  Heart, 
  Shield, 
  Stethoscope, 
  Home, 
  FileText, 
  Lightbulb, 
  Users, 
  Plane 
} from 'lucide-react';
import { getAllPracticeAreas } from '../data/practiceAreas';

const Services = () => {
  const practiceAreas = getAllPracticeAreas();
  
  const iconMap: { [key: string]: any } = {
    'derecho-corporativo-y-empresarial': Building2,
    'derecho-tributario-y-fiscal': Calculator,
    'derecho-maritimo': Ship,
    'derecho-civil-y-litigios': Scale,
    'derecho-familiar': Heart,
    'derecho-penal': Shield,
    'lesiones-personales': Stethoscope,
    'bienes-raices-e-inmobiliario': Home,
    'testamentos-y-sucesiones': FileText,
    'propiedad-intelectual': Lightbulb,
    'derecho-laboral': Users,
    'inmigracion-y-movilidad': Plane
  };

  return (
    <section id="servicios" className="py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-amber-600 font-semibold text-lg tracking-wider uppercase">Servicios Especializados</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            Servicios Legales Especializados en Panamá
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Nuestros abogados especializados en Panamá atienden personalmente cada caso, garantizando 
            atención directa de socios y soluciones integrales para empresarios, directores financieros, 
            family offices e inversionistas que buscan una firma de abogados con atención personalizada 
            y absoluta confidencialidad.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {practiceAreas.map((area, index) => {
            const Icon = iconMap[area.slug] || Building2;
            return (
              <Link
                to={`/areas/${area.slug}`}
                key={index}
                className="group relative p-8 bg-white rounded-3xl border border-slate-200/50 hover:border-amber-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                {/* Floating background element */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 group-hover:scale-150"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors duration-300 leading-tight">
                    {area.nombre}
                  </h3>
                  
                  {/* Hover indicator */}
                  <div className="mt-4 w-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:w-12 transition-all duration-500 rounded-full"></div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;