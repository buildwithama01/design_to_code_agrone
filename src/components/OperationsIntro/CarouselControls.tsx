import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

type CarouselControlsProps = {
  onPrevious: () => void
  onNext: () => void
}

function CarouselControls({ onPrevious, onNext }: CarouselControlsProps) {
  return (
    <div className="mt-7 flex items-center gap-2">
      <button
        aria-label="Previous features"
        className="flex size-12 items-center justify-center rounded-full border border-agrone-green text-agrone-green transition-colors hover:bg-agrone-green hover:text-white"
        onClick={onPrevious}
        type="button"
      >
        <FaArrowLeft aria-hidden="true" className="size-4" />
      </button>
      <button
        aria-label="Next features"
        className="flex size-12 items-center justify-center rounded-full border border-agrone-green text-agrone-green transition-colors hover:bg-agrone-green hover:text-white"
        onClick={onNext}
        type="button"
      >
        <FaArrowRight aria-hidden="true" className="size-4" />
      </button>
    </div>
  )
}

export default CarouselControls
