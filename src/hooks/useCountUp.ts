import { useEffect, useRef, useState } from 'react'

interface UseCountUpOptions {
  target: number
  start?: number
  durationMs?: number
  /** Start counting only when this element is visible */
  enabled?: boolean
}

export function useCountUp({
  target,
  start = 10,
  durationMs = 1800,
  enabled = true,
}: UseCountUpOptions) {
  const [count, setCount] = useState(start)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!enabled || started) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [enabled, started])

  useEffect(() => {
    if (!started) return

    const from = Math.min(start, target)
    const to = target
    const startTime = performance.now()
    let frame = 0

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

    const tick = (now: number) => {
      const progress = Math.min(1, (now - startTime) / durationMs)
      const value = Math.round(from + (to - from) * easeOutCubic(progress))
      setCount(value)
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [started, start, target, durationMs])

  return { count, ref }
}
