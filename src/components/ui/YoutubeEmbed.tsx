import { useState, memo } from 'react'

interface YoutubeEmbedProps {
  videoId: string
  title?: string
  poster?: string
  className?: string
}

export default memo(function YoutubeEmbed({
  videoId,
  title = 'Vidéo YouTube',
  poster,
  className = '',
}: YoutubeEmbedProps) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <div className={`relative aspect-video w-full overflow-hidden rounded-[10px] ${className}`}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="size-full"
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className={`group relative block aspect-video w-full overflow-hidden rounded-[10px] cursor-pointer ${className}`}
      aria-label={`Lire la vidéo : ${title}`}
    >
      <img
        src={poster ?? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        loading="lazy"
        decoding="async"
        className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="relative h-[45px] w-16 shrink-0">
          <img src="/assets/projects/regards-croises/yt-red.svg" alt="" aria-hidden className="absolute inset-0 size-full" />
          <img src="/assets/projects/regards-croises/yt-play.svg" alt="" aria-hidden className="absolute left-[40%] top-[28%] h-[44%] w-[26%]" />
        </span>
      </span>
    </button>
  )
})
