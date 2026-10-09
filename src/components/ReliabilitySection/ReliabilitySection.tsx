import DroneImage from './DroneImage'
import ReliabilityContent from './ReliabilityContent/ReliabilityContent'

function ReliabilitySection() {
  return (
    <section
      aria-label="Reliability and durability"
      className="mx-auto grid w-[calc(100%-1.5rem)] max-w-[1600px] items-center gap-10 px-6 py-16 sm:w-[calc(100%-2rem)] sm:px-10 sm:py-20 md:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24"
      id="about"
    >
      <DroneImage />
      <ReliabilityContent />
    </section>
  )
}

export default ReliabilitySection
