import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronRight } from 'lucide-react';
import { getAllLawyers } from '../data/lawyers';
import { getAllPracticeAreas } from '../data/practiceAreas';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);
  const [isAreasDropdownOpen, setIsAreasDropdownOpen] = useState(false);
  
  const lawyers = getAllLawyers();
  const practiceAreas = getAllPracticeAreas();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { title: 'Nuestro Equipo', href: '/nuestro-equipo', description: 'Conozca nuestro equipo de abogados', hasDropdown: true },
    { title: 'Áreas de Práctica', href: '/areas', description: 'Especialidades legales', hasDropdown: true },
    { title: 'Contacto', href: '#contacto', description: 'Agenda tu consulta' }
  ];

  const handleMenuClick = (href: string) => {
    setIsMenuOpen(false);
    
    if (href.startsWith('#')) {
      // Handle anchor links
      if (location.pathname !== '/') {
        // Navigate to home page with hash
        navigate(`/${href}`);
      } else {
        // Already on home page, just scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Handle regular navigation
      navigate(href);
    }
  };

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-slate-200/20'
          : 'bg-white/20 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28">
                <img
                  src="/logo MAB1.png"
                  alt="MAB Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div 
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.hasDropdown) {
                      if (item.title === 'Nuestro Equipo') {
                        setIsTeamDropdownOpen(true);
                        setIsAreasDropdownOpen(false);
                      } else if (item.title === 'Áreas de Práctica') {
                        setIsAreasDropdownOpen(true);
                        setIsTeamDropdownOpen(false);
                      }
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.hasDropdown) {
                      if (item.title === 'Nuestro Equipo') {
                        setIsTeamDropdownOpen(false);
                      } else if (item.title === 'Áreas de Práctica') {
                        setIsAreasDropdownOpen(false);
                      }
                    }
                  }}
                >
                  <button
                    onClick={() => handleMenuClick(item.href)}
                    className="relative text-slate-700 hover:text-amber-600 transition-all duration-300 font-medium text-lg group flex items-center"
                  >
                    {item.title}
                    {item.hasDropdown && (
                      <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                  
                  {/* Team Dropdown */}
                  {item.hasDropdown && item.title === 'Nuestro Equipo' && (
                    <div className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 py-4 transition-all duration-300 ${
                      isTeamDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                    }`}>
                      <div className="px-4 py-2 border-b border-slate-100">
                        <h3 className="text-lg font-bold text-slate-900">Nuestro Equipo</h3>
                        <p className="text-sm text-slate-600">Conozca a nuestros abogados</p>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {lawyers.map((lawyer) => (
                          <Link
                            key={lawyer.id}
                            to={`/abogados/${lawyer.slug}`}
                            className="block px-4 py-3 hover:bg-amber-50 transition-colors duration-300 group/lawyer"
                          >
                            <div className="flex items-center">
                              <img 
                                src={lawyer.foto_abogado} 
                                alt={lawyer.nombre_completo}
                                className="w-10 h-10 rounded-full object-cover mr-3"
                              />
                              <div>
                                <h4 className="text-sm font-semibold text-slate-900 group-hover/lawyer:text-amber-700 transition-colors duration-300">
                                  {lawyer.nombre_completo}
                                </h4>
                                <p className="text-xs text-slate-600">{lawyer.cargo}</p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Areas Dropdown */}
                  {item.hasDropdown && item.title === 'Áreas de Práctica' && (
                    <div className={`absolute top-full left-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 py-4 transition-all duration-300 ${
                      isAreasDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                    }`}>
                      <div className="px-4 py-2 border-b border-slate-100">
                        <h3 className="text-lg font-bold text-slate-900">Áreas de Práctica</h3>
                        <p className="text-sm text-slate-600">Nuestras especialidades legales</p>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {practiceAreas.map((area) => (
                          <Link
                            key={area.slug}
                            to={`/areas/${area.slug}`}
                            className="block px-4 py-3 hover:bg-amber-50 transition-colors duration-300 group/area"
                          >
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-amber-600 rounded-full mr-3 flex-shrink-0"></div>
                              <div>
                                <h4 className="text-sm font-semibold text-slate-900 group-hover/area:text-amber-700 transition-colors duration-300">
                                  {area.nombre}
                                </h4>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-6">
              <a 
                href="tel:+50729755566" 
                className="flex items-center text-slate-600 hover:text-amber-600 transition-all duration-300 font-medium"
              >
                <Phone className="w-4 h-4 mr-2" />
                +507 297-5566
              </a>
              <Link 
                to="/#contacto"
                href="mailto:info@mab.com.pa" 
                className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-3 rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl font-semibold"
              >
                Consulta Legal
              </Link>
            </div>

            <button 
              className="lg:hidden relative z-50 p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`w-6 h-6 absolute transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                  }`} 
                />
                <X 
                  className={`w-6 h-6 absolute transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mega Menu Overlay */}
      <div className={`fixed inset-0 z-40 transition-all duration-500 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-slate-900/95 backdrop-blur-xl transition-all duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`relative z-10 max-h-screen overflow-y-auto flex flex-col py-20 w-full transition-all duration-700 ${
          isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="max-w-4xl mx-auto px-8 text-center flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {menuItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`group cursor-pointer transition-all duration-500 delay-${index * 100}`}
                  onClick={() => handleMenuClick(item.href)}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xl text-slate-300 group-hover:text-white transition-colors duration-300">
                      {item.description}
                    </p>
                    <ChevronRight className="w-8 h-8 text-amber-400 mx-auto mt-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Contact Info in Menu */}
            <div className="border-t border-white/20 pt-12">
              <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
                <a 
                  href="tel:+50729755566" 
                  className="flex items-center text-2xl text-white hover:text-amber-400 transition-colors duration-300"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  +507 297-5566
                </a>
                <a 
                  href="mailto:info@mab.com.pa" 
                  className="flex items-center text-2xl text-white hover:text-amber-400 transition-colors duration-300"
                >
                  <Mail className="w-6 h-6 mr-3" />
                  info@mab.com.pa
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;