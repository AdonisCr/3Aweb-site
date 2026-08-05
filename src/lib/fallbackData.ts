import type { WPPost, WPProject, WPTeamMember } from './types'

export const FALLBACK_POSTS: WPPost[] = [
  {
    id: '1',
    title: "Séance de formation à l'Université Esperanza",
    slug: 'seance-formation-universite-esperanza',
    excerpt:
      "Alliance Actions Afrique a organisé une séance de formation au sein de l'Université Esperanza à Cotonou, visant à renforcer les compétences professionnelles des étudiants béninois.",
    content: '',
    date: '2025-06-12',
    featuredImage: { node: { id: '1', sourceUrl: '/assets/gallery-13-4246.webp', altText: 'Formation Esperanza' } },
  },
  {
    id: '2',
    title: 'Remise de matériel pédagogique',
    slug: 'remise-materiel-pedagogique',
    excerpt:
      "Dans le cadre de notre partenariat avec les écoles locales, nous avons remis du matériel pédagogique pour soutenir les enseignants et les élèves de la commune de Sèmè-Kpodji.",
    content: '',
    date: '2025-06-05',
    featuredImage: { node: { id: '2', sourceUrl: '/assets/gallery-13-4250.webp', altText: 'Matériel pédagogique' } },
  },
  {
    id: '3',
    title: 'Lancement du programme de parrainage 2025',
    slug: 'lancement-programme-parrainage-2025',
    excerpt:
      "Le programme de parrainage 2025 a été lancé avec succès, connectant pour la première fois 25 étudiants béninois à des mentors professionnels en France.",
    content: '',
    date: '2025-05-20',
    featuredImage: { node: { id: '3', sourceUrl: '/assets/hero-bg.webp', altText: 'Parrainage 2025' } },
  },
]

export const FALLBACK_PROJECTS: WPProject[] = [
  {
    id: 'regards-croises',
    title: 'Regards croisés',
    slug: 'regards-croises',
    excerpt:
      "Ce projet vise à faciliter et à valoriser la compréhension mutuelle entre les cultures française et béninoise en mettant en lumière des initiatives et des acteurs qui œuvrent pour le développement.",
    content: '',
    featuredImage: { node: { id: 'p1', sourceUrl: '/assets/gallery-13-4246.webp', altText: 'Regards croisés' } },
    projectCategories: { nodes: [{ name: 'Projets', slug: 'projets' }] },
  },
  {
    id: 'parrainage',
    title: 'Le parrainage',
    slug: 'parrainage',
    excerpt:
      "Le programme de parrainage connecte les étudiants béninois avec des professionnels français pour des échanges réguliers, du mentorat et un soutien personnalisé vers l'autonomie.",
    content: '',
    featuredImage: { node: { id: 'p2', sourceUrl: '/assets/gallery-13-4250.webp', altText: 'Parrainage' } },
    projectCategories: { nodes: [{ name: 'Projets', slug: 'projets' }] },
  },
  {
    id: 'partenaires',
    title: 'Partenaires',
    slug: 'partenaires',
    excerpt:
      "Alliance Actions Afrique s'appuie sur un réseau solide de partenaires institutionnels, privés et associatifs pour financer et pérenniser ses projets d'éducation et d'insertion.",
    content: '',
    featuredImage: { node: { id: 'p3', sourceUrl: '/assets/hero-bg.webp', altText: 'Partenaires' } },
    projectCategories: { nodes: [{ name: 'Partenariats', slug: 'partenariats' }] },
  },
]

export const FALLBACK_TEAM: WPTeamMember[] = [
  { id: 't1', title: 'Franca Sornin', teamMemberFields: { role: 'Directrice', region: 'fr', order: 1 } },
  { id: 't2', title: 'Président', teamMemberFields: { role: 'Président', region: 'fr', order: 2 } },
  { id: 't3', title: 'Trésorier', teamMemberFields: { role: 'Trésorier', region: 'fr', order: 3 } },
  { id: 't4', title: 'Secrétaire', teamMemberFields: { role: 'Secrétaire', region: 'fr', order: 4 } },
  { id: 't5', title: 'Président', teamMemberFields: { role: 'Président', region: 'bj', order: 5 } },
  { id: 't6', title: 'Vice-président', teamMemberFields: { role: 'Vice-président', region: 'bj', order: 6 } },
  { id: 't7', title: 'Trésorier', teamMemberFields: { role: 'Trésorier', region: 'bj', order: 7 } },
  { id: 't8', title: 'Secrétaire', teamMemberFields: { role: 'Secrétaire', region: 'bj', order: 8 } },
]

export const FALLBACK_CONTACT = {
  email: 'alliance.actions.afrique@gmail.com',
  phoneFr: '+33 6 61 80 27 24',
  phoneBj: '+229 64 68 44 79',
  address: '12 rue des Capucins — 69001 Lyon',
}
