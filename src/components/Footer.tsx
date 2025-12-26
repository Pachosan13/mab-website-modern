import React from 'react';
import { Mail, Phone, MapPin, Scale } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 shadow-lg">
                <img 
                  src="/logo MAB1.png" 
                  alt="MAB Logo" 
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Moreno & Arjona – Bureau</h3>
                <p className="text-slate-400">Abogados de Confianza en Panamá</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
              Bufete boutique de alto nivel con sede en Panamá, especializado en brindar 
              asesoría legal de excelencia a ejecutivos, empresas y familias que no admiten errores.
            </p>
            <div className="flex items-center text-slate-900">
              <Scale className="w-5 h-5 mr-2" />
              <span className="text-sm">Reconocidos por Legal500 y Chambers</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Servicios Principales</h4>
            <ul className="space-y-3 text-white">
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Derecho Corporativo</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Derecho Tributario</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Derecho Marítimo</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Bienes Raíces</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Litigios</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Propiedad Intelectual</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm">Av Samuel Lewis y Gerardo Ortega</p>
                  <p className="text-sm">PH Central Building, 5to piso</p>
                  <p className="text-sm">P.O. BOX 0819-05618</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <a href="tel:+50729755566" className="hover:text-amber-400 transition-colors duration-300">
                  +507 297-5566
                </a>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <a href="mailto:info@mab.com.pa" className="hover:text-amber-400 transition-colors duration-300">
                  info@mab.com.pa
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 Moreno & Arjona – Bureau (MAB). Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">Política de Privacidad</a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">Términos de Servicio</a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">Aviso Legal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;