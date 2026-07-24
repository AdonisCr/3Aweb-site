import { useMemo } from 'react'
import { useApolloClient } from '@apollo/client/react'
import { usePosts, useProjects, usePartners, useTeamMembers, useValues, useDonationTiers, useContactInfo } from './useWordPress'
import {
  FALLBACK_POSTS,
  FALLBACK_PROJECTS,
  FALLBACK_PARTNERS,
  FALLBACK_TEAM,
  FALLBACK_VALUES,
  FALLBACK_DONATION_TIERS,
  FALLBACK_CONTACT,
} from '@/lib/fallbackData'
import type { WPPost, WPProject, WPPartner, WPTeamMember, WPValue, WPDonationTier } from '@/lib/types'

function isGraphQLAvailable(client: ReturnType<typeof useApolloClient>): boolean {
  try {
    const cache = client.cache.extract()
    return Object.keys(cache).length > 0
  } catch {
    return false
  }
}

export function useSmartPosts(first = 10) {
  const { posts: wpPosts, loading, error } = usePosts(first)
  const posts = useMemo(() => {
    if (wpPosts.length > 0) return wpPosts
    if (!loading && error) return FALLBACK_POSTS
    return wpPosts.length > 0 ? wpPosts : FALLBACK_POSTS
  }, [wpPosts, loading, error])
  return { posts, loading, fromApi: wpPosts.length > 0 }
}

export function useSmartProjects(first = 10) {
  const { projects: wpProjects, loading, error } = useProjects(first)
  const projects = useMemo(() => {
    if (wpProjects.length > 0) return wpProjects
    if (!loading && error) return FALLBACK_PROJECTS
    return wpProjects.length > 0 ? wpProjects : FALLBACK_PROJECTS
  }, [wpProjects, loading, error])
  return { projects, loading, fromApi: wpProjects.length > 0 }
}

export function useSmartPartners(first = 50) {
  const { partners: wpPartners, grouped: wpGrouped, loading, error } = usePartners(first)
  const result = useMemo(() => {
    if (wpPartners.length > 0) return { partners: wpPartners, grouped: wpGrouped }
    if (!loading && error) {
      const grouped = FALLBACK_PARTNERS.reduce<Record<string, WPPartner[]>>((acc, p) => {
        const cat = p.partnerFields?.category ?? 'Autre'
        if (!acc[cat]) acc[cat] = []
        acc[cat].push(p)
        return acc
      }, {})
      return { partners: FALLBACK_PARTNERS, grouped }
    }
    return { partners: wpPartners, grouped: wpGrouped }
  }, [wpPartners, wpGrouped, loading, error])
  return { ...result, loading, fromApi: wpPartners.length > 0 }
}

export function useSmartTeamMembers(first = 20) {
  const { members: wpMembers, frMembers: wpFr, bjMembers: wpBj, loading, error } = useTeamMembers(first)
  const result = useMemo(() => {
    if (wpMembers.length > 0) return { members: wpMembers, frMembers: wpFr, bjMembers: wpBj }
    if (!loading && error) {
      const fr = FALLBACK_TEAM.filter((m) => m.teamMemberFields?.region === 'fr')
      const bj = FALLBACK_TEAM.filter((m) => m.teamMemberFields?.region === 'bj')
      return { members: FALLBACK_TEAM, frMembers: fr, bjMembers: bj }
    }
    return { members: wpMembers, frMembers: wpFr, bjMembers: wpBj }
  }, [wpMembers, wpFr, wpBj, loading, error])
  return { ...result, loading, fromApi: wpMembers.length > 0 }
}

export function useSmartValues(first = 10) {
  const { values: wpValues, loading, error } = useValues(first)
  const values = useMemo(() => {
    if (wpValues.length > 0) return wpValues
    if (!loading && error) return FALLBACK_VALUES
    return wpValues.length > 0 ? wpValues : FALLBACK_VALUES
  }, [wpValues, loading, error])
  return { values, loading, fromApi: wpValues.length > 0 }
}

export function useSmartDonationTiers(first = 10) {
  const { tiers: wpTiers, loading, error } = useDonationTiers(first)
  const tiers = useMemo(() => {
    if (wpTiers.length > 0) return wpTiers
    if (!loading && error) return FALLBACK_DONATION_TIERS
    return wpTiers.length > 0 ? wpTiers : FALLBACK_DONATION_TIERS
  }, [wpTiers, loading, error])
  return { tiers, loading, fromApi: wpTiers.length > 0 }
}

export function useSmartContact() {
  const { contact: wpContact, loading, error } = useContactInfo()
  const contact = useMemo(() => {
    if (wpContact) return wpContact
    if (!loading && error) return FALLBACK_CONTACT
    return wpContact ?? FALLBACK_CONTACT
  }, [wpContact, loading, error])
  return { contact, loading, fromApi: !!wpContact }
}
