import { useState } from 'react'
import featureDroneOne from '../../assets/images/features1.png'
import featureDroneTwo from '../../assets/images/features2.png'
import featureDroneThree from '../../assets/images/features3.png'
import DroneImage from './DroneImage'
import FeatureList from './FeatureList'
import SectionHeading from './SectionHeading'

const features = [
  {
    title: 'Magnetic Drive Impeller Pump',
    description:
      'Dual pump flow rate of up to 24 L/min. This is a 100% increase compared with the previous generation, to meet demands of fields, orchards, and high-temperature environments.',
    image: featureDroneOne,
    backgroundColor: '#f5ebe2',
    imageAlt: 'Agricultural drone with magnetic drive impeller pump',
  },
  {
    title: 'Dual Atomizing Centrifugal Sprinklers',
    description:
      'Dual atomizing centrifugal sprinklers deliver consistent, fine droplets for efficient coverage across a wide range of crops.',
    image: featureDroneTwo,
    backgroundColor: '#8bc652',
    imageAlt: 'Agricultural drone with dual atomizing centrifugal sprinklers',
  },
  {
    title: 'Brand-New Solenoid Valves',
    description:
      'Responsive solenoid valves provide precise flow control and reliable application from takeoff to landing.',
    image: featureDroneThree,
    backgroundColor: '#f5ebe2',
    imageAlt: 'Agricultural drone with brand-new solenoid valves',
  },
]

function AgriculturalFeatures() {
  const [activeFeature, setActiveFeature] = useState(0)
  const selectedFeature = features[activeFeature]

  return (
    <section
      aria-labelledby="agricultural-features-heading"
      className="mx-auto w-[calc(100%-1.5rem)] max-w-[1600px] px-6 py-16 sm:w-[calc(100%-2rem)] sm:px-10 sm:py-20 lg:px-12 lg:py-24"
      id="agricultural-features"
    >
      <SectionHeading />
      <div className="mt-12 grid items-center gap-10 md:grid-cols-2 lg:mt-16 lg:gap-16">
        <FeatureList
          activeFeature={activeFeature}
          features={features}
          onSelect={setActiveFeature}
        />
        <DroneImage
          backgroundColor={selectedFeature.backgroundColor}
          image={selectedFeature.image}
          imageAlt={selectedFeature.imageAlt}
        />
      </div>
    </section>
  )
}

export default AgriculturalFeatures
