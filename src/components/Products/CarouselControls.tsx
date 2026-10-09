import { LuArrowLeft, LuArrowRight } from 'react-icons/lu'

type CarouselControlsProps = {
  onPrevious: () => void
  onNext: () => void
}

function CarouselControls({ onPrevious, onNext }: CarouselControlsProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        aria-label="Previous products"
        className="flex size-10 items-center justify-center rounded-full border border-agrone-green text-agrone-green transition-colors hover:bg-agrone-green hover:text-white sm:size-12"
        onClick={onPrevious}
        type="button"
      >
        <LuArrowLeft aria-hidden="true" className="size-5" />
      </button>
      <button
        aria-label="Next products"
        className="flex size-13 items-center justify-center rounded-full border border-agrone-green text-agrone-green transition-colors hover:bg-agrone-green hover:text-white sm:size-15"
        onClick={onNext}
        type="button"
      >
        <LuArrowRight aria-hidden="true" className="size-5" />
      </button>
    </div>
  )
}

export default CarouselControls
