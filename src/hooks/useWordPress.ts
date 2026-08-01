import { useQuery } from '@apollo/client/react'
import {
  GET_ALL_POSTS,
  GET_POST_BY_SLUG,
  GET_ALL_PROJECTS,
  GET_PROJECT_BY_SLUG,
  GET_ALL_TEAM_MEMBERS,
  GET_CONTACT_INFO,
  GET_GLOBAL_SETTINGS,
  GET_HOME_PAGE,
} from '@/lib/queries'
import type {
  WPPost,
  WPProject,
  WPTeamMember,
  WPContactInfo,
  WPPage,
} from '@/lib/types'

interface PageInfo {
  hasNextPage: boolean
  endCursor: string | null
}

interface PaginatedResult<T> {
  nodes: T[]
  pageInfo: PageInfo
}

export function usePosts(first = 10) {
  const { data, loading, error } = useQuery<{ posts: PaginatedResult<WPPost> }>(
    GET_ALL_POSTS,
    { variables: { first } }
  )
  return {
    posts: data?.posts?.nodes ?? [],
    loading,
    error,
  }
}

export function usePost(slug: string) {
  const { data, loading, error } = useQuery<{ postBy: WPPost | null }>(
    GET_POST_BY_SLUG,
    { variables: { slug }, skip: !slug }
  )
  return {
    post: data?.postBy ?? null,
    loading,
    error,
  }
}

export function useProjects(first = 10) {
  const { data, loading, error } = useQuery<{ projects: PaginatedResult<WPProject> }>(
    GET_ALL_PROJECTS,
    { variables: { first } }
  )
  return {
    projects: data?.projects?.nodes ?? [],
    loading,
    error,
  }
}

export function useProject(slug: string) {
  const { data, loading, error } = useQuery<{ projectBy: WPProject | null }>(
    GET_PROJECT_BY_SLUG,
    { variables: { slug }, skip: !slug }
  )
  return {
    project: data?.projectBy ?? null,
    loading,
    error,
  }
}

export function useTeamMembers(first = 20) {
  const { data, loading, error } = useQuery<{ teamMembers: PaginatedResult<WPTeamMember> }>(
    GET_ALL_TEAM_MEMBERS,
    { variables: { first } }
  )

  const members = data?.teamMembers?.nodes ?? []
  const frMembers = members.filter((m) => {
    const region = m.teamMemberFields?.region
    return Array.isArray(region) ? region.includes('fr') : region === 'fr'
  })
  const bjMembers = members.filter((m) => {
    const region = m.teamMemberFields?.region
    return Array.isArray(region) ? region.includes('bj') : region === 'bj'
  })

  return {
    members,
    frMembers,
    bjMembers,
    loading,
    error,
  }
}

export function useContactInfo() {
  const { data, loading, error } = useQuery<{
    pageBy: WPContactInfo | null
  }>(GET_CONTACT_INFO)
  return {
    contact: data?.pageBy?.contactInfoFields ?? null,
    loading,
    error,
  }
}

export function useGlobalSettings() {
  const { data, loading, error } = useQuery<{
    allSettings: {
      generalSettingsTitle: string
      generalSettingsDescription: string
    }
    pageBy: {
      globalSettingsFields: Record<string, string | null>
    } | null
  }>(GET_GLOBAL_SETTINGS)

  const settings = data?.pageBy?.globalSettingsFields ?? {}

  return {
    siteTitle: data?.allSettings?.generalSettingsTitle ?? 'Alliance Actions Afrique',
    siteDescription: data?.allSettings?.generalSettingsDescription ?? 'Agir pour le développement',
    heroTitle: settings.heroTitle,
    heroDescription: settings.heroDescription,
    missionText: settings.missionText,
    aboutText: settings.aboutText,
    youtubeUrl: settings.youtubeUrl,
    missionVideoUrl: settings.missionVideoUrl,
    ctaTitle: settings.ctaTitle,
    ctaSubtitle: settings.ctaSubtitle,
    loading,
    error,
  }
}

export function useHomePage() {
  const { data, loading, error } = useQuery<{
    pageBy: WPPage & {
      homePageFields?: Record<string, unknown>
    }
  }>(GET_HOME_PAGE)

  const fields = data?.pageBy?.homePageFields as Record<string, unknown> | undefined

  return {
    page: data?.pageBy ?? null,
    fields,
    loading,
    error,
  }
}
