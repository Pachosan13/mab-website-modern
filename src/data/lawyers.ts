import teamData from './team.json';

export interface LawyerData {
  id: string;
  slug: string;
  foto_abogado: string;
  foto_todo?: string;
  nombre_completo: string;
  cargo: string;
  email?: string;
  linkedin_url?: string;
  telefono?: string;
  bio_corta: string;
  bio_extendida: string;
  educacion_lista: string[];
  areas_practica_lista: string[];
  idiomas_lista: string[];
  experiencia_destacada: string[];
  news_insights_lista: string[];
}

export const lawyers: LawyerData[] = teamData as LawyerData[];

export const getLawyerBySlug = (slug: string): LawyerData | undefined => {
  return lawyers.find(lawyer => lawyer.slug === slug);
};

export const getAllLawyers = (): LawyerData[] => {
  return lawyers;
};