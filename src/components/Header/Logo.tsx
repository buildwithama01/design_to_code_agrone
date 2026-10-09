import { GiDeliveryDrone } from 'react-icons/gi'

function Logo() {
  return (
    <a
      aria-label="Agrone home"
      className="flex shrink-0 items-center gap-2 rounded-full bg-white px-3 py-4 text-sm font-semibold tracking-tight text-agrone-green sm:px-4"
      href="#home"
    >
      <GiDeliveryDrone aria-hidden="true" className="size-5 text-agrone-lime" />
      <span>Agrone</span>
    </a>
  )
}

export default Logo
