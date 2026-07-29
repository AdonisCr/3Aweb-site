import { useState } from 'react'
import UButton from "@/components/ui/UButton";
import UHeading from "@/components/ui/UHeading";
import CtaSection from "@/components/ui/CtaSection";
import PageTitle from '@/components/layout/PageTitle';
import { useSmartPosts } from '@/hooks/useSmartData';

const ASSETS = "/assets/projects/regards-croises";

function YoutubePlay() {
  return (
    <span className="relative h-[45px] w-16 shrink-0">
      <img
        src={`${ASSETS}/yt-red.svg`}
        alt=""
        aria-hidden
        className="absolute inset-0 size-full"
      />
      <img
        src={`${ASSETS}/yt-play.svg`}
        alt=""
        aria-hidden
        className="absolute left-[40%] top-[28%] h-[44%] w-[26%]"
      />
    </span>
  );
}

function ArticleCard({
  slug,
  title,
  date,
  excerpt,
  image,
  imageRight = false,
}: {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  imageRight?: boolean;
}) {
  const imageBlock = (
    <div
      className="w-full overflow-hidden lg:w-1/2 lg:shrink-0"
      data-aos="zoom-in"
      data-aos-duration="1200"
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        decoding="async"
        className="aspect-[600/283] w-full object-cover"
      />
    </div>
  );

  const textBlock = (
    <div
      className="flex w-full flex-col gap-6 lg:w-1/2 lg:shrink-0 lg:gap-10"
      data-aos={imageRight ? "fade-right" : "fade-left"}
      data-aos-duration="1500"
    >
      <div className="flex flex-col gap-2" data-aos="fade-up" data-aos-duration="1200">
        <h2 className="text-[28px] font-bold leading-tight text-primary lg:text-[32px]">
          {title}
        </h2>
        <p className="text-[16px] font-bold text-dark">Publié le {date}</p>
      </div>
      <p className="text-body-md tracking-[-0.32px] text-body">{excerpt}</p>
      <div data-aos="fade-up" data-aos-duration="800">
        <UButton
          to={`/actualites/${slug}`}
          variant="primary"
          className="!w-fit !px-4 !py-2.5 text-[18px]"
        >
          Lire l&apos;article
        </UButton>
      </div>
    </div>
  );

  return (
    <article
      className={`flex flex-col items-start gap-8 lg:flex-row lg:items-stretch lg:justify-between lg:gap-10 ${
        imageRight ? "lg:flex-row-reverse" : ""
      }`}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {imageBlock}
      {textBlock}
    </article>
  );
}

export default function News() {
  const { posts } = useSmartPosts(20);
  const INITIAL_COUNT = 3;
  const [showCount, setShowCount] = useState(INITIAL_COUNT);
  const visiblePosts = posts.slice(0, showCount);
  const hasMore = showCount < posts.length;

  return (
    <div className="page pt-28">
      <PageTitle title="Actualités" />

      {/* HERO */}
      <section className="w-full" data-aos="zoom-in" data-aos-duration="1200">
        <div className="h-[280px] w-full overflow-hidden sm:h-[400px] lg:h-[500px]">
          <img
            src="/assets/news/hero.webp"
            alt="Événement Alliance Actions Afrique"
            loading="lazy"
            decoding="async"
            className="size-full object-cover"
          />
        </div>
      </section>

      {/* À LA UNE */}
      <section className="bg-white py-10 lg:py-16" data-aos="fade-up" data-aos-duration="800">
        <div className="mx-auto flex w-[92%] flex-col gap-8 md:w-[85%] lg:gap-10">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-12">
            <div className="shrink-0" data-aos="fade-up" data-aos-duration="1200">
              <UHeading level={2} color="primary">
                À la une :
              </UHeading>
            </div>
            <p
              className="max-w-[453px] text-left text-body-md tracking-[-0.32px] text-primary lg:text-right"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              Revivez la soirée des 10 ans de Alliance Actions Afrique sur notre
              chaîne YouTube
            </p>
          </div>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-[240px] w-full overflow-hidden rounded-[10px] sm:h-[360px] lg:h-[453px]"
            aria-label="Voir la vidéo des 10 ans sur YouTube"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <img
              src="/assets/news/video-poster.webp"
              alt="10 ans d'intelligence collective"
              loading="lazy"
              decoding="async"
              className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-[12%] left-[6%] right-[10%] max-w-[781px] text-white sm:left-[8%]">
              <p className="leading-[3.25]">
                <span className="text-[20px] font-medium sm:text-[28px] lg:text-[40px]">
                  <span className="text-[36px] font-bold sm:text-[56px] lg:text-[80px]">
                    10 ans
                  </span>{" "}
                  d&apos;intelligence collective
                </span>{" "}
                <span
                  className="inline-block"
                  style={{ backgroundImage: "url(/assets/news/underline.svg)", backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom' }}
                >
                  <span className="text-[20px] font-medium sm:text-[28px] lg:text-[40px]">
                    au service de la coopération
                  </span>
                </span>
              </p>
            </div>
            <span className="absolute inset-0 flex items-center justify-center">
              <YoutubePlay />
            </span>
          </a>
        </div>
      </section>

      {/* ARTICLES LIST */}
      <section className="bg-white py-10 lg:py-12" data-aos="fade-up" data-aos-duration="800">
        <div className="mx-auto flex w-[92%] flex-col gap-16 md:w-[85%] lg:gap-[100px]">
          {visiblePosts.map((post, index) => (
            <ArticleCard
              key={post.id}
              slug={post.slug}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              image={post.featuredImage?.node?.sourceUrl ?? "/assets/news/hero.webp"}
              imageRight={index % 2 === 1}
            />
          ))}
          {posts.length === 0 && (
            <p className="text-center text-body text-gray-500">
              Aucun article pour le moment.
            </p>
          )}
          {hasMore && (
            <div className="flex justify-center" data-aos="fade-up" data-aos-duration="800">
              <UButton
                variant="primary"
                className="!w-fit !px-6 !py-2.5 text-[18px]"
                onClick={() => setShowCount(posts.length)}
              >
                Voir les précédents
              </UButton>
            </div>
          )}
        </div>
      </section>

      <div data-aos="fade-up" data-aos-duration="800">
        <CtaSection />
      </div>
    </div>
  );
}
