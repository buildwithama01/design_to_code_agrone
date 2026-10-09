import { FaArrowRight, FaWheatAwn } from 'react-icons/fa6'
import { HiArrowLongRight } from "react-icons/hi2";

function HeroContent() {
  return (
    <div className="max-w-2xl text-white">
      <h1
        className="text-[3.25rem] leading-[0.98] font-normal tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-[clamp(5rem,7.8vw,7.5rem)]"
        id="hero-heading"
      >
        Part of future
        <span className="mt-1 flex items-center gap-3">
          Agriculture
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/80 sm:size-12">
            <FaWheatAwn aria-hidden="true" className="size-5 sm:size-6" />
          </span>
        </span>
      </h1>
      <a
        className="mt-8 inline-flex items-center gap-4 rounded-full border border-white/80 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-agrone-green"
        href="#products"
      >
        Shop All
        <HiArrowLongRight aria-hidden="true" className="size-7" />
      </a>
    </div>
  )
}

export default HeroContent
