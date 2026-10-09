import type { Dispatch, SetStateAction } from 'react'
import { whyFeatures } from './whyFeatures'

type SpecificationTableProps = {
  activeFeature: number
  onFeatureChange: Dispatch<SetStateAction<number>>
}

function SpecificationTable({
  activeFeature,
  onFeatureChange,
}: SpecificationTableProps) {
  return (
    <div
      aria-label="Agrone features"
      className="mb-3 flex flex-col gap-1 sm:mb-4 sm:gap-1.5"
      role="list"
    >
      {whyFeatures.map((feature, index) => {
        const isActive = index === activeFeature

        return (
          <button
            aria-controls="why-agrone-feature-video"
            aria-expanded={isActive}
            className={`grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-lg bg-white px-6 text-left text-agrone-green transition-[min-height,padding] duration-300 sm:px-8 ${
              isActive
                ? 'min-h-24 py-4 sm:min-h-28 sm:py-5'
                : 'min-h-10 py-3 sm:min-h-11 sm:py-3.5'
            }`}
            key={feature.title}
            onClick={() => onFeatureChange(index)}
            role="listitem"
            type="button"
          >
            <span className="min-w-0">
              <span className="block text-base font-medium sm:text-lg">
                {feature.title}
              </span>
              {isActive && (
                <>
                  <span className="mt-1 block max-w-xl text-sm leading-relaxed text-agrone-green/75 sm:text-base">
                    {feature.description}
                  </span>
                  <span className="mt-2 block text-sm font-semibold sm:mt-3 sm:text-base">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </>
              )}
            </span>
            {isActive ? (
              <img
                alt=""
                className="h-16 w-20 rounded-md object-cover sm:h-24 sm:w-32"
                src={feature.image}
              />
            ) : (
              <span className="text-base font-medium sm:text-lg">
                {String(index + 1).padStart(2, '0')}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}

export default SpecificationTable
