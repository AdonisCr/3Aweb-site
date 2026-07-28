import { memo } from 'react'

interface YoutubePlayProps {
  iconSrc?: string
  playSrc?: string
  className?: string
}

export default memo(function YoutubePlay({
  iconSrc = '/assets/projects/regards-croises/yt-red.svg',
  playSrc = '/assets/projects/regards-croises/yt-play.svg',
  className = '',
}: YoutubePlayProps) {
  return (
    <span className={`relative h-[45px] w-16 shrink-0 ${className}`}>
      <img src={iconSrc} alt="" aria-hidden className="absolute inset-0 size-full" />
      <img src={playSrc} alt="" aria-hidden className="absolute left-[40%] top-[28%] h-[44%] w-[26%]" />
    </span>
  )
})
