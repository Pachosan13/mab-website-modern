import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Location = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ubicación de MAB
          </h2>
          <p className="text-xl text-slate-600">
            Bufete de Abogados en Centro Bancario en Obarrio, Ciudad de Panamá
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Dirección</h4>
                    <p className="text-slate-600">
                      Av Samuel Lewis y Gerardo Ortega<br />
                      PH Central Building, 5to piso<br />
                      P.O. BOX 0819-05618
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Horario</h4>
                    <p className="text-slate-600">8:00 a.m. a 5:00 p.m.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Teléfono</h4>
                    <p className="text-slate-600">
                      <a href="tel:+50729755566" className="hover:text-amber-600 transition-colors duration-300">
                        +507 297-5566
                      </a><br />
                      Fax: +507 263-8005
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                    <p className="text-slate-600">
                      <a href="mailto:info@mab.com.pa" className="hover:text-amber-600 transition-colors duration-300">
                        info@mab.com.pa
                      </a><br />
                      <a href="mailto:mab@mab.com.pa" className="hover:text-amber-600 transition-colors duration-300">
                        mab@mab.com.pa
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Ubicación Estratégica</h3>
            <div className="rounded-xl mb-6 overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.8714126987356!2d-79.52406410367743!3d8.983978291075541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8e526f7c153%3A0x43fc43cff1fd8fb9!2sPH%20Edificio%20Central%2C%20Av.%20Samuel%20Lewis%2C%20Panama%20City%2C%20Panam%C3%A1%20Province!5e0!3m2!1ses!2spa!4v1753097861090!5m2!1ses!2spa" 
                width="100%" 
                height="300" 
                style={{border: 0}} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-72 rounded-xl"
              />
            </div>
            <p className="text-slate-600 leading-relaxed">
              Nuestras oficinas están estratégicamente ubicadas en Centro Bancario de Obarrio, una de las zonas 
              financieras más importantes de Ciudad de Panamá, ofreciendo fácil acceso para nuestros 
              clientes ejecutivos y empresariales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;