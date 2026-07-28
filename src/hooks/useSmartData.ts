import { useMemo } from 'react'
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
import type { WPPartner } from '@/lib/types'

export function useSmartPosts(first = 10) {
  const { posts: wpPosts, loading, error: _error } = usePosts(first)
  const posts = useMemo(() => {
    if (wpPosts.length > 0) return wpPosts
    return FALLBACK_POSTS
  }, [wpPosts])
  return { posts, loading, fromApi: wpPosts.length > 0 }
}

export function useSmartProjects(first = 10) {
  const { projects: wpProjects, loading, error: _error } = useProjects(first)
  const projects = useMemo(() => {
    if (wpProjects.length > 0) return wpProjects
    return FALLBACK_PROJECTS
  }, [wpProjects])
  return { projects, loading, fromApi: wpProjects.length > 0 }
}

export function useSmartPartners(first = 50) {
  const { partners: wpPartners, grouped: wpGrouped, loading, error: _error } = usePartners(first)
  const result = useMemo(() => {
    if (wpPartners.length > 0) return { partners: wpPartners, grouped: wpGrouped }
    const grouped = FALLBACK_PARTNERS.reduce<Record<string, WPPartner[]>>((acc, p) => {
      const cat = p.partnerFields?.category ?? 'Autre'
      if (!acc[cat]) acc[cat] = []
      acc[cat].push(p)
      return acc
    }, {})
    return { partners: FALLBACK_PARTNERS, grouped }
  }, [wpPartners, wpGrouped])
  return { ...result, loading, fromApi: wpPartners.length > 0 }
}

export function useSmartTeamMembers(first = 20) {
  const { members: wpMembers, frMembers: wpFr, bjMembers: wpBj, loading, error: _error } = useTeamMembers(first)
  const result = useMemo(() => {
    if (wpMembers.length > 0) return { members: wpMembers, frMembers: wpFr, bjMembers: wpBj }
    const fr = FALLBACK_TEAM.filter((m) => m.teamMemberFields?.region === 'fr')
    const bj = FALLBACK_TEAM.filter((m) => m.teamMemberFields?.region === 'bj')
    return { members: FALLBACK_TEAM, frMembers: fr, bjMembers: bj }
  }, [wpMembers, wpFr, wpBj])
  return { ...result, loading, fromApi: wpMembers.length > 0 }
}

export function useSmartValues(first = 10) {
  const { values: wpValues, loading, error: _error } = useValues(first)
  const values = useMemo(() => {
    if (wpValues.length > 0) return wpValues
    return FALLBACK_VALUES
  }, [wpValues])
  return { values, loading, fromApi: wpValues.length > 0 }
}

export function useSmartDonationTiers(first = 10) {
  const { tiers: wpTiers, loading, error: _error } = useDonationTiers(first)
  const tiers = useMemo(() => {
    if (wpTiers.length > 0) return wpTiers
    return FALLBACK_DONATION_TIERS
  }, [wpTiers])
  return { tiers, loading, fromApi: wpTiers.length > 0 }
}

export function useSmartContact() {
  const { contact: wpContact, loading, error: _error } = useContactInfo()
  const contact = useMemo(() => {
    if (wpContact) return wpContact
    return FALLBACK_CONTACT
  }, [wpContact])
  return { contact, loading, fromApi: !!wpContact }
}
