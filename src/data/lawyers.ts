export interface LawyerData {
  id: string;
  slug: string;
  foto_abogado: string;
  nombre_completo: string;
  cargo: string;
  email: string;
  linkedin_url?: string;
  telefono: string;
  bio_corta: string;
  bio_extendida: string;
  educacion_lista: string[];
  areas_practica_lista: string[];
}

export const lawyers: LawyerData[] = [
  {
    id: "cecilio-moreno",
    slug: "cecilio-roberto-moreno-arosemena",
    foto_abogado: "/Cecilio Moreno.png",
    nombre_completo: "Dr. Cecilio Roberto Moreno Arosemena",
    cargo: "Socio Fundador y Director",
    email: "jmoreno@mab.com.pa",
    linkedin_url: "https://linkedin.com/in/juancarlosmoreno",
    telefono: "+507 297-5566",
    bio_corta: "Cecilio Roberto Moreno Arosemena es socio fundador de MAB, con 45 años de trayectoria en derecho comercial, corporativo, inmobiliario, fiscal y civil. Ha combinado su práctica privada con cargos públicos relevantes y es reconocido por su experiencia estratégica en planificación patrimonial y asesoría corporativa.",
    bio_extendida: `Licenciado en Derecho y Ciencias Políticas por la Universidad de Panamá (1976), con estudios en la Universidad de Georgetown sobre Estrategia y Acciones para promover la Transparencia y controlar la corrupción (2004). Fundó Moreno & Arjona – Bureau en 1979, consolidando la firma como una referencia en derecho comercial, corporativo, inmobiliario, fiscal y civil.
A lo largo de su carrera ha ocupado cargos públicos como Director de Asesoría Legal del Instituto de Recursos Hidráulicos y de Electrificación (1990), Notario Público Duodécimo de Circuito Notarial de Panamá (2004–2009) y Notario Público Tercero de Circuito Notarial de Panamá (2014–2019).
Su práctica combina un profundo conocimiento jurídico con un enfoque estratégico en la protección de activos y la planificación patrimonial, asesorando a clientes nacionales e internacionales en transacciones complejas y estructuración legal. Habla español e inglés.`,
    educacion_lista: [
      "Universidad de Panamá, 1976 – Licenciado en Derecho y Ciencias Políticas",
      "Universidad de Georgetown, 2004 – Estrategia y Acciones para promover la Transparencia y controlar la corrupción."
    ],
    areas_practica_lista: [
      "Derecho Comercial, Asesoría en la creación de Sociedades y Fundaciones",
      "Protección de Activos e Inversión Extranjera",
      "Derecho Inmobiliario, Compraventas y Propiedad Horizontal (énfasis tributario)",
      "Asesoría y planificación patrimonial y sucesoria"
    ]
  },
  {
    id: "jan-brewer",
    slug: "jan-christian-brewer-davila",
    foto_abogado: "/Jean C. Brewer.png",
    nombre_completo: "Jan Christian Brewer Davila",
    cargo: "Socio Senior",
    email: "jbrewer@mab.com.pa",
    linkedin_url: "https://linkedin.com/in/janbrewer",
    telefono: "+507 297-5566",
    bio_corta: "Con más de 25 años de experiencia, Jan Christian Brewer Dávila es socio de MAB desde 2009 y especialista en derecho corporativo, fiscal y planificación patrimonial. Asesora en el establecimiento de empresas en Panamá y optimiza operaciones empresariales para garantizar el cumplimiento normativo, combinando estrategia, precisión legal y visión internacional.",
    bio_extendida: `Jan ha sido parte de MAB desde 1998 y se convirtió en Socio en 2009. Con más de 25 años de experiencia, ofrece asesoría especializada en el establecimiento de empresas en Panamá, enfocándose en la planificación estratégica y el cumplimiento de la normativa local. Además, brinda orientación a negocios en funcionamiento, optimizando sus operaciones para que cumplan con las tendencias legales y normativas vigentes.
    
En 1998, obtuvo el título de Licenciado en Derecho y Ciencias Políticas de la Universidad Santa María La Antigua en Panamá. Posteriormente, se trasladó a Bogotá, Colombia, donde obtuvo el título de Especialista en Derecho Financiero y Bursátil de la Universidad Externado de Colombia. Durante su estancia en Colombia, también cursó un Diplomado en Comercio Electrónico en la misma institución. En 2009, recibió con honores el título de Especialista en Tributación de la UNESCPA en Panamá y completó con honores una Maestría en Tributación y Gestión Fiscal.

Es miembro activo del Colegio Nacional de Abogados, de la International Fiscal Association (IFA), de la Sección Internacional del American Bar Association (ABA), de la World Compliance Association (WCA) y del Instituto Panameño de Tributaristas (INSPAT). Además, es el miembro exclusivo en materia de tributación para Panamá de IR Global, una red de firmas profesionales en el ámbito legal, contable y financiero que abarca más de 150 jurisdicciones.`,
    educacion_lista: [
      "Universidad de Panamá - Licenciado en Derecho",
      "Harvard Law School - LL.M. en Derecho Corporativo Internacional"
    ],
    areas_practica_lista: [
      "Derecho Corporativo Internacional",
      "Fusiones y Adquisiciones",
      "Estructuras Financieras",
      "Compliance Regulatorio"
    ]
  },
  {
    id: "jennie-moreno",
    slug: "jennie-marie-moreno-cordoba",
    foto_abogado: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800",
    nombre_completo: "Jennie Marie Moreno Córdoba",
    cargo: "Socia - Abogada'",
    email: "jmoreno@mab.com.pa",
    linkedin_url: "https://linkedin.com/in/jenniemmoreno",
    telefono: "+507 297-5566",
    bio_corta: "Jennie Marie Moreno Córdoba, socia de MAB desde 2009, cuenta con más de 17 años de experiencia en derecho corporativo, transacciones comerciales y planificación patrimonial. Asesora en el establecimiento y reorganización de empresas, protección de activos y planificación tributaria, ofreciendo soluciones estratégicas alineadas con la normativa local e internacional.",
    bio_extendida: `Forma parte de MAB desde 1997 y se convirtió en socia en 2009. Con 17 años de experiencia, ofrece asesoría para el establecimiento de empresas en Panamá con un enfoque basado en planificación estratégica y cumplimiento con las leyes locales. También orienta a negocios en marcha para optimizar sus operaciones y alinearlas con tendencias legales vigentes.
    
Su experiencia incluye asesoría contractual con énfasis en transacciones comerciales, procesos de reorganización empresarial, protección de activos —incluida propiedad intelectual— y planificación tributaria.

En 1997, obtuvo la Licenciatura en Derecho y Ciencias Políticas en la Universidad Santa María La Antigua (Panamá). Posteriormente cursó un LL.M. en Propiedad Intelectual, Comercio y Tecnología en el Franklin Pierce School of Law (New Hampshire, EE.UU.) y completó el programa "e-Law Summer IP-China" en Beijing, China. Habla español e inglés.`,
    educacion_lista: [
      "Universidad Santa María La Antigua, 1998 – Licenciado en Derecho y Ciencias Políticas",
      "Universidad Externado de Colombia, 2000 – Especialista en Derecho Financiero y Bursátil",
      "Universidad Externado de Colombia, 2000 – Diplomado en Comercio Electrónico",
      "Universidad Especializada del Contador Público Autorizado, 2009 – Especialista en Tributación",
      "Universidad Especializada del Contador Público Autorizado, 2012 – Maestría en Tributación y Gestión Fiscal"
    ],
    areas_practica_lista: [
      "Derecho Corporativo y Planeación Patrimonial",
      "Derecho Tributario y Planeación Fiscal",
      "Derecho Empresarial e Inversión Extranjera en Panamá",
      "Derecho Laboral y Seguridad Social"
    ],
    news_insights_lista: []
  },
  {
    id: "alejandro-moreno",
    slug: "alejandro-agustin-moreno-velasquez",
    foto_abogado: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800",
    nombre_completo: "Alejandro Agustín Moreno Velásquez",
    cargo: "Socio – Abogado",
    email: "amoreno@mab.com.pa",
    linkedin_url: "https://linkedin.com/in/alejandrommoreno",
    telefono: "+507 297-5566",
    bio_corta: "Alejandro Agustín Moreno Velásquez, socio de MAB desde 2009, combina más de 20 años de experiencia en derecho corporativo, contratación internacional y bienes raíces. Aporta un enfoque global respaldado por formación académica en España y Estados Unidos, y certificaciones como traductor público autorizado y corredor de bienes raíces.",
    bio_extendida: `Nacido en 1978 en Ciudad de Panamá, ejerce la abogacía desde 2002 tras graduarse en Derecho y Ciencias Políticas en la Universidad Católica Santa María La Antigua (USMA). Ingresó a MAB en 2001 como asistente legal, fue abogado asociado en 2002 y socio desde 2009.
    
Cuenta con un Postgrado de Especialización en Contratación y Mercados Financieros Internacionales (Universidad de Castilla-La Mancha, España, 2004) y con el título de Introducción al Sistema Legal Estadounidense (Universidad de Yale, EE.UU., 2007).

Es miembro del Colegio Nacional de Abogados desde 2002 y posee certificaciones oficiales como corredor de bienes raíces (Ministerio de Comercio e Industrias, 2006) y traductor público autorizado (Ministerio de Educación, 2006). Habla español, inglés e italiano.`,
    educacion_lista: [
      "Universidad Católica Santa María La Antigua, 2002 – Licenciado en Derecho y Ciencias Políticas",
      "Universidad de Castilla-La Mancha, 2004 – Especialización en Contratación y Mercados Financieros Internacionales",
      "Universidad de Yale, 2007 – Introducción al Sistema Legal Estadounidense"
    ],
    areas_practica_lista: [
      "Derecho Corporativo",
      "Contratación Internacional",
      "Derecho de Bienes Raíces",
      "Derecho Mercantil",
      "Servicios Corporativos"
    ]
  },
  {
    id: "ruben-arosemena",
    slug: "ruben-eloy-arosemena-vasquez",
    foto_abogado: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800",
    nombre_completo: "Ruben Eloy Arosemena Vásquez",
    cargo: "Abogado",
    email: "rarosemena@mab.com.pa",
    linkedin_url: "https://linkedin.com/in/rubenarosemena",
    telefono: "+507 297-5566",
    bio_corta: "Rubén Eloy Arosemena Vásquez es abogado de MAB desde 2003, con casi tres décadas de experiencia en derecho marítimo. Asesora y representa en litigios marítimos y ha extendido su práctica a los sectores de construcción y cultivo/exportación de cannabis medicinal.",
    bio_extendida: `Egresado de la Facultad de Derecho y Ciencias Políticas de la Universidad Católica Santa María La Antigua (USMA), complementó su formación con una Maestría en Derecho Marítimo y Procesal Marítimo (USMA y Universidad de Panamá).
    
Miembro del grupo MAB desde 2003, cuenta con 29 años de experiencia en el ámbito marítimo, brindando asesoría legal y representación en litigios marítimos. 

Su experiencia también abarca la asesoría a empresas del sector construcción y de la industria de cultivo y exportación de cannabis medicinal. Habla español e inglés.`,
    educacion_lista: [
      "Universidad Católica Santa María La Antigua – Licenciatura en Derecho y Ciencias Políticas",
      "USMA y Universidad de Panamá – Maestría en Derecho Marítimo y Procesal Marítimo"
    ],
    areas_practica_lista: [
      "Derecho Marítimo",
      "Litigios Marítimos",
      "Derecho Comercial",
      "Derecho Corporativo"
    ]
  },
  {
    id: "liz-moreno",
    slug: "liz-marie-moreno-cordoba",
    foto_abogado: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800",
    nombre_completo: "Liz Marie Moreno Córdoba",
    cargo: "Socia – Abogada",
    email: "lmoreno@mab.com.pa",
    linkedin_url: "https://linkedin.com/in/lizmoreno",
    telefono: "+507 297-5566",
    bio_corta: "Liz Marie Moreno Córdoba es socia de MAB y especialista en derecho procesal, corporativo y administrativo. Combina su experiencia en fusiones y adquisiciones, propiedad horizontal y asesoría a fundaciones sin fines de lucro, ofreciendo un enfoque integral a sus clientes.",
    bio_extendida: `Egresada de la Facultad de Derecho y Ciencias Políticas de la Universidad Católica Santa María La Antigua (2012), Liz ingresó a MAB en 2009 como asistente legal, fue asociada en 2012 y actualmente es socia.
    
Obtuvo su Maestría en Derecho Procesal en la misma universidad (2013) y se comunica en español e inglés. Su práctica incluye derecho corporativo y administrativo, fusiones y adquisiciones, derecho mercantil y contractual, compraventas, propiedad horizontal y asesoría en la creación de fundaciones sin fines de lucro.`,
    educacion_lista: [
      "Universidad Católica Santa María La Antigua, 2012 – Licenciada en Derecho y Ciencias Políticas",
      "Universidad Católica Santa María La Antigua, 2013 – Maestría en Derecho Procesal"
    ],
    areas_practica_lista: [
      "Derecho y Servicios Corporativos",
      "Derecho Administrativo",
      "Fusiones y Adquisiciones",
      "Derecho Mercantil y Contractual",
      "Compraventas y Derecho de Propiedad Horizontal",
      "Asesoría en Fundaciones sin Fines de Lucro"
    ]
  },
  {
    id: "milisen-casis",
    slug: "milisen-dayana-casis-vernaza",
    foto_abogado: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800",
    nombre_completo: "Milisen Dayana Casis Vernaza",
    cargo: "Asociada",
    email: "mcasis@mab.com.pa",
    linkedin_url: "https://linkedin.com/in/milisencasis",
    telefono: "+507 297-5566",
    bio_corta: "Milisen Dayana Casis Vernaza es asociada de MAB especializada en derecho inmobiliario y contratos comerciales.",
    bio_extendida: `Milisen Dayana Casis Vernaza es asociada de MAB especializada en derecho inmobiliario y contratos comerciales. Con más de 8 años de experiencia, ha participado en importantes transacciones inmobiliarias y proyectos de desarrollo en Panamá.

Su práctica se centra en transacciones inmobiliarias complejas, desarrollo de proyectos, contratos de construcción y due diligence inmobiliario. Es reconocida por su atención al detalle y enfoque comercial.`,
    educacion_lista: [
      "Universidad de Panamá - Licenciada en Derecho",
      "Universidad de Barcelona - Especialización en Derecho Inmobiliario"
    ],
    areas_practica_lista: [
      "Derecho Inmobiliario",
      "Contratos Comerciales",
      "Desarrollo de Proyectos",
      "Due Diligence Inmobiliario"
    ]
  },
  {
    id: "nellie-moreno",
    slug: "nellie-marie-moreno-cordoba",
    foto_abogado: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800",
    nombre_completo: "Nellie Marie Moreno Córdoba",
    cargo: "Asociada",
    email: "nmoreno@mab.com.pa",
    linkedin_url: "https://linkedin.com/in/nelliemoreno",
    telefono: "+507 297-5566",
    bio_corta: "Nellie Marie Moreno Córdoba es asociada de MAB especializada en derecho laboral y compliance corporativo.",
    bio_extendida: `Nellie Marie Moreno Córdoba es asociada de MAB especializada en derecho laboral y compliance corporativo. Con más de 6 años de experiencia, ha asesorado a empresas multinacionales en temas de cumplimiento laboral y estructuración de políticas internas.

Su práctica incluye asesoría en relaciones laborales, implementación de programas de compliance, investigaciones internas y defensa ante autoridades laborales. Es reconocida por su enfoque preventivo y estratégico.`,
    educacion_lista: [
      "Universidad de Panamá - Licenciada en Derecho",
      "Universidad Carlos III de Madrid - Máster en Derecho Laboral"
    ],
    areas_practica_lista: [
      "Derecho Laboral",
      "Compliance Corporativo",
      "Relaciones Laborales",
      "Investigaciones Internas"
    ]
  },
  {
    id: "patricia-aguila",
    slug: "patricia-del-carmen-aguila-diaz",
    foto_abogado: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800",
    nombre_completo: "Patricia Del Carmen Aguila Díaz",
    cargo: "Asociada",
    email: "paguila@mab.com.pa",
    linkedin_url: "https://linkedin.com/in/patriciaaguila",
    telefono: "+507 297-5566",
    bio_corta: "Patricia Del Carmen Aguila Díaz es asociada de MAB especializada en propiedad intelectual y derecho tecnológico.",
    bio_extendida: `Patricia Del Carmen Aguila Díaz es asociada de MAB especializada en propiedad intelectual y derecho tecnológico. Con más de 7 años de experiencia, ha asesorado a empresas de tecnología y startups en la protección de sus activos intangibles.

Su práctica incluye registro de marcas y patentes, contratos de licencia, protección de datos, derecho digital y asesoría en e-commerce. Es reconocida por su conocimiento en las últimas tendencias tecnológicas y regulatorias.`,
    educacion_lista: [
      "Universidad de Panamá - Licenciada en Derecho",
      "Universidad Complutense de Madrid - Máster en Propiedad Intelectual"
    ],
    areas_practica_lista: [
      "Propiedad Intelectual",
      "Derecho Tecnológico",
      "Protección de Datos",
      "Derecho Digital"
    ]
  },
  {
    id: "rodolfo-stanziola",
    slug: "rodolfo-ernesto-stanziola",
    foto_abogado: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800",
    nombre_completo: "Rodolfo Ernesto Stanziola",
    cargo: "Asociado Senior",
    email: "rstanziola@mab.com.pa",
    linkedin_url: "https://linkedin.com/in/rodolfostanziola",
    telefono: "+507 297-5566",
    bio_corta: "Rodolfo Ernesto Stanziola es asociado senior de MAB especializado en derecho bancario y financiero.",
    bio_extendida: `Rodolfo Ernesto Stanziola es asociado senior de MAB especializado en derecho bancario y financiero. Con más de 14 años de experiencia, ha asesorado a instituciones financieras y empresas fintech en temas regulatorios y transaccionales.

Su práctica incluye regulación bancaria, estructuración de productos financieros, compliance financiero y asesoría en operaciones de crédito complejas. Es reconocido por su conocimiento profundo del sistema financiero panameño.`,
    educacion_lista: [
      "Universidad de Panamá - Licenciado en Derecho",
      "Universidad de Chicago - LL.M. en Derecho Bancario y Financiero"
    ],
    areas_practica_lista: [
      "Derecho Bancario",
      "Derecho Financiero",
      "Regulación Financiera",
      "Fintech y Innovación Financiera"
    ]
  }
];

export const getLawyerBySlug = (slug: string): LawyerData | undefined => {
  return lawyers.find(lawyer => lawyer.slug === slug);
};

export const getAllLawyers = (): LawyerData[] => {
  return lawyers;
};