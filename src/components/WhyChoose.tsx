import React from 'react';
import { Award, Shield, Globe, Users, Eye, Handshake } from 'lucide-react';

const WhyChoose = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Reconocidos en Legal500 y Chambers',
      description: 'por excelencia y resultados.'
    },
    {
      icon: Shield,
      title: 'Soluciones legales preventivas',
      description: 'blindamos tu patrimonio antes de que surjan los problemas.'
    },
    {
      icon: Globe,
      title: 'Experiencia comprobada',
      description: 'en derecho corporativo internacional, sucesiones complejas y estructuras fiduciarias.'
    },
    {
      icon: Users,
      title: 'Respaldo de alianzas estratégicas globales',
      description: 'para clientes con intereses en Panamá y el extranjero.'
    },
    {
      icon: Eye,
      title: 'Discreción total',
      description: '"Lo que no se dice, también se resuelve".'
    },
    {
      icon: Handshake,
      title: 'Más que un proveedor',
      description: 'tienes un aliado estratégico.'
    }
  ];

  return (
    <section id="nosotros" className="py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-100/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-amber-600 font-semibold text-lg tracking-wider uppercase">Excelencia Legal</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            ¿Por Qué Elegir MAB?
          </h2>
          <p className="text-3xl text-amber-600 font-bold mb-6">
            Bufete Boutique con Prestigio Internacional
          </p>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Si buscas un bufete de abogados confiable en Panamá, aquí tienes más que un proveedor: tienes un aliado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-100 hover:border-amber-200/50 overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating decoration */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-100/40 to-blue-100/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-125"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-slate-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-amber-700 transition-colors duration-300 leading-tight">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {reason.description}
                  </p>
                  
                  {/* Progress bar effect */}
                  <div className="mt-6 w-0 h-1 bg-gradient-to-r from-amber-500 to-blue-500 group-hover:w-16 transition-all duration-700 rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;