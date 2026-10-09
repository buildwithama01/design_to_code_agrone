import { LuArrowUpRight } from 'react-icons/lu'
import NotchedSurface from '../NotchedSurface'

type ArticleCardProps = {
  title: string
  category: string
  image: string
  imageAlt: string
  arrowBackgroundColor: string
}

function ArticleCard({
  title,
  category,
  image,
  imageAlt,
  arrowBackgroundColor,
}: ArticleCardProps) {
  return (
    <article className="min-w-0">
      <a
        aria-label={`Read article: ${title}`}
        className="group relative block"
        href="#news"
      >
        <NotchedSurface className="notched-surface notched-surface--article relative h-80 overflow-hidden lg:h-96">
          <img
            alt={imageAlt}
            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
            src={image}
          />
        </NotchedSurface>
        <span
          className="absolute top-2 right-2 z-20 grid size-11 place-items-center rounded-full text-agrone-green transition-transform group-hover:scale-105"
          style={{ backgroundColor: arrowBackgroundColor }}
        >
          <LuArrowUpRight aria-hidden="true" className="size-5" />
        </span>
      </a>
      <h3 className="mt-3 max-w-sm text-base leading-snug font-medium text-agrone-green sm:mt-4 sm:text-lg">
        {title}
      </h3>
      <a
        className="mt-4 inline-flex min-h-9 items-center rounded-full border border-agrone-green px-4 text-[0.65rem] font-medium uppercase text-agrone-green transition-colors hover:bg-agrone-green hover:text-white sm:mt-5"
        href="#news"
      >
        {category}
      </a>
    </article>
  )
}

export default ArticleCard
