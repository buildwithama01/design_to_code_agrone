import Description from './Description'
import Heading from './Heading'
import Stats from './Stats'

function ReliabilityContent() {
  return (
    <div className="flex flex-col gap-5 sm:gap-6">
      <Heading />
      <Description />
      <div className="mt-2">
        <Stats />
      </div>
    </div>
  )
}

export default ReliabilityContent
