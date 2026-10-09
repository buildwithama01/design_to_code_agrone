import { FaArrowRight } from 'react-icons/fa6'
import type { ProductCardProps } from './ProductCard'

function ProductCard2({
  title,
  description,
  image,
  imageAlt,
  actionLabel,
  showActionArrow = false,
  actionLabelBackgroundColor,
  actionLabelTextColor,
  actionArrowBackgroundColor,
  actionArrowColor,
}: ProductCardProps) {
  return (
    <article className="flex h-72 w-full items-center gap-6 rounded-[32px] bg-[#FBF3EA] p-3 text-[#0F3D2A] max-[520px]:h-auto max-[520px]:flex-col max-[520px]:items-stretch max-[520px]:gap-3">
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-3 pl-2 max-[520px]:order-2 max-[520px]:px-2 max-[520px]:py-3">
        <h2 className="text-[1.625rem] font-semibold">{title}</h2>
        <p className="text-base text-gray-600">{description}</p>
        <div className="flex w-fit items-center">
          <a
            href="#products"
            className={`inline-flex min-h-11 items-center rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              actionLabelBackgroundColor
                ? 'rounded-r-full'
                : 'border border-[#0F3D2A] text-[#0F3D2A] hover:bg-[#0F3D2A] hover:text-white'
            } ${showActionArrow ? 'pr-5' : ''}`}
            style={{
              ...(actionLabelBackgroundColor && {
                backgroundColor: actionLabelBackgroundColor,
              }),
              ...(actionLabelTextColor && { color: actionLabelTextColor }),
            }}
          >
            {actionLabel}
          </a>
          {showActionArrow && (
            <div
              className="-ml-1 grid size-11 shrink-0 place-items-center rounded-full"
              style={{ backgroundColor: actionArrowBackgroundColor }}
            >
              <a
                aria-label={`Explore ${title}`}
                className="grid size-full place-items-center rounded-full transition-transform hover:scale-105"
                href="#products"
                style={{ color: actionArrowColor }}
              >
                <FaArrowRight aria-hidden="true" className="size-[22px]" />
              </a>
            </div>
          )}
        </div>
      </div>
      <img
        src={image}
        alt={imageAlt || title}
        className="aspect-square h-full rounded-3xl object-cover max-[520px]:order-1 max-[520px]:aspect-[1.7/1] max-[520px]:h-auto max-[520px]:w-full"
      />
    </article>
  )
}

export default ProductCard2
