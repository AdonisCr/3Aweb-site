export interface WPMediaItem {
  id: string
  sourceUrl: string
  altText: string | null
  mediaDetails?: {
    width: number
    height: number
  }
}

export interface WPPage {
  id: string
  title: string
  slug: string
  content: string
  featuredImage?: {
    node: WPMediaItem
  } | null
}

export interface WPPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  featuredImage?: {
    node: WPMediaItem
  } | null
  categories?: {
    nodes: Array<{ name: string; slug: string }>
  }
}

export interface WPProject {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage?: {
    node: WPMediaItem
  } | null
  projectCategories?: {
    nodes: Array<{ name: string; slug: string }>
  }
}

export interface WPPartner {
  id: string
  title: string
  featuredImage?: {
    node: WPMediaItem
  } | null
  partnerFields?: {
    category: string
    website: string | null
  }
}

export interface WPTeamMember {
  id: string
  title: string
  featuredImage?: {
    node: WPMediaItem
  } | null
  teamMemberFields?: {
    role: string
    region: 'fr' | 'bj' | string[]
    order: number
  }
}

export interface WPValue {
  id: string
  title: string
  content: string
  featuredImage?: {
    node: WPMediaItem
  } | null
  valueFields?: {
    order: number
    description?: string
    image?: {
      node: WPMediaItem
    } | null
  }
}

export interface WPDonationTier {
  id: string
  title: string
  donationTierFields?: {
    amount: number
    description: string
  }
}

export interface WPContactInfo {
  id: string
  title: string
  contactInfoFields?: {
    email: string
    phoneFr: string
    phoneBj: string
    address: string
    latitude: number | null
    longitude: number | null
  }
}

export interface WPGlobalSettings {
  siteTitle: string
  siteDescription: string
  logo?: {
    node: WPMediaItem
  } | null
  youtubeUrl: string | null
  missionVideoUrl: string | null
  heroTitle: string | null
  heroDescription: string | null
  missionText: string | null
  aboutText: string | null
  ctaTitle: string | null
  ctaSubtitle: string | null
}

export interface WPMenu {
  menuItems: {
    nodes: Array<{
      id: string
      label: string
      url: string
      parentId: string | null
      order: number
    }>
  }
}

export interface PartnerGroup {
  title: string
  logos: Array<{ name: string; src: string }>
}
