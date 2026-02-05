import React from 'react';
import { Mail, Phone, ArrowRight, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contacta a MAB: Agenda tu Consulta Legal
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Si necesitas asesoría legal en Panamá de verdad, aquí tienes el respaldo de una firma reconocida, 
            confiable y eficiente.
          </p>
          <p className="text-lg text-amber-400 mt-4 font-semibold">
            Agenda tu consulta con un socio y descubre por qué somos la firma de abogados en Panamá 
            recomendada por empresarios que no dejan nada al azar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mr-6">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">Email</h3>
                <a 
                  href="mailto:info@mab.com.pa" 
                  className="text-amber-400 hover:text-amber-300 transition-colors duration-300 text-lg"
                >
                  info@mab.com.pa
                </a>
              </div>
            </div>

            <div className="flex items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mr-6">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">Teléfono</h3>
                <a 
                  href="tel:+50729755566" 
                  className="text-amber-400 hover:text-amber-300 transition-colors duration-300 text-lg"
                >
                  +507 297-5566
                </a>
              </div>
            </div>

            <div className="flex items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mr-6">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">Horario</h3>
                <p className="text-slate-300 text-lg">Lunes a viernes, 8:00 a.m. a 5:00 p.m.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div style={{ height: '651px' }}>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/cwPCkgXO4FgD5HjKDIAQ"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                id="inline-cwPCkgXO4FgD5HjKDIAQ" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Filtro Citas"
                data-height="651"
                data-layout-iframe-id="inline-cwPCkgXO4FgD5HjKDIAQ"
                data-form-id="cwPCkgXO4FgD5HjKDIAQ"
                title="Filtro Citas"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;