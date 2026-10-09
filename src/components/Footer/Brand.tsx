import { GiDeliveryDrone } from 'react-icons/gi'

function Brand() {
  return (
    <div>
      <a
        className="inline-flex items-center gap-2 text-2xl font-semibold text-agrone-lime"
        href="#home"
      >
        <GiDeliveryDrone aria-hidden="true" className="size-5" />
        <span>Agrone</span>
      </a>
      <p className="mt-5 max-w-[17rem] text-sm md:text-md leading-relaxed text-white/80">
        The easy way to create stunning videos, add subtitles and grow your
        audience.
      </p>
    </div>
  )
}

export default Brand
