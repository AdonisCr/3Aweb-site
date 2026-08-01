import { useMemo } from 'react'
import { usePosts, usePost, useProjects, useTeamMembers, useContactInfo } from './useWordPress'
import {
  FALLBACK_POSTS,
  FALLBACK_PROJECTS,
  FALLBACK_TEAM,
  FALLBACK_CONTACT,
} from '@/lib/fallbackData'

export function useSmartPosts(first = 10) {
  const { posts: wpPosts, loading, error: _error } = usePosts(first)
  const posts = useMemo(() => {
    if (wpPosts.length > 0) return wpPosts
    return FALLBACK_POSTS
  }, [wpPosts])
  return { posts, loading, fromApi: wpPosts.length > 0 }
}

export function useSmartPost(slug: string) {
  const { post: wpPost, loading } = usePost(slug)
  const post = useMemo(() => {
    if (wpPost) return wpPost
    if (!slug) return null
    return FALLBACK_POSTS.find((p) => p.slug === slug) ?? null
  }, [wpPost, slug])
  return { post, loading, fromApi: !!wpPost }
}

export function useSmartProjects(first = 10) {
  const { projects: wpProjects, loading, error: _error } = useProjects(first)
  const projects = useMemo(() => {
    if (wpProjects.length > 0) return wpProjects
    return FALLBACK_PROJECTS
  }, [wpProjects])
  return { projects, loading, fromApi: wpProjects.length > 0 }
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

export function useSmartContact() {
  const { contact: wpContact, loading, error: _error } = useContactInfo()
  const contact = useMemo(() => {
    if (wpContact) return wpContact
    return FALLBACK_CONTACT
  }, [wpContact])
  return { contact, loading, fromApi: !!wpContact }
}
