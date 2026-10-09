import { FaArrowUp } from 'react-icons/fa6'

function LargeBrandText() {
  return (
    <div className="relative mx-auto w-[calc(100%-1.5rem)] max-w-[1600px] overflow-hidden px-4 sm:w-[calc(100%-2rem)] sm:px-10 lg:px-12">
      <p
        aria-hidden="true"
        className="translate-y-[13%] text-center text-[25vw] leading-[0.96] font-regular tracking-[-0.03em] text-white sm:text-[23vw] lg:text-[20vw]"
      >
        Agrone
      </p>
      <a
        className="absolute right-6 bottom-5 inline-flex items-center gap-2 rounded-full bg-agrone-lime py-1.5 pl-4 pr-1.5 text-sm font-medium text-agrone-green transition-colors hover:bg-white sm:right-12 sm:bottom-8 sm:py-2 sm:pl-5"
        href="#home"
      >
        <span>Scroll on Top</span>
        <span className="flex size-8 items-center justify-center rounded-full bg-agrone-green text-agrone-lime sm:size-9">
          <FaArrowUp aria-hidden="true" className="size-3.5" />
        </span>
      </a>
    </div>
  )
}

export default LargeBrandText
