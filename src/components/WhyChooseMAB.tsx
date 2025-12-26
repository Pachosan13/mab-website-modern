import React from 'react';
import { Shield, Lightbulb, Users, Award } from 'lucide-react';

const WhyChooseMAB = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Confidencialidad Absoluta",
      description: "Protegemos la información de nuestros clientes con los más altos estándares de seguridad y discreción profesional."
    },
    {
      icon: Lightbulb,
      title: "Asesoría Preventiva Estratégica",
      description: "Anticipamos riesgos legales y diseñamos soluciones proactivas que protegen su patrimonio antes de que surjan conflictos."
    },
    {
      icon: Users,
      title: "Atención Directa de Socios",
      description: "Cada cliente recibe atención personalizada de socios senior, garantizando experiencia y compromiso en cada caso."
    },
    {
      icon: Award,
      title: "Reconocidos por Legal500 & Chambers",
      description: "Nuestra firma legal en Panamá ha sido reconocida internacionalmente por la excelencia en servicios legales corporativos."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
          <div className="inline-block mb-6">
            <span className="text-amber-600 font-semibold text-lg tracking-wider uppercase">Nuestra Ventaja Competitiva</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: '#0A2540' }}>
            ¿Por qué Elegir Moreno & Arjona – Bureau?
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Con más de <strong className="text-[#0A2540]">45 años de experiencia</strong>, somos una firma de abogados en Panamá reconocida por nuestro enfoque estratégico, atención directa de socios y reputación internacional avalada por <strong className="text-amber-600">Legal500 y Chambers</strong>. Ofrecemos servicios legales confiables y asesoría jurídica estratégica para empresas, familias e inversionistas que buscan un bufete legal con trayectoria comprobada.
          </p>
        </div>

        {/* Grid de Razones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-slate-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="800"
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Icon Container */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-[#0A2540] to-[#0A2540]/80 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight" style={{ color: '#0A2540' }}>
                      {reason.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="mt-6 w-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
          <div className="inline-block bg-slate-900 rounded-2xl px-8 py-4">
            <p className="text-white text-lg font-semibold">
              <span className="text-amber-400">Abogados corporativos en Panamá</span> con más de cuatro décadas protegiendo patrimonios
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMAB;

