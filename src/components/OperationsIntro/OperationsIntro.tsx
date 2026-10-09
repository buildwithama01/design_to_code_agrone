import { useRef } from 'react'
import CarouselControls from './CarouselControls'
import Description from './Description'
import FeatureCards from './FeatureCards'
import SectionHeading from './SectionHeading'

function OperationsIntro() {
  const featureTrackRef = useRef<HTMLDivElement>(null)

  const scrollFeatures = (direction: -1 | 1) => {
    const track = featureTrackRef.current
    const firstCard = track?.firstElementChild

    if (!track || !(firstCard instanceof HTMLElement)) return

    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0

    track.scrollBy({
      left: direction * (firstCard.offsetWidth + gap),
      behavior: 'smooth',
    })
  }

  return (
    <section
      aria-labelledby="operations-intro-heading"
      className="mx-auto w-[calc(100%-1.5rem)] max-w-[1600px] px-6 py-16 sm:w-[calc(100%-2rem)] sm:px-10 sm:py-20 lg:px-12 lg:py-24"
      id="operations-intro"
    >
      <SectionHeading />
      <div className="mt-10 grid grid-cols-[minmax(12rem,0.8fr)_minmax(0,2.2fr)] items-center gap-8 md:mt-12 lg:gap-12 max-md:grid-cols-1">
        <div className="flex flex-col items-start justify-center max-md:flex-row max-md:items-end max-md:justify-between max-md:gap-4">
          <Description />
          <div className="max-md:shrink-0">
            <CarouselControls
              onPrevious={() => scrollFeatures(-1)}
              onNext={() => scrollFeatures(1)}
            />
          </div>
        </div>
        <FeatureCards trackRef={featureTrackRef} />
      </div>
    </section>
  )
}

export default OperationsIntro
