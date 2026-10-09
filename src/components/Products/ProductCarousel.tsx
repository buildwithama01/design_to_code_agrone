import type { RefObject } from 'react'
import drone1Image from '../../assets/images/drone1.png'
import drone2Image from '../../assets/images/drone2.png'
import drone3Image from '../../assets/images/drone3.png'
import generator1Image from '../../assets/images/generator1.png'
import generator2Image from '../../assets/images/generator2.png'
import generator3Image from '../../assets/images/generator3.png'
import ProductCard, { type Product } from './ProductCard'

type ProductCarouselProps = {
  trackRef: RefObject<HTMLDivElement | null>
}

const products: Product[] = [
  {
    id: 'drone-1',
    name: 'DJI Agras T50',
    image: drone1Image,
    discount: '-20%',
    price: '$1,680',
    originalPrice: '$2,100',
    arrowColor: 'bg-agrone-lime',
  },
  {
    id: 'generator-3',
    name: 'Portable Station 2200 ',
    image: generator3Image,
    discount: '-30%',
    price: '$1,750',
    originalPrice: '$2,500',
    arrowColor: 'bg-agrone-cream',
  },
  {
    id: 'drone-3',
    name: 'DJI Mini 4 Pro',
    image: drone3Image,
    discount: '-25%',
    price: '$2,400',
    originalPrice: '$3,200',
    arrowColor: 'bg-agrone-cream',
  },
  {
    id: 'generator-1',
    name: 'Generator D6000i',
    image: generator1Image,
    discount: '-20%',
    price: '$1,200',
    originalPrice: '$1,500',
    arrowColor: 'bg-agrone-cream',
  },
  {
    id: 'drone-2',
    name: 'DJI Air 3',
    image: drone2Image,
    discount: '-25%',
    price: '$1,800',
    originalPrice: '$2,400',
    arrowColor: 'bg-agrone-cream',
  },
  {
    id: 'generator-2',
    name: 'Generator D7000i',
    image: generator2Image,
    discount: '-20%',
    price: '$1,440',
    originalPrice: '$1,800',
    arrowColor: 'bg-agrone-cream',
  },
]

function ProductCarousel({ trackRef }: ProductCarouselProps) {
  return (
    <div
      aria-label="Agrone products"
      className="feature-carousel-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 md:gap-5"
      ref={trackRef}
      role="list"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductCarousel
