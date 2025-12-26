import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, ArrowLeft, ArrowRight, CheckCircle, Shield, Users, Award, Briefcase, Handshake, Lightbulb, TrendingUp, Target, Zap, Star, Gavel, Lock, Globe, FileText, Building2, Scale, Eye } from 'lucide-react';
import { PracticeArea } from '../data/practiceAreas';

const PracticeAreaProfile: React.FC<PracticeArea> = ({
  nombre,
  heroTitulo,
  heroParrafo,
  beneficios,
  servicios,
  historia,
  faq,
  porqueMab,
  cta,
  seoTitle,
  seoDescription,
  keywords
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Back */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/areas" 
            className="inline-flex items-center text-slate-600 hover:text-amber-600 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver a Áreas de Práctica
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              {heroTitulo}
            </h1>
            
            <div className="prose prose-xl prose-invert max-w-none mb-12">
              <p className="text-xl text-slate-300 leading-relaxed">
                {heroParrafo}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/#contacto"
                className="group bg-gradient-to-r from-amber-600 to-amber-700 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-amber-700 hover:to-amber-800 transition-all duration-300 hover:scale-105 shadow-xl flex items-center"
              >
                Agenda tu Consulta Legal
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link 
                to="tel:+50729755566"
                className="border-2 border-white/30 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-105 backdrop-blur-sm hover:border-white"
              >
                +507 297-5566
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              ¿Por Qué Elegir MAB?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Descubre las ventajas que nos distinguen como la firma legal de confianza en Panamá
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Award, 
                title: 'Reconocimiento Internacional', 
                desc: 'Certificados por Legal500 y Chambers por nuestra excelencia y resultados comprobados',
                color: 'from-amber-500 to-amber-600'
              },
              { 
                icon: Shield, 
                title: 'Soluciones Preventivas', 
                desc: 'Blindamos tu patrimonio antes de que surjan problemas, anticipando riesgos legales',
                color: 'from-blue-500 to-blue-600'
              },
              { 
                icon: Globe, 
                title: 'Experiencia Internacional', 
                desc: 'Expertise comprobado en derecho corporativo, sucesiones complejas y estructuras fiduciarias',
                color: 'from-green-500 to-green-600'
              },
              { 
                icon: Handshake, 
                title: 'Alianzas Estratégicas', 
                desc: 'Red global de socios para clientes con intereses en Panamá y el extranjero',
                color: 'from-purple-500 to-purple-600'
              },
              { 
                icon: Eye, 
                title: 'Discreción Total', 
                desc: 'Confidencialidad absoluta: "Lo que no se dice, también se resuelve"',
                color: 'from-slate-500 to-slate-600'
              },
              { 
                icon: Users, 
                title: 'Aliado Estratégico', 
                desc: 'Más que un proveedor, somos tu socio legal de confianza a largo plazo',
                color: 'from-orange-500 to-orange-600'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-100 hover:border-amber-200/50 overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating background element */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 group-hover:scale-150"></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors duration-300 mb-4 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                    
                    {/* Hover indicator */}
                    <div className="mt-4 w-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:w-12 transition-all duration-500 rounded-full"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cobertura integral del ciclo de vida empresarial con expertise especializado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: Building2, 
                title: 'Constitución Societaria', 
                desc: 'Sociedades anónimas, SRL, fundaciones y estructuras para inversionistas extranjeros',
                color: 'from-blue-500 to-blue-600'
              },
              { 
                icon: Handshake, 
                title: 'M&A y Joint Ventures', 
                desc: 'Fusiones, adquisiciones, alianzas estratégicas y reestructuraciones empresariales',
                color: 'from-green-500 to-green-600'
              },
              { 
                icon: FileText, 
                title: 'Contratos Comerciales', 
                desc: 'Revisión, redacción y negociación de acuerdos comerciales complejos',
                color: 'from-purple-500 to-purple-600'
              },
              { 
                icon: Scale, 
                title: 'Gobierno Corporativo', 
                desc: 'Acuerdos de accionistas, compliance regulatorio y prevención de conflictos',
                color: 'from-amber-500 to-amber-600'
              },
              { 
                icon: Gavel, 
                title: 'Litigios Empresariales', 
                desc: 'Defensa en tribunales, arbitrajes comerciales y resolución de disputas',
                color: 'from-red-500 to-red-600'
              },
              { 
                icon: Shield, 
                title: 'Protección de Activos', 
                desc: 'Holdings, sociedades offshore y planificación fiscal internacional',
                color: 'from-slate-500 to-slate-600'
              },
              { 
                icon: TrendingUp, 
                title: 'Due Diligence', 
                desc: 'Análisis integral de riesgos societarios, tributarios y regulatorios',
                color: 'from-orange-500 to-orange-600'
              },
              { 
                icon: Target, 
                title: 'Sucesión Empresarial', 
                desc: 'Planificación patrimonial y transferencia de empresas familiares',
                color: 'from-indigo-500 to-indigo-600'
              }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-100 hover:border-amber-200/50 overflow-hidden"
                  style={{ animationDelay: `${index * 75}ms` }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors duration-300 mb-3 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {service.desc}
                    </p>
                    
                    {/* Hover indicator */}
                    <div className="mt-3 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:w-8 transition-all duration-500 rounded-full"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Historia/Experiencia Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Experiencia Comprobada
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Casos reales que demuestran nuestra capacidad de anticipación y resolución
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: Lightbulb,
                title: 'Caso: Sociedad Familiar Bloqueada',
                desc: 'Cliente llegó tras años de parálisis por desorden documental y falta de acuerdos claros entre accionistas.',
                solution: 'En menos de 3 meses estructuramos solución legal que alineó accionistas, reactivó operaciones y evitó demanda judicial costosa.',
                color: 'from-amber-500 to-amber-600'
              },
              {
                icon: Globe,
                title: 'Caso: Expansión Multinacional',
                desc: 'Empresa multinacional buscaba expandirse a Centroamérica desde Panamá como hub regional.',
                solution: 'Asesoría integral: constitución societaria, compliance con SMV, negociación de joint ventures y blindaje de PI regional.',
                color: 'from-blue-500 to-blue-600'
              }
            ].map((caso, index) => {
              const Icon = caso.icon;
              return (
                <div 
                  key={index}
                  className="group bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden hover:scale-105 transition-all duration-500"
                >
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-blue-500/10 group-hover:from-amber-500/20 group-hover:to-blue-500/20 transition-all duration-500"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-blue-500"></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${caso.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                      {caso.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed mb-6">
                      {caso.desc}
                    </p>
                    <div className="border-l-4 border-amber-500 pl-6 py-4 bg-white/5 rounded-r-lg">
                      <p className="text-amber-200 font-semibold">
                        Solución: {caso.solution}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Client Testimonial */}
          <div className="bg-gradient-to-r from-amber-50 to-blue-50 rounded-3xl p-8 border border-amber-200/50">
            <div className="text-center">
              <Star className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <blockquote className="text-2xl font-bold text-slate-900 mb-4 italic">
                "Con MAB, sentí que ya tenían la jugada resuelta antes de que el problema apareciera. Me hicieron preguntas que ningún otro abogado se había planteado"
              </blockquote>
              <p className="text-slate-600 font-semibold">— Cliente Corporativo MAB</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="space-y-4">
            {faq.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-slate-200 hover:border-amber-300 transition-all duration-300 overflow-hidden"
              >
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-amber-50 transition-colors duration-300"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">
                    {item.pregunta}
                  </h3>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                
                {openFaqIndex === index && (
                  <div className="px-8 pb-6">
                    <p className="text-slate-600 leading-relaxed">
                      {item.respuesta}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué MAB Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Por Qué Elegir MAB
            </h2>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 rounded-3xl p-12 text-white relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-blue-500/10"></div>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 to-blue-500"></div>
              
              {/* Floating elements */}
              <div className="absolute top-8 right-8 w-24 h-24 bg-amber-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
              
              <div className="relative z-10 text-center">
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  El Socio Estratégico Que No Sabías Que Necesitabas
                </h3>
                
                <div className="max-w-4xl mx-auto">
                  <p className="text-xl text-slate-300 leading-relaxed mb-8">
                    La diferencia entre una empresa que prospera y otra que vive en riesgo es la calidad y anticipación de su soporte legal.
                  </p>
                  <p className="text-lg text-slate-400 leading-relaxed">
                    MAB ha sido el respaldo silencioso de algunas de las compañías más exitosas del país, negociando acuerdos multimillonarios y resolviendo crisis con discreción. Nuestro compromiso es entender a fondo tus prioridades y convertirnos en ese aliado legal que, incluso cuando no lo ves, ya está solucionando tu próxima preocupación.
                  </p>
                </div>
                
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { icon: Lock, title: 'Discreción', desc: 'Confidencialidad absoluta' },
                    { icon: Lightbulb, title: 'Anticipación', desc: 'Soluciones antes del problema' },
                    { icon: Handshake, title: 'Compromiso', desc: 'Aliados a largo plazo' }
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                        <Icon className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                        <h4 className="text-white font-bold mb-2">{item.title}</h4>
                        <p className="text-slate-300 text-sm">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              ¿Listo Para Comenzar?
            </h2>
            
            <div className="prose prose-lg prose-invert max-w-none mb-12">
              <p className="text-slate-300 leading-relaxed text-xl">
                {cta}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/#contacto"
                className="group bg-gradient-to-r from-amber-600 to-amber-700 text-white px-12 py-5 rounded-xl text-xl font-semibold hover:from-amber-700 hover:to-amber-800 transition-all duration-300 hover:scale-105 shadow-2xl flex items-center"
              >
                <CheckCircle className="w-6 h-6 mr-3" />
                Agenda tu Consulta
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link 
                to="tel:+50729755566"
                className="border-2 border-white/30 text-white px-12 py-5 rounded-xl text-xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-105 backdrop-blur-sm hover:border-white"
              >
                +507 297-5566
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreaProfile;