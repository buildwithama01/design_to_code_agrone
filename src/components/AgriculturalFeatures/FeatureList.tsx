type Feature = {
  title: string
  description: string
}

type FeatureListProps = {
  features: Feature[]
  activeFeature: number
  onSelect: (index: number) => void
}

function FeatureList({
  features,
  activeFeature,
  onSelect,
}: FeatureListProps) {
  return (
    <div className="border-l border-agrone-green/25">
      {features.map(({ title, description }, index) => {
        const isActive = activeFeature === index

        return (
          <div
            className={`relative border-l-2 transition-colors ${
              isActive
                ? '-ml-px border-agrone-green'
                : '-ml-px border-transparent'
            }`}
            key={title}
          >
            <button
              aria-controls={`agricultural-feature-panel-${index}`}
              aria-expanded={isActive}
              className="w-full px-5 py-4 text-left text-lg font-medium text-agrone-green sm:text-xl"
              onClick={() => onSelect(index)}
              type="button"
            >
              {title}
            </button>
            <p
              className={`max-w-xl px-5 pb-5 text-sm leading-relaxed text-agrone-green/70 sm:text-base ${
                isActive ? '' : 'hidden'
              }`}
              id={`agricultural-feature-panel-${index}`}
            >
              {description}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default FeatureList
