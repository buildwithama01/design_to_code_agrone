import type { RefObject } from 'react'
import heavyPayloadImage from '../../assets/images/explore1.jpg'
import smoothSpreadingImage from '../../assets/images/explore2.jpg'
import sprinklerKitImage from '../../assets/images/explore3.jpg'

type FeatureCardsProps = {
  trackRef: RefObject<HTMLDivElement | null>
}

const features = [
  { title: 'Heavy Payload', image: heavyPayloadImage },
  { title: 'Smooth Spreading', image: smoothSpreadingImage },
  { title: 'Four Sprinkler Kit', image: sprinklerKitImage },
  { title: 'Heavy Payload', image: heavyPayloadImage },
  { title: 'Smooth Spreading', image: smoothSpreadingImage },
]

function FeatureCards({ trackRef }: FeatureCardsProps) {
  return (
    <div
      className="feature-carousel-scrollbar flex min-w-0 snap-x snap-mandatory gap-3 overflow-x-auto pb-3 md:gap-4"
      ref={trackRef}
    >
      {features.map(({ title, image }, index) => (
        <article
          className="w-[min(72vw,15rem)] shrink-0 snap-start md:w-[calc((100%-2rem)/3)]"
          key={`${title}-${index}`}
        >
          <img
            alt={title}
            className="aspect-[0.74] w-full rounded-[1.35rem] object-cover"
            loading="lazy"
            src={image}
          />
          <h3 className="mt-3 text-sm font-medium text-agrone-green sm:text-base">
            {title}
          </h3>
        </article>
      ))}
    </div>
  )
}

export default FeatureCards
