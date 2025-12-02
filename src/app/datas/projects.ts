export interface ProjectType {
  id: string;
  title: string;
  type: string;
  short_description: string;
  description: string;
  image: string;
  link?: string;
  stacks: string[];
}

export const projects: ProjectType[] = [
  {
    id: 'amtras',
    title: 'Amiens Travel Services',
    type: 'Site vitrine',
    short_description: 'Site WordPress moderne et optimisé pour un chauffeur VTC.',
    description: 'Conception et développement complet d’un site vitrine WordPress pour une entreprise de VTC. Création d’un thème personnalisé basé sur une direction artistique sur mesure. Intégration d’Elementor pour permettre au client de gérer facilement le contenu. Développement d’un design sobre et premium, optimisé mobile, cohérent avec le positionnement haut de gamme du service. Mise en place des pages clés (services, contact), optimisations SEO de base et paramétrages techniques (sécurité, performances, RGPD, cache).',
    image: '/amtras.webp',
    link: '',
    stacks: ['Wordpress', 'ACF', 'Elementor']
  },
  {
    id: 'whatif',
    title: 'What if | The lightning bold',
    type: 'Site vitrine',
    short_description: 'Site WordPress avec thème sur mesure pour une agence de communication créative',
    description: 'Développement complet du nouveau site institutionnel de l’agence What If | The Lightning Bold. Création d’un thème WordPress entièrement sur mesure, basé sur la direction artistique existante. Intégration soignée des maquettes avec un design moderne et un rendu fidèle à l’identité visuelle forte de l’agence. Mise en place d’une architecture flexible et performante, organisation des contenus (services, pages corporate, contact), optimisation du responsive, de la navigation et des animations.',
    image: '/whatif.webp',
    link: 'https://whatifthelightningbold.fr',
    stacks: ['Wordpress', 'ACF', 'PHP']
  },
  {
    id: "light-crm",
    title: "Light CRM",
    type: "Application web",
    description: "Mini-CRM complet Angular + NestJS",
    stacks: ["Angular", "NestJS", "MySQL"],
    short_description: "Mini-CRM sur mesure développé avec Angular & NestJS.",
    image: '/lightcrm.webp',
  },
  {
    id: 'liseme',
    title: 'Liseme Groupe',
    type: 'Site vitrine',
    short_description: 'Site institutionnel avec blog interne pour une holding dans le secteur de la santé.',
    description: 'Création complète du site institutionnel de Liseme Groupe, une holding du secteur de la santé. Création d’un thème WordPress sur mesure et intégration via Elementor et ACF pour offrir une gestion de contenu flexible et durable. Développement d’un blog structuré avec catégories, d’un template de page services, d’une page d’accueil dynamique et d’un formulaire de contact optimisé. Travail sur une identité visuelle cohérente et professionnelle, adaptée à leur positionnement corporate.',
    image: '/liseme.webp',
    link: '',
    stacks: ['Wordpress', 'ACF', 'PHP']
  }
]