import { gql } from '@apollo/client'

const MEDIA_FIELDS = gql`
  fragment MediaFields on MediaItem {
    id
    sourceUrl
    altText
    mediaDetails {
      width
      height
    }
  }
`

export const GET_ALL_POSTS = gql`
  ${MEDIA_FIELDS}
  query GetAllPosts($first: Int = 10) {
    posts(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        slug
        excerpt
        date
        featuredImage {
          node {
            ...MediaFields
          }
        }
      }
    }
  }
`

export const GET_POST_BY_SLUG = gql`
  ${MEDIA_FIELDS}
  query GetPostBySlug($slug: String!) {
    postBy(slug: $slug) {
      id
      title
      slug
      excerpt
      content
      date
      featuredImage {
        node {
          ...MediaFields
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
    }
  }
`

export const GET_ALL_PROJECTS = gql`
  ${MEDIA_FIELDS}
  query GetAllProjects($first: Int = 10) {
    projects(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        slug
        excerpt
        featuredImage {
          node {
            ...MediaFields
          }
        }
        projectCategories {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`

export const GET_PROJECT_BY_SLUG = gql`
  ${MEDIA_FIELDS}
  query GetProjectBySlug($slug: String!) {
    projectBy(slug: $slug) {
      id
      title
      slug
      excerpt
      content
      featuredImage {
        node {
          ...MediaFields
        }
      }
      projectCategories {
        nodes {
          name
          slug
        }
      }
    }
  }
`

export const GET_ALL_PARTNERS = gql`
  ${MEDIA_FIELDS}
  query GetAllPartners($first: Int = 50) {
    partners(first: $first) {
      nodes {
        id
        title
        featuredImage {
          node {
            ...MediaFields
          }
        }
        partnerFields {
          category
          website
        }
      }
    }
  }
`

export const GET_ALL_TEAM_MEMBERS = gql`
  ${MEDIA_FIELDS}
  query GetAllTeamMembers($first: Int = 20) {
    teamMembers(first: $first, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
      nodes {
        id
        title
        featuredImage {
          node {
            ...MediaFields
          }
        }
        teamMemberFields {
          role
          region
          order
        }
      }
    }
  }
`

export const GET_ALL_VALUES = gql`
  ${MEDIA_FIELDS}
  query GetAllValues($first: Int = 10) {
    values(first: $first, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
      nodes {
        id
        title
        content
        featuredImage {
          node {
            ...MediaFields
          }
        }
        valueFields {
          order
        }
      }
    }
  }
`

export const GET_ALL_DONATION_TIERS = gql`
  query GetAllDonationTiers($first: Int = 10) {
    donationTiers(first: $first, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
      nodes {
        id
        title
        donationTierFields {
          amount
          description
        }
      }
    }
  }
`

export const GET_CONTACT_INFO = gql`
  query GetContactInfo {
    pageBy(uri: "contact-info") {
      id
      title
      ... on ContactInfo {
        contactInfoFields {
          email
          phoneFr
          phoneBj
          address
          latitude
          longitude
        }
      }
    }
  }
`

export const GET_GLOBAL_SETTINGS = gql`
  ${MEDIA_FIELDS}
  query GetGlobalSettings {
    allSettings {
      generalSettingsTitle
      generalSettingsDescription
    }
    mediaItemBySlug(slug: "logo") {
      ...MediaFields
    }
    pageBy(uri: "parametres-sites") {
      ... on GlobalSettings {
        globalSettingsFields {
          youtubeUrl
          missionVideoUrl
          heroTitle
          heroDescription
          missionText
          aboutText
          ctaTitle
          ctaSubtitle
        }
      }
    }
  }
`

export const GET_HOME_PAGE = gql`
  ${MEDIA_FIELDS}
  query GetHomePage {
    pageBy(uri: "accueil") {
      id
      title
      content
      featuredImage {
        node {
          ...MediaFields
        }
      }
      ... on HomePage {
        homePageFields {
          heroNumber
          heroTitle
          heroDescription
          missionText
          stat1Value
          stat1Label
          stat2Value
          stat2Label
          stat3Value
          stat3Label
          aboutTitle
          aboutText
          aboutImage {
            ...MediaFields
          }
          projectsTitle
          articlesTitle
          partnersTitle
          ctaTitle
          ctaSubtitle
          ctaImage {
            ...MediaFields
          }
        }
      }
    }
  }
`

export const GET_MENU = gql`
  query GetMenu($location: MenuLocationEnum!) {
    menuItems(where: { location: $location }, first: 50) {
      nodes {
        id
        label
        url
        parentId
        order
      }
    }
  }
`
