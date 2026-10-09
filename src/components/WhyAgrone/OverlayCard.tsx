import { FaArrowRight, FaPause, FaPlay } from 'react-icons/fa6'
import NotchedSurface from '../NotchedSurface'

type OverlayCardProps = {
  isPlaying: boolean
  onTogglePlayback: () => void
}

function OverlayCard({
  isPlaying,
  onTogglePlayback,
}: OverlayCardProps) {
  return (
    <div className="absolute bottom-2.5 left-2.5 z-10 w-[16rem] sm:bottom-3 sm:left-3 sm:w-[18rem]">
      <div className="relative">
        <NotchedSurface className="notched-surface notched-surface--overlay min-h-40 bg-white p-5 pr-11 text-agrone-green sm:min-h-44 sm:p-6 sm:pr-12">
          <p className="line-clamp-3 min-h-16 text-lg leading-snug font-medium sm:text-xl">
            Spreader &amp; sprial channel spinning disk significantly
          </p>
          <div className="mt-4 flex items-center gap-2">
            <a
              className="inline-flex items-center rounded-full border border-agrone-green px-4 py-2 text-xs font-medium uppercase transition-colors hover:bg-agrone-green hover:text-white sm:text-sm"
              href="#products"
            >
              View More
            </a>
            <a
              aria-label="Explore Agrone products"
              className="flex size-10 items-center justify-center rounded-full bg-agrone-green text-agrone-lime sm:size-11"
              href="#products"
            >
              <FaArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </NotchedSurface>
        <button
          aria-label={isPlaying ? 'Pause feature video' : 'Play feature video'}
          className="absolute top-1.5 right-1.5 z-20 flex size-10 items-center justify-center rounded-full bg-agrone-lime text-agrone-green transition-transform hover:scale-105 sm:size-11"
          onClick={onTogglePlayback}
          type="button"
        >
          {isPlaying ? (
            <FaPause aria-hidden="true" className="size-3.5" />
          ) : (
            <FaPlay aria-hidden="true" className="ml-0.5 size-3.5" />
          )}
        </button>
      </div>
    </div>
  )
}

export default OverlayCard
