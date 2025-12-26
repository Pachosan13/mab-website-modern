export interface PracticeArea {
  slug: string;
  nombre: string;
  heroTitulo: string;
  heroParrafo: string;
  beneficios: string;
  servicios: string;
  historia: string;
  faq: { pregunta: string; respuesta: string; }[];
  porqueMab: string;
  cta: string;
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: "derecho-corporativo-y-empresarial",
    nombre: "Derecho Corporativo y Empresarial",
    heroTitulo: "Abogados Corporativos en Panamá: Blindaje Legal Real Para Empresas Exigentes",
    heroParrafo: "Tomar decisiones empresariales en Panamá es una responsabilidad que exige estrategia, visión y, sobre todo, un respaldo legal a la altura. En Moreno & Arjona – Bureau (MAB), llevamos décadas asesorando a ejecutivos, inversionistas y líderes empresariales que buscan no solo cumplir la ley, sino aprovecharla para proteger y expandir su negocio. Nuestra reputación como abogados corporativos en Panamá se ha forjado anticipando riesgos y resolviendo crisis antes de que otros siquiera las vean venir. Si necesitas un equipo legal que entienda la realidad del mercado panameño y los desafíos globales, aquí encuentras socios estratégicos, no simples proveedores de documentos.",
    beneficios: "¿Por qué tantos empresarios y multinacionales nos eligen? La diferencia está en la profundidad, el compromiso y la personalización. No somos un bufete genérico; cada empresa recibe la atención directa de socios senior, soluciones a la medida y una mentalidad proactiva que convierte los retos legales en oportunidades.\nOptar por MAB significa acceso a conocimiento actualizado sobre regulaciones, precedentes judiciales y mejores prácticas de gobierno corporativo. Contamos con experiencia reconocida por Legal500 y Chambers, lo que garantiza no solo capacidad técnica sino también resultados probados. Nuestra asesoría va más allá de la prevención: analizamos tus objetivos comerciales, identificamos riesgos específicos y diseñamos estructuras legales que maximizan el crecimiento, minimizan el conflicto entre socios y ofrecen blindaje fiscal y patrimonial.",
    servicios: "El área de derecho corporativo de MAB cubre todo el ciclo de vida empresarial, desde el nacimiento hasta la expansión internacional. Brindamos constitución y registro de sociedades en Panamá – incluyendo sociedades anónimas, sociedades de responsabilidad limitada y fundaciones –, diseño de estructuras para inversionistas extranjeros y familias empresarias, y revisión de contratos comerciales. Apoyamos en fusiones, adquisiciones, joint ventures, reestructuraciones y due diligence, con una visión integral que abarca aspectos societarios, tributarios y regulatorios.\nNuestro equipo redacta y revisa acuerdos de accionistas, protege tus derechos en asambleas, resuelve disputas y previene bloqueos societarios. Si necesitas gobierno corporativo robusto, prevención de conflictos y cumplimiento regulatorio, te acompañamos con procesos claros y reporting transparente. Defendemos tus intereses en litigios empresariales, arbitrajes comerciales y reclamaciones de accionistas minoritarios. También nos ocupamos de la protección de activos, creación de holdings, sociedades offshore, planificación fiscal internacional y sucesión de empresas familiares.",
    historia: "Uno de nuestros clientes llegó tras una amarga experiencia: una sociedad familiar donde el desorden documental y la falta de acuerdos claros derivaron en bloqueos que paralizaron inversiones durante años. En menos de tres meses, estructuramos una solución legal que alineó a los accionistas, reactivó operaciones y evitó una costosa demanda judicial. En otra ocasión, una empresa multinacional buscaba expandirse a Centroamérica desde Panamá. Nuestra asesoría no solo incluyó la constitución societaria y cumplimiento con la Superintendencia del Mercado de Valores, sino también la negociación de joint ventures y blindaje de propiedad intelectual en todos los países de operación.\nLo que nuestros clientes destacan es la anticipación: \"Con MAB, sentí que ya tenían la jugada resuelta antes de que el problema apareciera. Me hicieron preguntas que ningún otro abogado se había planteado\". Este nivel de preparación y visión estratégica es lo que nos distingue en el mundo del derecho corporativo panameño.",
    faq: [
      { pregunta: "¿Por qué elegir abogados corporativos especializados en Panamá y no generalistas?", respuesta: "El marco legal panameño tiene complejidades y matices que solo el trabajo diario en el área corporativa puede descifrar. Un abogado generalista puede pasar por alto detalles críticos, perder plazos o desconocer reformas recientes que afectan directamente tu negocio." },
      { pregunta: "¿Qué tipo de empresas pueden beneficiarse de los servicios de MAB?", respuesta: "Trabajamos con startups, pymes, multinacionales, family offices, empresas familiares y fondos de inversión. Tanto para operaciones locales como regionales, ayudamos a quienes buscan escalabilidad y protección." },
      { pregunta: "¿Me pueden acompañar en procesos de expansión internacional o alianzas estratégicas fuera de Panamá?", respuesta: "Sí. Tenemos experiencia en operaciones cross-border, alianzas, fusiones y adquisición de empresas en varios países. Coordinamos equipos legales internacionales y aseguramos cumplimiento en cada jurisdicción involucrada." },
      { pregunta: "¿Qué riesgos comunes ayudamos a prevenir?", respuesta: "Desde disputas entre socios, incumplimiento de pactos de accionistas y errores en gobierno corporativo, hasta problemas en due diligence, riesgos regulatorios y vulnerabilidad fiscal o patrimonial." },
      { pregunta: "¿El servicio incluye representación ante demandas y arbitrajes empresariales?", respuesta: "Por supuesto. Defendemos los intereses de nuestros clientes en tribunales panameños y en arbitrajes internacionales, negociando acuerdos o litigando hasta la resolución final." },
      { pregunta: "¿Cómo manejan la confidencialidad y protección de información?", respuesta: "La confidencialidad es un principio no negociable en MAB. Toda la información y documentación que recibimos es resguardada bajo los más altos estándares y con protocolos diseñados para evitar cualquier filtración." },
      { pregunta: "¿Pueden ayudarme si mi empresa ya tiene problemas legales o conflictos internos?", respuesta: "Sí. Más allá de la prevención, somos especialistas en solución de crisis empresariales, mediación entre socios y representación en procesos judiciales o extrajudiciales." },
      { pregunta: "¿Incluyen servicios de gobierno corporativo y compliance?", respuesta: "Absolutamente. Ayudamos a implementar manuales, políticas internas, sistemas de reporte y cumplimos con las exigencias de la Superintendencia y los organismos reguladores de Panamá." }
    ],
    porqueMab: "La diferencia entre una empresa que prospera y otra que vive en riesgo es la calidad y anticipación de su soporte legal. MAB ha sido el respaldo silencioso de algunas de las compañías más exitosas del país, negociando acuerdos multimillonarios y resolviendo crisis con discreción. Nuestro compromiso es entender a fondo tus prioridades y convertirnos en ese aliado legal que, incluso cuando no lo ves, ya está solucionando tu próxima preocupación.",
    cta: "¿Quieres proteger el futuro de tu empresa, resolver tus retos societarios y tomar decisiones con la tranquilidad de tener a los mejores abogados corporativos de Panamá a tu lado? Agenda una consulta personalizada con los socios de MAB escribiendo a info@mab.com.pa y descubre cómo podemos blindar tu negocio desde hoy. Moreno & Arjona – Bureau. El socio estratégico que no sabías que necesitabas.",
    seoTitle: "Abogados Corporativos en Panamá | Derecho Corporativo y Empresarial – MAB",
    seoDescription: "Asesoría legal corporativa y empresarial en Panamá. MAB: blindaje legal, gobierno corporativo, prevención de conflictos y expansión internacional.",
    keywords: ["abogados corporativos en panamá","derecho corporativo panamá","asesoría legal empresarial panamá","gobierno corporativo"]
  },
  {
    slug: "derecho-tributario-y-fiscal",
    nombre: "Derecho Tributario y Fiscal",
    heroTitulo: "PLACEHOLDER - Derecho Tributario y Fiscal en Panamá",
    heroParrafo: "PLACEHOLDER - Asesoría especializada en derecho tributario y fiscal para empresas e individuos en Panamá.",
    beneficios: "PLACEHOLDER - Beneficios de contar con asesoría tributaria especializada.",
    servicios: "PLACEHOLDER - Servicios de planificación fiscal, defensa ante auditorías y optimización tributaria.",
    historia: "PLACEHOLDER - Historia de éxito en casos tributarios complejos.",
    faq: [
      { pregunta: "PLACEHOLDER - ¿Qué incluye la asesoría tributaria?", respuesta: "PLACEHOLDER - Respuesta sobre servicios tributarios." },
      { pregunta: "PLACEHOLDER - ¿Cómo manejan las auditorías fiscales?", respuesta: "PLACEHOLDER - Respuesta sobre defensa en auditorías." }
    ],
    porqueMab: "PLACEHOLDER - Por qué elegir MAB para asuntos tributarios.",
    cta: "PLACEHOLDER - Llamada a la acción para servicios tributarios.",
    seoTitle: "Derecho Tributario y Fiscal en Panamá | MAB",
    seoDescription: "Asesoría tributaria y fiscal especializada en Panamá. Planificación fiscal, defensa ante auditorías y optimización tributaria.",
    keywords: ["derecho tributario panamá", "asesoría fiscal panamá", "planificación tributaria"]
  },
  {
    slug: "derecho-maritimo",
    nombre: "Derecho Marítimo",
    heroTitulo: "PLACEHOLDER - Derecho Marítimo en Panamá",
    heroParrafo: "PLACEHOLDER - Asesoría especializada en derecho marítimo y registro de naves en Panamá.",
    beneficios: "PLACEHOLDER - Beneficios de contar con asesoría marítima especializada.",
    servicios: "PLACEHOLDER - Servicios de registro de naves, asesoría naviera y asuntos marítimos.",
    historia: "PLACEHOLDER - Historia de éxito en casos marítimos complejos.",
    faq: [
      { pregunta: "PLACEHOLDER - ¿Qué incluye el registro de naves?", respuesta: "PLACEHOLDER - Respuesta sobre registro marítimo." },
      { pregunta: "PLACEHOLDER - ¿Atienden asuntos marítimos internacionales?", respuesta: "PLACEHOLDER - Respuesta sobre casos internacionales." }
    ],
    porqueMab: "PLACEHOLDER - Por qué elegir MAB para asuntos marítimos.",
    cta: "PLACEHOLDER - Llamada a la acción para servicios marítimos.",
    seoTitle: "Derecho Marítimo en Panamá | MAB",
    seoDescription: "Asesoría en derecho marítimo en Panamá. Registro de naves, asesoría naviera y representación en asuntos marítimos internacionales.",
    keywords: ["derecho marítimo panamá", "registro naves panamá", "asesoría naviera"]
  },
  {
    slug: "derecho-civil-y-litigios",
    nombre: "Derecho Civil y Litigios",
    heroTitulo: "PLACEHOLDER - Derecho Civil y Litigios en Panamá",
    heroParrafo: "PLACEHOLDER - Representación en disputas civiles y comerciales en Panamá.",
    beneficios: "PLACEHOLDER - Beneficios de contar con representación legal especializada.",
    servicios: "PLACEHOLDER - Servicios de litigios civiles, comerciales y resolución de disputas.",
    historia: "PLACEHOLDER - Historia de éxito en casos de litigios complejos.",
    faq: [
      { pregunta: "PLACEHOLDER - ¿Qué tipo de litigios manejan?", respuesta: "PLACEHOLDER - Respuesta sobre tipos de litigios." },
      { pregunta: "PLACEHOLDER - ¿Ofrecen mediación y arbitraje?", respuesta: "PLACEHOLDER - Respuesta sobre resolución alternativa." }
    ],
    porqueMab: "PLACEHOLDER - Por qué elegir MAB para litigios.",
    cta: "PLACEHOLDER - Llamada a la acción para servicios de litigios.",
    seoTitle: "Derecho Civil y Litigios en Panamá | MAB",
    seoDescription: "Representación en litigios civiles y comerciales en Panamá. Resolución estratégica de conflictos legales complejos.",
    keywords: ["litigios panamá", "derecho civil panamá", "resolución disputas"]
  },
  {
    slug: "derecho-familiar",
    nombre: "Derecho Familiar",
    heroTitulo: "PLACEHOLDER - Derecho Familiar en Panamá",
    heroParrafo: "PLACEHOLDER - Asesoría en derecho familiar con total discreción en Panamá.",
    beneficios: "PLACEHOLDER - Beneficios de contar con asesoría familiar especializada.",
    servicios: "PLACEHOLDER - Servicios de divorcios, custodia, pensiones y planificación familiar.",
    historia: "PLACEHOLDER - Historia de éxito en casos familiares complejos.",
    faq: [
      { pregunta: "PLACEHOLDER - ¿Qué incluye la asesoría familiar?", respuesta: "PLACEHOLDER - Respuesta sobre servicios familiares." },
      { pregunta: "PLACEHOLDER - ¿Cómo garantizan la confidencialidad?", respuesta: "PLACEHOLDER - Respuesta sobre discreción." }
    ],
    porqueMab: "PLACEHOLDER - Por qué elegir MAB para asuntos familiares.",
    cta: "PLACEHOLDER - Llamada a la acción para servicios familiares.",
    seoTitle: "Derecho Familiar en Panamá | MAB",
    seoDescription: "Asesoría en derecho familiar en Panamá. Divorcios, custodia, pensiones alimentarias y planificación patrimonial familiar con total discreción.",
    keywords: ["derecho familiar panamá", "divorcios panamá", "custodia panamá"]
  },
  {
    slug: "derecho-penal",
    nombre: "Derecho Penal",
    heroTitulo: "PLACEHOLDER - Derecho Penal en Panamá",
    heroParrafo: "PLACEHOLDER - Defensa penal estratégica en Panamá.",
    beneficios: "PLACEHOLDER - Beneficios de contar con defensa penal especializada.",
    servicios: "PLACEHOLDER - Servicios de defensa criminal y representación penal.",
    historia: "PLACEHOLDER - Historia de éxito en casos penales complejos.",
    faq: [
      { pregunta: "PLACEHOLDER - ¿Qué tipo de casos penales manejan?", respuesta: "PLACEHOLDER - Respuesta sobre casos penales." },
      { pregunta: "PLACEHOLDER - ¿Ofrecen defensa en casos complejos?", respuesta: "PLACEHOLDER - Respuesta sobre casos complejos." }
    ],
    porqueMab: "PLACEHOLDER - Por qué elegir MAB para defensa penal.",
    cta: "PLACEHOLDER - Llamada a la acción para servicios penales.",
    seoTitle: "Derecho Penal en Panamá | MAB",
    seoDescription: "Defensa penal estratégica en Panamá. Representación en procesos criminales con experiencia comprobada en casos complejos.",
    keywords: ["derecho penal panamá", "defensa criminal panamá", "abogados penalistas"]
  },
  {
    slug: "lesiones-personales",
    nombre: "Lesiones Personales",
    heroTitulo: "PLACEHOLDER - Lesiones Personales en Panamá",
    heroParrafo: "PLACEHOLDER - Representación en casos de lesiones personales en Panamá.",
    beneficios: "PLACEHOLDER - Beneficios de contar con representación especializada.",
    servicios: "PLACEHOLDER - Servicios de reclamaciones por accidentes y negligencia médica.",
    historia: "PLACEHOLDER - Historia de éxito en casos de lesiones personales.",
    faq: [
      { pregunta: "PLACEHOLDER - ¿Qué tipo de casos de lesiones manejan?", respuesta: "PLACEHOLDER - Respuesta sobre tipos de lesiones." },
      { pregunta: "PLACEHOLDER - ¿Cómo calculan las compensaciones?", respuesta: "PLACEHOLDER - Respuesta sobre compensaciones." }
    ],
    porqueMab: "PLACEHOLDER - Por qué elegir MAB para lesiones personales.",
    cta: "PLACEHOLDER - Llamada a la acción para casos de lesiones.",
    seoTitle: "Lesiones Personales en Panamá | MAB",
    seoDescription: "Representación en casos de lesiones personales en Panamá. Accidentes, negligencia médica y reclamaciones por daños personales.",
    keywords: ["lesiones personales panamá", "accidentes panamá", "negligencia médica"]
  },
  {
    slug: "bienes-raices-e-inmobiliario",
    nombre: "Bienes Raíces e Inmobiliario",
    heroTitulo: "PLACEHOLDER - Bienes Raíces e Inmobiliario en Panamá",
    heroParrafo: "PLACEHOLDER - Asesoría en transacciones inmobiliarias en Panamá.",
    beneficios: "PLACEHOLDER - Beneficios de contar con asesoría inmobiliaria especializada.",
    servicios: "PLACEHOLDER - Servicios de transacciones, desarrollo de proyectos y inversiones inmobiliarias.",
    historia: "PLACEHOLDER - Historia de éxito en proyectos inmobiliarios complejos.",
    faq: [
      { pregunta: "PLACEHOLDER - ¿Qué incluye la asesoría inmobiliaria?", respuesta: "PLACEHOLDER - Respuesta sobre servicios inmobiliarios." },
      { pregunta: "PLACEHOLDER - ¿Atienden inversiones extranjeras?", respuesta: "PLACEHOLDER - Respuesta sobre inversiones extranjeras." }
    ],
    porqueMab: "PLACEHOLDER - Por qué elegir MAB para bienes raíces.",
    cta: "PLACEHOLDER - Llamada a la acción para servicios inmobiliarios.",
    seoTitle: "Bienes Raíces e Inmobiliario en Panamá | MAB",
    seoDescription: "Asesoría en bienes raíces e inmobiliario en Panamá. Transacciones, desarrollo de proyectos y asesoría en inversiones inmobiliarias.",
    keywords: ["bienes raíces panamá", "derecho inmobiliario panamá", "inversiones inmobiliarias"]
  },
  {
    slug: "testamentos-y-sucesiones",
    nombre: "Testamentos y Sucesiones",
    heroTitulo: "PLACEHOLDER - Testamentos y Sucesiones en Panamá",
    heroParrafo: "PLACEHOLDER - Planificación sucesoria y testamentos en Panamá.",
    beneficios: "PLACEHOLDER - Beneficios de contar con planificación sucesoria especializada.",
    servicios: "PLACEHOLDER - Servicios de testamentos, fideicomisos y administración patrimonial.",
    historia: "PLACEHOLDER - Historia de éxito en planificación sucesoria compleja.",
    faq: [
      { pregunta: "PLACEHOLDER - ¿Qué incluye la planificación sucesoria?", respuesta: "PLACEHOLDER - Respuesta sobre planificación sucesoria." },
      { pregunta: "PLACEHOLDER - ¿Manejan patrimonios internacionales?", respuesta: "PLACEHOLDER - Respuesta sobre patrimonios internacionales." }
    ],
    porqueMab: "PLACEHOLDER - Por qué elegir MAB para sucesiones.",
    cta: "PLACEHOLDER - Llamada a la acción para servicios sucesorios.",
    seoTitle: "Testamentos y Sucesiones en Panamá | MAB",
    seoDescription: "Planificación sucesoria en Panamá. Testamentos, fideicomisos y administración de patrimonios familiares.",
    keywords: ["testamentos panamá", "sucesiones panamá", "planificación patrimonial"]
  },
  {
    slug: "propiedad-intelectual",
    nombre: "Propiedad Intelectual",
    heroTitulo: "PLACEHOLDER - Propiedad Intelectual en Panamá",
    heroParrafo: "PLACEHOLDER - Registro y protección de propiedad intelectual en Panamá.",
    beneficios: "PLACEHOLDER - Beneficios de contar con protección de propiedad intelectual.",
    servicios: "PLACEHOLDER - Servicios de registro de marcas, patentes y derechos de autor.",
    historia: "PLACEHOLDER - Historia de éxito en casos de propiedad intelectual.",
    faq: [
      { pregunta: "PLACEHOLDER - ¿Qué incluye el registro de marcas?", respuesta: "PLACEHOLDER - Respuesta sobre registro de marcas." },
      { pregunta: "PLACEHOLDER - ¿Protegen derechos internacionales?", respuesta: "PLACEHOLDER - Respuesta sobre protección internacional." }
    ],
    porqueMab: "PLACEHOLDER - Por qué elegir MAB para propiedad intelectual.",
    cta: "PLACEHOLDER - Llamada a la acción para servicios de propiedad intelectual.",
    seoTitle: "Propiedad Intelectual en Panamá | MAB",
    seoDescription: "Registro y protección de propiedad intelectual en Panamá. Marcas, patentes, derechos de autor y activos intangibles empresariales.",
    keywords: ["propiedad intelectual panamá", "registro marcas panamá", "patentes panamá"]
  },
  {
    slug: "derecho-laboral",
    nombre: "Derecho Laboral",
    heroTitulo: "PLACEHOLDER - Derecho Laboral en Panamá",
    heroParrafo: "PLACEHOLDER - Asesoría en relaciones laborales en Panamá.",
    beneficios: "PLACEHOLDER - Beneficios de contar con asesoría laboral especializada.",
    servicios: "PLACEHOLDER - Servicios de contratos laborales, despidos y cumplimiento normativo.",
    historia: "PLACEHOLDER - Historia de éxito en casos laborales complejos.",
    faq: [
      { pregunta: "PLACEHOLDER - ¿Qué incluye la asesoría laboral?", respuesta: "PLACEHOLDER - Respuesta sobre servicios laborales." },
      { pregunta: "PLACEHOLDER - ¿Manejan conflictos laborales?", respuesta: "PLACEHOLDER - Respuesta sobre conflictos laborales." }
    ],
    porqueMab: "PLACEHOLDER - Por qué elegir MAB para asuntos laborales.",
    cta: "PLACEHOLDER - Llamada a la acción para servicios laborales.",
    seoTitle: "Derecho Laboral en Panamá | MAB",
    seoDescription: "Asesoría en derecho laboral en Panamá. Relaciones laborales, contratos de trabajo, despidos y cumplimiento de normativas laborales.",
    keywords: ["derecho laboral panamá", "contratos trabajo panamá", "relaciones laborales"]
  },
  {
    slug: "inmigracion-y-movilidad",
    nombre: "Inmigración y Movilidad",
    heroTitulo: "PLACEHOLDER - Inmigración y Movilidad en Panamá",
    heroParrafo: "PLACEHOLDER - Asesoría migratoria para inversionistas y profesionales en Panamá.",
    beneficios: "PLACEHOLDER - Beneficios de contar con asesoría migratoria especializada.",
    servicios: "PLACEHOLDER - Servicios de visas, residencias y naturalizaciones.",
    historia: "PLACEHOLDER - Historia de éxito en casos migratorios complejos.",
    faq: [
      { pregunta: "PLACEHOLDER - ¿Qué tipos de visas manejan?", respuesta: "PLACEHOLDER - Respuesta sobre tipos de visas." },
      { pregunta: "PLACEHOLDER - ¿Atienden inversionistas extranjeros?", respuesta: "PLACEHOLDER - Respuesta sobre inversionistas." }
    ],
    porqueMab: "PLACEHOLDER - Por qué elegir MAB para inmigración.",
    cta: "PLACEHOLDER - Llamada a la acción para servicios migratorios.",
    seoTitle: "Inmigración y Movilidad en Panamá | MAB",
    seoDescription: "Asesoría migratoria en Panamá. Visas, residencias, naturalizaciones y asesoría para inversionistas y profesionales extranjeros.",
    keywords: ["inmigración panamá", "visas panamá", "residencia panamá"]
  }
];

export const getPracticeAreaBySlug = (slug: string): PracticeArea | undefined => {
  return practiceAreas.find(area => area.slug === slug);
};

export const getAllPracticeAreas = (): PracticeArea[] => {
  return practiceAreas;
};