const products = [
  'DJI Agras T50',
  'DJI Agras T25',
  'DJI Agras T20P',
  'DJI Agras T40',
  'DJI Agras T30',
  'DJI Agras T10',
  'DJI Mavic 3M',
]

function PopularProducts() {
  return (
    <nav aria-label="Popular products">
      <h2 className="mb-4 text-xl md:text-3xl font-medium">Popular Products</h2>
      <ul className="space-y-2">
        {products.map((label) => (
          <li key={label}>
            <a
              className=" text-sm md:text-md text-white/75 transition-colors hover:text-agrone-lime"
              href="#products"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default PopularProducts
