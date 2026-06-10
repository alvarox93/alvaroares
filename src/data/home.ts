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
      title: 'Gourmet renders. No clients. No excuses.',
      readTime: '5 min',
      placeholder: 'CGI',
      date: 'Jun 2026',
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
      category: 'Code',
      title: 'I started with code. I hated it. Then I understood what it was for.',
      readTime: '5 min',
      placeholder: 'Code',
      date: 'Apr 2026',
    },
    {
      slug: 'building-lapatzak',
      category: 'Branding',
      title: 'What you learn when you\'re your own client',
      readTime: '5 min',
      placeholder: 'Brand',
      date: 'May 2026',
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
      title: 'Renders gourmet. Sin clientes. Sin excusas.',
      readTime: '5 min',
      placeholder: 'CGI',
      date: 'Jun 2026',
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
      category: 'Código',
      title: 'Empecé con código. Lo odié. Y luego entendí para qué servía.',
      readTime: '5 min',
      placeholder: 'Código',
      date: 'Abr 2026',
    },
    {
      slug: 'building-lapatzak',
      category: 'Branding',
      title: 'Lo que aprendes cuando eres tú mismo el cliente',
      readTime: '5 min',
      placeholder: 'Marca',
      date: 'May 2026',
    },
  ],
};
