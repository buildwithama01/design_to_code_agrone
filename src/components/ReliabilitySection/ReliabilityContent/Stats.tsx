import { FaFan, FaGaugeHigh } from 'react-icons/fa6'

const stats = [
  {
    title: 'Smooth Spreading',
    description:
      'Fully automatic and manual operation orchard mode variable rate application',
    icon: FaFan,
  },
  {
    title: '50 kg Payload',
    description:
      '75 L max capacity and an expanded loading gate for quick refills.',
    icon: FaGaugeHigh,
  },
]

function Stats() {
  return (
    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8">
      {stats.map(({ title, description, icon: Icon }) => (
        <article key={title}>
          <span className="flex size-12 items-center justify-center rounded-full bg-agrone-lime text-agrone-green">
            <Icon aria-hidden="true" className="size-5" />
          </span>
          <h3 className="mt-4 text-lg font-semibold text-agrone-green sm:text-xl">
            {title}
          </h3>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-agrone-green/75">
            {description}
          </p>
        </article>
      ))}
    </div>
  )
}

export default Stats
