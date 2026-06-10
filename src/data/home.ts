import type { Language } from '@i18n/ui';

export interface HomePost {
  slug: string;
  category: string;
  title: string;
  readTime: string;
  placeholder: string;
  date: string;
}

export const homePosts: Record<Language, HomePost[]> = {
  en: [
    {
      slug: 'motion-design-systems',
      category: 'Motion',
      title: 'They wanted motion. We gave them direction.',
      readTime: '5 min',
      placeholder: 'Motion',
      date: 'Jun 2026',
    },
    {
      slug: 'cgi-vs-photography',
      category: 'CGI',
      title: 'The case for CGI product rendering over traditional photography',
      readTime: '4 min',
      placeholder: 'CGI',
      date: 'May 2026',
    },
    {
      slug: 'ai-pipeline',
      category: 'Creative direction',
      title: 'How I automated 50% of my visual pipeline — and what that changed about how I direct',
      readTime: '6 min',
      placeholder: 'AI',
      date: 'Apr 2026',
    },
    {
      slug: 'designing-in-code',
      category: 'Design',
      title: 'Designing interfaces that think in code (and why it matters)',
      readTime: '3 min',
      placeholder: 'Code',
      date: 'May 2026',
    },
    {
      slug: 'building-lapatzak',
      category: 'Brand',
      title: 'Building a brand from zero: what I learned running Lapatzak',
      readTime: '4 min',
      placeholder: 'Brand',
      date: 'Apr 2026',
    },
  ],
  es: [
    {
      slug: 'motion-design-systems',
      category: 'Motion',
      title: 'Querían movimiento. Les dimos dirección.',
      readTime: '5 min',
      placeholder: 'Motion',
      date: 'Jun 2026',
    },
    {
      slug: 'cgi-vs-photography',
      category: 'CGI',
      title: 'El caso del CGI de producto frente a la fotografía tradicional',
      readTime: '4 min',
      placeholder: 'CGI',
      date: 'May 2026',
    },
    {
      slug: 'ai-pipeline',
      category: 'Dirección creativa',
      title: 'Cómo automaticé el 50% de mi pipeline visual — y lo que eso cambió en cómo dirijo',
      readTime: '6 min',
      placeholder: 'IA',
      date: 'Abr 2026',
    },
    {
      slug: 'designing-in-code',
      category: 'Diseño',
      title: 'Diseñar interfaces que piensan en código (y por qué importa)',
      readTime: '3 min',
      placeholder: 'Código',
      date: 'May 2026',
    },
    {
      slug: 'building-lapatzak',
      category: 'Marca',
      title: 'Construir una marca desde cero: lo que aprendí dirigiendo Lapatzak',
      readTime: '4 min',
      placeholder: 'Marca',
      date: 'Abr 2026',
    },
  ],
};
