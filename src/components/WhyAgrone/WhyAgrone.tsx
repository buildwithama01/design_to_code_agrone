import { useState } from 'react'
import FeatureImage from './FeatureImage'
import SectionHeading from './SectionHeading'
import SpecificationTable from './SpecificationTable'

function WhyAgrone() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section
      aria-labelledby="why-agrone-heading"
      className="relative mx-auto mb-16 mt-20 w-[calc(100%-1.5rem)] max-w-[1600px] pb-0 sm:mb-20 sm:mt-24 sm:w-[calc(100%-2rem)] lg:mb-24"
      id="why-agrone"
    >
      <SectionHeading />
      <div className="relative z-10 rounded-[1.75rem] bg-agrone-cream p-3 sm:rounded-[2rem] sm:p-5 md:p-6">
        <SpecificationTable
          activeFeature={activeFeature}
          onFeatureChange={setActiveFeature}
        />
        <FeatureImage activeFeature={activeFeature} />
      </div>
    </section>
  )
}

export default WhyAgrone
