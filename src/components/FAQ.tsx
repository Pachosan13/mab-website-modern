import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Por qué elegir una firma boutique en vez de un bufete grande?',
      answer: 'La atención personalizada, la confidencialidad y la rapidez en la toma de decisiones son claves. Nuestros socios atienden cada caso directamente.'
    },
    {
      question: '¿Cómo garantiza MAB la confidencialidad de sus clientes?',
      answer: 'Nuestra estructura interna y procesos legales aseguran total discreción. No verás nuestra publicidad en vallas, verás resultados y cero filtraciones.'
    },
    {
      question: '¿Qué tipo de clientes atiende MAB?',
      answer: 'Empresarios, inversionistas, directores de family offices, multinacionales y particulares con alto patrimonio que requieren soluciones legales sofisticadas en Panamá.'
    },
    {
      question: '¿Qué hago si tengo una disputa legal urgente?',
      answer: 'Contáctanos. Nuestra experiencia en litigios y derecho penal permite respuesta inmediata y defensa estratégica.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Preguntas Frecuentes sobre Abogados en Panamá
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-slate-50 rounded-2xl border border-slate-200 hover:border-amber-300 transition-all duration-300 overflow-hidden"
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-amber-50 transition-colors duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-slate-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-amber-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;