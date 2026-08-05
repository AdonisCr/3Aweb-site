export function safeHttpUrl(value: string | null | undefined, fallback: string): string {
  if (!value) return fallback
  try {
    const url = new URL(value)
    if (url.protocol === 'http:' || url.protocol === 'https:') return url.href
  } catch {
    /* invalid URL */
  }
  return fallback
}

export function sanitizeMailto(email: string | null | undefined, fallback: string): string {
  if (!email) return fallback
  const clean = email.trim().toLowerCase()
  if (!/^[^\s"<>@]+@[^\s"<>@]+\.[^\s"<>@]+$/.test(clean)) return fallback
  return `mailto:${clean}`
}

export function sanitizeTel(phone: string | null | undefined, fallback: string): string {
  if (!phone) return fallback
  const clean = phone.replace(/[^\d+]/g, '')
  if (clean.length < 6) return fallback
  return `tel:${clean}`
}
