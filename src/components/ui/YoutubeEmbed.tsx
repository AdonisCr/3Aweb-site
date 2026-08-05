import { useEffect, useState, memo, type ReactNode } from "react";
import YoutubePlay from "./YoutubePlay";

type TeaserState = "idle" | "playing" | "teaserEnded";

interface YoutubeEmbedProps {
  videoId?: string;
  url?: string;
  title?: string;
  poster?: string;
  className?: string;
  teaserSeconds?: number;
  /** Overlay rendered on top of the poster in idle state (e.g. News title) */
  overlay?: ReactNode;
  playIconSrc?: string;
  playSrc?: string;
}

export function extractYoutubeId(urlOrId: string): string {
  if (/^[\w-]{11}$/.test(urlOrId)) return urlOrId;

  try {
    const parsed = new URL(urlOrId);
    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.slice(1).split("/")[0];
    }
    const v = parsed.searchParams.get("v");
    if (v) return v;
    const parts = parsed.pathname.split("/").filter(Boolean);
    const shortsIdx = parts.indexOf("shorts");
    if (shortsIdx !== -1 && parts[shortsIdx + 1]) return parts[shortsIdx + 1];
    const embedIdx = parts.indexOf("embed");
    if (embedIdx !== -1 && parts[embedIdx + 1]) return parts[embedIdx + 1];
  } catch {
    // ignore invalid URLs
  }

  return urlOrId;
}

export default memo(function YoutubeEmbed({
  videoId: videoIdProp,
  url,
  title = "Vidéo YouTube",
  poster,
  className = "aspect-video",
  teaserSeconds = 25,
  overlay,
  playIconSrc,
  playSrc,
}: YoutubeEmbedProps) {
  const videoId = extractYoutubeId(videoIdProp ?? url ?? "");
  const watchUrl =
    url?.includes("youtube.com") || url?.includes("youtu.be")
      ? url
      : `https://www.youtube.com/watch?v=${videoId}`;
  const posterSrc =
    poster ?? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const shellClass = `relative w-full overflow-hidden rounded-[10px] ${className}`;

  const [state, setState] = useState<TeaserState>("idle");

  useEffect(() => {
    if (state !== "playing") return;
    const timer = window.setTimeout(
      () => setState("teaserEnded"),
      teaserSeconds * 1000,
    );
    return () => window.clearTimeout(timer);
  }, [state, teaserSeconds]);

  if (state === "playing") {
    return (
      <div className={shellClass}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      </div>
    );
  }

  if (state === "teaserEnded") {
    return (
      <div className={shellClass}>
        <img
          src={posterSrc}
          alt={title}
          loading="lazy"
          decoding="async"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/55 px-4">
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-btn bg-primary px-5 py-2.5 text-[16px] font-semibold text-white transition-colors duration-300 hover:bg-primary-hover"
          >
            Lire toute la vidéo
          </a>
          <button
            type="button"
            onClick={() => setState("playing")}
            className="text-sm text-white/80 underline underline-offset-2 hover:text-white"
          >
            Revoir le teaser
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setState("playing")}
      className={`group block cursor-pointer ${shellClass}`}
      aria-label={`Lire la vidéo : ${title}`}
    >
      <img
        src={posterSrc}
        alt={title}
        loading="lazy"
        decoding="async"
        className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />
      {overlay}
      <span className="absolute inset-0 flex items-center justify-center">
        <YoutubePlay iconSrc={playIconSrc} playSrc={playSrc} />
      </span>
    </button>
  );
});
