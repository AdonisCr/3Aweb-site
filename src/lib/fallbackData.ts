import type { WPPost, WPProject, WPPartner, WPTeamMember, WPValue, WPDonationTier } from './types'

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

export const FALLBACK_PARTNERS: WPPartner[] = [
  { id: '1', title: "L'Oasis", featuredImage: { node: { id: 'pl1', sourceUrl: '/assets/partners/loasis.webp', altText: "L'Oasis" } }, partnerFields: { category: 'Institutions & entreprises', website: null } },
  { id: '2', title: 'Malia', featuredImage: { node: { id: 'pl2', sourceUrl: '/assets/partners/malia.webp', altText: 'Malia' } }, partnerFields: { category: 'Institutions & entreprises', website: null } },
  { id: '3', title: 'Fondation Guy Seb', featuredImage: { node: { id: 'pl3', sourceUrl: '/assets/partners/fondation-guy-seb.webp', altText: 'Fondation Guy Seb' } }, partnerFields: { category: 'Institutions & entreprises', website: null } },
  { id: '4', title: 'FormaSup Odyssée', featuredImage: { node: { id: 'pl4', sourceUrl: '/assets/partners/formasup-odyssee.webp', altText: 'FormaSup Odyssée' } }, partnerFields: { category: 'Institutions & entreprises', website: null } },
  { id: '5', title: 'Fondation Voltaire', featuredImage: { node: { id: 'pl5', sourceUrl: '/assets/partners/fondation-voltaire.webp', altText: 'Fondation Voltaire' } }, partnerFields: { category: 'Institutions & entreprises', website: null } },
  { id: '6', title: '2 Minutes Max', featuredImage: { node: { id: 'pl6', sourceUrl: '/assets/partners/2-minutes-max.webp', altText: '2 Minutes Max' } }, partnerFields: { category: 'Institutions & entreprises', website: null } },
  { id: '7', title: 'Générale Société', featuredImage: { node: { id: 'pl7', sourceUrl: '/assets/partners/generale-societe.webp', altText: 'Générale Société' } }, partnerFields: { category: 'Ils nous ont fait confiance', website: null } },
  { id: '8', title: 'AAA', featuredImage: { node: { id: 'pl8', sourceUrl: '/assets/partners/aaa-mark-black.webp', altText: 'AAA' } }, partnerFields: { category: 'Institutions & entreprises', website: null } },
  { id: '9', title: 'Sir John Concept Store', featuredImage: { node: { id: 'pl9', sourceUrl: '/assets/partners/sir-john.webp', altText: 'Sir John' } }, partnerFields: { category: 'Institutions & entreprises', website: null } },
  { id: '10', title: 'Lillybelle', featuredImage: { node: { id: 'pl10', sourceUrl: '/assets/partners/lillybelle.webp', altText: 'Lillybelle' } }, partnerFields: { category: 'Institutions & entreprises', website: null } },
  { id: '11', title: 'Ambassade de France au Bénin', featuredImage: { node: { id: 'pl11', sourceUrl: '/assets/partners/ambassade-france-benin.webp', altText: 'Ambassade de France' } }, partnerFields: { category: 'Ils nous ont fait confiance', website: null } },
  { id: '12', title: 'CPME 69', featuredImage: { node: { id: 'pl12', sourceUrl: '/assets/partners/cpme69.webp', altText: 'CPME 69' } }, partnerFields: { category: 'Ils nous ont fait confiance', website: null } },
  { id: '13', title: 'Métropole Grand Lyon', featuredImage: { node: { id: 'pl13', sourceUrl: '/assets/partners/metropole-grand-lyon.webp', altText: 'Métropole Grand Lyon' } }, partnerFields: { category: 'Ils nous ont fait confiance', website: null } },
  { id: '14', title: 'Ville de Lyon', featuredImage: { node: { id: 'pl14', sourceUrl: '/assets/partners/ville-de-lyon.webp', altText: 'Ville de Lyon' } }, partnerFields: { category: 'Ils nous ont fait confiance', website: null } },
  { id: '15', title: 'AAA (gris)', featuredImage: { node: { id: 'pl15', sourceUrl: '/assets/partners/aaa-mark-gray.webp', altText: 'AAA' } }, partnerFields: { category: 'Institutions & entreprises', website: null } },
  { id: '16', title: 'Bulltech', featuredImage: { node: { id: 'pl16', sourceUrl: '/assets/partners/bulltech.webp', altText: 'Bulltech' } }, partnerFields: { category: 'Institutions & entreprises', website: null } },
  { id: '17', title: 'Seal Partner', featuredImage: { node: { id: 'pl17', sourceUrl: '/assets/partners/seal-partner.webp', altText: 'Seal Partner' } }, partnerFields: { category: 'Institutions & entreprises', website: null } },
  { id: '18', title: 'SSA Ecore', featuredImage: { node: { id: 'pl18', sourceUrl: '/assets/partners/ssa-ecore.webp', altText: 'SSA Ecore' } }, partnerFields: { category: 'Institutions & entreprises', website: null } },
  { id: '19', title: 'Design Vebca', featuredImage: { node: { id: 'pl19', sourceUrl: '/assets/partners/design-vebca.webp', altText: 'Design Vebca' } }, partnerFields: { category: 'Institutions & entreprises', website: null } },
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

export const FALLBACK_VALUES: WPValue[] = [
  {
    id: 'v1',
    title: 'Solidarité',
    content: "Face aux obstacles d'accès à la formation, l'assistanat n'est pas une solution durable. La solidarité, elle, crée du lien et de l'autonomie.",
    featuredImage: { node: { id: 'vi1', sourceUrl: '/assets/association/valeurs.webp', altText: 'Solidarité' } },
    valueFields: { order: 1 },
  },
  {
    id: 'v2',
    title: 'Action',
    content: "Faire de chaque engagement une action concrète au service des bénéficiaires.",
    featuredImage: { node: { id: 'vi2', sourceUrl: '/assets/association/action.webp', altText: 'Action' } },
    valueFields: { order: 2 },
  },
  {
    id: 'v3',
    title: 'Proximité',
    content: 'Construire des relations humaines fondées sur l\'écoute et la confiance.',
    featuredImage: { node: { id: 'vi3', sourceUrl: '/assets/association/proximite.webp', altText: 'Proximité' } },
    valueFields: { order: 3 },
  },
  {
    id: 'v4',
    title: 'Transparence',
    content: 'Garantir et installer une communication claire, honnête et responsable.',
    featuredImage: { node: { id: 'vi4', sourceUrl: '/assets/association/transparence.webp', altText: 'Transparence' } },
    valueFields: { order: 4 },
  },
  {
    id: 'v5',
    title: 'Partage',
    content: 'Favoriser la transmission des connaissances, des expériences et des opportunités.',
    featuredImage: { node: { id: 'vi5', sourceUrl: '/assets/association/partage.webp', altText: 'Partage' } },
    valueFields: { order: 5 },
  },
]

export const FALLBACK_DONATION_TIERS: WPDonationTier[] = [
  { id: 'd1', title: '30€', donationTierFields: { amount: 30, description: 'Finance 3 mois de fournitures scolaires' } },
  { id: 'd2', title: '50€', donationTierFields: { amount: 50, description: 'Finance 1 mois de formation professionnelle' } },
  { id: 'd3', title: '100€', donationTierFields: { amount: 100, description: "Finance le matériel pédagogique d'un étudiant" } },
]

export const FALLBACK_CONTACT = {
  email: 'alliance.actions.afrique@gmail.com',
  phoneFr: '+33 6 61 80 27 24',
  phoneBj: '+229 64 68 44 79',
  address: '12 rue des Capucins — 69001 Lyon',
}
