import { LuArrowUpRight } from 'react-icons/lu'
import NotchedSurface from '../NotchedSurface'

export type Product = {
  id: string
  name: string
  image: string
  discount: string
  price: string
  originalPrice: string
  arrowColor: 'bg-agrone-lime' | 'bg-agrone-cream'
}

type ProductCardProps = {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <article
      className="w-[min(82vw,340px)] shrink-0 snap-start"
      role="listitem"
    >
      <div className="relative">
        <NotchedSurface
          className="notched-surface notched-surface--product relative aspect-[1.14] overflow-hidden bg-agrone-cream"
          cutout="bottom-right"
        >
          <img
            alt={product.name}
            className="size-full object-contain p-5 sm:p-7"
            loading="lazy"
            src={product.image}
          />
          <span className="absolute top-4 right-4 rounded-full bg-[#f08b4f] px-3 py-1 text-xs font-medium text-white sm:text-sm">
            {product.discount}
          </span>
        </NotchedSurface>
        <button
          aria-label={`View ${product.name}`}
          className={`absolute right-2 bottom-2 flex size-11 items-center justify-center rounded-full ${product.arrowColor} text-agrone-green transition-transform hover:scale-105`}
          type="button"
        >
          <LuArrowUpRight aria-hidden="true" className="size-5" />
        </button>
      </div>
      <div className="mt-4 pr-1">
        <h3 className="text-lg leading-tight font-medium text-agrone-green sm:text-xl">
          {product.name}
        </h3>
        <div className="mt-2 flex items-center gap-2 text-sm sm:text-base">
          <span className="relative inline-flex text-agrone-green/60">
            <span className="absolute inset-x-0 top-1/2 h-[3px] -rotate-[12deg] bg-red-600" />
            {product.originalPrice}
          </span>
          <span className="font-semibold text-agrone-green">{product.price}</span>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
