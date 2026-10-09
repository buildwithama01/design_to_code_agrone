import { useRef } from 'react'
import CarouselControls from './CarouselControls'
import ProductCarousel from './ProductCarousel'
import SectionHeading from './SectionHeading'

function Products() {
  const productTrackRef = useRef<HTMLDivElement>(null)

  const scrollProducts = (direction: -1 | 1) => {
    const track = productTrackRef.current
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
      aria-labelledby="products-heading"
      className="mx-auto w-[calc(100%-1.5rem)] max-w-[1600px] px-6 py-16 sm:w-[calc(100%-2rem)] sm:px-10 sm:py-20 lg:px-12 lg:py-24"
      id="products"
    >
      <div className="mb-8 flex items-center justify-between gap-4 sm:mb-10 lg:mb-11">
        <SectionHeading />
        <CarouselControls
          onPrevious={() => scrollProducts(-1)}
          onNext={() => scrollProducts(1)}
        />
      </div>
      <ProductCarousel trackRef={productTrackRef} />
    </section>
  )
}

export default Products
