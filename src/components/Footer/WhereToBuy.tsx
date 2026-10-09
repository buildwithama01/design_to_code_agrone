const stores = [
  'DJI Online Store',
  'Flagship Stores',
  'DJI-Operated Stores',
  'Retail Stores',
  'Enterprise Retailers',
  'Agricultural Drone Dealer',
]

function WhereToBuy() {
  return (
    <nav aria-label="Where to buy">
      <h2 className="mb-4 text-xl md:text-3xl font-medium">Where to Buy</h2>
      <ul className="space-y-2">
        {stores.map((label) => (
          <li key={label}>
            <a
              className="text-sm md:text-md text-white/75 transition-colors hover:text-agrone-lime"
              href="#contact"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default WhereToBuy
