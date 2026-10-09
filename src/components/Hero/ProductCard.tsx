import { FaArrowRight } from 'react-icons/fa6'
import { LuArrowUpRight } from 'react-icons/lu'
import NotchedSurface from '../NotchedSurface'

export type ProductCardProps = {
  title: string
  description: string
  image: string
  imageAlt: string
  actionLabel: string
  showActionArrow?: boolean
  actionLabelBackgroundColor?: string
  actionLabelTextColor?: string
  actionArrowBackgroundColor?: string
  actionArrowColor?: string
}

function ProductCard({
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
    <div className="relative h-72 w-full max-[520px]:h-auto">
      <NotchedSurface className="notched-surface relative z-0 flex h-full gap-6 bg-[#FBF3EA] p-3 max-[520px]:h-auto max-[520px]:flex-col max-[520px]:gap-3">
        <img
          src={image}
          alt={imageAlt || title}
          className="aspect-square h-full rounded-3xl object-cover max-[520px]:aspect-[1.7/1] max-[520px]:h-auto max-[520px]:w-full"
        />
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-3 pr-6 max-[520px]:px-2 max-[520px]:py-4">
          <h2 className="text-[1.625rem] font-semibold text-[#0F3D2A]">{title}</h2>
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
      </NotchedSurface>
      <a
        aria-label={`Explore ${title}`}
        className="absolute top-2 right-2 z-20 grid size-14 place-items-center rounded-full bg-[#7FC24A] text-[#0F3D2A] transition-transform hover:scale-105"
        href="#products"
      >
        <LuArrowUpRight aria-hidden="true" className="size-7" />
      </a>
    </div>
  )
}

export default ProductCard
