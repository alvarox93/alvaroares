import type { Language } from '@i18n/ui';

export interface HomePost {
  slug: string;
  category: string;
  title: string;
  readTime: string;
  placeholder: string;
}

export const homePosts: Record<Language, HomePost[]> = {
  en: [
    {
      slug: 'motion-design-systems',
      category: 'Motion',
      title: 'Why motion design systems matter more than animated logos',
      readTime: '5 min',
      placeholder: 'Motion',
    },
    {
      slug: 'cgi-vs-photography',
      category: 'CGI',
      title: 'The case for CGI product rendering over traditional photography',
      readTime: '4 min',
      placeholder: 'CGI',
    },
    {
      slug: 'ai-pipeline',
      category: 'AI',
      title: 'AI-native production: how I automated 60% of my visual pipeline',
      readTime: '6 min',
      placeholder: 'AI',
    },
    {
      slug: 'designing-in-code',
      category: 'Design',
      title: 'Designing interfaces that think in code (and why it matters)',
      readTime: '3 min',
      placeholder: 'Code',
    },
    {
      slug: 'building-lapatzak',
      category: 'Brand',
      title: 'Building a brand from zero: what I learned running Lapatzak',
      readTime: '4 min',
      placeholder: 'Brand',
    },
  ],
  es: [
    {
      slug: 'motion-design-systems',
      category: 'Motion',
      title: 'Por qué los sistemas de motion design importan más que los logos animados',
      readTime: '5 min',
      placeholder: 'Motion',
    },
    {
      slug: 'cgi-vs-photography',
      category: 'CGI',
      title: 'El caso del CGI de producto frente a la fotografía tradicional',
      readTime: '4 min',
      placeholder: 'CGI',
    },
    {
      slug: 'ai-pipeline',
      category: 'IA',
      title: 'Producción AI-native: cómo automaticé el 60% de mi pipeline visual',
      readTime: '6 min',
      placeholder: 'IA',
    },
    {
      slug: 'designing-in-code',
      category: 'Diseño',
      title: 'Diseñar interfaces que piensan en código (y por qué importa)',
      readTime: '3 min',
      placeholder: 'Código',
    },
    {
      slug: 'building-lapatzak',
      category: 'Marca',
      title: 'Construir una marca desde cero: lo que aprendí dirigiendo Lapatzak',
      readTime: '4 min',
      placeholder: 'Marca',
    },
  ],
};
