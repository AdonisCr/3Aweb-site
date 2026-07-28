import { useCallback, useEffect, useRef, useState } from 'react'

interface UseAutoSlideOptions {
  length: number
  intervalMs?: number
}

export function useAutoSlide({ length, intervalMs = 3000 }: UseAutoSlideOptions) {
  const [index, setIndex] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const start = useCallback(() => {
    clear()
    if (length <= 1) return
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % length)
    }, intervalMs)
  }, [clear, length, intervalMs])

  useEffect(() => {
    start()
    return clear
  }, [start, clear])

  const goTo = useCallback(
    (i: number) => {
      setIndex(((i % length) + length) % length)
      start()
    },
    [length, start],
  )

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % length)
    start()
  }, [length, start])

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + length) % length)
    start()
  }, [length, start])

  return { index, goTo, next, prev }
}
