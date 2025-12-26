import React from 'react';

const FounderTestimonial = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200/50"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-50 to-transparent opacity-50 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#0A2540]/5 to-transparent rounded-full -ml-24 -mb-24"></div>
          
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
              {/* Image - Modern circular design with gradient border */}
              <div 
                className="flex-shrink-0 relative"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <div className="relative">
                  {/* Gradient ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500 via-amber-600 to-[#0A2540] p-1"></div>
                  {/* Image container */}
                  <div className="relative rounded-full overflow-hidden bg-white p-1">
                    <img 
                      src="/licenciadomoreno.jpg" 
                      alt="Lic. Moreno A." 
                      className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover shadow-xl"
                      onError={(e) => {
                        // Fallback si la imagen no existe
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  {/* Decorative dots */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-500 rounded-full shadow-lg"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#0A2540] rounded-full shadow-lg"></div>
                </div>
              </div>

              {/* Quote - Enhanced typography */}
              <div 
                className="flex-1 text-center lg:text-left"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                {/* Quote icon */}
                <div className="mb-6 flex justify-center lg:justify-start">
                  <svg className="w-12 h-12 text-amber-600 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                <blockquote className="mb-8">
                  <p className="text-xl md:text-2xl lg:text-3xl text-slate-800 leading-relaxed font-light italic">
                    "En Moreno & Arjona Bureau, nuestra misión ha sido siempre brindar asesoría legal de excelencia, 
                    protegiendo los intereses de nuestros clientes con la máxima confidencialidad y rigor profesional. 
                    Durante más de cuatro décadas, hemos construido relaciones de confianza basadas en resultados 
                    concretos y atención personalizada."
                  </p>
                </blockquote>
                
                {/* Author info - Enhanced design */}
                <div className="border-t border-slate-200 pt-6">
                  <p className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                    Lic. Moreno A.
                  </p>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <p className="text-amber-600 font-semibold text-lg">
                      Fundador y Socio Principal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderTestimonial;

